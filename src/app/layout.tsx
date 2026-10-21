import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";

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
  title: "Scarci Digital | Enterprise CRM & Web Development Agency",
  description:
    "Sister concern of Scarci Solutions. Full-service digital agency delivering high-performance website design, Shopify & e-commerce development, Webflow/WordPress CMS, and bespoke CRM software.",
  keywords: [
    "CRM software development",
    "agency website development",
    "Shopify Plus store development",
    "Webflow development agency",
    "Next.js agency",
    "Scarci Digital",
    "Scarci Solutions sister concern",
    "custom CRM solutions",
  ],
  metadataBase: new URL("https://scarcidigital.com"),
  openGraph: {
    title: "Scarci Digital | High-Growth Web & CRM Development",
    description:
      "Enterprise-grade digital experiences, e-commerce storefronts, and custom CRM systems. A sister concern of Scarci Solutions.",
    url: "https://scarcidigital.com",
    siteName: "Scarci Digital",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Scarci Digital | Web & CRM Development",
    description:
      "Enterprise-grade digital experiences, e-commerce storefronts, and custom CRM systems. A sister concern of Scarci Solutions.",
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
      </body>
    </html>
  );
}
