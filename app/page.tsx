import Image from "next/image";
import { Wrapper } from "./components/Wrapper";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-zinc-50">
      <Wrapper className="w-full">
        Hola
      </Wrapper>
    </div>
  );
}
