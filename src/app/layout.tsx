import type { Metadata, Viewport } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { SITE_CONFIG } from "@/lib/constants";

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

const defaultTitle =
  "Scarci Digital | Custom Software Development Company (US)";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: defaultTitle,
    template: "%s | Scarci Digital",
  },
  description: SITE_CONFIG.description,
  keywords: [
    "custom software development company",
    "startup MVP development",
    "SaaS development company",
    "custom CRM development",
    "client portal development",
    "mobile app development",
    "AI application development",
    "Shopify development agency",
    "Webflow development",
    "WordPress development",
  ],
  icons: {
    icon: [
      { url: "/assets/projects/fabicon-scarci.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    apple: "/apple-icon.png",
  },
  openGraph: {
    title: defaultTitle,
    description: SITE_CONFIG.description,
    url: SITE_CONFIG.url,
    siteName: SITE_CONFIG.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: SITE_CONFIG.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#050B14",
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
        {children}
      </body>
    </html>
  );
}
