"use client";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import Logo from "./Logo";
import { navLinks } from "@/lib/site";
export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    onScroll();
    window.addEventListener("scroll", onScroll); window.addEventListener("keydown", onKey);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("keydown", onKey); };
  }, []);
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${scrolled || open ? "border-b border-white/10 bg-ink/85 backdrop-blur-xl" : ""}`}>
      <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5" aria-label="Main">
        <Logo />
        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (<li key={l.href}><a href={l.href} className="text-sm text-mute transition hover:text-white">{l.label}</a></li>))}
        </ul>
        <a href="#contact" className="btn btn-primary hidden md:inline-flex">Let&apos;s Talk</a>
        <button className="p-2 md:hidden" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} aria-controls="mobile-menu" onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
      {open && (
        <div id="mobile-menu" className="border-t border-white/10 px-5 pb-6 md:hidden">
          <ul className="flex flex-col py-2">
            {navLinks.map((l) => (<li key={l.href}><a href={l.href} onClick={() => setOpen(false)} className="block py-3 text-lg text-mute hover:text-white">{l.label}</a></li>))}
          </ul>
          <a href="#contact" onClick={() => setOpen(false)} className="btn btn-primary w-full">Let&apos;s Talk</a>
        </div>
      )}
    </header>
  );
}
