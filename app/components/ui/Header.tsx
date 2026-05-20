"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { Button } from "./Button";
import { Wrapper } from "../Wrapper";

const menuItems = [
  { label: "Servicios", href: "/servicios" },
  { label: "Comercios", href: "/comercios" },
  { label: "Casos de uso", href: "/casos-de-uso" },
  { label: "Blog", href: "/blog" },
  
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="border-b border-zinc-200 bg-white">
      <Wrapper className="flex flex-wrap items-center justify-between gap-4 py-5 px-4 sm:px-6 lg:px-10">
        <div className="flex items-baseline gap-6">
          <Link href="/" aria-label="Ir a inicio">
            <Image
              src="/logo/adimenai-logo.svg"
              alt="Adimenai logo"
              width={140}
              height={32}
              className="object-contain"
            />
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex flex-wrap items-center gap-6 text-[18px] text-gray-500">
              {menuItems.map((item) => (
                <li key={item.label}>
                  <Link href={item.href} className="transition-colors hover:text-black">
                    {item.label}
                  </Link>
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
            className="inline-flex h-11 w-11 items-center justify-center  hover:text-black lg:hidden"
          >
            <span className="sr-only">Menú</span>
            {isOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </Wrapper>

      <div
        className={`border-t border-zinc-200 bg-white lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${
          isOpen ? "max-h-130 opacity-100" : "max-h-0 opacity-0"
        }`}
        aria-hidden={!isOpen}
      >
        <Wrapper className="space-y-4 py-5 px-4 sm:px-6">
          <nav>
            <ul className="space-y-4 text-[18px] text-gray-600">
              {menuItems.map((item, index) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className={`block rounded-xl px-3 py-2 transition-all duration-500 ease-in-out hover:bg-zinc-100 hover:text-black ${
                      isOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                    }`}
                    style={{ transitionDelay: isOpen ? `${index * 60}ms` : "0ms" }}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <Button href="/contactar" className={isOpen ? "opacity-100 transition-opacity duration-500 ease-in-out" : "opacity-0 transition-opacity duration-500 ease-in-out"}>
            Contactar
          </Button>
        </Wrapper>
      </div>
    </header>
  );
}
