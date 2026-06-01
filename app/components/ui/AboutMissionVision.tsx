"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Lightbulb, Eye, Sparkles } from "lucide-react";
import { Wrapper } from "../Wrapper";

export function AboutMissionVision() {
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

  const items = [
    {
      icon: Lightbulb,
      title: t("missionTitle"),
      text: t("missionText"),
      index: 0,
    },
    {
      icon: Eye,
      title: t("visionTitle"),
      text: t("visionText"),
      index: 1,
    },
  ];

  return (
    <section id="mision-vision" className="border-b border-zinc-200">
      <Wrapper>
        <div
          className="bg-cover bg-center bg-no-repeat bg-white/80 px-4 py-12 sm:px-8 sm:py-16 lg:py-24"
          style={{ backgroundImage: "url('/background-05.jpg')" }}
        >
          <div ref={sectionRef} className="text-left sm:text-center">
            <div
              className={`mb-3 inline-flex items-center justify-start sm:justify-center gap-2 text-lg font-semibold ${fadeClass}`}
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="h-5 w-5 text-[#6C47FF]" />
              {t("diagramEyebrow")}
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance text-slate-950 ${fadeClass}`}
              style={{ animationDelay: "0.2s" }}
            >
              {t("diagramTitle")}
            </h2>
            <p
              className={`mt-4 max-w-2xl text-lg leading-tight sm:text-base sm:mx-auto tracking-tight ${fadeClass}`}
              style={{ animationDelay: "0.3s" }}
            >
              {t("diagramSubtitle")}
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 sm:gap-6">
            {items.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className={`group relative flex h-full flex-col border p-6 sm:p-8 ${fadeClass}`}
                  style={{
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    backgroundColor: "rgba(255, 255, 255, 0.28)",
                    borderRadius: 4,
                    animationDelay: `${0.4 + item.index * 0.1}s`,
                  }}
                >
                  <div className="mb-6 flex items-center justify-between">
                    <div className="relative flex h-20 w-20 items-center justify-center rounded bg-white/30 text-[#6C47FF]">
                      <Icon className="h-8 w-8" />
                      <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#6C47FF] text-xs font-semibold text-white">
                        {item.index + 1}
                      </span>
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-500">
                      {item.index === 0 ? t("storyBadge") : t("valuesBadge")}
                    </span>
                  </div>
                  <h3 className="text-2xl font-semibold text-slate-950 tracking-tight">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-base tracking-tight text-black leading-relaxed">
                    {item.text}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
