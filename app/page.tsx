import { Header } from "./components/ui/Header";
import { Hero } from "./components/ui/Hero";
import { HeroMarquee } from "./components/ui/HeroMarquee";
import { ServicesSection } from "./components/ui/ServicesSection";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900">
      <Header />
      <Hero />
      <HeroMarquee />
      <ServicesSection />
    </div>
  );
}
