/* ============================================= */
/* ===== DOCTOR SELECTION STEP ================ */
/* ============================================= */
import { useAvailableDoctors } from "@/hooks/use-doctors";
import {
  MapPinIcon,
  PhoneIcon,
  StarIcon,
  ShieldCheckIcon,
  ArrowRightIcon,
} from "lucide-react";
import { Badge } from "../ui/badge";
import { DoctorCardsLoading } from "./DoctorCardsLoading";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ToothLogoIcon } from "../ui/ToothLogoIcon";


interface DoctorSelectionStepProps {
  selectedDentistId: string | null;
  onSelectDentist: (dentistId: string) => void;
  onContinue: () => void;
}

function DoctorSelectionStep({
  onContinue,
  onSelectDentist,
  selectedDentistId,
}: DoctorSelectionStepProps) {
  const { data: dentists = [], isLoading } = useAvailableDoctors();

  if (isLoading)
    return (
      <div className="space-y-6 animate-fade-in-up">
        <div className="flex items-center gap-3">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center"
            style={{
              background: "rgba(0,210,255,0.1)",
              border: "1px solid rgba(0,210,255,0.2)",
            }}
          >
            <ToothLogoIcon className="w-5 h-5" color="#00D2FF" />
          </div>
          <h2
            className="font-extrabold text-white"
            style={{ fontSize: "clamp(22px, 2.5vw, 30px)", lineHeight: "1.15" }}
          >
            Choose Your Dentist
          </h2>
        </div>
        <DoctorCardsLoading />
      </div>
    );

  return (
    <div className="space-y-6 animate-fade-in-up">
      <div className="flex items-center gap-3">
        <div
          className="w-10 h-10 rounded-xl flex items-center justify-center"
          style={{
            background: "rgba(0,210,255,0.1)",
            border: "1px solid rgba(0,210,255,0.2)",
          }}
        >
          <ToothLogoIcon className="w-5 h-5" color="#00D2FF" />
        </div>
        <div>
          <h2
            className="font-extrabold text-white"
            style={{ fontSize: "clamp(22px, 2.5vw, 30px)", lineHeight: "1.15" }}
          >
            Choose Your Dentist
          </h2>
          <p
            className="font-medium"
            style={{ fontSize: "13px", color: "#6B6B80" }}
          >
            {dentists.length} verified professional{dentists.length !== 1 ? "s" : ""} available
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {dentists.map((dentist, i) => {
          const isSelected = selectedDentistId === dentist.id;
          const initials = dentist.name
            .split(" ")
            .map((n) => n[0])
            .join("")
            .toUpperCase()
            .slice(0, 2);

          return (
            <div
              key={dentist.id}
              className="relative animate-fade-in-up cursor-pointer group"
              style={{ animationDelay: `${i * 0.08}s` }}
              onClick={() => onSelectDentist(dentist.id)}
            >
              {/* Animated border glow */}
              <div
                className="absolute pointer-events-none transition-all duration-500"
                style={{
                  inset: "-1px",
                  borderRadius: "20px",
                  background: isSelected
                    ? "linear-gradient(135deg, #4FACFE, #7C3AED, #D946EF)"
                    : "linear-gradient(135deg, rgba(0,210,255,0.12), rgba(0,210,255,0.02), rgba(0,210,255,0.12))",
                  filter: "blur(0.5px)",
                  opacity: isSelected ? 0.85 : 0.3,
                }}
              />
              {/* Hover glow */}
              <div
                className="absolute pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  inset: "-8px",
                  borderRadius: "28px",
                  background: isSelected
                    ? "radial-gradient(circle at 30% 20%, rgba(79,172,254,0.1), transparent 60%)"
                    : "radial-gradient(circle at 30% 20%, rgba(0,210,255,0.06), transparent 60%)",
                  filter: "blur(20px)",
                }}
              />

              <div
                className="relative z-10 h-full rounded-[20px] overflow-hidden transition-all duration-500"
                style={{
                  background: isSelected
                    ? "rgba(13,20,36,0.85)"
                    : "rgba(13,20,36,0.6)",
                  backdropFilter: "blur(28px)",
                  WebkitBackdropFilter: "blur(28px)",
                  border: isSelected
                    ? "1px solid rgba(79,172,254,0.3)"
                    : "1px solid rgba(255,255,255,0.07)",
                  boxShadow: isSelected
                    ? "0 25px 50px rgba(0,0,0,0.5), 0 0 24px rgba(79,172,254,0.12)"
                    : "0 16px 32px rgba(0,0,0,0.35)",
                  transform: isSelected ? "scale(1.02)" : "scale(1)",
                }}
              >
                {/* Selected indicator */}
                {isSelected && (
                  <div
                    className="absolute top-3 right-3 w-6 h-6 rounded-full flex items-center justify-center animate-fade-in-up"
                    style={{
                      background:
                        "linear-gradient(135deg, #4FACFE, #7C3AED)",
                      boxShadow: "0 0 12px rgba(79,172,254,0.3)",
                    }}
                  >
                    <ShieldCheckIcon className="w-3.5 h-3.5 text-white" strokeWidth={2.5} />
                  </div>
                )}

                {/* Header */}
                <div className="p-5 pb-3">
                  <div className="flex items-start gap-3.5">
                    <div className="relative shrink-0">
                      {isSelected && (
                        <div
                          className="absolute pointer-events-none animate-pulse"
                          style={{
                            inset: "-3px",
                            borderRadius: "50%",
                            background:
                              "radial-gradient(circle, rgba(0,210,255,0.25), transparent 70%)",
                          }}
                        />
                      )}
                      <Avatar
                        className="relative w-14 h-14 transition-all duration-500"
                        style={{
                          border: isSelected
                            ? "2px solid rgba(0,210,255,0.5)"
                            : "2px solid rgba(255,255,255,0.1)",
                          boxShadow: isSelected
                            ? "0 0 20px rgba(0,210,255,0.2)"
                            : "none",
                        }}
                      >
                        <AvatarImage
                          src={dentist.imageUrl || undefined}
                          alt={dentist.name}
                          className="object-cover"
                        />
                        <AvatarFallback
                          style={{
                            background: isSelected
                              ? "linear-gradient(135deg, rgba(0,210,255,0.25), rgba(217,70,239,0.18))"
                              : "linear-gradient(135deg, rgba(0,210,255,0.1), rgba(0,210,255,0.03))",
                            color: isSelected ? "#00D2FF" : "#9CA0B5",
                            fontWeight: 700,
                            fontSize: "16px",
                            transition: "all 0.5s",
                          }}
                        >
                          {initials || "?"}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    <div className="flex-1 min-w-0 pr-6">
                      <h3
                        className="font-bold text-white truncate"
                        style={{ fontSize: "15px" }}
                      >
                        {dentist.name}
                      </h3>
                      <div className="flex items-center gap-1.5 mt-0.5">
                        <ToothLogoIcon className="w-3 h-3" color="#00D2FF" />
                        <p
                          className="font-medium"
                          style={{ fontSize: "12px", color: "#00D2FF" }}
                        >
                          {dentist.speciality || "General Dentistry"}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 mt-1.5">
                        <div className="flex items-center gap-1">
                          <StarIcon
                            className="w-3 h-3 fill-[#EAB308] text-[#EAB308]"
                          />
                          <span
                            className="font-bold"
                            style={{ fontSize: "11px", color: "#fff" }}
                          >
                            5.0
                          </span>
                        </div>
                        <span style={{ fontSize: "11px", color: "#6B6B80" }}>
                          ({dentist.appointmentCount})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Body */}
                <div className="px-5 pb-4 space-y-2">
                  <div className="flex items-center gap-2">
                    <MapPinIcon
                      className="w-3 h-3 shrink-0"
                      style={{ color: "#6B6B80" }}
                    />
                    <span style={{ fontSize: "12px", color: "#9CA0B5" }}>
                      DentWise
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <PhoneIcon
                      className="w-3 h-3 shrink-0"
                      style={{ color: "#6B6B80" }}
                    />
                    <span style={{ fontSize: "12px", color: "#9CA0B5" }}>
                      {dentist.phone}
                    </span>
                  </div>
                  <p
                    className="font-medium mt-1"
                    style={{
                      fontSize: "11.5px",
                      color: "#6B6B80",
                      lineHeight: "1.5",
                    }}
                  >
                    {dentist.bio ||
                      "Experienced dental professional providing quality care."}
                  </p>
                  <div className="pt-1">
                    <Badge variant="green" size="sm">
                      <ShieldCheckIcon className="w-2.5 h-2.5" />
                      Licensed
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {selectedDentistId && (
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
            Continue
            <ArrowRightIcon className="w-4 h-4" strokeWidth={2} />
          </button>
        </div>
      )}
    </div>
  );
}

export default DoctorSelectionStep;