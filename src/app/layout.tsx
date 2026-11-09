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
  title: "Scarci Digital | Custom Software & Digital Product Studio",
  description:
    "US-managed custom software development studio engineering startup MVPs, SaaS platforms, custom CRMs, client portals, and mobile applications with 100% IP ownership. Sister concern of Scarci Solutions.",
  keywords: [
    "custom software development",
    "startup MVP development",
    "custom CRM development",
    "client portal software",
    "SaaS platform development",
    "mobile app development studio",
    "business software engineering",
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
    title: "Scarci Digital | Custom Software & Digital Product Studio",
    description:
      "Engineering startup MVPs, SaaS platforms, custom CRMs, client portals, and mobile applications with fixed milestones and 100% IP ownership. Sister concern of Scarci Solutions.",
    url: "https://scarcidigital.com",
    siteName: "Scarci Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scarci Digital | Custom Software & Digital Product Studio",
    description:
      "Custom software, startup MVPs, SaaS platforms, and bespoke CRM systems engineered with 100% IP ownership. Sister concern of Scarci Solutions.",
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
