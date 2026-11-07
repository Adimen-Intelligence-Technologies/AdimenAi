"use client";

import { ClipboardList, Palette, Phone, Rocket, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card } from "../ui/Card";
import { Wrapper } from "../Wrapper";

const ICONS = [Phone, ClipboardList, Palette, Rocket];

export function WebDesignProcess() {
  const t = useTranslations("webDesignPage.process");

  return (
    <section id="como-trabajamos" className="border-b border-zinc-200">
      <Wrapper>
        <div
          className="bg-cover bg-center bg-no-repeat px-4 py-12 sm:px-8 sm:py-16 lg:py-24"
          style={{ backgroundImage: "url('/background-04.jpg')" }}
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

          <ol className="mt-12 grid gap-2 md:grid-cols-2 xl:grid-cols-4">
            {ICONS.map((icon, index) => (
              <li key={index}>
                <Card
                  index={index}
                  icon={icon}
                  title={t(`items.${index}.title`)}
                  description={t(`items.${index}.description`)}
                />
              </li>
            ))}
          </ol>
        </div>
      </Wrapper>
    </section>
  );
}
