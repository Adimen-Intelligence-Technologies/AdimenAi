"use client";

import { useEffect, useRef, useState } from "react";
import { Cpu, MessageSquare, Settings2, Sparkles } from "lucide-react";
import { Card } from "./Card";
import { Wrapper } from "../Wrapper";

const services = [
  {
    title: "Automatización de procesos",
    description:
      "Automatizamos tus procesos internos para eliminar tareas manuales repetitivas y ganar tiempo.",
    icon: Cpu,
  },
  {
    title: "Agentes de IA a medida",
    description:
      "Creamos agentes inteligentes personalizados que se adaptan a tus casos de uso y procesos específicos.",
    icon: MessageSquare,
  },
  {
    title: "Integración con sistemas",
    description:
      "Conectamos IA con tu ERP, CRM y herramientas internas para que funcionen como un único sistema.",
    icon: Sparkles,
  },
  {
    title: "Chatbots con IA para empresas",
    description:
      "Diseñamos chatbots conversacionales con IA para ventas, soporte y atención corporativa.",
    icon: Settings2,
  },
];

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  const fadeClass = isVisible ? "animate-hero-fade" : "opacity-0";

  return (
    <section className="border-y border-white">
      <Wrapper>
        <div
          className="bg-cover bg-center bg-no-repeat bg-white/80 p-6 sm:p-8 lg:p-12"
          style={{ backgroundImage: "url('/background-05.jpg')" }}
        >
          <div ref={sectionRef} className="mx-auto max-w-3xl text-center px-2 sm:px-0 ">
            <div
              className={`mb-5 inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold pt-20 ${fadeClass}`}
              style={{ animationDelay: "0.1s" }}
            >
              <Sparkles className="h-5 w-5 text-[#6C47FF]" />
              Nuestros servicios
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-[40px] font-semibold ${fadeClass}`}
              style={{ animationDelay: "0.2s" }}
            >
              Cuatro formas de implementar la inteligencia artificial en tu
              empresa
            </h2>
            <p
              className={`mx-auto mt-4 max-w-2xl text-sm sm:text-base  ${fadeClass}`}
              style={{ animationDelay: "0.3s" }}
            >
              Desde una automatización sencilla hasta un proyecto completo a
              medida. Adaptado a tu empresa, tu equipo y tu sistema.
            </p>
          </div>

          <div className="mt-10 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Card
                key={service.title}
                index={index}
                title={service.title}
                description={service.description}
                icon={service.icon}
              />
            ))}
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
