import React from "react";

interface ToolLogoProps {
  className?: string;
}

// Google Analytics Logo
const GoogleAnalytics: React.FC<ToolLogoProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
);

// Semrush Logo (simplified - SE)
const Semrush: React.FC<ToolLogoProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M6 4h5v3H8v2h3v3H6V4zm7 0h5v3h-3v1h3v2h-3v3h3v3h-5V4z" />
  </svg>
);

// Cursor Logo (simplified - cursor/pointer icon)
const Cursor: React.FC<ToolLogoProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className}>
    <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
  </svg>
);

// Vercel Logo
const Vercel: React.FC<ToolLogoProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M24 22.525H0l12-21.05 12 21.05z" />
  </svg>
);

// GitHub Logo
const GitHub: React.FC<ToolLogoProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
  </svg>
);

// Webflow Logo (simplified W)
const Webflow: React.FC<ToolLogoProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M3 3l4.5 15L12 8.5l4.5 9.5L21 3h-5l-2 6-2-6H3z" />
  </svg>
);

// Figma Logo
const Figma: React.FC<ToolLogoProps> = ({ className }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M8 24c2.208 0 4-1.792 4-4v-4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zm0-16h4V0H8c-2.208 0-4 1.792-4 4s1.792 4 4 4zm4 4H8c-2.208 0-4 1.792-4 4s1.792 4 4 4h4V12zm0-8H8V0h4v4z" />
    <path d="M18.5 12c0-2.761-2.239-5-5-5H12v10h1.5c2.761 0 5-2.239 5-5zM12 4h1.5c2.761 0 5 2.239 5 5s-2.239 5-5 5H12V4z" />
  </svg>
);

const toolLogos = [
  { name: "Google Analytics", component: GoogleAnalytics },
  { name: "Semrush", component: Semrush },
  { name: "Cursor", component: Cursor },
  { name: "Vercel", component: Vercel },
  { name: "GitHub", component: GitHub },
  { name: "Webflow", component: Webflow },
  { name: "Figma", component: Figma },
];

export function ToolLogos() {
  return (
    <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6">
      {toolLogos.map((tool, index) => {
        const LogoComponent = tool.component;
        return (
          <div
            key={index}
            className="flex h-6 w-6 items-center justify-center text-white opacity-30 transition-opacity hover:opacity-50 md:h-8 md:w-8"
            title={tool.name}
          >
            <LogoComponent className="h-full w-full" />
          </div>
        );
      })}
    </div>
  );
}
