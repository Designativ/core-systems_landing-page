"use client";

import { useEffect } from "react";

export function RevealInit() {
  useEffect(() => {
    // Check if element is already in viewport
    const isElementInViewport = (el: Element): boolean => {
      const rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Check if element is partially visible
    const isElementPartiallyVisible = (el: Element): boolean => {
      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || document.documentElement.clientHeight;
      const windowWidth = window.innerWidth || document.documentElement.clientWidth;
      
      return (
        rect.top < windowHeight &&
        rect.bottom > 0 &&
        rect.left < windowWidth &&
        rect.right > 0
      );
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: "50px", // Start animation slightly before element enters viewport
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
          // Stop observing once revealed to prevent flickering
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    // Function to observe all reveal elements
    const observeRevealElements = () => {
      const revealElements = document.querySelectorAll(".reveal");
      revealElements.forEach((el) => {
        // Skip if already active
        if (el.classList.contains("active")) {
          return;
        }
        
        // Don't activate immediately on first render to prevent hydration mismatch
        // Always use IntersectionObserver, even for visible elements
        observer.observe(el);
      });
    };

    // Wait for hydration to complete before adding active classes
    // This prevents hydration mismatch errors
    const initTimeout = setTimeout(() => {
      observeRevealElements();
    }, 300);

    // Use MutationObserver to handle dynamically added content
    const mutationObserver = new MutationObserver(() => {
      // Debounce to avoid excessive checks
      setTimeout(() => {
        observeRevealElements();
      }, 50);
    });

    // Observe the document body for changes
    mutationObserver.observe(document.body, {
      childList: true,
      subtree: true,
    });

    // Also check on scroll for elements that might have been missed
    const handleScroll = () => {
      const revealElements = document.querySelectorAll(".reveal:not(.active)");
      revealElements.forEach((el) => {
        if (isElementPartiallyVisible(el)) {
          el.classList.add("active");
          observer.unobserve(el);
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      clearTimeout(initTimeout);
      observer.disconnect();
      mutationObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return null;
}
