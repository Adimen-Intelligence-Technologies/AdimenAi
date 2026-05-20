"use client";

import { useEffect, useRef, useState } from "react";
import { Bell, Box, FileText, Mail, MessageSquare, Truck, Users, BarChart3, Sparkles } from "lucide-react";
import { Wrapper } from "../Wrapper";
import { Card } from "./Card";

const useCases = [
  {
    title: "Gestión de pedidos",
    description:
      "El trabajador reenvía el PDF del proveedor y el agente lo registra automáticamente en el ERP.",
    icon: Truck,
  },
  {
    title: "Facturación automática",
    description:
      "Extracción de datos de facturas y registro automático en el sistema contable.",
    icon: FileText,
  },
  {
    title: "Informes automáticos",
    description:
      "Generación y envío de informes semanales sin que nadie toque una hoja de cálculo.",
    icon: BarChart3,
  },
  {
    title: "Gestión de emails",
    description:
      "Clasificación, respuesta automática y derivación de emails según el tipo de consulta.",
    icon: Mail,
  },
  {
    title: "Seguimiento de leads",
    description:
      "Cualificación automática de contactos y actualización del CRM sin intervención manual.",
    icon: Users,
  },
  {
    title: "Alertas y notificaciones",
    description:
      "El sistema detecta anomalías o eventos clave y notifica al equipo en tiempo real.",
    icon: Bell,
  },
  {
    title: "Control de stock",
    description:
      "Actualización automática del inventario y alertas de reposición cuando el stock baja del mínimo.",
    icon: Box,
  },
  {
    title: "Atención al cliente",
    description:
      "Chatbot que responde preguntas frecuentes 24/7 y escala a un agente humano cuando es necesario.",
    icon: MessageSquare,
  },
];

export function UseCasesSection() {
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
    <section id="casos-de-uso" className="border-b border-zinc-200">
      <Wrapper>
        <div
          className="bg-cover bg-center bg-no-repeat bg-white/80 p-6 sm:p-8 lg:p-16"
          style={{ backgroundImage: "url('/background-06.jpg')" }}
        >
        <div>
          <div ref={sectionRef} className="mx-auto max-w-3xl text-center px-2 sm:px-0">
            <div
              className={`mb-4 inline-flex items-center justify-center gap-2 text-base sm:text-lg font-semibold ${fadeClass}`}
              style={{ animationDelay: "0.1s" }}
            >
             <Sparkles className="h-5 w-5 text-[#6C47FF]" />
              Nuestros servicios
            </div>
            <h2
              className={`text-3xl sm:text-4xl md:text-[40px] font-semibold ${fadeClass}`}
              style={{ animationDelay: "0.2s" }}
            >
              ¿Qué puede automatizar tu empresa?
            </h2>
            <p
              className={`mx-auto mt-4 max-w-2xl text-sm sm:text-base ${fadeClass}`}
              style={{ animationDelay: "0.3s" }}
            >
              Estos son algunos de los procesos más habituales que automatizamos para nuestros clientes en España.
            </p>
          </div>

          <div className="mt-10 overflow-x-auto pb-6 sm:pb-0 lg:overflow-visible">
            <div className="flex gap-4 min-w-max snap-x snap-mandatory lg:grid lg:grid-cols-2 xl:grid-cols-3 lg:min-w-full">
              {useCases.map((useCase, index) => (
                <div key={useCase.title} className="snap-start shrink-0 min-w-65 lg:min-w-0">
                  <Card
                    index={index}
                    title={useCase.title}
                    description={useCase.description}
                    icon={useCase.icon}
                    variant="icon"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        </div>
      </Wrapper>
    </section>
  );
}
