"use client";

import { useEffect, useRef, useState } from "react";
import {
  Cpu,
  Cog,
  Network,
  TrendingUp,
  Leaf,
  Languages,
  Award,
  GitBranch,
  Smartphone,
  Sparkles,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { OrbitingCircles } from "@/components/ui/orbiting-circles";

export interface OrbitItem {
  key: string;
  text: string;
  icon: LucideIcon;
}

interface AIEcosystemOrbitProps {
  title?: string;
  centerLabel?: string;
  innerItems: OrbitItem[];
  outerItems: OrbitItem[];
}

const ICON_MAP: Record<string, LucideIcon> = {
  software: Cpu,
  automation: Cog,
  ecosystems: Network,
  growth: TrendingUp,
  sustainability: Leaf,
  euskera: Languages,
  reference: Award,
  flows: GitBranch,
  digitalization: Smartphone,
};

export function getOrbitIcon(key: string): LucideIcon {
  return ICON_MAP[key] ?? Sparkles;
}

function OrbitChip({ item, size }: { item: OrbitItem; size: number }) {
  const Icon = item.icon;
  const iconInner = Math.max(14, Math.round(size * 0.42));
  return (
    <div className="group relative flex items-center justify-center">
      <div
        className="flex items-center justify-center rounded-full border border-zinc-200 bg-white shadow-[0_8px_24px_-12px_rgba(114,82,255,0.45)] transition-transform duration-300 group-hover:scale-110"
        style={{ width: size, height: size }}
      >
        <Icon
          className="text-[#6C47FF]"
          style={{ width: iconInner, height: iconInner }}
        />
      </div>
      <span
        className="pointer-events-none absolute top-full left-1/2 -translate-x-1/2 mt-1.5 whitespace-nowrap rounded-full border border-zinc-200 bg-white/95 px-2 py-0.5 text-[9px] sm:text-[10px] font-semibold tracking-tight text-slate-950 opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100 z-20"
      >
        {item.text}
      </span>
    </div>
  );
}

export function AIEcosystemOrbit({
  title = "IA",
  centerLabel,
  innerItems,
  outerItems,
}: AIEcosystemOrbitProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [width, setWidth] = useState(480);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setIsVisible(true));
    return () => window.cancelAnimationFrame(raf);
  }, []);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const update = () => {
      const rect = el.getBoundingClientRect();
      if (rect.width > 0) setWidth(rect.width);
    };
    update();
    const ro = new ResizeObserver(update);
    ro.observe(el);
    window.addEventListener("orientationchange", update);
    return () => {
      ro.disconnect();
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  const innerRadius = Math.max(60, Math.min(120, Math.round(width * 0.28)));
  const outerRadius = Math.max(100, Math.min(200, Math.round(width * 0.42)));
  const iconSize = Math.max(30, Math.min(48, Math.round(width * 0.11)));
  const centerSize = Math.max(64, Math.min(140, Math.round(width * 0.26)));
  const titleFontSize = Math.max(20, Math.min(36, Math.round(centerSize * 0.34)));

  return (
    <div
      ref={containerRef}
      className="relative mx-auto w-full max-w-[520px] aspect-square"
    >
      <div
        className="relative flex h-full w-full items-center justify-center"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.96)",
          transition:
            "opacity 900ms ease-out, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="pointer-events-none absolute inset-[10%] rounded-full bg-[radial-gradient(circle_at_center,rgba(114,82,255,0.22),rgba(114,82,255,0)_70%)]" />

        <OrbitingCircles
          radius={innerRadius}
          duration={32}
          iconSize={iconSize}
          path
        >
          {innerItems.map((item) => (
            <OrbitChip key={item.key} item={item} size={iconSize} />
          ))}
        </OrbitingCircles>

        <OrbitingCircles
          radius={outerRadius}
          duration={48}
          iconSize={iconSize}
          reverse
          path
        >
          {outerItems.map((item) => (
            <OrbitChip key={item.key} item={item} size={iconSize} />
          ))}
        </OrbitingCircles>

        <div
          className="absolute left-1/2 top-1/2 z-10 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
          style={{
            width: centerSize,
            height: centerSize,
            background:
              "radial-gradient(circle at 30% 30%, #9B7CFF 0%, #7252FF 55%, #4F33D6 100%)",
            boxShadow:
              "inset 0 0 40px rgba(255, 255, 255, 0.15), 0 0 60px 0 rgba(114, 82, 255, 0.45)",
          }}
        >
          <div className="text-center px-1">
            <div
              className="font-bold text-white tracking-tighter leading-none"
              style={{ fontSize: titleFontSize }}
            >
              {title}
            </div>
            {centerLabel ? (
              <div
                className="mt-1 font-medium uppercase tracking-[0.2em] text-white/80 leading-none"
                style={{ fontSize: Math.max(8, Math.round(titleFontSize * 0.28)) }}
              >
                {centerLabel}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
