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
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "Terminal Industries",
    description:
      "We create targeted intelligent systems that reduce financial overhead, optimize leadership decisions, and transform every layer of your operational workflow.",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
    logo: `${process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000"}/images/logo.svg`,
    sameAs: [
      "https://www.linkedin.com/company/terminal-industries",
      "https://twitter.com/terminal",
    ],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "Customer Service",
      availableLanguage: "English",
    },
    offers: {
      "@type": "Offer",
      description: "Custom AI-powered business automation and software development services",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
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
