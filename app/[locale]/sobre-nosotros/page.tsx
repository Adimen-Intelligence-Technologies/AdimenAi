import { ContactBlock } from "@/app/components/ui/ContactBlock";
import { CtaSection } from "@/app/components/ui/CtaSection";
import { HeroMarquee } from "@/app/components/ui/HeroMarquee";
import { AboutHero } from "@/app/components/ui/AboutHero";
import { AboutStats } from "@/app/components/ui/AboutStats";
import { AboutCompany } from "@/app/components/ui/AboutCompany";
import { AboutValues } from "@/app/components/ui/AboutValues";
import { AboutStory } from "@/app/components/ui/AboutStory";
import { AboutMissionVision } from "@/app/components/ui/AboutMissionVision";
import { AboutLocation } from "@/app/components/ui/AboutLocation";

export default async function AboutPage() {
  return (
    <div className="flex flex-col">
      <AboutHero />
      <HeroMarquee />
      <AboutCompany />
      <AboutStats />
      <AboutValues />
      <AboutStory />
      <AboutMissionVision />
      <AboutLocation />
      <CtaSection />
      <ContactBlock />
    </div>
  );
}
