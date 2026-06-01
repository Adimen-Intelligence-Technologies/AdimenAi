"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Lightbulb, HeartHandshake, ShieldCheck, TrendingUp, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Wrapper } from "../Wrapper";
import { Card } from "./Card";

interface ValueItem {
  icon: LucideIcon;
  titleKey: string;
  textKey: string;
}

const VALUE_ITEMS: ValueItem[] = [
  { icon: Lightbulb, titleKey: "value1Title", textKey: "value1Text" },
  { icon: HeartHandshake, titleKey: "value2Title", textKey: "value2Text" },
  { icon: ShieldCheck, titleKey: "value3Title", textKey: "value3Text" },
  { icon: TrendingUp, titleKey: "value4Title", textKey: "value4Text" },
];

export function AboutValues() {
  const t = useTranslations("aboutPage");
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fadeClass = isVisible ? "animate-hero-fade" : "opacity-0";

  return (
    <section id="valores" className="border-b border-zinc-200">
      <Wrapper>
        <div
          className="bg-cover bg-center bg-no-repeat bg-white/80 px-4 py-12 sm:px-8 sm:py-16 lg:py-24"
          style={{ backgroundImage: "url('/background-02.avif')" }}
        >
          <div ref={sectionRef} className="text-left sm:text-center">
            <div
              className={`mb-3 inline-flex items-center justify-start sm:justify-center gap-2 text-lg font-semibold ${fadeClass}`}
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="h-5 w-5 text-[#6C47FF]" />
              {t("valuesBadge")}
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance text-slate-950 ${fadeClass}`}
              style={{ animationDelay: "0.2s" }}
            >
              {t("valuesTitle")}
            </h2>
            <p
              className={`mt-4 max-w-2xl text-lg leading-tight sm:text-base sm:mx-auto tracking-tight ${fadeClass}`}
              style={{ animationDelay: "0.3s" }}
            >
              {t("valuesSubtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4 sm:gap-6">
            {VALUE_ITEMS.map((item, index) => (
              <Card
                key={item.titleKey}
                index={index}
                title={t(item.titleKey)}
                description={t(item.textKey)}
                icon={item.icon}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
