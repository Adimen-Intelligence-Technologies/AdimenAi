"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { Wrapper } from "../Wrapper";
import { HeroButton } from "./HeroButton";

const faqs = [
  {
    question: "¿Necesito conocimientos técnicos para implementar IA en mi empresa?",
    answer:
      "No. Nos encargamos de todo el desarrollo e integración. Tu equipo solo necesita saber usar el resultado final, que diseñamos para que sea lo más sencillo posible.",
  },
  {
    question: "¿Hacéis consultoría presencial en la empresa?",
    answer:
      "Sí. Nos desplazamos a las instalaciones del cliente para analizar los procesos internos en persona, detectar cuellos de botella y oportunidades de automatización que no son evidentes desde fuera.",
  },
  {
    question: "¿Podéis crear una tienda online para mi comercio o restaurante?",
    answer:
      "Sí. Implementamos sistemas de pedidos online y páginas web para comercios y restaurantes con un panel de control muy sencillo para que cualquier persona del negocio lo gestione sin conocimientos técnicos.",
  },
  {
    question: "¿Funcionan vuestras soluciones con cualquier ERP o sistema?",
    answer:
      "Sí. Trabajamos con SAP, Dynamics AX, Holded, Sage y cualquier sistema con API o acceso a base de datos.",
  },
  {
    question: "¿Cuánto tiempo tarda la implementación?",
    answer:
      "Una tienda online para un comercio en 1-2 semanas. Una automatización sencilla en 2 semanas. Un agente de IA completo con integración en ERP entre 4 y 8 semanas.",
  },
  {
    question: "¿Emitís factura con IVA?",
    answer:
      "Sí. Somos autónomos registrados en España con todas las obligaciones fiscales al día. Emitimos factura con IVA y operamos con empresas de toda Europa con NIF intracomunitario.",
  },
];

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="border-b border-zinc-200">
      <Wrapper>
        <div
          className="relative overflow-hidden border-x-0 border-zinc-200 bg-cover bg-center px-6 py-18 sm:px-10 lg:px-12 lg:py-24"
          style={{ backgroundImage: "url('/background-03.jpg'),0.2",  }}
        >
          <div className="pointer-events-none absolute inset-0 bg-white/10 backdrop-blur-3xl" />
          <div className="pointer-events-none absolute -top-18 right-[15%] h-40 w-56 rounded-full bg-[#7a68ff]/25 blur-3xl" />
          <div className="pointer-events-none absolute top-[44%] right-[8%] h-28 w-44 rounded-full bg-white/60 blur-2xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_minmax(620px,1.35fr)] lg:gap-14">
            <div className="max-w-md">
              <div className="inline-flex items-center gap-2 text-[30px] text-[#6e56ff]">
                <span className="leading-none">+</span>
                <p className="text-lg font-medium text-zinc-900">Preguntas frecuentes</p>
              </div>

              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-black sm:text-[54px] sm:leading-[1.06]">
                Encuentra tus respuestas
              </h2>

              <p className="mt-4 max-w-sm text-xl text-black ">
                Respuestas rápidas sobre nuestras soluciones y cómo ayudamos a tu equipo.
              </p>

              <p className="mt-8 text-xl font-medium text-black">¿Todavía necesitas ayuda?</p>

              <HeroButton href="/contactar" className="mt-4 text-2xl">
                Contáctanos
              </HeroButton>
            </div>

            <div className="space-y-2 sm:space-y-3">
              {faqs.map((item, index) => {
                const isOpen = openIndex === index;

                return (
                  <article
                    key={item.question}
                    className="overflow-hidden border p-3"
                    style={{
                      borderWidth: 1,
                      borderStyle: "solid",
                      borderColor: "rgba(255, 255, 255, 0.2)",
                      backgroundColor: "rgba(255, 255, 255, 0.28)",
                      borderRadius: 4,
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => handleToggle(index)}
                      className="flex w-full items-start justify-between gap-4 text-left sm:items-center"
                      aria-expanded={isOpen}
                    >
                      <span className="flex-1 text-base font-semibold text-slate-950 ">
                        {item.question}
                      </span>

                      <span
                        className={`inline-flex h-10 w-10 shrink-0 items-center justify-center transition-transform ${
                          isOpen ? "rotate-45" : "rotate-0"
                        }`}
                      >
                        <Plus className="h-5 w-5" strokeWidth={2.2} />
                      </span>
                    </button>

                    <div className={`overflow-hidden transition-all duration-300 ease-out ${isOpen ? "max-h-80 opacity-100 mt-5" : "max-h-0 opacity-0"}`}>
                      <p className="text-sm  text-black">{item.answer}</p>
                    </div>
                  </article>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
