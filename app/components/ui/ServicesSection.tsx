import { Cpu, MessageSquare, Settings2, Sparkles } from "lucide-react";
import { Card } from "./Card";

const services = [
  {
    title: "Automatización de procesos",
    description:
      "Eliminamos tareas manuales y repetitivas conectando tus herramientas con flujos inteligentes.",
    icon: Cpu,
  },
  {
    title: "Chatbots y asistentes",
    description:
      "Desarrollamos agentes que leen documentos, toman decisiones y actúan de forma autónoma en tus sistemas.",
    icon: MessageSquare,
  },
  {
    title: "Integración con sistemas",
    description:
      "Conecta IA con tu ERP, CRM y herramientas internas para un flujo de trabajo fluido.",
    icon: Sparkles,
  },
  {
    title: "Proyectos a medida",
    description:
      "Diseños completos adaptados a tu empresa, tu equipo y tu sistema existente.",
    icon: Settings2,
  },
];

export function ServicesSection() {
  return (
    <section
      className="border-y border-white bg-cover bg-center"
      style={{ backgroundImage: "url('/background-03.jpg')" }}
    >
      <div className="mx-auto max-w-7xl px-6 py-16 sm:py-20 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <div className="mb-5 inline-flex items-center justify-center gap-2  text-xl font-semibold">
            <Sparkles className="h-6 w-6 text-[#6C47FF]" />
            Nuestros servicios
          </div>
          <h2 className="text-[40px] font-semibold sm:text-[44px]">
            Cuatro formas de implementar la inteligencia artificial en tu
            empresa
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-[16px] leading-7">
            Desde una automatización sencilla hasta un proyecto completo a
            medida. Adaptado a tu empresa, tu equipo y tu sistema.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
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
    </section>
  );
}
