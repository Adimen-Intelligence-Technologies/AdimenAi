import { NextResponse, type NextRequest } from "next/server";
import { sendContactEmail, type ContactPayload } from "@/lib/mailer";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

const RATE_LIMIT_WINDOW_MS = 10 * 60 * 1000;
const RATE_LIMIT_MAX = 5;
const MAX_NAME = 120;
const MAX_EMAIL = 254;
const MAX_PHONE = 40;
const MAX_SUBJECT = 120;
const MAX_MESSAGE = 5000;

type Bucket = { count: number; resetAt: number };
const buckets = new Map<string, Bucket>();

function getClientIp(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-for");
  if (forwarded) {
    const first = forwarded.split(",")[0]?.trim();
    if (first) return first;
  }
  const real = request.headers.get("x-real-ip");
  if (real) return real;
  return "unknown";
}

function checkRateLimit(ip: string): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now();
  const bucket = buckets.get(ip);

  if (!bucket || now > bucket.resetAt) {
    buckets.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfterSec: 0 };
  }

  if (bucket.count >= RATE_LIMIT_MAX) {
    return {
      allowed: false,
      retryAfterSec: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  bucket.count += 1;
  return { allowed: true, retryAfterSec: 0 };
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function isValidEmail(value: string): boolean {
  if (!value || value.length > MAX_EMAIL) return false;
  return EMAIL_RE.test(value);
}

function clean(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

export async function POST(request: NextRequest) {
  const ip = getClientIp(request);
  const limit = checkRateLimit(ip);
  if (!limit.allowed) {
    return NextResponse.json(
      { ok: false, error: "rate_limited" },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSec) },
      },
    );
  }

  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { ok: false, error: "invalid_json" },
      { status: 400 },
    );
  }

  const honeypot = clean(body.website, 200);
  if (honeypot.length > 0) {
    return NextResponse.json({ ok: true }, { status: 200 });
  }

  const payload: ContactPayload = {
    name: clean(body.name, MAX_NAME),
    email: clean(body.email, MAX_EMAIL).toLowerCase(),
    phone: clean(body.phone, MAX_PHONE),
    subject: clean(body.subject, MAX_SUBJECT),
    message: clean(body.message, MAX_MESSAGE),
  };

  if (!payload.name) {
    return NextResponse.json({ ok: false, error: "name_required" }, { status: 400 });
  }
  if (!isValidEmail(payload.email)) {
    return NextResponse.json({ ok: false, error: "email_invalid" }, { status: 400 });
  }
  if (payload.message.length < 10) {
    return NextResponse.json({ ok: false, error: "message_too_short" }, { status: 400 });
  }
  if (payload.message.length > MAX_MESSAGE) {
    return NextResponse.json({ ok: false, error: "message_too_long" }, { status: 400 });
  }

  if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
    console.error("[contact] GMAIL_USER / GMAIL_APP_PASSWORD no configuradas");
    return NextResponse.json(
      { ok: false, error: "mailer_misconfigured" },
      { status: 500 },
    );
  }

  try {
    await sendContactEmail(payload);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Error enviando email:", err);
    return NextResponse.json(
      { ok: false, error: "send_failed" },
      { status: 500 },
    );
  }
}
