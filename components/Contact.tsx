"use client";
import { useState } from "react";
import { Loader2, CheckCircle2, AlertCircle } from "lucide-react";
import SectionHeading from "./SectionHeading";
import { site } from "@/lib/site";
const services = ["Social Media Marketing", "SEO", "Performance Marketing", "Content Creation", "Branding & Identity", "Website Development", "Social Media Management", "Lead Generation", "Multiple Services", "Other"];
type Errors = Partial<Record<"name" | "email" | "service" | "details", string>>;
const field = "mt-2 w-full rounded-xl border border-white/10 bg-ink2 px-4 py-3 text-white placeholder:text-mute/60 focus:border-cyan focus:outline-none";
export default function Contact() {
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState("");
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>;
    const errs: Errors = {};
    if (!data.name?.trim()) errs.name = "Please enter your full name.";
    if (!data.email?.trim()) errs.email = "Please enter your email address.";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) errs.email = "Please enter a valid email address.";
    if (!data.service) errs.service = "Please choose a service.";
    if (!data.details?.trim() || data.details.trim().length < 10) errs.details = "Please tell us a little more (at least 10 characters).";
    setErrors(errs);
    if (Object.keys(errs).length) return;
    setStatus("loading");
    try {
      const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(data) });
      const json = await res.json();
      setMessage(json.message ?? "");
      setStatus(res.ok ? "success" : "error");
      if (res.ok) form.reset();
    } catch {
      setMessage("Network error. Please try again."); setStatus("error");
    }
  }
  const Err = ({ id, text }: { id: string; text?: string }) => text ? <p id={id} className="mt-1 text-sm text-red-400" role="alert">{text}</p> : null;
  return (
    <section id="contact" className="relative overflow-hidden py-24">
      <div className="absolute left-0 top-1/3 h-96 w-96 rounded-full bg-blue/15 blur-[130px]" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <SectionHeading label="Let's Work Together" title="Have a Vision? Let's Make It Happen." desc="Tell us about your business, your goals, and what you want to build. Let's explore how SANVEX can help." />
          <ul className="space-y-2 text-mute">
            <li>Email: {site.email ? <a className="text-white hover:text-cyan" href={`mailto:${site.email}`}>{site.email}</a> : "coming soon"}</li>
            <li>Phone: {site.phone ? <a className="text-white hover:text-cyan" href={`tel:${site.phone}`}>{site.phone}</a> : "coming soon"}</li>
          </ul>
        </div>
        <form onSubmit={onSubmit} noValidate className="card space-y-5 p-6 sm:p-8 lg:col-span-3" aria-label="Contact form">
          <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off" /></label></div>
          <div className="grid gap-5 sm:grid-cols-2">
            <div><label htmlFor="name" className="text-sm">Full name *</label>
              <input id="name" name="name" autoComplete="name" className={field} aria-invalid={!!errors.name} aria-describedby="name-e" /><Err id="name-e" text={errors.name} /></div>
            <div><label htmlFor="email" className="text-sm">Business email *</label>
              <input id="email" name="email" type="email" autoComplete="email" className={field} aria-invalid={!!errors.email} aria-describedby="email-e" /><Err id="email-e" text={errors.email} /></div>
            <div><label htmlFor="company" className="text-sm">Company or brand (optional)</label><input id="company" name="company" autoComplete="organization" className={field} /></div>
            <div><label htmlFor="service" className="text-sm">Service required *</label>
              <select id="service" name="service" defaultValue="" className={field} aria-invalid={!!errors.service} aria-describedby="service-e">
                <option value="" disabled>Select a service</option>{services.map((s) => <option key={s}>{s}</option>)}</select><Err id="service-e" text={errors.service} /></div>
          </div>
          <div><label htmlFor="budget" className="text-sm">Project budget (optional)</label><input id="budget" name="budget" placeholder="e.g. a rough range" className={field} /></div>
          <div><label htmlFor="details" className="text-sm">Project details *</label>
            <textarea id="details" name="details" rows={5} className={field} aria-invalid={!!errors.details} aria-describedby="details-e" /><Err id="details-e" text={errors.details} /></div>
          <button type="submit" disabled={status === "loading"} className="btn btn-primary w-full disabled:opacity-60">
            {status === "loading" ? <><Loader2 className="animate-spin" size={18} /> Sending...</> : "Send Message"}</button>
          <div aria-live="polite">
            {status === "success" && <p className="flex items-center gap-2 text-cyan"><CheckCircle2 size={18} /> {message}</p>}
            {status === "error" && <p className="flex items-center gap-2 text-red-400"><AlertCircle size={18} /> {message}</p>}
          </div>
        </form>
      </div>
    </section>
  );
}
