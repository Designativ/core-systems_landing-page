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
        {/* Terminal icon - square brackets representing terminal/console */}
        <div className="flex items-center justify-center">
          <svg
            width={isFooter ? "32" : "28"}
            height={isFooter ? "32" : "28"}
            viewBox="0 0 28 28"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-terminal-dark-green"
          >
            <path
              d="M8 4L4 8V20L8 24H20L24 20V8L20 4H8Z"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-terminal-dark-green"
            />
            <path
              d="M10 10L14 14L10 18"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="text-terminal-dark-green"
            />
            <circle
              cx="18"
              cy="10"
              r="1.5"
              fill="currentColor"
              className="text-terminal-dark-green"
            />
          </svg>
        </div>
        {/* Company name */}
        <span
          className={`font-bold tracking-tight ${
            isFooter 
              ? "text-xl text-white" 
              : "text-lg text-gray-900"
          }`}
        >
          Terminal
        </span>
      </div>
    </Link>
  );
}
