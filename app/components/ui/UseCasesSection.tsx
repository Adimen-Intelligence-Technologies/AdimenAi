"use client";

import { useEffect, useRef, useState } from "react";
import { useTranslations } from "next-intl";
import { Bell, Box, FileText, Mail, MessageSquare, Truck, Users, BarChart3, Sparkles } from "lucide-react";
import { Wrapper } from "../Wrapper";
import { Card } from "./Card";

export function UseCasesSection() {
  const t = useTranslations("useCasesSection");
  const useCases = [
    {
      title: t("items.0.title"),
      description: t("items.0.description"),
      icon: Truck,
    },
    {
      title: t("items.1.title"),
      description: t("items.1.description"),
      icon: FileText,
    },
    {
      title: t("items.2.title"),
      description: t("items.2.description"),
      icon: BarChart3,
    },
    {
      title: t("items.3.title"),
      description: t("items.3.description"),
      icon: Mail,
    },
    {
      title: t("items.4.title"),
      description: t("items.4.description"),
      icon: Users,
    },
    {
      title: t("items.5.title"),
      description: t("items.5.description"),
      icon: Bell,
    },
    {
      title: t("items.6.title"),
      description: t("items.6.description"),
      icon: Box,
    },
    {
      title: t("items.7.title"),
      description: t("items.7.description"),
      icon: MessageSquare,
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
    <section id="casos-de-uso" className="border-b border-zinc-200">
      <Wrapper>
        <div
          className="bg-cover bg-center bg-no-repeat bg-white/80 p-6 sm:p-8 lg:p-16"
          style={{ backgroundImage: "url('/background-06.jpg')" }}
        >
        <div>
          <div ref={sectionRef} className="mx-auto max-w-3xl text-center px-2 sm:px-0">
            <div
              className={`mb-4 inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold ${fadeClass}`}
              style={{ animationDelay: "0.1s" }}
            >
             <Sparkles className="h-5 w-5 text-[#6C47FF]" />
              {t("badge")}
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-[40px] font-semibold ${fadeClass}`}
              style={{ animationDelay: "0.2s" }}
            >
              {t("title")}
            </h2>
            <p
              className={`mx-auto mt-4 max-w-2xl text-sm sm:text-base ${fadeClass}`}
              style={{ animationDelay: "0.3s" }}
            >
              {t("description")}
            </p>
          </div>

          <div className="mt-10 w-full overflow-x-auto pb-6 sm:pb-0 lg:overflow-visible">
            <div className="flex gap-4 lg:grid lg:grid-cols-2 xl:grid-cols-3">
              {useCases.map((useCase, index) => (
                <div key={useCase.title} className="shrink-0 w-64 sm:w-72 lg:w-auto">
                  <Card
                    index={index}
                    title={useCase.title}
                    description={useCase.description}
                    icon={useCase.icon}
                    variant="icon"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </Wrapper>
    </section>
  );
}
