"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Mail, Phone } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils/cn";

/**
 * Header component with navigation
 * - Sticky on scroll
 * - Glassmorphism effect with backdrop blur
 * - Mobile responsive with hamburger menu
 * - Rounded pill-shaped design
 */
export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
        setIsMenuOpen(false);
      }
    }
  };

  return (
    <header className="fixed top-4 left-0 right-0 z-50 w-full px-4 md:px-6">
      {/* Glassmorphism Navbar Container */}
      <div className="mx-auto max-w-7xl">
        <div className="relative flex h-14 items-center justify-between rounded-xl border border-white/20 bg-white/80 backdrop-blur-md backdrop-saturate-150 px-6 shadow-lg shadow-black/5 transition-all duration-300">
          {/* Logo */}
          <div className="flex items-center">
            <Logo />
          </div>

          {/* Desktop Navigation + Contact info + CTA */}
          <div className="hidden items-center gap-4 md:flex">
            {/* Nav links */}
            <nav className="flex items-center space-x-1">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="group relative flex items-center gap-1 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-all duration-200 hover:bg-white/50 hover:text-gray-900 cursor-pointer"
                >
                  {link.label}
                </a>
              ))}
            </nav>
            
            {/* Divider */}
            <div className="h-6 w-px bg-gray-300" />
            
            {/* Contact info */}
            <a
              href="mailto:natalieindesign@gmail.com"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-white/50 hover:text-gray-900"
            >
              <Mail className="h-4 w-4 shrink-0" />
              <span className="hidden xl:inline">natalieindesign@gmail.com</span>
            </a>
            <a
              href="tel:778-882-9545"
              className="flex items-center gap-2 rounded-lg px-3 py-2 text-sm font-medium text-gray-700 transition-all hover:bg-white/50 hover:text-gray-900"
            >
              <Phone className="h-4 w-4 shrink-0" />
              <span className="hidden xl:inline">778-882-9545</span>
            </a>
            <Button
              asChild
              className="h-9 rounded-lg bg-terminal-dark-teal-alt px-5 text-sm font-semibold text-terminal-lime shadow-sm transition-all hover:bg-terminal-dark-teal hover:shadow-md"
            >
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
              >
                CONTACT
              </a>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="flex items-center justify-center rounded-lg p-2 text-gray-700 transition-colors hover:bg-white/50 md:hidden"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "mx-auto mt-2 max-w-7xl rounded-2xl border border-white/20 bg-white/90 backdrop-blur-md backdrop-saturate-150 shadow-lg transition-all duration-300 md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="flex flex-col space-y-1 p-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-lg px-4 py-3 text-sm font-medium text-gray-700 transition-colors hover:bg-white/50 hover:text-gray-900 cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 space-y-3 border-t border-gray-200/50 pt-4">
            <div className="flex flex-col gap-2">
              <a
                href="mailto:natalieindesign@gmail.com"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white/50 hover:text-gray-900"
              >
                <Mail className="h-4 w-4" />
                natalieindesign@gmail.com
              </a>
              <a
                href="tel:778-882-9545"
                className="flex items-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-gray-700 transition-colors hover:bg-white/50 hover:text-gray-900"
              >
                <Phone className="h-4 w-4" />
                778-882-9545
              </a>
            </div>
            <a
              href="#contact"
              onClick={(e) => {
                handleNavClick(e, "#contact");
                setIsMenuOpen(false);
              }}
              className="rounded-lg px-4 py-3 text-sm font-semibold text-terminal-dark-teal-alt transition-colors hover:bg-white/50 hover:text-terminal-dark-teal cursor-pointer"
            >
              CONTACT
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
}
