"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  className?: string;
}

export function Button({ href, type = "button", children, className = "" }: ButtonProps) {
  const commonClasses = `inline-flex items-center justify-center overflow-hidden rounded-full border border-zinc-200 px-5 py-3 text-xl font-semibold text-black transition-colors ${className}`.trim();

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
