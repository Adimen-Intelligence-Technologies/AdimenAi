"use client";

import { Button } from "./Button";
import { Wrapper } from "../Wrapper";
import { HeroBackgroundImage } from "./HeroBackgroundImage";

import { useLocale, useTranslations } from "next-intl";
import { toLocalePath } from "@/lib/locale-path";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  return (
    <section className="relative flex items-center justify-center border-b border-zinc-200">
      <Wrapper className="border-x-0  border-zinc-200 ">
        <div className="relative overflow-hidden px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 border-x border-zinc-200">
          <HeroBackgroundImage />
          <div className="absolute inset-0" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center px-2 sm:px-6 lg:px-20 xl:px-30">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tight leading-tight text-balance animate-hero-fade"
              style={{ animationDelay: "0.2s" }}
            >
              {t("title")}
            </h1>
            <p
              className="max-w-3xl text-xl sm:text-lg text-black leading-tight animate-hero-fade"
              style={{ animationDelay: "0.35s" }}
            >
              {t("description")}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 mt-8 animate-hero-fade"
              style={{ animationDelay: "0.5s" }}
            >
              <Button href="tel:+34650609028" color="purple">
                {t("ctaPrimary")}
              </Button>
              <Button href={toLocalePath(locale, "/#servicios")} color="white">
                {t("ctaSecondary")}
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
