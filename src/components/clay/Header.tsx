"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@/lib/utils";
import {
  ArrowRightIcon,
  SearchIcon,
  MenuIcon,
  CloseIcon,
  ChevronDownIcon,
  LinkedInIcon,
  YouTubeIcon,
  SlackIcon,
} from "@/components/icons";
import type { NavItem } from "@/types/clay";

const NAV_ITEMS: NavItem[] = [
  {
    label: "Product",
    href: "#",
    groups: [
      {
        heading: "FEATURES",
        links: [
          { label: "Claygents", href: "#" },
          { label: "Waterfall", href: "#" },
          { label: "Signals and Intent", href: "#" },
          { label: "Data marketplace", href: "#" },
          { label: "Ads", href: "#" },
          { label: "Audiences", href: "#" },
          { label: "Sequencer", href: "#" },
          { label: "Agent plugin", href: "#" },
        ],
      },
      {
        heading: "ADDITIONAL",
        links: [
          { label: "Sculptor", href: "#" },
          { label: "Functions", href: "#" },
          { label: "AI formatting", href: "#" },
          { label: "Clay MCP", href: "#" },
          { label: "Clay for Salesforce", href: "#" },
          { label: "Changelog", href: "#" },
          { label: "Security at Clay", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Use Cases",
    href: "#",
    groups: [
      {
        heading: "USE CASES",
        links: [
          { label: "CRM enrichment", href: "#" },
          { label: "Rep prospecting", href: "#" },
          { label: "Automated inbound", href: "#" },
          { label: "ABM", href: "#" },
          { label: "Reverse ETL", href: "#" },
          { label: "Outbound", href: "#" },
          { label: "PLG assist", href: "#" },
          { label: "TAM sourcing", href: "#" },
          { label: "Account research", href: "#" },
          { label: "Rep assist", href: "#" },
          { label: "Territory planning", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Solutions",
    href: "#",
    groups: [
      {
        heading: "BY TEAM",
        links: [
          { label: "GTM Ops", href: "#" },
          { label: "Marketing", href: "#" },
          { label: "Sales", href: "#" },
        ],
      },
      {
        heading: "BY STAGE",
        links: [
          { label: "Enterprise", href: "#" },
          { label: "Startup", href: "#" },
        ],
      },
      {
        heading: "BY CUSTOMERS",
        links: [
          { label: "Customers", href: "#" },
          { label: "Figma", href: "#" },
          { label: "Recharge", href: "#" },
          { label: "Anthropic", href: "#" },
          { label: "Saviynt", href: "#" },
          { label: "A-LIGN", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Resources",
    href: "#",
    groups: [
      {
        heading: "START GROWING",
        links: [
          { label: "Livestreams", href: "#" },
          { label: "Cohort live classes", href: "#" },
          { label: "Find Clay experts", href: "#" },
          { label: "GTME Job board", href: "#" },
        ],
      },
      {
        heading: "DISCOVER",
        links: [
          { label: "University", href: "#" },
          { label: "Templates", href: "#" },
          { label: "GTME Blog", href: "#" },
          { label: "Support docs", href: "#" },
          { label: "Guides", href: "#" },
        ],
      },
      {
        heading: "COMMUNITY",
        links: [
          { label: "Live events", href: "#" },
          { label: "Clay cup", href: "#" },
          { label: "Clay community", href: "#" },
          { label: "Slack", href: "#" },
        ],
      },
      {
        heading: "PARTNER WITH US",
        links: [
          { label: "Become a partner", href: "#" },
          { label: "Solution partners", href: "#" },
          { label: "Integration partners", href: "#" },
          { label: "Startup program", href: "#" },
          { label: "Private Equity", href: "#" },
        ],
      },
    ],
  },
  {
    label: "Company",
    href: "#",
    groups: [
      {
        heading: "OUR COMPANY",
        links: [
          { label: "About", href: "#" },
          { label: "Careers", href: "#" },
          { label: "Open roles", href: "#" },
        ],
      },
      {
        heading: "GET IN TOUCH",
        links: [
          { label: "Contact", href: "#" },
          { label: "Press", href: "#" },
        ],
      },
      {
        heading: "SOCIALS",
        links: [
          { label: "LinkedIn", href: "#" },
          { label: "YouTube", href: "#" },
          { label: "X", href: "#" },
        ],
      },
    ],
  },
];

const PRICING_ITEM = { label: "Pricing", href: "#" };

function SocialIcon({ label }: { label: string }) {
  const className = "size-4";
  if (label === "LinkedIn") return <LinkedInIcon className={className} />;
  if (label === "YouTube") return <YouTubeIcon className={className} />;
  if (label === "Slack") return <SlackIcon className={className} />;
  return null;
}

function DesktopDropdownPanel({ item }: { item: NavItem }) {
  if (!item.groups) return null;
  const singleGroup = item.groups.length === 1;

  return (
    <div
      className={cn(
        "absolute left-1/2 top-full z-50 mt-3 -translate-x-1/2 rounded-2xl border border-black/5 bg-white p-8 shadow-[0_20px_50px_-12px_rgba(0,0,0,0.18)]",
        singleGroup ? "min-w-[240px]" : "grid grid-cols-2 gap-x-12 gap-y-8 md:grid-cols-3"
      )}
    >
      {item.groups.map((group) => (
        <div key={group.heading} className="min-w-[160px]">
          {group.heading && (
            <p className="mb-3 text-xs font-semibold tracking-wide text-muted-foreground">
              {group.heading}
            </p>
          )}
          <ul className="flex flex-col gap-2.5">
            {group.links.map((link) => (
              <li key={link.label}>
                <Link
                  href={link.href}
                  className="flex items-center gap-2 text-sm text-foreground/80 transition-colors hover:text-foreground"
                >
                  <SocialIcon label={link.label} />
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
}

function DesktopNavItem({
  item,
  isOpen,
  onToggle,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex items-center gap-1 rounded-md px-1 py-2 text-[15px] font-medium text-foreground transition-opacity hover:opacity-70"
      >
        {item.label}
        <ChevronDownIcon
          className={cn(
            "size-4 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && <DesktopDropdownPanel item={item} />}
    </div>
  );
}

function MobileAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: NavItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="border-b border-black/10 py-2">
      <button
        type="button"
        aria-expanded={isOpen}
        onClick={onToggle}
        className="flex w-full items-center justify-between py-3 text-lg font-medium text-foreground"
      >
        {item.label}
        <ChevronDownIcon
          className={cn(
            "size-5 transition-transform duration-200",
            isOpen && "rotate-180"
          )}
        />
      </button>
      {isOpen && item.groups && (
        <div className="flex flex-col gap-6 pb-4 pl-2">
          {item.groups.map((group) => (
            <div key={group.heading}>
              {group.heading && (
                <p className="mb-2 text-xs font-semibold tracking-wide text-muted-foreground">
                  {group.heading}
                </p>
              )}
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-base text-foreground/80"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [openDesktopDropdown, setOpenDesktopDropdown] = useState<string | null>(
    null
  );
  const [openMobileAccordion, setOpenMobileAccordion] = useState<
    string | null
  >(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        headerRef.current &&
        !headerRef.current.contains(event.target as Node)
      ) {
        setOpenDesktopDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    if (mobileMenuOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [mobileMenuOpen]);

  return (
    <header ref={headerRef} className="relative w-full bg-white">
      {/* Desktop nav bar */}
      <div className="mx-auto hidden max-w-[1600px] items-center justify-between px-6 py-4 xl:flex">
        <div className="flex items-center gap-10">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/clay.com/logo/clay-logo.avif"
              alt="Clay"
              width={509}
              height={163}
              unoptimized
              className="h-7 w-auto"
              priority
            />
          </Link>

          <nav className="flex items-center gap-7">
            {NAV_ITEMS.map((item) => (
              <DesktopNavItem
                key={item.label}
                item={item}
                isOpen={openDesktopDropdown === item.label}
                onToggle={() =>
                  setOpenDesktopDropdown((current) =>
                    current === item.label ? null : item.label
                  )
                }
              />
            ))}
            <Link
              href={PRICING_ITEM.href}
              className="text-[15px] font-medium text-foreground transition-opacity hover:opacity-70"
            >
              {PRICING_ITEM.label}
            </Link>
          </nav>
        </div>

        <div className="flex items-center gap-3">
          <button
            type="button"
            className="flex items-center gap-2 rounded-full bg-muted px-3 py-1.5 text-[13px] font-medium text-muted-foreground transition-colors hover:bg-muted/70"
          >
            <span className="flex items-center gap-0.5">
              <kbd className="font-sans">⌘</kbd>
              <kbd className="font-sans">K</kbd>
            </span>
            <SearchIcon className="size-3.5" />
          </button>

          <Link
            href="#"
            className="px-2 text-[15px] font-medium text-foreground transition-opacity hover:opacity-70"
          >
            Log in
          </Link>

          <Link
            href="#"
            className="rounded-xl bg-muted px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/70"
          >
            Get a demo
          </Link>

          <Link
            href="#"
            className="rounded-xl bg-black px-4 py-2 text-sm font-medium text-white transition-opacity hover:opacity-85"
          >
            Start free trial
          </Link>
        </div>
      </div>

      {/* Mobile / tablet pill header */}
      <div className="px-4 py-4 xl:hidden">
        <div className="flex items-center justify-between rounded-3xl bg-white px-4 py-3 shadow-[0_8px_30px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5">
          <Link href="/" className="flex shrink-0 items-center">
            <Image
              src="/images/clay.com/logo/clay-logo.avif"
              alt="Clay"
              width={509}
              height={163}
              unoptimized
              className="h-6 w-auto"
              priority
            />
          </Link>

          <div className="flex items-center gap-2">
            <Link
              href="#"
              className="rounded-xl bg-muted px-3 py-2 text-sm font-medium text-foreground transition-colors hover:bg-muted/70"
            >
              Get a demo
            </Link>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={mobileMenuOpen}
              onClick={() => setMobileMenuOpen(true)}
              className="flex size-9 items-center justify-center rounded-lg bg-black text-white"
            >
              <MenuIcon className="size-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile full-screen menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[100] flex flex-col bg-white xl:hidden">
          <div className="flex items-center justify-between px-6 py-5">
            <Link
              href="/"
              className="flex shrink-0 items-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              <Image
                src="/images/clay.com/logo/clay-logo.avif"
                alt="Clay"
                width={509}
                height={163}
                unoptimized
                className="h-6 w-auto"
              />
            </Link>
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setMobileMenuOpen(false)}
              className="flex size-9 items-center justify-center rounded-lg bg-black text-white"
            >
              <CloseIcon className="size-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-6 pb-6">
            {NAV_ITEMS.map((item) => (
              <MobileAccordionItem
                key={item.label}
                item={item}
                isOpen={openMobileAccordion === item.label}
                onToggle={() =>
                  setOpenMobileAccordion((current) =>
                    current === item.label ? null : item.label
                  )
                }
              />
            ))}
            <Link
              href={PRICING_ITEM.href}
              onClick={() => setMobileMenuOpen(false)}
              className="block border-b border-black/10 py-5 text-lg font-medium text-foreground"
            >
              {PRICING_ITEM.label}
            </Link>

            <div className="mt-6 flex flex-col gap-3">
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="text-center text-base font-medium text-foreground"
              >
                Log in
              </Link>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="rounded-xl bg-muted px-4 py-3 text-center text-base font-medium text-foreground"
              >
                Get a demo
              </Link>
              <Link
                href="#"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-black px-4 py-3 text-center text-base font-medium text-white"
              >
                Start free trial
                <ArrowRightIcon className="size-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
