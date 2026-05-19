"use client";

import Image from "next/image";
import Marquee from "react-fast-marquee";
import { Wrapper } from "../Wrapper";

const companyLogos = [
  "/empresas/logo-01.svg",
  "/empresas/logo-02.svg",
  "/empresas/logo-03.svg",
  "/empresas/logo-04.svg",
  "/empresas/logo-05.svg",
  "/empresas/logo-06.svg",
];

export function HeroMarquee() {
  return (
    <section className="border-t border-zinc-200 ">
      <Wrapper className="px-6">
        <Marquee gradient={false} speed={40} pauseOnHover className="flex items-center">
          {companyLogos.map((logo, index) => (
            <div
              key={index}
              className="mx-10 flex h-24 min-w-[10rem] items-center justify-center opacity-80 transition duration-300 hover:opacity-100"
            >
              <Image
                src={logo}
                alt={`Logo empresa ${index + 1}`}
                width={160}
                height={80}
                className="max-h-16 object-contain"
              />
            </div>
          ))}
        </Marquee>
      </Wrapper>
    </section>
  );
}
