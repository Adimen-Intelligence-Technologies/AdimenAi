"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import MagicRings from "./MagicRings";
import { Button } from "./Button";
import { Wrapper } from "../Wrapper";

export function CtaSection() {
  const t = useTranslations("ctaSection");
  const locale = useLocale();

  return (
    <section id="comercios" className="relative overflow-hidden border-b border-zinc-200">
      <div className="pointer-events-none absolute inset-0 z-0">
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

     

      <Wrapper>
        <div className="relative z-10 mx-auto max-w-3xl text-center text-black px-4 py-12 sm:px-8 sm:py-16 lg:py-24">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance">
            {t("title")}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg leading-tight sm:text-base tracking-tight text-black">
            {t("description")}
          </p>
          <div className="mt-8 flex justify-center">
            <Button
              href="tel:+34650609028"
              color="purple"
            >
             {t("button")}
            </Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
