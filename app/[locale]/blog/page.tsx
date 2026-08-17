import { BlogPage } from "@/app/components/blog/BlogPage";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";
import { buildMetadata } from "@/lib/seo";

type Props = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.blog" });
  return buildMetadata({
    locale: locale as AppLocale,
    path: "/blog",
    title: t("title"),
    description: t("description"),
  });
}

export default async function LocaleBlogPage({ params }: Props) {
  const { locale } = await params;
  return <BlogPage locale={locale} />;
}
