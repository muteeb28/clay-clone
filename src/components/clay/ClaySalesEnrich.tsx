import Image from "next/image";
import { MousePointerClick, ArrowRight } from "lucide-react";

export function ClaySalesEnrich() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-4 sm:px-8">
      <div className="grid overflow-hidden rounded-[30px] bg-white sm:grid-cols-2">
        <div className="relative min-h-[280px] overflow-hidden bg-[rgb(120,130,40)] p-6">
          <Image
            src="/images/clay/697a57ee7c5368bd2cd1349a_b52f67831fb2baee1794f38092c326cd_Enrich-reps--ad-hoc_Sales--1-.avif"
            alt=""
            fill
            className="object-cover opacity-40"
          />
          <div className="relative w-56 rounded-2xl bg-white p-4 shadow-lg">
            <p className="font-semibold text-black">Morgan Chen</p>
            <p className="text-xs text-[rgb(85,83,78)]">Founder &amp; CEO of DataFlow.ai</p>
            <p className="text-xs text-[rgb(85,83,78)]">San Francisco, CA</p>
          </div>
          <div className="relative mt-3 w-60 overflow-hidden rounded-2xl bg-white shadow-lg">
            <div className="bg-[rgb(6,103,217)] px-4 py-2 text-sm font-semibold text-white">
              Enriched
            </div>
            <div className="space-y-2 p-4 text-xs text-black">
              <p className="font-semibold">Morgan Chen</p>
              <p className="text-[rgb(85,83,78)]">morgan@dataflow.ai</p>
              <p className="text-[rgb(85,83,78)]">Company revenue: $32M</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center p-8 sm:p-12">
          <MousePointerClick className="h-8 w-8 text-[rgb(195,78,27)]" />
          <h2
            className="mt-4"
            style={{ fontSize: "clamp(1.75rem, 1.4rem + 2vw, 2.5rem)", fontWeight: 600, lineHeight: 1.1, color: "#000" }}
          >
            Enrich contacts while prospecting
          </h2>
          <p className="mt-4 text-base text-[rgb(85,83,78)]">
            Clay’s chrome extension partner, Exportly, lets reps enrich with Clay and sync prospects
            to your CRM anywhere on the web.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="clay-arrow-btn inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-[15px] font-medium text-white"
            >
              Learn more about Exportly
              <ArrowRight className="clay-arrow-icon h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
