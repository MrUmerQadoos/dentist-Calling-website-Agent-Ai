/* ============================================= */
/* ===== PROGRESS STEPS ======================= */
/* ============================================= */
import { ChevronRightIcon, StethoscopeIcon, ClockIcon, CheckCircleIcon } from "lucide-react";

const PROGRESS_STEPS = [
  { name: "Select Dentist", icon: StethoscopeIcon },
  { name: "Choose Time", icon: ClockIcon },
  { name: "Confirm", icon: CheckCircleIcon },
];

function ProgressSteps({ currentStep }: { currentStep: number }) {
  return (
    <div className="mb-10 animate-fade-in-up">
      {/* Progress bar background */}
      <div className="relative mb-6">
        <div
          className="h-[2px] w-full rounded-full"
          style={{ background: "rgba(255,255,255,0.06)" }}
        />
        <div
          className="absolute top-0 left-0 h-[2px] rounded-full transition-all duration-700 ease-out"
          style={{
            width: `${((currentStep - 1) / (PROGRESS_STEPS.length - 1)) * 100}%`,
            background: "linear-gradient(to right, #00D2FF, #7C3AED, #D946EF)",
            boxShadow: "0 0 12px rgba(0,210,255,0.3)",
          }}
        />
      </div>

      {/* Step indicators */}
      <div className="flex items-center justify-between">
        {PROGRESS_STEPS.map((step, index) => {
          const stepNumber = index + 1;
          const isActive = currentStep >= stepNumber;
          const isCurrent = currentStep === stepNumber;
          const Icon = step.icon;

          return (
            <div key={stepNumber} className="flex items-center gap-2.5">
              <div className="relative">
                {/* Glow ring for current step */}
                {isCurrent && (
                  <div
                    className="absolute pointer-events-none animate-pulse"
                    style={{
                      inset: "-6px",
                      borderRadius: "50%",
                      background:
                        "radial-gradient(circle, rgba(0,210,255,0.2) 0%, transparent 70%)",
                    }}
                  />
                )}
                <div
                  className="relative w-10 h-10 rounded-full flex items-center justify-center transition-all duration-500"
                  style={
                    isActive
                      ? {
                          background:
                            "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
                          color: "#fff",
                          boxShadow:
                            "0 4px 20px rgba(79,172,254,0.3), 0 2px 8px rgba(124,58,237,0.2)",
                        }
                      : {
                          background: "rgba(255,255,255,0.04)",
                          border: "1px solid rgba(255,255,255,0.08)",
                          color: "#52525B",
                        }
                  }
                >
                  {isActive ? (
                    <Icon className="w-4 h-4" strokeWidth={1.8} />
                  ) : (
                    <span className="text-xs font-bold">{stepNumber}</span>
                  )}
                </div>
              </div>

              <div className="flex flex-col">
                <span
                  className="font-semibold transition-colors duration-300"
                  style={{
                    fontSize: "13px",
                    color: isActive ? "#fff" : "#52525B",
                  }}
                >
                  {step.name}
                </span>
                {isCurrent && (
                  <span
                    className="font-bold uppercase tracking-wider animate-pulse"
                    style={{ fontSize: "9px", color: "#00D2FF" }}
                  >
                    Current
                  </span>
                )}
              </div>

              {stepNumber < PROGRESS_STEPS.length && (
                <ChevronRightIcon
                  className="w-4 h-4 mx-2"
                  style={{
                    color: isActive ? "rgba(0,210,255,0.4)" : "#52525B",
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProgressSteps;