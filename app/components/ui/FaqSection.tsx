"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { Plus } from "lucide-react";
import { Wrapper } from "../Wrapper";
import { Button } from "./Button";
import { toLocalePath } from "@/lib/locale-path";

export function FaqSection() {
  const t = useTranslations("faqSection");
  const locale = useLocale();
  const faqs = Array.from({ length: 6 }, (_, index) => ({
    question: t(`items.${index}.question`),
    answer: t(`items.${index}.answer`),
  }));

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section id="faq" className="border-b border-zinc-200">
      <Wrapper>
        <div
          className="relative overflow-hidden border-x-0 border-zinc-200 bg-cover bg-center px-6 py-18 sm:px-10 lg:px-12 lg:py-24"
          style={{ backgroundImage: "url('/background-06.jpg')" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-sm" />
          <div className="pointer-events-none absolute -top-18 right-[15%] h-40 w-56 rounded-full bg-[#7a68ff]/25 blur-3xl" />
          <div className="pointer-events-none absolute top-[44%] right-[8%] h-28 w-44 rounded-full bg-white/60 blur-2xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_minmax(620px,1.35fr)] lg:gap-14">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 text-[30px] text-[#6e56ff]">
                <span className="leading-none">+</span>
                <p className="text-lg font-medium text-zinc-900 tracking-tight">{t("badge")}</p>
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-tight text-black sm:text-[54px] sm:leading-[1.06]">
                {t("title")}
              </h2>

              <p className="mt-4 max-w-sm text-xl text-black tracking-tight">
                {t("description")}
              </p>

              <p className="mt-8 text-xl font-medium text-black tracking-tight">{t("needHelp")}</p>

              <Button href={toLocalePath(locale, "/contactar")} variant="primary" className="mt-4 text-2xl">
                {t("button")}
              </Button>
            </div>

            <div className="space-y-2 sm:space-y-3 tracking-tight">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    key={item.question}
                    className="overflow-hidden border p-3 tracking-tight"
                    style={{
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      backgroundColor: "rgba(255, 255, 255, 0.28)",
                      borderRadius: 4,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="flex w-full items-start justify-between gap-4 text-left sm:items-center"
                      aria-expanded={isOpen}
                    >
                      <span className="flex-1 text-base font-semibold text-slate-950 ">
                        {item.question}
                      </span>

                      <span
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center transition-transform ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        <Plus className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-80 opacity-100 mt-5" : "max-h-0 opacity-0"}`}>
                      <p className="text-sm  text-black">{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
