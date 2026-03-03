"use client";

import HeroSection from "@/components/HeroSection";
import SurveyForm from "@/components/SurveyForm";
import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useLanguage } from "@/lib/LanguageContext";

export default function Home() {
  const { t } = useLanguage();

  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      <div className="flex justify-end">
        <LanguageSwitcher />
      </div>
      <HeroSection />
      <div className="mt-10 sm:mt-12">
        <SurveyForm />
      </div>
      <footer className="mt-12 pb-8 text-center">
        <p className="text-xs text-caffio-text-muted/50">
          {t("footer.text")}
        </p>
      </footer>
    </main>
  );
}
