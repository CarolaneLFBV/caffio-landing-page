"use client";

import Link from "next/link";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";

export default function MerciPage() {
  const { t } = useLanguage();

  return (
    <main className="relative flex min-h-screen items-center justify-center px-4">
      {/* Language switcher */}
      <div className="absolute top-4 right-4">
        <LanguageSwitcher />
      </div>

      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-caffio-green/5 blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 h-[400px] w-[400px] rounded-full bg-caffio-warm/5 blur-[120px]" />
      </div>

      <div className="relative w-full max-w-lg text-center">
        {/* Icon */}
        <div className="animate-scale-in mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-br from-caffio-green to-caffio-green-light shadow-lg shadow-caffio-green/20">
          <svg className="h-10 w-10 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </div>

        {/* Title */}
        <h1 className="animate-fade-in-up font-display text-4xl font-bold tracking-tight text-caffio-text sm:text-5xl" style={{ animationDelay: "100ms" }}>
          {t("merci.title")}
        </h1>

        {/* Description */}
        <p className="animate-fade-in-up mt-4 text-lg text-caffio-text-muted" style={{ animationDelay: "200ms" }}>
          {t("merci.description")}
        </p>
        <p className="animate-fade-in-up mt-2 text-sm leading-relaxed text-caffio-text-muted/70" style={{ animationDelay: "300ms" }}>
          {t("merci.detail")}
        </p>

        {/* CTA */}
        <div className="animate-fade-in-up mt-10" style={{ animationDelay: "400ms" }}>
          <Link
            href="/"
            className="inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-caffio-brown-dark to-caffio-brown px-6 py-3.5 text-sm font-semibold text-white shadow-md shadow-caffio-brown/20 transition-all hover:shadow-lg hover:shadow-caffio-brown/30"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {t("merci.back")}
          </Link>
        </div>
      </div>
    </main>
  );
}
