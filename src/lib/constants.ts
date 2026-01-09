/**
 * Application-wide constants
 * Centralize configuration values here for easy updates
 */

export const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "My Website";
export const APP_URL = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

// Navigation links
export const NAV_LINKS = [
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQ" },
] as const;

// Footer links
export const FOOTER_LINKS = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/contact", label: "Contact" },
] as const;

// Social media links
export const SOCIAL_LINKS = {
  twitter: "#",
  github: "#",
  linkedin: "https://www.linkedin.com/in/nataliia-ivanova-profile/",
} as const;
