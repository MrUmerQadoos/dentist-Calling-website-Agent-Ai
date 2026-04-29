"use client";

import React from "react";

interface GradientButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit";
}

export function GradientButton({
  children,
  onClick,
  className = "",
  size = "md",
  type = "button",
}: GradientButtonProps) {
  const sizeStyles = {
    sm: "px-5 py-[10px] text-[13px] gap-2",
    md: "px-7 py-[14px] text-[14px] gap-3",
    lg: "px-8 py-[16px] text-[15px] gap-3",
  };

  return (
    <button
      type={type}
      onClick={onClick}
      className={`inline-flex items-center justify-center font-semibold rounded-[14px] text-white transition-all duration-300 hover:scale-[1.04] active:scale-[0.97] ${sizeStyles[size]} ${className}`}
      style={{
        background:
          "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
        boxShadow:
          "0 6px 30px rgba(79,172,254,0.3), 0 3px 15px rgba(124,58,237,0.15), 0 1px 4px rgba(0,0,0,0.3)",
      }}
    >
      {children}
    </button>
  );
}