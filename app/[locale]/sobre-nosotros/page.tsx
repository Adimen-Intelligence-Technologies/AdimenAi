import { Wrapper } from "@/app/components/Wrapper";
import { ContactBlock } from "@/app/components/ui/ContactBlock";
import { CtaSection } from "@/app/components/ui/CtaSection";
import { MapPin, Lightbulb, Eye, Building2 } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("aboutPage");

  return (
    <div className="flex flex-col">
      <section className="relative flex items-center justify-center border-b border-zinc-200">
        <Wrapper className="border-x-0 border-zinc-200">
          <div
            className="relative overflow-hidden bg-cover bg-center px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 border-x border-zinc-200"
            style={{ backgroundImage: "url('/background.avif')" }}
          >
            <div className="absolute inset-0" />
            <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center px-2 sm:px-6 lg:px-20 xl:px-30">
              <p
                className="text-base sm:text-lg md:text-xl font-medium text-gray-600 tracking-wide animate-hero-fade"
                style={{ animationDelay: "0.1s" }}
              >
                {t("eyebrow")}
              </p>
              <h1
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tighter leading-tight animate-hero-fade"
                style={{ animationDelay: "0.2s" }}
              >
                {t("title")}
              </h1>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black tracking-tighter leading-tight -mt-2 animate-hero-fade"
                style={{ animationDelay: "0.25s" }}
              >
                {t("subtitle")}
              </h2>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="bg-white py-16 sm:py-20 border-b border-zinc-200">
        <Wrapper className="px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full bg-[#6C47FF]/10 px-4 py-1.5 text-sm font-medium text-[#6C47FF] mb-6">
                  <Building2 className="h-4 w-4" />
                  {t("companyLabel")}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                  {t("companyTitle")}
                </h2>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mb-6">
                  {t("companyDescription")}
                </p>
                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed">
                  {t("companyDescription2")}
                </p>
              </div>
              <div className="flex flex-col gap-8">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6C47FF]/10 text-[#6C47FF]">
                      <Lightbulb className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      {t("missionTitle")}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {t("missionText")}
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 sm:p-8">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6C47FF]/10 text-[#6C47FF]">
                      <Eye className="h-5 w-5" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-semibold text-black">
                      {t("visionTitle")}
                    </h3>
                  </div>
                  <p className="text-sm sm:text-base text-zinc-600 leading-relaxed">
                    {t("visionText")}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="bg-zinc-50 py-16 sm:py-20 border-b border-zinc-200">
        <Wrapper className="px-4 sm:px-6 lg:px-10">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 rounded-full bg-[#6C47FF]/10 px-4 py-1.5 text-sm font-medium text-[#6C47FF] mb-4">
                <MapPin className="h-4 w-4" />
                {t("locationLabel")}
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-black mb-4">
                {t("locationTitle")}
              </h2>
              <p className="text-base sm:text-lg text-zinc-600 max-w-3xl mx-auto">
                {t("locationDescription")}
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6C47FF]/10 text-[#6C47FF] mx-auto mb-4">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-black mb-2">
                  {t("locationCard1Title")}
                </h3>
                <p className="text-sm text-zinc-600">
                  {t("locationCard1Text")}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6C47FF]/10 text-[#6C47FF] mx-auto mb-4">
                  <Building2 className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-black mb-2">
                  {t("locationCard2Title")}
                </h3>
                <p className="text-sm text-zinc-600">
                  {t("locationCard2Text")}
                </p>
              </div>
              <div className="rounded-xl border border-zinc-200 bg-white p-6 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#6C47FF]/10 text-[#6C47FF] mx-auto mb-4">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <h3 className="text-base font-semibold text-black mb-2">
                  {t("locationCard3Title")}
                </h3>
                <p className="text-sm text-zinc-600">
                  {t("locationCard3Text")}
                </p>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <CtaSection />
      <ContactBlock />
    </div>
  );
}
