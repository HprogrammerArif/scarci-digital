import * as React from "react";
import { cn } from "@/lib/cn";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  hover?: boolean;
  glow?: boolean;
}

export function Card({
  className,
  hover = true,
  glow = false,
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        "rounded-2xl border transition-all duration-300",
        "bg-[#0A1628]/80 backdrop-blur-md border-white/10",
        hover &&
          "hover:border-blue-500/40 hover:bg-[#0D1D35]/90 hover:-translate-y-1 hover:shadow-2xl hover:shadow-blue-500/10",
        glow && "border-blue-500/30 shadow-[0_0_30px_rgba(0,102,255,0.15)]",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}

export function CardHeader({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 sm:p-8 pb-4", className)} {...props} />;
}

export function CardTitle({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) {
  return (
    <h3
      className={cn(
        "text-xl sm:text-2xl font-bold tracking-tight text-white",
        className
      )}
      {...props}
    />
  );
}

export function CardDescription({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) {
  return (
    <p
      className={cn("text-sm text-slate-400 mt-2 leading-relaxed", className)}
      {...props}
    />
  );
}

export function CardContent({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return <div className={cn("p-6 sm:p-8 pt-0", className)} {...props} />;
}

export function CardFooter({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("p-6 sm:p-8 pt-0 flex items-center gap-4", className)}
      {...props}
    />
  );
}
