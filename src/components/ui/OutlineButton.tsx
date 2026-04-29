"use client";

import React from "react";

interface OutlineButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
}

export function OutlineButton({
  children,
  onClick,
  className = "",
  size = "md",
}: OutlineButtonProps) {
  const sizeStyles = {
    sm: "px-5 py-[10px] text-[13px] gap-2",
    md: "px-7 py-[14px] text-[14px] gap-3",
    lg: "px-8 py-[16px] text-[15px] gap-3",
  };

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center justify-center font-semibold rounded-[14px] text-white transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] hover:bg-white/[0.06] ${sizeStyles[size]} ${className}`}
      style={{
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.12)",
        backdropFilter: "blur(14px)",
        WebkitBackdropFilter: "blur(14px)",
      }}
    >
      {children}
    </button>
  );
}