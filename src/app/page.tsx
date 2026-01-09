import { HeroSection } from "@/components/sections/hero-section";
import { TrustBar } from "@/components/sections/trust-bar";
import { CoreProblems } from "@/components/sections/core-problems";
import { WhatWeDo } from "@/components/sections/what-we-do";
import { HowItWorks } from "@/components/sections/how-it-works";
import { WhatYouCanExpect } from "@/components/sections/what-you-can-expect";
import { FAQSection } from "@/components/sections/faq-section";
import { FinalCTA } from "@/components/sections/final-cta";
import { Footer } from "@/components/layout/footer";

export default function HomePage() {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
  
  // Enhanced Organization Schema
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Core Systems",
    description:
      "AI-powered automation for growing BC businesses. We create targeted intelligent systems that reduce financial overhead, optimize leadership decisions, and transform every layer of your operational workflow.",
    url: baseUrl,
    logo: `${baseUrl}/images/logo.svg`,
    email: "natalieindesign@gmail.com",
    sameAs: [
      "https://www.linkedin.com/in/nataliia-ivanova-profile/",
      "https://twitter.com/terminal",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      email: "natalieindesign@gmail.com",
      availableLanguage: "English",
      areaServed: "CA",
    },
    address: {
      "@type": "PostalAddress",
      addressCountry: "CA",
      addressRegion: "BC",
    },
    offers: [
      {
        "@type": "Offer",
        name: "AI-Powered Business Automation",
        description: "Custom AI-powered business automation and software development services",
      },
      {
        "@type": "Offer",
        name: "UX + SEO Improvements",
        description: "20-40% increase in website conversion rates and 2-3x improvement in organic search visibility",
      },
      {
        "@type": "Offer",
        name: "AI Strategy & Roadmap",
        description: "Strategic planning with clear, prioritized roadmap and expected ROI for each initiative",
      },
    ],
  };

  // Website Schema
  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Core Systems",
    url: baseUrl,
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: `${baseUrl}/search?q={search_term_string}`,
      },
      "query-input": "required name=search_term_string",
    },
  };

  // Service Schema
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Business Automation & AI Solutions",
    provider: {
      "@type": "Organization",
      name: "Core Systems",
    },
    areaServed: {
      "@type": "Country",
      name: "Canada",
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Core Systems Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "UX + SEO Audit",
            description: "Website performance analysis and optimization",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Strategy & Roadmap",
            description: "Strategic planning with data-backed recommendations",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "AI Automation",
            description: "Custom AI solutions to automate business processes",
          },
        },
      ],
    },
  };

  // FAQ Schema
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What happens on the free discovery call?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We discuss your current situation, goals, and challenges. We'll ask about your website performance, team capabilities, and what you've already tried. You'll leave with a clear understanding of whether we're a fit and what next steps might look like. No sales pressure.",
        },
      },
      {
        "@type": "Question",
        name: "How quickly can we get started?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "After our free discovery call, we typically deliver a custom proposal within 1-3 business days. Deep-dive audits usually take 1-2 weeks, and we can begin implementation immediately after that if you choose to move forward.",
        },
      },
      {
        "@type": "Question",
        name: "What kind of ROI should we expect?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "This depends on your starting point, but clients typically see 20-40% improvements in conversion rates from UX/SEO fixes, and 10-30 hours per week saved from initial automation implementations. We establish clear success metrics during the discovery phase.",
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroSection />
      <CoreProblems />
      <WhatWeDo />
      <HowItWorks />
      <WhatYouCanExpect />
      <FAQSection />
      <div className="relative bg-terminal-dark-teal geometric-pattern">
        <FinalCTA />
        <Footer />
      </div>
    </>
  );
}
