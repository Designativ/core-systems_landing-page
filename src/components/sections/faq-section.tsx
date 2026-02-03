"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils/cn";

const faqs = [
  {
    question: "What happens on the free discovery call?",
    answer:
      "We discuss your current situation, goals, and challenges. I will ask about your infrastructure to determine the alignment between my expertise and your specific needs. This ensures our collaboration is positioned for high-impact results. Upon confirming a fit, we will define the next steps for your project.",
  },
  {
    question: "How quickly can I get started?",
    answer:
      "After our free discovery call, I typically deliver a custom proposal within 1-3 business days. Deep-dive audits usually take 1-2 weeks (depends on the project), and I can begin implementation immediately after that if you choose to move forward.",
  },
  {
    question: "Is there a minimum commitment?",
    answer:
      "Just the initial project scope we define together. Most engagements begin with a pilot project to validate technical feasibility and ensure a secure foundation for your business. This approach allows us to test and confirm results on a smaller scale before moving to broader scaling.",
  },
  {
    question: "Can you just do the strategy, or do I need implementation too?",
    answer:
      "Both options work. Many clients start with strategy & roadmap, then choose whether to implement themselves, use their existing team, or partner with me for execution. I'm flexible based on your capabilities and preferences.",
  },
  {
    question: "Do you build custom AI solutions or use existing tools?",
    answer:
      "I leverage your existing tools and proven platforms to ensure your current processes remain stable. I only integrate new, secure, and efficient technologies when they are strictly necessary to achieve your specific goals. My priority is to enhance your infrastructure without disrupting the foundation of what already works.",
  },
  // {
  //   question: "What kind of ROI should I expect?",
  //   answer:
  //     "This depends on your starting point, but clients typically see 20-40% improvements in conversion rates from UX/SEO fixes, and 10-30 hours per week saved from initial automation implementations. I establish clear success metrics during the discovery phase.",
  // },
  {
    question: "Do I need technical expertise on our team?",
    answer:
      "No. I translate technical concepts into business language and can handle implementation without requiring engineering resources on your side. That said, I'm happy to collaborate with technical teams if you have them.",
  },
  {
    question: "What if I need ongoing support after the initial project?",
    answer:
      "I offer flexible partnership models including monthly retainers, project-based work, or advisory arrangements. Most clients evolve into an ongoing relationship, but there's no pressure or requirement.",
  },
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleQuestion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="bg-terminal-light-gray py-16 md:py-20 reveal fade-up">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-16 text-center reveal fade-up">
              <p className="text-center text-base font-semibold leading-7 text-terminal-text-secondary mb-2">
                PROJECT CLARITY
              </p>
              <h2 className="mb-3 text-4xl font-bold tracking-tight text-terminal-text-primary sm:text-5xl md:text-6xl">
                FAQs
              </h2>
            <p className="text-xl leading-relaxed text-terminal-text-primary">
              Common questions about working with me
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqs.map((faq, index) => {
              const delayClass = `delay-${Math.min(Math.floor(index / 2) + 1, 6)}`;
              return (
                <div
                  key={index}
                  className={`group rounded-lg border border-terminal-border-light bg-white transition-all duration-300 hover:border-terminal-lime/30 hover:shadow-lg reveal fade-up ${delayClass}`}
                >
                  <button
                    onClick={() => toggleQuestion(index)}
                    className="flex w-full items-center justify-between p-8 text-left transition-colors"
                    aria-expanded={openIndex === index}
                  >
                    <h3 className="pr-8 text-lg font-semibold leading-tight text-terminal-text-primary sm:text-xl">
                      {faq.question}
                    </h3>
                    <ChevronDown
                      className={cn(
                        "h-6 w-6 shrink-0 text-terminal-text-secondary transition-transform duration-300",
                        openIndex === index && "rotate-180"
                      )}
                    />
                  </button>
                  {openIndex === index && (
                    <div className="border-t border-terminal-border-light px-8 pb-8 pt-6">
                      <p className="text-base leading-relaxed text-terminal-text-primary">
                        {faq.answer}
                      </p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
