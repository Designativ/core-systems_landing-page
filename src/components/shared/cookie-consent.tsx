"use client";

import { useState, useEffect } from "react";
import { Cookie } from "lucide-react";

export function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already accepted cookies
    const cookieConsent = localStorage.getItem("cookieConsent");
    if (!cookieConsent) {
      // Show banner after a short delay
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem("cookieConsent", "accepted");
    setShowBanner(false);
  };

  const declineCookies = () => {
    localStorage.setItem("cookieConsent", "declined");
    setShowBanner(false);
  };

  if (!showBanner) return null;

  return (
    <div className="fixed bottom-0 right-0 z-50 p-4 sm:p-6 max-w-md">
      <div className="rounded-xl border border-gray-200 bg-white/95 backdrop-blur-md shadow-2xl p-4 sm:p-6">
        <div className="flex flex-col gap-4">
          <div className="flex-1">
            <div className="mb-2 flex items-center gap-2">
              <Cookie className="h-5 w-5 text-terminal-dark-green" />
              <h3 className="text-base font-semibold text-terminal-text-primary sm:text-lg">
                Cookie Consent
              </h3>
            </div>
            <p className="text-sm text-terminal-text-secondary sm:text-base">
              I use cookies to enhance your experience. By clicking "Accept All", you consent to our use of cookies. Learn more in our{" "}
              <a
                href="/privacy"
                className="text-terminal-dark-teal hover:underline font-medium"
              >
                Privacy Policy
              </a>
              .
            </p>
          </div>
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
            <button
              onClick={declineCookies}
              className="rounded-lg border border-terminal-border-light bg-white px-4 py-2 text-sm font-medium text-terminal-text-primary transition-colors hover:bg-terminal-light-gray"
            >
              Decline
            </button>
            <button
              onClick={acceptCookies}
              className="rounded-lg bg-terminal-lime px-4 py-2 text-sm font-semibold text-terminal-dark-teal transition-colors hover:bg-terminal-lime-hover"
            >
              Accept All
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
