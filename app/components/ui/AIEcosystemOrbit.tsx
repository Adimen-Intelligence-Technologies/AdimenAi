"use client";

import { useEffect, useState } from "react";
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

function OrbitChip({ item }: { item: OrbitItem }) {
  const Icon = item.icon;
  return (
    <div className="group relative flex items-center justify-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-full border border-zinc-200 bg-white shadow-[0_8px_24px_-12px_rgba(114,82,255,0.45)] transition-transform duration-300 hover:scale-110">
        <Icon className="h-5 w-5 text-[#6C47FF]" />
      </div>
      <span
        className="pointer-events-none absolute top-full mt-1.5 whitespace-nowrap rounded-full border border-zinc-200 bg-white/90 px-2 py-0.5 text-[10px] font-semibold tracking-tight text-slate-950 opacity-0 backdrop-blur transition-opacity duration-200 group-hover:opacity-100"
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
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const raf = window.requestAnimationFrame(() => setIsVisible(true));
    return () => window.cancelAnimationFrame(raf);
  }, []);

  return (
    <div className="relative mx-auto w-full max-w-[560px] aspect-square">
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
          radius={120}
          duration={32}
          iconSize={48}
          path
        >
          {innerItems.map((item) => (
            <OrbitChip key={item.key} item={item} />
          ))}
        </OrbitingCircles>

        <OrbitingCircles
          radius={200}
          duration={48}
          iconSize={48}
          reverse
          path
        >
          {outerItems.map((item) => (
            <OrbitChip key={item.key} item={item} />
          ))}
        </OrbitingCircles>

        <div
          className="absolute left-1/2 top-1/2 z-10 flex h-[26%] w-[26%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #9B7CFF 0%, #7252FF 55%, #4F33D6 100%)",
            boxShadow:
              "inset 0 0 40px rgba(255, 255, 255, 0.15), 0 0 60px 0 rgba(114, 82, 255, 0.45)",
          }}
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-white sm:text-4xl md:text-5xl tracking-tighter">
              {title}
            </div>
            {centerLabel ? (
              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-xs">
                {centerLabel}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}
