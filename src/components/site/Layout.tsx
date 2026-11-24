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
  className = "h-10 sm:h-12",
  showText = true,
}: {
  className?: string;
  showText?: boolean;
}) {
  return (
    <div className="flex items-center gap-2.5 sm:gap-3 select-none">
      <img
        src={emblem}
        alt="GK Events Emblem"
        className={`${className} w-auto object-contain drop-shadow-[0_2px_8px_rgba(217,119,6,0.2)] transition-transform duration-300 group-hover:scale-105`}
      />
      {showText && (
        <div className="flex flex-col justify-center">
          <span className="font-display text-lg sm:text-xl font-black tracking-tight text-slate-950 leading-none">
            GK <span className="text-gold">EVENTS</span>
          </span>
          <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-[0.2em] text-amber-700 mt-1 leading-none">
            Audio Visuals & Tech
          </span>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 pt-3 sm:pt-4 pb-2 bg-transparent transition-all duration-300">
      <div className="max-w-[1288px] mx-auto flex items-center justify-between rounded-[28px] sm:rounded-full bg-white border border-slate-200/90 px-4 sm:px-8 py-2.5 shadow-[0_10px_35px_rgba(15,23,42,0.06)]">
        {/* Brand Logo */}
        <Link to="/" className="group relative flex items-center shrink-0" onClick={() => setOpen(false)}>
          <Logo className="relative h-10 sm:h-12 w-auto" />
        </Link>

        {/* Central Floating Capsule Nav Links */}
        <nav className="hidden lg:flex items-center gap-1 sm:gap-2">
          {mainNav.map((n) => (
            <NavLink key={n.to} {...n} />
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <button
          aria-label="Open menu"
          className="rounded-full p-2.5 border border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-950 hover:bg-slate-100 lg:hidden transition-colors"
          onClick={() => setOpen(!open)}
        >
          {open ? <X className="h-5 w-5 text-amber-600" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer Card */}
      {open && (
        <div className="lg:hidden max-w-[1288px] mx-auto mt-2 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] space-y-4">
            <div className="grid gap-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Navigation
              </p>
              {mainNav.map((n) => (
                <Link
                  key={n.to}
                  to={n.to}
                  onClick={() => setOpen(false)}
                  activeOptions={{ exact: true }}
                  activeProps={{ className: "bg-blue-50 text-blue-700 font-bold border border-blue-200/60" }}
                  className="rounded-xl px-3.5 py-2.5 font-semibold text-slate-800 hover:bg-slate-50 hover:text-amber-700 transition-colors"
                >
                  {n.label}
                </Link>
              ))}
            </div>

            {/* Direct Contact Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
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
          "bg-[#eef5ff] text-[#2563eb] font-bold border border-blue-200/50 shadow-xs",
      }}
      inactiveProps={{
        className: "text-slate-700 hover:text-slate-950 hover:bg-slate-50",
      }}
      className="rounded-2xl px-4 sm:px-5 py-2 text-sm font-semibold tracking-normal transition-all duration-200"
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
