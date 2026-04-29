/* ============================================= */
/* ===== WELCOME SECTION ====================== */
/* ============================================= */
import { MicIcon, SparklesIcon } from "lucide-react";

function WelcomeSection() {
  return (
    <div className="relative z-10 mb-12 animate-fade-in-up">
      <div
        className="relative rounded-3xl p-8 sm:p-10 overflow-hidden"
        style={{
          background: "rgba(13,20,36,0.65)",
          border: "1px solid rgba(255,255,255,0.08)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          boxShadow:
            "0 0 60px rgba(0,100,255,0.06), 0 40px 80px rgba(0,0,0,0.4)",
        }}
      >
        {/* Ambient glows */}
        <div
          className="absolute top-0 left-0 pointer-events-none"
          style={{
            width: "400px",
            height: "400px",
            background: "rgba(0,210,255,0.06)",
            borderRadius: "50%",
            filter: "blur(120px)",
            transform: "translate(-35%, -35%)",
          }}
        />
        <div
          className="absolute bottom-0 right-0 pointer-events-none"
          style={{
            width: "350px",
            height: "350px",
            background: "rgba(168,85,247,0.06)",
            borderRadius: "50%",
            filter: "blur(120px)",
            transform: "translate(35%, 35%)",
          }}
        />

        <div className="relative z-10 flex items-center justify-between">
          <div className="space-y-5">
            {/* Status pill */}
            <div
              className="inline-flex items-center gap-2.5 px-4 py-[9px] rounded-full"
              style={{
                background: "rgba(0,210,255,0.05)",
                border: "1px solid rgba(0,210,255,0.25)",
                backdropFilter: "blur(10px)",
              }}
            >
              <span className="relative flex h-[7px] w-[7px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-60" />
                <span
                  className="relative inline-flex rounded-full h-[7px] w-[7px] bg-[#00FF66]"
                  style={{ boxShadow: "0 0 8px #00FF66" }}
                />
              </span>
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#00D2FF]">
                Voice Assistant Ready
              </span>
            </div>

            {/* Title */}
            <div>
              <h1
                className="font-extrabold tracking-tight mb-2"
                style={{
                  fontSize: "clamp(28px, 3.5vw, 42px)",
                  lineHeight: "1.1",
                }}
              >
                <span className="text-white">AI Voice </span>
                <span
                  style={{
                    background: "linear-gradient(to right, #00D2FF, #D946EF)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}
                >
                  Assistant
                </span>
              </h1>
              <p
                className="font-medium max-w-[500px]"
                style={{ fontSize: "15px", lineHeight: "1.75", color: "#9CA0B5" }}
              >
                Talk to your AI dental assistant using natural voice commands.
                Get instant advice and professional guidance.
              </p>
            </div>

            {/* Hint */}
            <div className="flex items-center gap-2">
              <SparklesIcon className="w-3.5 h-3.5 text-[#D946EF]" strokeWidth={2.5} />
              <span
                className="font-medium"
                style={{ fontSize: "12px", color: "#6B6B80" }}
              >
                Try asking about tooth pain, whitening, or braces
              </span>
            </div>
          </div>

          {/* Mic orb */}
          <div className="hidden lg:flex items-center justify-center">
            <div className="relative">
              <div
                className="absolute rounded-full pointer-events-none"
                style={{
                  inset: "-20px",
                  background:
                    "radial-gradient(circle, rgba(0,210,255,0.2) 0%, rgba(217,70,239,0.1) 50%, transparent 70%)",
                  filter: "blur(30px)",
                }}
              />
              <div
                className="relative z-10 w-[100px] h-[100px] rounded-full flex items-center justify-center animate-hero-float"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,210,255,0.15), rgba(217,70,239,0.1))",
                  border: "1px solid rgba(0,210,255,0.25)",
                  boxShadow: "0 0 30px rgba(0,210,255,0.15)",
                }}
              >
                <MicIcon className="w-12 h-12 text-[#00D2FF]" strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WelcomeSection;