import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  cacheComponents: true,
  partialPrefetching: true,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
  async redirects() {
    // Old URLs from the previous site structure. Permanent (308) so search
    // engines move their rankings to the new pages.
    return [
      { source: "/pricing", destination: "/process", permanent: true },
      { source: "/services/website-development", destination: "/services/mvp-development", permanent: true },
      { source: "/services/ecommerce", destination: "/services/saas-development", permanent: true },
      { source: "/services/cms-development", destination: "/services/mobile-app-development", permanent: true },
      { source: "/services/crm-solutions", destination: "/services/custom-crm-development", permanent: true },
      { source: "/services/ui-ux-design", destination: "/services/client-portals", permanent: true },
      { source: "/services/digital-strategy", destination: "/services/business-software-ai", permanent: true },
    ];
  },
};

export default nextConfig;
