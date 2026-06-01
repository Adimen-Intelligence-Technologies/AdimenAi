"use client";

import { Wrapper } from "../Wrapper";
import { Sparkles, MapPin, Building2, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

export function AboutHero() {
  const t = useTranslations("aboutPage");
  const stats = [
    { icon: MapPin, label: t("locationCard1Text") },
    { icon: Building2, label: t("subtitle") },
    { icon: Zap, label: t("diagramFooter") },
  ];

  return (
    <section className="relative flex items-center justify-center border-b border-zinc-200">
      <Wrapper className="border-x-0 border-zinc-200">
        <div
          className="relative overflow-hidden bg-cover bg-center px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 border-x border-zinc-200"
          style={{ backgroundImage: "url('/background.avif')" }}
        >
          <div className="absolute inset-0" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center px-2 sm:px-6 lg:px-20 xl:px-30">
            <p
              className="inline-flex items-center gap-2 text-xl sm:text-lg md:text-xl font-medium text-gray-600 tracking-wide animate-hero-fade"
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="h-4 w-4 text-[#6C47FF]" />
              {t("eyebrow")}
            </p>
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
              {t("companyDescription")}
            </p>

            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 xl:mt-16 w-full animate-hero-fade mt-8"
              style={{ animationDelay: "0.65s" }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center justify-start gap-2 text-left">
                    <div className="px-2 py-2 rounded bg-white/50 border border-zinc-200">
                      <Icon className="w-3 h-3" />
                    </div>
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
