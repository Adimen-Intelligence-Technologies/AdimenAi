"use client";

import { Button } from "./Button";
import { Wrapper } from "../Wrapper";
import { Zap, Wallet, TrendingUp } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { toLocalePath } from "@/lib/locale-path";

export function Hero() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const stats = [
    { icon: Zap, label: t("stats.processes") },
    { icon: Wallet, label: t("stats.operations") },
    { icon: TrendingUp, label: t("stats.call") },
  ];

  return (
    <section className="relative flex items-center justify-center border-b border-zinc-200">
      <Wrapper className="border-x-0  border-zinc-200 ">
        <div
          className="relative overflow-hidden bg-cover bg-center px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 border-x border-zinc-200"
          style={{ backgroundImage: "url('/background.avif')" }}
        >
          <div className="absolute inset-0" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center px-2 sm:px-6 lg:px-20 xl:px-30">
            <p
              className="text-base sm:text-lg md:text-xl font-medium text-gray-600 tracking-wide animate-hero-fade"
              style={{ animationDelay: "0.1s" }}
            >
              {t("eyebrow")}
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tighter leading-tight animate-hero-fade"
              style={{ animationDelay: "0.2s" }}
            >
              {t("title")}
            </h1>
            <p
              className="max-w-3xl text-base sm:text-lg text-black leading-tight animate-hero-fade"
              style={{ animationDelay: "0.35s" }}
            >
              {t("description")}
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 mt-8 animate-hero-fade"
              style={{ animationDelay: "0.5s" }}
            >
              <Button href={toLocalePath(locale, "/contactar")} variant="primary">
                {t("ctaPrimary")}
              </Button>
              <Button href={toLocalePath(locale, "/#servicios")} variant="secondary">
                {t("ctaSecondary")}
              </Button>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-16 w-full animate-hero-fade"
              style={{ animationDelay: "0.65s" }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center justify-start gap-2 text-left">
                    <div className="px-2 py-2 rounded bg-white/50 border border-zinc-200"><Icon className="w-3 h-3" /></div>
                    <p className="text-base font-medium text-black">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
