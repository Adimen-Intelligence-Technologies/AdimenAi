export const COOKIE_CONSENT_STORAGE_KEY = "adimenai-cookie-consent-v1";

export type CookieConsentCategory = "necessary" | "preferences" | "analytics" | "marketing";

export interface CookieConsentPreferences {
  necessary: true;
  preferences: boolean;
  analytics: boolean;
  marketing: boolean;
}

export interface CookieConsentRecord {
  version: number;
  consentGiven: boolean;
  source: "banner" | "settings-page";
  updatedAt: string;
  preferences: CookieConsentPreferences;
}

export const COOKIE_CONSENT_VERSION = 1;

export function getDefaultCookiePreferences(): CookieConsentPreferences {
  return {
    necessary: true,
    preferences: false,
    analytics: false,
    marketing: false,
  };
}

export function getAllAcceptedCookiePreferences(): CookieConsentPreferences {
  return {
    necessary: true,
    preferences: true,
    analytics: true,
    marketing: true,
  };
}

export function readCookieConsent(): CookieConsentRecord | null {
  if (typeof window === "undefined") {
    return null;
  }

  const raw = window.localStorage.getItem(COOKIE_CONSENT_STORAGE_KEY);
  if (!raw) {
    return null;
  }

  try {
    const parsed = JSON.parse(raw) as Partial<CookieConsentRecord>;
    if (!parsed || parsed.consentGiven !== true) {
      return null;
    }

    const preferences = parsed.preferences ?? getDefaultCookiePreferences();
    const normalizedPreferences: CookieConsentPreferences = {
      necessary: true,
      preferences: typeof preferences.preferences === "boolean" ? preferences.preferences : false,
      analytics: typeof preferences.analytics === "boolean" ? preferences.analytics : false,
      marketing: typeof preferences.marketing === "boolean" ? preferences.marketing : false,
    };

    return {
      version: parsed.version ?? COOKIE_CONSENT_VERSION,
      consentGiven: true,
      source: parsed.source === "settings-page" ? "settings-page" : "banner",
      updatedAt: typeof parsed.updatedAt === "string" ? parsed.updatedAt : new Date().toISOString(),
      preferences: normalizedPreferences,
    };
  } catch {
    return null;
  }
}

export function saveCookieConsent(
  preferences: CookieConsentPreferences,
  source: CookieConsentRecord["source"]
): CookieConsentRecord | null {
  if (typeof window === "undefined") {
    return null;
  }

  const record: CookieConsentRecord = {
    version: COOKIE_CONSENT_VERSION,
    consentGiven: true,
    source,
    updatedAt: new Date().toISOString(),
    preferences: {
      necessary: true,
      preferences: preferences.preferences,
      analytics: preferences.analytics,
      marketing: preferences.marketing,
    },
  };

  window.localStorage.setItem(COOKIE_CONSENT_STORAGE_KEY, JSON.stringify(record));
  window.dispatchEvent(new Event("adimenai:cookie-consent-updated"));

  return record;
}

export function hasCookieConsent(): boolean {
  return readCookieConsent() !== null;
}
