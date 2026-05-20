import { Wrapper } from "../components/Wrapper";

export default function ContactPage() {
  return (
    <section className="bg-zinc-50 text-zinc-900">
      <Wrapper className="px-4 py-20 sm:px-6 lg:px-10">
        <div className="mx-auto max-w-4xl">
          <div className="mb-10 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.35em] text-[#6C47FF]">
              Contacto
            </p>
            <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">
              Hablemos de tu proyecto
            </h1>
            <p className="mt-4 text-base text-zinc-600 sm:text-lg">
              Completa el formulario y nos pondremos en contacto contigo para una llamada inicial sin compromiso.
            </p>
          </div>

          <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/20 backdrop-blur-xl shadow-2xl shadow-black/5">
            <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#7252FF]/70 via-[#8C6CFF]/60 to-[#42FCFF]/40 opacity-80 blur-xl" />
            <div className="relative px-6 py-8 sm:px-10 sm:py-10">
              <form className="grid gap-6">
                <div className="grid gap-6 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                    Nombre
                    <input
                      type="text"
                      name="name"
                      placeholder="Jane Smith"
                      className="min-h-[52px] rounded-3xl border border-zinc-200/70 bg-white/90 px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-[#7252FF] focus:ring-2 focus:ring-[#7252FF]/10"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                    Email
                    <input
                      type="email"
                      name="email"
                      placeholder="jane@framer.com"
                      className="min-h-[52px] rounded-3xl border border-zinc-200/70 bg-white/90 px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-[#7252FF] focus:ring-2 focus:ring-[#7252FF]/10"
                    />
                  </label>
                </div>

                <div className="grid gap-6 md:grid-cols-2">
                  <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                    Teléfono
                    <input
                      type="tel"
                      name="phone"
                      placeholder="+34 612 345 678"
                      className="min-h-[52px] rounded-3xl border border-zinc-200/70 bg-white/90 px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-[#7252FF] focus:ring-2 focus:ring-[#7252FF]/10"
                    />
                  </label>
                  <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                    Asunto
                    <select
                      name="subject"
                      className="min-h-[52px] rounded-3xl border border-zinc-200/70 bg-white/90 px-4 py-3 text-base text-zinc-900 outline-none transition focus:border-[#7252FF] focus:ring-2 focus:ring-[#7252FF]/10"
                    >
                      <option value="">Selecciona un asunto...</option>
                      <option value="demo">Demo personalizada</option>
                      <option value="automation">Automatización</option>
                      <option value="integration">Integración de sistemas</option>
                    </select>
                  </label>
                </div>

                <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
                  Mensaje
                  <textarea
                    name="message"
                    rows={6}
                    placeholder="Cómo podemos ayudarte?"
                    className="min-h-[160px] rounded-3xl border border-zinc-200/70 bg-white/90 px-4 py-4 text-base text-zinc-900 outline-none transition focus:border-[#7252FF] focus:ring-2 focus:ring-[#7252FF]/10"
                  />
                </label>

                <button
                  type="submit"
                  className="inline-flex h-14 items-center justify-center rounded-full bg-[#7252FF] px-8 text-base font-semibold text-white transition hover:bg-[#5b3fe6]"
                >
                  Enviar solicitud
                </button>

                <p className="text-center text-sm text-zinc-600">
                  Al enviar aceptas nuestra política de privacidad y términos.
                </p>
              </form>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
