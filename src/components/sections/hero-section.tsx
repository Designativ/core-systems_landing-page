"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { ToolLogos } from "@/components/shared/tool-logos";

export function HeroSection() {
  return (
    <div className="relative isolate flex min-h-screen flex-col justify-center bg-terminal-dark-teal px-6 pt-14 lg:px-8">
      {/* Top decorative blur element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-terminal-lime/40 to-terminal-lime/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto w-full max-w-[773px] py-12 sm:py-16">
        {/* Badge/Announcement */}
        <div className="mb-8 hidden justify-center sm:flex">
          <div className="relative rounded-full px-3 py-1 text-sm leading-6 text-white/60 ring-1 ring-white/10 hover:ring-white/20">
            Trusted AI automation partner for operational excellence
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

          {/* Tool Logos */}
          <div className="mt-16 border-t border-white/10 pt-12">
            <ToolLogos />
          </div>
        </div>
      </div>

      {/* Bottom decorative blur element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-terminal-lime/40 to-terminal-lime/20 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
    </div>
  );
}
