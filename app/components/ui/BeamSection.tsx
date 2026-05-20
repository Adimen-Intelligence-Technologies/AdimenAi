"use client";

import { Sparkles } from "lucide-react";
import MagicRings from "./MagicRings";
import { Wrapper } from "../Wrapper";

export function BeamSection() {
  return (
    <section className="border-b border-zinc-200">
      <Wrapper className="px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center py-16">
          <div className="mb-4 inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold text-black tracking-tight">
            <Sparkles className="h-5 w-5 text-[#6C47FF]" />
            Energía visual
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-[40px] font-semibold tracking-tight text-slate-950">
            Vive la experiencia animada de tu producto
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-sm sm:text-base text-black tracking-tight">
            Una demostración visual para comunicar cómo funciona tu IA y qué puede hacer por tu empresa, con un diseño moderno y movimiento suave.
          </p>

          <div className="mt-12 flex justify-center">
            <div className="relative h-85 w-full max-w-5xl overflow-hidden rounded-4xl bg-zinc-950/5 shadow-sm">
              <MagicRings
                color="#6C47FF"
                colorTwo="#00b4ff"
                speed={0.85}
                ringCount={5}
                attenuation={10}
                lineThickness={2}
                baseRadius={0.35}
                radiusStep={0.12}
                scaleRate={0.08}
                opacity={0.95}
                blur={0}
                noiseAmount={0.05}
                rotation={0.3}
                ringGap={1.3}
                followMouse={false}
                mouseInfluence={0}
                hoverScale={1}
                parallax={0}
                clickBurst={false}
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
