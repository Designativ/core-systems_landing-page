"use client";

import { useEffect, useState } from "react";
import { Globe, Brain, Bot, Check } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI Strategy & Roadmap",
    description:
      "I analyze your unique business processes to identify where AI integration and automation will provide the highest impact. This phase delivers a pragmatic implementation roadmap and a proven strategic blueprint.",
  },
  {
    icon: Bot,
    title: "Automation",
    description:
      "I implement the automated systems required to scale your business operations. By replacing manual bottlenecks with scalable infrastructure, I enable your business to handle increased volume without expanding your headcount.",
  },
  {
    icon: Globe,
    title: "Websites & Apps",
    description:
      "I develop custom websites and applications tailored to your specific business requirements. To ensure long-term utility, every project includes personal support for training, system integration, and ongoing optimization.",
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
    <section id="services" className="relative isolate bg-terminal-dark-teal py-16 sm:py-24 reveal fade-up">
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
        <div className="reveal fade-up">
          <h2 className="text-center text-base font-semibold leading-7 text-terminal-lime">
            Services
          </h2>
          <h2 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            How I Help
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-16 sm:grid-cols-1 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const delayClass = `delay-${Math.min(index + 1, 6)}`;
            const directionClass = `direction-${(index % 6) + 1}`;
            return (
              <div
                key={index}
                className={`group relative min-h-[500px] rounded-lg bg-terminal-dark-teal-alt p-8 transition-all duration-300 reveal fade-up ${delayClass} animated-border ${directionClass}`}
              >
                {/* Icon */}
                <div className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-terminal-lime/10 z-10">
                  <Icon className="h-7 w-7 text-terminal-lime z-10" />
                </div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="mt-2 text-xl font-medium tracking-tight text-white">
                    {service.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-white/90">
                    {service.description}
                  </p>
                </div>

                {/* Illustration area */}
                {index === 0 && (
                  <div className="relative min-h-[180px] w-full grow mt-8">
                    <div className="absolute top-6 right-6 bottom-6 left-6 overflow-hidden rounded-lg border-2 border-terminal-border-teal bg-terminal-dark-teal/60 outline outline-white/10 p-4">
                      {/* Horizontal timeline - roadmap milestones */}
                      <div className="flex items-center h-full min-h-[130px]">
                        <div className="flex items-center flex-1 min-w-0">
                          <div className="w-8 h-8 rounded-full border-2 border-terminal-lime/70 bg-terminal-lime/15 flex items-center justify-center shrink-0">
                            <div className="w-2 h-2 rounded-full bg-terminal-lime/80" />
                          </div>
                          <div className="flex-1 h-px mx-1 bg-gradient-to-r from-terminal-lime/50 to-terminal-border-teal/50" />
                          <div className="w-7 h-7 rounded-full border-2 border-terminal-border-teal bg-terminal-dark-teal/80 flex items-center justify-center shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-terminal-lime/50" />
                          </div>
                          <div className="flex-1 h-px mx-1 bg-gradient-to-r from-terminal-border-teal/50 to-terminal-border-teal/50" />
                          <div className="w-7 h-7 rounded-full border-2 border-terminal-border-teal bg-terminal-dark-teal/80 flex items-center justify-center shrink-0">
                            <div className="w-1.5 h-1.5 rounded-full bg-terminal-lime/50" />
                          </div>
                          <div className="flex-1 h-px mx-1 bg-gradient-to-r from-terminal-border-teal/50 to-terminal-lime/50" />
                          <div className="w-8 h-8 rounded-full border-2 border-terminal-lime/70 bg-terminal-lime/15 flex items-center justify-center shrink-0">
                            <Check className="w-4 h-4 text-terminal-lime/80" strokeWidth={2.5} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {index === 1 && (
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
                {index === 2 && (
                  <div className="relative min-h-[180px] w-full grow mt-8">
                    <div className="absolute top-6 right-6 bottom-6 left-6 overflow-hidden rounded-lg border-2 border-terminal-border-teal bg-terminal-dark-teal/60 outline outline-white/10">
                      {/* Browser / app window */}
                      <div className="flex flex-col h-full min-h-[150px] bg-terminal-dark-teal/80">
                        <div className="flex items-center gap-1 px-3 py-2 border-b border-terminal-border-teal/50 bg-terminal-dark-teal/90">
                          <div className="flex gap-1.5">
                            <div className="w-2 h-2 rounded-full bg-terminal-lime/50" />
                            <div className="w-2 h-2 rounded-full bg-terminal-border-teal/40" />
                            <div className="w-2 h-2 rounded-full bg-terminal-border-teal/40" />
                          </div>
                          <div className="flex-1 mx-3 h-2 rounded bg-terminal-border-teal/30" />
                          <Globe className="w-4 h-4 text-terminal-lime/50" />
                        </div>
                        <div className="flex-1 flex p-3 gap-3">
                          {/* Sidebar */}
                          <div className="w-12 rounded border border-terminal-border-teal/40 bg-terminal-dark-teal/60 flex flex-col items-center py-2 gap-1.5">
                            <div className="w-2 h-2 rounded-sm bg-terminal-lime/40" />
                            <div className="w-2 h-2 rounded-sm bg-terminal-border-teal/30" />
                            <div className="w-2 h-2 rounded-sm bg-terminal-border-teal/30" />
                            <div className="w-2 h-2 rounded-sm bg-terminal-border-teal/30" />
                          </div>
                          {/* Main content - page layout */}
                          <div className="flex-1 flex flex-col gap-2 rounded border border-terminal-border-teal/40 bg-terminal-dark-teal/60 p-3">
                            <div className="h-2 rounded bg-terminal-lime/30 w-3/4" />
                            <div className="flex gap-2 flex-1">
                              <div className="flex-1 rounded bg-terminal-lime/15" />
                              <div className="w-1/4 rounded bg-terminal-lime/10" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
