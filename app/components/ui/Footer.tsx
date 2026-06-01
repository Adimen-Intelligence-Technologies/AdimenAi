"use client";

import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { Wrapper } from "../Wrapper";
import { toLocalePath } from "@/lib/locale-path";

export function Footer() {
  const t = useTranslations("footerSection");
  const locale = useLocale();
  const pages = [
    { label: t("pages.home"), href: toLocalePath(locale, "/") },
    { label: t("pages.services"), href: toLocalePath(locale, "/#servicios") },
    { label: t("pages.commerce"), href: toLocalePath(locale, "/#comercios") },
    { label: t("pages.useCases"), href: toLocalePath(locale, "/#casos-de-uso") },
  ];

  const otherPages = [
    { label: t("other.blog"), href: toLocalePath(locale, "/blog") },
    { label: t("other.cookies"), href: "/seleccionar-cookies" },
    { label: t("other.privacy"), href: "/privacidad" },
  ];

  const contactItems = [
    { label: "info@adimenai.com", href: "mailto:info@adimenai.com" },
    { label: "+34 612 345 678", href: "tel:+34612345678" },
    { label: t("contact.office"), href: "/contactar" },
  ];

  return (
    <footer className="border-t border-zinc-200 bg-white text-zinc-700">
      <Wrapper className="px-4 py-15 sm:px-6 lg:px-10">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
          <div className="max-w-xs">
            <Link href={toLocalePath(locale, "/")} aria-label="AdimenAI" className="inline-flex items-center">
              <Image
                src="/logo/adimenai-logo.png"
                alt="AdimenAI"
                width={280}
                height={32}
                className="object-contain h-8 sm:h-9 md:h-10"
              />
            </Link>
          </div>

          <div className="grid flex-1 grid-cols-1 gap-6 sm:grid-cols-3 lg:ml-16">
            <div>
              <h3 className="text-xl font-semibold  text-zinc-900">{t("sections.pages")}</h3>
              <ul className="mt-2 text-base text-zinc-600">
                {pages.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition-colors hover:text-black">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold  text-zinc-900">{t("sections.other")}</h3>
              <ul className="mt-2 text-base text-zinc-600">
                {otherPages.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition-colors hover:text-black">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-semibold  text-zinc-900">{t("sections.contact")}</h3>
              <ul className="mt-2 text-base text-zinc-600">
                {contactItems.map((item) => (
                  <li key={item.label}>
                    <Link href={item.href} className="transition-colors hover:text-black break-all">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Wrapper>

      <div className="border-t border-zinc-200 bg-zinc-50">
        <Wrapper className="flex flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-10">
          <div className="flex items-center gap-3 text-base text-black">
            
            <span>© 2026 <span className="font-bold">Adimen</span>AI</span>
          </div>

          <div className="text-xl text-black">
            {t("builtBy")} <Link href="https://www.studiokronos.es" target="_blank" rel="noreferrer" className="font-bold transition-colors hover:text-zinc-900">
              Studio Kronos
            </Link>
          </div>
        </Wrapper>
      </div>
    </footer>
  );
}
