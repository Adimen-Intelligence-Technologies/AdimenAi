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
      className={`inline-flex items-center justify-center overflow-hidden rounded-full border border-zinc-200 px-5 py-3 text-xl font-semibold text-black transition-colors ${className}`.trim()}
    >
      <span className="relative inline-flex h-6 w-32 overflow-hidden">
        <motion.span
          className="absolute inset-x-0 top-0 text-center"
          initial={{ y: 0 }}
          whileHover={{ y: -24 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {children}
        </motion.span>
        <motion.span
          className="absolute inset-x-0 top-0 text-center"
          initial={{ y: 24 }}
          whileHover={{ y: 0 }}
          transition={{ duration: 0.2, ease: "easeOut" }}
        >
          {children}
        </motion.span>
      </span>
    </Link>
  );
}
