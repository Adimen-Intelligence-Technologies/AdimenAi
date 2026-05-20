import { Hero } from "./components/ui/Hero";
import { HeroMarquee } from "./components/ui/HeroMarquee";
import { ServicesSection } from "./components/ui/ServicesSection";
import { UseCasesSection } from "./components/ui/UseCasesSection";
import { FaqSection } from "./components/ui/FaqSection";
import { CtaSection } from "./components/ui/CtaSection";
import { ContactBlock } from "./components/ui/ContactBlock";

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <HeroMarquee />
      <ServicesSection />
      <UseCasesSection />
      <CtaSection />
      <FaqSection />
      <ContactBlock />
    </div>
  );
}
