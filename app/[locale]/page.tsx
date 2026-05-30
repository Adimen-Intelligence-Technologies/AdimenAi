import {Hero} from '@/app/components/ui/Hero';
import {HeroMarquee} from '@/app/components/ui/HeroMarquee';
import {ServicesSection} from '@/app/components/ui/ServicesSection';
import {BeamSection} from '@/app/components/ui/BeamSection';
import {UseCasesSection} from '@/app/components/ui/UseCasesSection';
import {InfoSection} from '@/app/components/ui/InfoSection';
import {CtaSection} from '@/app/components/ui/CtaSection';
import {FaqSection} from '@/app/components/ui/FaqSection';
import {ContactBlock} from '@/app/components/ui/ContactBlock';

export default function HomePage() {
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
          'Diseño de flujo de trabajo personalizado',
          'Integración segura con tus sistemas actuales',
          'Monitoreo continuo y ajuste automático',
          'Soporte y formación para tu equipo',
        ]}
        imageAlt="Equipo trabajando en una solución de IA"
        videoSrc="/dashboard-animation.mp4"
        buttonLabel="Ver cómo funciona"
        buttonHref="/contactar"
      />
      <CtaSection />
      <FaqSection />
      <ContactBlock />
    </div>
  );
}