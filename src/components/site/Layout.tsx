import { Link } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronDown,
  Mail,
  MapPin,
  Menu,
  MessageCircle,
  Phone,
  X,
  Sparkles,
  Speaker,
  MonitorPlay,
  Tv,
  Projector,
  Lightbulb,
  Camera,
  Video,
  Radio,
  ArrowRight,
} from "lucide-react";
import logo from "@/assets/gk-logo-light.png";
import emblem from "@/assets/gk-emblem.png";
import { Button } from "@/components/ui/button";
import { contact, mainNav, serviceNav, waLink } from "@/data/site";
import { AnnouncementBar } from "./AnnouncementBar";
export { AnnouncementBar };

const RICH_SERVICES = [
  {
    to: "/sound-system-rental",
    label: "Sound Systems",
    desc: "Line Arrays & Digital Consoles",
    icon: Speaker,
  },
  {
    to: "/led-wall-rental",
    label: "LED Walls & Screens",
    desc: "P2.5 Curved Ultra-HD",
    icon: MonitorPlay,
  },
  {
    to: "/led-tv-rental",
    label: "LED TV Rental",
    desc: "65\"–85\" 4K UHD Smart TVs",
    icon: Tv,
  },
  {
    to: "/projector-rental",
    label: "Projectors & Screens",
    desc: "High-Lumen Laser 4K",
    icon: Projector,
  },
  {
    to: "/event-solutions",
    label: "Stage Lighting",
    desc: "Moving Heads & Lasers",
    icon: Lightbulb,
  },
  {
    to: "/photography",
    label: "Photography",
    desc: "Candid & Cinematic",
    icon: Camera,
  },
  {
    to: "/videography",
    label: "Videography",
    desc: "4K Cinema & Gimbal Films",
    icon: Video,
  },
  {
    to: "/live-streaming",
    label: "Live Streaming",
    desc: "Multi-Cam YouTube & Zoom",
    icon: Radio,
  },
];

const METRO_CITIES = [
  { name: "Hyderabad", id: "hyderabad" },
  { name: "Bangalore", id: "bangalore" },
  { name: "Mumbai", id: "mumbai" },
  { name: "Chennai", id: "chennai" },
  { name: "Pune", id: "pune" },
];

export function Logo({
  className = "h-14 sm:h-16",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3.5 select-none">
      <img
        src={emblem}
        alt="GK Events Emblem"
        className={`${className} w-auto object-contain drop-shadow-[0_2px_8px_rgba(217,119,6,0.2)] transition-transform duration-300 group-hover:scale-105`}
      />
      {showText && (
        <div className="flex flex-col justify-center">
          <span className="font-display text-xl sm:text-2xl font-black tracking-tight text-slate-950 leading-none">
            GK <span className="text-gold">EVENTS</span>
          </span>
          <span className="text-[9.5px] sm:text-[10.5px] font-extrabold uppercase tracking-[0.2em] text-amber-700 mt-1 leading-none">
            Audio Visuals & Tech
          </span>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200/80 bg-white/95 backdrop-blur-2xl transition-all duration-300 shadow-[0_2px_12px_rgba(0,0,0,0.03)]">
      {/* Fine Golden Ambient Edge Glow */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/35 to-transparent" />

      <div className="container-x flex h-20 items-center justify-between gap-4">
        {/* Brand Logo with Ambient Hover Glow */}
        <Link to="/" className="group relative flex items-center shrink-0" onClick={() => setOpen(false)}>
          <div className="absolute -inset-2 rounded-2xl bg-amber-500/10 blur-xl opacity-40 group-hover:opacity-80 transition-opacity" />
          <Logo className="relative h-13 sm:h-15 w-auto" />
        </Link>

        {/* Central Floating Capsule Nav Island */}
        <nav className="hidden lg:flex items-center rounded-full border border-slate-200/90 bg-slate-100/80 p-1.5 shadow-[inset_0_1px_1px_rgba(0,0,0,0.04)] backdrop-blur-xl">
          {mainNav.map((n) => (
            <NavLink key={n.to} {...n} />
          ))}
        </nav>

        {/* Right Action Island: CTA Button */}
        <div className="flex items-center gap-3">
          {/* Premium Metallic Gold CTA Button */}
          <Button
            asChild
            className="hidden sm:inline-flex rounded-full bg-gradient-to-r from-amber-400 via-amber-500 to-amber-600 hover:from-amber-300 hover:to-amber-500 text-slate-950 font-extrabold shadow-[0_2px_12px_rgba(245,158,11,0.3)] hover:shadow-[0_4px_20px_rgba(245,158,11,0.5)] hover:scale-105 active:scale-95 transition-all duration-300 px-5 py-2 text-xs sm:text-sm tracking-wide border border-amber-300/40"
          >
            <Link to="/contact">
              <span>Get a Quote</span>
              <Sparkles className="h-3.5 w-3.5 ml-1 text-slate-950" />
            </Link>
          </Button>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open menu"
            className="rounded-full p-2.5 border border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-950 hover:bg-slate-100 lg:hidden transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-6 w-6 text-amber-600" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {open && (
        <div className="max-h-[calc(100vh-5rem)] overflow-y-auto border-t border-slate-200 bg-white/98 backdrop-blur-2xl lg:hidden">
          <div className="container-x py-5 space-y-5">
            {/* Quick Cities Pill Bar in Mobile */}
            <div>
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-2 flex items-center gap-1">
                <MapPin className="h-3 w-3" /> Select Your City
              </p>
              <div className="flex flex-wrap gap-1.5">
                {METRO_CITIES.map((c) => (
                  <Link
                    key={c.id}
                    to="/$city"
                    params={{ city: c.id }}
                    onClick={() => setOpen(false)}
                    className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700 hover:border-amber-400 hover:text-amber-800 transition-colors"
                  >
                    {c.name}
                  </Link>
                ))}
              </div>
            </div>

            {/* Main Navigation Links */}
            <div className="grid gap-1 border-t border-slate-100 pt-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Pages
              </p>
              {mainNav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "bg-amber-50 text-amber-800 font-bold border border-amber-300" }}
                  className="rounded-xl px-3.5 py-2.5 font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-700 transition-colors"
                >
                  {n.label}
                </Link>
              ))}
            </div>

            {/* Services Links */}
            <div className="grid gap-1 border-t border-slate-100 pt-4">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                AV Equipment & Services
              </p>
              <div className="grid grid-cols-2 gap-2">
                {RICH_SERVICES.map((s) => (
                  <Link
                    key={s.to}
                    to={s.to}
                    onClick={() => setOpen(false)}
                    className="flex items-center gap-2 rounded-xl border border-slate-200/70 bg-slate-50 p-2 text-xs font-semibold text-slate-700 hover:text-amber-700 hover:border-amber-300"
                  >
                    <s.icon className="h-3.5 w-3.5 text-amber-600" />
                    <span className="truncate">{s.label}</span>
                  </Link>
                ))}
              </div>
            </div>

            {/* Direct Contact Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
              <Button asChild variant="outline" size="lg" className="rounded-full font-bold border-slate-300 text-slate-800">
                <a href={contact.phoneHref}>
                  <Phone className="mr-1.5 h-4 w-4 text-amber-600" /> Call Now
                </a>
              </Button>
              <Button asChild variant="whatsapp" size="lg" className="rounded-full font-bold text-white">
                <a href={waLink()} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-1.5 h-4 w-4" /> WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link
      to={to}
      activeOptions={{ exact: true }}
      activeProps={{
        className:
          "bg-white text-amber-800 font-extrabold border border-slate-200/90 shadow-xs",
      }}
      inactiveProps={{
        className: "text-slate-600 hover:text-slate-950 hover:bg-white/70",
      }}
      className="rounded-full px-4 py-1.5 text-xs sm:text-sm font-semibold tracking-wide transition-all duration-200"
    >
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200/90 bg-slate-50 text-slate-800">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-20" />
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            Premium AV equipment rental, photography, films and live event production — with blessings, for every celebration.
          </p>
        </div>
        <FooterCol title="Company" items={mainNav} />
        <FooterCol title="Services" items={serviceNav} />
        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              <a href={contact.phoneHref} className="flex gap-2 hover:text-amber-700 transition-colors">
                <Phone className="h-4 w-4 shrink-0 text-amber-600" />
                {contact.phone}
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex gap-2 hover:text-amber-700 transition-colors">
                <Mail className="h-4 w-4 shrink-0 text-amber-600" />
                {contact.email}
              </a>
            </li>
            <li className="flex gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-amber-600" />
              {contact.city}
            </li>
            <li className="text-slate-500 text-xs">{contact.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-slate-200 py-6 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} GK Events. All rights reserved.
      </div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="eyebrow mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {items.map((i) => (
          <li key={i.to}>
            <Link to={i.to} className="text-slate-600 hover:text-amber-700 transition-colors">
              {i.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a
        href={contact.phoneHref}
        aria-label="Call GK Events"
        className="grid h-14 w-14 place-items-center rounded-full bg-blue-600 text-white shadow-lg transition hover:scale-110"
      >
        <Phone className="h-6 w-6" />
      </a>
      <a
        href={waLink()}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp GK Events"
        className="grid h-14 w-14 place-items-center rounded-full bg-emerald-500 text-white shadow-lg transition hover:scale-110"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
    </div>
  );
}
