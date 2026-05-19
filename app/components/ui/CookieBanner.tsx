"use client";

import Link from "next/link";
import { Cookie } from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import {
  getAllAcceptedCookiePreferences,
  getDefaultCookiePreferences,
  hasCookieConsent,
  saveCookieConsent,
} from "@/app/lib/cookie-consent";

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(() => !hasCookieConsent());

  const rejectOptionalPreferences = useMemo(() => getDefaultCookiePreferences(), []);
  const acceptAllPreferences = useMemo(() => getAllAcceptedCookiePreferences(), []);

  useEffect(() => {
    const handleConsentUpdated = () => {
      if (hasCookieConsent()) {
        setIsVisible(false);
      }
    };

    window.addEventListener("adimenai:cookie-consent-updated", handleConsentUpdated);
    return () => {
      window.removeEventListener("adimenai:cookie-consent-updated", handleConsentUpdated);
    };
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <aside className="fixed inset-x-3 bottom-3 z-50 mx-auto max-w-3xl rounded-2xl border border-zinc-200 bg-white/95 p-3 shadow-xl backdrop-blur sm:inset-x-6 sm:bottom-6 sm:p-4">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3 text-zinc-900">
          <span className="inline-flex h-10 w-10 items-center justify-center">
            <Cookie className="h-5 w-5" />
          </span>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Gestor de cookies</p>
            <p className="text-lg font-semibold">Controla tu privacidad</p>
          </div>
        </div>

        <p className="text-sm leading-relaxed text-zinc-600">
          Guardamos solo las cookies necesarias hasta que nos digas lo contrario. Puedes aceptar todas las opcionales o elegir solo las que quieras.
        </p>

        <div className="flex flex-col gap-2  border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-600 sm:flex-row sm:items-center sm:justify-between">
          <span>Necesarias: siempre activas</span>
          <Link href="/seleccionar-cookies" className="font-semibold text-zinc-900 underline-offset-4 transition hover:underline">
            Seleccionar cookies
          </Link>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:justify-end">
          <button
            type="button"
            className="border border-zinc-300 px-3 py-2 text-sm font-semibold text-zinc-800 transition hover:bg-zinc-100"
            onClick={() => {
              saveCookieConsent(rejectOptionalPreferences, "banner");
              setIsVisible(false);
            }}
          >
            Rechazar opcionales
          </button>
          <button
            type="button"
            className="border border-zinc-900 bg-zinc-900 px-3 py-2 text-sm font-semibold text-white transition hover:bg-zinc-700"
            onClick={() => {
              saveCookieConsent(acceptAllPreferences, "banner");
              setIsVisible(false);
            }}
          >
            Aceptar todas
          </button>
        </div>
      </div>
    </aside>
  );
}
