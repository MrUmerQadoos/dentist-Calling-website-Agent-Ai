/* ============================================= */
/* ===== DENTAL HEALTH OVERVIEW =============== */
/* ============================================= */
import { getUserAppointmentStats } from "@/lib/actions/appointments";
import { currentUser } from "@clerk/nextjs/server";
import { format } from "date-fns";
import Link from "next/link";
import {
  CheckCircleIcon,
  CalendarCheckIcon,
  ClockIcon,
  ArrowRightIcon,
  MicIcon,
  CalendarIcon,
} from "lucide-react";
import { ToothLogoIcon } from "../ui/ToothLogoIcon";

async function DentalHealthOverview() {
  const appointmentStats = await getUserAppointmentStats();
  const user = await currentUser();

  const stats = [
    {
      value: appointmentStats.completedAppointments,
      label: "Completed",
      sublabel: "Visits done",
      color: "#00D2FF",
      glow: "rgba(0,210,255,0.08)",
      border: "rgba(0,210,255,0.15)",
      iconBg: "rgba(0,210,255,0.1)",
      iconBorder: "rgba(0,210,255,0.2)",
      icon: <CheckCircleIcon className="w-4 h-4" style={{ color: "#00D2FF" }} strokeWidth={1.5} />,
    },
    {
      value: appointmentStats.totalAppointments,
      label: "Total",
      sublabel: "All appointments",
      color: "#A78BFA",
      glow: "rgba(167,139,250,0.08)",
      border: "rgba(167,139,250,0.15)",
      iconBg: "rgba(167,139,250,0.1)",
      iconBorder: "rgba(167,139,250,0.2)",
      icon: <CalendarCheckIcon className="w-4 h-4" style={{ color: "#A78BFA" }} strokeWidth={1.5} />,
    },
    {
      value: format(new Date(user?.createdAt!), "MMM yyyy"),
      label: "Member Since",
      sublabel: "With DentWise",
      color: "#D946EF",
      glow: "rgba(217,70,239,0.08)",
      border: "rgba(217,70,239,0.15)",
      iconBg: "rgba(217,70,239,0.1)",
      iconBorder: "rgba(217,70,239,0.2)",
      icon: <ClockIcon className="w-4 h-4" style={{ color: "#D946EF" }} strokeWidth={1.5} />,
    },
  ];

  return (
    <div
      className="lg:col-span-2 relative h-full animate-fade-in-up"
      style={{ animationDelay: "0.15s" }}
    >
      {/* Border glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-1px",
          borderRadius: "24px",
          background:
            "linear-gradient(135deg, rgba(0,210,255,0.18), rgba(0,210,255,0.02), rgba(217,70,239,0.12))",
          filter: "blur(0.5px)",
          opacity: 0.35,
        }}
      />

      <div
        className="relative z-10 h-full rounded-[24px] p-6 flex flex-col"
        style={{
          background: "rgba(13,20,36,0.6)",
          backdropFilter: "blur(32px)",
          WebkitBackdropFilter: "blur(32px)",
          border: "1px solid rgba(255,255,255,0.07)",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.35), inset 0 1px 0 rgba(255,255,255,0.03)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-1.5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: "rgba(0,210,255,0.1)",
              border: "1px solid rgba(0,210,255,0.2)",
            }}
          >
            <ToothLogoIcon className="w-4 h-4" color="#00D2FF" />
          </div>
          <span
            className="font-bold text-white"
            style={{ fontSize: "16px" }}
          >
            Your Dental Health
          </span>
        </div>
        <p
          className="font-medium mb-5"
          style={{ fontSize: "12.5px", color: "#6B6B80" }}
        >
          Track your dental care journey at a glance
        </p>

        {/* Stats grid */}
        <div className="grid grid-cols-3 gap-3 mb-5">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="relative rounded-xl p-3.5 group cursor-default"
              style={{
                background: stat.glow,
                border: `1px solid ${stat.border}`,
                transition: "all 0.3s ease",
              }}
            >
              {/* Icon in top right */}
              <div
                className="absolute top-2.5 right-2.5 w-6 h-6 rounded-md flex items-center justify-center opacity-40 group-hover:opacity-70 transition-opacity duration-300"
                style={{
                  background: stat.iconBg,
                  border: `1px solid ${stat.iconBorder}`,
                }}
              >
                {stat.icon}
              </div>

              <div
                className="font-extrabold mb-0.5"
                style={{
                  fontSize: "clamp(20px, 2.2vw, 26px)",
                  color: stat.color,
                  lineHeight: "1.1",
                }}
              >
                {stat.value}
              </div>
              <div
                className="font-semibold"
                style={{ fontSize: "12px", color: "#fff" }}
              >
                {stat.label}
              </div>
              <div
                className="font-medium"
                style={{ fontSize: "10px", color: "#6B6B80" }}
              >
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="mb-5"
          style={{
            height: "1px",
            background:
              "linear-gradient(to right, rgba(0,210,255,0.12), rgba(217,70,239,0.08), transparent)",
          }}
        />

        {/* CTA section */}
        <div
          className="rounded-xl p-4 flex-1 flex flex-col justify-center"
          style={{
            background:
              "linear-gradient(135deg, rgba(0,210,255,0.04), rgba(168,85,247,0.03))",
            border: "1px solid rgba(0,210,255,0.1)",
          }}
        >
          <div className="flex items-start gap-3">
            <div
              className="w-9 h-9 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: "rgba(0,210,255,0.1)",
                border: "1px solid rgba(0,210,255,0.2)",
              }}
            >
              <ToothLogoIcon className="w-4 h-4" color="#00D2FF" />
            </div>
            <div className="flex-1">
              <h4
                className="font-bold mb-1"
                style={{ fontSize: "14px", color: "#00D2FF" }}
              >
                Ready for your next step?
              </h4>
              <p
                className="font-medium mb-3"
                style={{
                  fontSize: "12px",
                  color: "#9CA0B5",
                  lineHeight: "1.6",
                }}
              >
                Book an appointment or chat with AI for instant dental guidance.
              </p>
              <div className="flex items-center gap-2.5">
                <Link href="/voice">
                  <button
                    className="inline-flex items-center gap-1.5 px-3.5 py-[7px] rounded-[9px] font-semibold text-white text-[11.5px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
                    style={{
                      background:
                        "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
                      boxShadow:
                        "0 4px 14px rgba(79,172,254,0.18), 0 2px 4px rgba(124,58,237,0.1)",
                    }}
                  >
                    <MicIcon className="w-3 h-3" strokeWidth={2} />
                    Try AI
                    <ArrowRightIcon className="w-3 h-3" strokeWidth={2.5} />
                  </button>
                </Link>
                <Link href="/appointments">
                  <button
                    className="inline-flex items-center gap-1.5 px-3.5 py-[7px] rounded-[9px] font-semibold text-white text-[11.5px] transition-all duration-300 hover:scale-[1.03] hover:bg-white/[0.06]"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <CalendarIcon className="w-3 h-3" strokeWidth={2} />
                    Book Now
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DentalHealthOverview;