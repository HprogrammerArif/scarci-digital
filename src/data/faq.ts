export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What does Scarci Digital build?",
    answer:
      "We build custom software that businesses and founders own: startup MVPs, SaaS platforms, custom CRMs, client portals, mobile apps, internal business tools with AI features, and high-performing websites and online stores on Shopify, WordPress, Webflow, and Next.js.",
  },
  {
    id: "2",
    question: "How much does a project cost?",
    answer:
      "Every project is different, so we don't publish fixed prices. After a free 30-minute scoping call we send a written proposal with the scope, timeline, milestones, and a fixed quote. There is no cost or obligation to get a proposal.",
  },
  {
    id: "3",
    question: "Who owns the source code and intellectual property?",
    answer:
      "You do, 100%. At handover we transfer the code repository, designs, documentation, and cloud accounts to your company, along with full IP assignment. You are never locked into our platform.",
  },
  {
    id: "4",
    question: "How long does a typical project take?",
    answer:
      "Most websites take 4–10 weeks, MVPs 6–10 weeks, and CRMs, portals, SaaS platforms, and mobile apps 8–16 weeks depending on scope. You get a milestone timeline in your proposal and see working software on a staging link every week.",
  },
  {
    id: "5",
    question: "How do you keep projects on track?",
    answer:
      "Projects run in milestones with written acceptance criteria. You have one US-based point of contact, a shared project board, and a weekly demo. If anything changes scope, we tell you before it affects the timeline.",
  },
  {
    id: "6",
    question: "Do you offer support after launch?",
    answer:
      "Yes. Every build includes a post-launch warranty for bugs in the delivered scope. After that, many clients keep us on for ongoing maintenance, monitoring, security updates, and new features.",
  },
  {
    id: "7",
    question: "Can you take over or modernize an existing system?",
    answer:
      "Yes. We regularly replace spreadsheets, legacy portals, and expensive per-seat tools. We start with a code and data review, then plan a migration that keeps your business running during the switch.",
  },
  {
    id: "8",
    question: "How is Scarci Digital related to Scarci Solutions?",
    answer:
      "We are sister companies. Scarci Digital builds software products and websites. Scarci Solutions handles SEO, paid ads, business automation, and AI phone receptionists for existing businesses. We refer clients to each other when it's the better fit.",
  },
  {
    id: "9",
    question: "How do we get started?",
    answer:
      "Send a short description of your project through the contact form or the chat assistant. We reply within one business day to schedule a free scoping call, and we're happy to sign an NDA first.",
  },
];
