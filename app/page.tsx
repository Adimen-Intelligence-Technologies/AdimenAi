import { Hero } from "./components/ui/Hero";
import { HeroMarquee } from "./components/ui/HeroMarquee";
import { ServicesSection } from "./components/ui/ServicesSection";
import { BeamSection } from "./components/ui/BeamSection";
import { UseCasesSection } from "./components/ui/UseCasesSection";
import { InfoSection } from "./components/ui/InfoSection";
import { FaqSection } from "./components/ui/FaqSection";
import { CtaSection } from "./components/ui/CtaSection";
import { ContactBlock } from "./components/ui/ContactBlock";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HeroMarquee />
      <ServicesSection />
      <BeamSection />
      <UseCasesSection />
      <InfoSection
        eyebrow="Por qué elegirnos"
        title="Tu socio en automatización inteligente"
        subtitle="Creamos soluciones prácticas que funcionan con tus procesos y sistemas existentes."
        text="Desde la extracción automática de datos hasta la integración con ERP y CRM, ofrecemos una implementación rápida y totalmente adaptada a tu equipo."
        items={[
          "Diseño de flujo de trabajo personalizado",
          "Integración segura con tus sistemas actuales",
          "Monitoreo continuo y ajuste automático",
          "Soporte y formación para tu equipo",
        ]}
        imageSrc="/dashboard.png"
        imageAlt="Equipo trabajando en una solución de IA"
        buttonLabel="Ver cómo funciona"
        buttonHref="/contactar"
        videoSrc="/dashboard-animation.mp4"
      />
      <CtaSection />
      <FaqSection />
      <ContactBlock />
    </div>
  );
}
