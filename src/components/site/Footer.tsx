import type React from "react";
import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock, MessageCircle, Star } from "lucide-react";
import { contact, waLink } from "@/data/site";
import { Logo } from "./Layout";

/* ── Original Brand SVG Icons (No border rings, clean brand styling) ── */
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
        d="M14 12.5h2l.5-2.5h-2.5V8.5c0-.7.3-1.2 1.3-1.2h1.2V5.1c-.6-.1-1.3-.1-2-.1-2.1 0-3.5 1.3-3.5 3.6V10H8.5v2.5H11V19h3v-6.5z"
        fill="#ffffff"
      />
    </svg>
  );
}

function LinkedInIcon({ className = "h-5 w-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-label="LinkedIn">
      <rect width="24" height="24" rx="5" fill="#0A66C2" />
      <path
        d="M7.5 9.5h-2V17h2V9.5zm-1-3a1.15 1.15 0 1 0 0 2.3 1.15 1.15 0 0 0 0-2.3zM18.5 13.2c0-2.2-1.2-3.7-3.2-3.7-1.4 0-2.1.8-2.4 1.4V9.5h-2V17h2v-4.1c0-1.1.4-1.9 1.5-1.9 1 0 1.4.8 1.4 1.9V17h2v-3.8z"
        fill="#ffffff"
      />
    </svg>
  );
}

export function Footer() {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    { to: "/sound-system-rental", label: "Sound Systems & Line Arrays" },
    { to: "/led-wall-rental", label: "P2.5 Curved 4K LED Walls" },
    { to: "/event-solutions", label: "Intelligent DJ & Stage Lights" },
    { to: "/led-tv-rental", label: "LED TV Screens (65\"–85\")" },
    { to: "/projector-rental", label: "High-Lumen Laser Projectors" },
    { to: "/photography", label: "Candid Photography" },
    { to: "/videography", label: "4K Cinema Films & Teasers" },
    { to: "/live-streaming", label: "Multi-Cam Live Streaming" },
  ];

  const companyLinks = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/equipment", label: "Equipment" },
    { to: "/offers", label: "Offers" },
    { to: "/events", label: "Events" },
    { to: "/corporate-events", label: "Corporate" },
    { to: "/wedding-events", label: "Weddings" },
    { to: "/gallery", label: "Gallery" },
    { to: "/contact", label: "Contact" },
  ];

  const cityHubs = [
    { id: "hyderabad", name: "Hyderabad", state: "TS" },
    { id: "bangalore", name: "Bangalore", state: "KA" },
    { id: "mumbai", name: "Mumbai", state: "MH" },
    { id: "chennai", name: "Chennai", state: "TN" },
    { id: "pune", name: "Pune", state: "MH" },
  ];

  return (
    <footer
      className="relative bg-white text-slate-800 border-t border-slate-200/90 select-none"
      aria-label="GK Events Official Footer"
    >
      {/* Delicate Gold Accent Strip along the top edge */}
      <div className="h-[2px] w-full bg-gradient-to-r from-transparent via-amber-500/50 to-transparent" />

      {/* Main Footer Content Grid */}
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6 pt-10 sm:pt-14 pb-10 sm:pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-10">
          
          {/* Column 1: Brand Profile & Clean Social Icons (lg:col-span-4) */}
          <div className="lg:col-span-4 flex flex-col items-start text-left">
            <Link to="/" className="group inline-block mb-3.5">
              <Logo className="h-12 sm:h-14" isDark={false} />
            </Link>

            <p className="text-slate-600 text-sm leading-relaxed max-w-sm">
              India's premier event technology &amp; AV production company. Powering royal weddings,
              corporate summits, music festivals, and live broadcasts with concert-grade sound,
              curved 4K LED walls, and intelligent lighting.
            </p>

            {/* Rating & Trust Pill */}
            <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-amber-50/80 border border-amber-200/80 px-3.5 py-1.5 text-xs font-bold text-amber-900 shadow-xs">
              <div className="flex gap-0.5 text-amber-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-3.5 w-3.5 fill-current" />
                ))}
              </div>
              <span>4.9/5 Rating (1,500+ Shows)</span>
            </div>

            {/* Clean Original Social Icons (No border rings, as requested) */}
            <div className="mt-6">
              <p className="text-[11px] font-bold uppercase tracking-wider text-amber-700 mb-2.5">
                Connect &amp; Explore
              </p>
              <div className="flex items-center gap-3">
                <a
                  href={waLink()}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="transition-transform hover:scale-110 active:scale-95"
                >
                  <WhatsAppIcon className="h-7 w-7" />
                </a>
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                  className="transition-transform hover:scale-110 active:scale-95"
                >
                  <InstagramIcon className="h-7 w-7" />
                </a>
                <a
                  href="https://youtube.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="YouTube"
                  className="transition-transform hover:scale-110 active:scale-95"
                >
                  <YouTubeIcon className="h-7 w-7" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="transition-transform hover:scale-110 active:scale-95"
                >
                  <FacebookIcon className="h-7 w-7" />
                </a>
                <a
                  href="https://linkedin.com"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="transition-transform hover:scale-110 active:scale-95"
                >
                  <LinkedInIcon className="h-7 w-7" />
                </a>
              </div>
            </div>
          </div>

          {/* Column 2: Company Navigation (lg:col-span-2) */}
          <div className="lg:col-span-2 text-left">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.to}
                    className="text-sm font-medium text-slate-600 hover:text-amber-600 hover:translate-x-0.5 transition-all inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Equipment & Services (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left">
            <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">
              Equipment &amp; Services
            </h4>
            <ul className="space-y-2.5">
              {servicesList.map((service) => (
                <li key={service.label}>
                  <Link
                    to={service.to}
                    className="text-sm font-medium text-slate-600 hover:text-amber-600 hover:translate-x-0.5 transition-all inline-block"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Metro Hubs Sub-List */}
            <div className="mt-6 pt-5 border-t border-slate-100">
              <h5 className="font-display text-[11px] font-bold uppercase tracking-[0.2em] text-amber-600 mb-2.5">
                Metro Hubs
              </h5>
              <div className="flex flex-wrap gap-2">
                {cityHubs.map((city) => (
                  <Link
                    key={city.id}
                    to="/$city"
                    params={{ city: city.id }}
                    className="inline-flex items-center gap-1 rounded-full bg-slate-50 border border-slate-200 px-2.5 py-0.5 text-xs font-medium text-slate-700 hover:border-amber-400 hover:text-amber-700 transition-colors"
                  >
                    <span>{city.name}</span>
                    <span className="text-[10px] text-amber-600 font-bold">({city.state})</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Column 4: Contact & 24/7 Booking Desk (lg:col-span-3) */}
          <div className="lg:col-span-3 text-left flex flex-col justify-between">
            <div>
              <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">
                24/7 Booking Desk
              </h4>

              <div className="space-y-3.5">
                <a
                  href={contact.phoneHref}
                  className="flex items-start gap-3 text-slate-700 hover:text-amber-600 transition-colors group"
                >
                  <div className="h-8 w-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                    <Phone className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Central Reservations</p>
                    <p className="text-sm font-bold text-slate-900 group-hover:text-amber-600 transition-colors">
                      {contact.phone}
                    </p>
                  </div>
                </a>

                <a
                  href={`mailto:${contact.email}`}
                  className="flex items-start gap-3 text-slate-700 hover:text-amber-600 transition-colors group"
                >
                  <div className="h-8 w-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0 group-hover:bg-amber-100 transition-colors">
                    <Mail className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Email Inquiries</p>
                    <p className="text-sm font-medium text-slate-800 group-hover:text-amber-600 transition-colors">
                      {contact.email}
                    </p>
                  </div>
                </a>

                <div className="flex items-start gap-3 text-slate-700">
                  <div className="h-8 w-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                    <MapPin className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Location</p>
                    <p className="text-sm font-medium text-slate-800">
                      {contact.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-700">
                  <div className="h-8 w-8 rounded-full bg-amber-50 border border-amber-200 flex items-center justify-center shrink-0">
                    <Clock className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400">Working Hours</p>
                    <p className="text-sm font-medium text-slate-800">
                      Open 7 days · 8 AM – 10 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Chat on WhatsApp Button */}
              <div className="mt-5">
                <a
                  href={waLink("Hi GK Events, I would like to book event equipment.")}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 w-full rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold py-3 px-5 text-sm shadow-[0_6px_20px_rgba(245,158,11,0.28)] transition-all hover:scale-[1.02] active:scale-98"
                >
                  <MessageCircle className="h-4.5 w-4.5" />
                  <span>Chat with Equipment Specialist</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Bottom Copyright Strip */}
      <div className="border-t border-slate-100 bg-white px-4 sm:px-6 py-5">
        <div className="max-w-[1288px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-500">
          <p>© {currentYear} GK Events. All rights reserved.</p>
          <div className="flex items-center gap-4 text-slate-400">
            <Link to="/about" className="hover:text-amber-600 transition-colors">About Us</Link>
            <span>•</span>
            <Link to="/equipment" className="hover:text-amber-600 transition-colors">Equipment Catalogue</Link>
            <span>•</span>
            <Link to="/contact" className="hover:text-amber-600 transition-colors">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
