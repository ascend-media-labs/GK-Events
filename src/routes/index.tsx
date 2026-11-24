import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Award, Camera, ChevronDown, Clock, Headphones, Lightbulb, MonitorPlay, Projector, Radio, ShieldCheck, Speaker, Star, Tv, Users, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Faq, FinalCta, Process, Section } from "@/components/site/Blocks";
import { HeroShowcase } from "@/components/site/HeroShowcase";
import { WhatWeDo } from "@/components/site/WhatWeDo";
import { StatsHighlights } from "@/components/site/StatsHighlights";
import { CitySelector } from "@/components/site/CitySelector";
import { BrowseByCategory } from "@/components/site/BrowseByCategory";
import { HowItWorks } from "@/components/site/HowItWorks";
import { HomeMosaicGallery } from "@/components/site/HomeMosaicGallery";
import { images } from "@/data/site";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "GK Events — Premium Event Equipment Rental, Photography & Live Streaming" },
      { name: "description", content: "Sound systems, LED walls, LED TVs, projectors, photography, videography and live streaming for weddings and corporate events." },
      { property: "og:title", content: "GK Events — Creating Experiences Beyond the Ordinary" },
      { property: "og:description", content: "Premium event equipment, stage technology, photography and live streaming." },
    ],
  }),
  component: Home,
});

const cats = [
  {
    icon: Speaker,
    name: "Sound Systems",
    to: "/sound-system-rental",
    image: images.services.sound,
    tag: "Concert Line Arrays",
    desc: "Line arrays, subwoofers, digital mixing consoles, and wireless mics for crystal-clear acoustics.",
  },
  {
    icon: MonitorPlay,
    name: "LED Walls",
    to: "/led-wall-rental",
    image: images.services.ledWall,
    tag: "P2.5 Curved Ultra-HD",
    desc: "Curved and flat seamless LED video screen backdrops with vibrant color and high refresh rates.",
  },
  {
    icon: Tv,
    name: "LED TVs",
    to: "/led-tv-rental",
    image: images.services.ledTv,
    tag: "65\"–85\" 4K Smart TVs",
    desc: "Commercial 4K UHD screens mounted on designer matte black floor stands for expos & conferences.",
  },
  {
    icon: Projector,
    name: "Projectors",
    to: "/projector-rental",
    image: images.services.projector,
    tag: "High-Lumen Laser 4K",
    desc: "High-brightness laser projection systems with motorized tensioned screens for large halls.",
  },
  {
    icon: Lightbulb,
    name: "Stage Lighting",
    to: "/event-solutions",
    image: images.services.lighting,
    tag: "DMX Moving Heads & Lasers",
    desc: "Intelligent beam lights, warm ambient par cans, stage blinders, and atmospheric haze effects.",
  },
  {
    icon: Camera,
    name: "Photography",
    to: "/photography",
    image: images.services.photography,
    tag: "Candid & Cinematic",
    desc: "Experienced wedding and corporate photographers capturing timeless, high-resolution memories.",
  },
  {
    icon: Video,
    name: "Videography",
    to: "/videography",
    image: images.services.videography,
    tag: "4K Cinema & Gimbal Films",
    desc: "Full-frame cinema cameras, motorized gimbals, and drone videography for cinematic event films.",
  },
  {
    icon: Radio,
    name: "Live Streaming",
    to: "/live-streaming",
    image: images.services.liveStreaming,
    tag: "Multi-Cam Broadcast",
    desc: "Multi-camera broadcast switching with YouTube, Zoom, and private relay for families worldwide.",
  },
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
    <div className="bg-white text-slate-900">
      <HeroShowcase />

      <WhatWeDo />

      <CitySelector />

      <BrowseByCategory />

      <StatsHighlights />

      <HowItWorks />

      <Section eyebrow="Equipment & Services" title={<>Everything your event <span className="text-gold">needs.</span></>}>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {cats.map((c) => (
            <Link
              key={c.name}
              to={c.to}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_2px_12px_rgba(0,0,0,0.03)] transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)]"
            >
              {/* Service Photography Header */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={c.image}
                  alt={c.name}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />

                {/* Floating Icon Pill */}
                <div className="absolute top-3 left-3 flex h-9 w-9 items-center justify-center rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-amber-600 shadow-xs transition-colors group-hover:border-amber-400 group-hover:bg-amber-50">
                  <c.icon className="h-4.5 w-4.5" />
                </div>

                {/* Feature Spec Tag */}
                <span className="absolute top-3 right-3 rounded-full bg-white/95 backdrop-blur-md border border-slate-200 px-2.5 py-0.5 text-[10px] font-bold text-slate-700 tracking-wide uppercase shadow-xs">
                  {c.tag}
                </span>
              </div>

              {/* Service Content */}
              <div className="flex flex-1 flex-col justify-between p-5 pt-3">
                <div>
                  <h3 className="font-display text-lg font-bold text-slate-900 transition-colors group-hover:text-amber-700">
                    {c.name}
                  </h3>
                  <p className="mt-1.5 text-xs text-slate-600 line-clamp-2 leading-relaxed">
                    {c.desc}
                  </p>
                </div>

                <div className="mt-5 flex items-center justify-between border-t border-slate-100 pt-3">
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 transition-all group-hover:text-amber-900 group-hover:translate-x-0.5">
                    Explore Service <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                  </span>
                  <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">
                    Rental & Crew
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      <Split img={images.wedding} eyebrow="Wedding Event Solutions" title="Weddings, produced like a film." text="From haldi to reception — LED backdrops, sound, lighting, candid photography, cinematic films and live streams for family worldwide." to="/wedding-events" />
      <Split reverse img={images.corporate} eyebrow="Corporate Event Solutions" title="Conferences that run flawlessly." text="Podium mics, LED screens, projectors, hybrid streaming and show calling for launches, AGMs and award nights." to="/corporate-events" />
      <Split img={images.camera} eyebrow="Photography · Videography · Live Streaming" title="Every moment, captured and shared." text="Candid photos, 4K cinematic films and multi-camera live streams to YouTube, Zoom and private links." to="/live-streaming" />

      <HomeMosaicGallery />

      <Section eyebrow="Why GK Events" title="Trusted by families and brands">
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {why.map((w) => (
            <div key={w.name} className="rounded-3xl border border-slate-200/80 bg-slate-50/70 p-7 shadow-xs hover:bg-white hover:border-amber-400 hover:shadow-md transition-all"><w.icon className="h-8 w-8 text-amber-600" /><h3 className="mt-4 text-lg font-bold text-slate-900">{w.name}</h3><p className="mt-2 text-sm text-slate-600 leading-relaxed">{w.desc}</p></div>
          ))}
        </div>
      </Section>

      <Section eyebrow="Testimonials" title="What clients say" className="pt-0">
        <div className="grid gap-5 md:grid-cols-3">
          {testimonials.map((t) => (
            <figure key={t.name} className="rounded-3xl border border-slate-200/80 bg-white p-7 shadow-xs">
              <div className="flex gap-1 text-amber-500">{Array.from({ length: 5 }).map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}</div>
              <blockquote className="mt-4 text-slate-700 leading-relaxed font-medium">“{t.text}”</blockquote>
              <figcaption className="mt-5 flex items-center gap-3"><Users className="h-5 w-5 text-amber-600" /><span><b className="text-slate-900">{t.name}</b><br /><span className="text-xs text-slate-500">{t.role}</span></span></figcaption>
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
    </div>
  );
}

function Split({ img, eyebrow, title, text, to, reverse }: { img: string; eyebrow: string; title: string; text: string; to: string; reverse?: boolean }) {
  return (
    <section className="py-12 sm:py-16 bg-white text-slate-900">
      <div className="container-x grid items-center gap-10 lg:grid-cols-2">
        <img src={img} alt={eyebrow} loading="lazy" className={`aspect-[4/3] w-full rounded-[2rem] object-cover border border-slate-200/80 shadow-md ${reverse ? "lg:order-2" : ""}`} />
        <div>
          <p className="eyebrow">{eyebrow}</p>
          <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg text-slate-600 leading-relaxed font-medium">{text}</p>
          <Button asChild variant="hero" size="xl" className="mt-8 rounded-full shadow-gold font-bold"><Link to={to}>Learn more <ArrowRight /></Link></Button>
        </div>
      </div>
    </section>
  );
}
