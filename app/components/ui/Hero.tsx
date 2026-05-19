import { HeroButton } from "./HeroButton";
import { Wrapper } from "../Wrapper";
import { Zap, Wallet, TrendingUp } from "lucide-react";

const stats = [
  { icon: Zap, label: "600+ processes automated" },
  { icon: Wallet, label: "$250M saved for clients" },
  { icon: TrendingUp, label: "41-day average ROI" },
];

export function Hero() {
  return (
    <section className="relative flex items-center justify-center ">
      <Wrapper className="border-x-0  border-y-fuchsia-300 border-zinc-200 ">
        <div
          className="relative overflow-hidden bg-cover bg-center px-6 py-20 border-x border-zinc-200"
          style={{ backgroundImage: "url('/background.avif')" }}
        >
          <div className="absolute inset-0" />
          <div className="relative z-10 flex flex-col items-center justify-center gap-6 text-center px-50">
            <p className="text-sm font-medium text-gray-600 tracking-wide">
              Inteligencia artificial para empresas
            </p>
            <h1 className="text-5xl md:text-6xl font-bold text-black leading-tight">
              Automatiza tu empresa con inteligencia artificial
            </h1>
            <p className="max-w-3xl text-lg text-black leading-relaxed">
              Diseñamos e implementamos agentes de IA, automatizaciones de procesos,
              chatbots y tiendas online a medida. Consultoría presencial disponible
              en toda España.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <HeroButton href="/contactar" variant="primary">
                Llamada gratuita
              </HeroButton>
              <HeroButton href="/servicios" variant="secondary">
                Ver servicios
              </HeroButton>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-16 w-full">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div key={index} className="flex flex-col items-center gap-3 text-center">
                    <Icon className="w-8 h-8 text-purple-600" />
                    <p className="text-sm font-medium text-gray-700">{stat.label}</p>
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
