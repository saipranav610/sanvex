import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
const principles = [
  { n: "01", t: "Strategy First", d: "Every project begins with understanding your business, audience, and objectives." },
  { n: "02", t: "Creative Thinking", d: "We combine fresh ideas with thoughtful design to help brands communicate clearly." },
  { n: "03", t: "Continuous Improvement", d: "We use feedback, performance insights, and iteration to improve the work over time." },
];
export default function About() {
  return (
    <section id="about" className="py-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-2">
        <div>
          <SectionHeading label="About SANVEX" title="Good Ideas Deserve Great Execution." desc="At SANVEX, we bring strategy, creativity, and technology together to help businesses build a stronger digital presence. Our approach focuses on understanding your goals, creating purposeful digital experiences, and continually improving how your brand connects with its audience." />
        </div>
        <ol className="divide-y divide-white/10 border-y border-white/10">
          {principles.map((p, i) => (
            <Reveal key={p.n} delay={i * 0.1}>
              <li className="group flex gap-6 py-8">
                <span className="font-display text-4xl font-bold text-white/15 transition group-hover:text-blue">{p.n}</span>
                <div><h3 className="font-display text-2xl">{p.t}</h3><p className="mt-2 text-mute">{p.d}</p></div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
