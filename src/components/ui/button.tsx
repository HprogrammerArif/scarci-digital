import * as React from "react";
import { cn } from "@/lib/cn";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "dark" | "glow";
  size?: "sm" | "md" | "lg";
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      children,
      disabled,
      ...props
    },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none select-none cursor-pointer";

    const variants = {
      primary:
        "bg-[#0066FF] hover:bg-[#0052CC] text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0 rounded-xl",
      secondary:
        "bg-white/10 hover:bg-white/15 text-white border border-white/10 hover:border-white/20 backdrop-blur-md rounded-xl hover:-translate-y-0.5 active:translate-y-0",
      outline:
        "border border-white/20 hover:border-[#0066FF] text-white hover:text-white hover:bg-blue-500/10 rounded-xl",
      ghost:
        "text-white/80 hover:text-white hover:bg-white/5 rounded-lg",
      dark:
        "bg-[#0A1628] hover:bg-[#0D1D35] text-white border border-white/10 hover:border-blue-500/50 rounded-xl",
      glow:
        "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white rounded-xl shadow-[0_0_25px_rgba(0,102,255,0.4)] hover:shadow-[0_0_35px_rgba(0,102,255,0.6)] hover:-translate-y-0.5 active:translate-y-0",
    };

    const sizes = {
      sm: "text-xs px-3.5 py-1.5 gap-1.5",
      md: "text-sm px-5 py-2.5 gap-2",
      lg: "text-base px-6 py-3.5 gap-2.5 font-semibold",
    };

    return (
      <button
        ref={ref}
        disabled={disabled}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
