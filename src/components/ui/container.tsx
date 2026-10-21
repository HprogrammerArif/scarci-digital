import * as React from "react";
import { cn } from "@/lib/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: "default" | "sm" | "narrow" | "wide";
}

export function Container({
  className,
  size = "default",
  children,
  ...props
}: ContainerProps) {
  const sizeMap = {
    default: "max-w-[1400px]",
    wide: "max-w-[1600px]",
    narrow: "max-w-4xl",
    sm: "max-w-5xl",
  };

  return (
    <div
      className={cn(
        "w-full mx-auto px-4 sm:px-6 lg:px-8",
        sizeMap[size],
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
