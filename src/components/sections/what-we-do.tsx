"use client";

import { useEffect, useState } from "react";
import { Search, Brain, Bot } from "lucide-react";

const services = [
  {
    icon: Search,
    title: "UX+SEO Audit",
    description:
      "We identify what's stopping visitors from converting—usability issues, technical problems, and conversion blockers. You'll get a detailed report with screenshots and a prioritized action plan.",
  },
  {
    icon: Brain,
    title: "AI Strategy & Roadmap",
    description:
      "We analyze your business processes to identify high-impact automation opportunities and create a pragmatic implementation roadmap— just proven strategies that deliver measurable results.",
  },
  {
    icon: Bot,
    title: "AI Automation, Websites & Apps",
    description:
      "We build AI-powered automation systems, conversion-focused websites, and custom applications designed for your exact needs. We deliver measurable ROI with solutions your team will actually use. Every project includes training, support, and ongoing optimization.",
  },
];

export function WhatWeDo() {
  const [activeCard, setActiveCard] = useState(0);
  const totalCards = services.length;
  const cardDuration = 3000; // 3 seconds per card

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % totalCards);
    }, cardDuration);

    return () => clearInterval(interval);
  }, [totalCards]);

  return (
    <section id="services" className="relative isolate bg-terminal-dark-teal py-24 sm:py-32">
      {/* More gradient blur elements */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-terminal-lime/40 to-terminal-lime/20 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 -rotate-[30deg] bg-gradient-to-tr from-terminal-lime/40 to-terminal-lime/20 opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/2 -z-10 transform-gpu overflow-hidden blur-3xl -translate-y-1/2"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[60deg] bg-gradient-to-tr from-terminal-lime/30 to-terminal-lime/15 opacity-25 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/4 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+10rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 -rotate-[45deg] bg-gradient-to-tr from-terminal-lime/35 to-terminal-lime/18 opacity-25 sm:left-[calc(50%+45rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-3/4 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%-20rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[45deg] bg-gradient-to-tr from-terminal-lime/35 to-terminal-lime/18 opacity-25 sm:left-[calc(50%-50rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-1/3 -z-10 transform-gpu overflow-hidden blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-[calc(50%+15rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 -rotate-[60deg] bg-gradient-to-tr from-terminal-lime/30 to-terminal-lime/15 opacity-20 sm:left-[calc(50%+50rem)] sm:w-[72.1875rem]"
        />
      </div>

      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-center text-base font-semibold leading-7 text-terminal-lime">
          Our Services
        </h2>
        <p className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
          What We Do
        </p>
        <div className="mt-10 grid gap-4 sm:mt-16 lg:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isActive = activeCard === index;
            return (
              <div key={index} className="relative min-h-[500px]">
                <div
                  className={`relative flex h-full min-h-[500px] flex-col overflow-hidden rounded-lg border-2 border-terminal-border-light bg-terminal-dark-teal-alt p-8 ${isActive ? "animated-border active bg-terminal-dark-teal-alt" : ""}`}
                >
                  {/* Icon */}
                  <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-terminal-lime/10 z-10">
                    <Icon className="h-7 w-7 text-terminal-lime z-10" />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <p className="mt-2 text-lg font-medium tracking-tight text-white">
                      {service.title}
                    </p>
                    <p className="mt-2 text-sm leading-6 text-white/60">
                      {service.description}
                    </p>
                  </div>

                  {/* Illustration area */}
                  {index === 0 && (
                    <div className="@container relative min-h-[180px] w-full grow max-lg:mx-auto max-lg:max-w-sm mt-8">
                      <div className="absolute inset-x-10 top-10 bottom-0 overflow-hidden rounded-t-[12cqw] border-x-[3cqw] border-t-[3cqw] border-terminal-border-teal bg-terminal-dark-teal outline outline-white/20">
                        <div className="flex h-full items-center justify-center">
                          <Search className="h-20 w-20 text-terminal-lime/40" />
                        </div>
                      </div>
                    </div>
                  )}
                  {index === 1 && (
                    <div className="flex flex-1 items-center justify-center px-8 pb-6 sm:px-10 sm:pb-8 mt-8">
                      <Brain className="h-20 w-20 text-terminal-lime/40" />
                    </div>
                  )}
                  {index === 2 && (
                    <div className="relative min-h-[180px] w-full grow mt-8">
                      <div className="absolute top-6 right-6 bottom-6 left-6 overflow-hidden rounded-lg border-2 border-terminal-border-teal bg-terminal-dark-teal/60 outline outline-white/10">
                        <div className="flex bg-terminal-dark-teal/80 outline outline-white/5">
                          <div className="-mb-px flex text-sm leading-6 font-medium text-white/60">
                            <div className="border-r border-b border-r-white/10 border-b-white/20 bg-white/5 px-4 py-2 text-white">
                              Automation.jsx
                            </div>
                            <div className="border-r border-white/10 px-4 py-2">App.jsx</div>
                          </div>
                        </div>
                        <div className="px-6 pt-6 pb-8">
                          <div className="flex items-center justify-center">
                            <Bot className="h-16 w-16 text-terminal-lime/40" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div className="pointer-events-none absolute inset-px rounded-lg shadow-sm outline outline-white/15" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
