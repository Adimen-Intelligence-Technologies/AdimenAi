"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface HeroButtonProps {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
}

export function HeroButton({
  href,
  children,
  variant = "primary",
  className = "",
}: HeroButtonProps) {
  const isPrimary = variant === "primary";

  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-4 font-semibold transition-colors ${
        isPrimary
          ? "bg-[#7252FF] text-white hover:bg-[#7252FF] text-xl"
          : "border border-zinc-200 bg-white/50 text-black hover:bg-gray-50/50 text-xl"
      } ${className}`.trim()}
    >
      <motion.span
        className="relative inline-flex h-6 items-center overflow-hidden leading-none"
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
    </Link>
  );
}
