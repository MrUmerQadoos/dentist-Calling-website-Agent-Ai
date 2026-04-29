
"use client";

import { Mic, DollarSign, Clock, CheckCircle2, Calendar, Circle } from "lucide-react";

/* ============================================= */
/* ===== NEON GLOW CARD ======================== */
/* ============================================= */
function NeonCard({
  children,
  glowColor = "rgba(0,210,255,0.3)",
  glowColorSecondary = "rgba(0,210,255,0.15)",
  className = "",
}: {
  children: React.ReactNode;
  glowColor?: string;
  glowColorSecondary?: string;
  className?: string;
}) {
  return (
    <div className={`relative group h-full ${className}`}>
      {/* Tight neon border glow */}
      <div
        className="absolute pointer-events-none transition-opacity duration-500 opacity-40 group-hover:opacity-70"
        style={{
          inset: "-1px",
          borderRadius: "24px",
          background: `linear-gradient(135deg, ${glowColor}, ${glowColorSecondary}, ${glowColor})`,
          filter: "blur(1px)",
        }}
      />
      {/* Wide soft bleed glow */}
      <div
        className="absolute pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-30"
        style={{
          inset: "-8px",
          borderRadius: "32px",
          background: `radial-gradient(ellipse at center, ${glowColor}, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
      {/* Card body */}
      <div
        className="relative z-10 h-full rounded-[24px] p-[28px] flex flex-col transition-transform duration-500 group-hover:-translate-y-2"
        style={{
          background:
            "linear-gradient(135deg, rgba(13,20,36,0.85) 0%, rgba(10,14,28,0.9) 100%)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderTop: "1px solid rgba(255,255,255,0.15)",
          borderLeft: "1px solid rgba(255,255,255,0.08)",
          borderBottom: "1px solid rgba(0,0,0,0.7)",
          borderRight: "1px solid rgba(0,0,0,0.5)",
          boxShadow:
            "0 25px 50px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.06), inset 0 0 0 1px rgba(255,255,255,0.02)",
        }}
      >
        {children}
      </div>
    </div>
  );
}

/* ============================================= */
/* ===== ICON BOX ============================== */
/* ============================================= */
function IconBox({
  children,
  glow,
  border,
}: {
  children: React.ReactNode;
  glow: string;
  border: string;
}) {
  return (
    <div
      className="w-[48px] h-[48px] rounded-[14px] flex items-center justify-center shrink-0 relative overflow-hidden"
      style={{
        background: `linear-gradient(180deg, ${glow} 0%, transparent 100%)`,
        border: `1px solid ${border}`,
        boxShadow: `inset 0 0 16px ${glow}, 0 4px 12px rgba(0,0,0,0.3)`,
      }}
    >
      {/* Top highlight */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      {children}
    </div>
  );
}

/* ============================================= */
/* ===== PILL BADGE ============================ */
/* ============================================= */
function PillBadge({
  icon,
  text,
  variant = "neutral",
}: {
  icon?: React.ReactNode;
  text: string;
  variant?: "neutral" | "cyan" | "purple";
}) {
  const styles = {
    neutral: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      color: "#CBD5E1",
    },
    cyan: {
      background: "rgba(0,210,255,0.08)",
      border: "1px solid rgba(0,210,255,0.22)",
      color: "#00D2FF",
    },
    purple: {
      background: "rgba(217,70,239,0.08)",
      border: "1px solid rgba(217,70,239,0.22)",
      color: "#D946EF",
    },
  };

  const s = styles[variant];

  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-[7px] rounded-xl"
      style={{
        background: s.background,
        border: s.border,
      }}
    >
      {icon && <span style={{ color: s.color }}>{icon}</span>}
      <span
        className="text-[12px] font-semibold tracking-wide"
        style={{ color: s.color }}
      >
        {text}
      </span>
    </div>
  );
}

/* ============================================= */
/* ===== SMALL TAG PILL ======================== */
/* ============================================= */
function TagPill({
  text,
  variant = "cyan",
}: {
  text: string;
  variant?: "cyan" | "purple";
}) {
  const styles = {
    cyan: {
      background: "rgba(0,210,255,0.08)",
      border: "1px solid rgba(0,210,255,0.2)",
      color: "#67E8F9",
    },
    purple: {
      background: "rgba(217,70,239,0.08)",
      border: "1px solid rgba(217,70,239,0.2)",
      color: "#E879F9",
    },
  };
  const s = styles[variant];
  return (
    <span
      className="px-3 py-[6px] rounded-lg text-[11.5px] font-semibold tracking-wide"
      style={{
        background: s.background,
        border: s.border,
        color: s.color,
      }}
    >
      {text}
    </span>
  );
}

/* ============================================= */
/* ===== MAIN SECTION ========================== */
/* ============================================= */
export default function HowItWorks() {
  return (
    <section className="relative w-full py-20 px-4 sm:px-6">
      <div className="max-w-[1440px] mx-auto">
        {/* Main Glassmorphism Container */}
        <div
          className="relative w-full rounded-3xl overflow-hidden"
          style={{
            background: "rgba(13,20,36,0.6)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow:
              "0 0 50px rgba(0,100,255,0.05), 0 40px 80px rgba(0,0,0,0.4)",
          }}
        >
          {/* Background Glows inside container */}
          <div
            className="absolute top-0 left-0 pointer-events-none"
            style={{
              width: "500px",
              height: "500px",
              background: "rgba(0,100,255,0.06)",
              borderRadius: "50%",
              filter: "blur(120px)",
              transform: "translate(-40%, -40%)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 pointer-events-none"
            style={{
              width: "500px",
              height: "500px",
              background: "rgba(168,85,247,0.06)",
              borderRadius: "50%",
              filter: "blur(120px)",
              transform: "translate(40%, 40%)",
            }}
          />

          <div className="relative z-10 p-8 md:p-12">
            {/* Top Right Floating Pill */}
           
            {/* Section Header */}
            <div
              className="max-w-2xl mb-12 animate-fade-in-up"
              style={{ animationDelay: "0.05s" }}
            >
              <h2 className="text-[30px] md:text-[38px] font-extrabold text-white tracking-tight leading-tight mb-2">
                DentWise AI Simple Process
              </h2>
              <h3 className="text-[20px] md:text-[24px] font-semibold text-[#CBD5E1] tracking-tight mb-4">
                Three steps to better health
              </h3>
              <p className="text-[14px] md:text-[15px] text-[#6B6B80] font-medium leading-relaxed max-w-xl">
                From simple questions to your AI doctor, we provide instant, reliable dental health
                results.
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* ===== CARD 1 ===== */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.15s" }}
              >
                <NeonCard
                  glowColor="rgba(0,210,255,0.4)"
                  glowColorSecondary="rgba(0,150,255,0.2)"
                >
                  <div className="flex flex-col h-full space-y-5">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4">
                      <IconBox
                        glow="rgba(0,210,255,0.15)"
                        border="rgba(0,210,255,0.3)"
                      >
                        <span className="text-[#00D2FF] text-xl font-bold">
                          1
                        </span>
                      </IconBox>
                      <h3 className="text-white font-bold text-[17px] leading-snug tracking-wide pt-1">
                        Voice Chat Ask
                        <br />
                        Questions
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#6B6B80] text-[13px] leading-relaxed font-medium flex-grow">
                      Receive immediate smart advice from our AI regarding your
                      dental issues, available 24/7. No matter what concerns you
                      have, get instant clarification.
                    </p>

                    {/* Pills */}
                    <div className="space-y-3 mt-auto">
                      <PillBadge
                        icon={<Calendar className="w-3.5 h-3.5" />}
                        text="AI Powered Realtime Response"
                        variant="neutral"
                      />
                      <div className="flex flex-wrap gap-2">
                        <TagPill text="Instant Analysis" variant="cyan" />
                        <TagPill text="Symptom Check" variant="cyan" />
                      </div>
                    </div>
                  </div>
                </NeonCard>
              </div>

              {/* ===== CARD 2 ===== */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.28s" }}
              >
                <NeonCard
                  glowColor="rgba(0,210,255,0.4)"
                  glowColorSecondary="rgba(0,150,255,0.2)"
                >
                  <div className="flex flex-col h-full space-y-5">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4">
                      <IconBox
                        glow="rgba(0,210,255,0.15)"
                        border="rgba(0,210,255,0.3)"
                      >
                        <DollarSign
                          className="w-5 h-5 text-[#00D2FF]"
                          strokeWidth={2.5}
                        />
                      </IconBox>
                      <h3 className="text-white font-bold text-[17px] leading-snug tracking-wide pt-1">
                        How much does teeth
                        <br />
                        whitening cost?
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#6B6B80] text-[13px] leading-relaxed font-medium flex-grow">
                      Receive fast, transparent, and accurate cost estimates for
                      dental procedures based on your specific needs and
                      location.
                    </p>

                    {/* Pills */}
                    <div className="space-y-3 mt-auto">
                      <PillBadge
                        icon={<CheckCircle2 className="w-3.5 h-3.5" />}
                        text="AI Powered Expert Advice"
                        variant="neutral"
                      />
                      <div className="flex flex-wrap gap-2">
                        <TagPill text="Cost Estimation" variant="cyan" />
                        <TagPill text="Treatment Options" variant="cyan" />
                      </div>
                    </div>
                  </div>
                </NeonCard>
              </div>

              {/* ===== CARD 3 ===== */}
              <div
                className="animate-fade-in-up"
                style={{ animationDelay: "0.42s" }}
              >
                <NeonCard
                  glowColor="rgba(217,70,239,0.4)"
                  glowColorSecondary="rgba(168,85,247,0.2)"
                >
                  <div className="flex flex-col h-full space-y-5">
                    {/* Icon + Title */}
                    <div className="flex items-start gap-4">
                      <IconBox
                        glow="rgba(217,70,239,0.15)"
                        border="rgba(217,70,239,0.3)"
                      >
                        <Clock
                          className="w-5 h-5 text-[#D946EF]"
                          strokeWidth={2}
                        />
                      </IconBox>
                      <h3 className="text-white font-bold text-[17px] leading-snug tracking-wide pt-1">
                        How much time to
                        <br />
                        replace lost teeth?
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-[#6B6B80] text-[13px] leading-relaxed font-medium flex-grow">
                      Receive estimated timelines for treatments like implants,
                      bridges, or dentures. Understand the recovery process
                      step-by-step.
                    </p>

                    {/* Pills */}
                    <div className="space-y-3 mt-auto">
                      <PillBadge
                        icon={<CheckCircle2 className="w-3.5 h-3.5" />}
                        text="AI Powered Preventive Care"
                        variant="purple"
                      />
                      <div className="flex flex-wrap gap-2">
                        <TagPill text="Preventive Care" variant="purple" />
                        <TagPill text="Maintenance" variant="purple" />
                      </div>
                    </div>
                  </div>
                </NeonCard>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
