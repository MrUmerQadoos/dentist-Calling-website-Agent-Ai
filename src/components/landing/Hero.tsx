"use client";

import Image from "next/image";
import { SignUpButton } from "@clerk/nextjs";
import {
  CalendarIcon,
  HeadphonesIcon,
  MessageCircleIcon,
  SparklesIcon,
  StarIcon,
  DollarSign,
  Clock,
  CheckCircle2,
  Calendar,
} from "lucide-react";
import { GlassCard } from "@/components/ui/GlassCard";
import { GradientButton } from "@/components/ui/GradientButton";
import { OutlineButton } from "@/components/ui/OutlineButton";
import { IconBox } from "@/components/ui/IconBox";
import { Badge } from "@/components/ui/badge";

/* ===== CUSTOM ICONS ===== */
function ToothIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path
        d="M12 2C9.5 2 7.5 3 6.5 5C5.5 7 5 9 5.5 11C6 13 6.5 15 7 17C7.5 19 8 21 9.5 21C11 21 11 19 12 19C13 19 13 21 14.5 21C16 21 16.5 19 17 17C17.5 15 18 13 18.5 11C19 9 18.5 7 17.5 5C16.5 3 14.5 2 12 2Z"
        fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"
      />
    </svg>
  );
}

function SoundwaveIcon() {
  const bars = [
    { h: "10px", d: "0s" },
    { h: "16px", d: "0.12s" },
    { h: "20px", d: "0.24s" },
    { h: "13px", d: "0.36s" },
    { h: "8px", d: "0.48s" },
  ];
  return (
    <span className="inline-flex items-center gap-[2.5px] w-5 h-5 justify-center">
      {bars.map((b, i) => (
        <span
          key={i}
          className="block w-[2.5px] rounded-full bg-white animate-sound-wave"
          style={{ height: b.h, animationDelay: b.d }}
        />
      ))}
    </span>
  );
}

/* ===== SMART FEATURES CARD ===== */
/* ===== SMART FEATURES CARD ===== */
function SmartFeaturesCard() {
  const features = [
    { icon: <MessageCircleIcon className="w-[20px] h-[20px] text-[#00E5FF]" strokeWidth={1.5} />, title: "Instant Answers", sub: "Get immediate responses", glow: "rgba(0,229,255,0.15)", border: "rgba(0,229,255,0.25)" },
    { icon: <CalendarIcon className="w-[20px] h-[20px] text-[#A78BFA]" strokeWidth={1.5} />, title: "Smart Booking", sub: "Book appointments easily", glow: "rgba(167,139,250,0.15)", border: "rgba(167,139,250,0.25)" },
    { icon: <ToothIcon className="w-[20px] h-[20px] text-[#00E5FF]" />, title: "Personalized Care", sub: "AI tailored recommendations", glow: "rgba(0,229,255,0.15)", border: "rgba(0,229,255,0.25)" },
    { icon: <HeadphonesIcon className="w-[20px] h-[20px] text-[#D946EF]" strokeWidth={1.5} />, title: "24/7 Support", sub: "Always here to help", glow: "rgba(217,70,239,0.15)", border: "rgba(217,70,239,0.25)" },
  ];

  return (
    <GlassCard
      glowColor="rgba(0,229,255,0.4)"
      glowColorSecondary="rgba(167,139,250,0.3)"
      rounded="28px"
      /* CHANGE 1: Added specific vertical (40px) and horizontal (28px) padding */
      padding="45px 30px" 
    >
      {/* CHANGE 2: Increased margin-bottom (mb-10) to push the list further down from the title */}
      <div className="flex items-center gap-2.5 mb-10">
        <SparklesIcon className="w-[17px] h-[17px] text-[#D946EF]" strokeWidth={2.5} />
        <span className="text-white font-semibold text-[15px] tracking-wide">Smart Features</span>
      </div>
      
      {/* CHANGE 3: Changed space-y-5 to space-y-8 to spread the items out, making the card taller */}
      <div className="space-y-8 flex-1">
        {features.map((f, i) => (
          <div key={i} className="flex items-center gap-4">
            <IconBox glow={f.glow} border={f.border} size="md">{f.icon}</IconBox>
            <div className="min-w-0">
              <p className="text-white font-semibold text-[13.5px] leading-tight">{f.title}</p>
              <p className="text-[#6B6B80] text-[11.5px] mt-[3px] leading-tight font-medium">{f.sub}</p>
            </div>
          </div>
        ))}
      </div>
    </GlassCard>
  );
}

/* ===== AVAILABLE 24/7 CARD ===== */
function AvailableCard() {
  return (
    <GlassCard
      glowColor="rgba(0,255,102,0.25)"
      glowColorSecondary="rgba(0,210,255,0.2)"
      rounded="22px"
      padding="30px 40px" 
    >
      <div className="space-y-3.5">
        <div>
          <p className="text-white font-semibold text-[15px] tracking-wide">Available 24/7</p>
          <p className="text-[#6B6B80] text-[12px] mt-[5px] leading-relaxed font-medium">
            Your dental health, our priority
          </p>
        </div>
        <div className="flex items-center gap-[10px]">
          <span className="relative flex h-[10px] w-[10px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-60" />
            <span
              className="relative inline-flex rounded-full h-[10px] w-[10px] bg-[#00FF66]"
              style={{ boxShadow: "0 0 12px #00FF66, 0 0 25px rgba(0,255,102,0.4)" }}
            />
          </span>
          <span className="text-[13px] font-bold tracking-wider" style={{ color: "#00FF66" }}>
            Online Now
          </span>
        </div>
      </div>
    </GlassCard>
  );
}

/* ===== HOW IT WORKS PILL BADGE ===== */
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
    neutral: { background: "rgba(255,255,255,0.04)", border: "1px solid rgba(255,255,255,0.08)", color: "#CBD5E1" },
    cyan: { background: "rgba(0,210,255,0.08)", border: "1px solid rgba(0,210,255,0.22)", color: "#00D2FF" },
    purple: { background: "rgba(217,70,239,0.08)", border: "1px solid rgba(217,70,239,0.22)", color: "#D946EF" },
  };
  const s = styles[variant];
  return (
    <div
      className="inline-flex items-center gap-2 px-3 py-[7px] rounded-xl w-full"
      style={{ background: s.background, border: s.border }}
    >
      {icon && <span style={{ color: s.color }}>{icon}</span>}
      <span className="text-[12px] font-semibold tracking-wide" style={{ color: s.color }}>
        {text}
      </span>
    </div>
  );
}

/* ============================================= */
/* ===== MAIN HERO + HOW IT WORKS COMBINED ===== */
/* ============================================= */
export default function Hero() {
  const avatars = [
    "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face",
    "https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=100&h=100&fit=crop&crop=face",
  ];

  return (
    <section className="relative w-full overflow-hidden">
      {/* ================================================ */}
      {/* LAYER 0: BACKGROUND                              */}
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
        <div className="absolute inset-0 bg-[#070815]/45" />

        {/* Ambient glows */}
        <div
          className="absolute animate-glow-pulse"
          style={{
            top: "-18%", right: "-10%", width: "45vw", height: "45vw",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(139,92,246,0.14) 0%, transparent 65%)",
            filter: "blur(120px)",
          }}
        />
        <div
          className="absolute animate-glow-pulse"
          style={{
            bottom: "10%", left: "50%", transform: "translateX(-50%)",
            width: "55vw", height: "55vw", borderRadius: "50%",
            background: "radial-gradient(circle, rgba(0,210,255,0.1) 0%, transparent 60%)",
            filter: "blur(130px)", animationDelay: "2s",
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background: "linear-gradient(to bottom, rgba(7,8,21,0.4) 0%, transparent 15%, transparent 85%, rgba(7,8,21,0.9) 100%)",
          }}
        />
      </div>

      {/* ================================================ */}
      {/* LAYER 1: 3D CHARACTER                           */}
      {/*                                                  */}
      {/* z-[15] = ABOVE right cards (z-8) so head shows  */}
      {/*          in front of Smart Features card         */}
      {/*        = BELOW left text (z-30) so text is clear */}
      {/*        = BELOW HowItWorks section (z-30)         */}
      {/* ================================================ */}
       <div
        className="absolute z-[35] hidden lg:block pointer-events-none"
        style={{
          top: "70px", /* CHANGED FROM BOTTOM TO TOP */
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <div className="animate-hero-float">
          <Image
            src="/hero.png"
            alt="DentWise AI Character"
            width={800}
            height={960}
            className="h-auto object-contain object-bottom"
            style={{
              width: "clamp(500px, 42vw, 680px)",
              filter:
                "drop-shadow(0 30px 60px rgba(0,0,0,0.65)) drop-shadow(0 8px 20px rgba(0,210,255,0.08))",
            }}
            priority
          />
        </div>
      </div>

      {/* ================================================ */}
      {/* CONTENT LAYER                                    */}
      {/* NO global z-index — each child sets its own     */}
      {/* ================================================ */}
      <div className="relative pointer-events-none">
        <div
          className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-14"
          style={{ paddingTop: "120px" }}
        >
          {/* ============================================= */}
          {/* ROW 1: Hero (Left Text + Right Cards)         */}
          {/* ============================================= */}
          <div className="flex flex-col lg:flex-row items-start justify-between gap-10">

            {/* ─────────────────────────────────────────── */}
            {/* LEFT COLUMN — z-[30]                        */}
            {/* Sits ABOVE character so text is always      */}
            {/* readable. Character is behind this text.    */}
            {/* ─────────────────────────────────────────── */}
            <div
              className="w-full lg:w-[46%] pointer-events-auto relative z-[40]"
              style={{ paddingTop: "40px" }}
            >
              <div className="space-y-7">
                {/* Badge */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                  <div
                    className="inline-flex items-center gap-2.5 px-4 py-[9px] rounded-full"
                    style={{
                      background: "rgba(0,210,255,0.05)",
                      border: "1px solid rgba(0,210,255,0.25)",
                      backdropFilter: "blur(10px)",
                    }}
                  >
                    <SparklesIcon className="w-3.5 h-3.5 text-[#00D2FF]" />
                    <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#00D2FF]">
                      AI-Powered Dental Assistant
                    </span>
                  </div>
                </div>

                {/* Headline */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
                  <h1
                    className="font-extrabold tracking-tight"
                    style={{ fontSize: "clamp(40px, 5.2vw, 72px)", lineHeight: "1.05" }}
                  >
                    <span className="text-white block">Your Dental</span>
                    <span className="text-white block">Questions,</span>
                    <span
                      className="block"
                      style={{
                        background: "linear-gradient(to right, #00D2FF, #D946EF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Answered Instantly.
                    </span>
                  </h1>
                </div>

                {/* Subtext */}
                <div className="animate-fade-in-up" style={{ animationDelay: "0.45s" }}>
                  <p
                    className="max-w-[500px] font-medium"
                    style={{ fontSize: "15.5px", lineHeight: "1.75", color: "#9CA0B5" }}
                  >
                    Get instant answers to dental questions, book smart appointments, and receive
                    personalized care recommendations — all powered by advanced AI.
                  </p>
                </div>

                {/* Buttons */}
                <div
                  className="flex flex-col sm:flex-row gap-3.5 animate-fade-in-up"
                  style={{ animationDelay: "0.6s" }}
                >
                  <SignUpButton mode="modal">
                    <GradientButton size="md">
                      <SoundwaveIcon />
                      Try voice Agent
                    </GradientButton>
                  </SignUpButton>
                  <SignUpButton mode="modal">
                    <OutlineButton size="md">
                      <CalendarIcon className="w-[18px] h-[18px]" />
                      Book Appointment
                    </OutlineButton>
                  </SignUpButton>
                </div>

                {/* Social Proof */}
                <div
                  className="flex items-center gap-5 animate-fade-in-up"
                  style={{ animationDelay: "0.75s" }}
                >
                  <div className="flex">
                    {avatars.map((src, i) => (
                      <Image
                        key={i}
                        src={src}
                        alt={`Patient ${i + 1}`}
                        width={42}
                        height={42}
                        className="rounded-full object-cover"
                        style={{
                          width: "42px",
                          height: "42px",
                          border: "3px solid #070815",
                          marginLeft: i === 0 ? "0" : "-10px",
                          position: "relative",
                          zIndex: 10 - i,
                        }}
                      />
                    ))}
                  </div>
                  <div style={{ width: "1px", height: "32px", background: "rgba(255,255,255,0.1)" }} />
                  <div>
                    <div className="flex items-center gap-[6px]">
                      <div className="flex items-center gap-[2px]">
                        {[1, 2, 3, 4, 5].map((s) => (
                          <StarIcon
                            key={s}
                            className="fill-[#EAB308] text-[#EAB308]"
                            style={{ width: "14px", height: "14px" }}
                          />
                        ))}
                      </div>
                      <span className="font-bold text-white" style={{ fontSize: "13px" }}>
                        4.9/5
                      </span>
                    </div>
                    <p
                      style={{ fontSize: "12px", color: "#52525B", marginTop: "3px" }}
                      className="font-medium"
                    >
                      <span style={{ color: "#9CA0B5", fontWeight: 600 }}>1,220+</span> patients
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ─────────────────────────────────────────── */}
            {/* RIGHT COLUMN — z-[8]                        */}
            {/* Sits BELOW character (z-15) so the          */}
            {/* character's head overlaps in front of the   */}
            {/* Smart Features card naturally               */}
            {/* ─────────────────────────────────────────── */}
            <div 
              className="hidden lg:flex flex-col items-end w-[32%] pointer-events-auto gap-5  relative z-[8]"
              style={{ marginTop: "80px" }} 
            >
              <div
                className="w-[330px] xl:w-[350px] animate-slide-in-right"
                style={{ animationDelay: "0.4s" }}
              >
                <SmartFeaturesCard />
              </div>
              <div
                className="w-[290px] animate-slide-in-right mt-10 "
                style={{ animationDelay: "0.6s", marginRight: "40px" }}
              >
                <AvailableCard 
 />
              </div>
            </div>
          </div>

          {/* ============================================= */}
          {/* ROW 2: How It Works — z-[30]                  */}
          {/* Sits ABOVE character so section is clean      */}
          {/* Character does NOT bleed into this section    */}
          {/* ============================================= */}
          <div className="mt-16 lg:mt-20 pb-20 pointer-events-auto relative z-[50]">
            <div
              className="relative w-full rounded-3xl overflow-hidden px-2 sm:px-10 lg:px-8 py-10 animate-fade-in-up pb-20"
              style={{
                background: "rgba(13,20,36,0.65)",
                border: "1px solid rgba(255,255,255,0.07)",
                backdropFilter: "blur(20px)",
                WebkitBackdropFilter: "blur(20px)",
                boxShadow: "0 0 50px rgba(0,100,255,0.05), 0 40px 80px rgba(0,0,0,0.4)",
              }}
            >
              {/* BG glows */}
              <div
                className="absolute top-0 left-0 pointer-events-none"
                style={{
                  width: "500px", height: "500px",
                  background: "rgba(0,100,255,0.06)",
                  borderRadius: "50%", filter: "blur(120px)",
                  transform: "translate(-40%, -40%)",
                }}
              />
              <div
                className="absolute bottom-0 right-0 pointer-events-none"
                style={{
                  width: "500px", height: "500px",
                  background: "rgba(168,85,247,0.06)",
                  borderRadius: "50%", filter: "blur(120px)",
                  transform: "translate(40%, 40%)",
                }}
              />

              <div className="relative z-10 p-8 md:p-12">
                {/* Top Right Status Pill */}
                {/* <div
                  className="hidden md:flex absolute top-8 right-8 flex-col items-start rounded-2xl p-4"
                  style={{
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.08)",
                    backdropFilter: "blur(20px)",
                    WebkitBackdropFilter: "blur(20px)",
                  }}
                >
                  <p className="text-[#6B6B80] text-[12px] font-medium mb-2">
                    Your dental health, our priority
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="relative flex h-[8px] w-[8px]">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#22C55E] opacity-60" />
                      <span
                        className="relative inline-flex rounded-full h-[8px] w-[8px] bg-[#22C55E]"
                        style={{ boxShadow: "0 0 8px #22C55E, 0 0 16px rgba(34,197,94,0.3)" }}
                      />
                    </span>
                    <span className="text-[#22C55E] text-[12px] font-bold tracking-wider">
                      Online Now
                    </span>
                  </div>
                </div> */}

                {/* Section Header */}
                <div
                  className="max-w-2xl mb-12 animate-fade-in-up "
                  style={{ animationDelay: "0.05s" }}
                >
                  <h2 className="text-[30px] md:text-[38px] font-extrabold text-white tracking-tight leading-tight mb-2">
                    DentWise AI Simple Process
                  </h2>
                  <h3 className="text-[20px] md:text-[24px] font-semibold text-[#CBD5E1] tracking-tight mb-4">
                    Three steps to better health
                  </h3>
                  <p className="text-[14px] md:text-[15px] text-[#6B6B80] font-medium leading-relaxed max-w-xl">
                    From simple questions to your AI doctor, we provide instant, reliable dental
                    health results.
                  </p>
                </div>

                {/* Process Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {/* Card 1 */}
                  <div className="animate-fade-in-up" style={{ animationDelay: "0.15s" }}>
                    <GlassCard
                      glowColor="rgba(0,210,255,0.4)"
                      glowColorSecondary="rgba(0,150,255,0.2)"
                      rounded="24px"
                      padding="28px"
                    >
                      <div className="flex flex-col h-full space-y-5">
                        <div className="flex items-start gap-4">
                          <IconBox glow="rgba(0,210,255,0.15)" border="rgba(0,210,255,0.3)" size="lg">
                            <span className="text-[#00D2FF] text-xl font-bold">1</span>
                          </IconBox>
                          <h3 className="text-white font-bold text-[17px] leading-snug pt-1">
                            Voice Chat Ask<br />Questions
                          </h3>
                        </div>
                        <p className="text-[#6B6B80] text-[13px] leading-relaxed font-medium flex-grow">
                          Receive immediate smart advice from our AI regarding your dental issues,
                          available 24/7.
                        </p>
                        <div className="space-y-3 mt-auto">
                          <PillBadge
                            icon={<Calendar className="w-3.5 h-3.5" />}
                            text="AI Powered Realtime Response"
                            variant="neutral"
                          />
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="cyan">Instant Analysis</Badge>
                            <Badge variant="cyan">Symptom Check</Badge>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Card 2 */}
                  <div className="animate-fade-in-up" style={{ animationDelay: "0.28s" }}>
                    <GlassCard
                      glowColor="rgba(0,210,255,0.4)"
                      glowColorSecondary="rgba(0,150,255,0.2)"
                      rounded="24px"
                      padding="28px"
                    >
                      <div className="flex flex-col h-full space-y-5">
                        <div className="flex items-start gap-4">
                          <IconBox glow="rgba(0,210,255,0.15)" border="rgba(0,210,255,0.3)" size="lg">
                            <DollarSign className="w-5 h-5 text-[#00D2FF]" strokeWidth={2.5} />
                          </IconBox>
                          <h3 className="text-white font-bold text-[17px] leading-snug pt-1">
                            How much does teeth<br />whitening cost?
                          </h3>
                        </div>
                        <p className="text-[#6B6B80] text-[13px] leading-relaxed font-medium flex-grow">
                          Receive fast, transparent, and accurate cost estimates for dental
                          procedures based on your needs.
                        </p>
                        <div className="space-y-3 mt-auto">
                          <PillBadge
                            icon={<CheckCircle2 className="w-3.5 h-3.5" />}
                            text="AI Powered Expert Advice"
                            variant="neutral"
                          />
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="cyan">Cost Estimation</Badge>
                            <Badge variant="cyan">Treatment Options</Badge>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>

                  {/* Card 3 */}
                  <div className="animate-fade-in-up" style={{ animationDelay: "0.42s" }}>
                    <GlassCard
                      glowColor="rgba(217,70,239,0.4)"
                      glowColorSecondary="rgba(168,85,247,0.2)"
                      rounded="24px"
                      padding="28px"
                    >
                      <div className="flex flex-col h-full space-y-5">
                        <div className="flex items-start gap-4">
                          <IconBox glow="rgba(217,70,239,0.15)" border="rgba(217,70,239,0.3)" size="lg">
                            <Clock className="w-5 h-5 text-[#D946EF]" strokeWidth={2} />
                          </IconBox>
                          <h3 className="text-white font-bold text-[17px] leading-snug pt-1">
                            How much time to<br />replace lost teeth?
                          </h3>
                        </div>
                        <p className="text-[#6B6B80] text-[13px] leading-relaxed font-medium flex-grow">
                          Receive estimated timelines for treatments like implants, bridges, or
                          dentures.
                        </p>
                        <div className="space-y-3 mt-auto">
                          <PillBadge
                            icon={<CheckCircle2 className="w-3.5 h-3.5" />}
                            text="AI Powered Preventive Care"
                            variant="purple"
                          />
                          <div className="flex flex-wrap gap-2">
                            <Badge variant="purple">Preventive Care</Badge>
                            <Badge variant="purple">Maintenance</Badge>
                          </div>
                        </div>
                      </div>
                    </GlassCard>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ================================================ */}
      {/* MOBILE Layout                                    */}
      {/* ================================================ */}
      <div className="lg:hidden relative z-20 px-6 pb-16">
        <div className="flex justify-center my-8">
          <Image
            src="/hero.png"
            alt="DentWise AI"
            width={400}
            height={480}
            className="h-auto"
            style={{
              width: "clamp(260px, 70vw, 360px)",
              filter: "drop-shadow(0 25px 50px rgba(0,0,0,0.6))",
            }}
            priority
          />
        </div>

        {/* Mobile Smart Features + Available */}
        <div className="space-y-5 mb-12  ">
          <GlassCard
            glowColor="rgba(0,229,255,0.3)"
            glowColorSecondary="rgba(167,139,250,0.2)"
            rounded="20px"
            padding="24px"

          >
            <div className="flex items-center gap-2 mb-5 ">
              <SparklesIcon className="w-4 h-4 text-[#D946EF]" />
              <span className="text-white font-semibold text-[14px]">Smart Features</span>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {[
                { icon: <MessageCircleIcon className="w-4 h-4 text-[#00E5FF]" />, label: "Instant Answers", glow: "rgba(0,229,255,0.1)", border: "rgba(0,229,255,0.2)" },
                { icon: <CalendarIcon className="w-4 h-4 text-[#A78BFA]" />, label: "Smart Booking", glow: "rgba(167,139,250,0.1)", border: "rgba(167,139,250,0.2)" },
                { icon: <ToothIcon className="w-4 h-4 text-[#00E5FF]" />, label: "Personalized Care", glow: "rgba(0,229,255,0.1)", border: "rgba(0,229,255,0.2)" },
                { icon: <HeadphonesIcon className="w-4 h-4 text-[#D946EF]" />, label: "24/7 Support", glow: "rgba(217,70,239,0.1)", border: "rgba(217,70,239,0.2)" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <IconBox glow={item.glow} border={item.border} size="sm">{item.icon}</IconBox>
                  <p className="text-white font-medium text-[12px]">{item.label}</p>
                </div>
              ))}
            </div>
          </GlassCard>

          <div className="w-fit">
            <GlassCard
              glowColor="rgba(0,255,102,0.2)"
              glowColorSecondary="rgba(0,210,255,0.2)"
              rounded="14px"
              padding="12px 20px"
            >
              <div className="flex items-center gap-3">
                <span className="relative flex h-[8px] w-[8px]">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-60" />
                  <span
                    className="relative inline-flex rounded-full h-[8px] w-[8px] bg-[#00FF66]"
                    style={{ boxShadow: "0 0 8px #00FF66" }}
                  />
                </span>
                <span className="text-[#00FF66] text-[11px] font-semibold">Online Now</span>
                <span className="text-[#52525B] text-[11px]">— Available 24/7</span>
              </div>
            </GlassCard>
          </div>
        </div>

        {/* Mobile How It Works */}
        <div
          className="relative w-full rounded-3xl overflow-hidden"
          style={{
            background: "rgba(13,20,36,0.65)",
            border: "1px solid rgba(255,255,255,0.07)",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
            boxShadow: "0 0 50px rgba(0,100,255,0.05), 0 40px 80px rgba(0,0,0,0.4)",
          }}
        >
          <div className="p-6">
            <h2 className="text-[24px] font-extrabold text-white tracking-tight mb-2">
              DentWise AI Simple Process
            </h2>
            <h3 className="text-[16px] font-semibold text-[#CBD5E1] mb-3">
              Three steps to better health
            </h3>
            <p className="text-[13px] text-[#6B6B80] mb-8">
              From simple questions to your AI doctor, we provide instant results.
            </p>

            <div className="space-y-5">
              <GlassCard glowColor="rgba(0,210,255,0.4)" glowColorSecondary="rgba(0,150,255,0.2)" rounded="20px" padding="20px">
                <div className="flex items-start gap-3 mb-3">
                  <IconBox glow="rgba(0,210,255,0.15)" border="rgba(0,210,255,0.3)" size="md">
                    <span className="text-[#00D2FF] text-lg font-bold">1</span>
                  </IconBox>
                  <h3 className="text-white font-bold text-[15px] leading-snug pt-1">
                    Voice Chat Ask Questions
                  </h3>
                </div>
                <p className="text-[#6B6B80] text-[12px] leading-relaxed mb-3">
                  AI-powered voice chat for instant dental guidance.

                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="cyan" size="sm">Instant Analysis</Badge>
                  <Badge variant="cyan" size="sm">Symptom Check</Badge>
                </div>
              </GlassCard>

              <GlassCard glowColor="rgba(0,210,255,0.4)" glowColorSecondary="rgba(0,150,255,0.2)" rounded="20px" padding="20px">
                <div className="flex items-start gap-3 mb-3">
                  <IconBox glow="rgba(0,210,255,0.15)" border="rgba(0,210,255,0.3)" size="md">
                    <DollarSign className="w-4 h-4 text-[#00D2FF]" strokeWidth={2.5} />
                  </IconBox>
                  <h3 className="text-white font-bold text-[15px] leading-snug pt-1">
                    Teeth whitening cost?
                  </h3>
                </div>
                <p className="text-[#6B6B80] text-[12px] leading-relaxed mb-3">
                  Accurate cost estimates for dental procedures.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="cyan" size="sm">Cost Estimation</Badge>
                  <Badge variant="cyan" size="sm">Treatment Options</Badge>
                </div>
              </GlassCard>

              <GlassCard glowColor="rgba(217,70,239,0.4)" glowColorSecondary="rgba(168,85,247,0.2)" rounded="20px" padding="20px">
                <div className="flex items-start gap-3 mb-3">
                  <IconBox glow="rgba(217,70,239,0.15)" border="rgba(217,70,239,0.3)" size="md">
                    <Clock className="w-4 h-4 text-[#D946EF]" strokeWidth={2} />
                  </IconBox>
                  <h3 className="text-white font-bold text-[15px] leading-snug pt-1">
                    Replace lost teeth?
                  </h3>
                </div>
                <p className="text-[#6B6B80] text-[12px] leading-relaxed mb-3">
                  Estimated timelines for implants and bridges.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="purple" size="sm">Preventive Care</Badge>
                  <Badge variant="purple" size="sm">Maintenance</Badge>
                </div>
              </GlassCard>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}