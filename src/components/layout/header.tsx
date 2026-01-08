"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Linkedin } from "lucide-react";
import { NAV_LINKS } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Logo } from "@/components/shared/logo";
import { cn } from "@/lib/utils/cn";

/**
 * Header component with navigation
 * - Sticky on scroll
 * - Mobile responsive with hamburger menu
 * - Clean, minimal design
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
    <header className="sticky top-0 z-50 w-full border-b border-terminal-border-light bg-white">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        {/* Logo */}
        <Logo />

        {/* Desktop Navigation */}
        <nav className="hidden items-center space-x-6 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground cursor-pointer"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA Button and LinkedIn */}
        <div className="hidden items-center gap-4 md:flex">
          <a
            href="https://www.linkedin.com/in/nataliia-ivanova-profile/"
            target="_self"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-5 w-5" />
          </a>
          <Button asChild>
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, "#contact")}
            >
              Get Started
            </a>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </Button>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "border-t md:hidden",
          isMenuOpen ? "block" : "hidden"
        )}
      >
        <nav className="container mx-auto flex flex-col space-y-1 px-4 py-4">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleNavClick(e, link.href)}
              className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-accent hover:text-foreground cursor-pointer"
            >
              {link.label}
            </a>
          ))}
          <div className="mt-4 flex items-center gap-4">
            <a
              href="https://www.linkedin.com/in/nataliia-ivanova-profile/"
              target="_self"
              rel="noopener noreferrer"
              className="flex items-center justify-center rounded-md px-3 py-2 text-muted-foreground transition-colors hover:bg-accent hover:text-foreground"
              onClick={() => setIsMenuOpen(false)}
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <Button asChild className="flex-1">
              <a
                href="#contact"
                onClick={(e) => {
                  handleNavClick(e, "#contact");
                  setIsMenuOpen(false);
                }}
              >
                Get Started
              </a>
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
