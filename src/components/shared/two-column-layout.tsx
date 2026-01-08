import React from "react";
import { cn } from "@/lib/utils/cn";

interface TwoColumnLayoutProps {
  left: React.ReactNode;
  right: React.ReactNode;
  reverse?: boolean;
  className?: string;
  leftClassName?: string;
  rightClassName?: string;
}

export function TwoColumnLayout({
  left,
  right,
  reverse = false,
  className,
  leftClassName,
  rightClassName,
}: TwoColumnLayoutProps) {
  return (
    <div
      className={cn(
        "grid gap-12 lg:grid-cols-2 lg:gap-16",
        reverse && "lg:grid-flow-dense",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col justify-center",
          reverse && "lg:col-start-2",
          leftClassName
        )}
      >
        {left}
      </div>
      <div
        className={cn(
          reverse && "lg:col-start-1",
          rightClassName
        )}
      >
        {right}
      </div>
    </div>
  );
}
