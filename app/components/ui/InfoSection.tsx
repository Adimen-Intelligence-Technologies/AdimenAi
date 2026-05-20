import Image from "next/image";
import { Check, Sparkles } from "lucide-react";
import { Wrapper } from "../Wrapper";
import { Button } from "./Button";

interface InfoSectionProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  text: string;
  items: string[];
  imageSrc: string;
  imageAlt: string;
  buttonLabel?: string;
  buttonHref?: string;
}

export function InfoSection({
  eyebrow,
  title,
  subtitle,
  text,
  items,
  imageSrc,
  imageAlt,
  buttonLabel,
  buttonHref,
}: InfoSectionProps) {
  return (
    <section className="border-b border-zinc-200">
      <Wrapper className="px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 items-center py-16 lg:grid-cols-[1.1fr_0.9fr] lg:gap-14">
          <div>
            <p className="mb-4 inline-flex items-center gap-2 text-base sm:text-lg font-semibold text-black tracking-tight">
              <Sparkles className="h-5 w-5 text-[#6C47FF]" />
              {eyebrow}
            </p>
            <h2 className="text-3xl sm:text-4xl md:text-[40px] font-semibold tracking-tight text-slate-950">
              {title}
            </h2>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-black tracking-tight">
              {subtitle}
            </p>
            <p className="max-w-2xl text-sm sm:text-base text-black leading-relaxed tracking-tight">
              {text}
            </p>

            <ul className="mt-8 space-y-4">
              {items.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-[#6C47FF]/10 text-[#6C47FF]">
                    <Check className="h-4 w-4" />
                  </span>
                  <span className="text-sm text-black tracking-tight">{item}</span>
                </li>
              ))}
            </ul>

            {buttonLabel && buttonHref ? (
              <div className="mt-8">
                <Button href={buttonHref} className="bg-[#6C47FF] text-white border-transparent hover:bg-[#5941e6]">
                  {buttonLabel}
                </Button>
              </div>
            ) : null}
          </div>

          <div className="overflow-hidden rounded-4xl bg-zinc-100 shadow-sm">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={920}
              height={720}
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}
