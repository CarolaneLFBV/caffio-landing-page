import HeroSection from "@/components/HeroSection";
import SurveyForm from "@/components/SurveyForm";

export default function Home() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6 sm:py-12">
      <HeroSection />
      <div className="mt-10 sm:mt-12">
        <SurveyForm />
      </div>
      <footer className="mt-12 pb-8 text-center">
        <p className="text-xs text-caffio-text-muted/50">
          Caffio · Application iOS de gestion de cafés
        </p>
      </footer>
    </main>
  );
}
