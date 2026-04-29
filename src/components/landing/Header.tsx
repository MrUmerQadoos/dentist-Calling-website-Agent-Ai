/* ============================================= */
/* ===== HEADER (Landing Page) ================ */
/* ============================================= */
"use client";

import { SignInButton, SignUpButton } from "@clerk/nextjs";
import Link from "next/link";
import { ArrowUpRightIcon, SparklesIcon } from "lucide-react";
import { ToothLogoIcon } from "../ui/ToothLogoIcon";

const navLinks = [
  "How it Works",
  "Pricing",
  "About",
  "FAQ",
  "Blog",
];

function Header() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-70 pt-5 px-4 sm:px-6 animate-drop-down">
      <div
        className="mx-auto rounded-2xl px-4 sm:px-6 py-3 relative overflow-hidden"
        style={{
          width: "calc(100% - 2rem)",
          maxWidth: "1440px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          boxShadow:
            "0 12px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Subtle top gradient line */}
        <div
          className="absolute top-0 left-[10%] right-[10%] h-[1px] pointer-events-none"
          style={{
            background:
              "linear-gradient(to right, transparent, rgba(0,210,255,0.3), rgba(168,85,247,0.2), transparent)",
          }}
        />

        <div className="relative z-10 flex justify-between items-center">
          {/* LEFT: Brand */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
          >
            <div className="relative">
              <div
                className="absolute rounded-xl pointer-events-none transition-opacity duration-500 opacity-60 group-hover:opacity-100"
                style={{
                  inset: "-7px",
                  background: "rgba(0,210,255,0.3)",
                  filter: "blur(14px)",
                }}
              />
              <div
                className="relative z-10 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110 group-hover:rotate-[8deg]"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,210,255,0.2), rgba(0,210,255,0.05))",
                  border: "1px solid rgba(0,210,255,0.3)",
                  boxShadow: "0 0 12px rgba(0,210,255,0.3)",
                }}
              >
                <ToothLogoIcon className="w-5 h-5" color="#00D2FF" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-white text-[17px] leading-none tracking-tight transition-colors duration-300 group-hover:text-[#00D2FF]">
                DentWise
              </span>
              <span
                className="text-[9px] leading-none mt-[3px] font-bold uppercase tracking-[0.15em]"
                style={{ color: "#52525B" }}
              >
                AI Dental Assistant
              </span>
            </div>
          </Link>

          {/* CENTER: Nav Links */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link}
                href="#"
                className="relative px-3.5 py-[7px] rounded-[9px] text-[13.5px] font-medium transition-all duration-300 hover:scale-[1.05]"
                style={{ color: "#A1A1AA" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "#fff";
                  el.style.background = "rgba(255,255,255,0.05)";
                  el.style.boxShadow = "0 0 12px rgba(255,255,255,0.03)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "#A1A1AA";
                  el.style.background = "transparent";
                  el.style.boxShadow = "none";
                }}
              >
                {link}
              </a>
            ))}
          </div>

          {/* RIGHT: Actions */}
          <div className="flex items-center gap-4 shrink-0">
            {/* Log In */}
            <SignInButton mode="modal">
              <button
                className="relative text-[13.5px] font-medium transition-all duration-300 hover:scale-[1.05] hidden sm:block group/login"
                style={{ color: "#A1A1AA" }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.color = "#A1A1AA";
                }}
              >
                Log In
                <div
                  className="absolute -bottom-[2px] left-0 w-0 h-[1.5px] group-hover/login:w-full transition-all duration-300"
                  style={{
                    background:
                      "linear-gradient(to right, #00D2FF, #7C3AED)",
                  }}
                />
              </button>
            </SignInButton>

            {/* Divider */}
            <div
              className="hidden sm:block h-5"
              style={{
                width: "1px",
                background: "rgba(255,255,255,0.08)",
              }}
            />

            {/* Sign Up */}
            <div className="relative">
              {/* Glow behind button */}
              <div
                className="absolute pointer-events-none rounded-2xl transition-opacity duration-500 opacity-60 hover:opacity-100"
                style={{
                  inset: "-8px",
                  background:
                    "linear-gradient(135deg, rgba(0,210,255,0.2), rgba(217,70,239,0.3))",
                  filter: "blur(18px)",
                }}
              />
              <SignUpButton mode="modal">
                <button
                  className="relative z-10 inline-flex items-center gap-2 text-white font-semibold rounded-xl px-5 py-[10px] text-[13px] transition-all duration-300 hover:scale-[1.06] active:scale-[0.97] hover:shadow-[0_6px_30px_rgba(79,172,254,0.4)]"
                  style={{
                    background:
                      "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
                    boxShadow:
                      "0 4px 24px rgba(79,172,254,0.3), 0 2px 12px rgba(161,140,209,0.25)",
                  }}
                >
                  <SparklesIcon className="w-3.5 h-3.5" strokeWidth={2} />
                  Sign up
                  <ArrowUpRightIcon
                    className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                    strokeWidth={2.5}
                  />
                </button>
              </SignUpButton>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Header;