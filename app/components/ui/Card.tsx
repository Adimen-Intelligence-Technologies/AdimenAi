"use client";

import { useEffect, useRef, useState } from "react";
import type { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  index: number;
  variant?: "numeric" | "icon";
}

export function Card({
  title,
  description,
  icon: Icon,
  index,
  variant = "numeric",
}: CardProps) {
  const cardRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const isIconVariant = variant === "icon";
  const iconWrapperClass = isIconVariant
    ? "flex h-12 w-12 items-center justify-center rounded-full bg-[#6C47FF] text-white"
    : "relative flex h-20 w-20 items-center justify-center bg-white/30 rounded text-[#6C47FF]";
  const iconClass = isIconVariant ? "h-5 w-5" : "h-8 w-8";
  const iconContainerClass = isIconVariant ? "mb-30 flex items-start justify-start" : "mb-6 flex items-center justify-center";
  const titleClass = isIconVariant ? "text-lg leading-tight" : "text-2xl";
  const descriptionClass = isIconVariant ? "mt-2 text-base tracking-tight text-black" : "mt-3 text-base tracking-tight text-black";

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
      className={`flex h-full flex-col justify-between border p-6 sm:p-7 ${isVisible ? "animate-hero-fade" : "opacity-0"}`}
      style={{
        borderWidth: 1,
        borderStyle: "solid",
        borderColor: "rgba(255, 255, 255, 0.2)",
        backgroundColor: "rgba(255, 255, 255, 0.28)",
        borderRadius: 4,

        animationDelay: isVisible ? `${index * 0.08}s` : undefined,
      }}
    >
      <div className={iconContainerClass}>
        <div className={iconWrapperClass}>
          <Icon className={iconClass} />
          {!isIconVariant && (
            <span className="absolute -top-2 -right-2 flex h-7 w-7 items-center justify-center rounded-full bg-[#6C47FF] text-xs font-semibold text-white ">
              {index + 1}
            </span>
          )}
        </div>
      </div>
      <h3 className={`${titleClass} font-semibold text-slate-950 tracking-tight`}>{title}</h3>
      <p className={descriptionClass}>{description}</p>
      {/* <p className="mt-6 text-base tracking-tight font-medium text-black transition-colors duration-200 hover:text-[#6C47FF] cursor-pointer inline-flex items-center gap-2">
        Más información
        <span aria-hidden="true">→</span>
      </p> */}
    </div>
  );
}
