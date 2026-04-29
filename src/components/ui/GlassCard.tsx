"use client";

import React from "react";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  glowColorSecondary?: string;
  rounded?: string;
  hoverEffect?: boolean;
  padding?: string;
}

export function GlassCard({
  children,
  className = "",
  glowColor = "rgba(0,210,255,0.35)",
  glowColorSecondary = "rgba(167,139,250,0.25)",
  rounded = "24px",
  hoverEffect = true,
  padding = "28px",
}: GlassCardProps) {
  return (
    <div className={`relative group ${className}`}>
      {/* Tight neon border glow */}
      <div
        className="absolute pointer-events-none transition-opacity duration-500 opacity-50 group-hover:opacity-80"
        style={{
          inset: "-1px",
          borderRadius: rounded,
          background: `linear-gradient(135deg, ${glowColor}, ${glowColorSecondary}, ${glowColor})`,
          filter: "blur(1px)",
        }}
      />
      {/* Wide soft bleed */}
      <div
        className="absolute pointer-events-none transition-opacity duration-500 opacity-0 group-hover:opacity-25"
        style={{
          inset: "-8px",
          borderRadius: `calc(${rounded} + 8px)`,
          background: `radial-gradient(ellipse at center, ${glowColor}, transparent 70%)`,
          filter: "blur(20px)",
        }}
      />
      {/* Card body */}
      <div
        className={`relative z-10 h-full flex flex-col transition-transform duration-500 ${
          hoverEffect ? "group-hover:-translate-y-[2px]" : ""
        }`}
        style={{
          borderRadius: rounded,
          padding: padding,
          background:
            "linear-gradient(135deg, rgba(13,20,40,0.85) 0%, rgba(10,13,30,0.9) 100%)",
          backdropFilter: "blur(48px)",
          WebkitBackdropFilter: "blur(48px)",
          borderTop: "1px solid rgba(255,255,255,0.16)",
          borderLeft: "1px solid rgba(255,255,255,0.10)",
          borderBottom: "1px solid rgba(0,0,0,0.65)",
          borderRight: "1px solid rgba(0,0,0,0.45)",
          boxShadow:
            "0 30px 60px rgba(0,0,0,0.55), 0 12px 24px rgba(0,0,0,0.35), inset 0 1px 1px rgba(255,255,255,0.07), inset 0 0 0 1px rgba(255,255,255,0.02)",
        }}
      >
        {children}
      </div>
    </div>
  );
}