import { MapPin, Navigation, Phone, Search, Star } from "lucide-react";
import { useTranslations } from "next-intl";

export function SerpMockup() {
  const t = useTranslations("webDesignPage.seo.serp");

  return (
    <div className="relative mx-auto w-full max-w-xl" aria-hidden="true">
      <div className="absolute -inset-4 rounded-[48px] bg-gradient-to-tr from-[#42FCFF]/25 via-transparent to-[#6C47FF]/30 blur-3xl" />

      <div className="relative rounded-[28px] border border-zinc-200 bg-white p-4 shadow-2xl shadow-[#1C1135]/10 sm:p-6">
        <span className="absolute -top-3 left-6 rounded-full bg-[#6C47FF] px-3 py-1 text-xs font-semibold text-white">
          {t("label")}
        </span>

        <div className="flex items-center gap-3 rounded-full border border-zinc-200 px-4 py-3 shadow-sm">
          <Search className="h-4 w-4 text-zinc-400" />
          <span className="text-sm text-zinc-800">{t("query")}</span>
        </div>

        <div className="mt-4 overflow-hidden rounded-2xl border border-zinc-200">
          <div
            className="relative h-28 bg-[#eef2f7]"
            style={{
              backgroundImage:
                "linear-gradient(#dfe5ee 1px, transparent 1px), linear-gradient(90deg, #dfe5ee 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          >
            <span className="absolute left-[18%] top-[55%] h-2 w-2 rounded-full bg-zinc-400" />
            <span className="absolute left-[72%] top-[30%] h-2 w-2 rounded-full bg-zinc-400" />
            <MapPin className="absolute left-1/2 top-1/2 h-9 w-9 -translate-x-1/2 -translate-y-full fill-[#6C47FF] text-white drop-shadow-lg" />
          </div>
          <div className="flex flex-wrap items-center justify-between gap-3 p-4">
            <div>
              <p className="font-semibold text-zinc-950">{t("business")}</p>
              <p className="mt-0.5 flex items-center gap-1 text-xs text-zinc-500">
                <span className="font-semibold text-zinc-700">4,9</span>
                <span className="flex text-amber-400">
                  {[0, 1, 2, 3, 4].map((star) => (
                    <Star key={star} className="h-3 w-3 fill-current" />
                  ))}
                </span>
                · {t("location")}
              </p>
            </div>
            <div className="flex gap-2">
              <span className="inline-flex items-center gap-1 rounded-full bg-[#6C47FF] px-3 py-1.5 text-xs font-semibold text-white">
                <Phone className="h-3 w-3" />
                {t("call")}
              </span>
              <span className="inline-flex items-center gap-1 rounded-full border border-zinc-200 px-3 py-1.5 text-xs font-semibold text-zinc-700">
                <Navigation className="h-3 w-3" />
                {t("directions")}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-4 rounded-2xl bg-[#6C47FF]/5 p-4 ring-2 ring-[#6C47FF]/25">
          <div className="flex items-center gap-2">
            <span className="h-6 w-6 rounded-full bg-gradient-to-br from-[#6C47FF] to-[#42FCFF]" />
            <span className="text-xs text-zinc-600">{t("url")}</span>
          </div>
          <p className="mt-2 text-lg font-medium leading-snug text-[#1a0dab]">{t("title")}</p>
          <p className="mt-1 text-sm leading-snug text-zinc-600">{t("description")}</p>
        </div>

        <div className="mt-4 space-y-4 px-4 opacity-50">
          {[0, 1].map((row) => (
            <div key={row}>
              <span className="block h-2 w-24 rounded-full bg-zinc-200" />
              <span className="mt-2 block h-3 w-3/4 rounded-full bg-zinc-300" />
              <span className="mt-2 block h-2 w-full rounded-full bg-zinc-200" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
