import Link from "next/link";
import { ArrowRight, Check, LayoutTemplate, MapPin, ShoppingCart, Sparkles } from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { toLocalePath } from "@/lib/locale-path";
import { Wrapper } from "../Wrapper";
import { Button } from "../ui/Button";

const PLANS = [
  { icon: LayoutTemplate, featured: false },
  { icon: MapPin, featured: true },
  { icon: ShoppingCart, featured: false },
];

export function WebDesignPlans({ priceGuideSlug }: { priceGuideSlug: string }) {
  const t = useTranslations("webDesignPage.plans");
  const locale = useLocale();

  return (
    <section id="tipos-de-web" className="border-b border-zinc-200">
      <Wrapper>
        <div
          className="relative overflow-hidden bg-cover bg-center px-4 py-12 sm:px-8 sm:py-16 lg:py-24"
          style={{ backgroundImage: "url('/background-06.jpg')" }}
        >
          <div className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-sm" />

          <div className="relative">
            <div className="mx-auto max-w-3xl text-left sm:text-center">
              <div className="mb-3 inline-flex items-center gap-2 text-lg font-semibold">
                <Sparkles className="h-5 w-5 text-[#6C47FF]" />
                {t("badge")}
              </div>
              <h2 className="text-3xl font-semibold leading-tight tracking-tight text-balance sm:text-4xl md:text-5xl">
                {t("title")}
              </h2>
              <p className="mt-4 text-lg leading-tight tracking-tight text-black sm:text-base">{t("description")}</p>
            </div>

            <div className="mt-12 grid items-stretch gap-4 lg:grid-cols-3">
              {PLANS.map(({ icon: Icon, featured }, index) => (
                <article
                  key={index}
                  className={`relative flex flex-col overflow-hidden rounded-[28px] border p-7 sm:p-8 ${
                    featured
                      ? "border-[#6C47FF]/40 bg-[#1C1135] text-white shadow-2xl shadow-[#6C47FF]/25 lg:-my-4 lg:py-12"
                      : "border-white/30 bg-white/40 text-zinc-950 shadow-2xl shadow-black/5 backdrop-blur-xl"
                  }`}
                >
                  {featured && (
                    <>
                      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#7252FF] via-[#8C6CFF] to-[#42FCFF] opacity-90 blur-md" />
                      <span className="absolute right-6 top-6 rounded-full bg-[#42FCFF] px-3 py-1 text-xs font-semibold text-[#1C1135]">
                        {t("recommended")}
                      </span>
                    </>
                  )}
                  <span
                    className={`flex h-12 w-12 items-center justify-center rounded-full ${
                      featured ? "bg-white/10 text-[#42FCFF]" : "bg-[#6C47FF] text-white"
                    }`}
                  >
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-6 text-2xl font-semibold tracking-tight">{t(`items.${index}.name`)}</h3>
                  <p className={`mt-2 text-base ${featured ? "text-white/70" : "text-zinc-700"}`}>
                    {t(`items.${index}.description`)}
                  </p>

                  <ul className="mt-6 flex-1 space-y-3">
                    {[0, 1, 2, 3, 4].map((feature) => (
                      <li key={feature} className="flex items-start gap-3 text-sm">
                        <Check
                          className={`mt-0.5 h-4 w-4 shrink-0 ${featured ? "text-[#42FCFF]" : "text-[#6C47FF]"}`}
                          strokeWidth={3}
                        />
                        <span className={featured ? "text-white/90" : "text-zinc-800"}>
                          {t(`items.${index}.features.${feature}`)}
                        </span>
                      </li>
                    ))}
                  </ul>

                  <Button href="#contacto" color={featured ? "purple" : "white"} className="mt-8 w-full text-base">
                    {t("cta")}
                  </Button>
                </article>
              ))}
            </div>

            <p className="mt-12 text-center text-base text-zinc-800">
              {t("priceNote")}{" "}
              <Link
                href={toLocalePath(locale, `/blog/${priceGuideSlug}`)}
                className="group inline-flex items-center gap-1 font-semibold text-[#6C47FF] underline-offset-4 hover:underline"
              >
                {t("priceGuide")}
                <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
              </Link>
            </p>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
