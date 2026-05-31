import { Wrapper } from "../components/Wrapper";
import { ContactBlock } from "../components/ui/ContactBlock";
import { getTranslations } from "next-intl/server";

export default async function ContactPage() {
  const t = await getTranslations("contactPage");

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
              <p
                className="max-w-3xl text-base sm:text-lg text-black leading-tight animate-hero-fade"
                style={{ animationDelay: "0.35s" }}
              >
                {t("description")}
              </p>
            </div>
          </div>
        </Wrapper>
      </section>

      <ContactBlock />
    </div>
  );
}
