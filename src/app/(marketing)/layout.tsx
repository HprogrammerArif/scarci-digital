import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ConciergeWidget } from "@/components/chat/concierge-widget";
import { SITE_CONFIG } from "@/lib/constants";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/assets/projects/Logo-scarcidigital.svg`,
  description: SITE_CONFIG.description,
  email: SITE_CONFIG.contact.email,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Wilmington",
    addressRegion: "DE",
    addressCountry: "US",
  },
  areaServed: ["US", "CA", "GB", "AU", "EU"],
  parentOrganization: {
    "@type": "Organization",
    name: SITE_CONFIG.parentCompany.name,
    url: SITE_CONFIG.parentCompany.url,
  },
  sameAs: Object.values(SITE_CONFIG.social),
};

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
      />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-lg focus:bg-blue-600 focus:text-white"
      >
        Skip to content
      </a>
      <Header />
      <main id="main" className="flex-1">
        {children}
      </main>
      <Footer />
      <ConciergeWidget />
    </>
  );
}
