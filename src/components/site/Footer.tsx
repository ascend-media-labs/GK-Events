import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Phone } from "lucide-react";
import { contact, mainNav, serviceNav } from "@/data/site";
import { Logo } from "./Layout";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200/90 bg-white text-slate-800 select-none" aria-label="GK Events Footer">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6 py-12 sm:py-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
        {/* Column 1: Logo & Mission */}
        <div>
          <Link to="/" className="inline-block">
            <Logo className="h-12 sm:h-14" isDark={false} />
          </Link>
          <p className="mt-4 text-sm text-slate-600 leading-relaxed max-w-sm">
            Premium event equipment rental, photography, films and live event production — with blessings, for every celebration.
          </p>
        </div>

        {/* Column 2: Company */}
        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">
            Company
          </h4>
          <ul className="space-y-2.5 text-sm">
            {mainNav.map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="text-slate-600 hover:text-amber-700 transition-colors">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 3: Services */}
        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">
            Services
          </h4>
          <ul className="space-y-2.5 text-sm">
            {serviceNav.map((i) => (
              <li key={i.to}>
                <Link to={i.to} className="text-slate-600 hover:text-amber-700 transition-colors">
                  {i.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Column 4: Contact */}
        <div>
          <h4 className="font-display text-xs font-bold uppercase tracking-[0.2em] text-amber-600 mb-4">
            Contact
          </h4>
          <ul className="space-y-3 text-sm text-slate-600">
            <li>
              <a href={contact.phoneHref} className="flex items-center gap-2 hover:text-amber-700 transition-colors">
                <Phone className="h-4 w-4 shrink-0 text-amber-600" />
                <span>{contact.phone}</span>
              </a>
            </li>
            <li>
              <a href={`mailto:${contact.email}`} className="flex items-center gap-2 hover:text-amber-700 transition-colors">
                <Mail className="h-4 w-4 shrink-0 text-amber-600" />
                <span>{contact.email}</span>
              </a>
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 shrink-0 text-amber-600" />
              <span>{contact.city}</span>
            </li>
            <li className="text-slate-500 text-xs pl-6">{contact.hours}</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-slate-100 py-6 text-center text-xs text-slate-500">
        © {currentYear} GK Events. All rights reserved.
      </div>
    </footer>
  );
}
