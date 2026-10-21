"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { toLocalePath } from "@/lib/locale-path";
import { SITE_URL } from "@/lib/seo";

// WebMCP (https://developer.chrome.com/docs/ai/webmcp/imperative-api) lets in-browser AI agents
// call these tools instead of scraping the page. The API is an origin trial and still changing,
// so everything is feature-detected and failures are swallowed: unsupported browsers get nothing.

type JsonSchema = Record<string, unknown>;

interface WebMcpTool {
  name: string;
  description: string;
  inputSchema: JsonSchema;
  annotations?: {
    readOnlyHint?: boolean;
    consequentialHint?: boolean;
    untrustedContentHint?: boolean;
  };
  execute: (input: Record<string, unknown>, client?: { signal?: AbortSignal }) => Promise<string>;
}

interface ModelContext {
  registerTool: (tool: WebMcpTool, options?: { signal?: AbortSignal }) => Promise<void> | void;
}

function getModelContext(): ModelContext | null {
  // `navigator.modelContext` was the name in early previews; current docs use `document.modelContext`.
  const candidate =
    (document as unknown as { modelContext?: ModelContext }).modelContext ??
    (navigator as unknown as { modelContext?: ModelContext }).modelContext;
  return candidate && typeof candidate.registerTool === "function" ? candidate : null;
}

type PostSummary = {
  slug: string;
  title: string;
  excerpt: string;
  tags: string[];
  publishedAt: string;
  url: string;
};

const indexCache = new Map<string, Promise<PostSummary[]>>();

function loadBlogIndex(locale: string): Promise<PostSummary[]> {
  let cached = indexCache.get(locale);
  if (!cached) {
    cached = fetch(`/api/blog/${locale}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.json() as Promise<{ posts: PostSummary[] }>;
      })
      .then((data) => data.posts)
      .catch((error) => {
        indexCache.delete(locale);
        throw error;
      });
    indexCache.set(locale, cached);
  }
  return cached;
}

function normalize(value: string): string {
  return value.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
}

function absolute(path: string): string {
  return `${SITE_URL}${path}`;
}

const CONTACT_SUBJECTS = [
  "ai-automation",
  "web-presence",
  "digital-marketing",
  "graphic-solutions",
  "management-software",
  "herrikonekt-apps",
  "pos",
  "other",
] as const;

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

function asString(value: unknown): string {
  return typeof value === "string" ? value.trim() : "";
}

export function WebMcpTools() {
  const locale = useLocale();
  const tNav = useTranslations("nav");

  useEffect(() => {
    const modelContext = getModelContext();
    if (!modelContext) return;

    const services = [
      {
        id: "ai-automation",
        name: tNav("aiAutomation"),
        description: tNav("aiAutomationDesc"),
        includes: [tNav("aiAutomationRpa"), tNav("aiAutomationChatbots"), tNav("aiAutomationCrm")],
      },
      {
        id: "web-presence",
        name: tNav("webPresence"),
        description: tNav("webPresenceDesc"),
        includes: [
          tNav("webPresenceWebsites"),
          tNav("webPresenceEcommerce"),
          tNav("webPresencePhotography"),
          tNav("webPresenceSocialMedia"),
        ],
      },
      {
        id: "digital-marketing",
        name: tNav("digitalMarketing"),
        description: tNav("digitalMarketingDesc"),
        includes: [tNav("digitalMarketingSeo"), tNav("digitalMarketingSem"), tNav("digitalMarketingAds")],
      },
      {
        id: "graphic-solutions",
        name: tNav("graphicSolutions"),
        description: tNav("graphicSolutionsDesc"),
        includes: [
          tNav("graphicSolutionsDesign"),
          tNav("graphicSolutionsBusinessCards"),
          tNav("graphicSolutionsGuestBooks"),
          tNav("graphicSolutionsStationery"),
          tNav("graphicSolutionsMerchandising"),
        ],
      },
      {
        id: "management-software",
        name: tNav("managementSoftware"),
        description: tNav("managementSoftwareDesc"),
        includes: [
          tNav("managementSoftwareRetail"),
          tNav("managementSoftwareHospitality"),
          tNav("managementSoftwareFood"),
          tNav("managementSoftwareBeauty"),
        ],
        url: absolute(toLocalePath(locale, "/hosteleria")),
      },
      {
        id: "herrikonekt-apps",
        name: tNav("herrikonektApps"),
        description: tNav("herrikonektAppsDesc"),
        includes: [tNav("herrikonektAppsAndroid"), tNav("herrikonektAppsIos")],
        url: "https://www.herrikonekt.com",
      },
    ];

    const tools: WebMcpTool[] = [
      {
        name: "search_blog_posts",
        description:
          "Search AdimenAI's blog (AI, automation, websites, SEO, POS and small-business management articles). " +
          "Returns matching posts with slug, title, excerpt, tags, date and URL. Omit `query` to get the latest posts.",
        inputSchema: {
          type: "object",
          properties: {
            query: { type: "string", description: "Keywords to search in titles, excerpts and tags." },
            tag: { type: "string", description: "Only return posts with this tag, e.g. \"IA\" or \"TPV\"." },
            limit: { type: "number", description: "Maximum number of results (1-20, default 5)." },
          },
        },
        annotations: { readOnlyHint: true },
        async execute(input) {
          const posts = await loadBlogIndex(locale);
          const terms = normalize(asString(input.query)).split(/\s+/).filter(Boolean);
          const tag = normalize(asString(input.tag));
          const limit = Math.min(20, Math.max(1, Number(input.limit) || 5));

          const results = posts
            .filter((post) => !tag || post.tags.some((postTag) => normalize(postTag) === tag))
            .map((post) => {
              const title = normalize(post.title);
              const tags = normalize(post.tags.join(" "));
              const excerpt = normalize(post.excerpt);
              const score = terms.reduce(
                (acc, term) =>
                  acc + (title.includes(term) ? 3 : 0) + (tags.includes(term) ? 2 : 0) + (excerpt.includes(term) ? 1 : 0),
                0
              );
              return { post, score };
            })
            .filter(({ score }) => terms.length === 0 || score > 0)
            .sort((a, b) => b.score - a.score)
            .slice(0, limit)
            .map(({ post }) => ({ ...post, url: absolute(post.url) }));

          return JSON.stringify({ count: results.length, results });
        },
      },
      {
        name: "get_blog_post",
        description:
          "Get the full Markdown content of an AdimenAI blog post by its slug (use search_blog_posts to find slugs).",
        inputSchema: {
          type: "object",
          properties: {
            slug: { type: "string", description: "Post slug, e.g. \"agentes-ia-empresas-casos\"." },
          },
          required: ["slug"],
        },
        annotations: { readOnlyHint: true },
        async execute(input, client) {
          const slug = asString(input.slug);
          if (!/^[a-z0-9-]+$/.test(slug)) return "Invalid slug.";

          const res = await fetch(`/api/blog/${locale}/${slug}`, { signal: client?.signal });
          if (res.status === 404) return `No blog post found with slug "${slug}".`;
          if (!res.ok) return `Could not load the post (HTTP ${res.status}).`;

          const post = (await res.json()) as PostSummary & { content: string };
          return JSON.stringify({ ...post, url: absolute(post.url) });
        },
      },
      {
        name: "list_services",
        description:
          "List the services AdimenAI offers (AI and automation, web, digital marketing, graphic design, " +
          "management software/POS, mobile apps) plus contact details. Service ids can be used as `subject` in send_contact_request.",
        inputSchema: { type: "object", properties: {} },
        annotations: { readOnlyHint: true },
        async execute() {
          return JSON.stringify({
            company: "AdimenAI",
            location: "Elgoibar, Gipuzkoa (Spain)",
            email: "info@adimenai.com",
            phone: "+34 650 60 90 28",
            contactPage: absolute(toLocalePath(locale, "/contacto")),
            services,
          });
        },
      },
      {
        name: "send_contact_request",
        description:
          "Send a contact request to the AdimenAI team, who reply by email. This sends a real message: " +
          "only call it after the user has reviewed and explicitly confirmed their name, email and message.",
        inputSchema: {
          type: "object",
          properties: {
            name: { type: "string", description: "Full name of the person or company contact." },
            email: { type: "string", description: "Email address where AdimenAI should reply." },
            phone: { type: "string", description: "Optional phone number." },
            subject: {
              type: "string",
              enum: [...CONTACT_SUBJECTS],
              description: "Topic of the request (service id from list_services, \"pos\" or \"other\").",
            },
            message: { type: "string", description: "What the user needs (at least 10 characters)." },
          },
          required: ["name", "email", "message"],
        },
        annotations: { readOnlyHint: false, consequentialHint: true },
        async execute(input, client) {
          const name = asString(input.name);
          const email = asString(input.email);
          const phone = asString(input.phone);
          const message = asString(input.message);
          const subject = (CONTACT_SUBJECTS as readonly string[]).includes(asString(input.subject))
            ? asString(input.subject)
            : "other";

          if (!name) return "Error: `name` is required.";
          if (!EMAIL_RE.test(email)) return "Error: `email` is not a valid email address.";
          if (message.length < 10) return "Error: `message` must be at least 10 characters.";

          const res = await fetch("/api/contact", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ name, email, phone, subject, message, website: "" }),
            signal: client?.signal,
          });

          if (res.ok) {
            return "Contact request sent. The AdimenAI team will reply to the provided email, usually within 24 hours.";
          }
          if (res.status === 429) {
            return "Too many requests from this connection. Ask the user to try again in a few minutes or email info@adimenai.com.";
          }
          const data = (await res.json().catch(() => null)) as { error?: string } | null;
          return `Could not send the request (${data?.error ?? `HTTP ${res.status}`}). The user can email info@adimenai.com instead.`;
        },
      },
    ];

    const controller = new AbortController();
    for (const tool of tools) {
      Promise.resolve()
        .then(() => modelContext.registerTool(tool, { signal: controller.signal }))
        .catch((error) => console.warn(`[webmcp] Could not register "${tool.name}"`, error));
    }

    return () => controller.abort();
  }, [locale, tNav]);

  return null;
}
