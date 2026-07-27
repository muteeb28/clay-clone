"use client";

import { useState } from "react";
import { ChevronDownIcon } from "@/components/icons";
import { cn } from "@/lib/utils";
import { STARTUPS_FAQS } from "@/data/startups-data";

export function StartupsFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="mx-auto max-w-[1240px] px-4 py-12 sm:px-8">
      <h2 className="text-3xl font-semibold text-black sm:text-[42px]">
        Frequently asked questions
      </h2>
      <div className="mt-8 rounded-3xl bg-neutral-50 px-6 sm:px-8">
        {STARTUPS_FAQS.map((faq, i) => {
          const open = openIndex === i;
          return (
            <div key={faq.question} className={i !== STARTUPS_FAQS.length - 1 ? "border-b border-neutral-200" : ""}>
              <button
                onClick={() => setOpenIndex(open ? null : i)}
                className="flex w-full items-center justify-between gap-4 py-6 text-left text-[17px] font-medium text-black"
              >
                {faq.question}
                <ChevronDownIcon className={cn("size-4 shrink-0 transition-transform", open && "rotate-180")} />
              </button>
              <div
                className="grid transition-[grid-template-rows] duration-250 ease-out"
                style={{ gridTemplateRows: open ? "1fr" : "0fr" }}
              >
                <div className="overflow-hidden">
                  <p className="pb-6 text-[15px] text-neutral-600">{faq.answer}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
