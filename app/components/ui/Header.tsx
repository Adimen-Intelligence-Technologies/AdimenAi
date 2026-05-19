import Image from "next/image";
import { Button } from "./Button";
import { Wrapper } from "../Wrapper";

const menuItems = ["Servicios", "Comercios", "Casos de uso", "Blog"];

export function Header() {
  return (
    <header className="border-b border-zinc-200 bg-white">
      <Wrapper className="flex items-center justify-between py-5 px-10">
        <div className=" flex items-center gap-10 ">
          <Image
            src="/logo/adimenai-logo.svg"
            alt="Adimenai logo"
            width={140}
            height={32}
            className="object-contain"
          />
          <nav>
            <ul className="flex items-center gap-8 text-[18px]  tracking-tightfont-medium text-gray-500">
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
        <Button href="/contactar">Contactar</Button>
      </Wrapper>
    </header>
  );
}
