"use client";

import { useEffect, useState } from "react";
import { Search, Brain, Bot, BarChart3, AlertCircle, CheckCircle2, GraduationCap } from "lucide-react";

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
  {
    icon: GraduationCap,
    title: "AI Literacy & Training",
    description:
      "We equip your team with a deep understanding of LLMs, prioritizing critical security and data hygiene. We drive a cultural shift from a passive \"passenger\" to an active \"pilot\" mindset, reinforcing skills through advanced prompt engineering and rigorous hands-on practice.",
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
            Our Services
          </h2>
          <h2 className="mx-auto mt-2 max-w-lg text-center text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">
            What We Do
          </h2>
        </div>
        <div className="mt-10 grid gap-4 sm:mt-16 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4">
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
                  <div className="relative min-h-[220px] w-full grow mt-8">
                    <div className="absolute inset-0 overflow-hidden rounded-2xl border border-terminal-border-teal/30 bg-gradient-to-br from-terminal-dark-teal/90 via-terminal-dark-teal/70 to-terminal-dark-teal/90 backdrop-blur-sm shadow-2xl shadow-terminal-lime/10">
                      {/* Glow effect behind */}
                      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-terminal-lime/5 via-transparent to-terminal-lime/5 blur-xl"></div>
                      
                      {/* Header */}
                      <div className="relative border-b border-terminal-border-teal/20 bg-terminal-dark-teal/30 px-4 py-2.5 rounded-t-2xl backdrop-blur-sm">
                        <div className="flex items-center gap-2">
                          <div className="h-2 w-2 rounded-full bg-terminal-lime/70 shadow-sm shadow-terminal-lime/50"></div>
                          <div className="h-2 w-2 rounded-full bg-terminal-lime/50 shadow-sm shadow-terminal-lime/40"></div>
                          <div className="h-2 w-2 rounded-full bg-terminal-lime/40 shadow-sm shadow-terminal-lime/30"></div>
                          <div className="ml-2 flex-1 text-xs font-medium text-white/50">UX+SEO Audit</div>
                        </div>
                      </div>
                      
                      {/* Content Area */}
                      <div className="relative p-4 space-y-4">
                        {/* Score Metric with Glow */}
                        <div className="flex items-baseline gap-3">
                          <div className="relative">
                            <div className="text-3xl font-bold bg-gradient-to-r from-terminal-lime via-terminal-lime/90 to-terminal-lime/70 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(179,255,0,0.4)]">
                              87
                            </div>
                            <div className="absolute inset-0 text-3xl font-bold bg-gradient-to-r from-terminal-lime via-terminal-lime/90 to-terminal-lime/70 bg-clip-text text-transparent blur-sm opacity-50">
                              87
                            </div>
                          </div>
                          <div className="px-2.5 py-1 rounded-lg bg-terminal-lime/10 border border-terminal-lime/30 shadow-lg shadow-terminal-lime/20 backdrop-blur-sm">
                            <span className="text-xs font-semibold text-terminal-lime/90">+12%</span>
                          </div>
                        </div>
                        
                        {/* Bar Chart - Issues Found with Glow */}
                        <div className="space-y-2">
                          <div className="text-xs text-white/50 font-medium">Issues Found</div>
                          <div className="flex items-end gap-2 h-14">
                            <div className="relative flex-1 rounded-t-lg bg-gradient-to-t from-terminal-lime/70 via-terminal-lime/50 to-terminal-lime/30" style={{ height: '55%', boxShadow: '0 -4px 12px rgba(179, 255, 0, 0.3)' }}></div>
                            <div className="relative flex-1 rounded-t-lg bg-gradient-to-t from-terminal-lime/75 via-terminal-lime/55 to-terminal-lime/35" style={{ height: '80%', boxShadow: '0 -4px 12px rgba(179, 255, 0, 0.35)' }}></div>
                            <div className="relative flex-1 rounded-t-lg bg-gradient-to-t from-terminal-lime/65 via-terminal-lime/45 to-terminal-lime/25" style={{ height: '40%', boxShadow: '0 -4px 12px rgba(179, 255, 0, 0.25)' }}></div>
                            <div className="relative flex-1 rounded-t-lg bg-gradient-to-t from-terminal-lime/70 via-terminal-lime/50 to-terminal-lime/30" style={{ height: '65%', boxShadow: '0 -4px 12px rgba(179, 255, 0, 0.3)' }}></div>
                            <div className="relative flex-1 rounded-t-lg bg-gradient-to-t from-terminal-lime/60 via-terminal-lime/40 to-terminal-lime/20" style={{ height: '50%', boxShadow: '0 -4px 12px rgba(179, 255, 0, 0.25)' }}></div>
                          </div>
                        </div>
                        
                        {/* Priority Items List */}
                        <div className="space-y-2.5 pt-1">
                          <div className="flex items-center gap-2.5">
                            <AlertCircle className="h-3.5 w-3.5 text-terminal-lime/70 drop-shadow-[0_0_4px_rgba(179,255,0,0.5)]" />
                            <div className="flex-1 h-1 bg-gradient-to-r from-terminal-lime/30 to-terminal-lime/10 rounded-full"></div>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <CheckCircle2 className="h-3.5 w-3.5 text-terminal-lime/60 drop-shadow-[0_0_4px_rgba(179,255,0,0.4)]" />
                            <div className="h-1 bg-gradient-to-r from-terminal-lime/25 to-terminal-lime/5 rounded-full" style={{ width: '75%' }}></div>
                          </div>
                          <div className="flex items-center gap-2.5">
                            <AlertCircle className="h-3.5 w-3.5 text-terminal-lime/50 drop-shadow-[0_0_4px_rgba(179,255,0,0.3)]" />
                            <div className="h-1 bg-gradient-to-r from-terminal-lime/20 to-terminal-lime/5 rounded-full" style={{ width: '60%' }}></div>
                          </div>
                        </div>
                      </div>
                      
                      {/* Connected Icons at Bottom - UX & SEO Elements with Glow */}
                      <div className="relative bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-5 px-4">
                        {/* Circuit line background with glow */}
                        <div className="absolute inset-0 flex items-center justify-center">
                          <svg className="w-full h-10 opacity-30" viewBox="0 0 140 24" fill="none">
                            <path d="M15 12 L125 12" stroke="currentColor" strokeWidth="1.5" className="text-terminal-lime drop-shadow-[0_0_4px_rgba(179,255,0,0.6)]" strokeLinecap="round" />
                          </svg>
                        </div>
                        {/* Icons */}
                        <div className="relative">
                          <div className="h-9 w-9 rounded-xl border border-terminal-lime/50 bg-terminal-dark-teal/70 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-terminal-lime/20">
                            <Search className="h-4.5 w-4.5 text-terminal-lime/60 drop-shadow-[0_0_4px_rgba(179,255,0,0.4)]" />
                          </div>
                        </div>
                        <div className="relative">
                          <div className="h-9 w-9 rounded-xl border border-terminal-lime/50 bg-terminal-dark-teal/70 backdrop-blur-sm flex items-center justify-center shadow-lg shadow-terminal-lime/20">
                            <BarChart3 className="h-4.5 w-4.5 text-terminal-lime/60 drop-shadow-[0_0_4px_rgba(179,255,0,0.4)]" />
                          </div>
                        </div>
                        <div className="relative">
                          <div className="h-9 w-9 rounded-xl border-2 border-terminal-lime/60 bg-terminal-lime/15 backdrop-blur-sm flex items-center justify-center shadow-xl shadow-terminal-lime/30">
                            <CheckCircle2 className="h-4.5 w-4.5 text-terminal-lime/70 drop-shadow-[0_0_6px_rgba(179,255,0,0.6)]" />
                            <div className="absolute -bottom-0.5 -right-0.5 h-2.5 w-2.5 rounded-full bg-terminal-lime/70 border-2 border-terminal-dark-teal shadow-lg shadow-terminal-lime/50"></div>
                          </div>
                        </div>
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
                {index === 3 && (
                  <div className="flex flex-1 items-center justify-center px-8 pb-6 sm:px-10 sm:pb-8 mt-8">
                    <GraduationCap className="h-20 w-20 text-terminal-lime/40" />
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
