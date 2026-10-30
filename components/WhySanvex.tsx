import { Compass, Sparkles, Layers, MessageSquare } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
const items = [
  { icon: Compass, t: "Strategic Approach", d: "Work guided by clear objectives instead of random tactics." },
  { icon: Sparkles, t: "Creative Execution", d: "Thoughtful design and content that communicate your brand effectively." },
  { icon: Layers, t: "Integrated Services", d: "Marketing, branding, content, and web development brought together." },
  { icon: MessageSquare, t: "Transparent Communication", d: "Clear expectations, regular updates, and honest conversations." },
];
export default function WhySanvex() {
  return (
    <section className="bg-ink2 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading label="Why SANVEX" title="More Than Marketing. A Growth-Focused Partner." />
        <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
          {items.map(({ icon: Icon, t, d }, i) => (
            <Reveal key={t} delay={(i % 2) * 0.1}>
              <div className="flex gap-5 border-l border-white/10 pl-6 transition hover:border-cyan">
                <Icon className="mt-1 shrink-0 text-cyan" size={26} aria-hidden="true" />
                <div><h3 className="font-display text-lg font-semibold uppercase tracking-wide">{t}</h3><p className="mt-2 text-mute">{d}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
