import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, waLink, type ServiceData } from "@/data/site";

export function PageHero({ eyebrow, title, highlight, intro, image }: { eyebrow: string; title: string; highlight: string; intro: string; image: string }) {
  return (
    <section className="relative flex min-h-[70vh] items-end overflow-hidden pt-28">
      <img src={image} alt="" className="absolute inset-0 h-full w-full object-cover" />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="container-x relative pb-16 animate-rise">
        <p className="eyebrow">{eyebrow}</p>
        <h1 className="mt-4 max-w-3xl text-4xl font-extrabold leading-tight sm:text-6xl">{title} <span className="text-gold">{highlight}</span></h1>
        <p className="mt-5 max-w-2xl text-lg text-muted-foreground">{intro}</p>
        <CtaButtons className="mt-8" />
      </div>
    </section>
  );
}

export function CtaButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button asChild variant="hero" size="xl"><Link to="/contact">Get a Quote <ArrowRight /></Link></Button>
      <Button asChild variant="whatsapp" size="xl"><a href={waLink()} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp</a></Button>
      <Button asChild variant="glass" size="xl"><a href={contact.phoneHref}><Phone />Call Now</a></Button>
    </div>
  );
}

export function Section({ eyebrow, title, children, className = "" }: { eyebrow?: string; title?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`py-20 sm:py-28 ${className}`}>
      <div className="container-x">
        {(eyebrow || title) && (
          <div className="mb-12 max-w-2xl">
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {title && <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">{title}</h2>}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}

export function CardGrid({ items, icon }: { items: { name: string; desc: string }[]; icon?: boolean }) {
  return (
    <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {items.map((i, idx) => (
        <div key={i.name} className="group rounded-3xl border border-border bg-card p-7 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-gold">
          {icon !== false && <span className="font-display text-sm font-bold text-accent">{String(idx + 1).padStart(2, "0")}</span>}
          <h3 className="mt-3 text-xl font-bold group-hover:text-primary">{i.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{i.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function Process({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s} className="glass rounded-3xl p-6">
          <span className="text-gold font-display text-4xl font-extrabold">{i + 1}</span>
          <p className="mt-3 font-semibold">{s}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [open, setOpen] = useState<number | null>(0);
  return (
    <div className="mx-auto max-w-3xl divide-y divide-border rounded-3xl border border-border bg-card">
      {faqs.map((f, i) => (
        <div key={f.q}>
          <button onClick={() => setOpen(open === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-6 text-left font-semibold">
            {f.q}<Plus className={`h-5 w-5 shrink-0 text-primary transition ${open === i ? "rotate-45" : ""}`} />
          </button>
          {open === i && <p className="px-6 pb-6 text-muted-foreground">{f.a}</p>}
        </div>
      ))}
    </div>
  );
}

export function FinalCta({ title = "Ready to make your event unforgettable?" }: { title?: string }) {
  return (
    <section className="py-20">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-primary/30 bg-card p-10 text-center sm:p-16">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-primary/20 blur-3xl" />
          <h2 className="relative text-3xl font-extrabold sm:text-5xl">{title}</h2>
          <p className="relative mx-auto mt-4 max-w-xl text-muted-foreground">Tell us your date, venue and guest count — get a tailored quote within hours.</p>
          <CtaButtons className="relative mt-8 justify-center" />
        </div>
      </div>
    </section>
  );
}

export function ServicePage({ d }: { d: ServiceData }) {
  return (
    <>
      <PageHero {...d} />
      <Section eyebrow={d.eyebrow} title={d.itemsTitle}><CardGrid items={d.items} /></Section>
      <section className="py-10">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <img src={d.image} alt={d.eyebrow} loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
          <div>
            <p className="eyebrow">Solutions</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-4xl">Built for your occasion</h2>
            <ul className="mt-8 space-y-5">
              {d.solutions.map((s) => (
                <li key={s.name} className="flex gap-4"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-primary" /><div><p className="font-bold">{s.name}</p><p className="text-sm text-muted-foreground">{s.desc}</p></div></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Section eyebrow="How it works" title="Our setup process"><Process steps={d.process} /></Section>
      <Section eyebrow="FAQs" title="Questions, answered" className="pt-0"><Faq faqs={d.faqs} /></Section>
      <FinalCta />
    </>
  );
}

export function EnquiryForm({ compact }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const field = "w-full rounded-xl border border-input bg-background px-4 py-3 text-sm outline-none focus:border-primary";
  function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const phone = String(f.get("phone") || "").replace(/\D/g, "");
    if (!/^(91)?[6-9]\d{9}$/.test(phone)) { setErr("Please enter a valid 10-digit mobile number."); return; }
    setErr("");
    const msg = `Hi GK Events!\nName: ${f.get("name")}\nPhone: ${phone}\nEvent: ${f.get("event")}\nDate: ${f.get("date") || "-"}\nNeeds: ${f.get("message") || "-"}`;
    window.open(waLink(msg), "_blank");
    setSent(true);
  }
  if (sent) return <div className="rounded-3xl border border-primary/40 bg-card p-8 text-center"><CheckCircle2 className="mx-auto h-10 w-10 text-primary" /><p className="mt-4 text-xl font-bold">Thank you!</p><p className="mt-2 text-muted-foreground">Your enquiry opened in WhatsApp. We'll reply shortly.</p></div>;
  return (
    <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-border bg-card p-6 sm:grid-cols-2 sm:p-8">
      <input name="name" required placeholder="Your name" className={field} />
      <input name="phone" required inputMode="tel" placeholder="Mobile number" className={field} />
      <select name="event" required className={field} defaultValue="">
        <option value="" disabled>Event type</option>
        {["Wedding", "Corporate", "Concert", "Conference", "Exhibition", "Birthday / Private", "Other"].map((o) => <option key={o}>{o}</option>)}
      </select>
      <input name="date" type="date" className={field} />
      {!compact && <textarea name="message" rows={4} placeholder="What do you need? (sound, LED wall, photography…)" className={`${field} sm:col-span-2`} />}
      {err && <p className="text-sm text-destructive sm:col-span-2">{err}</p>}
      <Button type="submit" variant="hero" size="xl" className="sm:col-span-2">Send Enquiry <ArrowRight /></Button>
    </form>
  );
}
