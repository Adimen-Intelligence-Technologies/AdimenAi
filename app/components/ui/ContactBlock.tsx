import { Wrapper } from "../Wrapper";
import { ContactForm } from "./ContactForm";
import { Sparkles } from "lucide-react";
import { useTranslations } from "next-intl";

export function ContactBlock() {
  const t = useTranslations("contactBlock");

  return (
    <section id="contacto">
      <Wrapper>
        <div
          className="bg-cover bg-center bg-no-repeat bg-white/80 px-4 py-12 sm:px-8 sm:py-16 lg:py-24"
          style={{ backgroundImage: "url('/background-05.jpg')" }}
        >
        <div className="mx-auto max-w-3xl text-center">
          <div
            className={`mb-3 inline-flex items-center justify-center gap-2 text-lg font-semibold`}
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="h-5 w-5 text-[#6C47FF]" />
            {t("badge")}
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-balance`}
            style={{ animationDelay: "0.2s" }}
          >
            {t("title")}
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl text-lg leading-tight sm:text-base tracking-tight`}
            style={{ animationDelay: "0.3s" }}
          >
            {t("description")}
          </p>
        </div>
        <div className="mt-12 flex flex-col gap-8 mx-auto max-w-4xl lg:flex-row">
          <div className="lg:flex-2">
            <ContactForm />
          </div>
          <div className="lg:flex-1 space-y-5">
            <div>
              <p className="text-zinc-700 text-sm tracking-tight mb-2">
                {t("officeLabel")}
              </p>
              <p className="tracking-tight font-bold">{t("officeValue")}</p>
            </div>
            <div>
              <p className="text-zinc-700 text-sm tracking-tight mb-2">{t("emailLabel")}</p>
              <a href="mailto:info@adimenai.com" className="tracking-tight font-bold hover:text-[#6C47FF] transition-colors">info@adimenai.com</a>
            </div>

            <div>
              <p className="text-zinc-700 text-sm tracking-tight mb-2">{t("phoneLabel")}</p>
              <a href="tel:+34650609028" className="tracking-tight font-bold hover:text-[#6C47FF] transition-colors">+34 650 60 90 28</a>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
  );
}
