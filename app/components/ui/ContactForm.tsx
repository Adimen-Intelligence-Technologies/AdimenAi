"use client";

import { Button } from "./Button";

export function ContactForm() {
  return (
    <div className="relative overflow-hidden rounded-[32px] border border-white/20 bg-white/20 backdrop-blur-xl shadow-2xl shadow-black/5">
      <div className="absolute inset-x-0 top-0 h-2 bg-gradient-to-r from-[#7252FF]/70 via-[#8C6CFF]/60 to-[#42FCFF]/40 opacity-80 blur-xl" />
      <div className="relative px-6 py-8 sm:px-10 sm:py-10">
        <form className="grid gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col text-sm font-semibold text-zinc-900">
              Nombre
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                className="min-h-[52px] border-b border-zinc-300 bg-transparent text-zinc-900  outline-none transition focus:border-b-[#7252FF] focus:ring-0"
              />
            </label>
            <label className="flex flex-col text-sm font-semibold text-zinc-900">
              Email
              <input
                type="email"
                name="email"
                placeholder="jane@framer.com"
                className="min-h-[52px] border-b border-zinc-300 bg-transparent text-zinc-900  outline-none transition focus:border-b-[#7252FF] focus:ring-0"
              />
            </label>
          </div>

          <label className="flex flex-col  text-sm font-semibold text-zinc-900">
            Teléfono
            <input
              type="tel"
              name="phone"
              placeholder="+34 612 345 678"
              className="min-h-[52px] border-b border-zinc-300 bg-transparent  text-zinc-900  outline-none transition focus:border-b-[#7252FF] focus:ring-0"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
            Asunto
            <select
              name="subject"
              className="min-h-[52px] border-b border-zinc-300 bg-transparent  py-1 text-base text-zinc-900 placeholder:font-normal placeholder:text-xs outline-none transition focus:border-b-[#7252FF] focus:ring-0"
            >
              <option value="">Selecciona un asunto...</option>
              <option value="demo">Demo personalizada</option>
              <option value="automation">Automatización</option>
              <option value="integration">Integración de sistemas</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm font-semibold text-zinc-900">
            Mensaje
            <textarea
              name="message"
              rows={6}
              placeholder="Cómo podemos ayudarte?"
              className="min-h-[160px] border-b border-zinc-300 bg-transparent px-4 py-4 text-base text-zinc-900 placeholder:font-normal placeholder:text-xs outline-none transition focus:border-b-[#7252FF] focus:ring-0"
            />
          </label>

          <Button
            type="submit"
            className="h-14 border-transparent bg-[#7252FF] px-8 text-base text-white hover:bg-[#5b3fe6]"
          >
            Enviar solicitud
          </Button>

          <p className="text-center text-sm text-zinc-600">
            Al enviar aceptas nuestra política de privacidad y términos.
          </p>
        </form>
      </div>
    </div>
  );
}
