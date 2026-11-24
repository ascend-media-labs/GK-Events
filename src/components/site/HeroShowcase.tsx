import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { waLink } from "@/data/site";
import {
  Projector,
  Speaker,
  Mic,
  Tv,
  Volume2,
  Grid,
  PackageCheck,
  ChevronRight,
  Sparkles,
} from "lucide-react";

const CATEGORIES = [
  {
    name: "Projectors & Screens",
    shortName: "Projectors",
    to: "/equipment",
    icon: Projector,
  },
  {
    name: "Sound Systems",
    shortName: "Sound Systems",
    to: "/equipment",
    icon: Volume2,
  },
  {
    name: "Microphones",
    shortName: "Microphones",
    to: "/equipment",
    icon: Mic,
  },
  {
    name: "Televisions",
    shortName: "Televisions",
    to: "/equipment",
    icon: Tv,
  },
  {
    name: "Speakers",
    shortName: "Speakers",
    to: "/equipment",
    icon: Speaker,
  },
  {
    name: "LED Screens",
    shortName: "LED Screens",
    to: "/equipment",
    icon: Grid,
  },
  {
    name: "Combo Packages",
    shortName: "Combo Packages",
    to: "/offers",
    icon: PackageCheck,
  },
];

export function HeroShowcase() {
  return (
    <section className="relative w-full pt-2 sm:pt-4 pb-6 sm:pb-8 bg-white">
      <div className="max-w-7xl mx-auto px-3 sm:px-6">
        {/* Main Hero Card */}
        <div
          className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-200/80 shadow-[0_20px_50px_rgba(15,23,42,0.06)] bg-[#eef5ff]"
          style={{
            backgroundImage: "url('/images/hero-pedestal.webp')",
            backgroundPosition: "60% 54%",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          {/* Subtle responsive overlay for mobile text readability while keeping pedestal visible */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#eef5ff]/95 via-[#eef5ff]/80 to-transparent lg:hidden pointer-events-none" />

          {/* Hero Content Shell */}
          <div className="relative z-10 flex flex-col justify-between min-h-[480px] sm:min-h-[520px] lg:min-h-[560px] p-6 sm:p-10 lg:p-14">
            {/* Top / Left Copy & CTAs */}
            <div className="max-w-xl flex flex-col items-start gap-4 sm:gap-6 pt-2">
              {/* Premium Eyebrow Pill */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-100/90 text-blue-700 text-xs sm:text-sm font-bold tracking-wide border border-blue-200/80 shadow-xs">
                <Sparkles className="h-3.5 w-3.5 text-blue-600" />
                <span>Premium AV Rentals</span>
              </div>

              {/* Signature Headline with hand-drawn SVG highlights */}
              <h1 className="font-display text-3xl sm:text-4xl md:text-5xl lg:text-[3.4rem] font-black text-slate-950 leading-[1.08] tracking-tight">
                “Professional{" "}
                <span className="relative inline-block text-emerald-600 px-2.5 py-0.5">
                  AV equipment
                  <svg
                    className="pointer-events-none absolute -inset-x-2 -inset-y-1.5 w-[calc(100%+16px)] h-[calc(100%+12px)]"
                    viewBox="0 0 100 100"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M5,50 C5,15 95,15 95,50 C95,85 8,85 5,55 C4,35 12,25 22,22"
                      stroke="#10b981"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>{" "}
                for Rent —<br className="hidden sm:inline" /> delivered &{" "}
                <span className="relative inline-block text-blue-600 pb-1 px-1">
                  setup
                  <svg
                    className="pointer-events-none absolute -bottom-1 left-0 w-full h-3"
                    viewBox="0 0 100 10"
                    preserveAspectRatio="none"
                    fill="none"
                  >
                    <path
                      d="M 2,8 C 30,5 70,9 98,6"
                      stroke="#2563eb"
                      strokeWidth="3.5"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                ”
              </h1>

              {/* Dual Action CTAs */}
              <div className="flex flex-wrap items-center gap-3.5 pt-1">
                <Button
                  asChild
                  className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-6 text-sm sm:text-base shadow-[0_4px_16px_rgba(37,99,235,0.35)] hover:shadow-[0_6px_22px_rgba(37,99,235,0.5)] transition-all hover:scale-105 active:scale-95"
                >
                  <a
                    href={waLink("Hi GK Events, I'd like to book AV equipment for my event.")}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Book Now
                  </a>
                </Button>
                <Button
                  asChild
                  variant="outline"
                  className="rounded-2xl bg-white hover:bg-slate-50 text-slate-800 border border-slate-300/90 font-bold px-7 py-6 text-sm sm:text-base shadow-sm hover:shadow transition-all hover:scale-105 active:scale-95"
                >
                  <Link to="/equipment">
                    View Equipment
                  </Link>
                </Button>
              </div>
            </div>

            {/* Desktop Clickable Hotspots over the 7 category tiles rendered in the pedestal graphic */}
            <div className="hidden lg:grid grid-cols-7 gap-3 w-full max-w-4xl mx-auto mt-auto pt-6">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.to}
                  title={`Browse ${cat.name}`}
                  className="h-24 rounded-2xl border border-transparent hover:border-blue-400/60 hover:bg-white/40 backdrop-blur-xs transition-all duration-200 group flex items-end justify-center pb-2"
                >
                  <span className="sr-only">{cat.name}</span>
                </Link>
              ))}
            </div>

            {/* Mobile / Tablet Horizontal Category Tiles Strip */}
            <div className="lg:hidden mt-8 pt-4 border-t border-blue-200/40">
              <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2">
                Quick Equipment Categories
              </p>
              <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                {CATEGORIES.map((cat) => (
                  <Link
                    key={cat.name}
                    to={cat.to}
                    className="flex items-center gap-2 shrink-0 rounded-xl bg-white/90 backdrop-blur-md border border-slate-200/80 px-3 py-2 text-xs font-semibold text-slate-800 shadow-xs hover:border-blue-400 hover:text-blue-700 transition-colors"
                  >
                    <cat.icon className="h-4 w-4 text-blue-600" />
                    <span>{cat.shortName}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
