"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import MagicRings from "./MagicRings";
import { Button } from "./Button";
import { Wrapper } from "../Wrapper";

interface CtaSectionProps {
  namespace?: string;
  id?: string;
}

export function CtaSection({ namespace = "ctaSection", id = "comercios" }: CtaSectionProps = {}) {
  const t = useTranslations(namespace);
  const locale = useLocale();

  return (
    <section id={id} className="border-b border-zinc-200">
      <Wrapper>
        <div className="relative overflow-hidden bg-[#1C1135] px-4 py-12 sm:px-8 sm:py-16 lg:py-24">
          <div className="pointer-events-none absolute inset-0 z-0">
            <MagicRings
              color="#7252FF"
              colorTwo="#7252FF"
              speed={0.6}
              ringCount={6}
              attenuation={4}
              lineThickness={3}
              baseRadius={0.55}
              radiusStep={0.14}
              opacity={0.7}
              blur={1}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-3xl text-center text-white">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance">
              {t("title")}
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg leading-tight sm:text-base tracking-tight text-white/70">
              {t("description")}
            </p>
            <div className="mt-8 flex justify-center">
              <Button
                href="tel:+34641195184"
                color="purple"
              >
               {t("button")}
              </Button>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
