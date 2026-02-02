"use client";

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function HeroSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0.5, y: 0.5 });
  const [highlightedService, setHighlightedService] = useState(0);
  const spot1Ref = useRef<HTMLDivElement>(null);
  const spot2Ref = useRef<HTMLDivElement>(null);
  const spot3Ref = useRef<HTMLDivElement>(null);
  const spot4Ref = useRef<HTMLDivElement>(null);

  const services = [
    "Operational Infrastructure",
    "AI Strategy & Roadmap",
    "AI Automation",
    "Websites & Apps",
  ];

  // Auto-highlight services one by one
  useEffect(() => {
    const interval = setInterval(() => {
      setHighlightedService((prev) => (prev + 1) % services.length);
    }, 2500); // Change every 2.5 seconds for smoother transitions

    return () => clearInterval(interval);
  }, [services.length]);

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
      className="relative isolate flex min-h-[90vh] flex-col bg-terminal-dark-teal px-6 pt-0 lg:px-8 overflow-hidden"
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

      <div className="mx-auto w-full max-w-[900px] pt-10 sm:pt-12 pb-24 relative z-10 flex flex-col justify-center min-h-[calc(90vh-80px)]">
        {/* Badge/Announcement */}
        <div className="mb-8 hidden justify-center sm:flex">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white/60 ring-1 ring-white/10 hover:ring-white/20">
            AI-powered automation for growing BC businesses
          </div>
        </div>

        <div className="text-center">
          <h1 className="text-5xl font-semibold tracking-tight text-balance text-white sm:text-7xl">
            Put Agentic AI to Work — Today
          </h1>
          <p className="mt-8 text-lg font-medium text-pretty text-white/90 sm:text-xl leading-8">
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

      {/* Services Pills - Bottom (absolutely positioned) */}
      <div className="absolute bottom-0 left-0 right-0 px-6 lg:px-8 py-4 bg-terminal-dark-teal flex flex-wrap items-center justify-center gap-3 z-20">
          {services.map((service, index) => {
            const isHighlighted = highlightedService === index;
            return (
              <a
                key={index}
                href="#services"
                onClick={(e) => {
                  e.preventDefault();
                  const element = document.querySelector("#services");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth", block: "start" });
                  }
                }}
                className={`rounded-full border px-4 py-2 text-base font-medium transition-all duration-700 ease-in-out hover:border-terminal-lime hover:bg-terminal-lime/10 hover:text-terminal-lime ${
                  isHighlighted
                    ? "border-terminal-lime bg-terminal-lime/10 text-terminal-lime"
                    : "border-white/30 bg-transparent text-white"
                }`}
              >
                {service}
              </a>
            );
          })}
      </div>
    </div>
  );
}
