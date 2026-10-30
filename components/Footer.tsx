import Link from "next/link";
import Logo from "./Logo";
import { site, navLinks } from "@/lib/site";
const quick = ["Social Media Marketing", "SEO", "Performance Marketing", "Branding & Identity", "Website Development"];
export default function Footer() {
  const link = "text-mute transition hover:text-cyan";
  return (
    <footer className="border-t border-white/10 bg-ink2 pt-16">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:grid-cols-2 lg:grid-cols-4">
        <div><Logo /><p className="mt-4 text-sm font-medium">{site.tagline}</p>
          <p className="mt-2 text-sm text-mute">A digital marketing agency focused on branding, content, performance, and web development.</p></div>
        <nav aria-label="Footer quick links"><h2 className="label mb-4">Quick Links</h2><ul className="space-y-2 text-sm">
          {navLinks.map((l) => <li key={l.href}><a className={link} href={l.href}>{l.label}</a></li>)}</ul></nav>
        <div><h2 className="label mb-4">Services</h2><ul className="space-y-2 text-sm">
          {quick.map((s) => <li key={s}><a className={link} href="#services">{s}</a></li>)}</ul></div>
        <div><h2 className="label mb-4">Contact</h2><ul className="space-y-2 text-sm text-mute">
          <li>{site.email ? <a className={link} href={`mailto:${site.email}`}>{site.email}</a> : "Email: coming soon"}</li>
          <li>{site.phone ? <a className={link} href={`tel:${site.phone}`}>{site.phone}</a> : "Phone: coming soon"}</li>
          <li className="flex flex-wrap gap-x-4 pt-2">{site.socials.map((s) => s.href
            ? <a key={s.name} className={link} href={s.href} target="_blank" rel="noopener noreferrer">{s.name}</a>
            : <span key={s.name} title="Coming soon">{s.name}</span>)}</li></ul></div>
      </div>
      <div className="mx-auto mt-12 flex max-w-7xl flex-col items-center justify-between gap-3 border-t border-white/10 px-5 py-6 text-sm text-mute sm:flex-row">
        <p>© {new Date().getFullYear()} SANVEX. All rights reserved.</p>
        <div className="flex gap-6"><Link className={link} href="/privacy-policy">Privacy Policy</Link><Link className={link} href="/terms">Terms and Conditions</Link></div>
      </div>
    </footer>
  );
}
