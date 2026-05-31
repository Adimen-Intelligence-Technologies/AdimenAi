"use client";

import { useTranslations } from "next-intl";
import MagicRings from "./MagicRings";
import { Button } from "./Button";
import { Wrapper } from "../Wrapper";

export function CtaSection() {
  const t = useTranslations("ctaSection");

  return (
    <section id="comercios" className="relative overflow-hidden border-b border-zinc-200">
      <div className="pointer-events-none absolute inset-0">
        <MagicRings
          color="#7252FF"
          colorTwo="#7252FF"
          speed={0.6}
          ringCount={5}
          attenuation={8}
          opacity={0.35}
          blur={2}
        />
      </div>

     

      <Wrapper className="py-16 sm:py-20 lg:py-30">
        <div className="relative mx-auto max-w-3xl px-4 text-center text-black sm:px-6 lg:px-8">
         
          <h2 className="mt-5 text-3xl font-semibold  sm:text-4xl md:text-5xl tracking-tight">
            {t("title")}
          </h2>
           <p className="text-sm font-semibold  mt-4 text-black sm:text-base tracking-tight">
            {t("description")}
          </p>
          <div className="mt-5 flex justify-center">
            <Button
              href="/contactar"
              className="bg-[#7252FF] text-white border-transparent hover:bg-[#5b3fe6]"
            >
             {t("button")}
            </Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
