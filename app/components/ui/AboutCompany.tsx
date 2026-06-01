"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Sparkles, Check } from "lucide-react";
import { Wrapper } from "../Wrapper";
import { AIEcosystemOrbit, getOrbitIcon, type OrbitItem } from "./AIEcosystemOrbit";

const INNER_KEYS = ["software", "automation", "flows", "ecosystems"];
const OUTER_KEYS = [
  "growth",
  "sustainability",
  "euskera",
  "reference",
  "digitalization",
];

const HIGHLIGHT_KEYS = ["software", "automation", "ecosystems", "digitalization"];

export function AboutCompany() {
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

  const innerItems: OrbitItem[] = INNER_KEYS.map((key) => ({
    key,
    text: t(`diagramLabels.${key}`),
    icon: getOrbitIcon(key),
  }));

  const outerItems: OrbitItem[] = OUTER_KEYS.map((key) => ({
    key,
    text: t(`diagramLabels.${key}`),
    icon: getOrbitIcon(key),
  }));

  return (
    <section id="empresa" className="border-b border-zinc-200">
      <Wrapper>
        <div className="px-4 py-12 sm:px-8 sm:py-16 lg:py-24">
          <div ref={sectionRef} className="grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div>
              <div
                className={`mb-3 inline-flex items-center gap-2 text-lg font-semibold ${fadeClass}`}
                style={{ animationDelay: "0.1s" }}
              >
                <Sparkles className="h-5 w-5 text-[#6C47FF]" />
                {t("companyLabel")}
              </div>
              <h2
                className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance text-slate-950 ${fadeClass}`}
                style={{ animationDelay: "0.2s" }}
              >
                {t("companyTitle")}
              </h2>
              <p
                className={`mt-4 max-w-2xl text-lg leading-tight sm:text-base tracking-tight text-black ${fadeClass}`}
                style={{ animationDelay: "0.3s" }}
              >
                {t("companyDescription")}
              </p>
              <p
                className={`mt-3 max-w-2xl text-lg leading-tight sm:text-base tracking-tight text-black ${fadeClass}`}
                style={{ animationDelay: "0.35s" }}
              >
                {t("companyDescription2")}
              </p>

              <ul className="mt-8 grid gap-3 sm:grid-cols-2">
                {HIGHLIGHT_KEYS.map((key, index) => (
                  <li
                    key={key}
                    className={`flex items-start gap-3 ${fadeClass}`}
                    style={{ animationDelay: `${0.45 + index * 0.06}s` }}
                  >
                    <span className="mt-1 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C47FF]/10 text-[#6C47FF]">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    <span className="text-base tracking-tight text-black">
                      {t(`diagramLabels.${key}`)}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className={`relative ${fadeClass}`}
              style={{ animationDelay: "0.3s" }}
            >
              <AIEcosystemOrbit
                title="IA"
                centerLabel={t("diagramCenterLabel")}
                innerItems={innerItems}
                outerItems={outerItems}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
