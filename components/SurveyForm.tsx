"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ProgressBar from "./ProgressBar";
import { useLanguage } from "@/lib/LanguageContext";

const TOTAL_STEPS = 3;

/* ─── Option arrays: values are always in French (stored in DB) ── */

const frequencyOptions = [
  "Jamais",
  "1-2 par semaine",
  "1 par jour",
  "2-3 par jour",
  "4+ par jour",
];

const coffeeTypeOptions = [
  "Espresso",
  "Filtre",
  "Latte",
  "Cappuccino",
  "Cold brew",
  "Matcha",
  "Autre",
];

const equipmentOptions = [
  "Machine espresso",
  "Cafetière filtre",
  "French press",
  "V60",
  "AeroPress",
  "Chemex",
  "Moka",
  "Moulin",
  "Balance",
  "Bouilloire",
  "Autre",
];

const expertiseOptions = ["Débutant", "Intermédiaire", "Expert"];

const featureOptions = [
  { id: "moments", icon: "M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" },
  { id: "sharing", icon: "M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z" },
  { id: "recipes", icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" },
  { id: "ai", icon: "M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" },
  { id: "caffeine", icon: "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" },
  { id: "timer", icon: "M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" },
  { id: "equipment", icon: "M11.42 15.17l-5.645 3.18a.75.75 0 01-1.088-.79l1.47-6.315-4.907-4.26a.75.75 0 01.416-1.28l6.42-.583L11.177.94a.75.75 0 011.346 0l3.091 5.98 6.42.583a.75.75 0 01.416 1.28l-4.907 4.26 1.47 6.315a.75.75 0 01-1.088.79L12.28 16.96" },
  { id: "community", icon: "M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" },
  { id: "widgets", icon: "M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z" },
  { id: "tasting", icon: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" },
  { id: "sync", icon: "M2.25 15a4.5 4.5 0 004.5 4.5H18a3.75 3.75 0 001.332-7.257 3 3 0 00-3.758-3.848 5.25 5.25 0 00-10.233 2.33A4.502 4.502 0 002.25 15z" },
  { id: "healthkit", icon: "M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605" },
  { id: "darkmode", icon: "M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" },
  { id: "stats", icon: "M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" },
  { id: "notifications", icon: "M14.857 17.082a23.848 23.848 0 005.454-1.31A8.967 8.967 0 0118 9.75v-.7V9A6 6 0 006 9v.75a8.967 8.967 0 01-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 01-5.714 0m5.714 0a3 3 0 11-5.714 0" },
];

const designPriorityOptions = [
  { value: "Design / esthétique", icon: "M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" },
  { value: "Simplicité", icon: "M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" },
  { value: "Fonctionnalités avancées", icon: "M11.42 15.17l-5.645 3.18a.75.75 0 01-1.088-.79l1.47-6.315-4.907-4.26a.75.75 0 01.416-1.28l6.42-.583L11.177.94a.75.75 0 011.346 0l3.091 5.98 6.42.583a.75.75 0 01.416 1.28l-4.907 4.26 1.47 6.315a.75.75 0 01-1.088.79L12.28 16.96" },
  { value: "Personnalisation", icon: "M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" },
];

const darkModeOptions = [
  "Toujours",
  "Jamais",
  "Automatique",
  "Pas d'avis",
];

interface FormData {
  frequency: string;
  coffeeTypes: string[];
  equipment: string[];
  expertise: string;
  features: string[];
  mostImportantFeature: string;
  featureSuggestion: string;
  designPriority: string;
  darkMode: string;
  otherApps: string;
  comments: string;
}

/* ─── Chip selector ─────────────────────────────────────────── */

function ChipSelect({
  options,
  selected,
  onChange,
  otherValue,
  onOtherChange,
  getLabel,
  otherPlaceholder,
}: {
  options: string[];
  selected: string[];
  onChange: (values: string[]) => void;
  otherValue?: string;
  onOtherChange?: (value: string) => void;
  getLabel: (value: string) => string;
  otherPlaceholder: string;
}) {
  const toggle = (option: string) => {
    onChange(
      selected.includes(option)
        ? selected.filter((s) => s !== option)
        : [...selected, option]
    );
  };

  const hasOther = options.includes("Autre") && selected.includes("Autre");

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => toggle(option)}
            className={`rounded-xl border px-4 py-2 text-sm font-medium transition-all duration-200 ${
              selected.includes(option)
                ? "border-caffio-green bg-caffio-green/10 text-caffio-green shadow-sm shadow-caffio-green/10"
                : "border-caffio-border bg-caffio-card text-caffio-text hover:border-caffio-warm/40 hover:bg-caffio-card/80"
            }`}
          >
            {getLabel(option)}
          </button>
        ))}
      </div>
      {hasOther && onOtherChange && (
        <input
          type="text"
          value={otherValue ?? ""}
          onChange={(e) => onOtherChange(e.target.value)}
          placeholder={otherPlaceholder}
          className="w-full rounded-xl border border-caffio-border bg-caffio-surface px-4 py-2.5 text-sm text-caffio-text placeholder:text-caffio-text-muted/50 transition-all focus:border-caffio-green focus:shadow-[0_0_0_3px_rgba(123,143,106,0.1)] focus:outline-none"
        />
      )}
    </div>
  );
}

/* ─── Radio card ────────────────────────────────────────────── */

function RadioCards({
  options,
  selected,
  onChange,
  name,
  getLabel,
}: {
  options: string[];
  selected: string;
  onChange: (value: string) => void;
  name: string;
  getLabel: (value: string) => string;
}) {
  return (
    <div className="flex flex-col gap-2">
      {options.map((option) => (
        <label
          key={option}
          className={`group flex cursor-pointer items-center gap-3 rounded-xl border px-4 py-3.5 text-sm transition-all duration-200 ${
            selected === option
              ? "border-caffio-green bg-caffio-green/8 shadow-sm shadow-caffio-green/10"
              : "border-caffio-border bg-caffio-card hover:border-caffio-warm/30 hover:shadow-sm"
          }`}
        >
          <input
            type="radio"
            name={name}
            value={option}
            checked={selected === option}
            onChange={() => onChange(option)}
            className="sr-only"
          />
          <span
            className={`flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full border-2 transition-all ${
              selected === option
                ? "border-caffio-green bg-caffio-green"
                : "border-caffio-border group-hover:border-caffio-warm/50"
            }`}
          >
            {selected === option && (
              <span className="h-1.5 w-1.5 rounded-full bg-white" />
            )}
          </span>
          <span className={`font-medium transition-colors ${
            selected === option ? "text-caffio-text" : "text-caffio-text/80"
          }`}>
            {getLabel(option)}
          </span>
        </label>
      ))}
    </div>
  );
}

/* ─── Main form ─────────────────────────────────────────────── */

export default function SurveyForm() {
  const router = useRouter();
  const { t } = useLanguage();
  const [step, setStep] = useState(0);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");
  const [otherCoffeeType, setOtherCoffeeType] = useState("");
  const [otherEquipment, setOtherEquipment] = useState("");
  const [formData, setFormData] = useState<FormData>({
    frequency: "",
    coffeeTypes: [],
    equipment: [],
    expertise: "",
    features: [],
    mostImportantFeature: "",
    featureSuggestion: "",
    designPriority: "",
    darkMode: "",
    otherApps: "",
    comments: "",
  });

  const update = <K extends keyof FormData>(key: K, value: FormData[K]) => {
    setFormData((prev) => ({ ...prev, [key]: value }));
    setError("");
  };

  // Validation always compares against French values (stored in formData)
  const canGoNext = () => {
    if (step === 0) return formData.frequency !== "" && formData.frequency !== "Jamais" && formData.expertise !== "" && formData.coffeeTypes.length > 0;
    if (step === 1) return formData.features.length > 0;
    if (step === 2) return formData.designPriority !== "";
    return true;
  };

  const next = () => {
    if (!canGoNext()) {
      setError(t("error.required"));
      return;
    }
    setStep((s) => Math.min(s + 1, TOTAL_STEPS - 1));
    setError("");
  };

  const prev = () => {
    setStep((s) => Math.max(s - 1, 0));
    setError("");
  };

  const submit = async () => {
    if (!canGoNext()) {
      setError(t("error.required"));
      return;
    }

    setSubmitting(true);
    setError("");

    try {
      // formData always contains French values — safe to send directly
      const res = await fetch("/api/survey", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || t("error.submit"));
      }

      router.push("/merci");
    } catch (e) {
      setError(e instanceof Error ? e.message : t("error.submit"));
      setSubmitting(false);
    }
  };

  const stepLabels = [
    t("step.profile"),
    t("step.features"),
    t("step.experience"),
  ];

  return (
    <div className="rounded-3xl border border-caffio-border bg-caffio-card p-6 shadow-xl shadow-caffio-brown-dark/5 sm:p-8">
      <ProgressBar currentStep={step} totalSteps={TOTAL_STEPS} labels={stepLabels} />

      <div className="min-h-[440px]">
        {/* ─── Step 1: Profil ──────────────────────────── */}
        {step === 0 && (
          <div className="animate-fade-in-up space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-caffio-text">
                {t("step0.title")}
              </h2>
              <p className="mt-1 text-sm text-caffio-text-muted">
                {t("step0.subtitle")}
              </p>
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-caffio-text">
                {t("step0.frequency_label")}
                <span className="ml-1 text-caffio-green">*</span>
              </legend>
              <RadioCards
                options={frequencyOptions}
                selected={formData.frequency}
                onChange={(v) => update("frequency", v)}
                name="frequency"
                getLabel={t}
              />
            </fieldset>

            {formData.frequency === "Jamais" && (
              <div className="rounded-xl border border-caffio-warm/20 bg-caffio-warm/5 p-4">
                <p className="text-sm font-medium text-caffio-text">
                  {t("step0.frequency_never_msg")}
                </p>
              </div>
            )}

            {formData.frequency !== "Jamais" && (<>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-caffio-text">
                {t("step0.coffee_types_label")}
                <span className="ml-1 text-caffio-green">*</span>
              </legend>
              <ChipSelect
                options={coffeeTypeOptions}
                selected={formData.coffeeTypes}
                onChange={(v) => update("coffeeTypes", v)}
                otherValue={otherCoffeeType}
                onOtherChange={setOtherCoffeeType}
                getLabel={t}
                otherPlaceholder={t("other.specify")}
              />
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-caffio-text">
                {t("step0.equipment_label")}
              </legend>
              <ChipSelect
                options={equipmentOptions}
                selected={formData.equipment}
                onChange={(v) => update("equipment", v)}
                otherValue={otherEquipment}
                onOtherChange={setOtherEquipment}
                getLabel={t}
                otherPlaceholder={t("other.specify")}
              />
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-caffio-text">
                {t("step0.expertise_label")}
                <span className="ml-1 text-caffio-green">*</span>
              </legend>
              <RadioCards
                options={expertiseOptions}
                selected={formData.expertise}
                onChange={(v) => update("expertise", v)}
                name="expertise"
                getLabel={t}
              />
            </fieldset>
            </>)}
          </div>
        )}

        {/* ─── Step 2: Features ────────────────────────── */}
        {step === 1 && (
          <div className="animate-fade-in-up space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-caffio-text">
                {t("step1.title")}
              </h2>
              <p className="mt-1 text-sm text-caffio-text-muted">
                {t("step1.subtitle")}
              </p>
            </div>

            {/* App description */}
            <div className="rounded-xl border border-caffio-green/20 bg-caffio-green/5 p-4">
              <p className="text-xs font-bold uppercase tracking-wider text-caffio-green">
                {t("step1.app_desc_title")}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-caffio-text">
                {t("step1.app_desc_text")}
              </p>
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-caffio-text">
                {t("step1.features_label")}
                <span className="ml-1 text-caffio-green">*</span>
              </legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {featureOptions.map((feat) => {
                  const isSelected = formData.features.includes(feat.id);
                  return (
                    <label
                      key={feat.id}
                      className={`group flex cursor-pointer items-start gap-3 rounded-xl border p-4 transition-all duration-200 ${
                        isSelected
                          ? "border-caffio-green bg-caffio-green/8 shadow-sm shadow-caffio-green/10"
                          : "border-caffio-border bg-caffio-card hover:border-caffio-warm/30 hover:shadow-sm"
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={isSelected}
                        onChange={() =>
                          update(
                            "features",
                            isSelected
                              ? formData.features.filter((f) => f !== feat.id)
                              : [...formData.features, feat.id]
                          )
                        }
                        className="sr-only"
                      />
                      <div
                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-md transition-all ${
                          isSelected
                            ? "bg-caffio-green text-white"
                            : "border-2 border-caffio-border group-hover:border-caffio-warm/40"
                        }`}
                      >
                        {isSelected && (
                          <svg className="h-3 w-3" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                            <polyline points="20 6 9 17 4 12" />
                          </svg>
                        )}
                      </div>
                      <div className="flex items-start gap-2.5">
                        <svg
                          className={`mt-0.5 h-4 w-4 shrink-0 transition-colors ${
                            isSelected ? "text-caffio-green" : "text-caffio-text-muted"
                          }`}
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth={1.5}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d={feat.icon} />
                        </svg>
                        <span className={`text-sm font-medium leading-tight ${
                          isSelected ? "text-caffio-text" : "text-caffio-text/80"
                        }`}>
                          {t(`feature.${feat.id}`)}
                        </span>
                      </div>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-caffio-text">
                {t("step1.most_important_label")}
              </legend>
              <textarea
                value={formData.mostImportantFeature}
                onChange={(e) =>
                  update("mostImportantFeature", e.target.value)
                }
                placeholder={t("step1.most_important_placeholder")}
                rows={3}
                className="w-full resize-none rounded-xl border border-caffio-border bg-caffio-surface px-4 py-3.5 text-sm text-caffio-text placeholder:text-caffio-text-muted/50 transition-all focus:border-caffio-green focus:shadow-[0_0_0_3px_rgba(123,143,106,0.1)] focus:outline-none"
              />
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-caffio-text">
                {t("step1.suggestion_label")}
              </legend>
              <textarea
                value={formData.featureSuggestion ?? ""}
                onChange={(e) =>
                  update("featureSuggestion", e.target.value)
                }
                placeholder={t("step1.suggestion_placeholder")}
                rows={3}
                className="w-full resize-none rounded-xl border border-caffio-border bg-caffio-surface px-4 py-3.5 text-sm text-caffio-text placeholder:text-caffio-text-muted/50 transition-all focus:border-caffio-green focus:shadow-[0_0_0_3px_rgba(123,143,106,0.1)] focus:outline-none"
              />
            </fieldset>
          </div>
        )}

        {/* ─── Step 3: Experience ──────────────────────── */}
        {step === 2 && (
          <div className="animate-fade-in-up space-y-8">
            <div>
              <h2 className="font-display text-2xl font-bold text-caffio-text">
                {t("step2.title")}
              </h2>
              <p className="mt-1 text-sm text-caffio-text-muted">
                {t("step2.subtitle")}
              </p>
            </div>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-caffio-text">
                {t("step2.design_label")}
                <span className="ml-1 text-caffio-green">*</span>
              </legend>
              <div className="grid gap-2 sm:grid-cols-2">
                {designPriorityOptions.map((opt) => {
                  const isSelected = formData.designPriority === opt.value;
                  return (
                    <label
                      key={opt.value}
                      className={`group flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition-all duration-200 ${
                        isSelected
                          ? "border-caffio-green bg-caffio-green/8 shadow-sm shadow-caffio-green/10"
                          : "border-caffio-border bg-caffio-card hover:border-caffio-warm/30 hover:shadow-sm"
                      }`}
                    >
                      <input
                        type="radio"
                        name="designPriority"
                        value={opt.value}
                        checked={isSelected}
                        onChange={() => update("designPriority", opt.value)}
                        className="sr-only"
                      />
                      <div className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg transition-colors ${
                        isSelected ? "bg-caffio-green/15 text-caffio-green" : "bg-caffio-surface text-caffio-text-muted"
                      }`}>
                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d={opt.icon} />
                        </svg>
                      </div>
                      <span className={`text-sm font-medium ${
                        isSelected ? "text-caffio-text" : "text-caffio-text/80"
                      }`}>
                        {t(opt.value)}
                      </span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-caffio-text">
                {t("step2.dark_mode_label")}
              </legend>
              <div className="flex flex-wrap gap-2">
                {darkModeOptions.map((option) => (
                  <button
                    key={option}
                    type="button"
                    onClick={() => update("darkMode", option)}
                    className={`rounded-xl border px-4 py-2.5 text-sm font-medium transition-all duration-200 ${
                      formData.darkMode === option
                        ? "border-caffio-green bg-caffio-green/10 text-caffio-green shadow-sm shadow-caffio-green/10"
                        : "border-caffio-border bg-caffio-card text-caffio-text hover:border-caffio-warm/40"
                    }`}
                  >
                    {t(option)}
                  </button>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-caffio-text">
                {t("step2.other_apps_label")}
              </legend>
              <textarea
                value={formData.otherApps}
                onChange={(e) => update("otherApps", e.target.value)}
                placeholder={t("step2.other_apps_placeholder")}
                rows={3}
                className="w-full resize-none rounded-xl border border-caffio-border bg-caffio-surface px-4 py-3.5 text-sm text-caffio-text placeholder:text-caffio-text-muted/50 transition-all focus:border-caffio-green focus:shadow-[0_0_0_3px_rgba(123,143,106,0.1)] focus:outline-none"
              />
            </fieldset>

            <fieldset>
              <legend className="mb-3 text-sm font-semibold text-caffio-text">
                {t("step2.comments_label")}
              </legend>
              <textarea
                value={formData.comments}
                onChange={(e) => update("comments", e.target.value)}
                placeholder={t("step2.comments_placeholder")}
                rows={3}
                className="w-full resize-none rounded-xl border border-caffio-border bg-caffio-surface px-4 py-3.5 text-sm text-caffio-text placeholder:text-caffio-text-muted/50 transition-all focus:border-caffio-green focus:shadow-[0_0_0_3px_rgba(123,143,106,0.1)] focus:outline-none"
              />
            </fieldset>
          </div>
        )}
      </div>

      {/* Error */}
      {error && (
        <div className="mt-4 flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2.5">
          <svg className="h-4 w-4 shrink-0 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="12" y1="8" x2="12" y2="12" />
            <line x1="12" y1="16" x2="12.01" y2="16" />
          </svg>
          <p className="text-sm font-medium text-red-500">{error}</p>
        </div>
      )}

      {/* Navigation */}
      <div className="mt-8 flex items-center justify-between">
        {step > 0 ? (
          <button
            type="button"
            onClick={prev}
            className="flex items-center gap-2 rounded-xl border border-caffio-border px-5 py-3 text-sm font-semibold text-caffio-text transition-all hover:bg-caffio-surface hover:shadow-sm"
          >
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
            {t("btn.previous")}
          </button>
        ) : (
          <div />
        )}

        {step < TOTAL_STEPS - 1 ? (
          <button
            type="button"
            onClick={next}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-caffio-green to-caffio-green-light px-6 py-3 text-sm font-semibold text-white shadow-md shadow-caffio-green/20 transition-all hover:shadow-lg hover:shadow-caffio-green/30"
          >
            {t("btn.next")}
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </button>
        ) : (
          <button
            type="button"
            onClick={submit}
            disabled={submitting}
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-caffio-brown-dark to-caffio-brown px-6 py-3 text-sm font-semibold text-white shadow-md shadow-caffio-brown/20 transition-all hover:shadow-lg hover:shadow-caffio-brown/30 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {submitting ? (
              <>
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                {t("btn.submitting")}
              </>
            ) : (
              <>
                {t("btn.submit")}
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12" />
                </svg>
              </>
            )}
          </button>
        )}
      </div>
    </div>
  );
}
