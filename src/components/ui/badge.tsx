"use client";

import React from "react";

interface BadgeProps {
  children: React.ReactNode;
  variant?: "cyan" | "purple" | "green" | "neutral";
  size?: "sm" | "md";
  icon?: React.ReactNode;
}

export function Badge({
  children,
  variant = "neutral",
  size = "sm",
  icon,
}: BadgeProps) {
  const variantStyles = {
    cyan: {
      background: "rgba(0,210,255,0.08)",
      border: "1px solid rgba(0,210,255,0.22)",
      color: "#67E8F9",
    },
    purple: {
      background: "rgba(217,70,239,0.08)",
      border: "1px solid rgba(217,70,239,0.22)",
      color: "#E879F9",
    },
    green: {
      background: "rgba(0,255,102,0.08)",
      border: "1px solid rgba(0,255,102,0.22)",
      color: "#00FF66",
    },
    neutral: {
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.10)",
      color: "#CBD5E1",
    },
  };

  const sizeStyles = {
    sm: "px-3 py-[5px] text-[11.5px] rounded-lg",
    md: "px-4 py-[7px] text-[12.5px] rounded-xl",
  };

  const s = variantStyles[variant];

  return (
    <span
      className={`inline-flex items-center gap-1.5 font-semibold tracking-wide ${sizeStyles[size]}`}
      style={{
        background: s.background,
        border: s.border,
        color: s.color,
      }}
    >
      {icon && <span>{icon}</span>}
      {children}
    </span>
  );
}