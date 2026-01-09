"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

interface LogoProps {
  className?: string;
  variant?: "default" | "footer";
}

export function Logo({ className = "", variant = "default" }: LogoProps) {
  const isFooter = variant === "footer";
  const router = useRouter();
  const pathname = usePathname();

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    if (isFooter) {
      // Footer logo: scroll to top
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      // Header logo: navigate to homepage and refresh if already there
      if (pathname === "/") {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
        router.refresh();
      } else {
        // Navigate to homepage
        e.preventDefault();
        router.push("/");
      }
    }
  };

  return (
    <Link
      href="/"
      onClick={handleLogoClick}
      className={`flex items-center gap-2 ${className}`}
    >
      <div className="flex items-center gap-2">
        {/* Core Systems icon - connected nodes representing systems/networks */}
        {!isFooter && (
          <div className="flex items-center justify-center">
            <svg
              width="28"
              height="28"
              viewBox="0 0 28 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-terminal-dark-green"
              style={{ color: 'hsl(142, 76%, 36%)' }}
            >
            {/* Connected nodes/circles representing core systems */}
            <circle
              cx="14"
              cy="10"
              r="3"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="8"
              cy="18"
              r="3"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            <circle
              cx="20"
              cy="18"
              r="3"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
            />
            {/* Connection lines */}
            <line
              x1="14"
              y1="13"
              x2="10.5"
              y2="16.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            <line
              x1="14"
              y1="13"
              x2="17.5"
              y2="16.5"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
            {/* Center dot */}
            <circle
              cx="14"
              cy="10"
              r="1.5"
              fill="currentColor"
            />
          </svg>
          </div>
        )}
        {/* Company name */}
        <span
          className={`font-bold tracking-tight ${
            isFooter 
              ? "text-xl text-white" 
              : "text-lg text-terminal-dark-green"
          }`}
        >
          Core Systems
        </span>
      </div>
    </Link>
  );
}
