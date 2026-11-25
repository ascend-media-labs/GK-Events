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
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
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
  className = "h-11 sm:h-13",
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
            EVENT PRODUCTIONS &amp; TECH
          </span>
        </div>
      )}
    </div>
  );
}

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full px-3 sm:px-6 pt-3 sm:pt-4 pb-2 bg-transparent transition-all duration-300 lg:p-0 lg:bg-white lg:border-b lg:border-slate-200/80 lg:shadow-[0_4px_20px_rgba(15,23,42,0.05)]">
      <div className="max-w-[1288px] mx-auto flex items-center justify-between rounded-full bg-white/95 backdrop-blur-md border border-white/60 px-4 sm:px-8 py-2.5 sm:py-3 shadow-[0_10px_35px_rgba(15,23,42,0.18)] lg:rounded-none lg:bg-white lg:backdrop-blur-none lg:border-0 lg:shadow-none lg:px-[60px] lg:py-3">
        {/* Brand Logo */}
        <Link to="/" className="group relative flex items-center shrink-0 mr-2" onClick={() => setOpen(false)}>
          <Logo className="relative h-10 sm:h-12 w-auto" />
        </Link>

        {/* Central Nav Links matching reference: Home, About, Services ▾, Equipment, Cities, Gallery, Contact */}
        <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
          <NavLink to="/" label="Home" />
          <NavLink to="/about" label="About" />

          {/* Services Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 rounded-full px-3 py-1.5 text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/70 transition-colors outline-none cursor-pointer data-[state=open]:bg-slate-100">
              <span>Services</span>
              <ChevronDown className="h-3 w-3 text-slate-400 transition-transform duration-200" />
            </DropdownMenuTrigger>
            <DropdownMenuContent align="center" className="w-56 p-1.5 rounded-2xl border border-slate-200/90 bg-white shadow-xl z-50">
              <DropdownMenuItem asChild>
                <Link to="/wedding-events" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-700 cursor-pointer">
                  <Sparkles className="h-4 w-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="font-bold">Weddings &amp; Stages</p>
                    <p className="text-[10px] text-slate-400 font-normal">Sangeet, Mandap &amp; Reception</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/corporate-events" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-700 cursor-pointer">
                  <MonitorPlay className="h-4 w-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="font-bold">Corporate Events</p>
                    <p className="text-[10px] text-slate-400 font-normal">Conferences &amp; Annual Meets</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/events" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-700 cursor-pointer">
                  <Speaker className="h-4 w-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="font-bold">Concerts &amp; Live Shows</p>
                    <p className="text-[10px] text-slate-400 font-normal">Line Arrays &amp; Stage Rigging</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/photography" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-700 cursor-pointer">
                  <Camera className="h-4 w-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="font-bold">Photography</p>
                    <p className="text-[10px] text-slate-400 font-normal">Candid &amp; Cinematic Moments</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/videography" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-700 cursor-pointer">
                  <Video className="h-4 w-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="font-bold">Videography</p>
                    <p className="text-[10px] text-slate-400 font-normal">4K Cinema &amp; Drone Films</p>
                  </div>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem asChild>
                <Link to="/live-streaming" className="flex items-center gap-2.5 rounded-xl px-3 py-2 text-xs font-bold text-slate-800 hover:bg-amber-50 hover:text-amber-700 cursor-pointer">
                  <Radio className="h-4 w-4 text-amber-600 shrink-0" />
                  <div>
                    <p className="font-bold">Live Streaming</p>
                    <p className="text-[10px] text-slate-400 font-normal">Multi-Cam YouTube &amp; Zoom</p>
                  </div>
                </Link>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <NavLink to="/equipment" label="Equipment" />
          <a
            href="/#cities"
            className="text-xs xl:text-[13px] font-semibold text-slate-700 hover:text-slate-950 hover:bg-slate-100/70 rounded-full px-3 py-1.5 transition-all duration-200 inline-flex items-center cursor-pointer"
          >
            Cities
          </a>
          <NavLink to="/gallery" label="Gallery" />
          <NavLink to="/contact" label="Contact" />
        </nav>

        {/* Right Action: Book on WhatsApp Pill Button */}
        <div className="flex items-center gap-2 sm:gap-3">
          <a
            href={waLink("Hi GK Events, I would like to book event equipment.")}
            target="_blank"
            rel="noreferrer"
            className="hidden sm:inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold px-5 py-2 text-xs sm:text-sm shadow-md transition-all hover:scale-105 active:scale-95 shrink-0"
          >
            <MessageCircle className="h-4 w-4" />
            <span>Book on WhatsApp</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            aria-label="Open menu"
            className="rounded-full p-2 border border-slate-200 bg-slate-50 text-slate-700 hover:text-slate-950 hover:bg-slate-100 lg:hidden transition-colors"
            onClick={() => setOpen(!open)}
          >
            {open ? <X className="h-5 w-5 text-amber-600" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer Card */}
      {open && (
        <div className="lg:hidden max-w-[1288px] mx-auto mt-2 animate-in fade-in slide-in-from-top-3 duration-200">
          <div className="rounded-3xl border border-slate-200/90 bg-white p-5 shadow-[0_20px_50px_rgba(15,23,42,0.12)] space-y-4">
            <div className="grid gap-1">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                Navigation
              </p>
              <Link
                to="/"
                onClick={() => setOpen(false)}
                activeOptions={{ exact: true }}
                activeProps={{ className: "text-amber-600 font-bold bg-amber-50" }}
                className="rounded-xl px-3.5 py-2 font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Home
              </Link>
              <Link
                to="/about"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3.5 py-2 font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                About
              </Link>
              <Link
                to="/equipment"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3.5 py-2 font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Equipment
              </Link>
              <a
                href="/#cities"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3.5 py-2 font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Cities
              </a>
              <Link
                to="/gallery"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3.5 py-2 font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Gallery
              </Link>
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="rounded-xl px-3.5 py-2 font-semibold text-slate-800 hover:bg-slate-50 transition-colors"
              >
                Contact
              </Link>
            </div>

            {/* Direct Contact Action Buttons */}
            <div className="grid grid-cols-2 gap-2 pt-3 border-t border-slate-100">
              <Button asChild variant="outline" size="sm" className="rounded-full font-bold border-slate-300 text-slate-800">
                <a href={contact.phoneHref}>
                  <Phone className="mr-1.5 h-3.5 w-3.5 text-amber-600" /> Call Now
                </a>
              </Button>
              <Button asChild size="sm" className="rounded-full font-bold text-white bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700">
                <a href={waLink()} target="_blank" rel="noreferrer">
                  <MessageCircle className="mr-1.5 h-3.5 w-3.5" /> WhatsApp
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
      activeOptions={{ exact: to === "/" }}
      activeProps={{
        className:
          "text-amber-600 font-bold border-b-2 border-amber-500 rounded-none px-3 py-1",
      }}
      inactiveProps={{
        className: "text-slate-700 hover:text-slate-950 hover:bg-slate-100/70 rounded-full px-3 py-1.5",
      }}
      className="text-xs xl:text-[13px] font-semibold tracking-normal transition-all duration-200 inline-flex items-center"
    >
      {label}
    </Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-slate-200/90 bg-slate-50 text-slate-800">
      <div className="container-x grid gap-8 py-10 sm:py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-20" />
          <p className="mt-4 text-sm text-slate-600 leading-relaxed">
            Premium event equipment rental, photography, films and live event production — with blessings, for every celebration.
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
