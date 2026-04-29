/* ============================================= */
/* ===== MAIN ACTIONS ========================= */
/* ============================================= */
import { MessageSquareIcon, CalendarIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

function ActionCard({
  iconSrc,
  iconAlt,
  title,
  description,
  features,
  href,
  buttonText,
  buttonIcon,
  variant = "primary",
  delay = "0s",
}: {
  iconSrc: string;
  iconAlt: string;
  title: string;
  description: string;
  features: string[];
  href: string;
  buttonText: string;
  buttonIcon: React.ReactNode;
  variant?: "primary" | "secondary";
  delay?: string;
}) {
  const isPrimary = variant === "primary";

  return (
    <div
      className="relative h-full animate-fade-in-up group"
      style={{ animationDelay: delay }}
    >
      {/* Border glow */}
      <div
        className="absolute pointer-events-none transition-opacity duration-500 group-hover:opacity-100"
        style={{
          inset: "-1px",
          borderRadius: "24px",
          background: isPrimary
            ? "linear-gradient(135deg, rgba(0,210,255,0.3), rgba(0,210,255,0.05), rgba(0,210,255,0.3))"
            : "linear-gradient(135deg, rgba(217,70,239,0.3), rgba(168,85,247,0.05), rgba(217,70,239,0.3))",
          filter: "blur(0.5px)",
          opacity: 0.35,
        }}
      />
      {/* Hover glow bleed */}
      <div
        className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          inset: "-8px",
          borderRadius: "32px",
          background: isPrimary
            ? "radial-gradient(circle at 30% 30%, rgba(0,210,255,0.08), transparent 60%)"
            : "radial-gradient(circle at 70% 30%, rgba(217,70,239,0.08), transparent 60%)",
          filter: "blur(20px)",
        }}
      />

      <div
        className="relative z-10 h-full rounded-[24px] p-7 flex flex-col transition-all duration-300"
        style={{
          background: "rgba(13,20,36,0.65)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: "1px solid rgba(255,255,255,0.08)",
          boxShadow:
            "0 20px 40px rgba(0,0,0,0.4), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Icon + Title */}
        <div className="flex items-center gap-4 mb-6">
          <div
            className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110"
            style={{
              background: isPrimary
                ? "linear-gradient(135deg, rgba(0,210,255,0.15), rgba(0,210,255,0.05))"
                : "linear-gradient(135deg, rgba(217,70,239,0.15), rgba(168,85,247,0.05))",
              border: isPrimary
                ? "1px solid rgba(0,210,255,0.2)"
                : "1px solid rgba(217,70,239,0.2)",
              boxShadow: isPrimary
                ? "0 0 16px rgba(0,210,255,0.1)"
                : "0 0 16px rgba(217,70,239,0.1)",
            }}
          >
            <Image
              src={iconSrc}
              alt={iconAlt}
              width={28}
              height={28}
              className="w-7 h-7"
            />
          </div>
          <div>
            <h3
              className="font-bold text-white mb-1"
              style={{ fontSize: "20px", lineHeight: "1.2" }}
            >
              {title}
            </h3>
            <p style={{ fontSize: "13px", color: "#9CA0B5", lineHeight: "1.5" }}>
              {description}
            </p>
          </div>
        </div>

        {/* Features */}
        <div className="space-y-3 flex-1 mb-6">
          {features.map((feature, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="w-[6px] h-[6px] rounded-full shrink-0"
                style={{
                  background: isPrimary ? "#00D2FF" : "#D946EF",
                  boxShadow: isPrimary
                    ? "0 0 8px rgba(0,210,255,0.4)"
                    : "0 0 8px rgba(217,70,239,0.4)",
                }}
              />
              <span
                className="font-medium"
                style={{ fontSize: "13px", color: "#9CA0B5" }}
              >
                {feature}
              </span>
            </div>
          ))}
        </div>

        {/* Button */}
        <Link href={href} className="w-full">
          <button
            className="w-full py-[11px] rounded-[12px] font-semibold text-[13px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
            style={
              isPrimary
                ? {
                    background:
                      "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
                    boxShadow:
                      "0 6px 20px rgba(79,172,254,0.25), 0 2px 8px rgba(124,58,237,0.15)",
                    color: "#fff",
                  }
                : {
                    background: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.12)",
                    color: "#fff",
                  }
            }
          >
            {buttonIcon}
            {buttonText}
          </button>
        </Link>
      </div>
    </div>
  );
}

export default function MainActions() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <ActionCard
        iconSrc="/audio.png"
        iconAlt="Voice AI"
        title="AI Voice Assistant"
        description="Get instant dental advice through voice calls"
        features={[
          "24/7 availability",
          "Professional dental guidance",
          "Instant pain relief advice",
        ]}
        href="/voice"
        buttonText="Start Voice Call"
        buttonIcon={<MessageSquareIcon className="w-4 h-4" />}
        variant="primary"
        delay="0.1s"
      />
      <ActionCard
        iconSrc="/calendar.png"
        iconAlt="Calendar"
        title="Book Appointment"
        description="Schedule with verified dentists in your area"
        features={[
          "Verified dental professionals",
          "Flexible scheduling",
          "Instant confirmations",
        ]}
        href="/appointments"
        buttonText="Schedule Now"
        buttonIcon={<CalendarIcon className="w-4 h-4" />}
        variant="secondary"
        delay="0.2s"
      />
    </div>
  );
}