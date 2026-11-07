"use client";

import { Languages, MapPin, PenTool, PhoneCall, Search, ShieldCheck, Smartphone, Sparkles, Zap } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card } from "../ui/Card";
import { Wrapper } from "../Wrapper";

const ICONS = [PenTool, Search, MapPin, Zap, Smartphone, PhoneCall, Languages, ShieldCheck];

export function WebDesignFeatures() {
  const t = useTranslations("webDesignPage.features");

  return (
    <section id="que-incluye" className="border-b border-zinc-200">
      <Wrapper>
        <div
          className="bg-cover bg-center bg-no-repeat bg-white/80 px-4 py-12 sm:px-8 sm:py-16 lg:py-24"
          style={{ backgroundImage: "url('/background-05.jpg')" }}
        >
          <div className="mx-auto max-w-3xl text-left sm:text-center">
            <div className="mb-3 inline-flex items-center gap-2 text-lg font-semibold">
              <Sparkles className="h-5 w-5 text-[#6C47FF]" />
              {t("badge")}
            </div>
            <h2 className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-4 text-lg leading-tight tracking-tight text-black sm:text-base">{t("description")}</p>
          </div>

          <div className="mt-12 grid gap-2 md:grid-cols-2 xl:grid-cols-4">
            {ICONS.map((icon, index) => (
              <Card
                key={index}
                index={index}
                variant="icon"
                icon={icon}
                title={t(`items.${index}.title`)}
                description={t(`items.${index}.description`)}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
