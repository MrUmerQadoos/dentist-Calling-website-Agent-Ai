/* ============================================= */
/* ===== FOOTER =============================== */
/* ============================================= */
"use client";

import Link from "next/link";
import {
  ArrowUpRightIcon,
  HeartIcon,
  SparklesIcon,
} from "lucide-react";
import { ToothLogoIcon } from "../ui/ToothLogoIcon";

/* ===== LINK GROUP DATA ===== */
const footerLinks = {
  Product: [
    { label: "How it works", href: "#" },
    { label: "Pricing", href: "#" },
    { label: "FAQ", href: "#" },
  ],
  Support: [
    { label: "Help center", href: "#" },
    { label: "Contact us", href: "#" },
    { label: "Status", href: "#" },
  ],
  Legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
    { label: "Security", href: "#" },
  ],
};

/* ===== FOOTER COMPONENT ===== */
export default function Footer() {
  return (
    <footer className="w-full px-4 sm:px-6 pb-6 pt-4">
      <div
        className="mx-auto rounded-2xl px-6 sm:px-10 py-10 relative overflow-hidden"
        style={{
          maxWidth: "1440px",
          background: "rgba(255,255,255,0.02)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          boxShadow:
            "0 12px 48px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute pointer-events-none"
          style={{
            top: "-30%",
            left: "-10%",
            width: "40%",
            height: "60%",
            background: "rgba(0,210,255,0.03)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
        <div
          className="absolute pointer-events-none"
          style={{
            bottom: "-30%",
            right: "-10%",
            width: "35%",
            height: "50%",
            background: "rgba(168,85,247,0.03)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />

        {/* ═══ TOP: Brand + Link Columns ═══ */}
        <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10">
          {/* Brand Column */}
          <div className="flex flex-col">
            <Link
              href="/"
              className="flex items-center gap-3 mb-4 shrink-0 group"
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
                <span className="font-bold text-white text-[17px] leading-none tracking-tight">
                  DentWise
                </span>
                <span
                  className="text-[9px] leading-none mt-[3px] font-bold uppercase tracking-[0.15em]"
                  style={{ color: "#6B6B80" }}
                >
                  AI Dental
                </span>
              </div>
            </Link>
            <p
              className="font-medium leading-relaxed max-w-[280px] mb-5"
              style={{ fontSize: "13.5px", color: "#A1A1AA" }}
            >
              AI-powered dental assistance that actually helps you smile brighter.
            </p>

            {/* Mini CTA */}
            <Link href="/dashboard">
              <button
                className="inline-flex items-center gap-2 px-4 py-[8px] rounded-[10px] font-semibold text-white text-[12px] transition-all duration-300 hover:scale-[1.05] active:scale-[0.97] group/btn"
                style={{
                  background:
                    "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
                  boxShadow:
                    "0 4px 16px rgba(79,172,254,0.2), 0 2px 6px rgba(124,58,237,0.12)",
                }}
              >
                <SparklesIcon className="w-3.5 h-3.5" strokeWidth={2} />
                Get Started
                <ArrowUpRightIcon
                  className="w-3 h-3 transition-transform duration-300 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
                  strokeWidth={2.5}
                />
              </button>
            </Link>
          </div>

          {/* Link Columns */}
          {Object.entries(footerLinks).map(([title, links], colIndex) => (
            <div key={title} className="flex flex-col">
              <h4
                className="font-bold text-white text-[13px] mb-4 uppercase tracking-[0.12em]"
                style={{
                  background:
                    "linear-gradient(to right, #9CA0B5, #6B6B80)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                {title}
              </h4>
              <ul className="space-y-2.5">
                {links.map((link, i) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="group/link inline-flex items-center gap-1.5 text-[13.5px] font-medium transition-all duration-300 hover:translate-x-1"
                      style={{ color: "#A1A1AA" }}
                      onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.color = "#00D2FF";
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.color = "#A1A1AA";
                      }}
                    >
                      <span
                        className="w-0 group-hover/link:w-1.5 h-0 group-hover/link:h-1.5 rounded-full transition-all duration-300"
                        style={{
                          background: "#00D2FF",
                          boxShadow: "0 0 6px rgba(0,210,255,0.4)",
                        }}
                      />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* ═══ DIVIDER ═══ */}
        <div
          className="relative z-10 w-full mb-6"
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, transparent, rgba(0,210,255,0.15), rgba(168,85,247,0.1), transparent)",
          }}
        />

        {/* ═══ BOTTOM: Copyright ═══ */}
        <div className="relative z-10 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p
            className="text-[12px] font-medium text-center sm:text-left"
            style={{ color: "#52525B" }}
          >
            © 2026 DentWise. Built with{" "}
            <HeartIcon
              className="inline w-3 h-3 mx-0.5"
              style={{ color: "#D946EF", fill: "#D946EF" }}
            />{" "}
            by Umer Qadoos. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {["Twitter", "GitHub", "LinkedIn"].map((social) => (
              <a
                key={social}
                href="#"
                className="text-[11px] font-semibold uppercase tracking-wider transition-all duration-300 hover:scale-110"
                style={{ color: "#52525B" }}
                onMouseEnter={(e) => {
                  (e.target as HTMLElement).style.color = "#00D2FF";
                  (e.target as HTMLElement).style.textShadow =
                    "0 0 8px rgba(0,210,255,0.3)";
                }}
                onMouseLeave={(e) => {
                  (e.target as HTMLElement).style.color = "#52525B";
                  (e.target as HTMLElement).style.textShadow = "none";
                }}
              >
                {social}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}