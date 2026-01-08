import React from "react";
import { cn } from "@/lib/utils/cn";

interface FeatureCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  className?: string;
  variant?: "default" | "polygon";
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
  variant = "default",
}: FeatureCardProps) {
  if (variant === "polygon") {
    return (
      <div
        className={cn(
          "relative rounded-md border border-terminal-border-light bg-white p-8",
          "before:absolute before:left-0 before:top-0 before:h-1 before:w-full before:bg-terminal-lime before:opacity-20",
          className
        )}
      >
        {icon && <div className="mb-6 flex justify-center">{icon}</div>}
        <h3 className="mb-4 text-xl font-semibold text-terminal-lime">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-terminal-text-secondary">
          {description}
        </p>
      </div>
    );
  }

  return (
    <div
      className={cn(
        "rounded-md border border-terminal-border-light bg-white p-8 transition-colors hover:border-terminal-border-medium",
        className
      )}
    >
      {icon && (
        <div className="mb-6 flex h-10 w-10 items-center justify-center rounded bg-terminal-light-gray">
          {icon}
        </div>
      )}
      <h3 className="mb-4 text-lg font-semibold leading-tight">{title}</h3>
      <p className="text-base leading-relaxed text-terminal-text-secondary">
        {description}
      </p>
    </div>
  );
}
