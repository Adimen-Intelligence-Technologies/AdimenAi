import { getTranslations } from "next-intl/server";
import type { Metadata } from "next";
import type { AppLocale } from "@/i18n/routing";
import { buildMetadata, buildBreadcrumbJsonLd, SITE_NAME, SITE_URL } from "@/lib/seo";
import { toLocalePath } from "@/lib/locale-path";
import { JsonLd } from "@/app/components/seo/JsonLd";
import { WebDesignHero } from "@/app/components/web-design/WebDesignHero";
import { WebDesignPainPoints } from "@/app/components/web-design/WebDesignPainPoints";
import { WebDesignFeatures } from "@/app/components/web-design/WebDesignFeatures";
import { WebDesignProcess } from "@/app/components/web-design/WebDesignProcess";
import { WebDesignPlans } from "@/app/components/web-design/WebDesignPlans";
import { WebDesignRelatedPosts } from "@/app/components/web-design/WebDesignRelatedPosts";
import { SerpMockup } from "@/app/components/web-design/SerpMockup";
import { InfoSection } from "@/app/components/ui/InfoSection";
import { CtaSection } from "@/app/components/ui/CtaSection";
import { FaqSection } from "@/app/components/ui/FaqSection";
import { ContactBlock } from "@/app/components/ui/ContactBlock";

const PATH = "/diseno-web";
const PRICE_GUIDE_SLUG = "cuanto-cuesta-pagina-web-espana-2026";
const RELATED_POST_SLUGS = [PRICE_GUIDE_SLUG, "web-seo-local-roto", "agencia-seo-gipuzkoa-elegir"];
const FAQ_COUNT = 6;

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.webDesign" });
  return buildMetadata({
    locale: locale as AppLocale,
    path: PATH,
    title: t("title"),
    description: t("description"),
  });
}

export default async function WebDesignPage({ params }: Props) {
  const { locale: rawLocale } = await params;
  const locale = rawLocale as AppLocale;
  const t = await getTranslations({ locale, namespace: "webDesignPage" });
  const tSeo = await getTranslations({ locale, namespace: "seo.webDesign" });

  const breadcrumbJsonLd = buildBreadcrumbJsonLd(locale, [
    { name: SITE_NAME, path: "/" },
    { name: t("breadcrumb"), path: PATH },
  ]);

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: t("breadcrumb"),
    serviceType: t("breadcrumb"),
    description: tSeo("description"),
    url: `${SITE_URL}${toLocalePath(locale, PATH)}`,
    provider: {
      "@type": "LocalBusiness",
      name: SITE_NAME,
      url: SITE_URL,
      telephone: "+34650609028",
      email: "info@adimenai.com",
      address: {
        "@type": "PostalAddress",
        addressLocality: "Elgoibar",
        addressRegion: "Gipuzkoa",
        addressCountry: "ES",
      },
    },
    areaServed: [
      { "@type": "AdministrativeArea", name: "Gipuzkoa" },
      { "@type": "AdministrativeArea", name: "Euskadi" },
      { "@type": "Country", name: "España" },
    ],
  };

  const faqJsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: Array.from({ length: FAQ_COUNT }, (_, index) => ({
      "@type": "Question",
      name: t(`faq.items.${index}.question`),
      acceptedAnswer: { "@type": "Answer", text: t(`faq.items.${index}.answer`) },
    })),
  };

  return (
    <div className="flex flex-col">
      <JsonLd data={breadcrumbJsonLd} />
      <JsonLd data={serviceJsonLd} />
      <JsonLd data={faqJsonLd} />

      <WebDesignHero />
      <WebDesignPainPoints />
      <WebDesignFeatures />
      <InfoSection
        id="seo"
        eyebrow={t("seo.eyebrow")}
        title={t("seo.title")}
        subtitle={t("seo.subtitle")}
        text={t("seo.text")}
        items={[t("seo.items.0"), t("seo.items.1"), t("seo.items.2"), t("seo.items.3"), t("seo.items.4")]}
        imageAlt=""
        media={<SerpMockup />}
        buttonLabel={t("seo.button")}
        buttonHref="#contacto"
      />
      <WebDesignProcess />
      <WebDesignPlans priceGuideSlug={PRICE_GUIDE_SLUG} />
      <CtaSection namespace="webDesignPage.cta" id="llamanos" />
      <WebDesignRelatedPosts locale={locale} slugs={RELATED_POST_SLUGS} />
      <FaqSection namespace="webDesignPage.faq" count={FAQ_COUNT} />
      <ContactBlock defaultSubject="web-presence" />
    </div>
  );
}
