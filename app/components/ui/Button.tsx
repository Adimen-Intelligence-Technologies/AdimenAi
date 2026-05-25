"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  variant?: "default" | "primary" | "secondary";
  className?: string;
}

const variantClasses: Record<NonNullable<ButtonProps["variant"]>, string> = {
  default: "border border-zinc-200 bg-white text-black px-5 py-3",
  primary: "bg-[#7252FF] text-white hover:bg-[#6c4cff] px-8 py-4",
  secondary: "border border-zinc-200 bg-white/50 text-black hover:bg-gray-50/50 px-8 py-4",
};

export function Button({ href, type = "button", children, variant = "default", className = "" }: ButtonProps) {
  const commonClasses = `inline-flex items-center justify-center overflow-hidden rounded-full font-semibold text-xl transition-colors ${variantClasses[variant]} ${className}`.trim();

  const content = (
    <motion.span
      className="relative inline-flex h-7 items-center overflow-hidden leading-none"
      initial="initial"
      whileHover="hover"
    >
      <motion.span
        className="flex h-full items-center"
        variants={{ initial: { y: "0%" }, hover: { y: "-100%" } }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ pointerEvents: "none" }}
      >
        {children}
      </motion.span>
      <motion.span
        className="absolute inset-0 flex h-full items-center justify-center"
        variants={{ initial: { y: "100%" }, hover: { y: "0%" } }}
        transition={{ duration: 0.2, ease: "easeOut" }}
        style={{ pointerEvents: "none" }}
      >
        {children}
      </motion.span>
    </motion.span>
  );

  if (href) {
    return (
      <Link href={href} className={commonClasses}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={commonClasses}>
      {content}
    </button>
  );
}
