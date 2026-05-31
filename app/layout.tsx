import type { Metadata } from "next";
import { Lato, Inter } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getLocale, getMessages } from "next-intl/server";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ChromeLayout } from "./components/ChromeLayout";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AdimenAI",
  description: "Automatiza tu negocio con AdimenAI, la plataforma de inteligencia artificial que transforma tus datos en decisiones inteligentes. Optimiza procesos, mejora la eficiencia y toma decisiones informadas con nuestras soluciones de IA personalizadas.",
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html className={cn("h-full", "antialiased", lato.variable, "font-sans", inter.variable)}>
      <body className="min-h-full flex min-h-screen flex-col bg-zinc-50 text-zinc-900 font-sans">
        <NextIntlClientProvider locale={locale} messages={messages}>
          <ChromeLayout>{children}</ChromeLayout>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
