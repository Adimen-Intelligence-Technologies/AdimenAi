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
      className={`inline-flex items-center justify-center rounded-full border border-zinc-200 px-5 py-3 text-xl font-semibold text-black transition-colors ${className}`.trim()}
    >
      <motion.span
        className="inline-flex items-center justify-center"
        whileHover={{ y: -1 }}
        whileTap={{ scale: 0.97 }}
        transition={{ type: "spring", stiffness: 400, damping: 20 }}
      >
        {children}
      </motion.span>
    </Link>
  );
}
