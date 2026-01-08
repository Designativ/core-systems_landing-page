import Link from "next/link";
import { Linkedin, MapPin, Clock } from "lucide-react";
import { Logo } from "@/components/shared/logo";

const footerSections = {
  services: [
    { href: "/services/ux-seo-audit", label: "UX+SEO Audit" },
    { href: "/services/ai-strategy", label: "AI Strategy & Roadmap" },
    { href: "/services/automation", label: "AI Automation, Websites & Apps" },
  ],
  legal: [
    { href: "/privacy", label: "Privacy Policy" },
    { href: "/terms", label: "Terms of Service" },
  ],
};

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t bg-terminal-dark-teal text-white geometric-pattern">
      <div className="container relative mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 md:justify-end">
          {/* Services */}
          <div className="md:text-right">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
              Services
            </h3>
            <ul className="space-y-2">
              {footerSections.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white transition-colors hover:text-terminal-lime"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact / Social */}
          <div className="md:text-right">
            <h3 className="mb-4 text-xs font-semibold uppercase tracking-wider text-white/60">
              Contact
            </h3>
            <ul className="space-y-3 text-sm text-white/80">
              <li>
                <a
                  href="https://www.linkedin.com/in/nataliia-ivanova-profile/"
                  target="_self"
                  rel="noopener noreferrer"
                  className="flex items-center justify-end gap-2 transition-colors hover:text-terminal-lime md:justify-end"
                >
                  <span>LinkedIn</span>
                  <Linkedin className="h-4 w-4" />
                </a>
              </li>
              <li className="flex items-center justify-end gap-2 md:justify-end">
                <MapPin className="h-4 w-4" />
                <span>Vancouver, BC</span>
              </li>
              <li className="flex items-center justify-end gap-2 md:justify-end">
                <Clock className="h-4 w-4" />
                <span>Mon-Fri 8am to 5pm</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center">
              <Logo variant="footer" />
            </div>
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
