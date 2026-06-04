"use client";

import { useEffect, useRef, useState } from "react";
import { Cpu, MessageSquare, Settings2, Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { Card } from "./Card";
import { Wrapper } from "../Wrapper";

export function ServicesSection() {
  const t = useTranslations("servicesSection");
  const services = [
    {
      title: t("items.0.title"),
      description: t("items.0.description"),
      icon: Cpu,
    },
    {
      title: t("items.1.title"),
      description: t("items.1.description"),
      icon: MessageSquare,
    },
    {
      title: t("items.2.title"),
      description: t("items.2.description"),
      icon: Sparkles,
    },
    {
      title: t("items.3.title"),
      description: t("items.3.description"),
      icon: Settings2,
    },
  ];
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const fadeClass = isVisible ? "animate-hero-fade" : "opacity-0";

  return (
    <section id="servicios" className="border border-zinc-200">
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
              {t("badge")}
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance ${fadeClass}`}
              style={{ animationDelay: "0.2s" }}
            >
              {t("title")}
            </h2>
            <p
              className={`mt-4 max-w-2xl text-lg leading-tight sm:text-base sm:mx-auto ${fadeClass}`}
              style={{ animationDelay: "0.3s" }}
            >
              {t("description")}
            </p>
          </div>

          <div className="mt-12 grid gap-2 sm:gap-2 lg:gap-2 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={service.title}
                index={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
