/* ============================================= */
/* ===== APPOINTMENT CONFIRMATION MODAL ======= */
/* ============================================= */
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "@/components/ui/dialog";
import { CheckCircleIcon, MailIcon, CalendarIcon, ClockIcon, UserIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

interface AppointmentConfirmationModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  appointmentDetails: {
    doctorName: string;
    appointmentDate: string;
    appointmentTime: string;
    userEmail: string;
  };
}

export function AppointmentConfirmationModal({
  open,
  onOpenChange,
  appointmentDetails,
}: AppointmentConfirmationModalProps) {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent
        className="sm:max-w-md"
        style={{
          background: "rgba(13,20,36,0.9)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(40px)",
          WebkitBackdropFilter: "blur(40px)",
          boxShadow:
            "0 30px 60px rgba(0,0,0,0.6), inset 0 1px 0 rgba(255,255,255,0.05)",
        }}
      >
        {/* Header */}
        <div className="text-center space-y-4 pt-4">
          {/* Success icon */}
          <div className="mx-auto relative">
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-12px",
                borderRadius: "50%",
                background:
                  "radial-gradient(circle, rgba(0,255,102,0.15) 0%, transparent 70%)",
                filter: "blur(16px)",
              }}
            />
            <div
              className="relative mx-auto w-16 h-16 rounded-full flex items-center justify-center"
              style={{
                background: "rgba(0,255,102,0.08)",
                border: "1px solid rgba(0,255,102,0.2)",
              }}
            >
              <CheckCircleIcon
                className="w-8 h-8 text-[#00FF66]"
                strokeWidth={1.5}
              />
            </div>
          </div>

          <DialogTitle
            className="font-extrabold text-white text-center"
            style={{ fontSize: "22px" }}
          >
            Appointment Confirmed!
          </DialogTitle>

          <DialogDescription
            className="text-center font-medium"
            style={{ fontSize: "14px", color: "#9CA0B5" }}
          >
            Your appointment has been successfully booked
          </DialogDescription>
        </div>

        <div className="space-y-6 px-1 pb-2">
          {/* Email notification */}
          <div className="flex flex-col items-center space-y-3">
            <div className="relative">
              <Image
                src="/email-sent.png"
                alt="Email sent"
                width={100}
                height={100}
                className="mx-auto"
              />
            </div>

            <div className="text-center space-y-1">
              <div
                className="flex items-center justify-center gap-2 font-semibold"
                style={{ fontSize: "13px", color: "#00D2FF" }}
              >
                <MailIcon className="w-4 h-4" />
                Details sent to your inbox
              </div>
              {appointmentDetails?.userEmail && (
                <p
                  className="font-medium"
                  style={{ fontSize: "12px", color: "#6B6B80" }}
                >
                  {appointmentDetails.userEmail}
                </p>
              )}
            </div>
          </div>

          {/* Summary */}
          {appointmentDetails && (
            <div
              className="rounded-xl p-4 space-y-3"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <h4
                className="font-semibold text-center mb-3"
                style={{ fontSize: "13px", color: "#9CA0B5" }}
              >
                Quick Summary
              </h4>

              <div className="space-y-2.5">
                {[
                  {
                    icon: (
                      <UserIcon
                        className="w-4 h-4"
                        style={{ color: "#00D2FF" }}
                        strokeWidth={1.5}
                      />
                    ),
                    value: appointmentDetails.doctorName,
                    bold: true,
                  },
                  {
                    icon: (
                      <CalendarIcon
                        className="w-4 h-4"
                        style={{ color: "#A78BFA" }}
                        strokeWidth={1.5}
                      />
                    ),
                    value: appointmentDetails.appointmentDate,
                    bold: false,
                  },
                  {
                    icon: (
                      <ClockIcon
                        className="w-4 h-4"
                        style={{ color: "#D946EF" }}
                        strokeWidth={1.5}
                      />
                    ),
                    value: appointmentDetails.appointmentTime,
                    bold: false,
                  },
                ].map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center gap-3"
                    style={{ fontSize: "13px" }}
                  >
                    {item.icon}
                    <span
                      className={item.bold ? "font-semibold text-white" : "font-medium"}
                      style={{ color: item.bold ? "#fff" : "#9CA0B5" }}
                    >
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-col gap-3">
            <Link href="/appointments" className="w-full">
              <button
                className="w-full py-[11px] rounded-[12px] font-semibold text-white text-[13px] transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                onClick={() => onOpenChange(false)}
                style={{
                  background:
                    "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
                  boxShadow:
                    "0 6px 20px rgba(79,172,254,0.25), 0 2px 8px rgba(124,58,237,0.12)",
                }}
              >
                View My Appointments
              </button>
            </Link>

            <button
              onClick={() => onOpenChange(false)}
              className="w-full py-[10px] rounded-[12px] font-semibold text-white text-[13px] transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.06]"
              style={{
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.12)",
              }}
            >
              Close
            </button>
          </div>

          {/* Additional info */}
          <div
            className="text-center font-medium pt-4"
            style={{
              fontSize: "11.5px",
              color: "#52525B",
              lineHeight: "1.6",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <p>
              Please arrive 15 minutes early for your appointment.
              <br />
              Need to reschedule? Contact us 24 hours in advance.
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}