import type { Metadata } from "next";
import { routing, type AppLocale } from "@/i18n/routing";
import { toLocalePath } from "@/lib/locale-path";

export const SITE_URL = "https://www.adimenai.com";
export const SITE_NAME = "AdimenAI";
export const DEFAULT_OG_IMAGE = "/logo/adimenai-logo.png";

const OG_LOCALE_MAP: Record<AppLocale, string> = {
  es: "es_ES",
  en: "en_US",
  eu: "eu_ES",
};

function absoluteUrl(path: string): string {
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}

type BuildMetadataOptions = {
  locale: AppLocale;
  path: string;
  title: string;
  description: string;
  ogImage?: string;
  type?: "website" | "article";
  publishedTime?: string;
};

export function buildMetadata({
  locale,
  path,
  title,
  description,
  ogImage,
  type = "website",
  publishedTime,
}: BuildMetadataOptions): Metadata {
  const canonical = absoluteUrl(toLocalePath(locale, path));
  const image = absoluteUrl(ogImage ?? DEFAULT_OG_IMAGE);

  const languages: Record<string, string> = {};
  for (const loc of routing.locales) {
    languages[loc] = absoluteUrl(toLocalePath(loc, path));
  }
  languages["x-default"] = absoluteUrl(toLocalePath(routing.defaultLocale, path));

  return {
    title: { absolute: title },
    description,
    alternates: {
      canonical,
      languages,
    },
    openGraph: {
      title,
      description,
      url: canonical,
      siteName: SITE_NAME,
      locale: OG_LOCALE_MAP[locale],
      type,
      images: [{ url: image }],
      ...(type === "article" && publishedTime ? { publishedTime } : {}),
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
