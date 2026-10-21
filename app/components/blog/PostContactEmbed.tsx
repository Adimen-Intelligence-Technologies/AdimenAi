import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";
import { ContactForm } from "../ui/ContactForm";

export function PostContactEmbed() {
  const t = useTranslations("blogPost");

  return (
    <aside
      id="contacto"
      aria-labelledby="post-contact-title"
      className="relative my-14 overflow-hidden rounded-[28px] border border-zinc-200 bg-cover bg-center not-italic"
      style={{ backgroundImage: "url('/background-05.jpg')" }}
    >
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#7252FF]/70 via-[#8C6CFF]/60 to-[#42FCFF]/40 opacity-80 blur-xl" />
      <div className="relative bg-white/40 px-2 pt-8 backdrop-blur-sm sm:px-4 sm:pt-10">
        <div className="px-4 text-center sm:px-6">
          <div className="inline-flex items-center gap-2 text-base font-semibold text-zinc-900">
            <Sparkles className="h-5 w-5 text-[#6C47FF]" aria-hidden="true" />
            {t("contactBadge")}
          </div>
          <h2
            id="post-contact-title"
            className="mt-3 text-2xl font-semibold tracking-tight text-zinc-950 text-balance sm:text-3xl"
          >
            {t("contactTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-md text-base tracking-tight text-zinc-700">
            {t("contactDescription")}
          </p>
        </div>
        <ContactForm />
      </div>
    </aside>
  );
}
