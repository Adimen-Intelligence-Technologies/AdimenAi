import { Wrapper } from "../Wrapper";
import { ContactForm } from "./ContactForm";
import { Sparkles } from "lucide-react";

export function ContactBlock() {
  return (
    <section id="contacto">
      <Wrapper>
        <div
          className="bg-cover bg-center bg-no-repeat bg-white/80 p-6 sm:p-8 lg:p-12"
          style={{ backgroundImage: "url('/background-05.jpg')" }}
        >
        <div className="mx-auto max-w-xl text-center px-2 sm:px-0 mb-10 lg:mb-20">
          <div
            className={`mt-10 inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold pt-2 `}
            style={{ animationDelay: "0.1s" }}
          >
            <Sparkles className="h-5 w-5 text-[#6C47FF] tracking-tight" />
            Estemos en contacto
          </div>
          <h2
            className={`text-3xl sm:text-4xl md:text-[40px] font-semibold tracking-tight`}
            style={{ animationDelay: "0.2s" }}
          >
            ¿Transformamos tu negocio?
          </h2>
          <p
            className={`mx-auto mt-4 max-w-2xl text-sm sm:text-base tracking-tight`}
            style={{ animationDelay: "0.3s" }}
          >
            Descubre cómo la inteligencia artificial puede revolucionar tu
            negocio. Contáctanos hoy.
          </p>
        </div>
        <div className="flex flex-col gap-8 mt-10 mx-auto max-w-4xl lg:flex-row">
          <div className="lg:flex-2">
            <ContactForm />
          </div>
          <div className=" mt-10 lg:flex-1 space-y-5">
            <div>
              <p className="text-zinc-700 text-sm tracking-tight mb-2">
                Oficinas en España
              </p>
              <p className="tracking-tight font-bold">Operamos en toda España</p>
            </div>
            <div>
              <p className="text-zinc-700 text-sm tracking-tight mb-2">Email</p>
              <p className="tracking-tight font-bold">info@adimenai.com</p>
            </div>

            <div>
              <p className="text-zinc-700 text-sm tracking-tight mb-2">Teléfono</p>
              <p className="tracking-tight font-bold">+34 123 456 789</p>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  </section>
  );
}
