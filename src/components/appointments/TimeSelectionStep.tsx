/* ============================================= */
/* ===== TIME SELECTION STEP ================== */
/* ============================================= */
import { useBookedTimeSlots } from "@/hooks/use-appointment";
import { APPOINTMENT_TYPES, getAvailableTimeSlots, getNext5Days } from "@/lib/utils";
import {
  ChevronLeftIcon,
  ClockIcon,
  CalendarIcon,
  ZapIcon,
  ArrowRightIcon,
} from "lucide-react";
import { ToothLogoIcon } from "../ui/ToothLogoIcon";


interface TimeSelectionStepProps {
  selectedDentistId: string;
  selectedDate: string;
  selectedTime: string;
  selectedType: string;
  onDateChange: (date: string) => void;
  onTimeChange: (time: string) => void;
  onTypeChange: (type: string) => void;
  onBack: () => void;
  onContinue: () => void;
}

function TimeSelectionStep({
  onBack,
  onContinue,
  onDateChange,
  onTimeChange,
  onTypeChange,
  selectedDate,
  selectedDentistId,
  selectedTime,
  selectedType,
}: TimeSelectionStepProps) {
  const { data: bookedTimeSlots = [] } = useBookedTimeSlots(
    selectedDentistId,
    selectedDate
  );

  const availableDates = getNext5Days();
  const availableTimeSlots = getAvailableTimeSlots();

  const handleDateSelect = (date: string) => {
    onDateChange(date);
    onTimeChange("");
  };

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
              background: "rgba(168,85,247,0.1)",
              border: "1px solid rgba(168,85,247,0.2)",
            }}
          >
            <ClockIcon className="w-5 h-5" style={{ color: "#A78BFA" }} strokeWidth={1.5} />
          </div>
          <h2
            className="font-extrabold text-white"
            style={{
              fontSize: "clamp(22px, 2.5vw, 30px)",
              lineHeight: "1.15",
            }}
          >
            Select Date & Time
          </h2>
        </div>
      </div>

      <div className="grid lg:grid-cols-2 gap-8">
        {/* Appointment type selection */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <ToothLogoIcon className="w-4 h-4" color="#00D2FF" />
            <h3
              className="font-semibold text-white"
              style={{ fontSize: "16px" }}
            >
              Appointment Type
            </h3>
          </div>
          <div className="space-y-3">
            {APPOINTMENT_TYPES.map((type, i) => {
              const isSelected = selectedType === type.id;

              return (
                <div
                  key={type.id}
                  className="relative cursor-pointer animate-fade-in-up group"
                  style={{ animationDelay: `${i * 0.06}s` }}
                  onClick={() => onTypeChange(type.id)}
                >
                  {/* Border glow */}
                  <div
                    className="absolute pointer-events-none transition-all duration-400"
                    style={{
                      inset: "-1px",
                      borderRadius: "16px",
                      background: isSelected
                        ? "linear-gradient(135deg, #4FACFE, #7C3AED, #D946EF)"
                        : "linear-gradient(135deg, rgba(255,255,255,0.08), rgba(255,255,255,0.02))",
                      filter: "blur(0.5px)",
                      opacity: isSelected ? 0.7 : 0.3,
                    }}
                  />
                  <div
                    className="relative z-10 rounded-[16px] p-4 transition-all duration-400"
                    style={{
                      background: isSelected
                        ? "rgba(13,20,36,0.85)"
                        : "rgba(13,20,36,0.5)",
                      backdropFilter: "blur(20px)",
                      border: isSelected
                        ? "1px solid rgba(79,172,254,0.3)"
                        : "1px solid rgba(255,255,255,0.06)",
                      boxShadow: isSelected
                        ? "0 8px 24px rgba(0,0,0,0.3), 0 0 16px rgba(79,172,254,0.08)"
                        : "0 4px 12px rgba(0,0,0,0.2)",
                      transform: isSelected ? "scale(1.02)" : "scale(1)",
                    }}
                  >
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-all duration-400"
                          style={{
                            background: isSelected
                              ? "rgba(0,210,255,0.15)"
                              : "rgba(255,255,255,0.04)",
                            border: isSelected
                              ? "1px solid rgba(0,210,255,0.25)"
                              : "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          <ToothLogoIcon
                            className="w-4 h-4"
                            color={isSelected ? "#00D2FF" : "#6B6B80"}
                          />
                        </div>
                        <div>
                          <h4
                            className="font-semibold text-white"
                            style={{ fontSize: "14px" }}
                          >
                            {type.name}
                          </h4>
                          <p
                            className="font-medium mt-0.5"
                            style={{ fontSize: "12px", color: "#6B6B80" }}
                          >
                            {type.duration}
                          </p>
                        </div>
                      </div>
                      <span
                        className="font-bold"
                        style={{
                          fontSize: "15px",
                          color: isSelected ? "#00D2FF" : "#9CA0B5",
                        }}
                      >
                        {type.price}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Date & time selection */}
        <div className="space-y-5">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-4 h-4" style={{ color: "#A78BFA" }} />
            <h3
              className="font-semibold text-white"
              style={{ fontSize: "16px" }}
            >
              Available Dates
            </h3>
          </div>

          {/* Date selection */}
          <div className="grid grid-cols-2 gap-3">
            {availableDates.map((date, i) => {
              const isSelected = selectedDate === date;
              const dateObj = new Date(date);

              return (
                <button
                  key={date}
                  onClick={() => handleDateSelect(date)}
                  className="relative rounded-xl p-3.5 transition-all duration-400 animate-fade-in-up group"
                  style={{
                    animationDelay: `${i * 0.05}s`,
                    background: isSelected
                      ? "rgba(0,210,255,0.1)"
                      : "rgba(255,255,255,0.03)",
                    border: isSelected
                      ? "1px solid rgba(0,210,255,0.3)"
                      : "1px solid rgba(255,255,255,0.06)",
                    boxShadow: isSelected
                      ? "0 0 16px rgba(0,210,255,0.08)"
                      : "none",
                    transform: isSelected ? "scale(1.03)" : "scale(1)",
                  }}
                >
                  <div className="text-center">
                    <div
                      className="font-bold text-[10px] uppercase tracking-wider mb-1"
                      style={{
                        color: isSelected ? "#00D2FF" : "#6B6B80",
                      }}
                    >
                      {dateObj.toLocaleDateString("en-US", { weekday: "short" })}
                    </div>
                    <div
                      className="font-bold"
                      style={{
                        fontSize: "14px",
                        color: isSelected ? "#00D2FF" : "#9CA0B5",
                      }}
                    >
                      {dateObj.toLocaleDateString("en-US", {
                        month: "short",
                        day: "numeric",
                      })}
                    </div>
                  </div>
                  {isSelected && (
                    <div
                      className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full"
                      style={{
                        background: "#00D2FF",
                        boxShadow: "0 0 6px rgba(0,210,255,0.5)",
                      }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Time selection */}
          {selectedDate && (
            <div className="space-y-3 animate-fade-in-up">
              <div className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4" style={{ color: "#D946EF" }} />
                <h4
                  className="font-semibold text-white"
                  style={{ fontSize: "15px" }}
                >
                  Available Times
                </h4>
              </div>
              <div className="grid grid-cols-3 gap-2">
                {availableTimeSlots.map((time, i) => {
                  const isBooked = bookedTimeSlots.includes(time);
                  const isSelected = selectedTime === time;

                  return (
                    <button
                      key={time}
                      onClick={() => !isBooked && onTimeChange(time)}
                      disabled={isBooked}
                      className="flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl transition-all duration-300 animate-fade-in-up"
                      style={{
                        animationDelay: `${i * 0.02}s`,
                        background: isBooked
                          ? "rgba(255,255,255,0.01)"
                          : isSelected
                          ? "rgba(0,210,255,0.1)"
                          : "rgba(255,255,255,0.03)",
                        border: isBooked
                          ? "1px solid rgba(255,255,255,0.03)"
                          : isSelected
                          ? "1px solid rgba(0,210,255,0.3)"
                          : "1px solid rgba(255,255,255,0.06)",
                        color: isBooked
                          ? "#3F3F46"
                          : isSelected
                          ? "#00D2FF"
                          : "#9CA0B5",
                        opacity: isBooked ? 0.4 : 1,
                        cursor: isBooked ? "not-allowed" : "pointer",
                        fontSize: "12px",
                        fontWeight: 600,
                        boxShadow: isSelected
                          ? "0 0 12px rgba(0,210,255,0.08)"
                          : "none",
                        transform: isSelected ? "scale(1.05)" : "scale(1)",
                      }}
                    >
                      <ClockIcon className="w-3 h-3" />
                      {time}
                      {isBooked && (
                        <span style={{ fontSize: "9px", color: "#3F3F46" }}>
                          Taken
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Continue button */}
      {selectedType && selectedDate && selectedTime && (
        <div className="flex justify-end animate-fade-in-up">
          <button
            onClick={onContinue}
            className="inline-flex items-center gap-2 px-6 py-[11px] rounded-[12px] font-semibold text-white text-[13px] transition-all duration-300 hover:scale-[1.03] active:scale-[0.97]"
            style={{
              background:
                "linear-gradient(135deg, #4FACFE 0%, #7C3AED 50%, #A18CD1 100%)",
              boxShadow:
                "0 6px 20px rgba(79,172,254,0.3), 0 2px 8px rgba(124,58,237,0.15)",
            }}
          >
            <ZapIcon className="w-4 h-4" strokeWidth={2} />
            Review Booking
            <ArrowRightIcon className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}

export default TimeSelectionStep;