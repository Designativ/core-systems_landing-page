import { Users, FileText, DollarSign, Shield } from "lucide-react";
import { ContactForm } from "@/components/shared/contact-form";

const trustIndicators = [
  { text: "Expert consultation (no cost)", icon: Users },
  { text: "Personalized action plan", icon: FileText },
  { text: "Upfront pricing", icon: DollarSign },
  { text: "Risk-free exploration", icon: Shield },
];

export function FinalCTA() {
  return (
    <section id="contact" className="relative isolate px-6 pt-16 pb-0 sm:pt-24 sm:pb-0 lg:px-8 reveal fade-up">
      {/* Gradient blur element */}
      <div
        aria-hidden="true"
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-terminal-lime/40 to-terminal-lime/20 opacity-20 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      
      <div className="container mx-auto">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
            {/* Left Column - Content */}
            <div className="flex flex-col justify-start reveal fade-up">
              <p className="text-base font-semibold leading-7 text-terminal-lime mb-2">
                contact us
              </p>
              <h2 className="mb-3 text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl md:text-6xl">
                Ready to Transform Your Operations?
              </h2>
              <p className="mb-8 text-lg leading-8 text-white/90">
                Book a free 30-minute consultation. No pressure, no commitment -
                just honest advice about what's possible for your business.
              </p>
              <div className="space-y-4">
                {trustIndicators.map((indicator, index) => {
                  const Icon = indicator.icon;
                  const delayClass = `delay-${Math.min(index + 1, 6)}`;
                  return (
                    <div key={index} className={`flex items-center gap-4 reveal fade-up ${delayClass}`}>
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-terminal-lime/10">
                        <Icon className="h-4 w-4 text-terminal-lime" />
                      </div>
                      <span className="text-lg text-white/90">
                        {indicator.text}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="lg:pl-8 reveal fade-up delay-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
