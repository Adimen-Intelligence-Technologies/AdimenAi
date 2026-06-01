"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { MapPin, Building2, Lightbulb, Sparkles } from "lucide-react";
import { Wrapper } from "../Wrapper";

const PROVINCES = [
  { key: "gipuzkoa", label: "Gipuzkoa", cx: 62, cy: 38, r: 22 },
  { key: "bizkaia", label: "Bizkaia", cx: 32, cy: 42, r: 24 },
  { key: "alava", label: "Álava", cx: 50, cy: 72, r: 26 },
];

export function AboutLocation() {
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

  const cards = [
    {
      icon: MapPin,
      title: t("locationCard1Title"),
      text: t("locationCard1Text"),
    },
    {
      icon: Building2,
      title: t("locationCard2Title"),
      text: t("locationCard2Text"),
    },
    {
      icon: Lightbulb,
      title: t("locationCard3Title"),
      text: t("locationCard3Text"),
    },
  ];

  return (
    <section id="ubicacion" className="border-b border-zinc-200">
      <Wrapper>
        <div
          className="bg-cover bg-center bg-no-repeat bg-white/80 px-4 py-12 sm:px-8 sm:py-16 lg:py-24"
          style={{ backgroundImage: "url('/background-06.jpg')" }}
        >
          <div ref={sectionRef} className="text-left sm:text-center">
            <div
              className={`mb-3 inline-flex items-center justify-start sm:justify-center gap-2 text-lg font-semibold ${fadeClass}`}
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="h-5 w-5 text-[#6C47FF]" />
              {t("locationLabel")}
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance text-slate-950 ${fadeClass}`}
              style={{ animationDelay: "0.2s" }}
            >
              {t("locationTitle")}
            </h2>
            <p
              className={`mt-4 max-w-2xl text-lg leading-tight sm:text-base sm:mx-auto tracking-tight ${fadeClass}`}
              style={{ animationDelay: "0.3s" }}
            >
              {t("locationDescription")}
            </p>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            <div
              className={`relative aspect-square w-full max-w-[480px] mx-auto ${fadeClass}`}
              style={{ animationDelay: "0.4s" }}
            >
              <div
                className="pointer-events-none absolute inset-0 -z-10 rounded-full opacity-70 blur-3xl"
                style={{ background: "radial-gradient(closest-side, rgba(114,82,255,0.22), transparent 70%)" }}
                aria-hidden="true"
              />

              <svg
                viewBox="0 0 100 100"
                className="h-full w-full"
                aria-label="Mapa esquemático del País Vasco"
              >
                <defs>
                  <radialGradient id="provinceGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#9B7CFF" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#7252FF" stopOpacity="0.05" />
                  </radialGradient>
                  <radialGradient id="centerGrad" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="#9B7CFF" />
                    <stop offset="60%" stopColor="#7252FF" />
                    <stop offset="100%" stopColor="#4F33D6" />
                  </radialGradient>
                </defs>

                {PROVINCES.map((p) => (
                  <g key={p.key}>
                    <circle
                      cx={p.cx}
                      cy={p.cy}
                      r={p.r}
                      fill="url(#provinceGrad)"
                      stroke="rgba(114,82,255,0.35)"
                      strokeWidth="0.4"
                      strokeDasharray="1.2 1.2"
                    />
                    <text
                      x={p.cx}
                      y={p.cy}
                      textAnchor="middle"
                      dominantBaseline="middle"
                      className="fill-zinc-700"
                      style={{ fontSize: 4, fontWeight: 600, letterSpacing: 0.4 }}
                    >
                      {p.label}
                    </text>
                  </g>
                ))}

                <line x1="62" y1="38" x2="32" y2="42" stroke="rgba(114,82,255,0.3)" strokeWidth="0.3" />
                <line x1="62" y1="38" x2="50" y2="72" stroke="rgba(114,82,255,0.3)" strokeWidth="0.3" />
                <line x1="32" y1="42" x2="50" y2="72" stroke="rgba(114,82,255,0.3)" strokeWidth="0.3" />

                <circle cx="62" cy="38" r="3" fill="url(#centerGrad)" />
                <circle cx="62" cy="38" r="6" fill="none" stroke="rgba(114,82,255,0.45)" strokeWidth="0.4">
                  <animate attributeName="r" values="3;9;3" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.6;0;0.6" dur="3s" repeatCount="indefinite" />
                </circle>
                <text
                  x="62"
                  y="32"
                  textAnchor="middle"
                  className="fill-slate-950"
                  style={{ fontSize: 3.2, fontWeight: 700, letterSpacing: 0.3 }}
                >
                  ELGOIBAR
                </text>
              </svg>

              <div className="pointer-events-none absolute -bottom-3 left-1/2 -translate-x-1/2 rounded-full border border-[#7252FF]/20 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7252FF] shadow-sm backdrop-blur">
                <Sparkles className="mr-1 inline-block h-3 w-3" />
                Euskadi
              </div>
            </div>

            <div className="grid gap-4 sm:gap-5">
              {cards.map((card, index) => {
                const Icon = card.icon;
                return (
                  <div
                    key={card.title}
                    className={`group flex items-start gap-4 border p-5 sm:p-6 transition-colors duration-300 hover:border-[#6C47FF]/40 ${fadeClass}`}
                    style={{
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      backgroundColor: "rgba(255, 255, 255, 0.28)",
                      borderRadius: 4,
                      animationDelay: `${0.45 + index * 0.08}s`,
                    }}
                  >
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#6C47FF] text-white transition-transform duration-300 group-hover:scale-105">
                      <Icon className="h-5 w-5" />
                    </div>
                    <div>
                      <div className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500 mb-1">
                        0{index + 1}
                      </div>
                      <h3 className="text-lg font-semibold text-slate-950 tracking-tight">
                        {card.title}
                      </h3>
                      <p className="mt-1 text-base tracking-tight text-black leading-tight">
                        {card.text}
                      </p>
                    </div>
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
