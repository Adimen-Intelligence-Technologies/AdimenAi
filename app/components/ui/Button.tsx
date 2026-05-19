"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  href: string;
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, children, className = "" }: ButtonProps) {
  return (
    <Link
      href={href}
      className={`inline-flex items-center justify-center overflow-hidden rounded-full border border-zinc-200 px-5 py-3 text-base font-semibold text-black transition-colors ${className}`.trim()}
    >
      <motion.span
        className="relative inline-flex h-7 overflow-hidden"
        initial="initial"
        whileHover="hover"
      >
        <motion.span
          className="absolute inset-x-0 top-0 flex h-7 items-center justify-center leading-none"
          variants={{ initial: { y: "0%" }, hover: { y: "-100%" } }}
          transition={{ duration: 0.2, ease: "easeOut" }}
          style={{ pointerEvents: "none" }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute inset-x-0 top-0 flex h-7 items-center justify-center leading-none"
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
