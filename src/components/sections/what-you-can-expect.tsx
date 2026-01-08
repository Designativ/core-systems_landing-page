import { TrendingUp, Zap, Target } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    title: "From UX + SEO Improvements",
    items: [
      "20-40% increase in website conversion rates",
      "2-3x improvement in organic search visibility",
      "Reduced bounce rates and stronger engagement metrics",
      "Clear path from traffic to qualified leads",
    ],
  },
  {
    icon: Zap,
    title: "From AI + Automation",
    items: [
      "10-30 hours per week recovered from manual tasks",
      "40-60% reduction in process bottlenecks",
      "Faster response times to leads and customers",
      "Scalable operations without proportional headcount growth",
    ],
  },
  {
    icon: Target,
    title: "From Strategic Planning",
    items: [
      "Clear, prioritized roadmap with expected ROI for each initiative",
      "Confident budget allocation based on projected impact",
      "Elimination of wasted spend on ineffective tactics",
      "Data-backed recommendations that get executive buy-in",
    ],
  },
];

export function WhatYouCanExpect() {
  return (
    <section className="bg-terminal-dark-teal py-20 text-terminal-text-on-dark md:py-28 reveal fade-up">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          {/* Header */}
          <div className="mx-auto mb-20 max-w-3xl text-center reveal fade-up">
            <h2 className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl">
              What You Can Expect
            </h2>
            <p className="text-xl leading-relaxed text-white/80">
              Measurable results across every engagement
            </p>
          </div>

          {/* Benefits Grid */}
          <div className="grid gap-8 md:grid-cols-3">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              const delayClass = `delay-${Math.min(index + 1, 6)}`;
              return (
                <div
                  key={index}
                  className={`rounded-lg border border-white/10 bg-terminal-dark-teal-alt p-10 transition-all duration-300 hover:border-terminal-lime/30 reveal fade-up ${delayClass}`}
                >
                  {/* Icon */}
                  <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-xl bg-terminal-lime/10">
                    <Icon className="h-7 w-7 text-terminal-lime" />
                  </div>

                  {/* Title */}
                  <h3 className="mb-6 text-2xl font-semibold text-white">
                    {benefit.title}
                  </h3>

                  {/* Items */}
                  <ul className="space-y-4">
                    {benefit.items.map((item, itemIndex) => (
                      <li
                        key={itemIndex}
                        className="flex items-start gap-4 text-base leading-relaxed text-white/90"
                      >
                        <div className="mt-2 h-2 w-2 shrink-0 rounded-full bg-terminal-lime" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
