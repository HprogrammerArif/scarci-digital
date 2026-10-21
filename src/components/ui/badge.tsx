import * as React from "react";
import { cn } from "@/lib/cn";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "primary" | "success" | "outline" | "glow" | "dark";
  size?: "sm" | "md" | "lg";
  dot?: boolean;
}

export function Badge({
  className,
  variant = "default",
  size = "md",
  dot = false,
  children,
  ...props
}: BadgeProps) {
  const baseStyles =
    "inline-flex items-center gap-1.5 rounded-full font-medium transition-colors select-none";

  const variants = {
    default: "bg-white/10 text-white/90 border border-white/10",
    primary: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    success: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20",
    outline: "border border-white/20 text-white/80",
    glow: "bg-blue-500/15 text-blue-400 border border-blue-400/30 shadow-[0_0_15px_rgba(0,102,255,0.2)]",
    dark: "bg-[#0A1628] text-white/80 border border-white/10",
  };

  const sizes = {
    sm: "px-2.5 py-0.5 text-[11px]",
    md: "px-3 py-1 text-xs",
    lg: "px-4 py-1.5 text-sm",
  };

  const dotColors = {
    default: "bg-white/60",
    primary: "bg-blue-400",
    success: "bg-emerald-400",
    outline: "bg-white/60",
    glow: "bg-blue-400 animate-pulse",
    dark: "bg-blue-400",
  };

  return (
    <div
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {dot && (
        <span
          className={cn("w-1.5 h-1.5 rounded-full", dotColors[variant])}
          aria-hidden="true"
        />
      )}
      {children}
    </div>
  );
}
