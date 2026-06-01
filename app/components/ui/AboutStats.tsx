"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Sparkles, Zap, HeartHandshake, MapPin, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Wrapper } from "../Wrapper";

interface StatItem {
  icon: LucideIcon;
  value: number;
  suffix: string;
  labelKey: string;
}

const STATS: StatItem[] = [
  { icon: Zap, value: 600, suffix: "+", labelKey: "processes" },
  { icon: HeartHandshake, value: 40, suffix: "+", labelKey: "clients" },
  { icon: MapPin, value: 3, suffix: "", labelKey: "regions" },
  { icon: TrendingUp, value: 98, suffix: "%", labelKey: "satisfaction" },
];

function AnimatedNumber({
  value,
  isVisible,
}: {
  value: number;
  isVisible: boolean;
}) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1600;
    const start = performance.now();
    let raf = 0;

    const step = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(Math.round(eased * value));
      if (progress < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [isVisible, value]);

  return <>{display}</>;
}

export function AboutStats() {
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
    <section className="border-b border-zinc-200">
      <Wrapper>
        <div className="px-4 py-12 sm:px-8 sm:py-16 lg:py-24">
          <div ref={sectionRef} className="mx-auto max-w-3xl text-center">
            <div
              className={`mb-3 inline-flex items-center justify-center gap-2 text-base font-medium tracking-wide text-zinc-600 ${fadeClass}`}
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="h-4 w-4 text-[#6C47FF]" />
              {t("stats.badge")}
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance text-slate-950 ${fadeClass}`}
              style={{ animationDelay: "0.2s" }}
            >
              {t("stats.title")}
            </h2>
          </div>

          <div className="mx-auto mt-12 grid max-w-5xl gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:mt-16 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.labelKey}
                  className={`group relative flex flex-col gap-6 bg-white p-6 transition-colors duration-300 hover:bg-zinc-50 sm:p-8 ${fadeClass}`}
                  style={{ animationDelay: `${0.3 + index * 0.08}s` }}
                >
                  <div className="flex items-center justify-between">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#6C47FF]/10 text-[#6C47FF] transition-transform duration-300 group-hover:scale-110">
                      <Icon className="h-4 w-4" strokeWidth={2.25} />
                    </span>
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-zinc-400">
                      0{index + 1}
                    </span>
                  </div>

                  <div>
                    <div className="flex items-start gap-0.5 text-slate-950">
                      <span className="text-5xl font-semibold leading-none tracking-tight sm:text-6xl">
                        <AnimatedNumber
                          value={stat.value}
                          isVisible={isVisible}
                        />
                      </span>
                      {stat.suffix && (
                        <span className="text-2xl font-semibold leading-none tracking-tight text-[#6C47FF] sm:text-3xl">
                          {stat.suffix}
                        </span>
                      )}
                    </div>
                    <p className="mt-3 text-sm font-medium leading-snug tracking-tight text-zinc-600 sm:text-base">
                      {t(`stats.items.${stat.labelKey}`)}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
