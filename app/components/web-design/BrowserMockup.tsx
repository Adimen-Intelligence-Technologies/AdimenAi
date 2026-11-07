import { Lock, MapPin, Phone, PhoneCall, Smartphone, Sparkles, Zap } from "lucide-react";
import { useTranslations } from "next-intl";

const chipClass =
  "absolute z-20 inline-flex items-center gap-2 rounded-full border border-white bg-white/85 px-3 py-2 text-xs sm:text-sm font-semibold text-zinc-900 shadow-lg shadow-[#1C1135]/10 backdrop-blur-md animate-float";

export function BrowserMockup() {
  const t = useTranslations("webDesignPage.hero.mockup");

  return (
    <div className="relative mx-auto w-full max-w-xl px-2 sm:px-6" aria-hidden="true">
      <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-tr from-[#6C47FF]/35 via-[#fc42ff]/15 to-[#42FCFF]/35 blur-3xl" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/50 bg-white/30 shadow-2xl shadow-[#1C1135]/15 backdrop-blur-xl">
        <div className="flex items-center gap-3 border-b border-white/40 px-4 py-3">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#fc42ff]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#7252FF]/70" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#42FCFF]/80" />
          </div>
          <div className="flex flex-1 items-center gap-2 rounded-full bg-white/70 px-3 py-1.5 text-xs text-zinc-500">
            <Lock className="h-3 w-3 text-zinc-400" />
            {t("url")}
          </div>
        </div>

        <div className="space-y-4 bg-white/70 p-4 sm:p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="h-6 w-6 rounded-lg bg-gradient-to-br from-[#6C47FF] to-[#42FCFF]" />
              <span className="h-2 w-16 rounded-full bg-zinc-300" />
            </div>
            <div className="hidden gap-3 sm:flex">
              <span className="h-2 w-10 rounded-full bg-zinc-200" />
              <span className="h-2 w-10 rounded-full bg-zinc-200" />
              <span className="h-2 w-10 rounded-full bg-zinc-200" />
            </div>
            <span className="h-6 w-16 rounded-full bg-[#7252FF]" />
          </div>

          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-[#1C1135] via-[#3b2399] to-[#6C47FF] p-5 sm:p-7 text-white">
            <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#42FCFF]/30 blur-2xl" />
            <div className="relative">
              <span className="inline-flex items-center gap-1.5 rounded-full bg-white/15 px-2.5 py-1 text-[11px] font-semibold">
                <Sparkles className="h-3 w-3 text-[#42FCFF]" />
                {t("kicker")}
              </span>
              <p className="mt-3 max-w-xs text-xl sm:text-2xl font-semibold leading-tight tracking-tight">
                {t("headline")}
              </p>
              <div className="mt-3 space-y-1.5">
                <span className="block h-1.5 w-4/5 rounded-full bg-white/30" />
                <span className="block h-1.5 w-3/5 rounded-full bg-white/30" />
              </div>
              <span className="mt-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs sm:text-sm font-semibold text-[#1C1135]">
                <Phone className="h-3.5 w-3.5 text-[#6C47FF]" />
                {t("cta")}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-3">
            {[0, 1, 2].map((item) => (
              <div key={item} className="rounded-xl border border-zinc-200/70 bg-white p-3">
                <span className="mb-3 block h-6 w-6 rounded-full bg-[#6C47FF]/15" />
                <span className="block h-1.5 w-full rounded-full bg-zinc-200" />
                <span className="mt-1.5 block h-1.5 w-2/3 rounded-full bg-zinc-200" />
              </div>
            ))}
          </div>
        </div>
      </div>

      <span className={`${chipClass} left-0 top-20`}>
        <Smartphone className="h-4 w-4 text-[#6C47FF]" />
        {t("chipMobile")}
      </span>
      <span className={`${chipClass} -right-1 top-6 sm:right-0`} style={{ animationDelay: "-2s" }}>
        <Zap className="h-4 w-4 text-[#6C47FF]" />
        {t("chipSpeed")}
      </span>
      <span className={`${chipClass} bottom-24 -right-1 sm:right-0`} style={{ animationDelay: "-4s" }}>
        <MapPin className="h-4 w-4 text-[#6C47FF]" />
        {t("chipSeo")}
      </span>

      <div
        className="absolute -bottom-6 left-2 z-20 flex max-w-[15rem] items-center gap-3 rounded-2xl border border-white bg-white/90 p-3 shadow-xl shadow-[#1C1135]/15 backdrop-blur-md animate-float sm:left-0"
        style={{ animationDelay: "-3s" }}
      >
        <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6C47FF] text-white animate-pulse-glow">
          <PhoneCall className="h-4 w-4" />
        </span>
        <span className="min-w-0">
          <span className="block text-sm font-semibold text-zinc-950">{t("notificationTitle")}</span>
          <span className="block truncate text-xs text-zinc-500">{t("notificationBody")}</span>
        </span>
      </div>
    </div>
  );
}
