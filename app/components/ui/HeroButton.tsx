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
      className={`inline-flex items-center justify-center overflow-hidden rounded-full px-8 py-3 text-base font-semibold transition-colors ${
        isPrimary
          ? "bg-[#7252FF] text-black hover:bg-[#7252FF]"
          : "border border-black bg-white text-black hover:bg-gray-50"
      } ${className}`.trim()}
    >
      <motion.span
        className="relative inline-flex h-6 overflow-hidden"
        initial="initial"
        whileHover="hover"
      >
        <motion.span
          className="absolute inset-x-0 top-0 flex h-6 items-center justify-center leading-none"
          variants={{ initial: { y: "0%" }, hover: { y: "-100%" } }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ pointerEvents: "none" }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute inset-x-0 top-0 flex h-6 items-center justify-center leading-none"
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
