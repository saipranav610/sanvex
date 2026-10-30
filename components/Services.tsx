import { Share2, Search, Target, Clapperboard, Palette, Code2, CalendarCheck, Users, ArrowUpRight } from "lucide-react";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
const services = [
  { icon: Share2, title: "Social Media Marketing", desc: "Build a stronger online presence with strategic campaigns designed to increase visibility, engagement, and brand awareness.", tags: "Instagram · Facebook · LinkedIn" },
  { icon: Search, title: "Search Engine Optimization", desc: "Improve your search visibility and help the right people discover your business through a structured SEO strategy.", tags: "On-page · Technical · Keywords · Content" },
  { icon: Target, title: "Performance Marketing", desc: "Reach the right audience with carefully planned advertising campaigns focused on meaningful actions and measurable performance.", tags: "Google Ads · Meta Ads" },
  { icon: Clapperboard, title: "Content Creation", desc: "Create compelling digital content that communicates your brand story and captures attention across platforms.", tags: "Reels · Posts · Short-form video · Designs" },
  { icon: Palette, title: "Branding & Identity", desc: "Build a consistent brand identity that communicates your values and makes your business recognizable.", tags: "Logo · Identity · Colour systems · Guidelines" },
  { icon: Code2, title: "Website Development", desc: "Turn visitors into customers with modern, responsive websites designed around your business needs.", tags: "Business sites · Landing pages · Redesigns" },
  { icon: CalendarCheck, title: "Social Media Management", desc: "Maintain a consistent and professional social presence through organized content planning, publishing, and account management.", tags: "Calendars · Scheduling · Profiles · Community" },
  { icon: Users, title: "Lead Generation", desc: "Build a structured approach to attracting potential customers and helping your business create new opportunities.", tags: "Lead capture · Landing pages · Optimization" },
];
export default function Services() {
  return (
    <section id="services" className="bg-ink2 py-24">
      <div className="mx-auto max-w-7xl px-5">
        <SectionHeading label="What We Do" title="Everything Your Brand Needs to Grow." desc="From building your online identity to reaching the right audience, we create digital experiences designed around your business goals." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {services.map(({ icon: Icon, title, desc, tags }, i) => (
            <Reveal key={title} delay={(i % 4) * 0.08} className="h-full">
              <a href="#contact" className="card group flex h-full flex-col p-6 transition duration-300 hover:-translate-y-1.5 hover:border-blue/70 hover:shadow-[0_0_40px_rgba(23,107,255,.15)]">
                <div className="mb-5 flex items-center justify-between">
                  <span className="rounded-xl bg-blue/15 p-3 text-cyan"><Icon size={22} /></span>
                  <ArrowUpRight size={20} className="text-mute transition group-hover:text-cyan" aria-hidden="true" />
                </div>
                <h3 className="font-display text-lg font-semibold">{title}</h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-mute">{desc}</p>
                <p className="mt-5 border-t border-white/10 pt-4 text-xs text-cyan/80">{tags}</p>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
