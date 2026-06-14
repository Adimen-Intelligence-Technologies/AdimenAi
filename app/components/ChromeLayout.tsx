"use client";

import { ReactNode, useEffect } from "react";
import { usePathname } from "next/navigation";
import { CookieBanner } from "@/app/components/ui/CookieBanner";
import { Footer } from "@/app/components/ui/Footer";
import { Header } from "@/app/components/ui/Header";

interface ChromeLayoutProps {
  children: ReactNode;
}

export function ChromeLayout({ children }: ChromeLayoutProps) {
  const pathname = usePathname();
  const isStudioRoute = pathname?.startsWith("/admin");

  useEffect(() => {
    if (typeof window !== "undefined" && "scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }
    window.scrollTo(0, 0);
  }, [pathname]);

  if (isStudioRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
      <CookieBanner />
    </>
  );
}
