import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, Speaker, Tv, Camera, Video, Radio } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/data/site";

const CAPABILITIES = [
  {
    title: "SOUND SYSTEMS",
    to: "/sound-system-rental",
    icon: Speaker,
  },
  {
    title: "LED WALLS",
    to: "/led-wall-rental",
    icon: Tv,
  },
  {
    title: "PHOTOGRAPHY",
    to: "/photography",
    icon: Camera,
  },
  {
    title: "VIDEOGRAPHY",
    to: "/videography",
    icon: Video,
  },
  {
    title: "LIVE STREAMING",
    to: "/live-streaming",
    icon: Radio,
  },
];

export function HeroShowcase() {
  return (
    <section className="relative w-full pt-2 pb-5 sm:pt-3 sm:pb-8 bg-white" aria-label="Hero Showcase">
      <div className="max-w-[1288px] mx-auto px-3 sm:px-6">
        {/* Main Hero Card Container */}
        <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-200/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)] bg-white p-6 sm:p-9 lg:p-12">

          {/* Subtle Ambient Radial Lighting Flares */}
          <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="pointer-events-none absolute top-10 right-10 h-64 w-64 rounded-full bg-amber-300/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-10 -left-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />

          {/* Side-by-Side 2-Column Grid Layout */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">

            {/* Left Column: Eyebrow, Signature Headline, Description & CTAs */}
            <div className="lg:col-span-6 flex flex-col items-start text-left gap-4 max-w-xl">
              {/* Eyebrow: GK EVENTS with horizontal divider */}
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs sm:text-sm font-black uppercase tracking-wider text-amber-600">
                    GK EVENTS
                  </span>
                  <div className="h-0.5 w-16 bg-amber-600/70 rounded-full" />
                </div>
                <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-[0.2em] text-slate-800">
                  PREMIUM EVENT PRODUCTIONS
                </p>
              </div>

              {/* Signature Headline matching reference serif & gold styling */}
              <h1 className="font-serif text-[2.4rem] sm:text-[2.9rem] md:text-[3.3rem] lg:text-[3.6rem] font-black text-slate-950 leading-[1.08] tracking-tight">
                Professional<br />
                Event Equipment<br />
                for{" "}
                <span className="relative inline-block text-amber-600 pb-1">
                  Rent &amp; Setup
                  {/* Elegant curved gold swoosh underline */}
                  <svg
                    className="pointer-events-none absolute -bottom-1 -left-1 w-[104%] h-3"
                    viewBox="0 0 100 12"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M 2,10 C 30,3 75,5 98,4"
                      stroke="#d97706"
                      strokeWidth="3.2"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
              </h1>

              {/* Subtitle Description */}
              <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed max-w-lg">
                Concert sound line arrays, curved 4K LED walls, stage lighting, grand weddings, corporate productions, video shooting and live broadcasting.
              </p>

              {/* Action CTA Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <Button
                  asChild
                  className="rounded-full bg-slate-950 hover:bg-slate-900 text-white font-bold px-6 py-5 text-sm sm:text-base shadow-md transition-all hover:scale-105 active:scale-95 border border-slate-800"
                >
                  <a
                    href={waLink("Hi GK Events, I'd like to book event equipment.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4.5 w-4.5" />
                    Book on WhatsApp
                  </a>
                </Button>

                <Button
                  asChild
                  variant="outline"
                  className="rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold px-6 py-5 text-sm sm:text-base shadow-xs hover:shadow transition-all hover:scale-105 active:scale-95"
                >
                  <Link to="/equipment">
                    View Equipment
                    <ArrowRight className="ml-1.5 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: Stage Visual with Gold Border & Live 4K Broadcast Overlay */}
            <div className="lg:col-span-6 relative w-full flex items-center justify-center lg:justify-end">
              <div className="relative w-full max-w-[540px] rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(217,119,6,0.18)] border border-amber-200/60 bg-slate-950 transition-transform duration-500 hover:scale-[1.01]">
                <img
                  src="/images/hero-desktop-stage.png"
                  alt="GK Events Grand Wedding Stage & Live 4K Broadcast Production"
                  className="w-full h-auto object-cover select-none"
                  loading="eager"
                />
              </div>
            </div>
          </div>

          {/* Bottom Row: 5 Capability Pills */}
          {/* Desktop 5-Column Grid */}
          <div className="relative z-10 hidden lg:grid lg:grid-cols-5 gap-3.5 mt-10">
            {CAPABILITIES.map((cap) => (
              <Link
                key={cap.title}
                to={cap.to}
                className="group flex items-center justify-center gap-2.5 rounded-2xl border border-amber-200/70 bg-white/95 px-4 py-3.5 shadow-[0_4px_16px_rgba(217,119,6,0.06)] hover:border-amber-400 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
              >
                <cap.icon className="h-5 w-5 text-amber-600 transition-transform duration-200 group-hover:scale-110 shrink-0" />
                <span className="text-xs font-black uppercase tracking-wider text-slate-900 group-hover:text-amber-700 transition-colors">
                  {cap.title}
                </span>
              </Link>
            ))}
          </div>

          {/* Mobile Layout: 3 on top row, 2 centered below matching reference screen */}
          <div className="relative z-10 lg:hidden space-y-2 mt-8">
            <div className="grid grid-cols-3 gap-2">
              {CAPABILITIES.slice(0, 3).map((cap) => (
                <Link
                  key={cap.title}
                  to={cap.to}
                  className="flex flex-col sm:flex-row items-center justify-center gap-1.5 rounded-xl border border-amber-200/70 bg-white/95 p-2.5 text-center shadow-xs hover:border-amber-400 transition-all"
                >
                  <cap.icon className="h-4 w-4 text-amber-600 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-900 leading-tight">
                    {cap.title}
                  </span>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-2 gap-2 max-w-[85%] mx-auto">
              {CAPABILITIES.slice(3, 5).map((cap) => (
                <Link
                  key={cap.title}
                  to={cap.to}
                  className="flex flex-col sm:flex-row items-center justify-center gap-1.5 rounded-xl border border-amber-200/70 bg-white/95 p-2.5 text-center shadow-xs hover:border-amber-400 transition-all"
                >
                  <cap.icon className="h-4 w-4 text-amber-600 shrink-0" />
                  <span className="text-[10px] sm:text-xs font-black uppercase tracking-wider text-slate-900 leading-tight">
                    {cap.title}
                  </span>
                </Link>
              ))}
            </div>
          </div>

          {/* Decorative Golden Ribbon / Waves along the bottom edge matching reference */}
          <div className="pointer-events-none absolute -bottom-1 left-0 right-0 h-16 sm:h-20 overflow-hidden z-0 opacity-70">
            <svg className="w-full h-full" viewBox="0 0 1440 100" fill="none" preserveAspectRatio="none">
              <path d="M0,35 C320,95 480,-10 800,45 C1120,100 1280,10 1440,35 L1440,100 L0,100 Z" fill="url(#goldWaveGrad1)" opacity="0.45" />
              <path d="M0,60 C360,10 720,90 1080,35 C1260,5 1380,70 1440,55 L1440,100 L0,100 Z" fill="url(#goldWaveGrad2)" opacity="0.65" />
              <defs>
                <linearGradient id="goldWaveGrad1" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#fef3c7" stopOpacity="0.3" />
                  <stop offset="50%" stopColor="#d97706" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#fef3c7" stopOpacity="0.3" />
                </linearGradient>
                <linearGradient id="goldWaveGrad2" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#b45309" stopOpacity="0.2" />
                  <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.4" />
                  <stop offset="100%" stopColor="#b45309" stopOpacity="0.2" />
                </linearGradient>
              </defs>
            </svg>
          </div>

        </div>
      </div>
    </section>
  );
}
