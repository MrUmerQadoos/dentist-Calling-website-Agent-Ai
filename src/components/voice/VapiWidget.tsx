/* ============================================= */
/* ===== VAPI WIDGET ========================== */
/* ============================================= */
"use client";

import { vapi } from "@/lib/vapi";
import { useUser } from "@clerk/nextjs";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { MicIcon, PhoneOffIcon } from "lucide-react";

function VapiWidget() {
  const [callActive, setCallActive] = useState(false);
  const [connecting, setConnecting] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [messages, setMessages] = useState<any[]>([]);
  const [callEnded, setCallEnded] = useState(false);

  const { user, isLoaded } = useUser();
  const messageContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (messageContainerRef.current) {
      messageContainerRef.current.scrollTop =
        messageContainerRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    const handleCallStart = () => {
      setConnecting(false);
      setCallActive(true);
      setCallEnded(false);
    };
    const handleCallEnd = () => {
      setCallActive(false);
      setConnecting(false);
      setIsSpeaking(false);
      setCallEnded(true);
    };
    const handleSpeechStart = () => setIsSpeaking(true);
    const handleSpeechEnd = () => setIsSpeaking(false);
    const handleMessage = (message: any) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        setMessages((prev) => [
          ...prev,
          { content: message.transcript, role: message.role },
        ]);
      }
    };
    const handleError = () => {
      setConnecting(false);
      setCallActive(false);
    };

    vapi
      .on("call-start", handleCallStart)
      .on("call-end", handleCallEnd)
      .on("speech-start", handleSpeechStart)
      .on("speech-end", handleSpeechEnd)
      .on("message", handleMessage)
      .on("error", handleError);

    return () => {
      vapi
        .off("call-start", handleCallStart)
        .off("call-end", handleCallEnd)
        .off("speech-start", handleSpeechStart)
        .off("speech-end", handleSpeechEnd)
        .off("message", handleMessage)
        .off("error", handleError);
    };
  }, []);

  const toggleCall = async () => {
    if (callActive) {
      vapi.stop();
    } else {
      try {
        setConnecting(true);
        setMessages([]);
        setCallEnded(false);
        await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID);
      } catch (error) {
        console.log("Failed to start call", error);
        setConnecting(false);
      }
    }
  };

  if (!isLoaded) return null;

  const userInitials = (
    (user?.firstName?.[0] || "") + (user?.lastName?.[0] || "")
  ).toUpperCase();

  return (
    <div className="max-w-5xl mx-auto px-4 flex flex-col overflow-hidden pb-20">
      {/* Title */}
      <div className="text-center mb-8 animate-fade-in-up">
        <h1
          className="font-extrabold tracking-tight"
          style={{
            fontSize: "clamp(24px, 3vw, 36px)",
            lineHeight: "1.1",
          }}
        >
          <span className="text-white">Talk to Your </span>
          <span
            style={{
              background: "linear-gradient(to right, #00D2FF, #D946EF)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
            }}
          >
            AI Dental Assistant
          </span>
        </h1>
        <p
          className="font-medium mt-2"
          style={{ fontSize: "15px", color: "#9CA0B5" }}
        >
          Have a voice conversation with our AI assistant for dental advice and
          guidance
        </p>
      </div>

      {/* Video call area */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        {/* AI Assistant Card */}
        <div
          className="relative rounded-[24px] overflow-hidden animate-fade-in-up"
          style={{
            background: "rgba(13,20,36,0.65)",
            border: isSpeaking
              ? "1px solid rgba(0,210,255,0.3)"
              : "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow: isSpeaking
              ? "0 0 30px rgba(0,210,255,0.1), 0 20px 40px rgba(0,0,0,0.4)"
              : "0 20px 40px rgba(0,0,0,0.4)",
            transition: "border-color 0.3s, box-shadow 0.3s",
          }}
        >
          {/* Speaking wave animation */}
          <div
            className="absolute inset-0 transition-opacity duration-300 pointer-events-none"
            style={{ opacity: isSpeaking ? 0.15 : 0 }}
          >
            <div className="absolute left-0 right-0 top-1/2 -translate-y-1/2 flex justify-center items-center h-20">
              {[...Array(7)].map((_, i) => (
                <div
                  key={i}
                  className="mx-[3px] w-[3px] rounded-full"
                  style={{
                    background: "#00D2FF",
                    height: isSpeaking
                      ? `${Math.random() * 50 + 20}%`
                      : "5%",
                    animation: isSpeaking
                      ? `soundWave 0.8s ease-in-out ${i * 0.1}s infinite alternate`
                      : "none",
                  }}
                />
              ))}
            </div>
          </div>

          <div className="aspect-video flex flex-col items-center justify-center p-6 relative z-10">
            {/* AI Logo */}
            <div className="relative w-28 h-28 mb-4">
              <div
                className="absolute inset-0 rounded-full pointer-events-none transition-opacity duration-300"
                style={{
                  background: "rgba(0,210,255,0.1)",
                  filter: "blur(20px)",
                  opacity: isSpeaking ? 1 : 0.3,
                }}
              />
              <div
                className="relative w-full h-full rounded-full flex items-center justify-center overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(0,210,255,0.1), rgba(217,70,239,0.05))",
                  border: "1px solid rgba(0,210,255,0.2)",
                }}
              >
                <Image
                  src="/logo.png"
                  alt="AI Dental Assistant"
                  width={72}
                  height={72}
                  className="w-[72px] h-[72px] object-contain"
                />
              </div>
            </div>

            <h2
              className="font-bold text-white"
              style={{ fontSize: "18px" }}
            >
              DentWise AI
            </h2>
            <p
              className="font-medium mt-1"
              style={{ fontSize: "13px", color: "#9CA0B5" }}
            >
              Dental Assistant
            </p>

            {/* Status indicator */}
            <div
              className="mt-4 flex items-center gap-2 px-3 py-[6px] rounded-full"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: isSpeaking
                  ? "1px solid rgba(0,210,255,0.3)"
                  : "1px solid rgba(255,255,255,0.08)",
                transition: "border-color 0.3s",
              }}
            >
              <div
                className="w-[6px] h-[6px] rounded-full"
                style={{
                  background: isSpeaking
                    ? "#00D2FF"
                    : callActive
                    ? "#00FF66"
                    : "#52525B",
                  boxShadow:
                    isSpeaking
                      ? "0 0 8px rgba(0,210,255,0.5)"
                      : callActive
                      ? "0 0 8px rgba(0,255,102,0.5)"
                      : "none",
                  animation:
                    isSpeaking || callActive
                      ? "ping 1.5s cubic-bezier(0,0,0.2,1) infinite"
                      : "none",
                }}
              />
              <span
                className="font-semibold"
                style={{
                  fontSize: "11px",
                  color: isSpeaking
                    ? "#00D2FF"
                    : callActive
                    ? "#00FF66"
                    : "#52525B",
                }}
              >
                {isSpeaking
                  ? "Speaking..."
                  : callActive
                  ? "Listening..."
                  : callEnded
                  ? "Call ended"
                  : "Waiting..."}
              </span>
            </div>
          </div>
        </div>

        {/* User Card */}
        <div
          className="relative rounded-[24px] overflow-hidden animate-fade-in-up"
          style={{
            animationDelay: "0.1s",
            background: "rgba(13,20,36,0.65)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          <div className="aspect-video flex flex-col items-center justify-center p-6">
            {/* User avatar */}
            <div className="relative w-28 h-28 mb-4">
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-6px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(168,85,247,0.1), transparent 70%)",
                  filter: "blur(12px)",
                }}
              />
              <Avatar
                className="relative w-full h-full"
                style={{
                  border: "2px solid rgba(255,255,255,0.12)",
                }}
              >
                <AvatarImage
                  src={user?.imageUrl || undefined}
                  alt="User"
                  className="object-cover"
                />
                <AvatarFallback
                  style={{
                    background:
                      "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(0,210,255,0.1))",
                    color: "#A78BFA",
                    fontWeight: 700,
                    fontSize: "28px",
                  }}
                >
                  {userInitials || "?"}
                </AvatarFallback>
              </Avatar>
            </div>

            <h2
              className="font-bold text-white"
              style={{ fontSize: "18px" }}
            >
              You
            </h2>
            <p
              className="font-medium mt-1"
              style={{ fontSize: "13px", color: "#9CA0B5" }}
            >
              {user
                ? (user.firstName + " " + (user.lastName || "")).trim()
                : "Guest"}
            </p>

            {/* Ready status */}
            <div
              className="mt-4 flex items-center gap-2 px-3 py-[6px] rounded-full"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
            >
              <div
                className="w-[6px] h-[6px] rounded-full"
                style={{ background: "#52525B" }}
              />
              <span
                className="font-semibold"
                style={{ fontSize: "11px", color: "#52525B" }}
              >
                Ready
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Message transcript */}
      {messages.length > 0 && (
        <div
          ref={messageContainerRef}
          className="w-full rounded-[20px] p-5 mb-8 h-64 overflow-y-auto scroll-smooth animate-fade-in-up"
          style={{
            background: "rgba(13,20,36,0.65)",
            border: "1px solid rgba(255,255,255,0.08)",
            backdropFilter: "blur(28px)",
            WebkitBackdropFilter: "blur(28px)",
            boxShadow: "0 20px 40px rgba(0,0,0,0.4)",
          }}
        >
          <div className="space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className="animate-fade-in-up">
                <div
                  className="font-bold mb-1"
                  style={{
                    fontSize: "11px",
                    color:
                      msg.role === "assistant" ? "#00D2FF" : "#A78BFA",
                  }}
                >
                  {msg.role === "assistant" ? "DentWise AI" : "You"}:
                </div>
                <p
                  className="font-medium"
                  style={{
                    fontSize: "13.5px",
                    color: "#9CA0B5",
                    lineHeight: "1.6",
                  }}
                >
                  {msg.content}
                </p>
              </div>
            ))}

            {callEnded && (
              <div className="animate-fade-in-up">
                <div
                  className="font-bold mb-1"
                  style={{ fontSize: "11px", color: "#00FF66" }}
                >
                  System:
                </div>
                <p
                  className="font-medium"
                  style={{
                    fontSize: "13.5px",
                    color: "#9CA0B5",
                    lineHeight: "1.6",
                  }}
                >
                  Call ended. Thank you for using DentWise AI!
                </p>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Call controls */}
      <div className="w-full flex justify-center gap-4">
        <button
          className="relative w-44 py-3 rounded-2xl font-bold text-[16px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{
            background: callActive
              ? "linear-gradient(135deg, #EF4444, #DC2626)"
              : callEnded
              ? "rgba(255,255,255,0.04)"
              : "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
            color: callEnded ? "#52525B" : "#fff",
            border: callEnded
              ? "1px solid rgba(255,255,255,0.08)"
              : "none",
            boxShadow: callActive
              ? "0 6px 20px rgba(239,68,68,0.3)"
              : callEnded
              ? "none"
              : "0 6px 20px rgba(79,172,254,0.3), 0 2px 8px rgba(124,58,237,0.15)",
          }}
          onClick={toggleCall}
          disabled={connecting || callEnded}
        >
          {connecting && (
            <span
              className="absolute inset-0 rounded-2xl animate-ping opacity-40"
              style={{
                background:
                  "linear-gradient(135deg, #4FACFE, #7C3AED)",
              }}
            />
          )}

          {callActive ? (
            <PhoneOffIcon className="w-5 h-5" />
          ) : (
            <MicIcon className="w-5 h-5" />
          )}

          <span className="relative z-10">
            {callActive
              ? "End Call"
              : connecting
              ? "Connecting..."
              : callEnded
              ? "Call Ended"
              : "Start Call"}
          </span>
        </button>
      </div>

      {/* Sound wave keyframes */}
      <style jsx>{`
        @keyframes soundWave {
          0% { height: 10%; }
          100% { height: 70%; }
        }
      `}</style>
    </div>
  );
}

export default VapiWidget;