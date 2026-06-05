import { Wrapper } from "@/app/components/Wrapper";
import { getTranslations } from "next-intl/server";

export default async function LocaleHosteleriaPage() {
  const t = await getTranslations("hosteleriaPage");

  return (
    <div className="flex flex-col">
      <section className="relative flex items-center justify-center border-b border-zinc-200">
        <Wrapper className="border-x-0 border-zinc-200">
          <div
            className="relative overflow-hidden bg-cover bg-center px-4 sm:px-6 md:px-8 py-20 sm:py-28 md:py-36 border-x border-zinc-200"
            style={{ backgroundImage: "url('/background.avif')" }}
          >
            <div className="absolute inset-0" />
            <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center px-2 sm:px-6 lg:px-20 xl:px-30">
              <p
                className="text-base sm:text-lg md:text-xl font-medium text-gray-600 tracking-wide animate-hero-fade"
                style={{ animationDelay: "0.1s" }}
              >
                {t("eyebrow")}
              </p>
              <h1
                className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold text-black tracking-tighter leading-none animate-hero-fade"
                style={{ animationDelay: "0.2s" }}
              >
                {t("title")}
              </h1>
              <p
                className="max-w-4xl text-base sm:text-lg md:text-xl text-black/80 leading-relaxed animate-hero-fade"
                style={{ animationDelay: "0.35s" }}
              >
                {t("subtitle")}
              </p>
            </div>
          </div>
        </Wrapper>
      </section>
    </div>
  );
}
