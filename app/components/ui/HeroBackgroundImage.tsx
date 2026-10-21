import Image from "next/image";

export function HeroBackgroundImage() {
  return (
    <Image
      src="/background.avif"
      alt=""
      fill
      priority
      sizes="100vw"
      className="object-cover"
    />
  );
}
