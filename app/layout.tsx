import type { Metadata } from "next";
import { Lato, Inter } from "next/font/google";
import "./globals.css";
import { Header } from "./components/ui/Header";
import { Footer } from "./components/ui/Footer";
import { cn } from "@/lib/utils";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "AdimenAI",
  description: "Automatiza tu negocio con AdimenAI, la plataforma de inteligencia artificial que transforma tus datos en decisiones inteligentes. Optimiza procesos, mejora la eficiencia y toma decisiones informadas con nuestras soluciones de IA personalizadas.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className={cn("h-full", "antialiased", lato.variable, "font-sans", inter.variable)}>
      <body className="min-h-full flex min-h-screen flex-col bg-zinc-50 text-zinc-900 font-sans">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
