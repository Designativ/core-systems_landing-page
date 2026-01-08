import React from "react";
import { cn } from "@/lib/utils/cn";

interface BenefitSectionProps {
  number: string;
  title: string;
  description: string;
  className?: string;
}

export function BenefitSection({
  number,
  title,
  description,
  className,
}: BenefitSectionProps) {
  return (
    <div className={cn("flex gap-8", className)}>
      <div className="flex shrink-0 flex-col items-center">
        <div className="h-12 w-0.5 bg-terminal-lime" />
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-terminal-lime font-mono text-lg font-semibold text-terminal-text-primary">
          {number}
        </div>
        <div className="h-full w-0.5 bg-terminal-lime" />
      </div>
      <div className="flex-1 pb-16">
        <h3 className="mb-4 text-2xl font-semibold leading-tight">
          {title}
        </h3>
        <p className="text-base leading-relaxed text-terminal-text-secondary">
          {description}
        </p>
      </div>
    </div>
  );
}
