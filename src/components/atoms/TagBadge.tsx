"use client";

interface TagBadgeProps {
  label: string;
  variant?: "blue" | "red" | "neutral";
}

const variantStyles = {
  blue: "bg-m-blue/8 text-m-blue border-m-blue/15",
  red: "bg-m-red/8 text-m-red border-m-red/15",
  neutral: "bg-carbon/5 text-carbon-light border-carbon/10",
};

export function TagBadge({ label, variant = "neutral" }: TagBadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 rounded-full text-[11px] font-semibold tracking-wide uppercase border ${variantStyles[variant]}`}
    >
      {label}
    </span>
  );
}
