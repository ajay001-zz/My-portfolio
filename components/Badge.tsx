import { motion } from "framer-motion";
import clsx from "clsx";
import { ReactNode } from "react";

interface BadgeProps {
  variant?: "primary" | "secondary" | "accent" | "muted";
  children: ReactNode;
  className?: string;
  animated?: boolean;
}

export function Badge({
  variant = "muted",
  children,
  className,
  animated = false,
}: BadgeProps) {
  const variantStyles = {
    primary: "bg-primary/10 text-primary border border-primary/20",
    secondary: "bg-secondary/10 text-secondary border border-secondary/20",
    accent: "bg-accent/10 text-accent border border-accent/20",
    muted: "bg-muted text-muted-foreground",
  };

  const Component = animated ? motion.span : "span";

  return (
    <Component
      whileHover={animated ? { scale: 1.05 } : undefined}
      className={clsx(
        "inline-flex items-center px-3 py-1 rounded-full text-sm font-medium transition-all",
        variantStyles[variant],
        className
      )}
    >
      {children}
    </Component>
  );
}
