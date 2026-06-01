"use client";

import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

export interface DiagramLabel {
  key: string;
  text: string;
  ringIndex: number;
  angle: number;
}

interface MissionVisionDiagramProps {
  title?: string;
  subtitle?: string;
  centerLabel?: string;
  footerLabel?: string;
  labels?: DiagramLabel[];
}

const DEFAULT_LABELS: DiagramLabel[] = [
  { key: "software", text: "Software", ringIndex: 1, angle: 270 },
  { key: "automation", text: "Automatización", ringIndex: 1, angle: 200 },
  { key: "ecosystems", text: "Ecosistemas centralizados", ringIndex: 2, angle: 350 },
  { key: "growth", text: "Crecimiento económico", ringIndex: 2, angle: 100 },
  { key: "sustainability", text: "Sostenibilidad", ringIndex: 3, angle: 215 },
  { key: "euskera", text: "Fomento del euskera", ringIndex: 3, angle: 320 },
  { key: "reference", text: "Referente en Euskadi", ringIndex: 3, angle: 145 },
  { key: "flows", text: "Flujos de valor", ringIndex: 1, angle: 145 },
  { key: "digitalization", text: "Impulso de la digitalización", ringIndex: 3, angle: 35 },
];

export function MissionVisionDiagram({
  title = "IA",
  subtitle,
  centerLabel,
  footerLabel = "Ecosistema IA",
  labels = DEFAULT_LABELS,
}: MissionVisionDiagramProps) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const t = window.requestAnimationFrame(() => setIsVisible(true));
    return () => window.cancelAnimationFrame(t);
  }, []);

  const ringRadii = [42, 33, 24, 15];
  const ringColors = [
    "rgba(114, 82, 255, 0.08)",
    "rgba(114, 82, 255, 0.14)",
    "rgba(114, 82, 255, 0.22)",
    "rgba(114, 82, 255, 0.32)",
  ];
  const ringBorders = [
    "rgba(114, 82, 255, 0.18)",
    "rgba(114, 82, 255, 0.28)",
    "rgba(114, 82, 255, 0.42)",
    "rgba(114, 82, 255, 0.6)",
  ];
  const ringSpeeds = [110, 90, 70, 50];

  return (
    <div className="relative mx-auto w-full max-w-[640px] aspect-square">
      <div
        className="relative h-full w-full"
        style={{
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? "scale(1)" : "scale(0.96)",
          transition: "opacity 900ms ease-out, transform 1200ms cubic-bezier(0.16, 1, 0.3, 1)",
        }}
      >
        <div className="absolute inset-0 rounded-full bg-[radial-gradient(circle_at_center,rgba(114,82,255,0.18),rgba(114,82,255,0)_70%)]" />

        {ringRadii.map((radius, i) => (
          <div
            key={i}
            className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
            style={{
              width: `${radius * 2}%`,
              height: `${radius * 2}%`,
              backgroundColor: ringColors[i],
              border: `1px solid ${ringBorders[i]}`,
              boxShadow: i === 3 ? "0 0 60px 0 rgba(114, 82, 255, 0.2)" : "none",
              animation: `spinSlow ${ringSpeeds[i]}s linear ${i % 2 === 0 ? "normal" : "reverse"} infinite`,
            }}
          >
            <div
              className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7252FF]"
              style={{
                boxShadow: "0 0 10px 2px rgba(114, 82, 255, 0.6)",
                transform: `translate(-50%, -50%) rotate(${
                  i === 0 ? 35 : i === 1 ? -45 : i === 2 ? 120 : -200
                }deg) translateY(${
                  i === 0 ? "48%" : i === 1 ? "36%" : i === 2 ? "24%" : "12%"
                })`,
              }}
            />
          </div>
        ))}

        <div
          className="absolute left-1/2 top-1/2 z-10 flex h-[28%] w-[28%] -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full"
          style={{
            background:
              "radial-gradient(circle at 30% 30%, #9B7CFF 0%, #7252FF 55%, #4F33D6 100%)",
            boxShadow:
              "inset 0 0 40px rgba(255, 255, 255, 0.15), 0 0 60px 0 rgba(114, 82, 255, 0.45)",
            animation: "pulseGlow 4s ease-in-out infinite",
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
            ) : subtitle ? (
              <div className="mt-1 text-[10px] font-medium uppercase tracking-[0.2em] text-white/80 sm:text-xs">
                {subtitle}
              </div>
            ) : null}
          </div>
        </div>

        {labels.map((label) => {
          const radius = ringRadii[label.ringIndex];
          const x = 50 + radius * Math.cos((label.angle * Math.PI) / 180);
          const y = 50 + radius * Math.sin((label.angle * Math.PI) / 180);
          const isRight = label.angle < 90 || label.angle > 270;
          return (
            <div
              key={label.key}
              className="absolute"
              style={{
                left: `${x}%`,
                top: `${y}%`,
                transform: "translate(-50%, -50%)",
              }}
            >
              <div
                className="relative h-2.5 w-2.5 rounded-full bg-[#7252FF] ring-4 ring-white/80"
                style={{ boxShadow: "0 0 14px 0 rgba(114, 82, 255, 0.55)" }}
              />
              <div
                className="absolute top-1/2 h-px -translate-y-1/2 bg-gradient-to-r from-[#7252FF]/50 to-transparent"
                style={{
                  width: "44px",
                  ...(isRight
                    ? { left: "calc(100% + 6px)" }
                    : { right: "calc(100% + 6px)", transform: "translateY(-50%) scaleX(-1)" }),
                }}
              />
              <div
                className="absolute top-1/2 -translate-y-1/2 whitespace-nowrap text-[11px] font-semibold text-zinc-800 sm:text-xs md:text-sm"
                style={{
                  ...(isRight
                    ? { left: "calc(100% + 56px)" }
                    : { right: "calc(100% + 56px)", textAlign: "right" }),
                }}
              >
                {label.text}
              </div>
            </div>
          );
        })}

        <div
          className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[6%] w-[6%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7252FF]/20 blur-md"
          aria-hidden="true"
        />
      </div>

      <div
        className="absolute -bottom-3 left-1/2 z-20 -translate-x-1/2 rounded-full border border-[#7252FF]/20 bg-white/85 px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.2em] text-[#7252FF] shadow-sm backdrop-blur"
        aria-hidden="true"
      >
        <Sparkles className="mr-1 inline-block h-3 w-3" />
        {footerLabel}
      </div>
    </div>
  );
}
