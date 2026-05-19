"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
}

export function Card({ title, description, icon: Icon, index }: CardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = cardRef.current;
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

  return (
    <div
      ref={cardRef}
      className={`flex h-full flex-col justify-between border p-6 ${isVisible ? "animate-hero-fade" : "opacity-0"}`}
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.1)",
        borderRadius: 8,
        boxShadow: "rgba(111, 70, 255, 0.1) 0px 24px 60px -20px",
        animationDelay: isVisible ? `${index * 0.08}s` : undefined,
      }}
    >
      <div className="mb-6 flex items-center justify-center">
        <div className="relative flex h-20 w-20 items-center justify-center  bg-white/20 rounded text-[#6C47FF] shadow-sm">
          <Icon className="h-8 w-8" />
          <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#6C47FF] text-xs font-semibold text-white shadow-lg">
            {index + 1}
          </span>
        </div>
      </div>
      <h3 className="text-2xl font-semibold text-slate-950">{title}</h3>
      <p className="mt-3 text-base text-black">{description}</p>
      <p className="mt-6 text-base font-medium text-black transition-colors duration-200 hover:text-[#6C47FF] cursor-pointer inline-flex items-center gap-2">
        Más información
        <span aria-hidden="true">→</span>
      </p>
    </div>
  );
}
