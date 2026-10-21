import * as React from "react";
import { cn } from "@/lib/cn";

export interface SectionWrapperProps
  extends React.HTMLAttributes<HTMLElement> {
  variant?: "dark" | "surface" | "gradient" | "pattern";
}

export function SectionWrapper({
  className,
  variant = "dark",
  children,
  id,
  ...props
}: SectionWrapperProps) {
  const variants = {
    dark: "bg-[#050B14]",
    surface: "bg-[#070F1E] border-y border-white/5",
    gradient: "bg-radial-gradient bg-[#050B14]",
    pattern: "bg-[#050B14] bg-grid-pattern relative",
  };

  return (
    <section
      id={id}
      className={cn(
        "py-20 sm:py-24 lg:py-32 relative overflow-hidden",
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </section>
  );
}
