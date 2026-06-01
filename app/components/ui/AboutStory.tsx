"use client";

import { forwardRef, useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Building2, Compass, MapPin, Sparkles } from "lucide-react";
import { AnimatedBeam } from "@/registry/magicui/animated-beam";
import { cn } from "@/lib/utils";
import { Wrapper } from "../Wrapper";

const Node = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex size-16 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-[0_0_24px_-12px_rgba(114,82,255,0.6)]",
        className
      )}
    >
      {children}
    </div>
  );
});

Node.displayName = "Node";

export function AboutStory() {
  const t = useTranslations("aboutPage");
  const containerRef = useRef<HTMLDivElement | null>(null);
  const node1Ref = useRef<HTMLDivElement | null>(null);
  const node2Ref = useRef<HTMLDivElement | null>(null);
  const node3Ref = useRef<HTMLDivElement | null>(null);
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

  const milestones = [
    {
      ref: node1Ref,
      icon: Building2,
      title: t("locationCard1Title"),
      text: t("locationCard1Text"),
    },
    {
      ref: node2Ref,
      icon: Sparkles,
      title: t("diagramCenterLabel"),
      text: t("diagramTitle"),
    },
    {
      ref: node3Ref,
      icon: MapPin,
      title: t("locationLabel"),
      text: t("locationDescription"),
    },
  ];

  return (
    <section id="historia" className="border-b border-zinc-200">
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
              <Compass className="h-5 w-5 text-[#6C47FF]" />
              {t("storyBadge")}
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance text-slate-950 ${fadeClass}`}
              style={{ animationDelay: "0.2s" }}
            >
              {t("storyTitle")}
            </h2>
          </div>

          <div className="mt-12 grid items-center gap-10 lg:grid-cols-[1.05fr_1fr] lg:gap-16">
            <div className={`space-y-5 text-lg leading-tight sm:text-base tracking-tight text-black ${fadeClass}`} style={{ animationDelay: "0.3s" }}>
              <p className="relative pl-5">
                <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-gradient-to-b from-[#6C47FF] via-[#6C47FF]/40 to-transparent" />
                {t("storyP1")}
              </p>
              <p className="relative pl-5">
                <span className="absolute left-0 top-1.5 bottom-1.5 w-[2px] bg-gradient-to-b from-[#6C47FF] via-[#6C47FF]/40 to-transparent" />
                {t("storyP2")}
              </p>
            </div>

            <div
              ref={containerRef}
              className={`relative flex h-[360px] sm:h-[320px] w-full items-center justify-center overflow-hidden p-6 ${fadeClass}`}
              style={{ animationDelay: "0.4s" }}
            >
              <div className="flex h-full w-full max-w-md flex-col justify-between gap-6 sm:gap-8">
                {milestones.map((m, idx) => {
                  const Icon = m.icon;
                  const alignRight = idx === 1;
                  return (
                    <div
                      key={m.title}
                      className={`flex items-center gap-4 ${alignRight ? "self-end flex-row-reverse text-right" : ""}`}
                    >
                      <Node ref={m.ref}>
                        <Icon className="h-6 w-6 text-[#6C47FF]" />
                      </Node>
                      <div className={alignRight ? "text-right" : "text-left"}>
                        <p className="text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-500">
                          0{idx + 1}
                        </p>
                        <p className="text-base font-semibold text-slate-950 tracking-tight">
                          {m.title}
                        </p>
                        <p className="text-sm text-zinc-600 tracking-tight max-w-[220px]">
                          {m.text}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>

              <AnimatedBeam
                containerRef={containerRef}
                fromRef={node1Ref}
                toRef={node2Ref}
                curvature={40}
                gradientStartColor="#7252FF"
                gradientStopColor="#9B7CFF"
                duration={4}
              />
              <AnimatedBeam
                containerRef={containerRef}
                fromRef={node2Ref}
                toRef={node3Ref}
                curvature={-40}
                gradientStartColor="#7252FF"
                gradientStopColor="#9B7CFF"
                duration={4}
                delay={0.6}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
