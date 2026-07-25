import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import type { ResourceCard } from "@/types/clay";

interface ResourceGridCard extends ResourceCard {
  body?: string;
  className?: string;
  imageClassName?: string;
}

const cards: ResourceGridCard[] = [
  {
    variant: "banner",
    eyebrow: "CONFERENCE",
    title: "Sculpt: The go-to-market conference returns in 2026",
    ctaLabel: "Get tickets",
    href: "#",
    image: "/images/clay.com/resources/sculpt-card.svg",
    className: "md:col-span-2 bg-violet-100",
  },
  {
    variant: "video",
    eyebrow: "LIVESTREAM",
    title: "How Clay Uses Clay: ABM campaigns to break into Tier 1 accounts",
    ctaLabel: "Watch",
    href: "#",
    image: "/images/clay.com/resources/hcuc-livestream.avif",
  },
  {
    variant: "photo",
    title: "Get started with Clay",
    body: "Find the content that helps you level up your GTM skills and build confidently with Clay.",
    ctaLabel: "Go to University",
    href: "#",
    image: "/images/clay.com/resources/university-card.avif",
  },
  {
    variant: "story",
    eyebrow: "COMMUNITY STORY",
    title: "Sandra has built the Clay community in Lagos",
    ctaLabel: "Read story",
    href: "#",
    image: "/images/clay.com/resources/community-sandra.avif",
  },
  {
    variant: "photo",
    eyebrow: "COME AND JOIN US",
    title: "",
    ctaLabel: "See open roles",
    href: "#",
    image: "/images/clay.com/resources/university-card.avif",
  },
  {
    variant: "story",
    eyebrow: "COMMUNITY STORY",
    title: "Where girls often choose between career or marriage, she carved her own path",
    ctaLabel: "Read story",
    href: "#",
    image: "/images/clay.com/resources/community-story-2.avif",
  },
];

function ConferenceCard({ card }: { card: ResourceGridCard }) {
  return (
    <Link
      href={card.href}
      className={cn(
        "group relative flex aspect-[4/3] flex-col justify-between overflow-hidden rounded-3xl p-6 transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-xl md:aspect-auto md:min-h-[280px]",
        card.className,
      )}
    >
      <div className="pointer-events-none absolute inset-0 flex items-center justify-end opacity-90">
        <Image
          src={card.image}
          alt=""
          width={420}
          height={420}
          className="h-full w-auto max-w-[70%] object-contain object-right"
        />
      </div>
      <span className="relative z-10 text-[11px] font-semibold tracking-widest text-violet-700 uppercase">
        {card.eyebrow}
      </span>
      <div className="relative z-10 max-w-md">
        <h3 className="text-2xl font-medium text-neutral-900 md:text-3xl">{card.title}</h3>
        <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-neutral-900">
          {card.ctaLabel} <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}

function PhotoCard({ card }: { card: ResourceGridCard }) {
  return (
    <Link
      href={card.href}
      className="group relative flex aspect-[4/3] flex-col justify-end overflow-hidden rounded-3xl transition-all duration-200 ease-out hover:scale-[1.02] hover:shadow-xl"
    >
      <Image
        src={card.image}
        alt=""
        fill
        className="object-cover transition-transform duration-200 ease-out group-hover:scale-105"
        sizes="(min-width: 768px) 33vw, 100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
      <div className="relative z-10 p-6">
        {card.eyebrow && (
          <span className="text-[11px] font-semibold tracking-widest text-white/80 uppercase">
            {card.eyebrow}
          </span>
        )}
        {card.title && (
          <h3 className="mt-1 text-xl font-medium text-white md:text-2xl">{card.title}</h3>
        )}
        {card.body && <p className="mt-2 text-sm text-white/85">{card.body}</p>}
        <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-white">
          {card.ctaLabel} <span aria-hidden="true">&rarr;</span>
        </span>
      </div>
    </Link>
  );
}

export function ResourceGrid() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 md:py-24">
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) =>
          card.variant === "banner" ? (
            <ConferenceCard key={i} card={card} />
          ) : (
            <PhotoCard key={i} card={card} />
          ),
        )}
      </div>
    </section>
  );
}
