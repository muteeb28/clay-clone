import { ArrowRight } from "lucide-react";

export function ClaySalesPersonalize() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-4 sm:px-8">
      <div className="grid overflow-hidden rounded-[30px] bg-white sm:grid-cols-2">
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <h2 style={{ fontSize: "clamp(1.75rem, 1.4rem + 2vw, 2.5rem)", fontWeight: 600, lineHeight: 1.1, color: "#000" }}>
            Personalize outbound at scale
          </h2>
          <p className="mt-4 text-base text-[rgb(85,83,78)]">
            Give AI the context to precisely personalize email copy by combining 1p and 3p data
            tailored to your ICP. Auto-sequence outbound leads so reps get more time with prospects.
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
        <div className="min-h-[280px] bg-[rgb(249,248,246)]">
          <video
            className="h-full w-full object-cover"
            src="/videos/clay/Clay---Clay-Web---Simple-animation-4---R1.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </div>
      </div>
    </section>
  );
}
