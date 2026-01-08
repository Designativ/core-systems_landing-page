"use client";

import React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils/cn";

interface CarouselControlsProps {
  onPrevious: () => void;
  onNext: () => void;
  currentPage?: number;
  totalPages?: number;
  className?: string;
}

export function CarouselControls({
  onPrevious,
  onNext,
  currentPage,
  totalPages,
  className,
}: CarouselControlsProps) {
  return (
    <div className={cn("flex items-center justify-between", className)}>
      <Button
        variant="outline"
        size="icon"
        onClick={onPrevious}
        className="h-10 w-10 rounded-md border-terminal-border-light"
        aria-label="Previous"
      >
        <ChevronLeft className="h-5 w-5" />
      </Button>

      {currentPage !== undefined && totalPages !== undefined && (
        <span className="text-sm text-terminal-text-secondary">
          Page {currentPage} of {totalPages}
        </span>
      )}

      <Button
        variant="outline"
        size="icon"
        onClick={onNext}
        className="h-10 w-10 rounded-md border-terminal-border-light"
        aria-label="Next"
      >
        <ChevronRight className="h-5 w-5" />
      </Button>
    </div>
  );
}
