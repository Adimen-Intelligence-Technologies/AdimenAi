"use client";

import { useTranslations } from "next-intl";
import { Button } from "./Button";

export function ContactForm() {
  const t = useTranslations("contactForm");

  return (
    <div className="relative overflow-hidden rounded border border-white/20 bg-white/20 ">
      <div className="absolute inset-x-0 top-0 h-2 opacity-80 blur-xl" />
      <div className="relative px-6 py-8 sm:px-10 sm:py-10">
        <form className="grid gap-3">
          <div className="grid gap-3 md:grid-cols-2">
            <label className="flex flex-col text-sm  text-zinc-900 tracking-tight">
              {t("name")}
              <input
                type="text"
                name="name"
                placeholder={t("namePlaceholder")}
                className="min-h-13 border-b border-zinc-300 bg-transparent text-zinc-900 outline-none transition focus:border-b-[#7252FF] focus:ring-0"
              />
            </label>
            <label className="flex flex-col text-sm  text-zinc-900 tracking-tight">
              {t("email")}
              <input
                type="email"
                name="email"
                placeholder={t("emailPlaceholder")}
                className="min-h-13 border-b border-zinc-300 bg-transparent text-zinc-900 outline-none transition focus:border-b-[#7252FF] focus:ring-0"
              />
            </label>
          </div>

          <label className="flex flex-col text-sm  text-zinc-900 tracking-tight">
            {t("phone")}
            <input
              type="tel"
              name="phone"
              placeholder={t("phonePlaceholder")}
              className="min-h-13 border-b border-zinc-300 bg-transparent text-zinc-900 outline-none transition focus:border-b-[#7252FF] focus:ring-0"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm text-zinc-900 tracking-tight">
            {t("subject")}
            <select
              name="subject"
              className="min-h-13 border-b border-zinc-300 bg-transparent py-1 text-sm text-zinc-900  outline-none transition focus:border-b-[#7252FF] focus:ring-0"
            >
              <option value="">{t("subjectPlaceholder")}</option>
              <option value="demo">{t("subjectDemo")}</option>
              <option value="automation">{t("subjectAutomation")}</option>
              <option value="integration">{t("subjectIntegration")}</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm text-zinc-900 tracking-tight">
            {t("message")}
            <textarea
              name="message"
              rows={6}
              placeholder={t("messagePlaceholder")}
              className="min-h-3 border-b border-zinc-300 bg-transparent tracking-tight  text-sm text-zinc-900  outline-none transition focus:border-b-[#7252FF] focus:ring-0"
            />
          </label>

          <Button
            type="submit"
            color="purple"
            className="tracking-tight h-14 px-8 text-sm"
          >
            {t("submit")}
          </Button>

          <p className="text-center text-sm text-zinc-600 tracking-tight">
            {t("legalPrefix")} <span className="text-[#7252FF] font-bold">{t("legalPrivacy")}</span> {t("legalSuffix")}
          </p>
        </form>
      </div>
    </div>
  );
}
