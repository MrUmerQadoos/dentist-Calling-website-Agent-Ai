/* ============================================= */
/* ===== NEXT APPOINTMENT ===================== */
/* ============================================= */
import { getUserAppointments } from "@/lib/actions/appointments";
import { format, isAfter, isSameDay, parseISO } from "date-fns";
import NoNextAppointments from "./NoNextAppointments";
import { CalendarIcon, ClockIcon, UserIcon } from "lucide-react";

async function NextAppointment() {
  const appointments = await getUserAppointments();

  const upcomingAppointments =
    appointments?.filter((appointment) => {
      const appointmentDate = parseISO(appointment.date);
      const today = new Date();
      const isUpcoming =
        isSameDay(appointmentDate, today) || isAfter(appointmentDate, today);
      return isUpcoming && appointment.status === "CONFIRMED";
    }) || [];

  const nextAppointment = upcomingAppointments[0];

  if (!nextAppointment) return <NoNextAppointments />;

  const appointmentDate = parseISO(nextAppointment.date);
  const formattedDate = format(appointmentDate, "EEEE, MMMM d, yyyy");
  const isToday = isSameDay(appointmentDate, new Date());

  return (
    <div className="relative h-full animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
      {/* Gradient border glow */}
      <div
        className="absolute pointer-events-none"
        style={{
          inset: "-1px",
          borderRadius: "24px",
          background:
            "linear-gradient(135deg, rgba(0,210,255,0.3), rgba(217,70,239,0.15))",
          filter: "blur(0.5px)",
          opacity: 0.5,
        }}
      />
      <div
        className="relative z-10 h-full rounded-[24px] p-6 flex flex-col"
        style={{
          background: "rgba(13,20,36,0.65)",
          backdropFilter: "blur(28px)",
          WebkitBackdropFilter: "blur(28px)",
          borderTop: "1px solid rgba(0,210,255,0.15)",
          borderLeft: "1px solid rgba(0,210,255,0.1)",
          borderBottom: "1px solid rgba(0,0,0,0.5)",
          borderRight: "1px solid rgba(217,70,239,0.1)",
          boxShadow:
            "0 25px 50px rgba(0,0,0,0.45), inset 0 1px 0 rgba(255,255,255,0.04)",
        }}
      >
        {/* Header */}
        <div className="flex items-center gap-3 mb-5">
          <div
            className="w-8 h-8 rounded-lg flex items-center justify-center"
            style={{
              background: "rgba(0,210,255,0.1)",
              border: "1px solid rgba(0,210,255,0.2)",
            }}
          >
            <CalendarIcon className="w-4 h-4 text-[#00D2FF]" strokeWidth={1.5} />
          </div>
          <span className="font-semibold text-white" style={{ fontSize: "15px" }}>
            Next Appointment
          </span>
        </div>

        {/* Status badges */}
        <div className="flex items-center justify-between mb-5">
          <div
            className="inline-flex items-center gap-2 px-3 py-[6px] rounded-full"
            style={{
              background: isToday
                ? "rgba(0,255,102,0.06)"
                : "rgba(0,210,255,0.05)",
              border: isToday
                ? "1px solid rgba(0,255,102,0.25)"
                : "1px solid rgba(0,210,255,0.2)",
            }}
          >
            {isToday ? (
              <span className="relative flex h-[6px] w-[6px]">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00FF66] opacity-60" />
                <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-[#00FF66]" />
              </span>
            ) : (
              <span
                className="block w-[6px] h-[6px] rounded-full bg-[#00D2FF]"
                style={{ boxShadow: "0 0 6px #00D2FF" }}
              />
            )}
            <span
              className="font-semibold text-[11px] uppercase tracking-wider"
              style={{
                color: isToday ? "#00FF66" : "#00D2FF",
              }}
            >
              {isToday ? "Today" : "Upcoming"}
            </span>
          </div>
          <span
            className="px-2.5 py-1 rounded-lg font-semibold text-[11px] uppercase tracking-wider"
            style={{
              background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)",
              color: "#9CA0B5",
            }}
          >
            {nextAppointment.status}
          </span>
        </div>

        {/* Detail rows */}
        <div className="space-y-4 flex-1">
          {[
            {
              icon: (
                <UserIcon
                  className="w-4 h-4 text-[#00D2FF]"
                  strokeWidth={1.5}
                />
              ),
              label: nextAppointment.doctorName,
              sub: nextAppointment.reason,
            },
            {
              icon: (
                <CalendarIcon
                  className="w-4 h-4 text-[#A78BFA]"
                  strokeWidth={1.5}
                />
              ),
              label: formattedDate,
              sub: isToday ? "Today" : format(appointmentDate, "EEEE"),
            },
            {
              icon: (
                <ClockIcon
                  className="w-4 h-4 text-[#D946EF]"
                  strokeWidth={1.5}
                />
              ),
              label: nextAppointment.time,
              sub: "Local time",
            },
          ].map((item, i) => (
            <div key={i} className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                {item.icon}
              </div>
              <div className="min-w-0">
                <p
                  className="font-semibold text-white truncate"
                  style={{ fontSize: "13.5px" }}
                >
                  {item.label}
                </p>
                <p style={{ fontSize: "11.5px", color: "#6B6B80" }}>
                  {item.sub}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* More count */}
        {upcomingAppointments.length > 1 && (
          <p
            className="text-center font-medium mt-5 pt-4"
            style={{
              fontSize: "12px",
              color: "#6B6B80",
              borderTop: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            +{upcomingAppointments.length - 1} more upcoming appointment
            {upcomingAppointments.length > 2 ? "s" : ""}
          </p>
        )}
      </div>
    </div>
  );
}

export default NextAppointment;