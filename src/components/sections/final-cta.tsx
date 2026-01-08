import { Check } from "lucide-react";
import { ContactForm } from "@/components/shared/contact-form";

const trustIndicators = [
  "Expert consultation (no cost)",
  "Personalized action plan",
  "Upfront pricing",
  "Risk-free exploration",
];

export function FinalCTA() {
  return (
    <section id="contact" className="bg-terminal-light-gray py-20 md:py-28">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-center">
              <h2 className="mb-3 text-4xl font-bold tracking-tight text-terminal-text-primary sm:text-5xl md:text-6xl">
                Ready to Transform Your Operations?
              </h2>
              <p className="mb-8 text-xl leading-relaxed text-terminal-text-secondary">
                Book a free 30-minute consultation. No pressure, no commitment -
                just honest advice about what's possible for your business.
              </p>
              <div className="space-y-4">
                {trustIndicators.map((indicator, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terminal-lime/10">
                      <Check className="h-4 w-4 text-terminal-lime" />
                    </div>
                    <span className="text-lg text-terminal-text-secondary">
                      {indicator}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:pl-8">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
