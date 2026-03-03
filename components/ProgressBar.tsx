interface ProgressBarProps {
  currentStep: number;
  totalSteps: number;
  labels: string[];
}

export default function ProgressBar({
  currentStep,
  totalSteps,
  labels,
}: ProgressBarProps) {
  return (
    <div className="mb-8">
      {/* Step indicators */}
      <div className="mb-4 flex items-center">
        {labels.map((label, i) => (
          <div key={label} className="contents">
            {/* Step */}
            <div className="flex items-center gap-2">
              <div
                className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-xs font-bold transition-all duration-300 ${
                  i < currentStep
                    ? "bg-caffio-green text-white"
                    : i === currentStep
                      ? "bg-caffio-green/15 text-caffio-green ring-2 ring-caffio-green/30"
                      : "bg-caffio-surface text-caffio-text-muted"
                }`}
              >
                {i < currentStep ? (
                  <svg className="h-3.5 w-3.5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                ) : (
                  i + 1
                )}
              </div>
              <span
                className={`hidden text-xs font-medium sm:block transition-colors ${
                  i <= currentStep ? "text-caffio-text" : "text-caffio-text-muted/60"
                }`}
              >
                {label}
              </span>
            </div>

            {/* Line between steps */}
            {i < totalSteps - 1 && (
              <div className="mx-3 hidden h-px flex-1 sm:block">
                <div
                  className={`h-full transition-colors duration-300 ${
                    i < currentStep ? "bg-caffio-green" : "bg-caffio-border"
                  }`}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Bar */}
      <div className="h-1 w-full overflow-hidden rounded-full bg-caffio-border/50">
        <div
          className="h-full rounded-full bg-gradient-to-r from-caffio-green to-caffio-green-light transition-all duration-500 ease-out"
          style={{ width: `${((currentStep + 1) / totalSteps) * 100}%` }}
        />
      </div>
    </div>
  );
}
