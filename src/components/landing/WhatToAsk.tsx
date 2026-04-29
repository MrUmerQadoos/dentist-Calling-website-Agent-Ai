"use client";

import Image from "next/image";
import {
  MessageCircleIcon,
  SparklesIcon,
  DollarSignIcon,
  WrenchIcon,
  ZapIcon,
  HeartPulseIcon,
  ShieldCheckIcon,
  BrainCircuitIcon,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { IconBox } from "@/components/ui/IconBox";
import { Badge } from "@/components/ui/badge";

/* ============================================= */
/* ===== TOOTH ICON ============================ */
/* ============================================= */
function ToothIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C9.5 2 7.5 3 6.5 5C5.5 7 5 9 5.5 11C6 13 6.5 15 7 17C7.5 19 8 21 9.5 21C11 21 11 19 12 19C13 19 13 21 14.5 21C16 21 16.5 19 17 17C17.5 15 18 13 18.5 11C19 9 18.5 7 17.5 5C16.5 3 14.5 2 12 2Z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

/* ============================================= */
/* ===== QUESTION CHAT BUBBLE ================== */
/* ============================================= */
function QuestionCard({
  question,
  answer,
  tags,
  tagVariant = "cyan",
  icon,
  glowColor,
  glowColorSecondary,
  delay = "0s",
}: {
  question: string;
  answer: string;
  tags: string[];
  tagVariant?: "cyan" | "purple";
  icon: React.ReactNode;
  glowColor: string;
  glowColorSecondary: string;
  delay?: string;
}) {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: delay }}>
      <GlassCard
        glowColor={glowColor}
        glowColorSecondary={glowColorSecondary}
        rounded="22px"
        padding="22px"
        hoverEffect
      >
        {/* Question bubble */}
        <div className="flex items-start gap-3 mb-4">
          <div className="shrink-0 mt-0.5">
            <IconBox
              glow={glowColor.replace("0.4", "0.15")}
              border={glowColor.replace("0.4", "0.3")}
              size="sm"
            >
              {icon}
            </IconBox>
          </div>
          <div
            className="flex-1 px-4 py-3 rounded-2xl rounded-tl-sm"
            style={{
              background: "rgba(255,255,255,0.05)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <p className="text-white font-semibold text-[13.5px] leading-snug">
              {question}
            </p>
          </div>
        </div>

        {/* Answer */}
        <p className="text-[#6B6B80] text-[12.5px] leading-relaxed font-medium mb-4 pl-[52px]">
          {answer}
        </p>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 pl-[52px]">
          {tags.map((tag) => (
            <Badge key={tag} variant={tagVariant} size="sm">
              {tag}
            </Badge>
          ))}
        </div>
      </GlassCard>
    </div>
  );
}

/* ============================================= */
/* ===== FLOATING STAT CARD ==================== */
/* ============================================= */
function StatCard({
  value,
  label,
  icon,
  glowColor,
  delay = "0s",
}: {
  value: string;
  label: string;
  icon: React.ReactNode;
  glowColor: string;
  delay?: string;
}) {
  return (
    <div className="animate-fade-in-up" style={{ animationDelay: delay }}>
      <GlassCard
        glowColor={glowColor}
        glowColorSecondary="rgba(167,139,250,0.2)"
        rounded="20px"
        padding="20px"
        hoverEffect
      >
        <div className="flex items-center gap-3">
          <IconBox
            glow={glowColor.replace("0.4", "0.15")}
            border={glowColor.replace("0.4", "0.25")}
            size="md"
          >
            {icon}
          </IconBox>
          <div>
            <p className="text-white font-extrabold text-[20px] leading-none">{value}</p>
            <p className="text-[#6B6B80] text-[11px] mt-[4px] font-medium">{label}</p>
          </div>
        </div>
      </GlassCard>
    </div>
  );
}

/* ============================================= */
/* ===== MAIN SECTION ========================== */
/* ============================================= */
export default function WhatToAsk() {
  const questions = [
    {
      question: '"My tooth hurts when I bite down"',
      answer:
        "Get immediate advice on pain management, possible causes, and when to see a dentist urgently.",
      tags: ["Instant Response", "Pain Relief"],
      tagVariant: "cyan" as const,
      icon: <MessageCircleIcon className="w-[16px] h-[16px] text-[#00E5FF]" strokeWidth={1.5} />,
      glowColor: "rgba(0,210,255,0.4)",
      glowColorSecondary: "rgba(0,150,255,0.2)",
      delay: "0.15s",
    },
    {
      question: '"How much does teeth whitening cost?"',
      answer:
        "Compare treatment options, pricing ranges, and find the best whitening solution for your budget.",
      tags: ["Cost Analysis", "Treatment Options"],
      tagVariant: "purple" as const,
      icon: <DollarSignIcon className="w-[16px] h-[16px] text-[#D946EF]" strokeWidth={2} />,
      glowColor: "rgba(217,70,239,0.4)",
      glowColorSecondary: "rgba(168,85,247,0.2)",
      delay: "0.28s",
    },
    {
      question: '"When should I replace my filling?"',
      answer:
        "Learn about filling lifespan, warning signs of wear, and replacement timing guidance.",
      tags: ["Preventive Care", "Maintenance"],
      tagVariant: "cyan" as const,
      icon: <WrenchIcon className="w-[16px] h-[16px] text-[#00E5FF]" strokeWidth={1.5} />,
      glowColor: "rgba(0,210,255,0.4)",
      glowColorSecondary: "rgba(0,150,255,0.2)",
      delay: "0.42s",
    },
  ];

  return (
    <section className="relative w-full py-8 pb-24 overflow-hidden">
      {/* ──────────────────────────────────────── */}
      {/* Ambient background glows               */}
      {/* ──────────────────────────────────────── */}
      <div
        className="absolute pointer-events-none select-none animate-glow-pulse"
        style={{
          top: "10%",
          left: "-8%",
          width: "40vw",
          height: "40vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,210,255,0.08) 0%, transparent 65%)",
          filter: "blur(100px)",
        }}
      />
      <div
        className="absolute pointer-events-none select-none animate-glow-pulse"
        style={{
          bottom: "5%",
          right: "-5%",
          width: "35vw",
          height: "35vw",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(217,70,239,0.07) 0%, transparent 65%)",
          filter: "blur(110px)",
          animationDelay: "2s",
        }}
      />

      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14">
        {/* ──────────────────────────────────────── */}
        {/* Outer glass container (same as HowItWorks) */}
        {/* ──────────────────────────────────────── */}
        <div
          className="relative w-full rounded-3xl overflow-hidden"
          style={{
            background: "rgba(13,20,36,0.72)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow:
              "0 0 60px rgba(0,100,255,0.06), 0 40px 80px rgba(0,0,0,0.45)",
          }}
        >
          {/* Internal ambient glow orbs */}
          <div
            className="absolute top-0 right-0 pointer-events-none"
            style={{
              width: "600px",
              height: "600px",
              background: "rgba(0,100,255,0.04)",
              borderRadius: "50%",
              filter: "blur(130px)",
              transform: "translate(35%, -35%)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 pointer-events-none"
            style={{
              width: "600px",
              height: "600px",
              background: "rgba(168,85,247,0.04)",
              borderRadius: "50%",
              filter: "blur(130px)",
              transform: "translate(-35%, 35%)",
            }}
          />

          <div className="relative z-10 p-8 md:p-12">
            {/* ════════════════════════════════════ */}
            {/* TWO-COLUMN GRID                     */}
            {/* Left: Questions | Right: AI Visual  */}
            {/* ════════════════════════════════════ */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

              {/* ──────────────────────────────── */}
              {/* LEFT COLUMN: Text + Q&A Cards   */}
              {/* ──────────────────────────────── */}
              <div className="space-y-8">
                {/* Section header */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.05s" }}>
                  {/* Badge */}
                  <div
                    className="inline-flex items-center gap-2.5 px-4 py-[9px] rounded-full mb-5"
                    style={{
                      background: "rgba(0,210,255,0.05)",
                      border: "1px solid rgba(0,210,255,0.25)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <MessageCircleIcon className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#00D2FF]">
                      AI-Powered Conversations
                    </span>
                  </div>

                  {/* Heading */}
                  <h2
                    className="font-extrabold tracking-tight mb-4"
                    style={{ fontSize: "clamp(32px, 4vw, 56px)", lineHeight: "1.08" }}
                  >
                    <span className="text-white block">Ask about</span>
                    <span
                      className="block"
                      style={{
                        background: "linear-gradient(to right, #00D2FF, #D946EF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      anything dental
                    </span>
                  </h2>

                  <p
                    className="font-medium max-w-[480px]"
                    style={{ fontSize: "15px", lineHeight: "1.75", color: "#9CA0B5" }}
                  >
                    From simple questions to complex concerns, our AI delivers expert-level
                    guidance trained on thousands of real dental cases.
                  </p>
                </div>

                {/* Sub-label */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
                  <p
                    className="font-semibold text-[13px] uppercase tracking-[0.1em]"
                    style={{ color: "#52525B" }}
                  >
                    Common questions our AI answers:
                  </p>
                </div>

                {/* Question Cards */}
                <div className="space-y-4">
                  {questions.map((q, i) => (
                    <QuestionCard key={i} {...q} />
                  ))}
                </div>
              </div>

              {/* ──────────────────────────────── */}
              {/* RIGHT COLUMN: AI Visual          */}
              {/* ──────────────────────────────── */}
              <div className="relative flex flex-col items-center justify-start gap-6 lg:pt-4">

                {/* Top stat cards row */}
                <div className="w-full grid grid-cols-2 gap-4 animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
                  <StatCard
                    value="24/7"
                    label="Always available"
                    icon={<ZapIcon className="w-[18px] h-[18px] text-[#00E5FF]" strokeWidth={1.5} />}
                    glowColor="rgba(0,210,255,0.4)"
                    delay="0.2s"
                  />
                  <StatCard
                    value="10k+"
                    label="Cases trained on"
                    icon={<BrainCircuitIcon className="w-[18px] h-[18px] text-[#D946EF]" strokeWidth={1.5} />}
                    glowColor="rgba(217,70,239,0.4)"
                    delay="0.3s"
                  />
                </div>

                {/* Central AI Illustration Card */}
                <div className="w-full animate-fade-in-up" style={{ animationDelay: "0.25s" }}>
                  <GlassCard
                    glowColor="rgba(0,210,255,0.35)"
                    glowColorSecondary="rgba(217,70,239,0.25)"
                    rounded="28px"
                    padding="0px"
                    hoverEffect={false}
                  >
                    <div
                      className="relative overflow-hidden rounded-[28px]"
                      style={{ minHeight: "320px" }}
                    >
                      {/* Glow behind image */}
                      <div
                        className="absolute inset-0 pointer-events-none"
                        style={{
                          background:
                            "radial-gradient(ellipse at 50% 80%, rgba(0,210,255,0.12) 0%, rgba(217,70,239,0.08) 40%, transparent 70%)",
                        }}
                      />

                      {/* AI Character Image */}
                      <div className="flex items-end justify-center h-full pt-6">
                        <Image
                          src="/confused.png"
                          alt="AI Dental Assistant"
                          width={340}
                          height={380}
                          className="h-auto object-contain object-bottom animate-hero-float"
                          style={{
                            width: "clamp(200px, 28vw, 340px)",
                            filter:
                              "drop-shadow(0 20px 40px rgba(0,0,0,0.6)) drop-shadow(0 4px 12px rgba(0,210,255,0.1))",
                          }}
                        />
                      </div>

                      {/* Floating "AI Assistant" label at bottom */}
                      <div
                        className="absolute bottom-5 left-1/2 -translate-x-1/2 flex items-center gap-2 px-4 py-2 rounded-full"
                        style={{
                          background: "rgba(255,255,255,0.05)",
                          border: "1px solid rgba(255,255,255,0.10)",
                          backdropFilter: "blur(20px)",
                          WebkitBackdropFilter: "blur(20px)",
                          whiteSpace: "nowrap",
                        }}
                      >
                        <span className="relative flex h-[7px] w-[7px]">
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-60" />
                          <span
                            className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#00FF66]"
                            style={{ boxShadow: "0 0 8px #00FF66" }}
                          />
                        </span>
                        <SparklesIcon className="w-3.5 h-3.5 text-[#D946EF]" strokeWidth={2.5} />
                        <span className="text-white font-semibold text-[12px] tracking-wide">
                          AI Assistant
                        </span>
                      </div>
                    </div>
                  </GlassCard>
                </div>

                {/* Bottom stat cards row */}
                <div className="w-full grid grid-cols-2 gap-4">
                  <StatCard
                    value="99%"
                    label="Accuracy rate"
                    icon={<ShieldCheckIcon className="w-[18px] h-[18px] text-[#00E5FF]" strokeWidth={1.5} />}
                    glowColor="rgba(0,210,255,0.4)"
                    delay="0.35s"
                  />
                  <StatCard
                    value="< 2s"
                    label="Response time"
                    icon={<HeartPulseIcon className="w-[18px] h-[18px] text-[#D946EF]" strokeWidth={1.5} />}
                    glowColor="rgba(217,70,239,0.4)"
                    delay="0.45s"
                  />
                </div>

                {/* Features pill row */}
                <div
                  className="w-full flex flex-wrap gap-2 justify-center animate-fade-in-up"
                  style={{ animationDelay: "0.5s" }}
                >
                  {[
                    { label: "Instant Analysis", variant: "cyan" as const },
                    { label: "Expert Guidance", variant: "purple" as const },
                    { label: "Personalized Care", variant: "cyan" as const },
                    { label: "Pain Relief Tips", variant: "purple" as const },
                  ].map((item) => (
                    <Badge key={item.label} variant={item.variant} size="md">
                      {item.label}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}