/* ============================================= */
/* ===== BOOKING CONFIRMATION STEP ============ */
/* ============================================= */
import { APPOINTMENT_TYPES } from "@/lib/utils";
import {
  ChevronLeftIcon,
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  SparklesIcon,
  PencilIcon,
  ArrowRightIcon,
} from "lucide-react";
import DoctorInfo from "./DoctorInfo";
import { ToothLogoIcon } from "../ui/ToothLogoIcon";


interface BookingConfirmationStepProps {
  selectedDentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  isBooking: boolean;
  onBack: () => void;
  onConfirm: () => void;
  onModify: () => void;
}

function BookingConfirmationStep({
  selectedDentistId,
  selectedDate,
  selectedTime,
  selectedType,
  isBooking,
  onBack,
  onConfirm,
  onModify,
}: BookingConfirmationStepProps) {
  const appointmentType = APPOINTMENT_TYPES.find(
    (t) => t.id === selectedType
  );

  const details = [
    {
      label: "Type",
      value: appointmentType?.name,
      icon: <ToothLogoIcon className="w-4 h-4" color="#00D2FF" />,
      color: "#00D2FF",
      iconBg: "rgba(0,210,255,0.1)",
      iconBorder: "rgba(0,210,255,0.2)",
    },
    {
      label: "Duration",
      value: appointmentType?.duration,
      icon: <ClockIcon className="w-4 h-4" style={{ color: "#A78BFA" }} strokeWidth={1.5} />,
      color: "#A78BFA",
      iconBg: "rgba(167,139,250,0.1)",
      iconBorder: "rgba(167,139,250,0.2)",
    },
    {
      label: "Date",
      value: new Date(selectedDate).toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }),
      icon: <CalendarIcon className="w-4 h-4" style={{ color: "#D946EF" }} strokeWidth={1.5} />,
      color: "#D946EF",
      iconBg: "rgba(217,70,239,0.1)",
      iconBorder: "rgba(217,70,239,0.2)",
    },
    {
      label: "Time",
      value: selectedTime,
      icon: <ClockIcon className="w-4 h-4" style={{ color: "#00D2FF" }} strokeWidth={1.5} />,
      color: "#00D2FF",
      iconBg: "rgba(0,210,255,0.1)",
      iconBorder: "rgba(0,210,255,0.2)",
    },
    {
      label: "Location",
      value: "DentWise Dental Center",
      icon: <MapPinIcon className="w-4 h-4" style={{ color: "#A78BFA" }} strokeWidth={1.5} />,
      color: "#A78BFA",
      iconBg: "rgba(167,139,250,0.1)",
      iconBorder: "rgba(167,139,250,0.2)",
    },
    {
      label: "Cost",
      value: appointmentType?.price,
      highlight: true,
      icon: <SparklesIcon className="w-4 h-4" style={{ color: "#00D2FF" }} strokeWidth={1.5} />,
      color: "#00D2FF",
      iconBg: "rgba(0,210,255,0.1)",
      iconBorder: "rgba(0,210,255,0.2)",
    },
  ];

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Header */}
      <div className="flex items-center gap-4">
        <button
          onClick={onBack}
          className="flex items-center gap-2 px-3 py-2 rounded-xl transition-all duration-300 hover:bg-white/[0.06]"
          style={{ color: "#9CA0B5", fontSize: "13px", fontWeight: 600 }}
        >
          <ChevronLeftIcon className="w-4 h-4" />
          Back
        </button>
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(217,70,239,0.1)",
              border: "1px solid rgba(217,70,239,0.2)",
            }}
          >
            <SparklesIcon className="w-5 h-5" style={{ color: "#D946EF" }} strokeWidth={1.5} />
          </div>
          <h2
            className="font-extrabold text-white"
            style={{
              fontSize: "clamp(22px, 2.5vw, 30px)",
              lineHeight: "1.15",
            }}
          >
            Confirm Your Appointment
          </h2>
        </div>
      </div>

      {/* Summary card */}
      <div className="max-w-2xl">
        <div className="relative">
          {/* Border glow */}
          <div
            className="absolute pointer-events-none"
            style={{
              inset: "-1px",
              borderRadius: "24px",
              background:
                "linear-gradient(135deg, rgba(0,210,255,0.25), rgba(168,85,247,0.15), rgba(217,70,239,0.2))",
              filter: "blur(0.5px)",
              opacity: 0.5,
            }}
          />
          <div
            className="relative z-10 rounded-[24px] p-6"
            style={{
              background: "rgba(13,20,36,0.7)",
              backdropFilter: "blur(28px)",
              WebkitBackdropFilter: "blur(28px)",
              border: "1px solid rgba(255,255,255,0.08)",
              boxShadow:
                "0 20px 40px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
            }}
          >
            {/* Title */}
            <div className="flex items-center gap-2 mb-5">
              <ToothLogoIcon className="w-4 h-4" color="#00D2FF" />
              <h3
                className="font-bold text-white"
                style={{ fontSize: "17px" }}
              >
                Appointment Summary
              </h3>
            </div>

            {/* Doctor info */}
            <div className="mb-5">
              <DoctorInfo doctorId={selectedDentistId} />
            </div>

            {/* Divider */}
            <div
              className="mb-5"
              style={{
                height: "1px",
                background:
                  "linear-gradient(to right, rgba(0,210,255,0.2), rgba(168,85,247,0.15), rgba(217,70,239,0.1), transparent)",
              }}
            />

            {/* Details grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {details.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start gap-3 animate-fade-in-up"
                  style={{ animationDelay: `${i * 0.06}s` }}
                >
                  <div
                    className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{
                      background: item.iconBg,
                      border: `1px solid ${item.iconBorder}`,
                    }}
                  >
                    {item.icon}
                  </div>
                  <div>
                    <p
                      className="font-medium mb-0.5"
                      style={{ fontSize: "11px", color: "#6B6B80" }}
                    >
                      {item.label}
                    </p>
                    <p
                      className="font-semibold"
                      style={{
                        fontSize: "14px",
                        color: item.highlight ? "#00D2FF" : "#fff",
                      }}
                    >
                      {item.value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-4">
        <button
          onClick={onModify}
          className="inline-flex items-center gap-2 px-5 py-[10px] rounded-[12px] font-semibold text-white text-[13px] transition-all duration-300 hover:scale-[1.02] hover:bg-white/[0.06]"
          style={{
            background: "rgba(255,255,255,0.03)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          <PencilIcon className="w-3.5 h-3.5" strokeWidth={2} />
          Modify
        </button>
        <button
          onClick={onConfirm}
          disabled={isBooking}
          className="inline-flex items-center gap-2 px-6 py-[10px] rounded-[12px] font-bold text-white text-[13px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97] disabled:opacity-50 disabled:cursor-not-allowed"
          style={{
            background:
              "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
            boxShadow:
              "0 6px 20px rgba(79,172,254,0.3), 0 2px 8px rgba(124,58,237,0.15)",
          }}
        >
          {isBooking ? (
            <>
              <div className="w-3.5 h-3.5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Booking...
            </>
          ) : (
            <>
              <SparklesIcon className="w-3.5 h-3.5" strokeWidth={2} />
              Confirm Booking
              <ArrowRightIcon className="w-3.5 h-3.5" strokeWidth={2} />
            </>
          )}
        </button>
      </div>
    </div>
  );
}

export default BookingConfirmationStep;