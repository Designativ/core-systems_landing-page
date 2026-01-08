"use client";

import { useState } from "react";
import { Search, FileText, BarChart3, Target, Rocket } from "lucide-react";

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
    <section id="process" className="py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mx-auto mb-12 max-w-3xl text-center">
            <h2 className="mb-3 text-4xl font-bold tracking-tight text-terminal-text-primary sm:text-5xl md:text-6xl">
              How It Works
            </h2>
            <p className="text-xl leading-relaxed text-terminal-text-secondary">
              A streamlined process designed to deliver maximum value at every stage
            </p>
          </div>

          {/* Tabs */}
          <div
            role="tablist"
            className="flex flex-wrap gap-2 justify-center"
          >
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isActive = activeTab === index;
              return (
                <button
                  key={index}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveTab(index)}
                  className={`flex items-center gap-3 rounded-full px-6 py-3 text-base font-semibold transition-all duration-200 shadow-sm ${
                    isActive
                      ? "bg-terminal-lime text-black hover:bg-terminal-lime-hover shadow-lg scale-105"
                      : "bg-terminal-light-gray text-terminal-text-secondary hover:bg-terminal-border-light hover:shadow-md"
                  }`}
                >
                  <Icon className={`h-5 w-5 ${isActive ? "text-black" : "text-terminal-text-secondary"}`} />
                  <span className="uppercase tracking-wider">{step.title}</span>
                </button>
              );
            })}
          </div>

          {/* Tab Panel */}
          <div role="tabpanel" className="mt-8">
            <div className="rounded-lg border border-terminal-border-light bg-white p-8 shadow-sm">
              <div className="mb-6 flex items-center gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-terminal-dark-teal font-mono text-xl font-bold text-terminal-lime">
                  {steps[activeTab].number}
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-terminal-light-gray">
                  {(() => {
                    const Icon = steps[activeTab].icon;
                    return <Icon className="h-5 w-5 text-terminal-text-secondary" />;
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
        </div>
      </div>
    </section>
  );
}
