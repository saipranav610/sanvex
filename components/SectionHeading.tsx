import Reveal from "./Reveal";
export default function SectionHeading({ label, title, desc }: { label?: string; title: string; desc?: string }) {
  return (
    <Reveal className="mb-14 max-w-3xl">
      {label && <p className="label mb-4">{label}</p>}
      <h2 className="font-display text-3xl font-bold leading-tight sm:text-5xl">{title}</h2>
      {desc && <p className="mt-5 text-lg leading-relaxed text-mute">{desc}</p>}
    </Reveal>
  );
}
