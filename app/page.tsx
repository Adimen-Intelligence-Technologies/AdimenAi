import { Header } from "./components/ui/Header";
import { Wrapper } from "./components/Wrapper";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-zinc-50 text-zinc-900">
      <Header />
      <Wrapper className="w-full py-12">
        <section className="flex flex-col gap-8 rounded-3xl bg-white p-10 shadow-sm">
          <h1 className="text-4xl font-semibold leading-tight">
            Bienvenido a Adimenai
          </h1>
          <p className="max-w-2xl text-lg leading-8 text-zinc-600">
            Una landing preparada para presentar servicios de IA que impulsan comercios, casos de uso y contenidos de blog con estilo profesional.
          </p>
        </section>
      </Wrapper>
    </div>
  );
}
