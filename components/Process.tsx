import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
const steps = [
  { n: "01", t: "Discover", d: "We learn about your business, audience, challenges, and goals." },
  { n: "02", t: "Strategize", d: "We develop a focused plan aligned with your objectives and available resources." },
  { n: "03", t: "Execute", d: "We bring the strategy to life through design, content, development, and campaigns." },
  { n: "04", t: "Optimize", d: "We review performance, gather feedback, and identify opportunities to improve." },
];
export default function Process() {
  return (
    <section id="process" className="bg-ink2 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading label="How We Work" title="A Clear Process. Purposeful Results." />
        <ol className="relative grid gap-10 lg:grid-cols-4 lg:gap-6">
          <div className="absolute left-[1.55rem] top-0 h-full w-px bg-gradient-to-b from-blue to-transparent lg:left-0 lg:top-[1.55rem] lg:h-px lg:w-full lg:bg-gradient-to-r" aria-hidden="true" />
          {steps.map((s, i) => (
            <Reveal key={s.n} delay={i * 0.1}>
              <li className="group relative flex gap-5 lg:block">
                <span className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 bg-ink font-display font-bold transition group-hover:border-cyan group-hover:text-cyan group-hover:shadow-[0_0_24px_rgba(66,200,255,.4)]">{s.n}</span>
                <div className="lg:mt-6"><h3 className="font-display text-xl font-semibold">{s.t}</h3><p className="mt-2 text-sm leading-relaxed text-mute">{s.d}</p></div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
