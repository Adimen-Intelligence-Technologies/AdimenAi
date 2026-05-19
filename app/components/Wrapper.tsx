import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export function Wrapper({ children, className = "" }: WrapperProps) {
  return (
    <div className={`w-full max-w-[1200px] border-x border-zinc-200 px-4 sm:px-6 mx-auto ${className}`.trim()}>
      {children}
    </div>
  );
}
