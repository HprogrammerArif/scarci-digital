export interface FAQ {
  id: string;
  question: string;
  answer: string;
}

export const faqs: FAQ[] = [
  {
    id: "1",
    question: "What does Scarci Digital build, and what are your primary offerings?",
    answer:
      "Scarci Digital is a custom software development and digital product studio. We organize our engineering around six core product categories: Startup MVP Development ($12.5k–$45k), Custom CRM Development ($12.5k–$45k), Client & Customer Portals ($10k–$45k), Mobile App Development ($12.5k–$60k), SaaS Platform Development ($20k–$75k+), and Custom Business Software & AI Applications ($7.5k–$75k+).",
  },
  {
    id: "2",
    question: "How do your commercial models and milestone staged payments work?",
    answer:
      "We avoid open-ended hourly billing that penalizes efficiency. Projects are structured around fixed-price milestone stages: 30% upon discovery and technical blueprint approval, 30% upon core feature and database completion, 25% upon delivery of a testing-ready beta build, and 15% upon client acceptance, security verification, and complete IP/code handover. This protects your cash flow and ties every payment to verifiable working code.",
  },
  {
    id: "3",
    question: "Who owns the intellectual property (IP) and source code?",
    answer:
      "You do—100%. Upon completion and payment of milestones, full intellectual property assignment, copyright ownership, and repository transfer are granted to your company. You are never locked into proprietary agency platforms or recurring per-seat software fees.",
  },
  {
    id: "4",
    question: "How does Scarci Digital differ from Scarci Solutions?",
    answer:
      "Scarci Solutions focuses on improving the technology an existing business already uses—providing business automation, AI phone receptionists, SEO, and paid Meta marketing retainers. Scarci Digital builds proprietary technology that businesses and founders own and use as their product (custom software, mobile apps, SaaS, and custom CRMs). The two sister companies refer clients between each other seamlessly.",
  },
  {
    id: "5",
    question: "What is the typical project investment and delivery timeline?",
    answer:
      "Our ideal project sweet spot is between $15,000 and $35,000, with focused MVPs and prototypes starting at $10,000 and complex enterprise multi-tenant systems scaling to $40,000–$75,000+. Delivery timelines typically range from 4–6 weeks for rapid MVPs to 8–12 weeks for comprehensive SaaS platforms and custom CRM builds.",
  },
  {
    id: "6",
    question: "Do you offer post-launch software maintenance and product support?",
    answer:
      "Yes. Following launch, we offer optional monthly software maintenance agreements: Application Care ($500/mo), CRM & Portal Support ($1,000/mo), and SaaS Platform Retainers ($1,500/mo). These cover security patches, framework dependency updates, database backups, uptime monitoring, and guaranteed priority developer response SLAs for ongoing feature enhancement.",
  },
  {
    id: "7",
    question: "What technology stack do you engineer on?",
    answer:
      "We build on battle-tested, modern, scalable architectures: Next.js and React for web applications; React Native and Expo for cross-platform iOS & Android mobile apps; PostgreSQL, Supabase, and Prisma for relational databases; Node.js and Python for backend APIs; and Docker/AWS/Vercel for automated CI/CD cloud infrastructure.",
  },
  {
    id: "8",
    question: "Can you modernize or rebuild our existing legacy systems?",
    answer:
      "Yes. Many clients bring fragmented Excel spreadsheets, outdated legacy portals, or expensive commercial SaaS setups (Salesforce/HubSpot) with rising seat fees. We architect clean relational databases, migrate your historical data, and deploy custom software that replaces those tools with zero per-user licensing fees.",
  },
  {
    id: "9",
    question: "How do we get started?",
    answer:
      "Submit a brief summary of your product vision, problem to solve, or target timeline on our Contact page. Our US technical architecture team responds within 1 business day to schedule a 30-minute scoping call and provide a structured roadmap.",
  },
];
