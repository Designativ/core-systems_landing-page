import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Terms of Service for Terminal Industries",
};

export default function TermsOfServicePage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto max-w-4xl px-4 py-16 md:py-24">
        <Link
          href="/"
          className="mb-8 inline-block text-sm text-terminal-text-secondary transition-colors hover:text-terminal-text-primary"
        >
          ← Back to Home
        </Link>

        <h1 className="mb-8 text-4xl font-bold tracking-tight text-terminal-text-primary md:text-5xl">
          Terms of Service
        </h1>

        <p className="mb-8 text-sm text-terminal-text-secondary">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-terminal-text-secondary">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              1. Agreement to Terms
            </h2>
            <p className="mb-4">
              By accessing or using the services provided by Terminal Industries ("we," "our," or "us"), you agree to be
              bound by these Terms of Service ("Terms"). If you disagree with any part of these Terms, you may not
              access or use our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              2. Description of Services
            </h2>
            <p className="mb-4">
              Terminal Industries provides AI-powered automation systems, conversion-focused websites, custom
              applications, UX/SEO audits, and related consulting services. We reserve the right to modify, suspend, or
              discontinue any aspect of our services at any time without prior notice.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              3. Use License
            </h2>
            <p className="mb-4">
              Permission is granted to temporarily access and use our website for personal or business purposes. This
              license does not include:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Modifying or copying website materials</li>
              <li>Using materials for any commercial purpose or public display</li>
              <li>Attempting to decompile or reverse engineer any software</li>
              <li>Removing any copyright or proprietary notations</li>
              <li>Transferring materials to another person or "mirroring" on another server</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              4. Service Agreements
            </h2>
            <p className="mb-4">
              Specific services provided by Terminal Industries will be governed by separate written agreements that
              detail the scope of work, deliverables, timelines, pricing, and other terms specific to each engagement.
              These Terms serve as a general framework and do not override specific service agreements.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              5. User Accounts and Information
            </h2>
            <p className="mb-4">
              When you create an account or provide information to us, you agree to:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Provide accurate, current, and complete information</li>
              <li>Maintain and promptly update your information</li>
              <li>Maintain the security of your account credentials</li>
              <li>Accept responsibility for all activities under your account</li>
              <li>Notify us immediately of any unauthorized use</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              6. Intellectual Property Rights
            </h2>
            <p className="mb-4">
              The services, content, features, and functionality of our website are owned by Terminal Industries and are
              protected by international copyright, trademark, patent, trade secret, and other intellectual property
              laws. Unless otherwise specified in a separate agreement, all rights remain with Terminal Industries.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              7. Payment Terms
            </h2>
            <p className="mb-4">
              Payment terms for services will be specified in individual service agreements. Generally:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Payment is due according to the schedule specified in your service agreement</li>
              <li>All fees are non-refundable unless otherwise stated</li>
              <li>Late payments may incur additional fees or result in service suspension</li>
              <li>You are responsible for any taxes applicable to services provided</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              8. Disclaimer of Warranties
            </h2>
            <p className="mb-4">
              Our services are provided "as is" and "as available" without warranties of any kind, either express or
              implied. We do not warrant that:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Our services will meet your specific requirements</li>
              <li>Our services will be uninterrupted, timely, secure, or error-free</li>
              <li>Results obtained from use of our services will be accurate or reliable</li>
              <li>Any errors in our services will be corrected</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              9. Limitation of Liability
            </h2>
            <p className="mb-4">
              To the fullest extent permitted by law, Terminal Industries shall not be liable for any indirect,
              incidental, special, consequential, or punitive damages, or any loss of profits or revenues, whether
              incurred directly or indirectly, or any loss of data, use, goodwill, or other intangible losses resulting
              from your use of our services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              10. Indemnification
            </h2>
            <p className="mb-4">
              You agree to indemnify, defend, and hold harmless Terminal Industries, its officers, directors, employees,
              agents, and affiliates from any claims, damages, losses, liabilities, and expenses (including legal fees)
              arising from your use of our services, violation of these Terms, or infringement of any rights of another.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              11. Termination
            </h2>
            <p className="mb-4">
              We may terminate or suspend your access to our services immediately, without prior notice or liability,
              for any reason, including if you breach these Terms. Upon termination, your right to use the services will
              immediately cease.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              12. Governing Law
            </h2>
            <p className="mb-4">
              These Terms shall be governed by and construed in accordance with the laws of British Columbia, Canada,
              without regard to its conflict of law provisions. Any disputes arising from these Terms shall be subject to
              the exclusive jurisdiction of the courts of British Columbia.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              13. Changes to Terms
            </h2>
            <p className="mb-4">
              We reserve the right to modify or replace these Terms at any time. If a revision is material, we will
              provide at least 30 days notice prior to any new terms taking effect. Your continued use of our services
              after any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              14. Contact Information
            </h2>
            <p className="mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <p className="mb-4">
              <strong>Terminal Industries</strong>
              <br />
              Email: <a href="mailto:info@terminalindustries.com" className="text-terminal-lime hover:underline">info@terminalindustries.com</a>
              <br />
              Location: Vancouver, BC, Canada
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
