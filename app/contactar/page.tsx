import { Wrapper } from "../components/Wrapper";
import { ContactBlock } from "../components/ui/ContactBlock";

export default function ContactPage() {
  return (
    <section className="bg-zinc-50 text-zinc-900">
      <Wrapper className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-6xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6C47FF]">
              Contacto
            </p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Hablemos de tu proyecto
            </h1>
            <p className="mt-4 text-base text-zinc-600 sm:text-lg">
              Completa el formulario y nos pondremos en contacto contigo para una llamada inicial sin compromiso.
            </p>
          </div>

          <ContactBlock />
        </div>
      </Wrapper>
    </section>
  );
}
