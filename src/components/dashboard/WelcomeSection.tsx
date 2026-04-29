/* ============================================= */
/* ===== WELCOME SECTION ====================== */
/* ============================================= */
import { currentUser } from "@clerk/nextjs/server";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import { ToothLogoIcon } from "../ui/ToothLogoIcon";

export default async function WelcomeSection() {
  const user = await currentUser();

  const hour = new Date().getHours();
  const greeting = hour < 12 ? "morning" : hour < 18 ? "afternoon" : "evening";

  const timeHints: Record<string, { label: string; color: string; bg: string; border: string }> = {
    morning: {
      label: "Morning",
      color: "#FBBF24",
      bg: "rgba(251,191,36,0.06)",
      border: "rgba(251,191,36,0.2)",
    },
    afternoon: {
      label: "Afternoon",
      color: "#00D2FF",
      bg: "rgba(0,210,255,0.06)",
      border: "rgba(0,210,255,0.2)",
    },
    evening: {
      label: "Evening",
      color: "#A78BFA",
      bg: "rgba(167,139,250,0.06)",
      border: "rgba(167,139,250,0.2)",
    },
  };

  const time = timeHints[greeting];

  return (
    <div className="relative z-10 mb-12 animate-fade-in-up">
      <div
        className="relative rounded-[28px] p-8 sm:p-10 overflow-hidden"
        style={{
          background: "rgba(13,20,36,0.6)",
          border: "1px solid rgba(255,255,255,0.07)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          boxShadow:
            "0 0 80px rgba(0,210,255,0.04), 0 40px 80px rgba(0,0,0,0.35)",
        }}
      >
        {/* Ambient glow — top left cyan */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-30%",
            left: "-15%",
            width: "50%",
            height: "80%",
            background: "rgba(0,210,255,0.04)",
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        />
        {/* Ambient glow — bottom right purple */}
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-30%",
            right: "-10%",
            width: "45%",
            height: "70%",
            background: "rgba(168,85,247,0.04)",
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        />

        <div className="relative z-10 flex items-center justify-between gap-8">
          {/* Left content */}
          <div className="flex-1 space-y-5">
            {/* Time badge + status */}
            <div className="flex items-center gap-3 flex-wrap">
              <div
                className="inline-flex items-center gap-2 px-3.5 py-[7px] rounded-full"
                style={{
                  background: time.bg,
                  border: `1px solid ${time.border}`,
                }}
              >
                <span
                  className="w-[6px] h-[6px] rounded-full"
                  style={{
                    background: time.color,
                    boxShadow: `0 0 8px ${time.color}40`,
                  }}
                />
                <span
                  className="font-bold uppercase tracking-[0.1em]"
                  style={{ fontSize: "10.5px", color: time.color }}
                >
                  {time.label}
                </span>
              </div>

              <div
                className="inline-flex items-center gap-2 px-3.5 py-[7px] rounded-full"
                style={{
                  background: "rgba(0,255,102,0.04)",
                  border: "1px solid rgba(0,255,102,0.18)",
                }}
              >
                <span className="relative flex h-[6px] w-[6px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-50" />
                  <span
                    className="relative inline-flex rounded-full h-[6px] w-[6px] bg-[#00FF66]"
                    style={{ boxShadow: "0 0 6px #00FF66" }}
                  />
                </span>
                <span
                  className="font-bold uppercase tracking-[0.1em]"
                  style={{ fontSize: "10.5px", color: "#00FF66" }}
                >
                  AI Online
                </span>
              </div>
            </div>

            {/* Greeting */}
            <div>
              <h1
                className="font-extrabold tracking-tight"
                style={{
                  fontSize: "clamp(26px, 3.2vw, 40px)",
                  lineHeight: "1.1",
                }}
              >
                <span className="text-white">Good {greeting}, </span>
                <span
                  style={{
                    background: "linear-gradient(135deg, #00D2FF 0%, #A78BFA 50%, #D946EF 100%)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  {user?.firstName}
                </span>
              </h1>
              <p
                className="font-medium mt-2.5 max-w-[460px]"
                style={{ fontSize: "14.5px", lineHeight: "1.7", color: "#9CA0B5" }}
              >
                Your AI dental assistant is ready. Get personalized guidance,
                book appointments, and track your oral health — all in one place.
              </p>
            </div>

            {/* Quick actions */}
            <div className="flex items-center gap-3 pt-1">
              <Link href="/voice">
                <button
                  className="inline-flex items-center gap-2 px-4.5 py-[9px] rounded-[11px] font-semibold text-white text-[12.5px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                  style={{
                    background:
                      "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
                    boxShadow:
                      "0 4px 16px rgba(79,172,254,0.2), 0 2px 6px rgba(124,58,237,0.12)",
                  }}
                >
                  <ToothLogoIcon className="w-3.5 h-3.5" color="#fff" />
                  Ask AI
                  <ArrowRightIcon className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
              </Link>
              <Link href="/appointments">
                <button
                  className="inline-flex items-center gap-2 px-4.5 py-[9px] rounded-[11px] font-semibold text-white text-[12.5px] transition-all duration-300 hover:scale-[1.03] hover:bg-white/[0.06]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.1)",
                  }}
                >
                  Book Visit
                  <ArrowRightIcon className="w-3.5 h-3.5" strokeWidth={2} />
                </button>
              </Link>
            </div>
          </div>

          {/* Right: Tooth orb */}
          <div className="hidden lg:flex items-center justify-center shrink-0">
            <div className="relative">
              {/* Outer glow ring */}
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-28px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(0,210,255,0.12) 0%, rgba(168,85,247,0.06) 40%, transparent 70%)",
                  filter: "blur(24px)",
                }}
              />
              {/* Spinning ring — uses Tailwind animate-spin with slow duration */}
              <div
                className="absolute inset-[-6px] rounded-full pointer-events-none animate-spin"
                style={{
                  border: "1.5px solid transparent",
                  borderTopColor: "rgba(0,210,255,0.3)",
                  borderRightColor: "rgba(168,85,247,0.15)",
                  animationDuration: "8s",
                }}
              />
              {/* Main orb */}
              <div
                className="relative w-[110px] h-[110px] rounded-full flex items-center justify-center animate-hero-float"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,210,255,0.12) 0%, rgba(168,85,247,0.08) 50%, rgba(217,70,239,0.06) 100%)",
                  border: "1px solid rgba(0,210,255,0.18)",
                  boxShadow:
                    "0 0 40px rgba(0,210,255,0.08), inset 0 0 30px rgba(0,210,255,0.04)",
                }}
              >
                <ToothLogoIcon className="w-12 h-12" color="#00D2FF" />
              </div>
              {/* Floating dots — uses Tailwind animate-bounce with custom durations */}
              <div
                className="absolute w-2 h-2 rounded-full animate-bounce"
                style={{
                  top: "8px",
                  right: "-4px",
                  background: "#D946EF",
                  boxShadow: "0 0 8px rgba(217,70,239,0.5)",
                  animationDuration: "3s",
                }}
              />
              <div
                className="absolute w-1.5 h-1.5 rounded-full animate-bounce"
                style={{
                  bottom: "12px",
                  left: "-2px",
                  background: "#00D2FF",
                  boxShadow: "0 0 6px rgba(0,210,255,0.5)",
                  animationDuration: "3s",
                  animationDelay: "1.5s",
                }}
              />
              <div
                className="absolute w-1 h-1 rounded-full animate-bounce"
                style={{
                  top: "-2px",
                  left: "30px",
                  background: "#A78BFA",
                  boxShadow: "0 0 6px rgba(167,139,250,0.4)",
                  animationDuration: "2.5s",
                  animationDelay: "0.8s",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}