import type { Metadata } from "next";
import { Inter, IBM_Plex_Mono, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { RevealInit } from "@/components/shared/reveal-init";
import { CookieConsent } from "@/components/shared/cookie-consent";
import { ReCaptchaProvider } from "@/components/shared/recaptcha-provider";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
});

const ibmPlexMono = IBM_Plex_Mono({ 
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-mono",
});

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
});

const appName = process.env.NEXT_PUBLIC_APP_NAME || "Core Systems";
const appUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";
const appDescription = "AI-powered automation for growing BC businesses. We create targeted intelligent systems that reduce financial overhead, optimize leadership decisions, and transform every layer of your operational workflow.";

export const metadata: Metadata = {
  metadataBase: new URL(appUrl),
  title: {
    default: appName,
    template: `%s | ${appName}`,
  },
  description: appDescription,
  keywords: [
    "AI automation",
    "business automation",
    "BC businesses",
    "AI-powered solutions",
    "operational efficiency",
    "workflow automation",
    "intelligent systems",
    "business transformation",
    "UX SEO improvements",
    "AI strategy",
  ],
  authors: [{ name: "Core Systems" }],
  creator: "Core Systems",
  publisher: "Core Systems",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: appUrl,
    siteName: appName,
    title: appName,
    description: appDescription,
    images: [
      {
        url: `${appUrl}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: appName,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: appName,
    description: appDescription,
    images: [`${appUrl}/og-image.jpg`],
    creator: "@core_systems",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/apple-icon.png", type: "image/png", sizes: "180x180" },
    ],
    apple: [
      // Apple Web Clip icons for different devices
      { url: "/apple-icon.png", sizes: "180x180", type: "image/png" }, // iPhone (modern)
      { url: "/apple-icon-152.png", sizes: "152x152", type: "image/png" }, // iPad
      { url: "/apple-icon-167.png", sizes: "167x167", type: "image/png" }, // iPad Pro
    ],
  },
  manifest: "/manifest.json",
  alternates: {
    canonical: appUrl,
  },
  verification: {
    // Add your verification codes here when available
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <body className={`${inter.variable} ${ibmPlexMono.variable} ${spaceGrotesk.variable} ${inter.className} m-0 p-0`}>
        <ReCaptchaProvider>
          <RevealInit />
          <div className="flex min-h-screen flex-col relative">
            <Header />
            <main className="flex-1">{children}</main>
            <CookieConsent />
          </div>
        </ReCaptchaProvider>
      </body>
    </html>
  );
}
