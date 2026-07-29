import Image from "next/image";
import type { ClayFooterColumn } from "@/types/clay";

const SOCIALS = [
  { label: "LinkedIn", href: "#", iconSrc: "/images/clay/69a1ebd1f749bdabf75d1cd6_Linkedin.png" },
  { label: "YouTube", href: "#", iconSrc: "/images/clay/69a1ebd08d0559b33d8f2202_Youtube.png" },
  { label: "X (Twitter)", href: "#", iconSrc: "/images/clay/69a1ebd094219f0fa7c3a20b_Twitter-X.png" },
];

const COLUMNS: ClayFooterColumn[] = [
  {
    heading: "Use Cases",
    links: [
      { label: "Automated inbound", href: "#" },
      { label: "Account research", href: "#" },
      { label: "ABM", href: "#" },
      { label: "PLG assist", href: "#" },
      { label: "Rep assist", href: "#" },
      { label: "Reverse ETL", href: "#" },
      { label: "Outbound", href: "#" },
      { label: "CRM Enrichment", href: "#" },
      { label: "TAM Sourcing", href: "#" },
    ],
  },
  {
    heading: "Product",
    links: [
      { label: "Claygent AI", href: "#" },
      { label: "Sculptor", href: "#" },
      { label: "Ads", href: "#" },
      { label: "Sequencer", href: "#" },
      { label: "Multi-provider data enrichment", href: "#" },
      { label: "Audiences", href: "#" },
      { label: "Signals", href: "#" },
      { label: "Functions", href: "#" },
      { label: "Integrations", href: "#" },
      { label: "Pricing", href: "#" },
      { label: "Changelog", href: "#" },
    ],
  },
  {
    heading: "Blog",
    links: [
      { label: "The rise of the GTM engineer", href: "#" },
      { label: "Finding GTM alpha", href: "#" },
      { label: "Clay reaches 100M ARR", href: "#" },
      { label: "Series C: The GTM engineering era begins now", href: "#" },
    ],
  },
  {
    heading: "Resources",
    links: [
      { label: "Get started lesson", href: "#" },
      { label: "University", href: "#" },
      { label: "Use case templates", href: "#" },
      { label: "Partner programs", href: "#" },
      { label: "Community", href: "#" },
      { label: "FAQ", href: "#" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "Contact us", href: "#" },
      { label: "About", href: "#" },
      { label: "Careers", href: "#" },
      { label: "Jobs", href: "#", badge: "We are hiring!" },
      { label: "Integrate with Clay", href: "#" },
      { label: "Status", href: "#" },
    ],
  },
];

const CUSTOMERS = ["OpenAI", "Vanta", "Verkada", "Sendoso", "Anthropic", "Coverflex", "Rippling", "Case studies"];
const LEGAL = ["Privacy policy", "Terms of service", "Do not sell my data"];

export function ClayFooter() {
  return (
    <footer className="relative z-10 mx-4 -mt-32 rounded-t-3xl bg-[rgb(249,248,246)] px-6 pb-10 pt-10 sm:mx-auto sm:max-w-[1240px] sm:px-10">
      <div className="grid grid-cols-2 gap-8 sm:grid-cols-5">
        {COLUMNS.map((col) => (
          <div key={col.heading}>
            <p className="font-clay-mono text-xs font-bold tracking-[0.08em] text-black/60">
              {col.heading.toUpperCase()}
            </p>
            <ul className="mt-4 space-y-3">
              {col.links.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[rgb(85,83,78)] hover:text-black">
                    {link.label}
                  </a>
                  {link.badge && (
                    <span className="ml-2 rounded-full bg-[rgb(238,246,115)] px-2 py-0.5 text-[10px] font-semibold text-black">
                      {link.badge}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-5">
        <div>
          <p className="font-clay-mono text-xs font-bold tracking-[0.08em] text-black/60">
            CUSTOMERS
          </p>
          <ul className="mt-4 space-y-3">
            {CUSTOMERS.map((c) => (
              <li key={c}>
                <a href="#" className="text-sm text-[rgb(85,83,78)] hover:text-black">
                  {c}
                </a>
              </li>
            ))}
          </ul>
        </div>
        <div className="col-span-2 sm:col-start-5">
          <p className="font-clay-mono text-xs font-bold tracking-[0.08em] text-black/60">
            LEGAL
          </p>
          <ul className="mt-4 space-y-3">
            {LEGAL.map((l) => (
              <li key={l}>
                <a href="#" className="text-sm text-[rgb(85,83,78)] hover:text-black">
                  {l}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-12 flex flex-col items-center gap-4 border-t border-[rgb(238,233,223)] pt-8 sm:flex-row sm:justify-between">
        <Image
          src="/images/clay/6778506d788ebf16fef48551_Clay-primary-logo.avif"
          alt="Clay"
          width={90}
          height={28}
          className="h-6 w-auto"
        />
        <p className="text-sm text-[rgb(85,83,78)]">Born in Brooklyn</p>
        <p className="text-sm text-[rgb(85,83,78)]">©2026 Clay Labs Inc.</p>
        <div className="flex gap-3">
          {SOCIALS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              aria-label={social.label}
              className="flex h-9 w-9 items-center justify-center rounded-lg bg-[rgb(238,233,223)]"
            >
              <Image src={social.iconSrc} alt="" width={16} height={16} className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
