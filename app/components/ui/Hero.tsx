import { HeroButton } from "./HeroButton";
import { Wrapper } from "../Wrapper";
import { Zap, Wallet, TrendingUp } from "lucide-react";

const stats = [
  { icon: Zap, label: "600+ procesos automatizados" },
  { icon: Wallet, label: "Operaciones intracomunitarias" },
  { icon: TrendingUp, label: "Primera consulta gratuita" },
];

export function Hero() {
  return (
    <section className="relative flex items-center justify-center">
      <Wrapper className="border-x-0  border-y-fuchsia-300 border-zinc-200 ">
        <div
          className="relative overflow-hidden bg-cover bg-center px-4 sm:px-6 md:px-8 py-14 sm:py-16 md:py-20 border-x border-zinc-200"
          style={{ backgroundImage: "url('/backgrpound-02.jpg')" }}
        >
          <div className="absolute inset-0" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-4 text-center px-2 sm:px-6 lg:px-20 xl:px-30">
            <p
              className="text-base sm:text-lg md:text-xl font-medium text-gray-600 tracking-wide animate-hero-fade"
              style={{ animationDelay: "0.1s" }}
            >
              Inteligencia artificial para empresas
            </p>
            <h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black tracking-tighter leading-tight animate-hero-fade"
              style={{ animationDelay: "0.2s" }}
            >
              Automatiza tu empresa con inteligencia artificial
            </h1>
            <p
              className="max-w-3xl text-base sm:text-lg text-black leading-tight animate-hero-fade"
              style={{ animationDelay: "0.35s" }}
            >
              Diseñamos e implementamos agentes de IA, automatizaciones de procesos,
              chatbots y tiendas online a medida. Consultoría presencial disponible
              en toda España.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 mt-8 animate-hero-fade"
              style={{ animationDelay: "0.5s" }}
            >
              <HeroButton href="/contactar" variant="primary">
                Llamada gratuita
              </HeroButton>
              <HeroButton href="/servicios" variant="secondary">
                Ver servicios
              </HeroButton>
            </div>
            <div
              className="grid grid-cols-1 sm:grid-cols-3 gap-2 mt-16 w-full animate-hero-fade"
              style={{ animationDelay: "0.65s" }}
            >
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex items-center justify-start gap-2 text-left">
                    <div className="px-2 py-2 rounded bg-white/50 border border-zinc-200"><Icon className="w-3 h-3" /></div>
                    <p className="text-base font-medium text-black">{stat.label}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
