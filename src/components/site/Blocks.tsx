import { Link } from "@tanstack/react-router";
import { useState, type ReactNode } from "react";
import { ArrowRight, CheckCircle2, MessageCircle, Phone, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, waLink, type ServiceData } from "@/data/site";

export function PageHero({ eyebrow, title, highlight, intro, image }: { eyebrow: string; title: string; highlight: string; intro: string; image: string }) {
  return (
    <section className="relative w-full pt-4 pb-8 bg-white" aria-label={title}>
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        <div className="relative overflow-hidden rounded-[2rem] sm:rounded-[2.5rem] border border-slate-200/80 bg-gradient-to-br from-slate-50 via-white to-amber-50/40 p-8 sm:p-12 lg:p-14 shadow-[0_20px_50px_rgba(15,23,42,0.04)] grid lg:grid-cols-2 gap-8 items-center">
          <div className="relative z-10 space-y-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs sm:text-[13px] font-bold tracking-wide border border-amber-200/70 shadow-xs">
              {eyebrow}
            </span>
            <h1 className="font-display text-3xl sm:text-4xl md:text-5xl font-black text-slate-950 leading-[1.1] tracking-tight">
              {title} <span className="text-gold">{highlight}</span>
            </h1>
            <p className="max-w-xl text-base sm:text-lg text-slate-600 font-medium leading-relaxed">
              {intro}
            </p>
            <div className="pt-2">
              <CtaButtons />
            </div>
          </div>
          <div className="relative overflow-hidden rounded-3xl border border-slate-200/90 shadow-md aspect-[16/10] bg-slate-100">
            <img src={image} alt={title} className="h-full w-full object-cover" />
          </div>
        </div>
      </div>
    </section>
  );
}

export function CtaButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-wrap gap-3 ${className}`}>
      <Button asChild variant="hero" size="xl"><Link to="/contact">Get a Quote <ArrowRight /></Link></Button>
      <Button asChild variant="whatsapp" size="xl" className="text-white font-bold"><a href={waLink()} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp</a></Button>
      <Button asChild variant="outline" size="xl" className="border-slate-300 bg-white text-slate-800 hover:bg-slate-50 font-bold"><a href={contact.phoneHref}><Phone />Call Now</a></Button>
    </div>
  );
}

export function Section({ eyebrow, title, children, className = "" }: { eyebrow?: string; title?: ReactNode; children: ReactNode; className?: string }) {
  return (
    <section className={`py-8 sm:py-12 bg-white text-slate-900 ${className}`}>
      <div className="container-x">
        {(eyebrow || title) && (
          <div className="flex flex-col items-start text-left max-w-2xl mb-6 sm:mb-8">
            {eyebrow && (
              <div className="flex items-center gap-3 mb-2.5">
                <div className="h-[1.5px] w-8 sm:w-12 bg-amber-500/80" />
                <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-slate-800">
                  {eyebrow}
                </span>
                <div className="h-[1.5px] w-8 sm:w-12 bg-amber-500/80" />
              </div>
            )}
            {title && (
              <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-black text-slate-950 tracking-tight leading-tight">
                {title}
              </h2>
            )}
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
        <div key={i.name} className="group rounded-3xl border border-slate-200/80 bg-white p-7 transition hover:-translate-y-1 hover:border-amber-500/50 hover:shadow-lg shadow-xs">
          {icon !== false && <span className="font-display text-sm font-bold text-amber-700">{String(idx + 1).padStart(2, "0")}</span>}
          <h3 className="mt-3 text-xl font-bold text-slate-900 group-hover:text-amber-700">{i.name}</h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{i.desc}</p>
        </div>
      ))}
    </div>
  );
}

export function Process({ steps }: { steps: string[] }) {
  return (
    <ol className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
      {steps.map((s, i) => (
        <li key={s} className="rounded-3xl border border-slate-200/80 bg-white p-6 shadow-xs">
          <span className="text-gold font-display text-4xl font-extrabold">{i + 1}</span>
          <p className="mt-3 font-semibold text-slate-900">{s}</p>
        </li>
      ))}
    </ol>
  );
}

export function Faq({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openMap, setOpenMap] = useState<Record<number, boolean>>({ 0: true });

  const toggle = (i: number) => {
    setOpenMap((prev) => ({ ...prev, [i]: !prev[i] }));
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5 w-full">
      {faqs.map((f, i) => {
        const isOpen = !!openMap[i];
        return (
          <div
            key={f.q}
            className={`rounded-2xl sm:rounded-3xl border transition-all duration-200 bg-white ${
              isOpen
                ? "border-amber-400/80 shadow-[0_8px_24px_rgba(245,158,11,0.08)] ring-1 ring-amber-400/20"
                : "border-slate-200/80 shadow-xs hover:border-amber-300 hover:shadow-sm"
            }`}
          >
            <button
              type="button"
              onClick={() => toggle(i)}
              className="flex w-full items-center justify-between gap-3 p-5 sm:p-6 text-left font-bold text-slate-900 hover:text-amber-700 transition-colors cursor-pointer"
            >
              <span className="text-base sm:text-lg tracking-tight font-display font-bold">
                {f.q}
              </span>
              <div
                className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-full transition-transform duration-200 ${
                  isOpen ? "bg-amber-100/80 text-amber-700 rotate-45" : "bg-slate-100 text-slate-500 hover:bg-amber-50 hover:text-amber-600"
                }`}
              >
                <Plus className="h-4.5 w-4.5" />
              </div>
            </button>
            {isOpen && (
              <div className="px-5 sm:px-6 pb-5 sm:pb-6 text-sm text-slate-600 leading-relaxed font-normal border-t border-slate-100/80 pt-3">
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}

export function FinalCta({ title = "Ready to make your event unforgettable?" }: { title?: string }) {
  return (
    <section className="py-8 sm:py-12 bg-white">
      <div className="container-x">
        <div className="relative overflow-hidden rounded-[2rem] border border-amber-500/30 bg-gradient-to-br from-amber-50/50 via-white to-amber-50/30 p-8 sm:p-12 text-center shadow-md">
          <div className="absolute -top-24 left-1/2 h-64 w-64 -translate-x-1/2 rounded-full bg-amber-500/10 blur-3xl" />
          <h2 className="relative text-2xl sm:text-4xl font-extrabold text-slate-950">{title}</h2>
          <p className="relative mx-auto mt-3 max-w-xl text-slate-600 font-medium text-sm sm:text-base">Tell us your date, venue and guest count — get a tailored quote within hours.</p>
          <CtaButtons className="relative mt-6 justify-center" />
        </div>
      </div>
    </section>
  );
}

export function ServicePage({ d }: { d: ServiceData }) {
  return (
    <div className="bg-white text-slate-900">
      <PageHero {...d} />
      <Section eyebrow={d.eyebrow} title={d.itemsTitle}><CardGrid items={d.items} /></Section>
      <section className="py-6 sm:py-8 bg-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <img src={d.image} alt={d.eyebrow} loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover border border-slate-200/80 shadow-md" />
          <div>
            <p className="eyebrow">Solutions</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">Built for your occasion</h2>
            <ul className="mt-8 space-y-5">
              {d.solutions.map((s) => (
                <li key={s.name} className="flex gap-4"><CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-600" /><div><p className="font-bold text-slate-900">{s.name}</p><p className="text-sm text-slate-600">{s.desc}</p></div></li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Section eyebrow="How it works" title="Our setup process"><Process steps={d.process} /></Section>
      <Section eyebrow="FAQs" title="Questions, answered" className="pt-0"><Faq faqs={d.faqs} /></Section>
      <FinalCta />
    </div>
  );
}

export function EnquiryForm({ compact }: { compact?: boolean }) {
  const [sent, setSent] = useState(false);
  const [err, setErr] = useState("");
  const field = "w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-slate-900 outline-none focus:border-amber-500 shadow-xs";
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
  if (sent) return <div className="rounded-3xl border border-amber-500/40 bg-amber-50/70 p-8 text-center"><CheckCircle2 className="mx-auto h-10 w-10 text-amber-600" /><p className="mt-4 text-xl font-bold text-slate-950">Thank you!</p><p className="mt-2 text-slate-600">Your enquiry opened in WhatsApp. We'll reply shortly.</p></div>;
  return (
    <form onSubmit={submit} className="grid gap-4 rounded-3xl border border-slate-200 bg-white p-6 sm:grid-cols-2 sm:p-8 shadow-sm">
      <input name="name" required placeholder="Your name" className={field} />
      <input name="phone" required inputMode="tel" placeholder="Mobile number" className={field} />
      <select name="event" required className={field} defaultValue="">
        <option value="" disabled>Event type</option>
        {["Wedding", "Corporate", "Concert", "Conference", "Exhibition", "Birthday / Private", "Other"].map((o) => <option key={o}>{o}</option>)}
      </select>
      <input name="date" type="date" className={field} />
      {!compact && <textarea name="message" rows={4} placeholder="What do you need? (sound, LED wall, photography…)" className={`${field} sm:col-span-2`} />}
      {err && <p className="text-sm text-destructive sm:col-span-2">{err}</p>}
      <Button type="submit" variant="hero" size="xl" className="sm:col-span-2 font-bold shadow-gold">Send Enquiry <ArrowRight /></Button>
    </form>
  );
}
