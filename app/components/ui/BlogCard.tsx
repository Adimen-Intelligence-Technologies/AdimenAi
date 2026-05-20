"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface BlogCardProps {
  title: string;
  excerpt: string;
  tag: string;
  imageSrc: string;
  href: string;
  index: number;
}

export function BlogCard({ title, excerpt, tag, imageSrc, href, index }: BlogCardProps) {
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
      className={`group relative flex h-full flex-col overflow-hidden rounded-[28px] border border-white/20 bg-white/20 backdrop-blur-xl shadow-2xl shadow-black/5 transition duration-500 ${
        isVisible ? "animate-hero-fade" : "opacity-0"
      }`}
      style={{
        animationDelay: isVisible ? `${index * 0.08}s` : undefined,
      }}
    >
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#7252FF]/70 via-[#8C6CFF]/60 to-[#42FCFF]/40 opacity-80 blur-xl" />

      <Link href={href} className="relative flex h-full flex-col">
        <div className="relative h-56 overflow-hidden">
          <Image
            src={imageSrc}
            alt={title}
            fill
            className="object-cover transition duration-500 group-hover:scale-105"
          />
          
        </div>

        <div className="flex flex-1 flex-col justify-between p-6">
          <div>
            <div className=" text-xs font-semibold  text-[#6C47FF]">
            {tag}
          </div>
            <h3 className="text-2xl py-2 font-semibold text-slate-950">{title}</h3>
            <p
              className="mt-4 text-base text-slate-700"
              style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                overflow: "hidden",
              }}
            >
              {excerpt}
            </p>
          </div>
          <span className="mt-6 inline-flex items-center font-semibold text-black transition-colors duration-200 group-hover:text-[#6C47FF]">
            Leer artículo <span aria-hidden="true" className="ml-2">→</span>
          </span>
        </div>
      </Link>
    </div>
  );
}
