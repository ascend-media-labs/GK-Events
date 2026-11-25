import type React from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { contact, waLink } from "@/data/site";
import { Logo } from "./Layout";

/* ── Original Brand SVG Icons ── */
function InstagramIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Instagram">
      <defs>
        <radialGradient id="ig-grad" cx="20%" cy="100%" r="130%">
          <stop offset="0%" stopColor="#fdf497" />
          <stop offset="5%" stopColor="#fdf497" />
          <stop offset="45%" stopColor="#fd5949" />
          <stop offset="60%" stopColor="#d6249f" />
          <stop offset="90%" stopColor="#285AEB" />
        </radialGradient>
      </defs>
      <rect width="24" height="24" rx="6" fill="url(#ig-grad)" />
      <rect x="5.5" y="5.5" width="13" height="13" rx="3.5" stroke="#ffffff" strokeWidth="1.7" />
      <circle cx="12" cy="12" r="3.2" stroke="#ffffff" strokeWidth="1.7" />
      <circle cx="15.8" cy="8.2" r="0.9" fill="#ffffff" />
    </svg>
  );
}

function WhatsAppIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="WhatsApp">
      <circle cx="12" cy="12" r="11" fill="#25D366" />
      <path
        d="M17.2 14.7c-.3-.2-1.8-.9-2.1-1-.3-.1-.5-.2-.7.2s-.8 1-1 1.2c-.2.2-.4.2-.7.1-.3-.2-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.7.1-.1.3-.3.4-.5.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5s-.7-1.7-1-2.3c-.3-.6-.6-.5-.8-.5h-.7c-.2 0-.7.1-1 .5-.4.4-1.4 1.4-1.4 3.4s1.4 3.9 1.6 4.2c.2.3 2.8 4.3 6.8 6 1 .4 1.7.7 2.3.9.9.3 1.8.3 2.5.2.8-.1 2.5-1 2.8-2 .4-1 .4-1.8.3-2 0-.2-.3-.3-.6-.4z"
        fill="#ffffff"
      />
    </svg>
  );
}

function YouTubeIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="YouTube">
      <rect width="24" height="24" rx="6" fill="#FF0000" />
      <path
        d="M19.2 8.4a1.8 1.8 0 0 0-1.3-1.3C16.8 6.8 12 6.8 12 6.8s-4.8 0-5.9.3a1.8 1.8 0 0 0-1.3 1.3C4.5 9.5 4.5 12 4.5 12s0 2.5.3 3.6a1.8 1.8 0 0 0 1.3 1.3c1.1.3 5.9.3 5.9.3s4.8 0 5.9-.3a1.8 1.8 0 0 0 1.3-1.3c.3-1.1.3-3.6.3-3.6s0-2.5-.3-3.6z"
        fill="#ffffff"
      />
      <polygon points="10.5,9.5 14.5,12 10.5,14.5" fill="#FF0000" />
    </svg>
  );
}

function FacebookIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="Facebook">
      <circle cx="12" cy="12" r="11" fill="#1877F2" />
      <path
        d="M14.5 12.3h-2v6.7h-2.8v-6.7H8.2V9.9h1.5V8.2c0-2.1 1.2-3.2 3.1-3.2.9 0 1.8.1 1.8.1v2h-1c-1 0-1.4.6-1.4 1.3v1.5h2.3l-.4 2.4z"
        fill="#ffffff"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="LinkedIn">
      <rect width="24" height="24" rx="6" fill="#0A66C2" />
      <path
        d="M7.8 9.3H5.3v7.4h2.5V9.3zM6.6 5.8c-.8 0-1.4.6-1.4 1.4s.6 1.4 1.4 1.4 1.4-.6 1.4-1.4-.6-1.4-1.4-1.4zM18.7 12.8c0-2.4-1.3-3.5-3-3.5-1.4 0-2 .8-2.3 1.4V9.3h-2.5v7.4h2.5v-4.1c0-1.1.2-2.1 1.6-2.1s1.4 1.3 1.4 2.2v4h2.5v-3.9z"
        fill="#ffffff"
      />
    </svg>
  );
}

/* ── Original AV Service Icons ── */
function SoundArrayIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="4" y="2" width="12" height="16" rx="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="6.5" r="2.2" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="10" cy="13" r="3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="10" cy="13" r="1.2" fill="currentColor" />
    </svg>
  );
}

function LedWallIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="2" y="3" width="16" height="11" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7.3 3v11M12.6 3v11M2 8.5h16" stroke="currentColor" strokeWidth="1.1" strokeDasharray="1 1" />
      <path d="M6 17h8M10 14v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function MovingHeadIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M5 3h10M10 3v2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="6.5" y="5" width="7" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6.5 11l-3 6h13l-3-6" stroke="currentColor" strokeWidth="1.2" />
      <circle cx="10" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}

function LedTvIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="2" y="4" width="16" height="10" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M6 16l2-2h4l2 2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function ProjectorIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="2" y="7" width="14" height="6.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="12" cy="10.2" r="2" stroke="currentColor" strokeWidth="1.2" />
      <path d="M16 8.5l2.5-1.5v6.5L16 12" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function CameraIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <path d="M7 4h6l1.5 2.5H17a1.5 1.5 0 0 1 1.5 1.5v8a1.5 1.5 0 0 1-1.5 1.5H3A1.5 1.5 0 0 1 1.5 16V8A1.5 1.5 0 0 1 3 6.5h2.5L7 4z" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="10" cy="11.5" r="3" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function CineVideoIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <rect x="2" y="6" width="12" height="8.5" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M14 9l4-2.5v7L14 11M5 3.5h6M7 3.5v2.5M9 3.5v2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function BroadcastIcon({ className = "h-4 w-4" }: { className?: string }) {
  return (
    <svg viewBox="0 0 20 20" fill="none" className={className}>
      <circle cx="10" cy="10" r="2" fill="currentColor" />
      <path d="M6.5 6.5a5 5 0 0 0 0 7M13.5 6.5a5 5 0 0 1 0 7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M4 4a8.5 8.5 0 0 0 0 12M16 4a8.5 8.5 0 0 1 0 12" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

/* ── 28-Bar Audio Spectrum Equalizer Component ── */
function AudioEqualizerSpectrum() {
  const bars = [
    { anim: "anim-eq-1", delay: "0ms", height: "45%" },
    { anim: "anim-eq-2", delay: "120ms", height: "70%" },
    { anim: "anim-eq-3", delay: "40ms", height: "85%" },
    { anim: "anim-eq-4", delay: "200ms", height: "60%" },
    { anim: "anim-eq-1", delay: "160ms", height: "92%" },
    { anim: "anim-eq-3", delay: "80ms", height: "75%" },
    { anim: "anim-eq-2", delay: "240ms", height: "98%" },
    { anim: "anim-eq-4", delay: "60ms", height: "55%" },
    { anim: "anim-eq-1", delay: "180ms", height: "80%" },
    { anim: "anim-eq-3", delay: "300ms", height: "90%" },
    { anim: "anim-eq-2", delay: "100ms", height: "65%" },
    { anim: "anim-eq-4", delay: "220ms", height: "100%" },
    { anim: "anim-eq-1", delay: "50ms", height: "85%" },
    { anim: "anim-eq-3", delay: "140ms", height: "95%" },
    { anim: "anim-eq-2", delay: "280ms", height: "70%" },
    { anim: "anim-eq-4", delay: "90ms", height: "88%" },
    { anim: "anim-eq-1", delay: "210ms", height: "62%" },
    { anim: "anim-eq-3", delay: "130ms", height: "94%" },
    { anim: "anim-eq-2", delay: "270ms", height: "80%" },
    { anim: "anim-eq-4", delay: "70ms", height: "58%" },
    { anim: "anim-eq-1", delay: "190ms", height: "88%" },
    { anim: "anim-eq-3", delay: "310ms", height: "76%" },
    { anim: "anim-eq-2", delay: "110ms", height: "95%" },
    { anim: "anim-eq-4", delay: "230ms", height: "68%" },
  ];

  return (
    <div className="flex items-end gap-1 sm:gap-1.5 h-7 sm:h-9 px-3 py-1 bg-black/40 rounded-xl border border-white/10 backdrop-blur-sm">
      {bars.map((bar, i) => (
        <span
          key={i}
          style={{ animationDelay: bar.delay }}
          className={`w-[2.5px] sm:w-[3.5px] rounded-full bg-gradient-to-t from-emerald-400 via-amber-400 to-rose-500 ${bar.anim}`}
        />
      ))}
    </div>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { to: "/sound-system-rental", label: "Sound Systems & Line Arrays", icon: SoundArrayIcon },
    { to: "/led-wall-rental", label: "P2.5 Curved 4K LED Walls", icon: LedWallIcon },
    { to: "/event-solutions", label: "Intelligent DJ & Stage Lights", icon: MovingHeadIcon },
    { to: "/led-tv-rental", label: "LED TV Screens (65\"–85\")", icon: LedTvIcon },
    { to: "/projector-rental", label: "High-Lumen Laser Projectors", icon: ProjectorIcon },
    { to: "/photography", label: "Candid Photography", icon: CameraIcon },
    { to: "/videography", label: "4K Cinema Films & Teasers", icon: CineVideoIcon },
    { to: "/live-streaming", label: "Multi-Cam Live Streaming", icon: BroadcastIcon },
  ];

  const cityHubs = [
    { id: "hyderabad", name: "Hyderabad" },
    { id: "bangalore", name: "Bangalore" },
    { id: "mumbai", name: "Mumbai" },
    { id: "chennai", name: "Chennai" },
    { id: "pune", name: "Pune" },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-[#070811] text-slate-200 border-t border-amber-500/20 select-none"
      aria-label="GK Events Official Footer"
    >
      {/* ── LIVE AUDIO SOUND EQUALIZER STRIP ── */}
      <div className="relative z-20 border-b border-white/10 bg-[#0e101c]/80 backdrop-blur-md px-4 py-2.5">
        <div className="max-w-[1288px] mx-auto flex items-center justify-center gap-3">
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest hidden sm:inline">
            SPECTRUM
          </span>
          <AudioEqualizerSpectrum />
          <span className="text-[10px] font-mono text-emerald-400/90 font-bold hidden sm:inline">
            +2.8 dB
          </span>
        </div>
      </div>

      {/* ── 4. MAIN FOOTER CONTENT GRID ── */}
      <div className="relative z-20 max-w-[1288px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-8 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand Profile & Original Socials (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            
            {/* Dark Logo with Gold Emblem */}
            <Link to="/" className="group inline-block mb-3.5">
              <Logo className="h-12 sm:h-14" isDark={true} />
            </Link>

            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-sm mb-6">
              India&apos;s premier event technology &amp; AV production company. Powering royal weddings,
              corporate summits, music festivals, and live broadcasts with concert-grade sound, 4K LED walls,
              and intelligent stage lighting.
            </p>

            {/* Original Social Media Icons Row */}
            <div>
              <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2.5">
                CONNECT &amp; EXPLORE
              </p>
              <div className="flex items-center gap-3.5">
                
                {/* WhatsApp */}
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Chat on WhatsApp"
                  className="transition-transform duration-200 hover:scale-115 inline-flex items-center justify-center"
                >
                  <WhatsAppIcon className="h-7 w-7" />
                </a>

                {/* Instagram */}
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Follow GK Events on Instagram"
                  className="transition-transform duration-200 hover:scale-115 inline-flex items-center justify-center"
                >
                  <InstagramIcon className="h-7 w-7" />
                </a>

                {/* YouTube */}
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Watch Event Productions on YouTube"
                  className="transition-transform duration-200 hover:scale-115 inline-flex items-center justify-center"
                >
                  <YouTubeIcon className="h-7 w-7" />
                </a>

                {/* Facebook */}
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GK Events on Facebook"
                  className="transition-transform duration-200 hover:scale-115 inline-flex items-center justify-center"
                >
                  <FacebookIcon className="h-7 w-7" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="GK Events Corporate on LinkedIn"
                  className="transition-transform duration-200 hover:scale-115 inline-flex items-center justify-center"
                >
                  <LinkedInIcon className="h-7 w-7" />
                </a>

              </div>
            </div>

          </div>

          {/* Column 2: Event Equipment & AV Services (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-amber-400 animate-pulse" />
              <h3 className="font-display text-xs font-black uppercase tracking-[0.2em] text-amber-400">
                EQUIPMENT &amp; SERVICES
              </h3>
            </div>

            <ul className="space-y-2">
              {servicesList.map((svc) => (
                <li key={svc.to}>
                  <Link
                    to={svc.to}
                    className="group flex items-center text-xs sm:text-[13px] text-slate-300 hover:text-amber-300 py-1 transition-colors"
                  >
                    <span className="flex items-center gap-2.5">
                      <svc.icon className="h-4 w-4 text-amber-500/80 group-hover:text-amber-400 transition-colors shrink-0" />
                      <span>{svc.label}</span>
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Event Solutions & Metro Hubs (lg:col-span-2) */}
          <div className="lg:col-span-2 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-pulse" />
              <h3 className="font-display text-xs font-black uppercase tracking-[0.2em] text-cyan-400">
                METRO HUBS
              </h3>
            </div>

            <div className="space-y-2.5 mb-6">
              {cityHubs.map((city) => (
                <Link
                  key={city.id}
                  to="/$city"
                  params={{ city: city.id }}
                  className="group flex items-center text-xs sm:text-[13px] text-slate-300 hover:text-cyan-300 py-0.5 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform" />
                    <span className="font-semibold">{city.name}</span>
                  </span>
                </Link>
              ))}
            </div>

            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 mb-2">
              EVENT SOLUTIONS
            </p>
            <ul className="space-y-1.5 text-xs text-slate-400">
              <li>
                <Link to="/wedding-events" className="hover:text-amber-300 transition-colors">
                  Weddings &amp; Sangeet
                </Link>
              </li>
              <li>
                <Link to="/corporate-events" className="hover:text-amber-300 transition-colors">
                  Corporate Summits
                </Link>
              </li>
              <li>
                <Link to="/offers" className="hover:text-amber-300 transition-colors">
                  Seasonal Packages
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-amber-300 transition-colors">
                  About GK Legacy
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: 24/7 Hotline & Direct Booking (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left">
            <div className="flex items-center gap-2 mb-4">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <h3 className="font-display text-xs font-black uppercase tracking-[0.2em] text-emerald-400">
                24/7 BOOKING DESK
              </h3>
            </div>

            {/* Phone Hotline Card */}
            <a
              href={contact.phoneHref}
              className="group mb-3 block rounded-2xl border border-white/10 bg-white/5 p-3.5 transition-all duration-300 hover:border-amber-400/50 hover:bg-white/10 hover:shadow-[0_8px_25px_rgba(245,158,11,0.15)]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 to-orange-600 text-white shadow-md group-hover:scale-105 transition-transform">
                  <Phone className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-amber-400">
                    CENTRAL RESERVATIONS
                  </span>
                  <span className="text-sm font-black text-white group-hover:text-amber-300 transition-colors">
                    {contact.phone}
                  </span>
                </div>
              </div>
            </a>

            {/* Email Card */}
            <a
              href={`mailto:${contact.email}`}
              className="group mb-3 block rounded-2xl border border-white/10 bg-white/5 p-3.5 transition-all duration-300 hover:border-cyan-400/50 hover:bg-white/10"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-800 text-cyan-400 border border-cyan-400/30 group-hover:scale-105 transition-transform">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-mono font-bold uppercase tracking-wider text-cyan-400">
                    EMAIL INQUIRIES
                  </span>
                  <span className="text-xs sm:text-[13px] font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {contact.email}
                  </span>
                </div>
              </div>
            </a>

            {/* Dispatch Hours & Hub Location */}
            <div className="space-y-1.5 text-xs text-slate-400 pt-2">
              <div className="flex items-center gap-2">
                <Clock className="h-3.5 w-3.5 text-amber-400 shrink-0" />
                <span>{contact.hours} (Live Dispatch)</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-cyan-400 shrink-0" />
                <span>Warehouses in HYD, BLR, BOM, MAA &amp; PNQ</span>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* ── 5. BOTTOM COPYRIGHT & LEGAL BAR ── */}
      <div className="relative z-20 border-t border-white/10 bg-black/60 px-4 sm:px-6 py-5">
        <div className="max-w-[1288px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          
          <div className="flex flex-col sm:flex-row items-center gap-2 text-xs text-slate-400">
            <span>&copy; {currentYear} GK Events &amp; Productions. All rights reserved.</span>
            <span className="hidden sm:inline text-slate-600">&bull;</span>
            <span className="text-[11px] text-slate-400">
              Concert Audio &bull; 4K LED Walls &bull; Stage Lighting &bull; Live Broadcast
            </span>
          </div>

          <div className="flex items-center gap-4 text-xs text-slate-400 font-medium">
            <Link to="/contact" className="hover:text-amber-400 transition-colors">
              Support
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link to="/equipment" className="hover:text-amber-400 transition-colors">
              Equipment Catalogue
            </Link>
            <span className="text-slate-700">&bull;</span>
            <Link to="/offers" className="hover:text-amber-400 transition-colors">
              Deals &amp; Packages
            </Link>
          </div>

        </div>
      </div>

    </footer>
  );
}
