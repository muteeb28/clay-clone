import Image from "next/image";
import { ArrowRight } from "lucide-react";

export function ClaySalesAccountSignals() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-4 sm:px-8">
      <div className="grid overflow-hidden rounded-[30px] bg-white sm:grid-cols-2">
        <div className="relative min-h-[280px] bg-[rgb(249,248,246)]">
          <Image
            src="/images/clay/6971785e76f0c3cb0a38cb9e_Sales-Persona.avif"
            alt="Clay panel showing account signal chips: job change, news story, Reddit post, financial filing"
            fill
            className="object-cover"
          />
        </div>
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <h2 style={{ fontSize: "clamp(1.75rem, 1.4rem + 2vw, 2.5rem)", fontWeight: 600, lineHeight: 1.1, color: "#000" }}>
            Know the latest on top accounts
          </h2>
          <p className="mt-4 text-base text-[rgb(85,83,78)]">
            Push intent signals and changes at key accounts to reps (like news, job changes, or
            custom research prompts) to cut manual work and boost conversion.
          </p>
          <div className="mt-6">
            <a
              href="#"
              className="clay-arrow-btn inline-flex items-center gap-2 rounded-xl bg-black px-5 py-2.5 text-[15px] font-medium text-white"
            >
              Get a demo
              <ArrowRight className="clay-arrow-icon h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
