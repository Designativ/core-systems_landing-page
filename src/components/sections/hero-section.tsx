"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const spot1Ref = useRef<HTMLDivElement>(null);
  const spot2Ref = useRef<HTMLDivElement>(null);
  const spot3Ref = useRef<HTMLDivElement>(null);
  const spot4Ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      setMousePosition({ x, y });

      // Apply mouse-responsive transforms
      const offsetX1 = (x - 0.5) * 40;
      const offsetY1 = (y - 0.5) * 40;
      const offsetX2 = (x - 0.5) * -35;
      const offsetY2 = (y - 0.5) * -35;
      const offsetX3 = (x - 0.5) * 30;
      const offsetY3 = (y - 0.5) * 50;
      const offsetX4 = (x - 0.5) * -45;
      const offsetY4 = (y - 0.5) * 45;

      if (spot1Ref.current) {
        spot1Ref.current.style.setProperty("--mouse-offset-x", `${offsetX1}px`);
        spot1Ref.current.style.setProperty("--mouse-offset-y", `${offsetY1}px`);
      }
      if (spot2Ref.current) {
        spot2Ref.current.style.setProperty("--mouse-offset-x", `${offsetX2}px`);
        spot2Ref.current.style.setProperty("--mouse-offset-y", `${offsetY2}px`);
      }
      if (spot3Ref.current) {
        spot3Ref.current.style.setProperty("--mouse-offset-x", `${offsetX3}px`);
        spot3Ref.current.style.setProperty("--mouse-offset-y", `${offsetY3}px`);
      }
      if (spot4Ref.current) {
        spot4Ref.current.style.setProperty("--mouse-offset-x", `${offsetX4}px`);
        spot4Ref.current.style.setProperty("--mouse-offset-y", `${offsetY4}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  return (
    <div 
      className="relative isolate flex min-h-screen flex-col justify-center bg-terminal-dark-teal px-6 pt-0 lg:px-8 overflow-hidden"
      style={{
        "--mouse-x": mousePosition.x,
        "--mouse-y": mousePosition.y,
      } as React.CSSProperties}
    >
      {/* Animated gradient spots */}
      <div ref={spot1Ref} className="gradient-spot gradient-spot-1" aria-hidden="true" />
      <div ref={spot2Ref} className="gradient-spot gradient-spot-2" aria-hidden="true" />
      <div ref={spot3Ref} className="gradient-spot gradient-spot-3" aria-hidden="true" />
      <div ref={spot4Ref} className="gradient-spot gradient-spot-4" aria-hidden="true" />

      <div className="mx-auto w-full max-w-[773px] py-20 sm:py-24 relative z-10">
        {/* Badge/Announcement */}
        <div className="mb-8 hidden justify-center sm:flex">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white/60 ring-1 ring-white/10 hover:ring-white/20">
            AI-powered automation for growing BC businesses
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Next-Gen AI Solutions
            <br />
            <span className="text-terminal-lime">for Operational Teams</span>
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-white/70 sm:text-xl leading-8">
            We create targeted intelligent systems that reduce financial
            overhead, optimize leadership decisions, and transform every layer
            of your operational workflow.
          </p>
          <div className="mt-10 flex justify-center">
            <Button
              asChild
              size="lg"
              className="h-12 rounded-md bg-terminal-lime px-4 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-terminal-lime-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-terminal-lime"
            >
              <a
                href="#contact"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
              >
                Talk With Our Team
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
