/* ============================================= */
/* ===== TOOTH LOGO ICON (shared) ============= */
/* ============================================= */
export function ToothLogoIcon({
  className = "w-5 h-5",
  color = "#00D2FF",
}: {
  className?: string;
  color?: string;
}) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      className={className}
      style={{ color }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2C9.5 2 7.5 3 6.5 5C5.5 7 5 9 5.5 11C6 13 6.5 15 7 17C7.5 19 8 21 9.5 21C11 21 11 19 12 19C13 19 13 21 14.5 21C16 21 16.5 19 17 17C17.5 15 18 13 18.5 11C19 9 18.5 7 17.5 5C16.5 3 14.5 2 12 2Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}