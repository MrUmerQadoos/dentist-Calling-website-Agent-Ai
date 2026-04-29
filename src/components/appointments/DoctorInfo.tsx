/* ============================================= */
/* ===== DOCTOR INFO ========================== */
/* ============================================= */
import { useAvailableDoctors } from "@/hooks/use-doctors";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ShieldCheckIcon } from "lucide-react";
import { ToothLogoIcon } from "../ui/ToothLogoIcon";

function DoctorInfo({ doctorId }: { doctorId: string }) {
  const { data: doctors = [] } = useAvailableDoctors();
  const doctor = doctors.find((d) => d.id === doctorId);

  if (!doctor) return null;

  const initials = doctor.name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);

  return (
    <div className="flex items-center gap-4">
      <div className="relative">
        {/* Glow */}
        <div
          className="absolute pointer-events-none"
          style={{
            inset: "-5px",
            borderRadius: "50%",
            background:
              "radial-gradient(circle, rgba(0,210,255,0.18), transparent 70%)",
            filter: "blur(8px)",
          }}
        />
        <Avatar
          className="relative w-14 h-14"
          style={{
            border: "2px solid rgba(0,210,255,0.3)",
            boxShadow: "0 0 16px rgba(0,210,255,0.1)",
          }}
        >
          <AvatarImage
            src={doctor.imageUrl || undefined}
            alt={doctor.name}
            className="object-cover"
          />
          <AvatarFallback
            style={{
              background:
                "linear-gradient(135deg, rgba(0,210,255,0.18), rgba(217,70,239,0.12))",
              color: "#00D2FF",
              fontWeight: 700,
              fontSize: "16px",
            }}
          >
            {initials || "?"}
          </AvatarFallback>
        </Avatar>
      </div>
      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2">
          <h3
            className="font-bold text-white truncate"
            style={{ fontSize: "16px" }}
          >
            {doctor.name}
          </h3>
          <ShieldCheckIcon
            className="w-4 h-4 shrink-0"
            style={{ color: "#00FF66" }}
          />
        </div>
        <div className="flex items-center gap-2 mt-0.5">
          <ToothLogoIcon className="w-3 h-3" color="#00D2FF" />
          <p
            className="font-medium"
            style={{ fontSize: "13px", color: "#00D2FF" }}
          >
            {doctor.speciality || "General Dentistry"}
          </p>
        </div>
      </div>
    </div>
  );
}

export default DoctorInfo;