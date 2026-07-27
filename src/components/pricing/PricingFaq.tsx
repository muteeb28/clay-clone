"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { PRICING_FAQS } from "@/data/pricing-data";

export function PricingFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-[1240px] px-4 pb-20 sm:px-8">
      <h2 className="text-4xl font-semibold text-black">FAQ</h2>
      <div className="mt-8 rounded-3xl bg-neutral-50 px-6 sm:px-8">
        {PRICING_FAQS.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div key={faq.question} className={i !== PRICING_FAQS.length - 1 ? "border-b border-neutral-200" : ""}>
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left text-[17px] font-medium text-black"
              >
                {faq.question}
                <ChevronDown className={cn("size-4 shrink-0 transition-transform", open && "rotate-180")} />
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-250 ease-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <div className="space-y-4 pb-6 text-[15px] leading-relaxed text-neutral-600">
                    {faq.answer.split("\n\n").map((para, pi) => (
                      <p key={pi}>{para}</p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
