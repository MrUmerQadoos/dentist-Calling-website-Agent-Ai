/* ============================================= */
/* ===== FEATURE CARDS ======================== */
/* ============================================= */
import { MicIcon, ShieldIcon, CalendarIcon } from "lucide-react";

function FeatureCard({
  icon,
  title,
  description,
  items,
  variant = "cyan",
  delay = "0s",
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
  items: { icon?: React.ReactNode; label: string; hasBg?: boolean }[];
  variant?: "cyan" | "purple";
  delay?: string;
}) {
  const isCyan = variant === "cyan";

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
          background: isCyan
            ? "linear-gradient(135deg, rgba(0,210,255,0.3), rgba(0,210,255,0.05), rgba(0,210,255,0.3))"
            : "linear-gradient(135deg, rgba(217,70,239,0.3), rgba(168,85,247,0.05), rgba(217,70,239,0.3))",
          filter: "blur(0.5px)",
          opacity: 0.35,
        }}
      />
      {/* Hover glow */}
      <div
        className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          inset: "-8px",
          borderRadius: "32px",
          background: isCyan
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
        {/* Header */}
        <div className="flex items-center gap-3 mb-2">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center shrink-0"
            style={{
              background: isCyan
                ? "linear-gradient(135deg, rgba(0,210,255,0.15), rgba(0,210,255,0.05))"
                : "linear-gradient(135deg, rgba(217,70,239,0.15), rgba(168,85,247,0.05))",
              border: isCyan
                ? "1px solid rgba(0,210,255,0.2)"
                : "1px solid rgba(217,70,239,0.2)",
              boxShadow: isCyan
                ? "0 0 16px rgba(0,210,255,0.1)"
                : "0 0 16px rgba(217,70,239,0.1)",
            }}
          >
            {icon}
          </div>
          <h3
            className="font-bold text-white"
            style={{ fontSize: "18px" }}
          >
            {title}
          </h3>
        </div>
        <p
          className="font-medium mb-6"
          style={{ fontSize: "13.5px", color: "#9CA0B5", lineHeight: "1.6" }}
        >
          {description}
        </p>

        {/* Items */}
        <div className="space-y-3 flex-1">
          {items.map((item, i) =>
            item.hasBg ? (
              <div
                key={i}
                className="flex items-center p-3 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center mr-3 shrink-0"
                  style={{
                    background: isCyan
                      ? "linear-gradient(135deg, rgba(0,210,255,0.12), rgba(0,210,255,0.04))"
                      : "linear-gradient(135deg, rgba(217,70,239,0.12), rgba(168,85,247,0.04))",
                    border: isCyan
                      ? "1px solid rgba(0,210,255,0.15)"
                      : "1px solid rgba(217,70,239,0.15)",
                  }}
                >
                  {item.icon}
                </div>
                <span
                  className="font-medium"
                  style={{ fontSize: "13px", color: "#9CA0B5" }}
                >
                  {item.label}
                </span>
              </div>
            ) : (
              <div key={i} className="flex items-start gap-3">
                <div
                  className="w-[6px] h-[6px] rounded-full shrink-0 mt-[6px]"
                  style={{
                    background: isCyan ? "#00D2FF" : "#D946EF",
                    boxShadow: isCyan
                      ? "0 0 8px rgba(0,210,255,0.4)"
                      : "0 0 8px rgba(217,70,239,0.4)",
                  }}
                />
                <span
                  className="font-medium"
                  style={{ fontSize: "13px", color: "#9CA0B5", lineHeight: "1.5" }}
                >
                  {item.label}
                </span>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}

function FeatureCards() {
  return (
    <div className="grid md:grid-cols-2 gap-6 mb-12">
      <FeatureCard
        icon={<MicIcon className="w-5 h-5 text-[#00D2FF]" strokeWidth={1.5} />}
        title="How to Use"
        description="Simple steps to get started with voice assistance"
        items={[
          { label: "Click the microphone button to start talking" },
          { label: "Ask questions about dental health and treatments" },
          { label: "Get instant voice responses from the AI" },
          { label: "View conversation transcript in real-time" },
        ]}
        variant="cyan"
        delay="0.1s"
      />
      <FeatureCard
        icon={<ShieldIcon className="w-5 h-5 text-[#D946EF]" strokeWidth={1.5} />}
        title="Features"
        description="Advanced capabilities for dental care"
        items={[
          {
            icon: <MicIcon className="w-4 h-4 text-[#00D2FF]" strokeWidth={1.5} />,
            label: "Real-time Voice Recognition",
            hasBg: true,
          },
          {
            icon: <ShieldIcon className="w-4 h-4 text-[#D946EF]" strokeWidth={1.5} />,
            label: "AI-Powered Responses",
            hasBg: true,
          },
          {
            icon: <CalendarIcon className="w-4 h-4 text-[#A78BFA]" strokeWidth={1.5} />,
            label: "Conversation History",
            hasBg: true,
          },
        ]}
        variant="purple"
        delay="0.2s"
      />
    </div>
  );
}

export default FeatureCards;