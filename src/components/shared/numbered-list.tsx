import React from "react";
import { cn } from "@/lib/utils/cn";

interface NumberedListProps {
  items: string[];
  accentColor?: "lime" | "white";
  className?: string;
}

export function NumberedList({
  items,
  accentColor = "lime",
  className,
}: NumberedListProps) {
  const accentClass =
    accentColor === "lime" ? "bg-terminal-lime" : "bg-white";

  return (
    <div className={cn("relative", className)}>
      <div
        className={cn(
          "absolute left-0 top-0 h-full w-0.5",
          accentClass
        )}
      />
      <ul className="ml-6 space-y-6">
        {items.map((item, index) => (
          <li key={index} className="flex items-start gap-4">
            <span
              className={cn(
                "mt-1 flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-sm font-semibold",
                accentColor === "lime"
                  ? "bg-terminal-lime text-terminal-text-primary"
                  : "bg-white text-terminal-dark-teal"
              )}
            >
              {index + 1}
            </span>
            <span
              className={cn(
                "text-base leading-relaxed",
                accentColor === "lime"
                  ? "text-terminal-text-primary"
                  : "text-white"
              )}
            >
              {item}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
