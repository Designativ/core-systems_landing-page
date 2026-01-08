"use client";

import { useState } from "react";
import { Search, FileText, BarChart3, Target, Rocket } from "lucide-react";
import { Reveal } from "@/components/shared/reveal";

const steps = [
  {
    number: "1",
    icon: Search,
    title: "Discovery",
    description:
      "We listen first, prescribe second. We start with a conversation about your business challenges, goals, and where you want to go. This helps us understand if we're the right fit and which solutions will deliver the most value.",
  },
  {
    number: "2",
    icon: FileText,
    title: "Proposal",
    description:
      "No guesswork, just clarity. You receive a tailored proposal outlining the scope, timeline, deliverables, and investment—no surprises, just clarity on what to expect and how we'll work together.",
  },
  {
    number: "3",
    icon: BarChart3,
    title: "Analysis",
    description:
      "Deep work, zero interruptions. We roll up our sleeves and get to work—analyzing your current state, identifying opportunities, and developing solutions tailored to your specific needs. You'll have access to a live project dashboard where you can track progress anytime.",
  },
  {
    number: "4",
    icon: Target,
    title: "Strategy",
    description:
      "Actionable insights, not generic advice. You receive a comprehensive report with findings, prioritized recommendations, and key metrics—everything you need to make informed decisions.",
  },
  {
    number: "5",
    icon: Rocket,
    title: "Execution",
    description:
      "From plan to performance. We create your implementation roadmap, build and deploy solutions, train your team, provide ongoing optimization and support, and serve as your long-term strategic partner.",
  },
];

export function HowItWorks() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <section id="process" className="py-20 md:py-28 reveal fade-up">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <Reveal animation="fade-up">
            <div className="mx-auto mb-12 max-w-3xl text-center">
              <h2 className="mb-3 text-4xl font-bold tracking-tight text-terminal-text-primary sm:text-5xl md:text-6xl">
                How It Works
              </h2>
              <p className="text-xl leading-relaxed text-terminal-text-secondary">
                A streamlined process designed to deliver maximum value at every stage
              </p>
            </div>
          </Reveal>

          {/* Tabs */}
          <div className="relative mb-8 w-full">
            <div
              role="tablist"
              className="relative flex items-center justify-center gap-6 overflow-x-auto pb-2 w-full"
            >
              {steps.map((step, index) => {
                const isActive = activeTab === index;
                return (
                  <div key={index} className="relative z-10">
                    <button
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActiveTab(index)}
                      className={`flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-semibold transition-all duration-200 ${
                        isActive
                          ? "bg-terminal-lime text-black hover:bg-terminal-lime-hover scale-105"
                          : "bg-terminal-light-gray text-terminal-text-secondary hover:bg-terminal-border-light"
                      }`}
                    >
                      <span className={`font-mono text-base font-bold ${isActive ? "text-black" : "text-terminal-text-secondary"}`}>
                        {step.number}
                      </span>
                      <span className="uppercase tracking-wider">{step.title}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Tab Panel */}
          <Reveal animation="fade-up" delay={2}>
            <div role="tabpanel" className="mt-8">
              <div className="rounded-xl border border-terminal-border-light bg-white p-8">
                <div className="mb-6 flex items-center gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-terminal-dark-teal">
                    {(() => {
                      const Icon = steps[activeTab].icon;
                      return <Icon className="h-6 w-6 text-terminal-lime" />;
                    })()}
                  </div>
                  <h3 className="text-2xl font-semibold leading-tight text-terminal-text-primary">
                    {steps[activeTab].title}
                  </h3>
                </div>
                <p className="text-base leading-relaxed text-terminal-text-secondary">
                  {steps[activeTab].description}
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
