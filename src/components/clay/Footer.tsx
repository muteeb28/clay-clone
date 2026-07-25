import Image from "next/image";
import Link from "next/link";
import { LinkedInIcon, SlackIcon, YouTubeIcon } from "@/components/icons";
import { cn } from "@/lib/utils";

interface FooterColumn {
  heading: string;
  links: string[];
}

const primaryColumns: FooterColumn[] = [
  {
    heading: "Use Cases",
    links: [
      "Automated inbound",
      "Account research",
      "ABM",
      "PLG assist",
      "Rep assist",
      "Reverse ETL",
      "Outbound",
      "CRM Enrichment",
      "TAM Sourcing",
    ],
  },
  {
    heading: "Product",
    links: [
      "Claygent AI",
      "Sculptor",
      "Ads",
      "Sequencer",
      "Multi-provider data enrichment",
      "Audiences",
      "Signals",
      "Functions",
      "Integrations",
      "Pricing",
      "Changelog",
    ],
  },
  {
    heading: "Blog",
    links: [
      "The rise of the GTM engineer",
      "Finding GTM alpha",
      "Clay reaches 100M ARR",
      "Series C: The GTM engineering era begins now",
    ],
  },
  {
    heading: "Resources",
    links: [
      "Get started lesson",
      "University",
      "Use case templates",
      "Partner programs",
      "Community",
      "FAQ",
    ],
  },
  {
    heading: "Company",
    links: ["Contact us", "About", "Careers", "Jobs", "Integrate with Clay", "Status"],
  },
];

const secondaryColumns: FooterColumn[] = [
  {
    heading: "Customers",
    links: [
      "OpenAI",
      "Vanta",
      "Verkada",
      "Sendoso",
      "Anthropic",
      "Coverflex",
      "Rippling",
      "Case studies",
    ],
  },
  {
    heading: "Legal",
    links: ["Privacy policy", "Terms of service", "Do not sell my data"],
  },
];

function FooterLinkList({ column }: { column: FooterColumn }) {
  return (
    <div>
      <h3 className="text-[11px] font-semibold uppercase tracking-widest text-gray-400">
        {column.heading}
      </h3>
      <ul className="mt-4 space-y-3">
        {column.links.map((link) => (
          <li key={link}>
            <Link
              href="#"
              className="flex items-center gap-2 text-sm text-gray-800 transition-colors hover:text-black hover:underline"
            >
              {link}
              {column.heading === "Company" && link === "Jobs" && (
                <span className="rounded-full bg-amber-200 px-2 py-0.5 text-[10px] font-semibold text-amber-950">
                  We are hiring!
                </span>
              )}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function Footer() {
  return (
    <footer className="bg-clay-cream">
      <div className="relative h-[250px] overflow-hidden rounded-t-3xl">
        <video
          autoPlay
          loop
          muted
          playsInline
          poster="/images/clay.com/footer/footer-poster.avif"
          className="absolute inset-0 -z-10 h-full w-full object-cover"
        >
          <source src="/videos/clay.com/footer.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-clay-cream" />
      </div>

      <div className="mx-auto max-w-7xl px-6 pb-10 pt-4 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {primaryColumns.map((column) => (
            <FooterLinkList key={column.heading} column={column} />
          ))}
        </div>

        <div className="mt-12 grid grid-cols-1 gap-10 sm:grid-cols-2 lg:w-2/5">
          {secondaryColumns.map((column) => (
            <FooterLinkList key={column.heading} column={column} />
          ))}
        </div>

        <div className="mt-12 border-t border-gray-200 pt-8">
          <div className="flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
            <Image
              src="/images/clay.com/logo/clay-logo.avif"
              alt="Clay"
              width={90}
              height={28}
              className="h-7 w-auto"
            />

            <p className="text-center text-sm leading-snug text-gray-400">
              Born in Brooklyn
              <br />
              ©2026 Clay Labs Inc.
            </p>

            <div className="flex items-center gap-2">
              {[
                { Icon: LinkedInIcon, label: "LinkedIn" },
                { Icon: YouTubeIcon, label: "YouTube" },
                { Icon: SlackIcon, label: "Slack" },
              ].map(({ Icon, label }) => (
                <Link
                  key={label}
                  href="#"
                  aria-label={label}
                  className={cn(
                    "flex h-9 w-9 items-center justify-center rounded-lg bg-black text-white transition-opacity hover:opacity-80"
                  )}
                >
                  <Icon className="h-4 w-4" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
