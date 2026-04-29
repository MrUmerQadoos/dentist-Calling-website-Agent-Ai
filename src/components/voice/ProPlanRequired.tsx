/* ============================================= */
/* ===== PRO PLAN REQUIRED ==================== */
/* ============================================= */
import Navbar from "@/components/Navbar";
import { CrownIcon, LockIcon, MicIcon, SparklesIcon } from "lucide-react";
import Link from "next/link";

function ProPlanRequired() {
  return (
    <div
      className="min-h-screen"
      style={{
        background:
          "radial-gradient(ellipse at 50% 0%, rgba(0,210,255,0.04) 0%, transparent 50%), rgba(7,8,21,1)",
      }}
    >
      <Navbar />

      <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
        {/* ═══ Access Denied Banner ═══ */}
        <div className="relative mb-12 animate-fade-in-up">
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
                background: "rgba(217,70,239,0.06)",
                borderRadius: "50%",
                filter: "blur(120px)",
                transform: "translate(-35%, -35%)",
              }}
            />
            <div
              className="absolute bottom-0 right-0 pointer-events-none"
              style={{
                width: "300px",
                height: "300px",
                background: "rgba(0,210,255,0.05)",
                borderRadius: "50%",
                filter: "blur(100px)",
                transform: "translate(35%, 35%)",
              }}
            />

            <div className="relative z-10 flex items-center justify-between">
              <div className="space-y-5">
                {/* Lock pill */}
                <div
                  className="inline-flex items-center gap-2.5 px-4 py-[9px] rounded-full"
                  style={{
                    background: "rgba(217,70,239,0.06)",
                    border: "1px solid rgba(217,70,239,0.25)",
                    backdropFilter: "blur(10px)",
                  }}
                >
                  <LockIcon className="w-3.5 h-3.5 text-[#D946EF]" />
                  <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#D946EF]">
                    Pro Feature
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
                    <span className="text-white">Voice Assistant </span>
                    <span
                      style={{
                        background: "linear-gradient(to right, #D946EF, #00D2FF)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                        backgroundClip: "text",
                      }}
                    >
                      Access Required
                    </span>
                  </h1>
                  <p
                    className="font-medium max-w-[500px]"
                    style={{
                      fontSize: "15px",
                      lineHeight: "1.75",
                      color: "#9CA0B5",
                    }}
                  >
                    Upgrade to AI Pro or AI Basic to unlock unlimited voice
                    consultations with our AI dental assistant.
                  </p>
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
                        "radial-gradient(circle, rgba(217,70,239,0.2) 0%, rgba(0,210,255,0.1) 50%, transparent 70%)",
                      filter: "blur(30px)",
                    }}
                  />
                  <div
                    className="relative z-10 w-[100px] h-[100px] rounded-full flex items-center justify-center animate-hero-float"
                    style={{
                      background:
                        "linear-gradient(135deg, rgba(217,70,239,0.15), rgba(0,210,255,0.1))",
                      border: "1px solid rgba(217,70,239,0.25)",
                      boxShadow: "0 0 30px rgba(217,70,239,0.15)",
                    }}
                  >
                    <MicIcon
                      className="w-12 h-12 text-[#D946EF]"
                      strokeWidth={1.5}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ Upgrade Card ═══ */}
        <div
          className="max-w-2xl mx-auto animate-fade-in-up"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="relative">
            {/* Border glow */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-1px",
                borderRadius: "24px",
                background:
                  "linear-gradient(135deg, rgba(217,70,239,0.3), rgba(0,210,255,0.15))",
                filter: "blur(0.5px)",
                opacity: 0.5,
              }}
            />
            <div
              className="relative z-10 rounded-[24px] p-8 text-center"
              style={{
                background: "rgba(13,20,36,0.7)",
                backdropFilter: "blur(28px)",
                WebkitBackdropFilter: "blur(28px)",
                border: "1px solid rgba(255,255,255,0.08)",
                boxShadow:
                  "0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)",
              }}
            >
              {/* Lock icon */}
              <div className="relative mx-auto mb-6">
                <div
                  className="absolute pointer-events-none"
                  style={{
                    inset: "-12px",
                    borderRadius: "20px",
                    background:
                      "radial-gradient(circle, rgba(217,70,239,0.12) 0%, transparent 70%)",
                    filter: "blur(16px)",
                  }}
                />
                <div
                  className="relative w-20 h-20 rounded-2xl flex items-center justify-center mx-auto"
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(217,70,239,0.15), rgba(0,210,255,0.08))",
                    border: "1px solid rgba(217,70,239,0.2)",
                    boxShadow: "0 0 20px rgba(217,70,239,0.1)",
                  }}
                >
                  <LockIcon
                    className="w-10 h-10 text-[#D946EF]"
                    strokeWidth={1.5}
                  />
                </div>
              </div>

              <h3
                className="font-extrabold text-white mb-3"
                style={{ fontSize: "24px" }}
              >
                Upgrade Required
              </h3>
              <p
                className="font-medium mx-auto mb-6"
                style={{
                  fontSize: "14px",
                  color: "#9CA0B5",
                  lineHeight: "1.7",
                  maxWidth: "400px",
                }}
              >
                The voice assistant feature is available to AI Pro and AI Basic
                subscribers. Get instant dental advice through natural voice
                conversations.
              </p>

              {/* Features */}
              <div className="space-y-3 mb-8">
                {[
                  "24/7 voice consultations",
                  "Professional dental guidance",
                  "Instant pain relief advice",
                ].map((text, i) => (
                  <div key={i} className="flex items-center gap-3 justify-center">
                    <div
                      className="w-[6px] h-[6px] rounded-full"
                      style={{
                        background: "#D946EF",
                        boxShadow: "0 0 8px rgba(217,70,239,0.4)",
                      }}
                    />
                    <span
                      className="font-medium"
                      style={{ fontSize: "13px", color: "#9CA0B5" }}
                    >
                      {text}
                    </span>
                  </div>
                ))}
              </div>

              {/* CTA */}
              <Link href="/pro" className="block">
                <button
                  className="w-full py-[12px] rounded-[12px] font-bold text-white text-[14px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] flex items-center justify-center gap-2"
                  style={{
                    background:
                      "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
                    boxShadow:
                      "0 6px 20px rgba(79,172,254,0.3), 0 2px 8px rgba(124,58,237,0.15)",
                  }}
                >
                  <CrownIcon className="w-5 h-5" />
                  Upgrade to Pro
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProPlanRequired;