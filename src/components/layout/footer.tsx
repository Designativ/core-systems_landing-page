"use client";

import Link from "next/link";
import { Linkedin, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const footerSections = {
  services: [
    { href: "#services", label: "Automation" },
    { href: "#services", label: "AI Strategy & Roadmap" },
    { href: "#services", label: "Websites & Apps" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative text-white">
      <div className="container relative mx-auto px-4 pt-12 pb-12">
        {/* First Row: Logo */}
        <div className="mb-8">
          <Logo variant="footer" />
        </div>

        {/* Second Row: Services */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6">
          {footerSections.services.map((link, index) => (
            <a
              key={index}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                const element = document.querySelector(link.href);
                if (element) {
                  element.scrollIntoView({ behavior: "smooth", block: "start" });
                }
              }}
              className="text-sm text-white transition-colors hover:text-terminal-lime cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Third Row: Contact */}
        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:items-center sm:gap-6 text-sm text-white/80">
          <a
            href="https://www.linkedin.com/in/nataliia-ivanova-profile/"
            target="_self"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-terminal-lime"
          >
            <Linkedin className="h-4 w-4" />
            <span>LinkedIn</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="h-4 w-4" />
            <span>Vancouver, BC</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="h-4 w-4" />
            <span>Mon-Fri 8am to 5pm</span>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-white/60">
              © {currentYear}. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              {footerSections.legal.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-white/60 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
    );
}
