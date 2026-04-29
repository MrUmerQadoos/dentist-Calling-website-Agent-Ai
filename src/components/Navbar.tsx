"use client";

import { UserButton, useUser } from "@clerk/nextjs";
import {
  CalendarIcon,
  CrownIcon,
  HomeIcon,
  MicIcon,
  SparklesIcon,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ToothLogoIcon } from "./ui/ToothLogoIcon";

const navItems = [
  { href: "/dashboard", icon: HomeIcon, label: "Dashboard" },
  { href: "/appointments", icon: CalendarIcon, label: "Appointments" },
  { href: "/voice", icon: MicIcon, label: "Voice" },
  { href: "/pro", icon: CrownIcon, label: "Pro" },
];

function Navbar() {
  const { user } = useUser();
  const pathname = usePathname();

  return (
    <nav
      className="fixed top-0 left-0 right-0 z-50 h-16 px-4 sm:px-6"
      style={{
        background: "rgba(7,8,21,0.85)",
        backdropFilter: "blur(24px)",
        WebkitBackdropFilter: "blur(24px)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        boxShadow: "0 4px 30px rgba(0,0,0,0.3)",
      }}
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center h-full">
        {/* Left: Logo + Navigation */}
        <div className="flex items-center gap-8">
          {/* Logo */}
          <Link href="/dashboard" className="flex items-center gap-2.5 group">
            <div className="relative">
              <div
                className="absolute rounded-xl pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  inset: "-6px",
                  background: "rgba(0,210,255,0.25)",
                  filter: "blur(12px)",
                }}
              />
              <div
                className="relative w-9 h-9 rounded-xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,210,255,0.2), rgba(0,210,255,0.05))",
                  border: "1px solid rgba(0,210,255,0.3)",
                  boxShadow: "0 0 12px rgba(0,210,255,0.25)",
                }}
              >
                <ToothLogoIcon className="w-5 h-5" color="#00D2FF" />
              </div>
            </div>
            <span
              className="font-bold text-white text-[17px] tracking-tight hidden sm:inline"
            >
              DentWise
            </span>
          </Link>

          {/* Navigation Links */}
          <div className="flex items-center gap-1.5">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              const Icon = item.icon;

              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="relative flex items-center gap-2 px-3 py-[7px] rounded-[10px] transition-all duration-300 hover:scale-[1.04]"
                  style={{
                    background: isActive
                      ? "rgba(0,210,255,0.08)"
                      : "transparent",
                    border: isActive
                      ? "1px solid rgba(0,210,255,0.15)"
                      : "1px solid transparent",
                    color: isActive ? "#00D2FF" : "#9CA0B5",
                    boxShadow: isActive
                      ? "0 0 12px rgba(0,210,255,0.06)"
                      : "none",
                  }}
                >
                  <Icon
                    className="w-4 h-4 transition-all duration-300"
                    strokeWidth={isActive ? 2 : 1.5}
                  />
                  <span
                    className="hidden md:inline font-semibold"
                    style={{ fontSize: "12.5px" }}
                  >
                    {item.label}
                  </span>

                  {/* Active dot indicator */}
                  {isActive && (
                    <div
                      className="absolute -bottom-[9px] left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{
                        background: "#00D2FF",
                        boxShadow: "0 0 6px rgba(0,210,255,0.6)",
                      }}
                    />
                  )}
                </Link>
              );
            })}
          </div>
        </div>

        {/* Right: User Info */}
        <div className="flex items-center gap-4">
          {/* User text info */}
          <div className="hidden lg:flex flex-col items-end">
            <span
              className="font-semibold text-white"
              style={{ fontSize: "13px" }}
            >
              {user?.firstName} {user?.lastName}
            </span>
            <span
              className="font-medium"
              style={{ fontSize: "11px", color: "#6B6B80" }}
            >
              {user?.emailAddresses?.[0]?.emailAddress}
            </span>
          </div>

          {/* Divider */}
          <div
            className="hidden lg:block h-8"
            style={{
              width: "1px",
              background: "rgba(255,255,255,0.08)",
            }}
          />

          {/* User Button with glow ring */}
          <div className="relative">
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-3px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(0,210,255,0.1), transparent 70%)",
                filter: "blur(4px)",
              }}
            />
            <UserButton
              afterSignOutUrl="/"
              appearance={{
                elements: {
                  avatarBox:
                    "w-9 h-9 ring-2 ring-white/10 transition-all duration-300 hover:ring-[#00D2FF]/40",
                },
              }}
            />
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;