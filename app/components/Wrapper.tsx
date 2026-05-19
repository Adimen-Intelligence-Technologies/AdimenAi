import type { ReactNode } from "react";

interface WrapperProps {
  children: ReactNode;
  className?: string;
}

export function Wrapper({ children, className = "" }: WrapperProps) {
  return (
    <div className={`w-full max-w-300 border-x border-zinc-200 mx-auto ${className}`.trim()}>
      {children}
    </div>
  );
}
