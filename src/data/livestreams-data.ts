import type { LivestreamRow, StatMarqueeItem } from "@/types/livestreams";

const IMG = "/images/clay.com/livestreams";

export const LIVESTREAM_ROWS: LivestreamRow[] = [
  {
    title: "Upcoming live",
    cards: [
      {
        slug: "how-first-party-signals-become-your-gtm-moat",
        status: "Upcoming",
        date: "Jul 29, 2026",
        time: "12:00 pm",
        title: "How first-party signals become your GTM moat",
        description:
          "Why do first-party signals beat third-party data in GTM? Verkada's Cody Leovic explains, plus the Clay workflows behind a 33% reply rate.",
        cta: "Register",
        image: `${IMG}/how-first-party-signals-become-your-gtm-moat.png`,
      },
      {
        slug: "how-clay-uses-clay-audiences",
        status: "Upcoming",
        date: "Jul 30, 2026",
        time: "12:00 pm",
        title: "How Clay Uses Clay: Automated Growth Plays",
        description:
          "Sync millions of CRM or warehouse records into Clay, enrich them, build Audiences, and take action across ads, sequencers, and rep tools.",
        cta: "Register",
        image: `${IMG}/how-clay-uses-clay-audiences.png`,
      },
      {
        slug: "top-1-faris-sumadi-principle-gtm-engineer-at-hubspot",
        status: "Upcoming",
        date: "Aug 6, 2026",
        time: "12:00 pm",
        title: "Top 1%: Faris Sumadi Principle GTM Engineer at Hubspot",
        description:
          "How does HubSpot run Clay across a 60-million-contact CRM? Faris Sumadi explains how his team scales enrichment without engineering",
        cta: "Register",
        image: `${IMG}/top-1-faris-sumadi.png`,
        tags: ["The Top 1 %"],
      },
      {
        slug: "how-clay-functions-mcp-power-enterprise-gtm-workflows",
        status: "Upcoming",
        date: "Aug 12, 2026",
        time: "12:00 pm",
        title: "How Clay Functions + MCP power Enterprise GTM workflows",
        description:
          "Join Jen Igartua and Everett Berry live to see Clay's new Functions + MCP layer in action and debate where it holds up at enterprise scale.",
        cta: "Register",
        image: `${IMG}/how-clay-functions-mcp.png`,
      },
    ],
  },
  {
    title: "Upcoming live demos",
    cards: [
      {
        slug: "clay-for-sales-revops-demo",
        status: "Upcoming",
        date: "Jul 29, 2026",
        time: "2:00 pm",
        title: "Clay for Sales & RevOps: Demo",
        description:
          "From CRM enrichment to TAM sourcing and AI messaging, see 5 Sales and RevOps use cases in Clay, including a live table build and Q&A.",
        cta: "Register",
        image: `${IMG}/sales-demo.avif`,
      },
      {
        slug: "clay-for-sales-revops-emea-demo",
        status: "Upcoming",
        date: "Jul 30, 2026",
        time: "8:00 am",
        title: "Clay for Sales & RevOps — EMEA Demo",
        description:
          "From CRM enrichment to TAM sourcing and AI messaging, see 5 Sales and RevOps use cases in Clay for EMEA, with live table build and Q&A.",
        cta: "Register",
        image: `${IMG}/emea-sales-revops-demo.avif`,
        tags: ["EMEA"],
      },
    ],
  },
  {
    title: "Binge our best content",
    cards: [
      {
        slug: "behind-the-scenes-of-clays-marketing-growth",
        status: "Replay",
        date: null,
        time: null,
        title: "Behind the Scenes of Clay's Marketing & Growth",
        description:
          "Join Clay's Bruno Estrella & Davide Grieco as they reveal the marketing and growth strategies behind Clay's rapid rise.",
        cta: "Watch Now",
        image: `${IMG}/behind-the-scenes-webinar.png`,
      },
      {
        slug: "the-future-of-gtm-what-does-growth-actually-do---slg-edition",
        status: "Replay",
        date: null,
        time: null,
        title: "The Future of GTM : What Does Growth Actually Do? - SLG edition",
        description:
          "Growth in SLG: How to build account lists, move deals with sales, and adapt to AI agents. Real tactics from Clay, Ramp, Leand Netic leaders.",
        cta: "Watch Now",
        image: `${IMG}/fgtm-ep2.avif`,
      },
      {
        slug: "the-future-of-go-to-market-engineering-the-ai-native-sdr",
        status: "Replay",
        date: null,
        time: null,
        title: "The future of GTM: The AI-native SDR",
        description:
          "What does an AI-native SDR motion actually look like? Clay, Notion & Decagon leaders share real workflows, & what's driving pipeline.",
        cta: "Watch Now",
        image: `${IMG}/fgtm-ai-native-sdr.avif`,
      },
      {
        slug: "clay-integrates-with-openai",
        status: "Replay",
        date: null,
        time: null,
        title: "How to use ChatGPT for Prospecting with Clay",
        description:
          "How sellers use ChatGPT + Clay to find emails, map buying centers, draft outreach, & prep for calls. Hosted by Clay's founder + Head of SDRs",
        cta: "Watch Now",
        image: `${IMG}/chatgpt-integration.avif`,
      },
      {
        slug: "what-works-for-gtm-in-2026",
        status: "Replay",
        date: null,
        time: null,
        title: "What Works for GTM in 2026",
        description:
          "How top GTM teams use 1st and 3rd party data to score fit and engagement and prioritize the right accounts across sales and marketing.",
        cta: "Watch Now",
        image: `${IMG}/what-works-for-gtm-2026.avif`,
      },
    ],
  },
  {
    title: "How Clay uses Clay",
    cards: [
      {
        slug: "how-clay-uses-clay-agents",
        status: "Replay",
        date: null,
        time: null,
        title: "How Clay uses Clay: AI Agents that research, enrich, and act",
        description:
          "An intro to GTM agents: how to build them, use templates, and structure inputs, prompts, and outputs in a live walkthrough.",
        cta: "Watch Now",
        image: `${IMG}/hcuc-11-agents.png`,
      },
      {
        slug: "how-clay-uses-clay-mcp-to-make-sellers-more-efficient",
        status: "Replay",
        date: null,
        time: null,
        title: "How Clay uses Clay: MCP to make Sellers More Efficient",
        description:
          "Merge AI flexibility with Clay reliability. Turn your enrichment workflows into callable functions for Claude, ChatGPT, and more.",
        cta: "Watch Now",
        image: `${IMG}/hcuc-10-mcp.png`,
      },
      {
        slug: "how-clay-uses-clay-closed-lost-reengagement",
        status: "Replay",
        date: null,
        time: null,
        title: "How Clay uses Clay: Turning Closed Lost into Pipeline",
        description:
          "Learn how Clay turns closed lost deals into pipeline, product signals, and buyer intelligence.",
        cta: "Watch Now",
        image: `${IMG}/hcuc-9-closed-lost.avif`,
      },
      {
        slug: "how-clay-uses-clay-recruiting-top-talent",
        status: "Replay",
        date: null,
        time: null,
        title: "How Clay uses Clay: Recruiting Top Talent",
        description:
          "Learn how our recruiting team uses Clay to find unique signals, rediscover candidates in our ATS, and build a full recruiting playbook.",
        cta: "Watch Now",
        image: `${IMG}/hcuc-8-recruiting.avif`,
      },
      {
        slug: "how-clay-uses-clay-seo-aeo-optimization",
        status: "Replay",
        date: null,
        time: null,
        title: "How Clay Uses Clay: SEO/AEO Optimization",
        description:
          "Learn how to build a custom AI visibility dashboard using Clay, Claude Code & Supabase — track LLM mentions, refresh content automatically.",
        cta: "Watch Now",
        image: `${IMG}/hcuc-7-seo-aeo.png`,
      },
      {
        slug: "how-clay-uses-clay-abm-direct-mail-campaigns",
        status: "Replay",
        date: null,
        time: null,
        title: "How Clay Uses Clay: ABM to break into tier 1 accounts",
        description:
          "See how Clay's marketing team sent personalized gifts, triggered ads, and built landing pages to turn cold calls into warm ones at scale.",
        cta: "Watch Now",
        image: `${IMG}/hcuc-6-abm.avif`,
      },
      {
        slug: "how-clay-uses-clay-account-prioritization",
        status: "Replay",
        date: null,
        time: null,
        title:
          "How Clay Uses Clay: Identify Tier 1 Accounts for Sales and Marketing",
        description:
          "Learn how to score accounts by fit and engagement, focus your reps on the right opportunities, and create curated sales experiences.",
        cta: "Watch Now",
        image: `${IMG}/hcuc-davide-account-prioritization.avif`,
      },
      {
        slug: "how-clay-uses-clay-inbound-lead-enrichment",
        status: "Replay",
        date: null,
        time: null,
        title: "How Clay Uses Clay: Inbound Lead Management",
        description:
          "Turn one email into a fully enriched, scored, and messaged lead in minutes. See how Clay supercharges inbound lead conversion live.",
        cta: "Watch Now",
        image: `${IMG}/hcuc-manny-inbound.avif`,
      },
      {
        slug: "how-clay-uses-clay-ads-audiences",
        status: "Replay",
        date: null,
        time: null,
        title: "How Clay Uses Clay: LinkedIn + Meta Ads on Autopilot",
        description:
          "See how Clay builds retargeting, lookalike, and exclusion audiences, then auto-syncs them to LinkedIn and Meta for high-ROI ad targeting.",
        cta: "Watch Now",
        image: `${IMG}/hcuc-ads-audiences.avif`,
      },
      {
        slug: "how-clay-uses-clay-qbr-decks",
        status: "Replay",
        date: null,
        time: null,
        title: "How Clay Uses Clay: Tailored Slide Decks at Scale",
        description:
          "Learn to use our Google Slides integration to auto-generate customer QBR decks in minutes and save your CS team 60+ hours per quarter.",
        cta: "Watch Now",
        image: `${IMG}/hcuc-bruno-qbr-decks.avif`,
      },
    ],
  },
  {
    title: "The future of GTM",
    cards: [
      {
        slug: "the-future-of-gtm-what-does-growth-actually-do---slg-edition",
        status: "Replay",
        date: null,
        time: null,
        title: "The Future of GTM : What Does Growth Actually Do? - SLG edition",
        description:
          "Growth in SLG: How to build account lists, move deals with sales, and adapt to AI agents. Real tactics from Clay, Ramp, Leand Netic leaders.",
        cta: "Watch Now",
        image: `${IMG}/fgtm-ep2.avif`,
      },
      {
        slug: "the-future-of-go-to-market-engineering-the-ai-native-sdr",
        status: "Replay",
        date: null,
        time: null,
        title: "The future of GTM: The AI-native SDR",
        description:
          "What does an AI-native SDR motion actually look like? Clay, Notion & Decagon leaders share real workflows, & what's driving pipeline.",
        cta: "Watch Now",
        image: `${IMG}/fgtm-ai-native-sdr.avif`,
      },
    ],
  },
  {
    title: "GTM Strategy & Best Practices",
    cards: [
      {
        slug: "what-works-for-gtm-in-2026",
        status: "Replay",
        date: null,
        time: null,
        title: "What Works for GTM in 2026",
        description:
          "How top GTM teams use 1st and 3rd party data to score fit and engagement and prioritize the right accounts across sales and marketing.",
        cta: "Watch Now",
        image: `${IMG}/what-works-for-gtm-2026.avif`,
      },
      {
        slug: "how-to-fix-global-gtm-hint-it-starts-with-data",
        status: "Replay",
        date: null,
        time: null,
        title: "How to Fix Global GTM? Hint: It Starts with Data",
        description: null,
        cta: "Watch Now",
        image: `${IMG}/gtm-global.avif`,
      },
      {
        slug: "why-premium-data-wins",
        status: "Replay",
        date: null,
        time: null,
        title: "From Data to Deals: Why Premium Data Wins",
        description: null,
        cta: "Watch Now",
        image: `${IMG}/why-premium-data-wins.avif`,
      },
    ],
  },
  {
    title: "Tactical Playbooks",
    cards: [
      {
        slug: "shorter-forms-higher-conversion-rates-inbound-lead-enrichment-101",
        status: "Replay",
        date: null,
        time: null,
        title:
          "Shorter Forms, Higher Conversion Rates | Inbound Lead Enrichment 101",
        description:
          "How to shorten your lead capture forms and auto-enrich missing fields in Clay to boost conversion rates.",
        cta: "Watch Now",
        image: `${IMG}/shorter-forms-lead-enrichment.avif`,
      },
      {
        slug: "signal-driven-outbound-trigger-outreach-with-buying-signals-in-clay",
        status: "Replay",
        date: null,
        time: null,
        title: "Signal Driven Outbound | Trigger Outreach with Buying Signals in Clay",
        description:
          "How to use buying signals — job changes, news, web intent — to trigger timely, relevant outreach in Clay.",
        cta: "Watch Now",
        image: `${IMG}/signal-driven-outbound.avif`,
      },
      {
        slug: "local-goldmine-finding-businesses-with-google-maps-clay",
        status: "Replay",
        date: null,
        time: null,
        title: "Local goldmine | Finding Businesses with Google Maps + Clay",
        description:
          "How to pull local business data from Google Maps into Clay and build a geo-targeted prospecting workflow.",
        cta: "Watch Now",
        image: `${IMG}/local-goldmine.avif`,
      },
      {
        slug: "growth-strategy-live-signals-101",
        status: "Replay",
        date: null,
        time: null,
        title: "Growth Strategy Live: Signals 101",
        description:
          "An intro to Clay Signals — how to track job changes, company news, and social activity to power outbound.",
        cta: "Watch Now",
        image: `${IMG}/signals-101.avif`,
      },
      {
        slug: "messy-to-magic-set-up-your-crm-for-success-in-clay",
        status: "Replay",
        date: null,
        time: null,
        title: "Messy to Magic: Set Up Your CRM for Success in Clay",
        description:
          "How to clean, normalize, and enrich your CRM data in Clay so your GTM team is always working from good data.",
        cta: "Watch Now",
        image: `${IMG}/messy-to-magic-crm.avif`,
      },
      {
        slug: "scheduling-in-clay",
        status: "Replay",
        date: null,
        time: null,
        title: "Scheduling in Clay",
        description:
          "How to schedule Clay workflows to run on a cadence — including digest summaries and automatic CRM updates.",
        cta: "Watch Now",
        image: `${IMG}/scheduling-in-clay.avif`,
      },
      {
        slug: "unmasking-claygent",
        status: "Replay",
        date: null,
        time: null,
        title: "Unmasking Claygent: the perfect prompting process",
        description:
          "How to write prompts that get the most out of Claygent — Clay's AI agent for researching people and companies.",
        cta: "Watch Now",
        image: `${IMG}/unmasking-claygent.avif`,
      },
    ],
  },
  {
    title: "Product Demos & Trainings",
    cards: [
      {
        slug: "clay-for-sales-revops-demo-replay",
        status: "Replay",
        date: null,
        time: null,
        title: "Clay for Sales & RevOps Demo",
        description:
          "From CRM enrichment to TAM sourcing and AI messaging, see 5 Sales and RevOps use cases in Clay, including a live table build and Q&A.",
        cta: "Watch Now",
        image: `${IMG}/sales-demo.avif`,
      },
      {
        slug: "clay-for-sales-revops-emea-demo-replay",
        status: "Replay",
        date: null,
        time: null,
        title: "Clay for Sales & RevOps EMEA Demo",
        description:
          "From our EMEA GTM team, see the most relevant Sales & RevOps use cases in Clay, including a live table build and Q&A.",
        cta: "Watch Now",
        image: `${IMG}/emea-sales-revops-demo.avif`,
        tags: ["EMEA"],
      },
      {
        slug: "clay-for-growth-marketing-emea-demo-replay",
        status: "Replay",
        date: null,
        time: null,
        title: "Clay for Growth & Marketing EMEA Demo",
        description:
          "From our EMEA GTM team, see the most relevant Marketing use cases in Clay, including a live table build and Q&A.",
        cta: "Watch Now",
        image: `${IMG}/emea-growth-marketing-demo.avif`,
        tags: ["EMEA"],
      },
      {
        slug: "clay-for-marketing-and-growth-demo-replay",
        status: "Replay",
        date: null,
        time: null,
        title: "Clay for Growth & Marketing Demo",
        description:
          "From signals to inbound lead management to ABM and paid ads, see 5 Marketing use cases in Clay, including a live table build and Q&A.",
        cta: "Watch Now",
        image: `${IMG}/marketing-demo.avif`,
      },
      {
        slug: "clay-certifications-studio-crm-enrichment",
        status: "Replay",
        date: null,
        time: null,
        title: "Clay Certifications Studio: CRM Enrichment",
        description:
          "Learn what production-ready outbound looks like, sequence logic, AI copywriting, error handling, and segmentation. Come ready to build.",
        cta: "Watch Now",
        image: `${IMG}/certifications-studio-crm-enrichment.avif`,
      },
      {
        slug: "clay-certifications-studio-2",
        status: "Replay",
        date: null,
        time: null,
        title: "Clay Certifications Studio",
        description:
          "Learn lead capture, scoring, routing, and response logic inside one complete, functioning system.",
        cta: "Watch Now",
        image: `${IMG}/certifications-studio-2.avif`,
      },
      {
        slug: "clay-certifications-studio",
        status: "Replay",
        date: null,
        time: null,
        title: "Clay Certifications Studio",
        description:
          "Clean CRM data is the foundation of everything. Learn to build enrichment workflows that are certified, scalable, and production-ready.",
        cta: "Watch Now",
        image: `${IMG}/certifications-studio.avif`,
      },
    ],
  },
  {
    title: "Partners",
    cards: [
      {
        slug: "how-to-build-a-pipeline-of-physician-relationships-at-scale",
        status: "Replay",
        date: null,
        time: null,
        title: "How To Build A Pipeline Of Physician Relationships At Scale",
        description:
          "3 plays to find, qualify, and reach the right physicians - using data most HealthTech teams don't know exists.",
        cta: "Watch Now",
        image: `${IMG}/physician-pipeline-scale.avif`,
      },
      {
        slug: "how-to-build-a-repeatable-outbound-motion-for-manufacturing-companies",
        status: "Replay",
        date: null,
        time: null,
        title:
          "How To Build A Repeatable Outbound Motion For Manufacturing Companies",
        description:
          "3 plays to build, qualify, and reach your full manufacturing buyer list - beyond the trade show floor.",
        cta: "Watch Now",
        image: `${IMG}/manufacturing-outbound-motion.avif`,
      },
      {
        slug: "building-a-closed-won-lookalike-engine-with-clay-lusha",
        status: "Replay",
        date: null,
        time: null,
        title: "Building a closed-won lookalike engine with Clay & Lusha",
        description:
          "Everett Berry and Omer Levy will show you how to build a Closed-Won Lookalike Engine from scratch using Clay and Lusha",
        cta: "Watch Now",
        image: `${IMG}/closed-won-lookalike-lusha.avif`,
      },
      {
        slug: "how-to-build-a-reporting-engine",
        status: "Replay",
        date: null,
        time: null,
        title: "How to Build a Reporting Engine",
        description:
          "Analyze which ICPs drive revenue, where deals are slipping, and what's underperforming. Turn those insights into clear next actions.",
        cta: "Watch Now",
        image: `${IMG}/reporting-engine.avif`,
      },
      {
        slug: "turning-leads-into-deals-with-clay-and-attio",
        status: "Replay",
        date: null,
        time: null,
        title: "Turning leads into deals with Clay and Attio",
        description:
          "Watch Clay and Attio turn a form fill into a fully routed, valued, and staffed deal automatically",
        cta: "Watch Now",
        image: `${IMG}/leads-into-deals-attio.avif`,
      },
      {
        slug: "how-to-build-a-self-maintaining-data-engine",
        status: "Replay",
        date: null,
        time: null,
        title: "How to Build a Self-Maintaining Data Engine",
        description:
          "Learn how to build a self-maintaining data engine that continuously cleans, enriches, and prioritizes your GTM data.",
        cta: "Watch Now",
        image: `${IMG}/self-maintaining-data-engine.avif`,
      },
      {
        slug: "why-most-gtm-teams-fail-in-europe-and-what-the-winners-do-differently",
        status: "Replay",
        date: null,
        time: null,
        title:
          "Why Most GTM Teams Fail In Europe (And What The Winners Do Differently)",
        description:
          "Learn why most GTM playbooks break in Europe and how winning teams fix the data layer, ditch volume, and scale across 28 markets.",
        cta: "Watch Now",
        image: `${IMG}/why-most-gtm-teams-fail-in-europe.avif`,
        tags: ["EMEA"],
      },
      {
        slug: "how-we-chose-the-best-data-providers-in-europe",
        status: "Replay",
        date: null,
        time: null,
        title: "How We Chose The Best Data Providers in Europe",
        description:
          "Good GTM always starts with good data. See how we tested and found the best providers in EMEA.",
        cta: "Watch Now",
        image: `${IMG}/best-data-providers-europe.avif`,
        tags: ["EMEA"],
      },
      {
        slug: "gtm-strategies-that-actually-work-in-europe",
        status: "Replay",
        date: null,
        time: null,
        title: "GTM Strategies That Actually Work in Europe",
        description:
          "Learn the exact plays driving pipeline, conversion, and retention across EMEA in 2026.",
        cta: "Watch Now",
        image: `${IMG}/gtm-strategies-europe.avif`,
        tags: ["EMEA"],
      },
      {
        slug: "stop-wasting-your-first-party-data",
        status: "Replay",
        date: null,
        time: null,
        title: "Stop Wasting Your First Party Data",
        description:
          "Turn Gong call transcripts into an automated GTM engine - pre-call prep, follow-ups, CRM updates, and buying signals built live.",
        cta: "Watch Now",
        image: `${IMG}/stop-wasting-first-party-data.avif`,
      },
      {
        slug: "turning-ai-hype-into-revenue-in-2026",
        status: "Replay",
        date: null,
        time: null,
        title: "Turning AI Hype into Revenue in 2026",
        description:
          "How to build conversion-ready data, automate intent scoring, and orchestrate outbound in Clay.",
        cta: "Watch Now",
        image: `${IMG}/ai-hype-into-revenue.avif`,
      },
      {
        slug: "mastering-multi-channel-outreach-with-woodpecker-and-clay",
        status: "Replay",
        date: null,
        time: null,
        title: "Mastering Multi-Channel Outreach with Woodpecker and Clay",
        description:
          "Harry from Cold IQ and Margaret, CEO of Woodpecker, break down how to combine Clay and Woodpecker for multichannel outreach",
        cta: "Watch Now",
        image: `${IMG}/woodpecker-outreach.avif`,
      },
      {
        slug: "building-your-influencer-strategy-with-modash-and-clay",
        status: "Replay",
        date: null,
        time: null,
        title: "Building your Influencer Strategy with Modash and Clay",
        description: "Partner Integrations",
        cta: "Watch Now",
        image: `${IMG}/modash-influencer-strategy.avif`,
      },
      {
        slug: "dynamically-update-your-website-with-webflow-x-clay",
        status: "Replay",
        date: null,
        time: null,
        title: "Dynamically Update Your Website with Webflow x Clay",
        description: null,
        cta: "Watch Now",
        image: `${IMG}/webflow-x-clay.avif`,
      },
      {
        slug: "using-tech-stack-to-find-your-best-customers",
        status: "Replay",
        date: null,
        time: null,
        title: "Using Tech Stack to Find Your Best Customers with Clay & HG Insights",
        description: null,
        cta: "Watch Now",
        image: `${IMG}/hg-insights-tech-stack.avif`,
      },
      {
        slug: "supercharging-your-abm-flows-with-hubspot-and-clay",
        status: "Replay",
        date: null,
        time: null,
        title: "Supercharging your ABM Flows with HubSpot and Clay",
        description:
          "Build smarter ABM flows with Clay + HubSpot. Learn to target, enrich, and convert high-value accounts.",
        cta: "Watch Now",
        image: `${IMG}/hubspot-abm-flows.avif`,
      },
    ],
  },
  {
    title: "Community & Events",
    cards: [
      {
        slug: "clay-cup-2026-strategy-prep-and-more-from-finalists",
        status: "Replay",
        date: null,
        time: null,
        title: "Clay Cup 2026: Strategy, prep, and more from finalists",
        description:
          "See how finalists from Clay Cup 2025 prepared, competed, and how their life changed because of Clay Cup",
        cta: "Watch Now",
        image: `${IMG}/clay-cup-2026-finalists.avif`,
      },
      {
        slug: "sculpt-launch-recap",
        status: "Replay",
        date: null,
        time: null,
        title: "Sculpt Launch Recap",
        description:
          "Everything Clay launched at their first ever conference, and how to put it all to work.",
        cta: "Watch Now",
        image: `${IMG}/sculpt-launch-recap.avif`,
      },
      {
        slug: "clay-cup-finals-livestream",
        status: "Replay",
        date: null,
        time: null,
        title: "Clay Cup 2025 Finals Livestream",
        description:
          "Watch Javeria and Matuesz compete live at Sculpt to identify the top 10 candidates for the Head of Sales role at EchoStage.",
        cta: "Watch Now",
        image: `${IMG}/clay-cup-2025-finals.avif`,
      },
    ],
  },
  {
    title: "Career & Education",
    cards: [
      {
        slug: "getting-started-on-clay-for-startups",
        status: "Replay",
        date: null,
        time: null,
        title: "Getting Started on Clay (For Startups)",
        description:
          "In this livestream, we'll walk through everything a founder or growth operator needs to get up and running.",
        cta: "Watch Now",
        image: `${IMG}/getting-started-for-startups.avif`,
      },
      {
        slug: "ai-skills-certifications-studio",
        status: "Replay",
        date: null,
        time: null,
        title: "AI Skills Certification Studio",
        description:
          "Build AI-powered workflows that meet real cert standards—prompt structuring, model selection, output parsing, and conditional logic.",
        cta: "Watch Now",
        image: `${IMG}/ai-skills-certification-studio.avif`,
      },
      {
        slug: "hiring-gtm-engineers-expert-insights-from-clays-leading-agencies",
        status: "Replay",
        date: null,
        time: null,
        title: "Hiring GTM Engineers: Expert insights from Clay's leading agencies",
        description: null,
        cta: "Watch Now",
        image: `${IMG}/hiring-gtm-engineers.avif`,
      },
      {
        slug: "gtme-hiring-info-session",
        status: "Replay",
        date: null,
        time: null,
        title: "GTME Career Info Session",
        description: null,
        cta: "Watch Now",
        image: `${IMG}/gtme-career-info-session.avif`,
      },
      {
        slug: "gtm-engineering-a-new-career-path-for-women-in-sales",
        status: "Replay",
        date: null,
        time: null,
        title: "GTM Engineering: A New Career Path for Women in Sales",
        description:
          "Clay's Dorothy, Ashley, and Tong Tong join Women in Sales CEO Alexine Mudawar to break down the GTM engineering role",
        cta: "Watch Now",
        image: `${IMG}/women-in-gtme.avif`,
      },
    ],
  },
];

export const STAT_MARQUEE_UP: StatMarqueeItem[] = [
  { stat: "6mo", label: "Enriched lost deals re-enter the pipeline", color: "bg-[#f8d7dd]" },
  { stat: "600+", label: "Personalized landing pages auto-generated per campaign", color: "bg-[#6c4bd8] text-white" },
  { stat: "+2x", label: "Enrichment coverage from low 40% to high 80%", color: "bg-[#bdeee0]" },
  { stat: "$34K+", label: "New pipeline generated from personalized outreach", color: "bg-[#fef3a8]" },
];

export const STAT_MARQUEE_DOWN: StatMarqueeItem[] = [
  { stat: "1000+", label: "Verified addresses per month", color: "bg-[#fef3a8]" },
  { stat: "20% higher response rate", label: "with enriched data and personalized direct mail campaigns", color: "bg-[#e4394a] text-white" },
  { stat: "80%+", label: "Enrichment coverage", color: "bg-[#8b6fd6] text-white" },
  { stat: "50+ personalized emails/day", label: "with improved engagement rates", color: "bg-[#1f8a5f] text-white" },
];

export const FILTER_PILLS = [
  "All",
  "Upcoming Live",
  "Binge our best content",
  "How Clay uses Clay",
  "The future of GTM",
  "The Top 1 %",
  "GTM Strategy & Best Practices",
  "Tactical Playbooks",
  "Product Demos & Trainings",
  "Partners",
  "Community & Events",
  "Career & Education",
  "EMEA",
] as const;
