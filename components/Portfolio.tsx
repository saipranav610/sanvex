"use client";
import { useRef, useState } from "react";
import { X } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
// To add real work: replace an item below. Set `link` to a real URL and the button becomes a real link.
type Project = { category: string; title: string; desc: string; badge: string; gradient: string; link?: string };
const projects: Project[] = [
  { category: "Brand Identity", title: "Aurora Coffee Roasters", desc: "A sample identity system: logo, colour palette, and visual guidelines.", badge: "Concept Project", gradient: "from-blue/50 to-cyan/20" },
  { category: "Social Media Campaign", title: "Launch Week Series", desc: "A demonstration content calendar and post designs for a product launch.", badge: "Sample Design", gradient: "from-cyan/30 to-blue/40" },
  { category: "Business Website", title: "Northline Consulting", desc: "A demonstration business website with a clear structure and conversion-focused layout.", badge: "Demonstration Project", gradient: "from-blue/40 to-white/5" },
  { category: "Digital Advertising", title: "Spring Offer Campaign", desc: "A concept ad set with creative variations for Google and Meta placements.", badge: "Concept Project", gradient: "from-white/10 to-blue/50" },
];
export default function Portfolio() {
  const ref = useRef<HTMLDialogElement>(null);
  const [active, setActive] = useState<Project | null>(null);
  return (
    <section id="work" className="py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading label="Selected Work" title="Creative Thinking. Digital Execution." desc="These are concept and demonstration projects that show our approach. They are not real client work." />
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <Reveal key={p.title} delay={(i % 2) * 0.1}>
              <article className="card group overflow-hidden transition hover:border-blue/60">
                <div className={`relative flex h-56 items-center justify-center bg-gradient-to-br ${p.gradient}`} role="img" aria-label={`Abstract preview for ${p.title}`}>
                  <div className="grid-bg absolute inset-0" />
                  <div className="relative h-32 w-48 rounded-xl border border-white/20 bg-ink/60 p-3 backdrop-blur transition group-hover:scale-105">
                    <div className="h-2 w-1/3 rounded bg-cyan" /><div className="mt-3 h-2 rounded bg-white/20" /><div className="mt-2 h-2 w-3/4 rounded bg-white/20" /><div className="mt-5 h-8 rounded bg-blue/50" />
                  </div>
                  <span className="absolute left-4 top-4 rounded-full bg-ink/70 px-3 py-1 text-xs">{p.badge}</span>
                </div>
                <div className="p-6">
                  <p className="label">{p.category}</p>
                  <h3 className="mt-2 font-display text-2xl">{p.title}</h3>
                  <p className="mt-2 text-sm text-mute">{p.desc}</p>
                  {p.link ? <a href={p.link} className="btn btn-ghost mt-5">View Project</a>
                    : <button className="btn btn-ghost mt-5" onClick={() => { setActive(p); ref.current?.showModal(); }}>View Details</button>}
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
      <dialog ref={ref} aria-labelledby="proj-title" className="w-[90%] max-w-md rounded-2xl border border-white/10 bg-card p-8 text-white backdrop:bg-black/70">
        <button aria-label="Close dialog" onClick={() => ref.current?.close()} className="absolute right-4 top-4 text-mute hover:text-white"><X /></button>
        {active && (<>
          <p className="label">{active.badge}</p>
          <h3 id="proj-title" className="mt-2 font-display text-2xl font-bold">{active.title}</h3>
          <p className="mt-3 text-mute">{active.desc}</p>
          <p className="mt-4 text-sm text-mute">This is a demonstration project, so there is no live case study yet.</p>
          <a href="#contact" onClick={() => ref.current?.close()} className="btn btn-primary mt-6">Discuss a similar project</a>
        </>)}
      </dialog>
    </section>
  );
}
