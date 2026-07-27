import type {
  StartupsFeatureCard,
  StartupsBenefit,
  StartupsFaqItem,
  StartupsTestimonial,
} from "@/types/startups";
import type { MarqueeLogo } from "@/types/clay";

const IMG = "/images/clay.com/startups";
const LOGOS = "/images/clay.com/logos";
const AVATARS = "/images/clay.com/avatars";

export const STARTUPS_LOGOS: MarqueeLogo[] = [
  { src: `${LOGOS}/canva.svg`, alt: "Canva" },
  { src: `${LOGOS}/vanta.svg`, alt: "Vanta" },
  { src: `${LOGOS}/openai.svg`, alt: "OpenAI" },
  { src: `${LOGOS}/heygen.png`, alt: "HeyGen" },
  { src: `${LOGOS}/lovable.svg`, alt: "Lovable" },
  { src: `${LOGOS}/supabase.png`, alt: "Supabase" },
  { src: `${LOGOS}/elevenlabs.svg`, alt: "ElevenLabs" },
  { src: `${LOGOS}/cursor.svg`, alt: "Cursor" },
  { src: `${LOGOS}/anthropic.svg`, alt: "Anthropic" },
  { src: `${LOGOS}/stripe.svg`, alt: "Stripe" },
];

export const STARTUPS_FEATURE_CARDS: StartupsFeatureCard[] = [
  {
    bgColor: "rgb(238,246,115)",
    image: `${IMG}/startup-img.jpg`,
    imageAlt: "Claygent AI prompt interface mockup",
    heading: "Discover your best customers",
    body: "Turn vague, untested ICP hypotheses into enriched, signal-rich prospect lists within your TAM. Use Claygent to uncover custom AI datapoints to find and validate your ICP.",
    ctaLabel: "Meet Claygent",
    ctaVariant: "solid",
  },
  {
    bgColor: "rgb(248,185,227)",
    image: `${IMG}/startups-img.jpg`,
    imageAlt: "Message draft outreach editor mockup",
    heading: "Experiment with messaging to find what resonates",
    body: "Design lightweight outreach experiments (small batches, clear variables). Push messaging and enriched data into your outreach tools directly from Clay.",
    ctaLabel: "Try Sequencer",
    ctaVariant: "link",
  },
  {
    bgColor: "rgb(190,223,253)",
    image: `${IMG}/signals.webp`,
    imageAlt: "Signals dashboard mockup",
    heading: "Learn what converts and what doesn’t",
    body: "Find your GTM Alpha by identifying the unique data points that help you sell. Analyze which signals predicted engagement (and which didn’t). Validate your ICP and offering.",
    ctaLabel: "Discover Sculptor",
    ctaVariant: "link",
  },
  {
    bgColor: "rgb(203,216,16)",
    image: `${IMG}/enrichment.webp`,
    imageAlt: "Every GTM data point enrichments panel mockup",
    heading: "Iterate, refine, and systematize",
    body: "Refine your enrichment and scoring logic based on real data. Build repeatable Clay workflows that scale your GTM with you.",
    ctaLabel: "Explore Enrichments",
    ctaVariant: "link",
  },
];

export const WEDGE_BENEFITS: StartupsBenefit[] = [
  { icon: `${IMG}/wedge-benefit-1.jpg`, label: "Earn thousands of credits throughout the two week, async program" },
  { icon: `${IMG}/wedge-benefit-2.jpg`, label: "Connect with other leading early-stage founders and growth leaders" },
  { icon: `${IMG}/wedge-benefit-3.jpg`, label: "Build your use cases with hands-on support from GTME experts at Clay" },
];

export const CAMPUS_BENEFITS: StartupsBenefit[] = [
  { icon: `${IMG}/campus-benefit-1.jpg`, label: "Hands-on experience building a global campus program from 0 → 1" },
  { icon: `${IMG}/campus-benefit-2.jpg`, label: "Clay workspace with free credits that renew each semester" },
  { icon: `${IMG}/campus-benefit-3.jpg`, label: "Direct access to Clay's internal GTME talent network and talent team" },
];

export const STARTUPS_GALLERY: string[] = [
  `${IMG}/gallery-1.jpg`,
  `${IMG}/gallery-2.jpg`,
  `${IMG}/gallery-3.jpg`,
  `${IMG}/gallery-4.jpg`,
  `${IMG}/gallery-5.jpg`,
  `${IMG}/gallery-6.jpg`,
  `${IMG}/gallery-7.jpg`,
  `${IMG}/gallery-8.jpg`,
];

export const STARTUPS_FAQS: StartupsFaqItem[] = [
  {
    question: "Who is eligible for Clay's Startup Partner Program?",
    answer:
      "Venture capital firms, accelerators, incubators, startup studios, media companies, communities and other organizations supporting the top early-stage, VC-backed founders globally.",
  },
  {
    question: "Where can I learn about Wedge and other Clay GTM tools for my startups?",
    answer: "Head over here.",
  },
  {
    question: "My VC firm isn't a Clay Startup Program Partner, what do I do?",
    answer:
      "You can send them to this page and ask them to apply to join as a startup program partner.",
  },
];

export const STARTUPS_TESTIMONIALS: StartupsTestimonial[] = [
  {
    company: "OpenAI",
    accentColor: "rgb(203,216,16)",
    quote:
      "In my professional opinion, Clay has one of the most practical and exciting applications of AI, in a decades-old practice that has long been stale.",
    name: "Keith Jones",
    title: "GTM Systems Lead",
    avatar: `${AVATARS}/keith-jones.png`,
  },
  {
    company: "Vanta",
    accentColor: "rgb(255,118,20)",
    quote:
      "Clay should be an essential pillar of every company's GTM stack, enabling outbound built on the highest quality data foundation possible. Now you can automate hours of manual research so sales teams can focus on selling.",
    name: "Stevie Case",
    title: "CRO",
    avatar: `${AVATARS}/stevie-case.webp`,
  },
  {
    company: "Intercom",
    accentColor: "rgb(66,157,255)",
    quote:
      "This job has always been about creativity, despite how it might seem, and Clay enables me to answer more 'what if we could...' questions from our GTM teams than I ever could before.",
    name: "Alexander DeMoulin",
    title: "Director of Revenue Operations",
    avatar: `${AVATARS}/alexander-demoulin.avif`,
  },
  {
    company: "Clay",
    accentColor: "rgb(59,211,253)",
    quote:
      "I love using and working with Clay.com because its extensive customization options allow it to seamlessly integrate into various systems, making it an essential part of our tech stack. Their hands-on customer support ensures we build out flows in the most efficient way possible, enhancing our overall productivity and effectiveness.",
    name: "David Bulmer",
    title: "Sales Ops",
    avatar: `${AVATARS}/david-bulmer.png`,
  },
  {
    company: "Ramp",
    accentColor: "rgb(248,185,227)",
    quote:
      "Clay is a game changer for marketing, data, and operations. We have 3x our enrichment rate with Clay's combination of data providers. Clay makes it easy to use AI for GTM initiatives, unlocking new workflows that were infeasible before.",
    name: "Adam Wall",
    title: "Head of Sales Operations",
    avatar: `${AVATARS}/adam-wall.png`,
  },
  {
    company: "Anthropic",
    accentColor: "rgb(238,246,115)",
    quote:
      "Clay is a central part of our outbound campaign program. It's helped us fully automate lead enrichment that previously required expensive and time consuming manual research. We can use the hours we've saved on manual work for more interesting, creative, and important tasks, like coming up with new outreach ideas or nurturing relationships with prospects.",
    name: "Davide Grieco",
    title: "Prev. Director of Growth",
    avatar: `${AVATARS}/davide-grieco.webp`,
  },
  {
    company: "Verkada",
    accentColor: "rgb(190,223,253)",
    quote:
      "Clay saves us hours a week that we previously spent researching and vetting companies that applied to our startup program. Our auto-approval rate has jumped to ~40%—with no manual work needed.",
    name: "Josh Kim",
    title: "Head of Growth Programs",
    avatar: `${AVATARS}/josh-kim.avif`,
  },
  {
    company: "Notion",
    accentColor: "rgb(255,118,20)",
    quote:
      "Scaling inefficient SDR work isn't possible without an infinite flow of capital. Clay helps automate mundane tasks like contact data enrichment, including pulling signals and triggers, so SDRs can focus their time on prioritized selling and spend their days more effectively.",
    name: "Kris Rudegraap",
    title: "CEO",
    avatar: `${AVATARS}/kris-rudegraap.avif`,
  },
  {
    company: "Sendoso",
    accentColor: "rgb(203,216,16)",
    quote:
      "Not having Clay would hugely reduce our ability to run good outbound campaigns. We wouldn't be calling people as much, because it's hard to get good phone numbers. With Clay, we have a reliable source of data enrichment and can run dynamic, multi-touch outreach sequences.",
    name: "Julien Reiman",
    title: "Head of Sales",
    avatar: `${AVATARS}/julien-reiman.avif`,
  },
  {
    company: "Rippling",
    accentColor: "rgb(66,157,255)",
    quote:
      "Clay is the Rippling marketing team's secret weapon. It has helped us build an experimentation-driven GTM motion that iterates on ideas and scales what works. We've greatly improved our outbound email performance, deeply enriched our customer base with AI, and more.",
    name: "Ryan Narod",
    title: "VP, Marketing",
    avatar: `${AVATARS}/ryan-narod.avif`,
  },
];
