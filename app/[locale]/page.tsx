import {Hero} from '@/app/components/ui/Hero';
import {HeroMarquee} from '@/app/components/ui/HeroMarquee';
import {ServicesSection} from '@/app/components/ui/ServicesSection';
import {BeamSection} from '@/app/components/ui/BeamSection';
import {UseCasesSection} from '@/app/components/ui/UseCasesSection';
import {InfoSection} from '@/app/components/ui/InfoSection';
import {CtaSection} from '@/app/components/ui/CtaSection';
import {FaqSection} from '@/app/components/ui/FaqSection';
import {ContactBlock} from '@/app/components/ui/ContactBlock';
import {getLocale, getTranslations} from 'next-intl/server';
import {toLocalePath} from '@/lib/locale-path';

export default async function HomePage() {
  const t = await getTranslations('infoSection');
  const locale = await getLocale();

  return (
    <div className="flex flex-col">
      <Hero />
      <HeroMarquee />
      <ServicesSection />
      <BeamSection />
      <UseCasesSection />
      <InfoSection
        eyebrow={t('eyebrow')}
        title={t('title')}
        subtitle={t('subtitle')}
        text={t('text')}
        items={[
          t('items.0'),
          t('items.1'),
          t('items.2'),
          t('items.3'),
        ]}
        imageAlt={t('imageAlt')}
        videoSrc="/dashboard-animation.mp4"
        buttonLabel={t('button')}
        buttonHref={toLocalePath(locale, '/contactar')}
      />
      <CtaSection />
      <FaqSection />
      <ContactBlock />
    </div>
  );
}