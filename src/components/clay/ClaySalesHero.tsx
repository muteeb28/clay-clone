"use client";

import { useState } from "react";
import { ArrowRight, ChevronDown } from "lucide-react";

const PERSONAS = [
  { label: "Marketing teams", href: "/clay-for-marketing" },
  { label: "GTM Ops & RevOps teams", href: "/clay-for-revops" },
  { label: "Sales teams", href: "/clay-for-sales" },
];

export function ClaySalesHero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="px-4 pt-16 pb-4 text-center sm:pt-20">
      <div className="relative mx-auto inline-flex items-center gap-2 rounded-full bg-[rgb(238,233,223)] p-1.5 pl-4 text-sm">
        <span className="text-black/70">Clay for</span>
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex items-center gap-1.5 rounded-full bg-white px-3 py-1.5 font-medium text-black shadow-sm"
        >
          Sales teams
          <ChevronDown className={`h-3.5 w-3.5 transition-transform ${open ? "rotate-180" : ""}`} />
        </button>

        {open && (
          <div className="absolute top-full left-1/2 z-20 mt-2 w-56 -translate-x-1/2 rounded-2xl border border-black/5 bg-white p-1.5 shadow-lg">
            {PERSONAS.map((p) => (
              <a
                key={p.label}
                href={p.href}
                className={`block rounded-xl px-3 py-2 text-left text-sm ${
                  p.label === "Sales teams"
                    ? "bg-[rgb(240,248,255)] text-[rgb(56,89,249)]"
                    : "text-black/80 hover:bg-black/5"
                }`}
              >
                {p.label}
              </a>
            ))}
          </div>
        )}
      </div>

      <h1
        className="mx-auto mt-6 max-w-4xl"
        style={{
          fontSize: "clamp(2.25rem, 1.6rem + 4vw, 5rem)",
          lineHeight: 1.02,
          letterSpacing: "-0.02em",
          fontWeight: 600,
          color: "#000",
        }}
      >
        Make every sales touch fast and deeply personal
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-base text-[rgb(85,83,78)] sm:text-lg">
        Cut down time sellers spend on research while equipping them with quality contact data and
        custom insights on their prospects.
      </p>
      <div className="mt-8">
        <a
          href="#"
          className="clay-arrow-btn inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-[15px] font-medium text-white"
        >
          Start building for free
          <ArrowRight className="clay-arrow-icon h-4 w-4" />
        </a>
      </div>
    </section>
  );
}
