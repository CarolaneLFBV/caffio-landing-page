"use client";

import Image from "next/image";
import { useLanguage } from "@/lib/LanguageContext";

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="px-6 py-12 text-center sm:px-10 sm:py-16">
      {/* Logo */}
      <div className="animate-fade-in-up mx-auto mb-5">
        <Image
          src="/icon.png"
          alt="Caffio"
          width={72}
          height={72}
          className="mx-auto"
          priority
        />
      </div>

      {/* Title */}
      <h1
        className="animate-fade-in-up mb-3 font-display text-3xl font-bold tracking-tight text-caffio-text sm:text-4xl lg:text-5xl"
        style={{ animationDelay: "100ms" }}
      >
        Caffio
      </h1>

      {/* Subtitle */}
      <p
        className="animate-fade-in-up mb-5 text-base font-medium text-caffio-text sm:text-lg"
        style={{ animationDelay: "200ms" }}
      >
        {t("hero.subtitle_before")}
        <span className="font-display italic text-caffio-green">
          {t("hero.subtitle_highlight")}
        </span>
        {t("hero.subtitle_after")}
      </p>

      {/* Description */}
      <p
        className="animate-fade-in-up mx-auto max-w-lg text-sm leading-relaxed text-caffio-text-muted"
        style={{ animationDelay: "300ms" }}
      >
        {t("hero.description")}
      </p>

      {/* Duration pill */}
      <div
        className="animate-fade-in-up mt-5 inline-flex items-center gap-2 rounded-full border border-caffio-border bg-caffio-card px-3.5 py-1.5"
        style={{ animationDelay: "400ms" }}
      >
        <svg className="h-3.5 w-3.5 text-caffio-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        <span className="text-xs font-medium text-caffio-text-muted">
          {t("hero.duration")}
        </span>
      </div>
    </section>
  );
}
