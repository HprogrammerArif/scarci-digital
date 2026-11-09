import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ConciergeWidget } from "@/components/chat/concierge-widget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Scarci Digital | Website Care, Automation & Custom Development",
  description:
    "US-managed sister concern of Scarci Solutions. Ongoing website reliability, SEO, Meta ads management, and business automation plans starting at $349/mo—plus custom Shopify, Webflow, WordPress & CRM builds.",
  keywords: [
    "website care plans",
    "monthly website maintenance and SEO",
    "Meta ads management plans",
    "business automation agency",
    "fractional development team",
    "Shopify store development",
    "Webflow and WordPress agency",
    "custom CRM software development",
    "Scarci Digital",
    "Scarci Solutions sister concern",
  ],
  metadataBase: new URL("https://scarcidigital.com"),
  icons: {
    icon: [
      { url: "/assets/projects/fabicon-scarci.svg", type: "image/svg+xml" },
      { url: "/icon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/assets/projects/fabicon-scarci.svg",
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: "Scarci Digital | Monthly Care, Automation & Custom Development",
    description:
      "Predictable monthly website reliability, SEO, Meta ads management, and workflow automation from $349/mo—plus custom web, e-commerce, and CRM builds. Sister concern of Scarci Solutions.",
    url: "https://scarcidigital.com",
    siteName: "Scarci Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scarci Digital | Monthly Plans from $349/mo & Custom Dev",
    description:
      "Ongoing website care, SEO, Meta ads, workflow automation, and custom Shopify, Webflow, WordPress & CRM builds. A sister concern of Scarci Solutions.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen flex flex-col bg-[#050B14] text-[#F8FAFC] antialiased selection:bg-blue-600 selection:text-white">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <ConciergeWidget />
      </body>
    </html>
  );
}
