"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Button } from "./Button";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { toLocalePath } from "@/lib/locale-path";

type Status = "idle" | "sending" | "success" | "error";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

export function ContactForm() {
  const t = useTranslations("contactForm");
  const tNav = useTranslations("nav");
  const locale = useLocale();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [website, setWebsite] = useState("");
  const [status, setStatus] = useState<Status>("idle");
  const [errorCode, setErrorCode] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (status === "sending") return;

    if (!name.trim() || !email.trim() || message.trim().length < 10) {
      setErrorCode("validation");
      setStatus("error");
      return;
    }
    if (!EMAIL_RE.test(email.trim())) {
      setErrorCode("email");
      setStatus("error");
      return;
    }

    setStatus("sending");
    setErrorCode(null);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, subject, message, website }),
      });

      if (res.ok) {
        setStatus("success");
        setName("");
        setEmail("");
        setPhone("");
        setSubject("");
        setMessage("");
        setWebsite("");
        return;
      }

      const data = (await res.json().catch(() => null)) as
        | { ok: false; error?: string }
        | null;
      setErrorCode(data?.error ?? "send_failed");
      setStatus("error");
    } catch {
      setErrorCode("network");
      setStatus("error");
    }
  }

  function errorMessage(): string {
    switch (errorCode) {
      case "validation":
        return t("errorValidation");
      case "email":
        return t("errorEmail");
      case "rate_limited":
        return t("errorRateLimit");
      case "network":
        return t("errorNetwork");
      default:
        return t("errorGeneric");
    }
  }

  if (status === "success") {
    return (
      <div className="relative overflow-hidden rounded border border-white/20 bg-white/20">
        <div className="absolute inset-x-0 top-0 h-2 opacity-80 blur-xl" />
        <div className="relative px-6 py-12 sm:px-10 sm:py-16 text-center">
          <CheckCircle2 className="mx-auto h-12 w-12 text-[#6C47FF]" aria-hidden="true" />
          <h3 className="mt-4 text-2xl font-semibold tracking-tight text-zinc-900">
            {t("successTitle")}
          </h3>
          <p className="mt-2 text-sm text-zinc-700 tracking-tight">
            {t("successMessage")}
          </p>
        </div>
      </div>
    );
  }

  const isSending = status === "sending";

  return (
    <div className="relative overflow-hidden rounded border border-white/20 bg-white/20 ">
      <div className="absolute inset-x-0 top-0 h-2 opacity-80 blur-xl" />
      <div className="relative px-6 py-8 sm:px-10 sm:py-10">
        <form className="grid gap-3" onSubmit={handleSubmit} noValidate>
          <div className="grid gap-3 md:grid-cols-2">
            <label className="flex flex-col text-sm font-semibold text-zinc-900 tracking-tight">
              {t("name")}
              <input
                type="text"
                name="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                disabled={isSending}
                placeholder={t("namePlaceholder")}
                className="min-h-13 border-b border-zinc-300 bg-transparent text-zinc-900 outline-none transition focus:border-b-[#7252FF] focus:ring-0 disabled:opacity-50"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold text-zinc-900 tracking-tight">
              {t("email")}
              <input
                type="email"
                name="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={isSending}
                placeholder={t("emailPlaceholder")}
                className="min-h-13 border-b border-zinc-300 bg-transparent text-zinc-900 outline-none transition focus:border-b-[#7252FF] focus:ring-0 disabled:opacity-50"
              />
            </label>
          </div>

          <label className="flex flex-col text-sm font-semibold text-zinc-900 tracking-tight">
            {t("phone")}
            <input
              type="tel"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              disabled={isSending}
              placeholder={t("phonePlaceholder")}
              className="min-h-13 border-b border-zinc-300 bg-transparent text-zinc-900 outline-none transition focus:border-b-[#7252FF] focus:ring-0 disabled:opacity-50"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900 tracking-tight">
            {t("subject")}
            <div className="relative">
              <select
                name="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                disabled={isSending}
                className="min-h-13 w-full appearance-none border-b border-zinc-300 bg-transparent py-1 pr-8 text-sm text-zinc-900 outline-none transition focus:border-b-[#7252FF] focus:ring-0 disabled:opacity-50"
              >
                <option value="">{t("subjectPlaceholder")}</option>
                <option value="ai-automation">{tNav("aiAutomation")}</option>
                <option value="web-presence">{tNav("webPresence")}</option>
                <option value="digital-marketing">{tNav("digitalMarketing")}</option>
                <option value="graphic-solutions">{tNav("graphicSolutions")}</option>
                <option value="management-software">{tNav("managementSoftware")}</option>
                <option value="herrikonekt-apps">{tNav("herrikonektApps")}</option>
                <option value="pos">{t("subjectPos")}</option>
                <option value="other">{t("subjectOther")}</option>
              </select>
              <svg
                aria-hidden="true"
                viewBox="0 0 20 20"
                className="pointer-events-none absolute right-1 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M5 8l5 5 5-5" />
              </svg>
            </div>
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900 tracking-tight">
            {t("message")}
            <textarea
              name="message"
              rows={6}
              required
              minLength={10}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              disabled={isSending}
              placeholder={t("messagePlaceholder")}
              className="min-h-3 border-b border-zinc-300 bg-transparent tracking-tight  text-sm text-zinc-900  outline-none transition focus:border-b-[#7252FF] focus:ring-0 disabled:opacity-50"
            />
          </label>

          <div aria-hidden="true" className="absolute -left-[9999px] top-auto h-0 w-0 overflow-hidden">
            <label>
              Website
              <input
                type="text"
                name="website"
                tabIndex={-1}
                autoComplete="off"
                value={website}
                onChange={(e) => setWebsite(e.target.value)}
              />
            </label>
          </div>

          {status === "error" && (
            <div
              role="alert"
              className="flex items-start gap-2 rounded-lg border border-red-200 bg-red-50/80 px-3 py-2 text-sm text-red-800"
            >
              <AlertCircle className="mt-0.5 h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{errorMessage()}</span>
            </div>
          )}

          <Button
            type="submit"
            color="purple"
            disabled={isSending}
            className="tracking-tight h-14 px-8 text-sm disabled:opacity-60 disabled:cursor-not-allowed"
          >
            {isSending ? t("sending") : t("submit")}
          </Button>

          <p className="text-center text-sm text-zinc-600 tracking-tight">
            {t("legalPrefix")}{" "}
            <Link
              href={toLocalePath(locale, "/privacidad")}
              className="text-[#7252FF] font-bold underline-offset-2 hover:underline focus:outline-none focus-visible:underline"
            >
              {t("legalPrivacy")}
            </Link>{" "}
            {t("legalSuffix")}
          </p>
        </form>
      </div>
    </div>
  );
}
