"use client";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import HeroLive from "./HeroLive";
const panels = [
  { c: "left-[8%] top-[12%] h-24 w-40", d: 0 }, { c: "right-[6%] top-[30%] h-32 w-44", d: 1.2 }, { c: "left-[22%] bottom-[10%] h-20 w-36", d: 2.2 },
];
export default function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center overflow-hidden pt-16">
      <div className="grid-bg absolute inset-0" aria-hidden="true" />
      <div className="absolute -right-40 top-10 h-[34rem] w-[34rem] rounded-full bg-blue/25 blur-[140px]" aria-hidden="true" />
      <div className="relative mx-auto grid w-full max-w-7xl items-center gap-10 px-5 lg:grid-cols-2">
        <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="label mb-6">Creative Digital Agency</p>
          <h1 className="font-display text-6xl leading-[1.0] sm:text-8xl"><span className="text-fade">Your Vision.</span><br /><span className="bg-gradient-to-r from-blue to-cyan bg-clip-text text-transparent">Our Innovation.</span></h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-mute">We help ambitious businesses build powerful brands, strengthen their digital presence, and turn meaningful connections into measurable growth.</p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row">
            <a href="#contact" className="btn btn-primary">Let&apos;s Build Something <ArrowRight size={18} /></a>
            <a href="#services" className="btn btn-ghost">Explore Our Services</a>
          </div>
        </motion.div>
        <div className="relative hidden h-[30rem] lg:block" aria-hidden="true">
          <svg viewBox="0 0 400 400" className="absolute inset-0 h-full w-full">
            <defs><linearGradient id="g" x1="0" y1="0" x2="1" y2="1"><stop stopColor="#176BFF" /><stop offset="1" stopColor="#42C8FF" /></linearGradient></defs>
            <g fill="none" stroke="url(#g)" strokeWidth="1.5" opacity=".8">
              <polygon points="200,60 320,130 320,270 200,340 80,270 80,130" />
              <polygon points="200,110 276,155 276,245 200,290 124,245 124,155" opacity=".6" />
              <path d="M200 60V110M320 130L276 155M320 270L276 245M200 340V290M80 270L124 245M80 130L124 155" />
            </g>
            <circle cx="200" cy="200" r="10" fill="#42C8FF" /><circle cx="200" cy="200" r="30" fill="none" stroke="#42C8FF" opacity=".3" />
          </svg>
          <HeroLive />
          {panels.map((p, i) => (
            <motion.div key={i} className={`absolute ${p.c} rounded-xl border border-white/15 bg-white/5 p-3 backdrop-blur-md`}
              animate={{ y: [0, -12, 0] }} transition={{ duration: 6, repeat: Infinity, delay: p.d, ease: "easeInOut" }}>
              <div className="h-1.5 w-1/2 rounded bg-cyan/70" /><div className="mt-2 h-1.5 w-full rounded bg-white/15" /><div className="mt-2 h-1.5 w-2/3 rounded bg-white/15" />
            </motion.div>
          ))}
        </div>
      </div>
      <a href="#services" aria-label="Scroll to services" className="absolute bottom-6 left-1/2 -translate-x-1/2 text-mute hover:text-white"><ChevronDown className="animate-bounce" /></a>
    </section>
  );
}
