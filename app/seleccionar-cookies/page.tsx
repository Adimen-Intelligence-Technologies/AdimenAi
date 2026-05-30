"use client";

import Link from "next/link";
import { useState } from "react";
import {
  getAllAcceptedCookiePreferences,
  getDefaultCookiePreferences,
  readCookieConsent,
  saveCookieConsent,
  type CookieConsentPreferences,
} from "@/app/lib/cookie-consent";

interface PreferenceItem {
  id: Exclude<keyof CookieConsentPreferences, "necessary">;
  title: string;
  description: string;
}

const preferenceItems: PreferenceItem[] = [
  {
    id: "preferences",
    title: "Preferencias",
    description: "Recuerda ajustes de interfaz y opciones para personalizar tu experiencia.",
  },
  {
    id: "analytics",
    title: "Analitica",
    description: "Nos ayuda a entender el uso de la web para mejorar rendimiento y contenido.",
  },
  {
    id: "marketing",
    title: "Marketing",
    description: "Permite medir campanas y mostrar comunicacion comercial mas relevante.",
  },
];

export default function SeleccionarCookiesPage() {
  const [preferences, setPreferences] = useState<CookieConsentPreferences>(() => {
    const stored = readCookieConsent();
    return stored?.preferences ?? getDefaultCookiePreferences();
  });
  const [lastUpdatedAt, setLastUpdatedAt] = useState<string | null>(() => {
    const stored = readCookieConsent();
    return stored?.updatedAt ?? null;
  });
  const [savedMessage, setSavedMessage] = useState<string>("");

  const lastUpdatedText = (() => {
    if (!lastUpdatedAt) {
      return "Aun no has guardado preferencias.";
    }

    const date = new Date(lastUpdatedAt);
    return `Ultima actualizacion: ${date.toLocaleString("es-ES")}`;
  })();

  const handleToggle = (key: PreferenceItem["id"]) => {
    setPreferences((current) => ({ ...current, [key]: !current[key] }));
    setSavedMessage("");
  };

  const handleSave = () => {
    const record = saveCookieConsent(preferences, "settings-page");
    setLastUpdatedAt(record?.updatedAt ?? null);
    setSavedMessage("Preferencias guardadas correctamente.");
  };

  const handleAcceptAll = () => {
    const nextPreferences = getAllAcceptedCookiePreferences();
    setPreferences(nextPreferences);
    const record = saveCookieConsent(nextPreferences, "settings-page");
    setLastUpdatedAt(record?.updatedAt ?? null);
    setSavedMessage("Has aceptado todas las cookies opcionales.");
  };

  const handleRejectOptional = () => {
    const nextPreferences = getDefaultCookiePreferences();
    setPreferences(nextPreferences);
    const record = saveCookieConsent(nextPreferences, "settings-page");
    setLastUpdatedAt(record?.updatedAt ?? null);
    setSavedMessage("Has rechazado todas las cookies opcionales.");
  };

  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <main className="mx-auto w-full max-w-4xl px-4 py-10 sm:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-zinc-500">RGPD y privacidad</p>
        <h1 className="mt-2 text-3xl font-semibold tracking-tight sm:text-4xl">Seleccionar cookies</h1>
        <p className="mt-4 max-w-3xl text-base leading-relaxed text-zinc-600">
          Desde este panel puedes aceptar o rechazar categorias de cookies no esenciales. Las cookies necesarias se
          mantienen activas porque son imprescindibles para el funcionamiento tecnico del sitio.
        </p>

        <section className="mt-8 space-y-4 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:p-6">
          <div className="flex items-center justify-between rounded-xl border border-zinc-200 bg-zinc-50 p-4">
            <div>
              <h2 className="text-lg font-semibold">Necesarias</h2>
              <p className="text-sm text-zinc-600">Siempre activas para seguridad, navegacion y funcionamiento.</p>
            </div>
            <span className="rounded-full border border-zinc-300 bg-white px-3 py-1 text-sm font-semibold">Activas</span>
          </div>

          {preferenceItems.map((item) => (
            <div key={item.id} className="flex items-center justify-between gap-4 rounded-xl border border-zinc-200 p-4">
              <div>
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="text-sm text-zinc-600">{item.description}</p>
              </div>
              <button
                type="button"
                role="switch"
                aria-checked={preferences[item.id]}
                aria-label={`Activar ${item.title}`}
                onClick={() => handleToggle(item.id)}
                className={`relative inline-flex h-8 w-14 items-center rounded-full transition ${
                  preferences[item.id] ? "bg-zinc-900" : "bg-zinc-300"
                }`}
              >
                <span
                  className={`inline-block h-6 w-6 transform rounded-full bg-white transition ${
                    preferences[item.id] ? "translate-x-7" : "translate-x-1"
                  }`}
                />
              </button>
            </div>
          ))}
        </section>

        <section className="mt-6 flex flex-col gap-3 rounded-2xl border border-zinc-200 bg-white p-4 shadow-sm sm:flex-row sm:items-center sm:justify-between sm:p-6">
          <p className="text-sm text-zinc-600">{lastUpdatedText}</p>
          <div className="flex flex-col gap-2 sm:flex-row">
            <button
              type="button"
              onClick={handleRejectOptional}
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Rechazar opcionales
            </button>
            <button
              type="button"
              onClick={handleAcceptAll}
              className="rounded-full border border-zinc-300 px-4 py-2 text-sm font-semibold text-zinc-700 hover:bg-zinc-100"
            >
              Aceptar todas
            </button>
            <button
              type="button"
              onClick={handleSave}
              className="rounded-full border border-zinc-900 bg-zinc-900 px-4 py-2 text-sm font-semibold text-white hover:bg-zinc-700"
            >
              Guardar seleccion
            </button>
          </div>
        </section>

        {savedMessage ? <p className="mt-4 text-sm font-medium text-emerald-700">{savedMessage}</p> : null}

        <p className="mt-8 text-sm text-zinc-500">
          Puedes cambiar esta configuracion cuando quieras desde el menu principal.
          <Link href="/" className="ml-2 font-semibold text-zinc-900 underline-offset-4 hover:underline">
            Volver al inicio
          </Link>
        </p>
      </main>
    </div>
  );
}
