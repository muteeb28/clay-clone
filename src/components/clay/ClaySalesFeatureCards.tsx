import Image from "next/image";

const CARDS = [
  {
    icon: "/images/clay/6760a5ae845c970162b3a33d_sales.avif",
    heading: "Less time on research",
    description:
      "Proactively give sellers the information they want so they can spend more time with prospects.",
  },
  {
    icon: "/images/clay/6760a5ae5b9e52a6e1cd9994_agencies.avif",
    heading: "Push to where sellers work",
    description:
      "Bake relevant data and insights into reps’ existing workflows, whether that’s in your CRM, Slack, or email.",
  },
  {
    icon: "/images/clay/6696c2853e6bc95850a83d06_3d-icon-heart.avif",
    heading: "Avoid breaking sellers’ rhythm",
    description:
      "Keep reps selling instead of switching tools to find contacts, fix data, or research accounts.",
  },
];

export function ClaySalesFeatureCards() {
  return (
    <section className="mx-auto max-w-[1240px] px-4 py-16 text-center sm:px-8">
      <h2 className="mx-auto max-w-2xl" style={{ fontSize: "clamp(1.75rem, 1.4rem + 2vw, 2.75rem)", fontWeight: 600, color: "#000" }}>
        Push prospect data to sellers that they can trust and act on
      </h2>
      <p className="mx-auto mt-4 max-w-2xl text-base text-[rgb(85,83,78)] sm:text-lg">
        Put the information reps need to know in front of them just-in-time so they can maximize the
        time they spend with prospects and the quality of their conversations.
      </p>

      <div className="mt-10 grid gap-4 text-left sm:grid-cols-3">
        {CARDS.map((card) => (
          <div
            key={card.heading}
            className="rounded-3xl border border-[rgb(218,212,200)] bg-[rgb(249,248,246)] p-6"
          >
            <Image src={card.icon} alt="" width={40} height={40} className="h-10 w-10" />
            <h3 className="mt-4 text-lg font-semibold text-black">{card.heading}</h3>
            <p className="mt-2 text-sm text-[rgb(85,83,78)]">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
