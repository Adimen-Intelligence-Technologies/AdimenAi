import { Check, Phone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Wrapper } from "../Wrapper";
import { Button } from "../ui/Button";
import { HeroBackgroundImage } from "../ui/HeroBackgroundImage";
import { BrowserMockup } from "./BrowserMockup";

export function WebDesignHero() {
  const t = useTranslations("webDesignPage.hero");
  const trustItems = [t("trust.0"), t("trust.1"), t("trust.2"), t("trust.3")];

  return (
    <section className="relative border-b border-zinc-200">
      <Wrapper className="border-x-0 border-zinc-200">
        <div className="relative overflow-hidden border-x border-zinc-200 px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-24">
          <HeroBackgroundImage />
          <div className="relative z-10 grid items-center gap-16 lg:grid-cols-[1.05fr_1fr] lg:gap-10">
            <div>
              <h1 className="animate-hero-fade" style={{ animationDelay: "0.1s" }}>
                <span className="inline-flex items-center gap-2 rounded-full border border-[#6C47FF]/20 bg-white/60 px-4 py-1.5 text-sm font-semibold text-[#6C47FF] backdrop-blur-md">
                  <span className="h-2 w-2 rounded-full bg-[#6C47FF] animate-pulse-glow" />
                  {t("kicker")}
                </span>
                <span className="mt-6 block text-4xl font-bold leading-[1.02] tracking-tighter text-black text-balance sm:text-6xl xl:text-7xl">
                  {t("title")}{" "}
                  <span className="bg-gradient-to-r from-[#6C47FF] via-[#a855f7] to-[#fc42ff] bg-clip-text text-transparent">
                    {t("titleHighlight")}
                  </span>
                </span>
              </h1>
              <p
                className="mt-6 max-w-xl text-lg leading-relaxed text-black/80 sm:text-xl animate-hero-fade"
                style={{ animationDelay: "0.25s" }}
              >
                {t("description")}
              </p>

              <div
                className="mt-8 flex flex-col gap-3 sm:flex-row animate-hero-fade"
                style={{ animationDelay: "0.4s" }}
              >
                <Button href="tel:+34650609028" color="purple" className="whitespace-nowrap text-base sm:text-lg">
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  {t("ctaCall")}
                </Button>
                <Button href="#contacto" color="white" className="whitespace-nowrap text-base sm:text-lg">
                  {t("ctaQuote")}
                </Button>
              </div>

              <ul
                className="mt-8 grid gap-x-6 gap-y-3 sm:grid-cols-2 animate-hero-fade"
                style={{ animationDelay: "0.55s" }}
              >
                {trustItems.map((item) => (
                  <li key={item} className="flex items-center gap-2 text-sm font-medium text-zinc-800">
                    <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6C47FF] text-white">
                      <Check className="h-3 w-3" strokeWidth={3} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="animate-hero-fade pb-6" style={{ animationDelay: "0.35s" }}>
              <BrowserMockup />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
