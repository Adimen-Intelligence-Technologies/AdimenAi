import { Wrapper } from "@/app/components/Wrapper";
import { ContactBlock } from "@/app/components/ui/ContactBlock";
import { CtaSection } from "@/app/components/ui/CtaSection";
import {
  MissionVisionDiagram,
  type DiagramLabel,
} from "@/app/components/ui/MissionVisionDiagram";
import {
  Building2,
  Compass,
  Eye,
  HeartHandshake,
  Lightbulb,
  MapPin,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  Zap,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { getTranslations } from "next-intl/server";

interface ValueItem {
  icon: LucideIcon;
  titleKey: string;
  textKey: string;
}

const VALUE_ITEMS: ValueItem[] = [
  { icon: Lightbulb, titleKey: "value1Title", textKey: "value1Text" },
  { icon: HeartHandshake, titleKey: "value2Title", textKey: "value2Text" },
  { icon: ShieldCheck, titleKey: "value3Title", textKey: "value3Text" },
  { icon: TrendingUp, titleKey: "value4Title", textKey: "value4Text" },
];

interface StatItem {
  value: string;
  labelKey: string;
}

const STATS: StatItem[] = [
  { value: "600+", labelKey: "processes" },
  { value: "40+", labelKey: "clients" },
  { value: "3", labelKey: "regions" },
  { value: "98%", labelKey: "satisfaction" },
];

const DIAGRAM_LABEL_DEFS: { key: string; ringIndex: number; angle: number }[] = [
  { key: "software", ringIndex: 1, angle: 270 },
  { key: "automation", ringIndex: 1, angle: 200 },
  { key: "ecosystems", ringIndex: 2, angle: 350 },
  { key: "growth", ringIndex: 2, angle: 100 },
  { key: "sustainability", ringIndex: 3, angle: 215 },
  { key: "euskera", ringIndex: 3, angle: 320 },
  { key: "reference", ringIndex: 3, angle: 145 },
  { key: "flows", ringIndex: 1, angle: 145 },
  { key: "digitalization", ringIndex: 3, angle: 35 },
];

export default async function AboutPage() {
  const t = await getTranslations("aboutPage");

  const diagramLabels: DiagramLabel[] = DIAGRAM_LABEL_DEFS.map((label) => ({
    key: label.key,
    text: t(`diagramLabels.${label.key}`),
    ringIndex: label.ringIndex,
    angle: label.angle,
  }));

  return (
    <div className="flex flex-col">
      <section className="relative flex items-center justify-center border-b border-zinc-200">
        <Wrapper className="border-x-0 border-zinc-200">
          <div
            className="relative overflow-hidden bg-cover bg-center px-4 sm:px-6 md:px-8 py-20 sm:py-24 md:py-32 border-x border-zinc-200"
            style={{ backgroundImage: "url('/background.avif')" }}
          >
            <div className="absolute inset-0 bg-gradient-to-b from-white/30 via-transparent to-white/40" />
            <div
              className="pointer-events-none absolute -top-24 left-1/2 h-64 w-[640px] -translate-x-1/2 rounded-full opacity-60 blur-3xl"
              style={{ background: "radial-gradient(closest-side, rgba(114,82,255,0.35), transparent)" }}
              aria-hidden="true"
            />
            <div className="relative z-10 flex flex-col items-center justify-center gap-5 text-center px-2 sm:px-6 lg:px-20 xl:px-30">
              <p
                className="inline-flex items-center gap-2 rounded-full border border-[#6C47FF]/20 bg-white/70 px-4 py-1.5 text-sm font-medium text-[#6C47FF] tracking-wide backdrop-blur animate-hero-fade"
                style={{ animationDelay: "0.1s" }}
              >
                <Sparkles className="h-4 w-4" />
                {t("eyebrow")}
              </p>
              <h1
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-black tracking-tighter leading-[1.05] text-balance animate-hero-fade"
                style={{ animationDelay: "0.2s" }}
              >
                {t("title")}
              </h1>
              <h2
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold text-black/70 tracking-tight leading-tight -mt-1 animate-hero-fade"
                style={{ animationDelay: "0.3s" }}
              >
                {t("subtitle")}
              </h2>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <Wrapper>
          <div className="px-4 py-12 sm:px-8 sm:py-16 lg:py-20">
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-zinc-200 bg-zinc-200 sm:grid-cols-4">
                {STATS.map((stat) => (
                  <div
                    key={stat.labelKey}
                    className="flex flex-col items-start gap-1 bg-white p-5 sm:p-7"
                  >
                    <span className="text-3xl font-bold tracking-tighter text-[#6C47FF] sm:text-4xl md:text-5xl">
                      {stat.value}
                    </span>
                    <span className="text-sm font-medium text-zinc-600 sm:text-base">
                      {t(`stats.items.${stat.labelKey}`)}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="bg-zinc-50 border-b border-zinc-200">
        <Wrapper>
          <div
            className="bg-cover bg-center bg-no-repeat px-4 py-16 sm:px-8 sm:py-20 lg:py-28"
            style={{ backgroundImage: "url('/background-04.jpg')" }}
          >
            <div className="mx-auto max-w-6xl">
              <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
                <div>
                  <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#6C47FF]/15 bg-white/70 px-3.5 py-1.5 text-sm font-semibold text-[#6C47FF] backdrop-blur">
                    <Building2 className="h-4 w-4" />
                    {t("companyLabel")}
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tighter leading-tight text-balance">
                    {t("companyTitle")}
                  </h2>
                  <div className="mt-6 space-y-5 text-base sm:text-lg text-zinc-700 leading-relaxed">
                    <p>{t("companyDescription")}</p>
                    <p>{t("companyDescription2")}</p>
                  </div>
                  <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
                    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white/80 p-4 backdrop-blur">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6C47FF]/10 text-[#6C47FF]">
                        <Zap className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-semibold text-black">{t("stats.items.processes")}</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white/80 p-4 backdrop-blur">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6C47FF]/10 text-[#6C47FF]">
                        <HeartHandshake className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-semibold text-black">{t("stats.items.clients")}</span>
                    </div>
                    <div className="flex items-center gap-3 rounded-xl border border-zinc-200 bg-white/80 p-4 backdrop-blur">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#6C47FF]/10 text-[#6C47FF]">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <span className="text-sm font-semibold text-black">{t("stats.items.regions")}</span>
                    </div>
                  </div>
                </div>

                <div className="relative">
                  <div
                    className="pointer-events-none absolute -inset-8 -z-10 rounded-full opacity-70 blur-3xl"
                    style={{ background: "radial-gradient(closest-side, rgba(114,82,255,0.25), transparent 70%)" }}
                    aria-hidden="true"
                  />
                  <div className="relative rounded-3xl border border-zinc-200 bg-white/80 p-6 shadow-[0_30px_60px_-30px_rgba(114,82,255,0.4)] backdrop-blur sm:p-8">
                    <div className="absolute -top-3 left-6 inline-flex items-center gap-1.5 rounded-full border border-[#6C47FF]/20 bg-white px-3 py-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-[#6C47FF]">
                      <Sparkles className="h-3 w-3" />
                      {t("diagramEyebrow")}
                    </div>
                    <MissionVisionDiagram
                      title="IA"
                      centerLabel={t("diagramCenterLabel")}
                      footerLabel={t("diagramFooter")}
                      labels={diagramLabels}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="border-b border-zinc-200 bg-white">
        <Wrapper>
          <div
            className="bg-cover bg-center bg-no-repeat bg-white/80 px-4 py-16 sm:px-8 sm:py-20 lg:py-28"
            style={{ backgroundImage: "url('/background-02.avif')" }}
          >
            <div className="mx-auto max-w-5xl">
              <div className="text-center">
                <div className="mb-3 inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-[#6C47FF]">
                  <Sparkles className="h-5 w-5" />
                  {t("valuesBadge")}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tighter leading-tight text-balance">
                  {t("valuesTitle")}
                </h2>
                <p className="mx-auto mt-4 max-w-2xl text-base sm:text-lg text-zinc-600 leading-relaxed">
                  {t("valuesSubtitle")}
                </p>
              </div>

              <div className="mt-12 grid gap-5 sm:grid-cols-2">
                {VALUE_ITEMS.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.titleKey}
                      className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white p-6 sm:p-7 transition-all duration-300 hover:-translate-y-1 hover:border-[#6C47FF]/40 hover:shadow-[0_20px_50px_-25px_rgba(114,82,255,0.45)]"
                    >
                      <div
                        className="pointer-events-none absolute -right-12 -top-12 h-32 w-32 rounded-full bg-[#6C47FF]/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        aria-hidden="true"
                      />
                      <div className="relative flex items-start gap-4">
                        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6C47FF] text-white shadow-[0_8px_24px_-8px_rgba(114,82,255,0.6)]">
                          <Icon className="h-5 w-5" />
                        </div>
                        <div>
                          <div className="mb-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-zinc-400">
                            0{index + 1}
                          </div>
                          <h3 className="text-lg sm:text-xl font-bold text-black tracking-tight">
                            {t(item.titleKey)}
                          </h3>
                          <p className="mt-2 text-sm sm:text-base text-zinc-600 leading-relaxed">
                            {t(item.textKey)}
                          </p>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="border-b border-zinc-200 bg-zinc-50">
        <Wrapper>
          <div
            className="bg-cover bg-center bg-no-repeat bg-white/80 px-4 py-16 sm:px-8 sm:py-20 lg:py-28"
            style={{ backgroundImage: "url('/background-05.jpg')" }}
          >
            <div className="mx-auto max-w-5xl">
              <div className="grid grid-cols-1 items-start gap-10 lg:grid-cols-[1fr_1.4fr] lg:gap-16">
                <div>
                  <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-[#6C47FF]/10 px-3.5 py-1.5 text-sm font-semibold text-[#6C47FF]">
                    <Compass className="h-4 w-4" />
                    {t("storyBadge")}
                  </div>
                  <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tighter leading-tight text-balance">
                    {t("storyTitle")}
                  </h2>
                </div>
                <div className="space-y-6 text-base sm:text-lg text-zinc-700 leading-relaxed">
                  <p>{t("storyP1")}</p>
                  <p>{t("storyP2")}</p>
                  <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-2">
                    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6C47FF]/10 text-[#6C47FF]">
                          <Lightbulb className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-semibold text-black">
                          {t("missionTitle")}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                        {t("missionText")}
                      </p>
                    </div>
                    <div className="rounded-2xl border border-zinc-200 bg-white p-5">
                      <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#6C47FF]/10 text-[#6C47FF]">
                          <Eye className="h-5 w-5" />
                        </div>
                        <h3 className="text-base font-semibold text-black">
                          {t("visionTitle")}
                        </h3>
                      </div>
                      <p className="mt-3 text-sm leading-relaxed text-zinc-600">
                        {t("visionText")}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Wrapper>
      </section>

      <section className="bg-white border-b border-zinc-200">
        <Wrapper>
          <div className="px-4 py-16 sm:px-8 sm:py-20 lg:py-24">
            <div className="mx-auto max-w-6xl">
              <div className="text-center mb-12">
                <div className="inline-flex items-center gap-2 rounded-full bg-[#6C47FF]/10 px-3.5 py-1.5 text-sm font-semibold text-[#6C47FF] mb-3">
                  <MapPin className="h-4 w-4" />
                  {t("locationLabel")}
                </div>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-black tracking-tighter leading-tight text-balance">
                  {t("locationTitle")}
                </h2>
                <p className="mt-3 max-w-3xl mx-auto text-base sm:text-lg text-zinc-600 leading-relaxed">
                  {t("locationDescription")}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center transition-colors duration-300 hover:border-[#6C47FF]/40 hover:bg-white">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#6C47FF] text-white">
                    <MapPin className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-black mb-1.5">
                    {t("locationCard1Title")}
                  </h3>
                  <p className="text-sm text-zinc-600">
                    {t("locationCard1Text")}
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center transition-colors duration-300 hover:border-[#6C47FF]/40 hover:bg-white">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#6C47FF] text-white">
                    <Building2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-black mb-1.5">
                    {t("locationCard2Title")}
                  </h3>
                  <p className="text-sm text-zinc-600">
                    {t("locationCard2Text")}
                  </p>
                </div>
                <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-6 text-center transition-colors duration-300 hover:border-[#6C47FF]/40 hover:bg-white">
                  <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#6C47FF] text-white">
                    <Lightbulb className="h-5 w-5" />
                  </div>
                  <h3 className="text-base font-semibold text-black mb-1.5">
                    {t("locationCard3Title")}
                  </h3>
                  <p className="text-sm text-zinc-600">
                    {t("locationCard3Text")}
                  </p>
                </div>
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
