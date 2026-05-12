"use client";

import { motion } from "framer-motion";

type ButtonVariant = "primary" | "secondary" | "ghost";

interface ButtonProps {
  children: React.ReactNode;
  variant?: ButtonVariant;
  href?: string;
  onClick?: () => void;
  className?: string;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-carbon text-alpine-white hover:bg-carbon/90 shadow-lg hover:shadow-xl",
  secondary:
    "border-2 border-carbon/10 text-carbon hover:border-carbon/30 hover:bg-cool-grey",
  ghost: "text-carbon hover:text-m-blue",
};

export function Button({
  children,
  variant = "primary",
  href,
  onClick,
  className = "",
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-semibold text-sm tracking-tight cursor-pointer";
  const combinedClasses = `${baseClasses} ${variantStyles[variant]} ${className}`;

  const motionProps = {
    whileHover: { scale: 1.02 },
    whileTap: { scale: 0.98 },
    transition: { type: "spring", stiffness: 400, damping: 25 },
  };

  if (href) {
    return (
      <motion.a href={href} className={combinedClasses} {...motionProps}>
        {children}
      </motion.a>
    );
  }

  return (
    <motion.button
      onClick={onClick}
      className={combinedClasses}
      {...motionProps}
    >
      {children}
    </motion.button>
  );
}
