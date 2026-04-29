"use client";

import { AppointmentConfirmationModal } from "@/components/appointments/AppointmentConfirmationModal";
import BookingConfirmationStep from "@/components/appointments/BookingConfirmationStep";
import DoctorSelectionStep from "@/components/appointments/DoctorSelectionStep";
import ProgressSteps from "@/components/appointments/ProgressSteps";
import TimeSelectionStep from "@/components/appointments/TimeSelectionStep";
import Navbar from "@/components/Navbar";
import { useBookAppointment, useUserAppointments } from "@/hooks/use-appointment";
import { APPOINTMENT_TYPES } from "@/lib/utils";
import { format, isSameDay, isAfter, parseISO } from "date-fns";
import { useState } from "react";
import { toast } from "sonner";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  CalendarIcon,
  ClockIcon,
  MapPinIcon,
  ZapIcon,
} from "lucide-react";

/* ============================================= */
/* ===== APPOINTMENT CARD ===================== */
/* ============================================= */
function AppointmentCard({
  appointment,
  index,
}: {
  appointment: any;
  index: number;
}) {
  const appointmentDate = parseISO(appointment.date);
  const isToday = isSameDay(appointmentDate, new Date());
  const isUpcoming = isAfter(appointmentDate, new Date()) || isToday;

  const initials = appointment.doctorName
    .split(" ")
    .map((n: string) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  const formattedDate = format(appointmentDate, "MMM d, yyyy");
  const formattedDay = format(appointmentDate, "EEE");

  return (
    <div
      className="relative animate-fade-in-up group"
      style={{ animationDelay: `${index * 0.08}s` }}
    >
      {/* Border glow */}
      <div
        className="absolute pointer-events-none transition-opacity duration-300 group-hover:opacity-100"
        style={{
          inset: "-1px",
          borderRadius: "20px",
          background: isToday
            ? "linear-gradient(135deg, rgba(0,255,102,0.3), rgba(0,210,255,0.15))"
            : "linear-gradient(135deg, rgba(0,210,255,0.2), rgba(0,210,255,0.03), rgba(0,210,255,0.2))",
          filter: "blur(0.5px)",
          opacity: 0.3,
        }}
      />
      {/* Hover glow */}
      <div
        className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          inset: "-6px",
          borderRadius: "26px",
          background: isToday
            ? "radial-gradient(circle at 30% 30%, rgba(0,255,102,0.06), transparent 60%)"
            : "radial-gradient(circle at 30% 30%, rgba(0,210,255,0.06), transparent 60%)",
          filter: "blur(16px)",
        }}
      />

      <div
        className="relative z-10 h-full rounded-[20px] p-5 flex flex-col transition-all duration-300"
        style={{
          background: "rgba(13,20,36,0.65)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          border: isToday
            ? "1px solid rgba(0,255,102,0.2)"
            : "1px solid rgba(255,255,255,0.08)",
          boxShadow: isToday
            ? "0 20px 40px rgba(0,0,0,0.4), 0 0 16px rgba(0,255,102,0.06)"
            : "0 20px 40px rgba(0,0,0,0.4)",
        }}
      >
        {/* Top row: Avatar + Info + Status */}
        <div className="flex items-start gap-3 mb-4">
          <div className="relative shrink-0">
            {isToday && (
              <div
                className="absolute pointer-events-none"
                style={{
                  inset: "-3px",
                  borderRadius: "50%",
                  background:
                    "radial-gradient(circle, rgba(0,255,102,0.15), transparent 70%)",
                  filter: "blur(6px)",
                }}
              />
            )}
            <Avatar
              className="relative w-10 h-10"
              style={{
                border: isToday
                  ? "2px solid rgba(0,255,102,0.3)"
                  : "2px solid rgba(255,255,255,0.1)",
              }}
            >
              <AvatarImage
                src={appointment.doctorImageUrl || undefined}
                alt={appointment.doctorName}
                className="object-cover"
              />
              <AvatarFallback
                style={{
                  background: isToday
                    ? "linear-gradient(135deg, rgba(0,255,102,0.15), rgba(0,210,255,0.1))"
                    : "linear-gradient(135deg, rgba(0,210,255,0.12), rgba(0,210,255,0.04))",
                  color: isToday ? "#00FF66" : "#9CA0B5",
                  fontWeight: 700,
                  fontSize: "12px",
                }}
              >
                {initials || "?"}
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="flex-1 min-w-0">
            <h3
              className="font-bold text-white truncate"
              style={{ fontSize: "14px" }}
            >
              {appointment.doctorName}
            </h3>
            <p
              className="font-medium truncate"
              style={{ fontSize: "12px", color: "#9CA0B5" }}
            >
              {appointment.reason}
            </p>
          </div>

          {/* Status badge */}
          <div
            className="shrink-0 inline-flex items-center gap-1.5 px-2.5 py-[4px] rounded-full"
            style={{
              background: isToday
                ? "rgba(0,255,102,0.06)"
                : isUpcoming
                ? "rgba(0,210,255,0.05)"
                : "rgba(255,255,255,0.03)",
              border: isToday
                ? "1px solid rgba(0,255,102,0.2)"
                : isUpcoming
                ? "1px solid rgba(0,210,255,0.15)"
                : "1px solid rgba(255,255,255,0.06)",
            }}
          >
            {isToday ? (
              <span className="relative flex h-[5px] w-[5px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-60" />
                <span className="relative inline-flex rounded-full h-[5px] w-[5px] bg-[#00FF66]" />
              </span>
            ) : (
              <div
                className="w-[5px] h-[5px] rounded-full"
                style={{
                  background: isUpcoming ? "#00D2FF" : "#52525B",
                  boxShadow: isUpcoming ? "0 0 6px rgba(0,210,255,0.4)" : "none",
                }}
              />
            )}
            <span
              className="font-bold uppercase tracking-wider"
              style={{
                fontSize: "9.5px",
                color: isToday ? "#00FF66" : isUpcoming ? "#00D2FF" : "#52525B",
              }}
            >
              {isToday ? "Today" : isUpcoming ? "Upcoming" : "Past"}
            </span>
          </div>
        </div>

        {/* Divider */}
        <div
          className="mb-4"
          style={{
            height: "1px",
            background: isToday
              ? "linear-gradient(to right, rgba(0,255,102,0.15), transparent)"
              : "rgba(255,255,255,0.06)",
          }}
        />

        {/* Date & Time */}
        <div className="space-y-2.5 flex-1">
          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: "rgba(0,210,255,0.08)",
                border: "1px solid rgba(0,210,255,0.12)",
              }}
            >
              <CalendarIcon
                className="w-3.5 h-3.5 text-[#00D2FF]"
                strokeWidth={1.5}
              />
            </div>
            <div>
              <span
                className="font-semibold"
                style={{ fontSize: "13px", color: "#fff" }}
              >
                {formattedDate}
              </span>
              <span
                className="font-medium ml-1.5"
                style={{ fontSize: "11.5px", color: "#6B6B80" }}
              >
                {formattedDay}
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: "rgba(217,70,239,0.08)",
                border: "1px solid rgba(217,70,239,0.12)",
              }}
            >
              <ClockIcon
                className="w-3.5 h-3.5 text-[#D946EF]"
                strokeWidth={1.5}
              />
            </div>
            <span
              className="font-semibold"
              style={{ fontSize: "13px", color: "#fff" }}
            >
              {appointment.time}
            </span>
            <span
              className="font-medium"
              style={{ fontSize: "11.5px", color: "#6B6B80" }}
            >
              Local time
            </span>
          </div>

          <div className="flex items-center gap-2.5">
            <div
              className="w-7 h-7 rounded-lg flex items-center justify-center shrink-0"
              style={{
                background: "rgba(167,139,250,0.08)",
                border: "1px solid rgba(167,139,250,0.12)",
              }}
            >
              <MapPinIcon
                className="w-3.5 h-3.5 text-[#A78BFA]"
                strokeWidth={1.5}
              />
            </div>
            <span
              className="font-medium"
              style={{ fontSize: "13px", color: "#9CA0B5" }}
            >
              DentWise Dental Center
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ============================================= */
/* ===== APPOINTMENTS PAGE ==================== */
/* ============================================= */
function AppointmentsPage() {
  const [selectedDentistId, setSelectedDentistId] = useState<string | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [bookedAppointment, setBookedAppointment] = useState<any>(null);

  const bookAppointmentMutation = useBookAppointment();
  const { data: userAppointments = [] } = useUserAppointments();

  const handleSelectDentist = (dentistId: string) => {
    setSelectedDentistId(dentistId);
    setSelectedDate("");
    setSelectedTime("");
    setSelectedType("");
  };

  const handleBookAppointment = async () => {
    if (!selectedDentistId || !selectedDate || !selectedTime) {
      toast.error("Please fill in all required fields");
      return;
    }

    const appointmentType = APPOINTMENT_TYPES.find(
      (t) => t.id === selectedType
    );

    bookAppointmentMutation.mutate(
      {
        doctorId: selectedDentistId,
        date: selectedDate,
        time: selectedTime,
        reason: appointmentType?.name,
      },
      {
        onSuccess: async (appointment) => {
          setBookedAppointment(appointment);

          try {
            const emailResponse = await fetch("/api/send-appointment-email", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify({
                userEmail: appointment.patientEmail,
                doctorName: appointment.doctorName,
                appointmentDate: format(
                  new Date(appointment.date),
                  "EEEE, MMMM d, yyyy"
                ),
                appointmentTime: appointment.time,
                appointmentType: appointmentType?.name,
                duration: appointmentType?.duration,
                price: appointmentType?.price,
              }),
            });

            if (!emailResponse.ok)
              console.error("Failed to send confirmation email");
          } catch (error) {
            console.error("Error sending confirmation email:", error);
          }

          setShowConfirmationModal(true);

          setSelectedDentistId(null);
          setSelectedDate("");
          setSelectedTime("");
          setSelectedType("");
          setCurrentStep(1);
        },
        onError: (error) =>
          toast.error(`Failed to book appointment: ${error.message}`),
      }
    );
  };

  return (
    <>
      <Navbar />

      <div
        className="min-h-screen"
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(0,210,255,0.04) 0%, transparent 50%), rgba(7,8,21,1)",
        }}
      >
        <div className="max-w-7xl mx-auto px-6 py-8 pt-24">
          {/* ═══ Header ═══ */}
          <div className="mb-10 animate-fade-in-up">
            <div
              className="inline-flex items-center gap-2.5 px-4 py-[9px] rounded-full mb-5"
              style={{
                background: "rgba(0,210,255,0.05)",
                border: "1px solid rgba(0,210,255,0.25)",
                backdropFilter: "blur(10px)",
              }}
            >
              <ZapIcon className="w-3.5 h-3.5 text-[#00D2FF]" />
              <span className="text-[11px] font-bold uppercase tracking-[0.12em] text-[#00D2FF]">
                Book Now
              </span>
            </div>

            <h1
              className="font-extrabold tracking-tight mb-2"
              style={{
                fontSize: "clamp(28px, 3.5vw, 42px)",
                lineHeight: "1.1",
              }}
            >
              <span className="text-white">Book an </span>
              <span
                style={{
                  background: "linear-gradient(to right, #00D2FF, #D946EF)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Appointment
              </span>
            </h1>
            <p
              className="font-medium"
              style={{ fontSize: "15px", lineHeight: "1.75", color: "#9CA0B5" }}
            >
              Find and book with verified dentists in your area
            </p>
          </div>

          {/* ═══ Progress Steps ═══ */}
          <ProgressSteps currentStep={currentStep} />

          {/* ═══ Step Content ═══ */}
          {currentStep === 1 && (
            <DoctorSelectionStep
              selectedDentistId={selectedDentistId}
              onContinue={() => setCurrentStep(2)}
              onSelectDentist={handleSelectDentist}
            />
          )}

          {currentStep === 2 && selectedDentistId && (
            <TimeSelectionStep
              selectedDentistId={selectedDentistId}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              selectedType={selectedType}
              onBack={() => setCurrentStep(1)}
              onContinue={() => setCurrentStep(3)}
              onDateChange={setSelectedDate}
              onTimeChange={setSelectedTime}
              onTypeChange={setSelectedType}
            />
          )}

          {currentStep === 3 && selectedDentistId && (
            <BookingConfirmationStep
              selectedDentistId={selectedDentistId}
              selectedDate={selectedDate}
              selectedTime={selectedTime}
              selectedType={selectedType}
              isBooking={bookAppointmentMutation.isPending}
              onBack={() => setCurrentStep(2)}
              onModify={() => setCurrentStep(2)}
              onConfirm={handleBookAppointment}
            />
          )}
        </div>

        {/* ═══ Existing Appointments ═══ */}
        {userAppointments.length > 0 && (
          <div className="max-w-7xl mx-auto px-6 py-8 pb-20">
            {/* Section header */}
            <div className="flex items-center gap-3 mb-6 animate-fade-in-up">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center"
                style={{
                  background: "rgba(0,210,255,0.1)",
                  border: "1px solid rgba(0,210,255,0.2)",
                }}
              >
                <CalendarIcon
                  className="w-4 h-4 text-[#00D2FF]"
                  strokeWidth={1.5}
                />
              </div>
              <div>
                <h2
                  className="font-bold text-white"
                  style={{ fontSize: "20px" }}
                >
                  Your Upcoming Appointments
                </h2>
                <p
                  className="font-medium"
                  style={{ fontSize: "13px", color: "#6B6B80" }}
                >
                  {userAppointments.length} appointment
                  {userAppointments.length > 1 ? "s" : ""} scheduled
                </p>
              </div>
            </div>

            {/* Cards grid */}
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              {userAppointments.map((appointment: any, index: number) => (
                <AppointmentCard
                  key={appointment.id}
                  appointment={appointment}
                  index={index}
                />
              ))}
            </div>
          </div>
        )}
      </div>

      {/* ═══ Confirmation Modal ═══ */}
      {bookedAppointment && (
        <AppointmentConfirmationModal
          open={showConfirmationModal}
          onOpenChange={setShowConfirmationModal}
          appointmentDetails={{
            doctorName: bookedAppointment.doctorName,
            appointmentDate: format(
              new Date(bookedAppointment.date),
              "EEEE, MMMM d, yyyy"
            ),
            appointmentTime: bookedAppointment.time,
            userEmail: bookedAppointment.patientEmail,
          }}
        />
      )}
    </>
  );
}

export default AppointmentsPage;