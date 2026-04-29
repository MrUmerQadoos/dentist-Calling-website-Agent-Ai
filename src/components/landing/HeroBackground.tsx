"use client";

import Image from "next/image";
import { CalendarIcon, HeadphonesIcon, MessageCircleIcon, SparklesIcon, StarIcon } from "lucide-react";

/* ============================================= */
/* ===== CUSTOM ICONS (Tooth & Animated Wave) == */
/* ============================================= */
function ToothIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M12 2C9.5 2 7.5 3 6.5 5C5.5 7 5 9 5.5 11C6 13 6.5 15 7 17C7.5 19 8 21 9.5 21C11 21 11 19 12 19C13 19 13 21 14.5 21C16 21 16.5 19 17 17C17.5 15 18 13 18.5 11C19 9 18.5 7 17.5 5C16.5 3 14.5 2 12 2Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SoundwaveIcon({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="4" y="8" width="2" height="8" rx="1" fill="currentColor" className="animate-[pulse_1s_ease-in-out_infinite]" />
      <rect x="8" y="5" width="2" height="14" rx="1" fill="currentColor" className="animate-[pulse_1.2s_ease-in-out_infinite_0.2s]" />
      <rect x="12" y="3" width="2" height="18" rx="1" fill="currentColor" className="animate-[pulse_0.8s_ease-in-out_infinite_0.4s]" />
      <rect x="16" y="6" width="2" height="12" rx="1" fill="currentColor" className="animate-[pulse_1.1s_ease-in-out_infinite_0.1s]" />
      <rect x="20" y="9" width="2" height="6" rx="1" fill="currentColor" className="animate-[pulse_0.9s_ease-in-out_infinite_0.3s]" />
    </svg>
  );
}

/* ============================================= */
/* ===== RIGHT SIDE: SMART FEATURES CARD ======= */
/* ============================================= */
function SmartFeaturesCard() {
  const features = [
    { icon: <MessageCircleIcon className="w-[22px] h-[22px] text-[#00E5FF]" strokeWidth={1.5} />, title: "Instant Answers", sub: "Get immediate responses" },
    { icon: <CalendarIcon className="w-[22px] h-[22px] text-[#00E5FF]" strokeWidth={1.5} />, title: "Smart Booking", sub: "Book appointments easily" },
    { icon: <ToothIcon className="w-[22px] h-[22px] text-[#00E5FF]" />, title: "Personalized Care", sub: "AI tailored recommendations" },
    { icon: <HeadphonesIcon className="w-[22px] h-[22px] text-[#00E5FF]" strokeWidth={1.5} />, title: "24/7 Support", sub: "Always there to help" },
  ];

  return (
    <div className="relative group">
      
      {/* --- NEON EDGE GLARE (The bright cyan line on the right border) --- */}
      <div
        className="absolute z-20 top pointer-events-none "
        style={{
          top: "15%",
          right: "-1px", /* Positioning it exactly over the right border */
          width: "2px",
          height: "40%",
          /* The sharp bright core */
          background: "linear-gradient(to bottom, transparent, rgba(255,255,255,0.9) 25%, #00E5FF 50%, rgba(255,255,255,0.9) 75%, transparent)",
          /* The outer glowing aura */
          boxShadow: "0 0 15px 2px #00E5FF, 0 0 35px 5px rgba(0, 229, 255, 0.4)",
        }}
      />

      {/* --- WIDE BLUE BLEED (Soft glow behind the card on the right) --- */}
      <div
        className="absolute z-10 pointer-events-none"
        style={{
          top: "10%",
          right: "-30px",
          width: "60px",
          height: "60%",
          background: "radial-gradient(ellipse at right center, rgba(0, 229, 255, 0.25) 0%, transparent 70%)",
          filter: "blur(15px)",
        }}
      />

      {/* --- MAIN CARD BODY --- */}
      <div
        className="relative z-[15] w-[340px] xl:w-[360px] rounded-[28px] p-[30px] transition-transform duration-500 hover:-translate-y-[2px]"
        style={{
          /* Deep Frosted Dark Blue Background */
          background: "linear-gradient(135deg, rgba(16, 19, 46, 0.6) 0%, rgba(12, 14, 35, 0.75) 100%)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          
          /* === THE 3D GLASS BORDERS (Exact Match) === */
          /* Bright top edge catching light */
          borderTop: "1px solid rgba(255, 255, 255, 0.25)",
          /* Softer left edge highlight */
          borderLeft: "1px solid rgba(255, 255, 255, 0.15)",
          /* Dark bottom edge creating shadow thickness */
          borderBottom: "1px solid rgba(0, 0, 0, 0.9)",
          /* Dark right edge, blending into the background */
          borderRight: "1px solid rgba(0, 0, 0, 0.6)",
          
          /* Box Shadow: Massive drop shadow + White inner highlight lip */
          boxShadow: "0 40px 80px rgba(0,0,0,0.6), 0 15px 25px rgba(0,0,0,0.4), inset 0 1px 1px rgba(255,255,255,0.08)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-[28px]">
          <SparklesIcon className="w-[18px] h-[18px] text-[#D946EF]" strokeWidth={2.5} />
          <span className="text-white font-semibold text-[15.5px] tracking-wide">Smart Features</span>
        </div>

        {/* List Items */}
        <div className="space-y-[24px]">
          {features.map((f, i) => (
            <div key={i} className="flex items-center gap-[18px]">
              
              {/* Icon Box: Jelly Gradient + Inner Glow */}
              <div
                className="w-[46px] h-[46px] rounded-[14px] flex items-center justify-center shrink-0 relative overflow-hidden"
                style={{
                  background: "linear-gradient(180deg, rgba(0, 229, 255, 0.15) 0%, rgba(0, 229, 255, 0.0) 100%)",
                  border: "1px solid rgba(0, 229, 255, 0.2)",
                  boxShadow: "inset 0 0 15px rgba(0, 229, 255, 0.15), 0 4px 10px rgba(0,0,0,0.25)",
                }}
              >
                {/* Tiny top border highlight inside the icon box */}
                <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.4)] to-transparent opacity-60" />
                {f.icon}
              </div>

              {/* Text */}
              <div className="min-w-0">
                <p className="text-[#FFFFFF] font-semibold text-[14px] leading-tight tracking-[0.01em]">{f.title}</p>
                <p className="text-[#828B9E] text-[12px] mt-[5px] leading-tight font-medium tracking-wide">{f.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

/* ============================================= */
/* ===== RIGHT SIDE: AVAILABLE 24/7 CARD ======= */
/* ============================================= */
function AvailableCard() {
  return (
    <div
      className="w-[300px] rounded-[22px] p-[24px] mt-[24px] transition-transform duration-500 hover:-translate-y-[2px]"
      style={{
        background: "linear-gradient(135deg, rgba(16, 19, 46, 0.6) 0%, rgba(12, 14, 35, 0.75) 100%)",
        backdropFilter: "blur(40px)",
        WebkitBackdropFilter: "blur(40px)",
        
        /* 3D Glass Borders - This card has a subtle cyan tint on the border in the image */
        borderTop: "1px solid rgba(255, 255, 255, 0.2)",
        borderLeft: "1px solid rgba(0, 229, 255, 0.15)", /* Cyan tint on left edge */
        borderBottom: "1px solid rgba(0, 0, 0, 0.8)",
        borderRight: "1px solid rgba(0, 0, 0, 0.6)",
        
        boxShadow: "0 30px 60px rgba(0,0,0,0.5), 0 10px 20px rgba(0,0,0,0.3), inset 0 1px 1px rgba(255,255,255,0.08)",
      }}
    >
      <div className="space-y-[14px]">
        <div>
          <p className="text-[#FFFFFF] font-semibold text-[15px] tracking-wide">Available 24/7</p>
          <p className="text-[#828B9E] text-[12.5px] mt-[5px] leading-relaxed font-medium tracking-wide">Your dental health, our priority</p>
        </div>

        {/* Green Status Indicator */}
        <div className="flex items-center gap-[10px]">
          <span className="relative flex h-[10px] w-[10px]">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-60" />
            <span
              className="relative inline-flex rounded-full h-[10px] w-[10px] bg-[#00FF66]"
              style={{ boxShadow: "0 0 12px #00FF66, 0 0 25px rgba(0, 255, 102, 0.4)" }}
            />
          </span>
          <span className="text-[13px] font-bold tracking-wider" style={{ color: "#00FF66" }}>Online Now</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================= */
/* ===== MAIN HERO COMPONENT =================== */
/* ============================================= */
export default function Hero() {
  return (
    <section className="relative w-full min-h-screen xl:h-[900px] bg-[#070815] overflow-hidden font-sans text-white flex flex-col">
      
      {/* --- BACKGROUND LAYER (Pure CSS Spirals & Glows) --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Subtle Curved Spiral Rings */}
        <div 
          className="absolute inset-0 z-[1] opacity-60"
          style={{
            backgroundImage: `url("data:image/svg+xml;charset=utf-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25'%3E%3Cdefs%3E%3CradialGradient id='g' cx='50%25' cy='70%25' r='50%25'%3E%3Cstop offset='0%25' stop-color='white' stop-opacity='1'/%3E%3Cstop offset='80%25' stop-color='white' stop-opacity='0.15'/%3E%3Cstop offset='100%25' stop-color='white' stop-opacity='0'/%3E%3C/radialGradient%3E%3Cmask id='m'%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3C/mask%3E%3C/defs%3E%3Cg stroke='rgba(0, 210, 255, 0.05)' stroke-width='1.5' fill='none' mask='url(%23m)'%3E%3Cellipse cx='50%25' cy='80%25' rx='30vw' ry='20vw'/%3E%3Cellipse cx='50%25' cy='80%25' rx='45vw' ry='30vw'/%3E%3Cellipse cx='50%25' cy='80%25' rx='60vw' ry='40vw'/%3E%3Cellipse cx='50%25' cy='80%25' rx='75vw' ry='50vw'/%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: 'cover', backgroundPosition: 'center bottom',
          }}
        />
        {/* Top Right Purple Glow */}
        <div className="absolute -top-[10%] -right-[5%] w-[45vw] h-[45vw] bg-[#8B5CF6]/15 rounded-full blur-[130px] z-[2]" />
        {/* Center Bottom Cyan Glow (Behind Character) */}
        <div className="absolute -bottom-[10%] left-1/2 -translate-x-1/2 w-[60vw] h-[60vw] bg-[#00D2FF]/10 rounded-full blur-[120px] z-[2]" />
      </div>

      {/* --- FLOATING NAVBAR --- */}
      <header className="relative z-50 w-full px-6 pt-6 mx-auto max-w-[1440px]">
        <div className="flex items-center justify-between px-6 py-4 bg-white/[0.02] backdrop-blur-2xl border border-white/10 rounded-2xl shadow-[0_10px_30px_rgba(0,0,0,0.3)]">
          <div className="flex items-center gap-3">
            <div className="relative">
              <div className="absolute inset-0 bg-[#00D2FF] blur-md opacity-40 rounded-full" />
              <ToothIcon className="w-8 h-8 text-[#00D2FF] relative z-10 drop-shadow-[0_0_10px_rgba(0,210,255,0.8)]" />
            </div>
            <div className="leading-tight">
              <h2 className="font-bold text-lg tracking-wide text-white">DentWise</h2>
              <p className="text-[10px] text-[#A1A1AA] tracking-wider uppercase">AI Dental Assistant</p>
            </div>
          </div>
          <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-[#A1A1AA]">
            {["How it Works", "Pricing", "About", "FAQ", "Blog"].map((l) => (
              <a key={l} href="#" className="hover:text-white transition-colors">{l}</a>
            ))}
          </nav>
          <div className="flex items-center gap-5">
            <button className="text-sm font-medium text-[#A1A1AA] hover:text-white">Log In</button>
            <button className="px-6 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-[#4FACFE] to-[#A18CD1] rounded-xl hover:scale-105 transition-transform shadow-[0_0_20px_rgba(79,172,254,0.3)]">
              Sign up
            </button>
          </div>
        </div>
      </header>

      {/* --- MAIN LAYOUT (Absolute positioned layers for perfect overlap) --- */}
      <div className="relative flex-1 w-full max-w-[1440px] mx-auto px-6 mt-10 lg:mt-0">
        
        {/* LEFT COLUMN: Text Content */}
        <div className="lg:absolute lg:top-1/2 lg:-translate-y-[55%] left-6 max-w-[550px] z-30 pt-10 lg:pt-0 space-y-7 pointer-events-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-900/20 border border-[#00D2FF]/30 backdrop-blur-md">
            <SparklesIcon className="w-4 h-4 text-[#00D2FF]" />
            <span className="text-xs font-semibold text-[#00D2FF] tracking-widest uppercase">AI-Powered Dental Assistant</span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[72px] font-extrabold leading-[1.05] tracking-tight text-white drop-shadow-xl">
            Your Dental <br /> Questions, <br />
            <span className="bg-gradient-to-r from-[#00D2FF] to-[#D946EF] bg-clip-text text-transparent">Answered Instantly.</span>
          </h1>
          <p className="text-[16px] text-[#A1A1AA] leading-relaxed max-w-[480px]">
            Get instant answers, book appointments, and receive personalized care recommendations from our AI dental assistant.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-2">
            <button className="flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white rounded-xl bg-gradient-to-r from-[#4FACFE] to-[#A18CD1] transition-transform hover:scale-105 shadow-[0_0_20px_rgba(79,172,254,0.3)]">
              <SoundwaveIcon className="w-5 h-5" /> Try voice Agent
            </button>
            <button className="flex items-center justify-center gap-2.5 px-8 py-3.5 text-sm font-semibold text-white rounded-xl bg-white/[0.03] border border-white/10 backdrop-blur-md transition-colors hover:bg-white/10">
              <CalendarIcon className="w-4 h-4" /> Book Appointment
            </button>
          </div>
          <div className="flex items-center gap-4 pt-4">
            <div className="flex -space-x-3">
              {["https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face", "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=100&h=100&fit=crop&crop=face", "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&h=100&fit=crop&crop=face"].map((src, i) => (
                <Image key={i} src={src} alt="User" width={36} height={36} className="w-9 h-9 rounded-full border-[3px] border-[#070815] object-cover" />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => <StarIcon key={s} className="w-4 h-4 fill-[#EAB308] text-[#EAB308]" />)}
            </div>
            <span className="text-xs text-[#A1A1AA] font-medium tracking-wide">4.9/5 | 1,220+ patients</span>
          </div>
        </div>

        {/* CENTER COLUMN: The 3D Character */}
        <div className="relative lg:absolute lg:bottom-[-20px] lg:left-[50%] lg:-translate-x-1/2 w-[100%] max-w-[600px] h-[500px] lg:h-[800px] mx-auto z-20 pointer-events-none mt-16 lg:mt-0">
          <Image
            src="/hero.png" // MUST BE YOUR TRANSPARENT PNG
            alt="AI Assistant"
            fill
            className="object-contain object-bottom drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
            priority
          />
        </div>

        {/* RIGHT COLUMN: The 3D Glass Cards */}
        <div className="lg:absolute lg:top-1/2 lg:-translate-y-[52%] right-[5%] z-30 pointer-events-auto mt-10 lg:mt-0 pb-16 lg:pb-0">
          <SmartFeaturesCard />
          {/* Card offset to the left just like the image */}
          <div className="lg:-ml-12">
            <AvailableCard />
          </div>
        </div>

      </div>
    </section>
  );
}