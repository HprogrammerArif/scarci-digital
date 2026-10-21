export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "How long does a typical project take?",
    answer:
      "Timeline depends on scope and complexity. A standard business website typically takes 4–6 weeks, while complex e-commerce stores or CRM systems can take 8–16 weeks. We'll provide a detailed timeline during our discovery call, and we always build in milestones so you can track progress along the way.",
  },
  {
    id: "2",
    question: "What is your pricing model?",
    answer:
      "We offer both fixed-price and time-and-materials pricing depending on the project. Fixed-price works well for clearly defined projects like website builds. For ongoing development or evolving projects, we offer monthly retainer packages. Every engagement starts with a free consultation where we'll provide a transparent quote.",
  },
  {
    id: "3",
    question: "Do you offer ongoing maintenance and support?",
    answer:
      "Absolutely. We offer monthly maintenance plans that include security updates, performance monitoring, bug fixes, content updates, and priority support. Most of our clients opt for ongoing support to ensure their digital presence stays optimal and secure.",
  },
  {
    id: "4",
    question: "Which CMS do you recommend?",
    answer:
      "It depends on your needs. Shopify is ideal for e-commerce-focused businesses. WordPress with Elementor is great for content-heavy sites that need flexibility. Webflow excels for marketing sites with complex animations. We'll recommend the best platform based on your goals, budget, and team capabilities during our consultation.",
  },
  {
    id: "5",
    question: "Can you work with our existing website or do we need to start from scratch?",
    answer:
      "Both! We frequently optimize and redesign existing websites, migrate between platforms, and also build from scratch. We'll assess your current setup during discovery and recommend the most cost-effective approach—sometimes a strategic redesign delivers better ROI than a complete rebuild.",
  },
  {
    id: "6",
    question: "Do you work with clients outside the United States?",
    answer:
      "Yes, we serve clients across 20+ countries including Canada, UK, Australia, Germany, France, and beyond. As a USA-based agency with global reach, we're experienced in handling timezone differences, multi-language requirements, and international e-commerce configurations.",
  },
  {
    id: "7",
    question: "What makes Scarci Digital different from other agencies?",
    answer:
      "We combine deep technical expertise with business strategy. As a sister concern of Scarci Solutions, we bring enterprise-level engineering discipline to every project—whether it's a small business website or a complex CRM system. We don't just build; we engineer solutions that directly impact your bottom line.",
  },
  {
    id: "8",
    question: "How do we get started?",
    answer:
      "Simple! Book a free 30-minute discovery call through our website, or send us a message with your project details. We'll discuss your goals, provide initial recommendations, and if it's a good fit, we'll deliver a detailed proposal within 48 hours.",
  },
];
