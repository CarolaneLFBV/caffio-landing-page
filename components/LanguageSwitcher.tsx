"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function LanguageSwitcher() {
  const { locale, setLocale } = useLanguage();

  return (
    <button
      type="button"
      onClick={() => setLocale(locale === "fr" ? "en" : "fr")}
      className="rounded-lg border border-caffio-border bg-caffio-card px-2.5 py-1.5 text-xs font-semibold text-caffio-text-muted transition-all hover:border-caffio-warm/40 hover:text-caffio-text"
      aria-label={locale === "fr" ? "Switch to English" : "Passer en français"}
    >
      {locale === "fr" ? "EN" : "FR"}
    </button>
  );
}
