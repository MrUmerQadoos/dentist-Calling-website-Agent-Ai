"use client";

import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import {
  CheckCircleIcon,
  SparklesIcon,
  ZapIcon,
  MicIcon,
  CalendarIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

/* ============================================= */
/* ===== CHECK ITEM =========================== */
/* ============================================= */
function CheckItem({ text }: { text: string }) {
  return (
    <div className="flex items-start gap-3">
      <CheckCircleIcon
        className="shrink-0 mt-[1px]"
        style={{ width: "15px", height: "15px", color: "#10B981" }}
      />
      <span
        className="font-medium leading-snug"
        style={{ fontSize: "13px", color: "#9CA0B5" }}
      >
        {text}
      </span>
    </div>
  );
}

/* ============================================= */
/* ===== FREE PLAN CARD ======================= */
/* ============================================= */
function FreePlanCard() {
  return (
    <div className="relative h-full animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-1px",
          borderRadius: "20px",
          background:
            "linear-gradient(135deg, rgba(0,210,255,0.25), rgba(0,210,255,0.05), rgba(0,210,255,0.25))",
          filter: "blur(0.5px)",
          opacity: 0.5,
        }}
      />
      <div
        className="relative z-10 h-full rounded-[20px] p-6 flex flex-col"
        style={{
          background: "rgba(17,20,36,0.85)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderTop: "1px solid rgba(255,255,255,0.10)",
          borderLeft: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(0,0,0,0.5)",
          borderRight: "1px solid rgba(0,0,0,0.35)",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        <div className="mb-4">
          <h3
            className="font-bold text-white mb-2"
            style={{ fontSize: "18px" }}
          >
            Free
          </h3>
          <div className="flex items-end gap-1 mb-1">
            <span
              className="font-bold text-white"
              style={{ fontSize: "36px", lineHeight: 1 }}
            >
              $0
            </span>
            <span
              className="font-medium mb-1"
              style={{ fontSize: "14px", color: "#6B6B80" }}
            >
              /month
            </span>
          </div>
          <p style={{ fontSize: "12px", color: "#6B6B80" }}>
            Essential dental appointment booking
          </p>
        </div>

        <div
          className="my-4"
          style={{ height: "1px", background: "rgba(255,255,255,0.06)" }}
        />

        <div className="space-y-3 flex-1">
          <CheckItem text="Unlimited appointment booking" />
          <CheckItem text="Find dentists in your area" />
          <CheckItem text="Basic text chat support" />
          <CheckItem text="Appointment reminders" />
        </div>

        <div className="mt-6">
          <SignUpButton mode="modal">
            <button
              className="w-full py-[10px] rounded-[10px] font-semibold text-white text-[13px] transition-all duration-300 hover:opacity-80"
              style={{
                background: "rgba(255,255,255,0.06)",
                border: "1px solid rgba(255,255,255,0.10)",
              }}
            >
              Get Started Free
            </button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}

/* ============================================= */
/* ===== AI BASIC PLAN CARD ================== */
/* ============================================= */
function AIBasicCard() {
  return (
    <div
      className="relative h-full animate-fade-in-up"
      style={{ animationDelay: "0.28s" }}
    >
      <div
        className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 px-3 py-1 rounded-full text-white font-semibold"
        style={{
          fontSize: "11px",
          background: "linear-gradient(135deg, #4FACFE, #7C3AED, #A18CD1)",
          boxShadow: "0 4px 16px rgba(79,172,254,0.3)",
          whiteSpace: "nowrap",
        }}
      >
        Most Popular
      </div>

      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-1px",
          borderRadius: "20px",
          background:
            "linear-gradient(135deg, #4FACFE, #7C3AED, #D946EF)",
          filter: "blur(0.5px)",
          opacity: 0.75,
        }}
      />
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-6px",
          borderRadius: "26px",
          background:
            "linear-gradient(135deg, rgba(79,172,254,0.2), transparent 40%, transparent 60%, rgba(217,70,239,0.2))",
          filter: "blur(14px)",
          opacity: 0.5,
        }}
      />

      <div
        className="relative z-10 h-full rounded-[20px] p-6 flex flex-col"
        style={{
          background: "rgba(17,20,40,0.9)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          borderTop: "1px solid rgba(79,172,254,0.3)",
          borderLeft: "1px solid rgba(79,172,254,0.2)",
          borderBottom: "1px solid rgba(0,0,0,0.6)",
          borderRight: "1px solid rgba(217,70,239,0.15)",
          boxShadow:
            "0 25px 50px rgba(0,0,0,0.55), inset 0 1px 0 rgba(79,172,254,0.1)",
        }}
      >
        <div className="mb-4">
          <h3
            className="font-bold mb-2"
            style={{ fontSize: "18px", color: "#4FACFE" }}
          >
            AI Basic
          </h3>
          <div className="flex items-end gap-1 mb-1">
            <span
              className="font-bold"
              style={{
                fontSize: "36px",
                lineHeight: 1,
                background: "linear-gradient(to right, #4FACFE, #A18CD1)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              $9
            </span>
            <span
              className="font-medium mb-1"
              style={{ fontSize: "14px", color: "#6B6B80" }}
            >
              /month
            </span>
          </div>
          <p style={{ fontSize: "12px", color: "#6B6B80" }}>
            AI consultations + appointment booking
          </p>
        </div>

        <div
          className="my-4"
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, rgba(79,172,254,0.3), rgba(217,70,239,0.2), transparent)",
          }}
        />

        <div className="space-y-3 flex-1">
          <CheckItem text="Everything in Free" />
          <CheckItem text="10 AI voice calls per month" />
          <CheckItem text="AI dental guidance & advice" />
          <CheckItem text="Symptom assessment" />
          <CheckItem text="Priority support" />
          <CheckItem text="Call history & recordings" />
        </div>

        <div className="mt-6">
          <SignUpButton mode="modal">
            <button
              className="w-full py-[10px] rounded-[10px] font-bold text-white text-[13px] transition-all duration-300 hover:scale-[1.02] hover:opacity-90"
              style={{
                background:
                  "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
                boxShadow:
                  "0 6px 20px rgba(79,172,254,0.3), 0 2px 8px rgba(124,58,237,0.2)",
              }}
            >
              Start AI Basic
            </button>
          </SignUpButton>
        </div>
      </div>
    </div>
  );
}

/* ============================================= */
/* ===== MAIN SECTION ========================= */
/* ============================================= */
export default function PricingSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* ================================================ */}
      {/* LAYER 0: BACKGROUND — same as Hero               */}
      {/* ================================================ */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none">
        <Image
          src="/Background.png"
          alt=""
          fill
          className="object-cover object-center"
          priority
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[#070815]/50" />

        {/* Ambient glows */}
        <div
          className="absolute animate-glow-pulse"
          style={{
            top: "-12%",
            right: "-8%",
            width: "42vw",
            height: "42vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(139,92,246,0.12) 0%, transparent 65%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute animate-glow-pulse"
          style={{
            bottom: "5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "50vw",
            height: "50vw",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,210,255,0.09) 0%, transparent 60%)",
            filter: "blur(130px)",
            animationDelay: "2s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(7,8,21,0.35) 0%, transparent 15%, transparent 85%, rgba(7,8,21,0.85) 100%)",
          }}
        />
      </div>

      {/* ================================================ */}
      {/* GRID PATTERN                                     */}
      {/* ================================================ */}
      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.018) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.018) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
          maskImage:
            "radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at 50% 50%, black 30%, transparent 75%)",
        }}
      />

      {/* ================================================ */}
      {/* CONTENT                                          */}
      {/* ================================================ */}
      <div className="relative z-10 pointer-events-none">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14 py-10 pb-28">
          
          {/* ═══════════════════════════════════════ */}
          {/* MAIN 2-COLUMN LAYOUT                   */}
          {/* ═══════════════════════════════════════ */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-14 items-start">

            {/* ─────────────────────────────────── */}
            {/* LEFT: Header + Cards (lg:col-span-3)*/}
            {/* ─────────────────────────────────── */}
            <div className="lg:col-span-3 space-y-8 pointer-events-auto">
              
              <div
                className="mb-2 animate-fade-in-up"
                style={{ animationDelay: "0.05s" }}
              >
                <div
                  className="inline-flex items-center gap-2.5 px-4 py-[9px] rounded-full mb-5"
                  style={{
                    background: "rgba(0,210,255,0.05)",
                    border: "1px solid rgba(0,210,255,0.25)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <ZapIcon className="w-3.5 h-3.5 text-[#00D2FF]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#00D2FF]">
                    Simple Pricing
                  </span>
                </div>

                <h2
                  className="font-extrabold tracking-tight"
                  style={{ fontSize: "clamp(28px, 3.5vw, 48px)", lineHeight: "1.08" }}
                >
                  <span className="text-white block">Choose your</span>
                  <span
                    className="block"
                    style={{
                      background: "linear-gradient(to right, #00D2FF, #D946EF)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                      backgroundClip: "text",
                    }}
                  >
                    AI dental plan
                  </span>
                </h2>
              </div>

              <p
                className="font-medium max-w-[500px] mt-2"
                style={{ fontSize: "15px", lineHeight: "1.75", color: "#9CA0B5" }}
              >
                Book appointments for free and upgrade for unlimited AI
                consultations. Perfect for ongoing dental care.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 items-stretch">
                <FreePlanCard />
                <AIBasicCard />
              </div>

              <p
                className="text-center font-medium animate-fade-in-up"
                style={{
                  fontSize: "12px",
                  color: "#52525B",
                  animationDelay: "0.45s",
                }}
              >
                No credit card required · Cancel anytime ·{" "}
                <span style={{ color: "#9CA0B5" }}>
                  Need more?{" "}
                  <span style={{ color: "#00D2FF", cursor: "pointer" }}>
                    Contact us for AI Pro →
                  </span>
                </span>
              </p>
            </div>

            {/* ─────────────────────────────────── */}
            {/* RIGHT: Image + CTA (lg:col-span-2)   */}
            {/* ─────────────────────────────────── */}
            <div
              className="lg:col-span-2 flex flex-col items-center animate-fade-in-up pointer-events-auto"
              style={{ animationDelay: "0.3s" }}
            >
              <div className="relative w-full flex flex-col items-center justify-start">

                {/* Radial glow behind image */}
                <div
                  className="absolute pointer-events-none z-0"
                  style={{
                    top: "10%",
                    left: "50%",
                    transform: "translateX(-50%)",
                    width: "500px",
                    height: "500px",
                    background:
                      "radial-gradient(circle, rgba(0,210,255,0.12) 0%, rgba(217,70,239,0.06) 40%, transparent 70%)",
                    filter: "blur(70px)",
                  }}
                />

                {/* CHARACTER IMAGE */}
                <div className="absolute top-0 lg:top-[-20px] left-1/2 -translate-x-1/2 z-0 w-[320px] sm:w-[420px] lg:w-[500px] flex justify-center pointer-events-none">
                  <div className="animate-hero-float w-full">
                    <Image
                      src="/confused.png"
                      alt="AI Dental Assistant"
                      width={600}
                      height={800}
                      className="w-full h-auto object-contain"
                      style={{
                        filter:
                          "drop-shadow(0 30px 60px rgba(0,0,0,0.7)) drop-shadow(0 8px 20px rgba(0,210,255,0.1))",
                      }}
                      priority
                    />
                  </div>
                </div>

                {/* CTA TEXT & BUTTONS */}
                {/* Replaced bg-gradient-to-t with radial gradient — no boxy edges */}
                <div className="relative z-10 px-4 pt-32 pb-6 text-center w-full mt-[200px] sm:mt-[280px] lg:mt-[400px]">
                  {/* Radial gradient fade — circular glow, impossible to have straight edges */}
                  <div
                    className="absolute pointer-events-none"
                    style={{
                      bottom: "-15%",
                      left: "50%",
                      transform: "translateX(-50%)",
                      width: "160%",
                      height: "140%",
                      background:
                        "radial-gradient(ellipse at 50% 65%, rgba(7,8,21,0.7) 0%, rgba(7,8,21,0.45) 25%, rgba(7,8,21,0.18) 50%, transparent 72%)",
                      filter: "blur(24px)",
                    }}
                  />

                  <div className="relative z-10">
                    <h3
                      className="font-extrabold text-white mb-2"
                      style={{ fontSize: "clamp(20px, 2.2vw, 26px)", lineHeight: "1.2" }}
                    >
                      Ready When You Are
                    </h3>

                    <p
                      className="font-medium mx-auto mb-5"
                      style={{
                        fontSize: "13.5px",
                        lineHeight: "1.7",
                        color: "#9CA0B5",
                        maxWidth: "280px",
                      }}
                    >
                      Your dental health journey starts here. Join 1,220+ patients
                      who trust DentWise AI.
                    </p>

                    <div className="flex flex-wrap gap-2 justify-center mb-5">
                      <Badge variant="cyan" size="sm">Instant AI Answers</Badge>
                      <Badge variant="purple" size="sm">24/7 Support</Badge>
                      <Badge variant="cyan" size="sm">No Credit Card</Badge>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3 justify-center">
                      <SignUpButton mode="modal">
                        <button
                          className="inline-flex items-center justify-center gap-2 px-5 py-[11px] rounded-[12px] text-white font-semibold text-[13px] transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
                          style={{
                            background:
                              "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
                            boxShadow:
                              "0 6px 20px rgba(79,172,254,0.3), 0 2px 8px rgba(124,58,237,0.2)",
                          }}
                        >
                          <MicIcon className="w-4 h-4" />
                          Start free chat
                        </button>
                      </SignUpButton>
                      <SignUpButton mode="modal">
                        <button
                          className="inline-flex items-center justify-center gap-2 px-5 py-[11px] rounded-[12px] text-white font-semibold text-[13px] transition-all duration-300 hover:scale-[1.04] hover:bg-white/[0.06]"
                          style={{
                            background: "rgba(255,255,255,0.03)",
                            border: "1px solid rgba(255,255,255,0.12)",
                          }}
                        >
                          <CalendarIcon className="w-4 h-4" />
                          Book appointment
                        </button>
                      </SignUpButton>
                    </div>
                  </div>
                </div>
              </div>

              {/* Live status pill */}
              <div
                className="mt-6 flex items-center gap-2 px-4 py-2 rounded-full animate-fade-in-up"
                style={{
                  animationDelay: "0.5s",
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backdropFilter: "blur(16px)",
                }}
              >
                <span className="relative flex h-[7px] w-[7px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-60" />
                  <span
                    className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#00FF66]"
                    style={{ boxShadow: "0 0 8px #00FF66" }}
                  />
                </span>
                <SparklesIcon className="w-3 h-3 text-[#D946EF]" strokeWidth={2.5} />
                <span className="text-white font-semibold text-[11px] tracking-wide">
                  AI Online Now
                </span>
                <span style={{ color: "#52525B", fontSize: "11px" }}>
                  — Avg response &lt; 2s
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ================================================ */}
      {/* MOBILE Layout                                    */}
      {/* ================================================ */}
      <div className="lg:hidden relative z-20 px-6 pb-20">
        <div className="flex justify-center my-6 relative min-h-[350px]">
          <div className="animate-hero-float absolute top-0 w-[350px] pointer-events-none">
            <Image
              src="/confused.png"
              alt="DentWise AI"
              width={500}
              height={600}
              className="w-full h-auto object-contain"
              style={{
                filter:
                  "drop-shadow(0 25px 50px rgba(0,0,0,0.6)) drop-shadow(0 4px 16px rgba(0,210,255,0.1))",
              }}
              priority
            />
          </div>
        </div>

        {/* Replaced bg-gradient-to-t with radial gradient — smooth circular fade */}
        <div className="text-center mb-6 relative z-10 -mt-32 pt-24 pb-4">
          <div
            className="absolute pointer-events-none"
            style={{
              bottom: "-20%",
              left: "50%",
              transform: "translateX(-50%)",
              width: "180%",
              height: "150%",
              background:
                "radial-gradient(ellipse at 50% 60%, rgba(7,8,21,0.65) 0%, rgba(7,8,21,0.4) 25%, rgba(7,8,21,0.15) 50%, transparent 70%)",
              filter: "blur(28px)",
            }}
          />

          <div className="relative z-10">
            <h3
              className="font-extrabold text-white mb-2"
              style={{ fontSize: "24px", lineHeight: "1.2" }}
            >
              Ready When You Are
            </h3>
            <p
              className="font-medium mx-auto mb-5"
              style={{
                fontSize: "13.5px",
                lineHeight: "1.7",
                color: "#9CA0B5",
                maxWidth: "280px",
              }}
            >
              Your dental health journey starts here. Join 1,220+ patients who trust
              DentWise AI.
            </p>
            <div className="flex flex-wrap gap-2 justify-center mb-5">
              <Badge variant="cyan" size="sm">Instant AI Answers</Badge>
              <Badge variant="purple" size="sm">24/7 Support</Badge>
              <Badge variant="cyan" size="sm">No Credit Card</Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <SignUpButton mode="modal">
                <button
                  className="inline-flex items-center justify-center gap-2 px-5 py-[11px] rounded-[12px] text-white font-semibold text-[13px] transition-all duration-300 hover:scale-[1.04] active:scale-[0.97]"
                  style={{
                    background:
                      "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
                    boxShadow:
                      "0 6px 20px rgba(79,172,254,0.3), 0 2px 8px rgba(124,58,237,0.2)",
                  }}
                >
                  <MicIcon className="w-4 h-4" />
                  Start free chat
                </button>
              </SignUpButton>
              <SignUpButton mode="modal">
                <button
                  className="inline-flex items-center justify-center gap-2 px-5 py-[11px] rounded-[12px] text-white font-semibold text-[13px] transition-all duration-300 hover:scale-[1.04] hover:bg-white/[0.06]"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.12)",
                  }}
                >
                  <CalendarIcon className="w-4 h-4" />
                  Book appointment
                </button>
              </SignUpButton>
            </div>
          </div>
        </div>

        {/* Mobile pricing cards */}
        <div className="space-y-5 mb-6">
          <FreePlanCard />
          <AIBasicCard />
        </div>

        <p
          className="text-center font-medium"
          style={{ fontSize: "12px", color: "#52525B" }}
        >
          No credit card required · Cancel anytime ·{" "}
          <span style={{ color: "#9CA0B5" }}>
            Need more?{" "}
            <span style={{ color: "#00D2FF", cursor: "pointer" }}>
              Contact us for AI Pro →
            </span>
          </span>
        </p>

        {/* Mobile status pill */}
        <div
          className="mt-5 flex items-center justify-center gap-2 px-4 py-2 rounded-full"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(16px)",
          }}
        >
          <span className="relative flex h-[7px] w-[7px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-60" />
            <span
              className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#00FF66]"
              style={{ boxShadow: "0 0 8px #00FF66" }}
            />
          </span>
          <SparklesIcon className="w-3 h-3 text-[#D946EF]" strokeWidth={2.5} />
          <span className="text-white font-semibold text-[11px] tracking-wide">
            AI Online Now
          </span>
          <span style={{ color: "#52525B", fontSize: "11px" }}>
            — Avg response &lt; 2s
          </span>
        </div>
      </div>
    </section>
  );
}