import type { Metadata } from "next";
import { Lato, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import { GoogleAnalytics } from "@next/third-parties/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ChromeLayout } from "./components/ChromeLayout";
import { JsonLd } from "./components/seo/JsonLd";
import { SITE_NAME, SITE_URL, DEFAULT_OG_IMAGE } from "@/lib/seo";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: SITE_NAME,
  url: SITE_URL,
  logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
  email: "info@adimenai.com",
  telephone: "+34650609028",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Elgoibar",
    addressRegion: "Gipuzkoa",
    addressCountry: "ES",
  },
};

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description: "Automatiza tu negocio con AdimenAI, la plataforma de inteligencia artificial que transforma tus datos en decisiones inteligentes. Optimiza procesos, mejora la eficiencia y toma decisiones informadas con nuestras soluciones de IA personalizadas.",
  openGraph: {
    siteName: SITE_NAME,
    images: [{ url: DEFAULT_OG_IMAGE }],
  },
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} className={cn("h-full", "antialiased", lato.variable, "font-sans", inter.variable)}>
      <body className="min-h-full flex min-h-screen flex-col bg-zinc-50 text-zinc-900 font-sans">
        <JsonLd data={organizationJsonLd} />
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ChromeLayout>{children}</ChromeLayout>
        </NextIntlClientProvider>
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID && (
          <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} />
        )}
      </body>
    </html>
  );
}
