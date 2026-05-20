"use client";

import { Button } from "./Button";

export function ContactForm() {
  return (
    <div className="relative overflow-hidden rounded border border-white/20 bg-white/20 ">
      <div className="absolute inset-x-0 top-0 h-2  opacity-80 blur-xl" />
      <div className="relative px-6 py-8 sm:px-10 sm:py-10">
        <form className="grid gap-6">
          <div className="grid gap-6 md:grid-cols-2">
            <label className="flex flex-col text-sm  text-zinc-900 tracking-tight">
              Nombre
              <input
                type="text"
                name="name"
                placeholder="Jane Smith"
                className="min-h-13 border-b border-zinc-300 bg-transparent text-zinc-900 outline-none transition focus:border-b-[#7252FF] focus:ring-0"
              />
            </label>
            <label className="flex flex-col text-sm  text-zinc-900 tracking-tight">
              Email
              <input
                type="email"
                name="email"
                placeholder="jane@framer.com"
                className="min-h-13 border-b border-zinc-300 bg-transparent text-zinc-900 outline-none transition focus:border-b-[#7252FF] focus:ring-0"
              />
            </label>
          </div>

          <label className="flex flex-col text-sm  text-zinc-900 tracking-tight">
            Teléfono
            <input
              type="tel"
              name="phone"
              placeholder="+34 612 345 678"
              className="min-h-13 border-b border-zinc-300 bg-transparent text-zinc-900 outline-none transition focus:border-b-[#7252FF] focus:ring-0"
            />
          </label>

          <label className="flex flex-col gap-2 text-sm text-zinc-900 tracking-tight">
            Asunto
            <select
              name="subject"
              className="min-h-13 border-b border-zinc-300 bg-transparent py-1 text-sm text-zinc-900  outline-none transition focus:border-b-[#7252FF] focus:ring-0"
            >
              <option value="">Selecciona un asunto...</option>
              <option value="demo">Demo personalizada</option>
              <option value="automation">Automatización</option>
              <option value="integration">Integración de sistemas</option>
            </select>
          </label>

          <label className="flex flex-col gap-2 text-sm text-zinc-900 tracking-tight">
            Mensaje
            <textarea
              name="message"
              rows={6}
              placeholder="Cómo podemos ayudarte?"
              className="min-h-40 border-b border-zinc-300 bg-transparent px-4 py-4 text-sm text-zinc-900  outline-none transition focus:border-b-[#7252FF] focus:ring-0"
            />
          </label>

          <Button
            type="submit"
            className="h-14 border-transparent bg-[#7252FF] px-8 text-sm text-white hover:bg-[#5b3fe6]"
          >
            Enviar solicitud
          </Button>

          <p className="text-center text-sm text-zinc-600 tracking-tight">
            Al enviar aceptas nuestra política de privacidad y términos.
          </p>
        </form>
      </div>
    </div>
  );
}
