"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "./Button";
import { Wrapper } from "../Wrapper";

const menuItems = ["Servicios", "Comercios", "Casos de uso", "Blog"];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white">
      <Wrapper className="flex items-center justify-between gap-4 py-5 px-4 md:px-10">
        <div className="flex items-center gap-6">
          <Image
            src="/logo/adimenai-logo.svg"
            alt="Adimenai logo"
            width={140}
            height={32}
            className="object-contain"
          />

          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-[18px] text-gray-500">
              {menuItems.map((item) => (
                <li key={item}>
                  <a href="#" className="transition-colors hover:text-black">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <div className="hidden md:block">
            <Button href="/contactar">Contactar</Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-zinc-300 hover:text-black md:hidden"
          >
            <span className="sr-only">Menú</span>
            <div className="flex h-5 w-5 flex-col justify-between">
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition-transform ${
                  isOpen ? "translate-y-1 rotate-45" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition-opacity ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`block h-0.5 w-full rounded-full bg-current transition-transform ${
                  isOpen ? "-translate-y-1 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </Wrapper>

      {isOpen ? (
        <div className="border-t border-zinc-200 bg-white md:hidden">
          <Wrapper className="space-y-4 py-5 px-4">
            <nav>
              <ul className="space-y-4 text-[18px] text-gray-600">
                {menuItems.map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="block rounded-xl px-3 py-2 transition hover:bg-zinc-100 hover:text-black"
                      onClick={() => setIsOpen(false)}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            <Button href="/contactar">Contactar</Button>
          </Wrapper>
        </div>
      ) : null}
    </header>
  );
}
