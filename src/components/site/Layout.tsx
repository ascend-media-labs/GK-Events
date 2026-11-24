import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { ChevronDown, Mail, MapPin, Menu, MessageCircle, Phone, X } from "lucide-react";
import logo from "@/assets/gk-logo.png";
import { Button } from "@/components/ui/button";
import { contact, mainNav, serviceNav, waLink } from "@/data/site";

export function Logo({ className = "h-12" }: { className?: string }) {
  return <img src={logo} alt="GK Events logo" className={`${className} w-auto mix-blend-lighten`} />;
}

export function Header() {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container-x flex h-18 items-center justify-between gap-4">
        <Link to="/" className="shrink-0" onClick={() => setOpen(false)}><Logo className="h-14" /></Link>
        <nav className="hidden items-center gap-1 lg:flex">
          {mainNav.slice(0, 3).map((n) => <NavLink key={n.to} {...n} />)}
          <div className="group relative">
            <button className="flex items-center gap-1 rounded-full px-3 py-2 text-sm font-semibold text-muted-foreground hover:text-foreground">
              Services <ChevronDown className="h-4 w-4" />
            </button>
            <div className="invisible absolute left-0 top-full w-64 translate-y-2 rounded-2xl glass p-2 opacity-0 transition group-hover:visible group-hover:translate-y-0 group-hover:opacity-100">
              {serviceNav.map((s) => (
                <Link key={s.to} to={s.to} className="block rounded-xl px-3 py-2 text-sm text-muted-foreground hover:bg-secondary hover:text-primary">{s.label}</Link>
              ))}
            </div>
          </div>
          {mainNav.slice(3).map((n) => <NavLink key={n.to} {...n} />)}
        </nav>
        <div className="flex items-center gap-2">
          <a href={contact.phoneHref} className="hidden items-center gap-2 text-sm font-bold text-primary xl:flex"><Phone className="h-4 w-4" />{contact.phone}</a>
          <Button asChild variant="hero" className="hidden rounded-full sm:inline-flex"><Link to="/contact">Get a Quote</Link></Button>
          <button aria-label="Open menu" className="rounded-full p-2 lg:hidden" onClick={() => setOpen(!open)}>
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      {open && (
        <div className="max-h-[calc(100vh-4.5rem)] overflow-y-auto border-t border-border bg-background lg:hidden">
          <div className="container-x grid gap-1 py-4">
            {[...mainNav, ...serviceNav].map((n) => (
              <Link key={n.to} to={n.to} onClick={() => setOpen(false)} activeOptions={{ exact: true }}
                activeProps={{ className: "text-primary" }}
                className="rounded-xl px-3 py-3 font-semibold hover:bg-secondary">{n.label}</Link>
            ))}
            <div className="mt-3 grid grid-cols-2 gap-2">
              <Button asChild variant="glass" size="lg" className="rounded-full"><a href={contact.phoneHref}><Phone />Call</a></Button>
              <Button asChild variant="whatsapp" size="lg" className="rounded-full"><a href={waLink()} target="_blank" rel="noreferrer"><MessageCircle />WhatsApp</a></Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function NavLink({ to, label }: { to: string; label: string }) {
  return (
    <Link to={to} activeOptions={{ exact: true }} activeProps={{ className: "text-primary" }}
      inactiveProps={{ className: "text-muted-foreground" }}
      className="rounded-full px-3 py-2 text-sm font-semibold hover:text-foreground">{label}</Link>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container-x grid gap-10 py-16 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo className="h-24" />
          <p className="mt-4 text-sm text-muted-foreground">Premium AV equipment rental, photography, films and live event production — with blessings, for every celebration.</p>
        </div>
        <FooterCol title="Company" items={mainNav} />
        <FooterCol title="Services" items={serviceNav} />
        <div>
          <h4 className="eyebrow mb-4">Contact</h4>
          <ul className="space-y-3 text-sm text-muted-foreground">
            <li><a href={contact.phoneHref} className="flex gap-2 hover:text-primary"><Phone className="h-4 w-4 shrink-0" />{contact.phone}</a></li>
            <li><a href={`mailto:${contact.email}`} className="flex gap-2 hover:text-primary"><Mail className="h-4 w-4 shrink-0" />{contact.email}</a></li>
            <li className="flex gap-2"><MapPin className="h-4 w-4 shrink-0" />{contact.city}</li>
            <li>{contact.hours}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border py-6 text-center text-xs text-muted-foreground">© {new Date().getFullYear()} GK Events. All rights reserved.</div>
    </footer>
  );
}

function FooterCol({ title, items }: { title: string; items: { to: string; label: string }[] }) {
  return (
    <div>
      <h4 className="eyebrow mb-4">{title}</h4>
      <ul className="space-y-2 text-sm">
        {items.map((i) => <li key={i.to}><Link to={i.to} className="text-muted-foreground hover:text-primary">{i.label}</Link></li>)}
      </ul>
    </div>
  );
}

export function FloatingButtons() {
  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-3">
      <a href={contact.phoneHref} aria-label="Call GK Events" className="grid h-14 w-14 place-items-center rounded-full bg-accent text-accent-foreground shadow-blue transition hover:scale-110"><Phone /></a>
      <a href={waLink()} target="_blank" rel="noreferrer" aria-label="WhatsApp GK Events" className="grid h-14 w-14 place-items-center rounded-full bg-whatsapp text-primary-foreground shadow-gold transition hover:scale-110"><MessageCircle /></a>
    </div>
  );
}
