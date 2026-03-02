"use client";

import { useState, useEffect, useCallback } from "react";

interface SurveyResponse {
  id: string;
  timestamp: string;
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

const FEATURE_LABELS: Record<string, string> = {
  moments: "Moments café",
  sharing: "Partage proches",
  recipes: "Carnet recettes",
  ai: "Recettes IA",
  caffeine: "Suivi caféine",
  timer: "Timer préparation",
  equipment: "Gestion équipement",
  community: "Communauté",
  widgets: "Widgets iOS",
  tasting: "Notes dégustation",
  sync: "Sync iCloud",
  healthkit: "HealthKit",
  darkmode: "Mode sombre",
  stats: "Statistiques",
  notifications: "Notifications",
};

export default function AdminPage() {
  const [authenticated, setAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [responses, setResponses] = useState<SurveyResponse[]>([]);
  const [loginLoading, setLoginLoading] = useState(false);

  const fetchResponses = useCallback(async () => {
    const res = await fetch("/api/admin/responses");
    if (res.ok) {
      const data = await res.json();
      setResponses(data);
      setAuthenticated(true);
    }
    setLoading(false);
  }, []);

  useEffect(() => {
    fetchResponses();
  }, [fetchResponses]);

  async function handleLogin(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoginLoading(true);

    const res = await fetch("/api/admin/auth", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ password }),
    });

    if (res.ok) {
      setPassword("");
      await fetchResponses();
    } else {
      setError("Mot de passe incorrect");
    }
    setLoginLoading(false);
  }

  async function handleLogout() {
    await fetch("/api/admin/auth", { method: "DELETE" });
    setAuthenticated(false);
    setResponses([]);
  }

  // --- Loading ---
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center">
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-caffio-brown-light border-t-transparent" />
      </div>
    );
  }

  // --- Login ---
  if (!authenticated) {
    return (
      <div className="relative flex min-h-screen items-center justify-center px-4">
        {/* Background effects */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-1/3 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-caffio-warm/5 blur-[150px]" />
          <div className="absolute bottom-1/4 left-1/4 h-[400px] w-[400px] rounded-full bg-caffio-green/5 blur-[120px]" />
        </div>

        <div className="relative w-full max-w-sm">
          {/* Logo */}
          <div className="mb-8 text-center">
            <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-caffio-brown-dark via-caffio-brown to-caffio-brown-light shadow-lg shadow-caffio-brown/20">
              <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 8h1a4 4 0 110 8h-1" />
                <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
                <line x1="6" y1="2" x2="6" y2="4" />
                <line x1="10" y1="2" x2="10" y2="4" />
                <line x1="14" y1="2" x2="14" y2="4" />
              </svg>
            </div>
            <h1 className="text-2xl font-extrabold tracking-tight text-caffio-text">
              Caffio Admin
            </h1>
            <p className="mt-1 text-sm text-caffio-text-muted">
              Dashboard interne
            </p>
          </div>

          {/* Card */}
          <div className="rounded-2xl border border-caffio-border bg-caffio-card p-8 shadow-xl shadow-caffio-brown-dark/5">
            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label htmlFor="password" className="mb-2 block text-xs font-semibold uppercase tracking-wider text-caffio-text-muted">
                  Mot de passe
                </label>
                <input
                  id="password"
                  type="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                    setError("");
                  }}
                  placeholder="Entrez votre mot de passe"
                  className="w-full rounded-xl border border-caffio-border bg-caffio-surface px-4 py-3.5 text-sm text-caffio-text placeholder:text-caffio-text-muted/60 transition-all focus:border-caffio-green focus:shadow-[0_0_0_3px_rgba(123,143,106,0.1)] focus:outline-none"
                  autoFocus
                />
              </div>

              {error && (
                <div className="flex items-center gap-2 rounded-lg bg-red-500/10 px-3 py-2.5">
                  <svg className="h-4 w-4 shrink-0 text-red-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                  </svg>
                  <p className="text-sm text-red-500">{error}</p>
                </div>
              )}

              <button
                type="submit"
                disabled={loginLoading || !password}
                className="group relative w-full overflow-hidden rounded-xl bg-gradient-to-r from-caffio-brown-dark to-caffio-brown px-4 py-3.5 text-sm font-semibold text-white transition-all hover:shadow-lg hover:shadow-caffio-brown/20 disabled:opacity-40 disabled:cursor-not-allowed"
              >
                <span className="relative z-10 flex items-center justify-center gap-2">
                  {loginLoading ? (
                    <div className="h-4 w-4 animate-spin rounded-full border-2 border-white/40 border-t-white" />
                  ) : (
                    "Se connecter"
                  )}
                </span>
              </button>
            </form>
          </div>

          <p className="mt-6 text-center text-xs text-caffio-text-muted/50">
            Acces reserve · Caffio
          </p>
        </div>
      </div>
    );
  }

  // --- Dashboard ---
  const total = responses.length;

  function topValues(arr: string[], labelMap?: Record<string, string>): [string, number][] {
    const counts: Record<string, number> = {};
    for (const v of arr) {
      if (v) {
        const label = labelMap?.[v] ?? v;
        counts[label] = (counts[label] || 0) + 1;
      }
    }
    return Object.entries(counts).sort((a, b) => b[1] - a[1]);
  }

  const frequencyStats = topValues(responses.map((r) => r.frequency));
  const expertiseStats = topValues(responses.map((r) => r.expertise));
  const featureStats = topValues(responses.flatMap((r) => r.features), FEATURE_LABELS);
  const designStats = topValues(responses.map((r) => r.designPriority));
  const darkModeStats = topValues(responses.map((r) => r.darkMode));

  const sorted = [...responses].sort(
    (a, b) => new Date(b.timestamp).getTime() - new Date(a.timestamp).getTime()
  );

  return (
    <div className="min-h-screen">
      {/* Hero header */}
      <header className="relative overflow-hidden bg-gradient-to-br from-caffio-brown-dark via-caffio-brown to-caffio-brown-light">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.08),transparent_60%)]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        <div className="relative z-10 mx-auto flex max-w-5xl items-center justify-between px-6 py-8 sm:py-12">
          <div>
            <div className="mb-1 flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/10 backdrop-blur-sm">
                <svg className="h-5 w-5 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 8h1a4 4 0 110 8h-1" />
                  <path d="M3 8h14v9a4 4 0 01-4 4H7a4 4 0 01-4-4V8z" />
                  <line x1="6" y1="2" x2="6" y2="4" />
                  <line x1="10" y1="2" x2="10" y2="4" />
                  <line x1="14" y1="2" x2="14" y2="4" />
                </svg>
              </div>
              <h1 className="text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
                Caffio Admin
              </h1>
            </div>
            <p className="mt-1 text-sm text-white/60">
              Resultats du questionnaire utilisateur
            </p>
          </div>
          <button
            onClick={handleLogout}
            className="rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:bg-white/10 hover:text-white"
          >
            Deconnexion
          </button>
        </div>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-8 sm:py-10">
        {/* Metric pills */}
        <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <MetricPill label="Reponses" value={total} />
          <MetricPill label="Top frequence" value={frequencyStats[0]?.[0] ?? "-"} />
          <MetricPill label="Expertise dominante" value={expertiseStats[0]?.[0] ?? "-"} />
          <MetricPill label="Feature #1" value={featureStats[0]?.[0] ?? "-"} />
        </div>

        {total === 0 ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-caffio-border bg-caffio-card py-20">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-caffio-surface">
              <svg className="h-8 w-8 text-caffio-text-muted" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 15a2 2 0 01-2 2H7l-4 4V5a2 2 0 012-2h14a2 2 0 012 2z" />
              </svg>
            </div>
            <p className="text-lg font-semibold text-caffio-text">
              Aucune reponse
            </p>
            <p className="mt-1 text-sm text-caffio-text-muted">
              Les resultats apparaitront ici au fur et a mesure
            </p>
          </div>
        ) : (
          <>
            {/* Stats grid */}
            <div className="mb-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <StatCard
                title="Frequence"
                icon={<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />}
                items={frequencyStats}
                total={total}
              />
              <StatCard
                title="Expertise"
                icon={<><path d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" /></>}
                items={expertiseStats}
                total={total}
              />
              <StatCard
                title="Features"
                icon={<path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />}
                items={featureStats}
                total={total}
              />
              <StatCard
                title="Priorite design"
                icon={<path d="M9.53 16.122a3 3 0 00-5.78 1.128 2.25 2.25 0 01-2.4 2.245 4.5 4.5 0 008.4-2.245c0-.399-.078-.78-.22-1.128zm0 0a15.998 15.998 0 003.388-1.62m-5.043-.025a15.994 15.994 0 011.622-3.395m3.42 3.42a15.995 15.995 0 004.764-4.648l3.876-5.814a1.151 1.151 0 00-1.597-1.597L14.146 6.32a15.996 15.996 0 00-4.649 4.763m3.42 3.42a6.776 6.776 0 00-3.42-3.42" />}
                items={designStats}
                total={total}
              />
              <StatCard
                title="Dark mode"
                icon={<path d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75 0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75 21a9.753 9.753 0 009.002-5.998z" />}
                items={darkModeStats}
                total={total}
              />
            </div>

            {/* Responses */}
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-lg font-bold text-caffio-text">
                Reponses individuelles
              </h2>
              <span className="rounded-full bg-caffio-surface px-3 py-1 text-xs font-semibold text-caffio-text-muted">
                {total} au total
              </span>
            </div>

            <div className="space-y-3">
              {sorted.map((r, i) => (
                <ResponseCard key={r.id} response={r} index={i} />
              ))}
            </div>
          </>
        )}
      </main>

      <footer className="border-t border-caffio-border py-6 text-center text-xs text-caffio-text-muted/50">
        Caffio · Dashboard interne
      </footer>
    </div>
  );
}

/* ─── Sub-components ────────────────────────────────────────────── */

function MetricPill({ label, value }: { label: string; value: string | number }) {
  return (
    <div className="group rounded-2xl border border-caffio-border bg-caffio-card p-4 transition-all hover:border-caffio-warm/30 hover:shadow-md hover:shadow-caffio-warm/5">
      <p className="text-xs font-semibold uppercase tracking-wider text-caffio-text-muted">
        {label}
      </p>
      <p className="mt-1 truncate text-lg font-bold text-caffio-text">
        {value}
      </p>
    </div>
  );
}

function StatCard({
  title,
  icon,
  items,
  total,
}: {
  title: string;
  icon: React.ReactNode;
  items: [string, number][];
  total: number;
}) {
  const top5 = items.slice(0, 5);

  return (
    <div className="group rounded-2xl border border-caffio-border bg-caffio-card p-5 transition-all hover:border-caffio-green/20 hover:shadow-lg hover:shadow-caffio-green/5">
      <div className="mb-4 flex items-center gap-3">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-caffio-green/10 text-caffio-green transition-colors group-hover:bg-caffio-green/15">
          <svg className="h-4.5 w-4.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} strokeLinecap="round" strokeLinejoin="round">
            {icon}
          </svg>
        </div>
        <h3 className="text-sm font-bold text-caffio-text">
          {title}
        </h3>
      </div>
      <div className="space-y-3">
        {top5.map(([label, count]) => {
          const pct = Math.round((count / total) * 100);
          return (
            <div key={label}>
              <div className="mb-1 flex items-baseline justify-between gap-2">
                <span className="truncate text-sm text-caffio-text">{label}</span>
                <span className="shrink-0 text-xs font-semibold tabular-nums text-caffio-text-muted">
                  {pct}%
                </span>
              </div>
              <div className="h-1.5 overflow-hidden rounded-full bg-caffio-surface">
                <div
                  className="h-full rounded-full bg-gradient-to-r from-caffio-green to-caffio-green/70 transition-all duration-500"
                  style={{ width: `${pct}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function ResponseCard({ response: r, index }: { response: SurveyResponse; index: number }) {
  const date = new Date(r.timestamp).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "short",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });

  const featureLabels = r.features.map((f) => FEATURE_LABELS[f] ?? f);

  return (
    <div
      className="group rounded-2xl border border-caffio-border bg-caffio-card p-5 transition-all hover:border-caffio-warm/25 hover:shadow-md hover:shadow-caffio-warm/5"
      style={{ animationDelay: `${index * 30}ms` }}
    >
      {/* Top row */}
      <div className="mb-4 flex flex-wrap items-center gap-2">
        <span className="mr-auto text-xs font-medium text-caffio-text-muted">{date}</span>
        <Badge variant="brown">{r.frequency}</Badge>
        <Badge variant="green">{r.expertise}</Badge>
        {r.designPriority && <Badge variant="warm">{r.designPriority}</Badge>}
      </div>

      {/* Content grid */}
      <div className="grid gap-3 sm:grid-cols-2">
        {r.coffeeTypes.length > 0 && (
          <Field label="Types de cafe">
            <div className="flex flex-wrap gap-1.5">
              {r.coffeeTypes.map((t) => (
                <span key={t} className="rounded-md bg-caffio-surface px-2 py-0.5 text-xs text-caffio-text">
                  {t}
                </span>
              ))}
            </div>
          </Field>
        )}
        {r.equipment.length > 0 && (
          <Field label="Equipement">
            <div className="flex flex-wrap gap-1.5">
              {r.equipment.map((e) => (
                <span key={e} className="rounded-md bg-caffio-surface px-2 py-0.5 text-xs text-caffio-text">
                  {e}
                </span>
              ))}
            </div>
          </Field>
        )}
        {featureLabels.length > 0 && (
          <Field label="Features souhaitees">
            <div className="flex flex-wrap gap-1.5">
              {featureLabels.map((f) => (
                <span key={f} className="rounded-md bg-caffio-green/10 px-2 py-0.5 text-xs font-medium text-caffio-green">
                  {f}
                </span>
              ))}
            </div>
          </Field>
        )}
        {r.darkMode && (
          <Field label="Dark mode">
            <span className="text-sm text-caffio-text">{r.darkMode}</span>
          </Field>
        )}
      </div>

      {/* Text fields */}
      {(r.mostImportantFeature || r.featureSuggestion || r.otherApps || r.comments) && (
        <div className="mt-4 space-y-3 border-t border-caffio-border pt-4">
          {r.mostImportantFeature && (
            <TextBlock label="Feature prioritaire" value={r.mostImportantFeature} />
          )}
          {r.featureSuggestion && (
            <TextBlock label="Suggestion de feature" value={r.featureSuggestion} />
          )}
          {r.otherApps && (
            <TextBlock label="Autres apps utilisees" value={r.otherApps} />
          )}
          {r.comments && (
            <TextBlock label="Commentaires" value={r.comments} />
          )}
        </div>
      )}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <p className="mb-1.5 text-xs font-semibold uppercase tracking-wider text-caffio-text-muted">
        {label}
      </p>
      {children}
    </div>
  );
}

function TextBlock({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-xl bg-caffio-surface/60 p-3.5">
      <p className="mb-1 text-xs font-semibold uppercase tracking-wider text-caffio-text-muted">
        {label}
      </p>
      <p className="text-sm leading-relaxed text-caffio-text">{value}</p>
    </div>
  );
}

function Badge({ children, variant }: { children: React.ReactNode; variant: "brown" | "green" | "warm" }) {
  const styles = {
    brown: "bg-caffio-brown-dark/10 text-caffio-brown-dark",
    green: "bg-caffio-green/10 text-caffio-green",
    warm: "bg-caffio-warm/10 text-caffio-warm",
  };
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs font-semibold ${styles[variant]}`}>
      {children}
    </span>
  );
}
