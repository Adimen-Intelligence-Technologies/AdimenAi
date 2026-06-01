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

function AnimatedNumber({ value, isVisible }: { value: number; isVisible: boolean }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    const duration = 1400;
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
      { threshold: 0.25 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const fadeClass = isVisible ? "animate-hero-fade" : "opacity-0";

  return (
    <section className="border-b border-zinc-200">
      <Wrapper>
        <div
          className="bg-cover bg-center bg-no-repeat bg-white/80 px-4 py-12 sm:px-8 sm:py-16 lg:py-24"
          style={{ backgroundImage: "url('/background-04.jpg')" }}
        >
          <div ref={sectionRef} className="text-left sm:text-center">
            <div
              className={`mb-3 inline-flex items-center justify-start sm:justify-center gap-2 text-lg font-semibold ${fadeClass}`}
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="h-5 w-5 text-[#6C47FF]" />
              {t("stats.badge")}
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance text-slate-950 ${fadeClass}`}
              style={{ animationDelay: "0.2s" }}
            >
              {t("stats.title")}
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4 sm:gap-6">
            {STATS.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={stat.labelKey}
                  className={`flex h-full flex-col justify-between border p-6 sm:p-7 ${fadeClass}`}
                  style={{
                    borderWidth: 1,
                    borderStyle: "solid",
                    borderColor: "rgba(255, 255, 255, 0.2)",
                    backgroundColor: "rgba(255, 255, 255, 0.28)",
                    borderRadius: 4,
                    animationDelay: `${0.3 + index * 0.08}s`,
                  }}
                >
                  <div className="mb-6 flex items-center justify-start">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6C47FF] text-white">
                      <Icon className="h-5 w-5" />
                    </div>
                  </div>
                  <div className="flex items-baseline gap-1 text-5xl font-bold tracking-tighter text-slate-950 sm:text-6xl">
                    <AnimatedNumber value={stat.value} isVisible={isVisible} />
                    <span className="text-[#6C47FF]">{stat.suffix}</span>
                  </div>
                  <p className="mt-3 text-base tracking-tight text-black">
                    {t(`stats.items.${stat.labelKey}`)}
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
