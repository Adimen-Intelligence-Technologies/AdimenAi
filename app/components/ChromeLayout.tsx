"use client";

import { ReactNode } from "react";
import { usePathname } from "next/navigation";
import { Footer } from "@/app/components/ui/Footer";
import { Header } from "@/app/components/ui/Header";

interface ChromeLayoutProps {
  children: ReactNode;
}

export function ChromeLayout({ children }: ChromeLayoutProps) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith("/admin");

  if (isStudioRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
