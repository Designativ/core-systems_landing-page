import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy Policy for Natalie Ivanova",
};

export default function PrivacyPolicyPage() {
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
          Privacy Policy
        </h1>

        <p className="mb-8 text-sm text-terminal-text-secondary">
          Last updated: {new Date().toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" })}
        </p>

        <div className="prose prose-lg max-w-none space-y-8 text-terminal-text-secondary">
          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              1. Introduction
            </h2>
            <p className="mb-4">
              Natalie Ivanova ("I," "my," or "me") is committed to protecting your privacy. This Privacy Policy
              explains how I collect, use, disclose, and safeguard your information when you visit my website or use
              my services.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              2. Information I Collect
            </h2>
            <h3 className="mb-3 text-xl font-semibold text-terminal-text-primary">
              2.1 Information You Provide
            </h3>
            <p className="mb-4">
              I may collect information that you voluntarily provide to me, including:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Name and contact information (email address, phone number)</li>
              <li>Company name and website</li>
              <li>Messages and communications you send to us</li>
              <li>Any other information you choose to provide</li>
            </ul>

            <h3 className="mb-3 text-xl font-semibold text-terminal-text-primary">
              2.2 Automatically Collected Information
            </h3>
            <p className="mb-4">
              When you visit my website, I may automatically collect certain information, including:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>IP address and browser type</li>
              <li>Device information</li>
              <li>Usage data and browsing patterns</li>
              <li>Cookies and similar tracking technologies</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              3. How I Use Your Information
            </h2>
            <p className="mb-4">I use the information I collect to:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Provide, operate, and maintain our services</li>
              <li>Respond to your inquiries and provide customer support</li>
              <li>Send you marketing communications (with your consent)</li>
              <li>Improve and optimize our website and services</li>
              <li>Analyze usage patterns and trends</li>
              <li>Detect, prevent, and address technical issues</li>
              <li>Comply with legal obligations</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              4. Information Sharing and Disclosure
            </h2>
            <p className="mb-4">
              I do not sell, trade, or rent your personal information to third parties. I may share your information
              only in the following circumstances:
            </p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>With service providers who assist me in operating my website and conducting my business</li>
              <li>When required by law or to respond to legal process</li>
              <li>To protect my rights, privacy, safety, or property</li>
              <li>In connection with a business transfer or merger</li>
              <li>With your consent or at your direction</li>
            </ul>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              5. Data Security
            </h2>
            <p className="mb-4">
              I implement appropriate technical and organizational security measures to protect your personal
              information. However, no method of transmission over the Internet or electronic storage is 100% secure.
              While I strive to use commercially acceptable means to protect your information, I cannot guarantee
              absolute security.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              6. Your Rights and Choices
            </h2>
            <p className="mb-4">Depending on your location, you may have the following rights:</p>
            <ul className="mb-4 ml-6 list-disc space-y-2">
              <li>Access and receive a copy of your personal information</li>
              <li>Rectify inaccurate or incomplete information</li>
              <li>Request deletion of your personal information</li>
              <li>Object to or restrict processing of your information</li>
              <li>Data portability</li>
              <li>Withdraw consent at any time</li>
              <li>Opt-out of marketing communications</li>
            </ul>
            <p className="mb-4">
              To exercise these rights, please contact me using the information provided in the Contact Us section
              below.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              7. Cookies and Tracking Technologies
            </h2>
            <p className="mb-4">
              I use cookies and similar tracking technologies to track activity on my website and hold certain
              information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being
              sent. However, if you do not accept cookies, you may not be able to use some portions of my website.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              8. Children's Privacy
            </h2>
            <p className="mb-4">
              My services are not intended for individuals under the age of 18. I do not knowingly collect personal
              information from children. If you become aware that a child has provided me with personal information,
              please contact me immediately.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              9. Changes to This Privacy Policy
            </h2>
            <p className="mb-4">
              I may update my Privacy Policy from time to time. I will notify you of any changes by posting the new
              Privacy Policy on this page and updating the "Last updated" date. You are advised to review this Privacy
              Policy periodically for any changes.
            </p>
          </section>

          <section>
            <h2 className="mb-4 text-2xl font-semibold text-terminal-text-primary">
              10. Contact Us
            </h2>
            <p className="mb-4">
              If you have any questions about this Privacy Policy or wish to exercise your rights, please contact me:
            </p>
            <p className="mb-4">
              <strong>Natalie Ivanova</strong>
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
