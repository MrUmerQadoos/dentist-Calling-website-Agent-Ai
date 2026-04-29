/* ============================================= */
/* ===== NO NEXT APPOINTMENTS ================= */
/* ============================================= */
import { CalendarIcon } from "lucide-react";
import Link from "next/link";

function NoNextAppointments() {
  return (
    <div className="relative h-full animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      {/* Subtle cyan border glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-1px",
          borderRadius: "24px",
          background:
            "linear-gradient(135deg, rgba(0,210,255,0.2), rgba(0,210,255,0.04), rgba(0,210,255,0.2))",
          filter: "blur(0.5px)",
          opacity: 0.4,
        }}
      />
      <div
        className="relative z-10 h-full rounded-[24px] p-6 flex flex-col items-center justify-center text-center"
        style={{
          background: "rgba(13,20,36,0.65)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Icon */}
        <div
          className="w-16 h-16 rounded-2xl flex items-center justify-center mb-5"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,210,255,0.12), rgba(0,210,255,0.04))",
            border: "1px solid rgba(0,210,255,0.15)",
          }}
        >
          <CalendarIcon className="w-7 h-7 text-[#00D2FF]" strokeWidth={1.5} />
        </div>

        <p
          className="font-semibold text-white mb-2"
          style={{ fontSize: "15px" }}
        >
          No upcoming appointments
        </p>
        <p
          className="font-medium mb-6"
          style={{ fontSize: "13px", color: "#6B6B80", lineHeight: "1.6" }}
        >
          Schedule your next dental visit and stay on top of your oral health.
        </p>

        <Link
          href="/appointments"
          className="w-full"
        >
          <button
            className="w-full py-[10px] rounded-[12px] font-semibold text-white text-[13px] transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
            style={{
              background:
                "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
              boxShadow:
                "0 6px 20px rgba(79,172,254,0.25), 0 2px 8px rgba(124,58,237,0.15)",
            }}
          >
            Schedule Your Next Visit
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NoNextAppointments;