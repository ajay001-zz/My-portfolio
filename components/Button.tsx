import { motion } from "framer-motion";
import { ReactNode } from "react";
import clsx from "clsx";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  isLoading?: boolean;
}

export function Button({
  variant = "primary",
  size = "md",
  children,
  isLoading,
  disabled,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "font-semibold rounded-lg transition-all duration-300 flex items-center justify-center gap-2";

  const variantStyles = {
    primary:
      "bg-primary text-white hover:shadow-lg hover:shadow-primary/50 hover:scale-105 disabled:opacity-50",
    secondary:
      "bg-secondary text-white hover:shadow-lg hover:shadow-secondary/50 hover:scale-105 disabled:opacity-50",
    outline:
      "border border-primary text-primary hover:bg-primary/10 disabled:opacity-50",
    ghost:
      "text-primary hover:bg-primary/10 disabled:opacity-50",
  };

  const sizeStyles = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  return (
    <motion.button
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      disabled={disabled || isLoading}
      className={clsx(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      {...props}
    >
      {children}
    </motion.button>
  );
}
