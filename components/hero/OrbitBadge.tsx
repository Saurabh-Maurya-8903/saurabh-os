interface OrbitBadgeProps {
  label: string;
  className?: string;
}

export default function OrbitBadge({
  label,
  className = "",
}: OrbitBadgeProps) {
  return (
    <div
      className={`
      absolute
      rounded-xl
      border
      border-white/10
      bg-[#111827]
      px-4
      py-2
      text-sm
      text-white
      backdrop-blur-xl
      shadow-lg
      ${className}
    `}
    >
      {label}
    </div>
  );
}