"use client";

import React from "react";

interface IconBoxProps {
  children: React.ReactNode;
  glow: string;
  border: string;
  size?: "sm" | "md" | "lg";
}

export function IconBox({
  children,
  glow,
  border,
  size = "md",
}: IconBoxProps) {
  const sizeMap = {
    sm: "w-9 h-9 rounded-[10px]",
    md: "w-[44px] h-[44px] rounded-[13px]",
    lg: "w-[48px] h-[48px] rounded-[14px]",
  };

  return (
    <div
      className={`${sizeMap[size]} flex items-center justify-center shrink-0 relative overflow-hidden`}
      style={{
        background: `linear-gradient(180deg, ${glow} 0%, transparent 100%)`,
        border: `1px solid ${border}`,
        boxShadow: `inset 0 0 16px ${glow}, 0 4px 12px rgba(0,0,0,0.3)`,
      }}
    >
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/30 to-transparent" />
      {children}
    </div>
  );
}