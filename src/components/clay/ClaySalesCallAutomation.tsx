import { ArrowRight } from "lucide-react";

export function ClaySalesCallAutomation() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-4 sm:px-8">
      <div className="grid overflow-hidden rounded-[30px] bg-white sm:grid-cols-2">
        <div className="flex flex-col justify-center p-8 sm:p-12">
          <h2 style={{ fontSize: "clamp(1.75rem, 1.4rem + 2vw, 2.5rem)", fontWeight: 600, lineHeight: 1.1, color: "#000" }}>
            Automate pre- and post-call tasks
          </h2>
          <p className="mt-4 text-base text-[rgb(85,83,78)]">
            AI automates meeting prep and follow-up tasks based on prospect data, call recordings,
            and custom prompts so deals progress faster.
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

        <div className="flex flex-col gap-4 bg-[rgb(249,248,246)] p-6 sm:p-8">
          <div className="overflow-hidden rounded-2xl bg-[rgb(69,1,46)] text-white">
            <div className="px-4 py-3 text-sm font-semibold">Slack</div>
            <div className="space-y-2 bg-white px-4 py-3 text-sm text-black">
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[rgb(238,246,115)]" />
                Signal detected
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-[rgb(0,130,243)]" />
                Alert sent to rep
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-2xl bg-[rgb(0,88,112)] text-white">
            <div className="space-y-2 p-4">
              <div className="rounded-xl bg-[rgb(139,4,92)] px-4 py-3 text-sm font-semibold">
                Gong
                <div className="mt-1 flex items-center gap-2 text-xs font-normal opacity-90">
                  <span className="h-1.5 w-1.5 rounded-full bg-[rgb(238,246,115)]" />
                  Call recap
                </div>
              </div>
              <div className="rounded-xl bg-[rgb(238,246,115)] px-4 py-3 text-sm font-semibold text-black">
                Clay AI agent
                <ul className="mt-1 space-y-1 text-xs font-normal opacity-80">
                  <li>Generating insights</li>
                  <li>Key updates</li>
                  <li>Action steps</li>
                </ul>
                <button className="mt-2 rounded-lg bg-[rgb(6,103,217)] px-3 py-1.5 text-xs font-semibold text-white">
                  Draft email
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
