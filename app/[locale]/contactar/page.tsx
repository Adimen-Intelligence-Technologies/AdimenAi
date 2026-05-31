import { Wrapper } from "@/app/components/Wrapper";
import { ContactBlock } from "@/app/components/ui/ContactBlock";
import { getTranslations } from "next-intl/server";

export default async function LocaleContactPage() {
  const t = await getTranslations("contactPage");

  return (
    <section className="bg-zinc-50 text-zinc-900">
      <Wrapper className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6C47FF]">
              {t("eyebrow")}
            </p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
              {t("title")}
            </h1>
            <p className="mt-4 text-base text-zinc-600 sm:text-lg">
              {t("description")}
            </p>
          </div>

          <ContactBlock />
        </div>
      </Wrapper>
    </section>
  );
}