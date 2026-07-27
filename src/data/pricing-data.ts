import type {
  PricingTierOption,
  ComparisonCategory,
  CustomerResult,
  SecurityBadge,
  PricingFaqItem,
} from "@/types/pricing";
import type { MarqueeLogo } from "@/types/clay";

const LOGOS = "/images/clay.com/logos";
const IMG = "/images/clay.com/pricing";

export const PRICING_LOGOS: MarqueeLogo[] = [
  { src: `${LOGOS}/vanta.svg`, alt: "Vanta" },
  { src: `${LOGOS}/intercom.svg`, alt: "Intercom" },
  { src: `${LOGOS}/google.svg`, alt: "Google" },
  { src: `${LOGOS}/openai.svg`, alt: "OpenAI" },
  { src: `${LOGOS}/cursor.svg`, alt: "Cursor" },
  { src: `${LOGOS}/anthropic.svg`, alt: "Anthropic" },
  { src: `${LOGOS}/ramp.svg`, alt: "Ramp" },
  { src: `${LOGOS}/rippling.svg`, alt: "Rippling" },
  { src: `${LOGOS}/notion.svg`, alt: "Notion" },
  { src: `${LOGOS}/perplexity.svg`, alt: "Perplexity" },
  { src: `${LOGOS}/uber.svg`, alt: "Uber" },
  { src: `${LOGOS}/workday.svg`, alt: "Workday" },
];

export const LAUNCH_ACTIONS: Record<"monthly" | "annual", PricingTierOption[]> = {
  annual: [
    { label: "180K/yr", priceMonthly: 54 },
    { label: "480K/yr", priceMonthly: 135 },
    { label: "720K/yr", priceMonthly: 180 },
    { label: "1.2M/yr", priceMonthly: 261 },
    { label: "2.4M/yr", priceMonthly: 486 },
  ],
  monthly: [
    { label: "15K/mo", priceMonthly: 60 },
    { label: "40K/mo", priceMonthly: 150 },
    { label: "60K/mo", priceMonthly: 200 },
    { label: "100K/mo", priceMonthly: 290 },
    { label: "200K/mo", priceMonthly: 540 },
  ],
};

export const LAUNCH_CREDITS: Record<"monthly" | "annual", PricingTierOption[]> = {
  annual: [
    { label: "30K/yr", priceMonthly: 113 },
    { label: "72K/yr", priceMonthly: 261 },
    { label: "120K/yr", priceMonthly: 414 },
    { label: "240K/yr", priceMonthly: 792 },
    { label: "600K/yr", priceMonthly: 1913 },
  ],
  monthly: [
    { label: "2.5K/mo", priceMonthly: 125 },
    { label: "6K/mo", priceMonthly: 290 },
    { label: "10K/mo", priceMonthly: 460 },
    { label: "20K/mo", priceMonthly: 880 },
    { label: "50K/mo", priceMonthly: 2125 },
  ],
};

export const GROWTH_ACTIONS: Record<"monthly" | "annual", PricingTierOption[]> = {
  annual: [
    { label: "480K/yr", priceMonthly: 185 },
    { label: "720K/yr", priceMonthly: 261 },
    { label: "1.2M/yr", priceMonthly: 405 },
    { label: "2.4M/yr", priceMonthly: 765 },
  ],
  monthly: [
    { label: "40K/mo", priceMonthly: 205 },
    { label: "60K/mo", priceMonthly: 290 },
    { label: "100K/mo", priceMonthly: 450 },
    { label: "200K/mo", priceMonthly: 850 },
  ],
};

export const GROWTH_CREDITS: Record<"monthly" | "annual", PricingTierOption[]> = {
  annual: [
    { label: "72K/yr", priceMonthly: 261 },
    { label: "120K/yr", priceMonthly: 413 },
    { label: "240K/yr", priceMonthly: 792 },
    { label: "600K/yr", priceMonthly: 1913 },
  ],
  monthly: [
    { label: "6K/mo", priceMonthly: 290 },
    { label: "10K/mo", priceMonthly: 460 },
    { label: "20K/mo", priceMonthly: 880 },
    { label: "50K/mo", priceMonthly: 2125 },
  ],
};

export const FREE_FEATURES = [
  "Unlimited seats and tables",
  "Run multi-provider waterfalls",
  "Run up to 200 rows per table",
  "Enrich with Claygent",
  "Bring your own API key",
  "Send emails with Clay sequencer",
];

export const LAUNCH_FEATURES = [
  "Everything in Free, plus:",
  "Enrich phone numbers",
  "Run unlimited search with Audiences",
  "Track job changes and other signals",
  "Launch email campaigns via integrations",
  "Reuse functions across workflows",
  "Up to 50,000 rows per table",
];

export const GROWTH_FEATURES = [
  "Everything in Launch, plus:",
  "Auto-sync and enrich CRM and data warehouse",
  "Unlimited search & 250k imports with Audiences",
  "Integrate with any HTTP API",
  "Automate any signal via webhook",
  "Track web intent signals",
  "Includes 1 ads audience",
  "Get priority support",
];

export const ENTERPRISE_FEATURES = [
  "Everything in Growth, plus:",
  "Unlimited ad audiences",
  "Run unlimited search and unlimited imports with Audiences",
  "Sign in with SSO",
  "Role-based access control (RBAC)",
  "Get dedicated growth strategist",
];

export const COMPARISON_TABLE: ComparisonCategory[] = [
  {
    heading: "Functionality",
    rows: [
      { label: "Run multi-provider waterfalls", values: ["check", "check", "check", "check"] },
      { label: "Enrich with Claygent", values: ["check", "check", "check", "check"] },
      { label: "Bring your own API key", values: ["check", "check", "check", "check"] },
      { label: "Exclude companies/people from search", values: ["-", "check", "check", "check"] },
      { label: "Run enrichment in bulk", values: ["-", "-", "-", "check"] },
      { label: "Company/people/job data in bulk", values: ["-", "-", "-", "Add-on"] },
    ],
  },
  {
    heading: "Signals",
    description: "Find and act on 1st-party and 3rd-party signals",
    rows: [
      { label: "Job change signals", values: ["-", "check", "check", "check"] },
      { label: "Company news signals", values: ["-", "check", "check", "check"] },
      { label: "Social listening signals", values: ["-", "check", "check", "check"] },
      { label: "Web intent signals", values: ["-", "-", "check", "check"] },
    ],
  },
  {
    heading: "Integrations",
    description: "Connect Clay to your entire tech stack",
    rows: [
      { label: "HTTP API integrations", values: ["-", "-", "check", "check"] },
      { label: "CRM integrations", values: ["-", "-", "check", "check"] },
      { label: "Connect to data warehouses", values: ["-", "-", "check", "check"] },
    ],
  },
  {
    heading: "Workflow orchestration",
    description: "Automate and scale workflows",
    rows: [
      { label: "Customize agents with Claygent builder", values: ["check", "check", "check", "check"] },
      { label: "Launch email campaigns", values: ["check", "check", "check", "check"] },
      { label: "Custom functions", values: ["-", "check", "check", "check"] },
      { label: "Schedule recurring enrichment runs", values: ["-", "check", "check", "check"] },
      { label: "Push audiences to ads platforms", values: ["-", "-", "Includes 1 Ads audience", "Unlimited Ads Audiences"] },
      {
        label: "Unlimited data via Audiences",
        values: [
          "-",
          "Unlimited Search and CSV upload",
          "Unlimited Search and CSV upload; Up to 250k imports from CRM and Data warehouse",
          "Unlimited Search and CSV upload; Unlimited imports from CRM and Data warehouse",
        ],
      },
    ],
  },
  {
    heading: "Platform and administration",
    description: "Use Clay securely at scale",
    rows: [
      { label: "Table version history", values: ["-", "1 month", "1 month", "6 months"] },
      { label: "Tables and users per workspace", values: ["Unlimited", "Unlimited", "Unlimited", "Unlimited"] },
      { label: "Role based access control (RBAC)", values: ["-", "-", "-", "check"] },
      { label: "Single sign-on (SSO)", values: ["-", "-", "Add on", "check"] },
      { label: "Custom CSA and DPA", values: ["-", "-", "-", "check"] },
    ],
  },
  {
    heading: "Credits economics",
    description: "Use, buy, and track credits with flexibility",
    rows: [
      { label: "Get all credits up front (annual plans)", values: ["check", "check", "check", "check"] },
      { label: "Credit reporting dashboard", values: ["check", "check", "check", "check"] },
      { label: "Credit top-ups", values: ["-", "Buy more at a 30% premium", "Buy more at a 30% premium", "Buy more at custom price"] },
      { label: "Workbook-level credit budget", values: ["-", "-", "-", "check"] },
    ],
  },
  {
    heading: "Customer success",
    description: "Access best-in-class support and services",
    rows: [
      { label: "Priority support queue", values: ["-", "-", "Priority queue", "Dedicated Slack channel"] },
      { label: "Dedicated growth strategist (CSM)", values: ["-", "-", "-", "check"] },
      { label: "Onboarding & co-building", values: ["-", "-", "-", "check"] },
      { label: "Bi-annual business review", values: ["-", "-", "-", "check"] },
    ],
  },
];

export const CUSTOMER_RESULTS: CustomerResult[] = [
  { company: "HEX", stat: "+50%", label: "lift in win-rate", ctaLabel: "Hex case study", image: `${IMG}/testimonial-cards.png` },
  { company: "PUMP", stat: "+25%", label: "revenue per sales rep", ctaLabel: "Pump case study", image: `${IMG}/case-study-1.jpg` },
  { company: "RIPPLING", stat: "2x", label: "cold email performance", ctaLabel: "Rippling case study", image: `${IMG}/case-study-2.jpg` },
  { company: "MERGE", stat: "2.5x", label: "better pipeline-to-cost ratio", ctaLabel: "Merge case study", image: `${IMG}/case-study-3.jpg` },
  { company: "HARMONIC", stat: "2x", label: "SDR outbound capacity", ctaLabel: "Harmonic case study", image: `${IMG}/case-study-4.jpg` },
  { company: "VERKADA", stat: "2x", label: "better pipeline-to-cost ratio", ctaLabel: "Varkada case study", image: `${IMG}/case-study-5.jpg` },
  { company: "INTERCOM", stat: "+140%", label: "outbound pipeline", ctaLabel: "Intercom case study", image: `${IMG}/case-study-6.jpg` },
];

export const SECURITY_BADGES: SecurityBadge[] = [
  { icon: `${IMG}/badge-soc2.avif`, label: "SOC 2 Type II", description: "We are SOC 2 Type II compliant. Request our SOC 2 in our Trust Center." },
  { icon: `${IMG}/badge-gdpr.avif`, label: "GDPR", description: "Go to market anywhere in the world — let us handle compliance with local laws." },
  { icon: `${IMG}/badge-ccpa.avif`, label: "CCPA", description: "Support your customer base with opt out and DNC support." },
  { icon: `${IMG}/badge-iso27001.avif`, label: "ISO 27001 +", description: "Securely connect your CRM and other systems." },
  { icon: `${IMG}/badge-iso42001.png`, label: "ISO 42001", description: "Securely connect your CRM and other systems." },
];

export const PRICING_FAQS: PricingFaqItem[] = [
  {
    question: "How do I pick the right plan?",
    answer:
      "We've designed each plan around the features that fit where you are in your GTM journey. The best place to start is matching your needs to the right tier, not trying to predict your exact Data Credits or Action volumes.\n\nFree — A low risk way to learn and experiment with Clay. Includes unlimited seats and tables, multi-provider waterfalls, Claygent enrichment, Clay Sequencer for email, and up to 200 rows per table. Comes with 100 Data Credits and 500 Actions/mo.\n\nLaunch (starting at $185/mo) — The best way to start building in Clay. For individuals and small teams automating their first prospecting workflows. Includes everything in Free, plus phone number enrichment, job change and signal tracking, email campaign integrations, and up to 50,000 rows per table. Includes 2,500 Data Credits and 15,000 Actions/mo.\n\nGrowth (starting at $495/mo) — For teams scaling their GTM motion. Includes everything in Launch, plus CRM auto-sync and enrichment, HTTP API integrations, webhook automation, web intent signal tracking, audience pushes to ads platforms, and priority support. Includes 6,000 Data Credits and 40,000 Actions/mo.\n\nEnterprise (custom pricing with annual commitment) — For GTM teams running at scale, with enterprise-grade security, support, and infrastructure. Includes everything in Growth, plus unlimited Audiences across sources, unlimited row bulk enrichment, Clay API access, data warehouse syncs, SSO, RBAC permissions management, additional Ads audiences, and a dedicated Growth Strategist. Includes 100,000+ Data Credits and 200,000+ Actions/mo.\n\nEvery plan comes with a set number of Data Credits and Actions sized to cover the needs of most users at that tier. If you need more, you can top up Data Credits or step into a higher Action tier at any time.",
  },
  {
    question: "What are Actions and Data Credits? How do they work?",
    answer:
      "Data Credits are used when you purchase data from Clay's marketplace — finding emails, phone numbers, company data across our 150+ data partners. Data credits always get cheaper as you grow. We've negotiated volume discounts directly with our data partners, passing those savings on to you.\n\nIf you bring your own API keys for third-party data, you skip Data Credit costs entirely and only use Actions for the platform work Clay handles behind the scenes.\n\nActions measure the orchestration you do on Clay — enriching data, running a table, calling an AI model, sending data to a third-party system, or exporting data out of Clay. Plans are sized based on real usage data, so the vast majority of customers have more than enough capacity. If you do reach your Action limit, you can upgrade to the next Action tier.",
  },
  {
    question: "Do unused Data Credits or Actions roll over?",
    answer:
      "Actions reset each billing cycle and don't roll over, since they reflect the platform capacity your plan includes. Data Credits work more like a currency and do roll over. On Launch and Growth plans, unused credits can accumulate up to 2x your monthly credit amount (e.g., a 10,000 credit plan can bank up to 20,000 total). Enterprise customers can roll over up to 15% of their prior year's purchased credits, provided they renew at an equal or higher commitment.",
  },
  {
    question: "Why are Actions and Data Credits separate?",
    answer:
      "Think of it as two separate things happening at once: Clay is doing work, and Clay is buying data on your behalf. Data Credits cover the cost of the data itself. Actions cover the platform work Clay does on your behalf — routing your request, calling the provider, running your workflow, and returning the result to your table. If an enrichment returns no result, you're not charged Data Credits or Actions.",
  },
  {
    question: "Will I have enough Actions and Data Credits on my plan?",
    answer:
      "We have scoped out Launch and Growth plans so that 90% of our customers will never hit a usage limit. Users can always buy more if they need to top up without being pushed up to a higher plan tier. Enterprise customers will build custom plans with their GTMEs.",
  },
  {
    question: "How does AI usage work in Clay?",
    answer:
      "Customers now have a choice between two pricing options for AI on Clay:\n\nFixed-price: 80% of models in Clay continue to cost a flat number of Data Credits per task, including all of Clay's native models. Ideal for classification, short summaries, templated content generation, and simple lookups.\n\nVariable: Token intensive models (e.g., GPT-5.1 and Claude 4.6 Sonnet) now have variable pricing based on actual token consumption, best suited for multi-step research and detailed account-level analysis. Clay charges customers exactly for the tokens consumed with no markup.",
  },
  {
    question: "Can I use my own API keys in Clay?",
    answer:
      "Customers are still welcome to use their own API keys for data enrichment or AI in Clay. Each run will count as one Action, but no Data Credit will be used. AI runs are 2x faster using Clay's API keys compared to customers using their own because of the higher rate limits that Clay has negotiated with AI vendors.",
  },
];
