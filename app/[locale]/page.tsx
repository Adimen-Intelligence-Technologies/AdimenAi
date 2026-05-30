import {Hero} from '@/components/ui/Hero';
import {ServicesSection} from '@/components/ui/ServicesSection';
import {UseCasesSection} from '@/components/ui/UseCasesSection';
import {InfoSection} from '@/components/ui/InfoSection';
import {CtaSection} from '@/components/ui/CtaSection';
import {FaqSection} from '@/components/ui/FaqSection';
import {BlogSection} from '@/components/ui/BlogSection';

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <UseCasesSection />
      <InfoSection />
      <CtaSection />
      <FaqSection />
    </>
  );
}