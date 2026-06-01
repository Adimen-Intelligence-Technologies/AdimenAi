"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Sparkles, Building2, Check } from "lucide-react";
import { Wrapper } from "../Wrapper";
import {
  MissionVisionDiagram,
  type DiagramLabel,
} from "./MissionVisionDiagram";

const DIAGRAM_LABEL_DEFS: { key: string; ringIndex: number; angle: number }[] = [
  { key: "software", ringIndex: 1, angle: 270 },
  { key: "automation", ringIndex: 1, angle: 200 },
  { key: "ecosystems", ringIndex: 2, angle: 350 },
  { key: "growth", ringIndex: 2, angle: 100 },
  { key: "sustainability", ringIndex: 3, angle: 215 },
  { key: "euskera", ringIndex: 3, angle: 320 },
  { key: "reference", ringIndex: 3, angle: 145 },
  { key: "flows", ringIndex: 1, angle: 145 },
  { key: "digitalization", ringIndex: 3, angle: 35 },
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

  const diagramLabels: DiagramLabel[] = DIAGRAM_LABEL_DEFS.map((label) => ({
    key: label.key,
    text: t(`diagramLabels.${label.key}`),
    ringIndex: label.ringIndex,
    angle: label.angle,
  }));

  return (
    <section id="empresa" className="border-b border-zinc-200">
      <Wrapper>
        <div
          className="bg-cover bg-center bg-no-repeat bg-white/80 px-4 py-12 sm:px-8 sm:py-16 lg:py-24"
          style={{ backgroundImage: "url('/background-05.jpg')" }}
        >
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

              <div
                className={`mt-8 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/70 px-3.5 py-1.5 text-sm font-medium text-zinc-700 backdrop-blur ${fadeClass}`}
                style={{ animationDelay: "0.7s" }}
              >
                <Building2 className="h-4 w-4 text-[#6C47FF]" />
                {t("subtitle")}
              </div>
            </div>

            <div
              className={`relative ${fadeClass}`}
              style={{ animationDelay: "0.3s" }}
            >
              <div
                className="relative border p-6 sm:p-8"
                style={{
                  borderWidth: 1,
                  borderStyle: "solid",
                  borderColor: "rgba(255, 255, 255, 0.2)",
                  backgroundColor: "rgba(255, 255, 255, 0.28)",
                  borderRadius: 4,
                }}
              >
                <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full border border-[#6C47FF]/20 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6C47FF]">
                  <Sparkles className="h-3 w-3" />
                  {t("diagramEyebrow")}
                </div>
                <MissionVisionDiagram
                  title="IA"
                  centerLabel={t("diagramCenterLabel")}
                  footerLabel={t("diagramFooter")}
                  labels={diagramLabels}
                />
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
