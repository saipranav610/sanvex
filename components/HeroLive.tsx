"use client";
import { useEffect, useState } from "react";
import { Check } from "lucide-react";
const steps = ["Discover", "Strategize", "Execute", "Optimize"];
// Decorative preview of the SANVEX process. It shows no real data or results.
export default function HeroLive() {
  const [active, setActive] = useState(0);
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const t = setInterval(() => setActive((v) => (v + 1) % steps.length), 2400);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="absolute bottom-4 right-0 w-64 rounded-2xl border border-white/15 bg-ink/75 p-4 shadow-[0_0_50px_rgba(23,107,255,.25)] backdrop-blur-xl">
      <p className="mb-3 flex items-center gap-2 text-xs uppercase tracking-widest text-mute">
        <span className="h-2 w-2 animate-pulse rounded-full bg-cyan" /> Our workflow
      </p>
      <ul className="space-y-2.5 text-sm">
        {steps.map((s, i) => (
          <li key={s} className={`flex items-center gap-3 transition-colors duration-500 ${i === active ? "text-white" : i < active ? "text-cyan/80" : "text-mute/60"}`}>
            <span className={`flex h-5 w-5 items-center justify-center rounded-full border text-[10px] ${i < active ? "border-cyan bg-cyan/20" : i === active ? "border-cyan shadow-[0_0_10px_#42C8FF]" : "border-white/15"}`}>
              {i < active ? <Check size={12} /> : i + 1}
            </span>{s}
          </li>
        ))}
      </ul>
      <div className="mt-4 h-1 overflow-hidden rounded bg-white/10">
        <div className="h-full rounded bg-gradient-to-r from-blue to-cyan transition-all duration-700" style={{ width: `${((active + 1) / steps.length) * 100}%` }} />
      </div>
    </div>
  );
}
