"use client";

import { useEffect, useState } from "react";
import { ArrowRight } from "lucide-react";

const LOGOS = [
  "Canva",
  "Notion",
  "Rippling",
  "Retool",
  "HubSpot",
  "Vanta",
  "Verkada",
  "Anthropic",
  "perplexity",
  "OpenAI",
  "Cursor",
  "ramp",
];

const TESTIMONIALS = [
  {
    company: "Vanta",
    accent: "rgb(139,4,92)",
    quote:
      "Vanta used Clay to automatically perform pre-call research that previously took an hour per prospect.",
  },
  {
    company: "Sendoso",
    accent: "rgb(195,78,27)",
    quote:
      "Sendoso used Clay to automate cold outbounding and closed-lost campaigns to generate $1M in pipeline.",
  },
  {
    company: "Harmonic",
    accent: "rgb(0,88,112)",
    quote: "Harmonic doubled SDR capacity and tripled outbound reply rates with Clay.",
  },
  {
    company: "Anthropic",
    accent: "rgb(0,47,103)",
    quote:
      "Clay helps us identify and act on the signals that matter most, like funding announcements or leadership changes. It's made our prospecting process faster and more effective.",
  },
  {
    company: "Rippling",
    accent: "rgb(6,103,217)",
    quote:
      "Clay has made it possible for us to maintain the high level of personalization our outbound campaigns demand at a scale we never thought possible. It's been a game-changer for our team.",
  },
  {
    company: "Coverflex",
    accent: "rgb(7,138,82)",
    quote:
      "When one provider doesn't have it, Clay automatically checks the next one. It really helps our inbound and outbound motions because we can leverage the best source of data.",
  },
];

export function ClaySalesWallOfLove() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setActive((i) => (i + 1) % TESTIMONIALS.length), 4000);
    return () => clearInterval(id);
  }, []);

  const current = TESTIMONIALS[active];

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-16 sm:px-8">
      <p className="font-clay-mono text-center text-xs font-bold tracking-[0.1em] text-black">
        WALL OF LOVE
      </p>

      <div className="mt-10 grid grid-cols-3 gap-px overflow-hidden rounded-3xl border border-[rgb(218,212,200)] bg-[rgb(218,212,200)] sm:grid-cols-6">
        {LOGOS.map((name, i) => {
          if (i === 4 || i === 5) {
            if (i === 5) return null;
            return (
              <div
                key="carousel"
                className="relative col-span-2 row-span-2 flex flex-col justify-between overflow-hidden p-6 text-white transition-colors duration-500"
                style={{ backgroundColor: current.accent }}
              >
                <div>
                  <p className="text-lg font-semibold">{current.company}</p>
                  <p className="mt-3 text-sm leading-relaxed">{current.quote}</p>
                </div>
                <a
                  href="#"
                  className="clay-arrow-btn mt-4 inline-flex w-fit items-center gap-2 rounded-xl bg-black px-4 py-2 text-sm font-medium text-white"
                >
                  Read case study
                  <ArrowRight className="clay-arrow-icon h-4 w-4" />
                </a>

                <div className="mt-4 flex gap-1.5">
                  {TESTIMONIALS.map((t, dotIndex) => (
                    <button
                      key={t.company}
                      type="button"
                      aria-label={`Show ${t.company} testimonial`}
                      onClick={() => setActive(dotIndex)}
                      className={`h-1.5 w-4 rounded-full transition-colors ${
                        dotIndex === active ? "bg-white" : "bg-white/40"
                      }`}
                    />
                  ))}
                </div>
              </div>
            );
          }
          return (
            <div
              key={name}
              className="flex items-center justify-center bg-[rgb(249,248,246)] px-4 py-8"
            >
              <span className="text-base font-semibold text-black/70">{name}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
