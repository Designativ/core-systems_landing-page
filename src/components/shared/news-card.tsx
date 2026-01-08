import React from "react";
import { cn } from "@/lib/utils/cn";

interface NewsCardProps {
  category: string;
  date: string;
  title: string;
  variant?: "dark" | "light" | "accent";
  className?: string;
}

const variantStyles = {
  dark: "bg-terminal-dark-teal text-white",
  light: "bg-terminal-light-gray text-terminal-text-primary",
  accent: "bg-terminal-lime text-terminal-text-primary",
};

export function NewsCard({
  category,
  date,
  title,
  variant = "dark",
  className,
}: NewsCardProps) {
  return (
    <div
      className={cn(
        "rounded-md p-8 transition-transform hover:scale-[1.02]",
        variantStyles[variant],
        className
      )}
    >
      <div className="mb-6 flex items-start justify-between">
        <span className="text-xs font-medium uppercase tracking-wider opacity-70">
          {category}
        </span>
        <span className="text-xs font-medium opacity-70">{date}</span>
      </div>
      <h3 className="text-xl font-semibold leading-tight md:text-2xl">
        {title}
      </h3>
    </div>
  );
}
