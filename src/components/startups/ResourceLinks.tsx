import type { ReactNode } from "react";

const COLUMNS: { heading: string; items: ReactNode[] }[] = [
  {
    heading: "Engage",
    items: [
      <>Read our <a href="#" className="underline">Community Board</a> for news and conversation</>,
      <>Attend <a href="#" className="underline">Clay Club</a> meetups and stay tuned on upcoming events</>,
      <>Join Clay&rsquo;s <a href="#" className="underline">Slack Community</a></>,
      <>Send us thoughts or feedback at startups@clay.com</>,
    ],
  },
  {
    heading: "Learn",
    items: [
      <>Check out <a href="#" className="underline">Clay University</a> courses and in-depth use case breakdowns</>,
      <>Watch monthly <a href="#" className="underline">livestreams</a> from our team</>,
      <>Read through the <a href="#" className="underline">Clay Blog</a> for the latest GTME strategies and tactics</>,
      <>Earn <a href="#" className="underline">Clay Certifications</a> to validate your expertise</>,
      <>Scroll through <a href="#" className="underline">templates</a> if you&rsquo;re feeling stuck</>,
    ],
  },
  {
    heading: "Support",
    items: [
      <>Consider hiring a <a href="#" className="underline">Clay Expert</a> to implement Clay at your startup</>,
      <><a href="#" className="underline">Book sessions</a> with our GS team if you&rsquo;re scaling fast</>,
      <>If you&rsquo;re building something unique that requires significant credits, <a href="#" className="underline">pitch us</a> for a Clay startup stipend</>,
    ],
  },
];

export function ResourceLinks() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-12 sm:px-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        {COLUMNS.map((col) => (
          <div key={col.heading} className="rounded-3xl border border-neutral-200 p-8">
            <h3 className="text-2xl font-semibold text-black">{col.heading}</h3>
            <ul className="mt-6 list-disc space-y-4 pl-4 text-[15px] text-neutral-600 marker:text-black">
              {col.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
