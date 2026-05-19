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
      <Wrapper className="flex flex-wrap items-center justify-between gap-4 py-5 px-4 sm:px-6 lg:px-10">
        <div className="flex items-center gap-6">
          <Image
            src="/logo/adimenai-logo.svg"
            alt="Adimenai logo"
            width={140}
            height={32}
            className="object-contain"
          />

          <nav className="hidden lg:block">
            <ul className="flex flex-wrap items-center gap-8 text-[18px] text-gray-500">
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
          <div className="hidden lg:block">
            <Button href="/contactar">Contactar</Button>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-expanded={isOpen}
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-700 transition hover:border-zinc-300 hover:text-black lg:hidden"
          >
            <span className="sr-only">Menú</span>
            <div className="relative h-5 w-5">
              <span
                className={`absolute left-0 top-0 block h-0.5 w-full rounded-full bg-current transition-all duration-200 ease-in-out origin-center ${
                  isOpen ? "translate-y-2 rotate-45" : ""
                }`}
              />
              <span
                className={`absolute left-0 top-1/2 block h-0.5 w-full -translate-y-1/2 rounded-full bg-current transition-all duration-200 ease-in-out ${
                  isOpen ? "opacity-0" : "opacity-100"
                }`}
              />
              <span
                className={`absolute left-0 bottom-0 block h-0.5 w-full rounded-full bg-current transition-all duration-200 ease-in-out origin-center ${
                  isOpen ? "-translate-y-2 -rotate-45" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </Wrapper>

      <div
        className={`border-t border-zinc-200 bg-white lg:hidden overflow-hidden transition-all duration-300 ease-out ${
          isOpen ? "max-h-[520px] opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <Wrapper className="space-y-4 py-5 px-4 sm:px-6">
          <nav>
            <ul className="space-y-4 text-[18px] text-gray-600">
              {menuItems.map((item, index) => (
                <li key={item}>
                  <a
                    href="#"
                    className={`block rounded-xl px-3 py-2 transition hover:bg-zinc-100 hover:text-black ${
                      isOpen ? "translate-y-0 opacity-100" : "translate-y-2 opacity-0"
                    } duration-300 ease-out`}
                    style={{ transitionDelay: isOpen ? `${index * 40}ms` : "0ms" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <Button href="/contactar" className={isOpen ? "opacity-100" : "opacity-0"}>
            Contactar
          </Button>
        </Wrapper>
      </div>
    </header>
  );
}
