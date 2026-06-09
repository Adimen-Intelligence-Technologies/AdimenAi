"use client";

import Link from "next/link";
import { motion } from "framer-motion";

interface ButtonProps {
  href?: string;
  type?: "button" | "submit" | "reset";
  children: React.ReactNode;
  color?: "purple" | "white";
  className?: string;
  disabled?: boolean;
}

const colorClasses: Record<NonNullable<ButtonProps["color"]>, string> = {
  purple: "bg-[#7252FF] text-white hover:bg-[#6c4cff] border border-transparent px-8 py-4",
  white: "bg-white text-black hover:bg-zinc-50 border border-zinc-200 px-8 py-4",
};

export function Button({
  href,
  type = "button",
  children,
  color = "purple",
  className = "",
  disabled = false,
}: ButtonProps) {
  const stateClasses = disabled
    ? "opacity-60 cursor-not-allowed pointer-events-none"
    : "";
  const commonClasses = `inline-flex items-center justify-center overflow-hidden rounded-full font-semibold text-xl transition-colors ${colorClasses[color]} ${stateClasses} ${className}`.trim();

  const content = disabled ? (
    <span className="relative inline-flex h-7 items-center leading-none">
      {children}
    </span>
  ) : (
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
      <Link href={href} className={commonClasses} aria-disabled={disabled} tabIndex={disabled ? -1 : undefined}>
        {content}
      </Link>
    );
  }

  return (
    <button type={type} className={commonClasses} disabled={disabled}>
      {content}
    </button>
  );
}
