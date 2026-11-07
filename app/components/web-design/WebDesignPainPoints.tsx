import { ArrowRight, MousePointerClick, Search, Smartphone } from "lucide-react";
import { useTranslations } from "next-intl";
import { Wrapper } from "../Wrapper";

const ICONS = [Search, Smartphone, MousePointerClick];

export function WebDesignPainPoints() {
  const t = useTranslations("webDesignPage.pain");

  return (
    <section className="border-b border-zinc-200">
      <Wrapper>
        <div className="relative overflow-hidden bg-[#1C1135] px-4 py-14 text-white sm:px-8 sm:py-20 lg:px-12">
          <div className="pointer-events-none absolute -left-24 -top-24 h-72 w-72 rounded-full bg-[#6C47FF]/40 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-32 right-0 h-80 w-80 rounded-full bg-[#42FCFF]/15 blur-3xl" />

          <div className="relative">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#42FCFF]">{t("badge")}</p>
            <h2 className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
              {t("title")}
            </h2>

            <div className="mt-12 grid gap-4 md:grid-cols-3">
              {ICONS.map((Icon, index) => (
                <div
                  key={index}
                  className="rounded-[28px] border border-white/10 bg-white/5 p-6 backdrop-blur-xl sm:p-7"
                >
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-[#42FCFF]">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-xl font-semibold tracking-tight">{t(`items.${index}.title`)}</h3>
                  <p className="mt-2 text-base leading-relaxed text-white/70">{t(`items.${index}.description`)}</p>
                </div>
              ))}
            </div>

            <a
              href="#que-incluye"
              className="group mt-10 inline-flex items-center gap-2 text-lg font-semibold text-white transition-colors hover:text-[#42FCFF]"
            >
              {t("solution")}
              <ArrowRight className="h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
