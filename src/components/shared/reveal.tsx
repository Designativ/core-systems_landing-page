"use client";

import { ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils/cn";

interface RevealProps {
  children: ReactNode;
  animation?: "fade-up" | "fade-down" | "fade-left" | "fade-right" | "fade-in" | "zoom-in";
  delay?: 1 | 2 | 3 | 4 | 5 | 6;
  className?: string;
  threshold?: number;
  rootMargin?: string;
  once?: boolean;
}

export function Reveal({
  children,
  animation = "fade-up",
  delay,
  className,
  threshold = 0.1,
  rootMargin = "0px",
  once = true,
}: RevealProps) {
  const { ref, isVisible } = useReveal({ threshold, rootMargin, once });

  return (
    <div
      ref={ref as React.RefObject<HTMLDivElement>}
      className={cn(
        "reveal",
        animation,
        delay && `delay-${delay}`,
        isVisible && "active",
        className
      )}
    >
      {children}
    </div>
  );
}
