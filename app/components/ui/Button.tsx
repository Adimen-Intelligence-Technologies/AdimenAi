import Link from "next/link";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, children, className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-3 text-xl font-semibold text-black transition-colors ${className}`.trim()}
    >
      {children}
    </Link>
  );
}
