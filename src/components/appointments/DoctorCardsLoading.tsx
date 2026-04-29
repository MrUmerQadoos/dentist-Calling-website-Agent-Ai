/* ============================================= */
/* ===== DOCTOR CARDS LOADING ================= */
/* ============================================= */

function DoctorCardSkeleton() {
  return (
    <div
      className="rounded-[20px] overflow-hidden relative"
      style={{
        background: "rgba(13,20,36,0.5)",
        border: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Shimmer overlay */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, transparent 0%, rgba(0,210,255,0.03) 50%, transparent 100%)",
          animation: "shimmer 2s ease-in-out infinite",
        }}
      />

      {/* Header */}
      <div className="p-5 pb-4 relative">
        <div className="flex items-start gap-4">
          <div
            className="w-14 h-14 rounded-full animate-pulse"
            style={{
              background:
                "linear-gradient(135deg, rgba(0,210,255,0.08), rgba(168,85,247,0.06))",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          />
          <div className="flex-1 space-y-2.5">
            <div
              className="h-4 w-28 rounded-md animate-pulse"
              style={{ background: "rgba(255,255,255,0.06)" }}
            />
            <div
              className="h-3 w-20 rounded-md animate-pulse"
              style={{ background: "rgba(0,210,255,0.06)" }}
            />
            <div className="flex items-center gap-2 mt-1.5">
              <div
                className="h-3 w-10 rounded animate-pulse"
                style={{ background: "rgba(255,255,255,0.04)" }}
              />
              <div
                className="h-3 w-16 rounded animate-pulse"
                style={{ background: "rgba(255,255,255,0.04)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-5 pb-5 space-y-2.5 relative">
        <div className="flex items-center gap-2">
          <div
            className="w-3.5 h-3.5 rounded animate-pulse"
            style={{ background: "rgba(255,255,255,0.04)" }}
          />
          <div
            className="h-3 w-20 rounded animate-pulse"
            style={{ background: "rgba(255,255,255,0.04)" }}
          />
        </div>
        <div className="flex items-center gap-2">
          <div
            className="w-3.5 h-3.5 rounded animate-pulse"
            style={{ background: "rgba(255,255,255,0.04)" }}
          />
          <div
            className="h-3 w-28 rounded animate-pulse"
            style={{ background: "rgba(255,255,255,0.04)" }}
          />
        </div>
        <div
          className="h-10 w-full rounded-lg animate-pulse mt-1"
          style={{ background: "rgba(255,255,255,0.03)" }}
        />
        <div
          className="h-5 w-24 rounded-md animate-pulse"
          style={{
            background: "rgba(0,255,102,0.06)",
            border: "1px solid rgba(0,255,102,0.1)",
          }}
        />
      </div>

      <style>{`
        @keyframes shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}

export function DoctorCardsLoading() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      {Array.from({ length: 6 }).map((_, i) => (
        <div key={i} className="animate-fade-in-up" style={{ animationDelay: `${i * 0.06}s` }}>
          <DoctorCardSkeleton />
        </div>
      ))}
    </div>
  );
}