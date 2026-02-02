"use client";

import { useEffect, useState } from "react";
import {
  TrendingDown,
  RefreshCw,
  DollarSign,
  Mail,
  Users,
  Brain,
} from "lucide-react";

const problems = [
  {
    icon: RefreshCw,
    title: "My team wastes hours on the same tasks every week",
    description:
      "Custom automation built for your exact workflow - give your team back 10+ hours per week - time savings + productivity gains.",
  },
  {
    icon: DollarSign,
    title: "Our projects keep going over budget and we don't see it coming",
    description:
      "Real-time budget tracking with early warning systems - catch overruns before they kill your margins.",
  },
  {
    icon: Mail,
    title: "Important emails and follow-ups keep falling through the cracks",
    description:
      "AI that tracks every conversation, drafts responses, and ensures nothing gets dropped - saving you money in lost opportunities annually.",
  },
  {
    icon: Users,
    title: "Our CFO/leadership team is drowning and becoming the bottleneck",
    description:
      "AI that handles the administrative load so your executives can focus on strategy - worth $$$$ in leadership time.",
  },
  {
    icon: TrendingDown,
    title: "Our growth has stalled because our manual processes can't handle more volume",
    description:
      "Operational infrastructure that scales with you. We replace manual bottlenecks with automated systems that allow you to increase volume 5x without scaling your headcount.",
  },
  {
    icon: Brain,
    title: "I need an AI strategy but don't know where to start",
    description:
      "Get a clear, prioritized roadmap showing what to automate, in what order, and the expected ROI.",
  },
];

export function CoreProblems() {
  const [activeCard, setActiveCard] = useState(0);
  const [activeIcon, setActiveIcon] = useState(0);
  const totalCards = problems.length;
  const cardDuration = 3000; // 3 seconds per card
  const iconDuration = 2000; // 2 seconds per icon

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCard((prev) => (prev + 1) % totalCards);
    }, cardDuration);

    return () => clearInterval(interval);
  }, [totalCards]);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIcon((prev) => (prev + 1) % totalCards);
    }, iconDuration);

    return () => clearInterval(interval);
  }, [totalCards]);

  return (
    <section className="relative isolate py-16 md:py-20 reveal fade-up">
      {/* Gradient blur elements */}
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

      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto mb-20 max-w-3xl text-center reveal fade-up">
            <p className="text-center text-base font-semibold leading-7 text-terminal-text-secondary mb-2">
              How We Help
            </p>
            <h2 className="mb-3 text-4xl font-bold tracking-tight text-terminal-text-primary sm:text-5xl md:text-6xl">
              Core Problems We Solve
            </h2>
            <p className="text-xl leading-relaxed text-terminal-text-primary">
              We understand the challenges growing businesses face. Here's how we
              help.
            </p>
          </div>

          {/* Grid */}
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {problems.map((problem, index) => {
              const Icon = problem.icon;
              const delayClass = `delay-${Math.min(Math.floor(index / 2) + 1, 6)}`;
              const directionClass = `direction-${(index % 6) + 1}`;
              return (
                <div
                  key={index}
                  className={`group relative rounded-lg border border-gray-200 bg-white p-8 shadow-sm transition-all duration-300 hover:border-terminal-lime/30 hover:shadow-md reveal fade-up ${delayClass} animated-border ${directionClass}`}
                >
                  {/* Icon */}
                  <div className={`relative mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-terminal-dark-teal transition-all duration-500 group-hover:bg-terminal-dark-teal z-10 ${
                    activeIcon === index ? 'scale-110 shadow-lg shadow-terminal-lime/50' : 'scale-100'
                  }`}>
                    <Icon className={`h-6 w-6 text-terminal-lime transition-all duration-500 z-10 ${
                      activeIcon === index ? 'scale-110 drop-shadow-[0_0_8px_rgba(212,255,0,0.6)]' : 'scale-100'
                    }`} />
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="mb-4 text-xl font-semibold leading-tight text-terminal-text-primary">
                      {problem.title}
                    </h3>
                    <p className="text-base leading-relaxed text-terminal-text-primary">
                      {problem.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
