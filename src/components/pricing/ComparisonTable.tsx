"use client";

import { useState } from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { COMPARISON_TABLE } from "@/data/pricing-data";

const PLAN_HEADERS = [
  { name: "Free", color: "text-clay-data", cta: "Start 14-day trial", solid: false },
  { name: "Launch", color: "text-[rgb(2,105,62)]", cta: "Start 14-day trial", solid: false },
  { name: "Growth", color: "text-clay-execution", cta: "Start 14-day trial", solid: true },
  { name: "Enterprise", color: "text-[rgb(109,76,214)]", cta: "Get a demo", solid: false },
] as const;

function Cell({ value }: { value: string }) {
  if (value === "check") {
    return <Check className="mx-auto size-4 text-black sm:mx-0" />;
  }
  if (value === "-") {
    return <span className="text-neutral-300">–</span>;
  }
  return <span className="text-sm text-neutral-700">{value}</span>;
}

export function ComparisonTable() {
  const [open, setOpen] = useState(false);

  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-16 sm:px-8">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex w-full items-center justify-between rounded-2xl bg-neutral-100 px-6 py-4 text-[15px] font-medium text-black"
      >
        See full plan comparison
        <ChevronDown className={cn("size-4 transition-transform", open && "rotate-180")} />
      </button>

      {open && (
        <div className="mt-4 rounded-3xl bg-neutral-50 p-6 sm:p-8">
          <h2 className="text-3xl font-semibold text-black">Compare plans</h2>

          <div className="sticky top-0 z-10 mt-8 grid grid-cols-4 gap-2 bg-neutral-50 pb-4 pl-[35%] sm:pl-[38%]">
            {PLAN_HEADERS.map((p) => (
              <div key={p.name} className="text-center">
                <p className={cn("text-base font-semibold", p.color)}>{p.name}</p>
                <a
                  href="#"
                  className={cn(
                    "mt-2 block rounded-lg px-2 py-1.5 text-xs font-medium",
                    p.solid ? "bg-black text-white" : "border border-black text-black"
                  )}
                >
                  {p.cta}
                </a>
              </div>
            ))}
          </div>

          {COMPARISON_TABLE.map((category) => (
            <div key={category.heading} className="mt-8">
              <h3 className="text-lg font-semibold text-black">{category.heading}</h3>
              {category.description && (
                <p className="mt-1 text-sm text-neutral-500">{category.description}</p>
              )}
              <div className="mt-4">
                {category.rows.map((row, i) => (
                  <div
                    key={row.label}
                    className={cn(
                      "grid grid-cols-[minmax(0,35%)_repeat(4,1fr)] items-center gap-2 rounded-lg px-2 py-3 sm:grid-cols-[minmax(0,38%)_repeat(4,1fr)]",
                      i % 2 === 1 && "bg-neutral-100/70"
                    )}
                  >
                    <p className="text-sm text-neutral-700">{row.label}</p>
                    {row.values.map((v, vi) => (
                      <div key={vi} className="text-center text-xs sm:text-left">
                        <Cell value={v} />
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}
