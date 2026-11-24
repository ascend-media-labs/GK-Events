import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Camera, ChevronDown, Clock, Headphones, Lightbulb, MonitorPlay, Projector, Radio, ShieldCheck, Speaker, Star, Tv, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Faq, FinalCta, Process, Section } from "@/components/site/Blocks";
import { images } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GK Events — Premium AV Rental, Photography & Live Streaming" },
      { name: "description", content: "Sound systems, LED walls, LED TVs, projectors, photography, videography and live streaming for weddings and corporate events." },
      { property: "og:title", content: "GK Events — Creating Experiences Beyond the Ordinary" },
      { property: "og:description", content: "Premium AV equipment, event technology, photography and live streaming." },
    ],
  }),
  component: Home,
});

const cats = [
  { icon: Speaker, name: "Sound Systems", to: "/sound-system-rental" },
  { icon: MonitorPlay, name: "LED Walls", to: "/led-wall-rental" },
  { icon: Tv, name: "LED TVs", to: "/led-tv-rental" },
  { icon: Projector, name: "Projectors", to: "/projector-rental" },
  { icon: Lightbulb, name: "Stage Lighting", to: "/event-solutions" },
  { icon: Camera, name: "Photography", to: "/photography" },
  { icon: Video, name: "Videography", to: "/videography" },
  { icon: Radio, name: "Live Streaming", to: "/live-streaming" },
];

const why = [
  { icon: Award, name: "Premium equipment", desc: "Branded, well-maintained gear tested before every event." },
  { icon: Headphones, name: "Expert technicians", desc: "Trained engineers on-site from setup to pack-up." },
  { icon: Clock, name: "On-time setup", desc: "We arrive early so everything is ready before guests." },
  { icon: ShieldCheck, name: "Backup ready", desc: "Spare mics, cables and power for peace of mind." },
];

const testimonials = [
  { name: "Priya & Arjun", role: "Wedding, 600 guests", text: "The LED backdrop and sound at our sangeet were stunning. Everyone asked who did the setup!" },
  { name: "Rahul Mehta", role: "HR Head, Tech company", text: "Flawless annual meet — mics, screens and the live stream all worked perfectly." },
  { name: "Sneha Iyer", role: "Ganesh Utsav Committee", text: "Professional team, great sound for 10 days of celebrations. Highly recommended." },
];

function Home() {
  return (
    <>
      <section className="relative flex min-h-screen items-center overflow-hidden pt-20">
        <img src={images.hero} alt="Concert stage with LED wall and stage lights" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="container-x relative animate-rise">
          <p className="eyebrow">Audio · Visual · Light · Film</p>
          <h1 className="mt-5 max-w-4xl text-5xl font-extrabold leading-[1.05] sm:text-7xl">Creating Experiences <span className="text-gold">Beyond the Ordinary.</span></h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground">Premium Audio Visual Equipment, Event Technology, Photography, Videography and Live Streaming Solutions for Every Occasion.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Button asChild variant="hero" size="xl"><Link to="/equipment">Explore Our Services <ArrowRight /></Link></Button>
            <Button asChild variant="glass" size="xl"><Link to="/contact">Get a Quote</Link></Button>
          </div>
        </div>
        <a href="#highlights" aria-label="Scroll down" className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bob text-primary"><ChevronDown className="h-8 w-8" /></a>
      </section>

      <section id="highlights" className="border-y border-border bg-card">
        <div className="container-x grid grid-cols-2 gap-6 py-10 text-center lg:grid-cols-4">
          {[["1,200+", "Events delivered"], ["10+", "Years experience"], ["500+", "AV equipment units"], ["24/7", "Event support"]].map(([n, l]) => (
            <div key={l}><p className="text-gold font-display text-4xl font-extrabold">{n}</p><p className="mt-1 text-sm text-muted-foreground">{l}</p></div>
          ))}
        </div>
      </section>

      <Section eyebrow="Equipment & Services" title={<>Everything your event <span className="text-gold">needs.</span></>}>
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {cats.map((c) => (
            <Link key={c.name} to={c.to} className="group rounded-3xl border border-border bg-card p-6 transition hover:-translate-y-1 hover:border-primary/50 hover:shadow-gold">
              <c.icon className="h-9 w-9 text-primary" />
              <p className="mt-5 font-display font-bold">{c.name}</p>
              <span className="mt-2 inline-flex items-center gap-1 text-xs text-muted-foreground group-hover:text-primary">Explore <ArrowRight className="h-3 w-3" /></span>
            </Link>
          ))}
        </div>
      </Section>

      <Split img={images.wedding} eyebrow="Wedding Event Solutions" title="Weddings, produced like a film." text="From haldi to reception — LED backdrops, sound, lighting, candid photography, cinematic films and live streams for family worldwide." to="/wedding-events" />
      <Split reverse img={images.corporate} eyebrow="Corporate Event Solutions" title="Conferences that run flawlessly." text="Podium mics, LED screens, projectors, hybrid streaming and show calling for launches, AGMs and award nights." to="/corporate-events" />
      <Split img={images.camera} eyebrow="Photography · Videography · Live Streaming" title="Every moment, captured and shared." text="Candid photos, 4K cinematic films and multi-camera live streams to YouTube, Zoom and private links." to="/live-streaming" />

      <Section eyebrow="Featured Gallery" title="Recent productions">
        <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
          {[images.hero, images.wedding, images.corporate, images.equipment].map((src, i) => (
            <img key={i} src={src} alt="GK Events production" loading="lazy" className={`h-56 w-full rounded-3xl object-cover sm:h-72 ${i === 0 ? "md:col-span-2" : ""}`} />
          ))}
        </div>
        <Button asChild variant="glass" size="xl" className="mt-8"><Link to="/gallery">View full gallery <ArrowRight /></Link></Button>
      </Section>

      <Section eyebrow="Why GK Events" title="Trusted by families and brands">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.name} className="glass rounded-3xl p-7"><w.icon className="h-8 w-8 text-accent" /><h3 className="mt-4 text-lg font-bold">{w.name}</h3><p className="mt-2 text-sm text-muted-foreground">{w.desc}</p></div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Our Process" title="Simple from enquiry to encore" className="pt-0">
        <Process steps={["Share your requirement", "Free consultation", "Custom quote", "Setup & testing", "Live event support"]} />
      </Section>

      <Section eyebrow="Testimonials" title="What clients say" className="pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-border bg-card p-7">
              <div className="flex gap-1 text-primary">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-4 text-muted-foreground">“{t.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3"><Users className="h-5 w-5 text-accent" /><span><b>{t.name}</b><br /><span className="text-xs text-muted-foreground">{t.role}</span></span></figcaption>
            </figure>
          ))}
        </div>
      </Section>

      <Section eyebrow="FAQ" title="Good to know" className="pt-0">
        <Faq faqs={[
          { q: "Which events do you handle?", a: "Weddings, corporate events, conferences, concerts, exhibitions, product launches, religious festivals and private parties." },
          { q: "Is setup and a technician included?", a: "Yes — delivery, installation, testing and an on-site technician are included with every rental." },
          { q: "How do I get a quote?", a: "Send us a WhatsApp message or fill the enquiry form with your date, venue and needs. We reply within hours." },
          { q: "Do you offer packages?", a: "Yes, we bundle sound, LED, lighting, photography and streaming into custom packages." },
        ]} />
      </Section>

      <FinalCta />
    </>
  );
}

function Split({ img, eyebrow, title, text, to, reverse }: { img: string; eyebrow: string; title: string; text: string; to: string; reverse?: boolean }) {
  return (
    <section className="py-12 sm:py-16">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <img src={img} alt={eyebrow} loading="lazy" className={`aspect-[4/3] w-full rounded-[2rem] object-cover ${reverse ? "lg:order-2" : ""}`} />
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg text-muted-foreground">{text}</p>
          <Button asChild variant="hero" size="xl" className="mt-8"><Link to={to}>Learn more <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
  );
}
