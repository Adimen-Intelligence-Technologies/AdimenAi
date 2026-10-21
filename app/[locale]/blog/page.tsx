import { BlogPage } from "@/app/components/blog/BlogPage";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";
import { buildMetadata, buildBreadcrumbJsonLd, SITE_NAME } from "@/lib/seo";

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
  const tSeo = await getTranslations({ locale, namespace: "seo.blog" });
  const breadcrumbJsonLd = buildBreadcrumbJsonLd(locale as AppLocale, [
    { name: SITE_NAME, path: "/" },
    { name: tSeo("title"), path: "/blog" },
  ]);

  return (
    <>
      <JsonLd data={breadcrumbJsonLd} />
      <BlogPage locale={locale} />
    </>
  );
}
