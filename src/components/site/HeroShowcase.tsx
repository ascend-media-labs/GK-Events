import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { waLink, images } from "@/data/site";
import {
  Projector,
  Speaker,
  Mic,
  Tv,
  Volume2,
  Grid,
  PackageCheck,
  Sparkles,
  Lightbulb,
  Box,
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
    <section className="relative w-full pt-3 pb-4 sm:pt-4 sm:pb-6 bg-white" aria-label="Hero">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        {/* Main Hero Card */}
        <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-blue-100/80 shadow-[0_20px_50px_rgba(15,23,42,0.06)] bg-gradient-to-br from-[#eff6ff] via-[#f8fafc] to-[#e0f2fe] p-6 sm:p-9 lg:p-12">
          {/* Studio Ambient Volumetric Spotlights & Overhead Beam Flares */}
          <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-blue-400/15 blur-3xl" />
          <div className="pointer-events-none absolute top-10 right-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-white/70 via-blue-50/40 to-transparent" />

          {/* Grid Layout: Left Content & Right 3D Pedestal Stage */}
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center min-h-[460px] lg:min-h-[500px]">
            {/* Left Content (5 cols) */}
            <div className="lg:col-span-5 flex flex-col items-start gap-3 sm:gap-4 max-w-xl">
              {/* Eyebrow Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/90 text-blue-700 text-xs sm:text-[13px] font-bold tracking-wide border border-blue-200/70 shadow-xs mb-1 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-amber-500" />
                <span>GK Events · Premium Rentals</span>
              </div>

              {/* Signature Headline with hand-drawn SVG highlights */}
              <h1 className="font-display text-[2.2rem] sm:text-[2.7rem] md:text-[3.2rem] lg:text-[3.4rem] font-extrabold text-slate-900 leading-[1.05] tracking-tight max-w-[13ch]">
                “Professional{" "}
                <span className="relative inline-block text-emerald-600 px-2.5">
                  GK Events
                  <svg
                    className="pointer-events-none absolute -inset-x-2.5 -inset-y-1.5 w-[calc(100%+20px)] h-[calc(100%+12px)]"
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
                Equipment for Rent —<br />
                delivered &amp;<br />
                <span className="relative inline-block text-blue-600 pb-1">
                  setup
                  <svg
                    className="pointer-events-none absolute -bottom-1.5 -left-1 w-[104%] h-2.5"
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

              {/* Action CTAs */}
              <div className="flex items-center gap-3.5 pt-2">
                <Button
                  asChild
                  className="rounded-2xl bg-blue-600 hover:bg-blue-700 text-white font-semibold px-7 py-5 text-sm sm:text-base shadow-[0_4px_14px_rgba(37,99,235,0.28)] transition-all hover:scale-105 active:scale-95"
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
                  className="rounded-2xl bg-white hover:bg-slate-50 text-slate-900 border border-slate-300/80 font-semibold px-7 py-5 text-sm sm:text-base shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow transition-all hover:scale-105 active:scale-95"
                >
                  <Link to="/equipment">
                    View Equipment
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right: Custom GK Events 3D Pedestal Stage (7 cols) */}
            <div className="lg:col-span-7 relative w-full h-[360px] sm:h-[400px] lg:h-[440px] flex items-end justify-center">
              {/* Studio Stage Floor Shadow */}
              <div className="absolute bottom-2 inset-x-4 h-12 bg-radial from-slate-400/25 via-blue-900/10 to-transparent blur-xl rounded-full" />

              {/* 3D Cylindrical Pedestals & Equipment Arrangement */}
              <div className="relative w-full h-full flex items-end justify-center">

                {/* 1. Center Raised Pedestal: Curved LED Wall Screen */}
                <div className="absolute left-[20%] sm:left-[24%] bottom-[50px] sm:bottom-[65px] z-10 flex flex-col items-center">
                  {/* Equipment: Curved LED Wall Screen with High-Res Visual */}
                  <div className="relative w-48 sm:w-60 md:w-68 rounded-xl overflow-hidden border-2 border-slate-800 shadow-[0_16px_36px_rgba(0,0,0,0.25)] bg-slate-950 transition-transform duration-300 hover:scale-105">
                    <img
                      src={images.services.ledWall}
                      alt="Curved LED Wall"
                      className="w-full h-28 sm:h-36 object-cover"
                    />
                    {/* Glowing LED edge & Truss indicator */}
                    <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-1 text-center">
                      <span className="text-[9px] font-bold text-blue-300 uppercase tracking-wider">
                        P2.5 Curved LED Wall
                      </span>
                    </div>
                  </div>

                  {/* 3D Cylinder Pedestal Base */}
                  <div className="relative w-40 sm:w-52 h-16 sm:h-20 mt-1">
                    <div className="absolute top-0 inset-x-0 h-7 rounded-[50%] bg-gradient-to-r from-blue-100 via-white to-blue-200 border border-white shadow-inner" />
                    <div className="absolute top-3.5 inset-x-0 bottom-0 rounded-b-3xl bg-gradient-to-r from-slate-200 via-blue-100 to-slate-300 shadow-md" />
                  </div>
                </div>

                {/* 2. Left Pedestal: Concert PA Speaker & Subwoofer */}
                <div className="absolute left-[2%] sm:left-[5%] bottom-[20px] sm:bottom-[28px] z-20 flex flex-col items-center">
                  {/* Equipment: Pro PA Speaker */}
                  <div className="relative w-28 sm:w-34 rounded-xl overflow-hidden border border-slate-700/80 shadow-[0_12px_28px_rgba(0,0,0,0.22)] bg-slate-900 transition-transform duration-300 hover:scale-105">
                    <img
                      src={images.services.sound}
                      alt="PA Concert Speaker"
                      className="w-full h-36 sm:h-44 object-cover"
                    />
                    <div className="absolute bottom-1 inset-x-0 text-center bg-black/70 py-0.5">
                      <span className="text-[8.5px] font-bold text-amber-400 uppercase tracking-wide">
                        Concert Audio
                      </span>
                    </div>
                  </div>

                  {/* 3D Cylinder Pedestal Base */}
                  <div className="relative w-28 sm:w-34 h-12 sm:h-16 mt-1">
                    <div className="absolute top-0 inset-x-0 h-6 rounded-[50%] bg-gradient-to-r from-blue-100 via-white to-blue-200 border border-white shadow-inner" />
                    <div className="absolute top-3 inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-r from-slate-200 via-blue-100 to-slate-300 shadow-md" />
                  </div>
                </div>

                {/* 3. Front Center Pedestal: Laser 4K Projector */}
                <div className="absolute left-[38%] sm:left-[42%] bottom-[6px] sm:bottom-[10px] z-30 flex flex-col items-center">
                  {/* Equipment: 4K Laser Projector */}
                  <div className="relative w-32 sm:w-40 rounded-xl overflow-hidden border border-slate-300 bg-white p-1.5 shadow-[0_12px_30px_rgba(0,0,0,0.18)] transition-transform duration-300 hover:scale-105">
                    <img
                      src={images.services.projector}
                      alt="4K Laser Projector"
                      className="w-full h-18 sm:h-22 object-cover rounded-lg"
                    />
                    {/* Glowing blue projector lens badge */}
                    <div className="absolute -top-1.5 -right-1.5 flex h-5 w-5 items-center justify-center rounded-full bg-blue-600 text-white shadow-sm">
                      <Sparkles className="h-3 w-3" />
                    </div>
                    <div className="mt-1 text-center">
                      <span className="text-[8.5px] font-extrabold text-blue-700 uppercase tracking-wide">
                        Laser 4K Projector
                      </span>
                    </div>
                  </div>

                  {/* 3D Cylinder Pedestal Base */}
                  <div className="relative w-32 sm:w-40 h-10 sm:h-12 mt-1">
                    <div className="absolute top-0 inset-x-0 h-5 rounded-[50%] bg-gradient-to-r from-blue-50 via-white to-blue-150 border border-white shadow-inner" />
                    <div className="absolute top-2.5 inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-r from-slate-200 via-blue-100 to-slate-300 shadow-md" />
                  </div>
                </div>

                {/* 4. Center-Right Pedestal: Upright Cordless Microphone */}
                <div className="absolute left-[62%] sm:left-[64%] bottom-[25px] sm:bottom-[34px] z-20 flex flex-col items-center">
                  {/* Equipment: Studio Microphone */}
                  <div className="relative flex flex-col items-center mb-1 group transition-transform duration-300 hover:scale-110">
                    <div className="flex h-16 sm:h-20 w-8 sm:w-10 flex-col items-center justify-center rounded-full bg-gradient-to-b from-slate-800 to-slate-950 border border-slate-600 shadow-lg text-amber-400 p-1">
                      <Mic className="h-6 sm:h-8 w-6 sm:w-8" />
                    </div>
                    <div className="h-8 sm:h-10 w-1.5 bg-slate-800 shadow-sm" />
                    <div className="h-2 w-8 rounded-full bg-slate-900 border border-slate-700" />
                  </div>

                  {/* 3D Cylinder Pedestal Base */}
                  <div className="relative w-20 sm:w-24 h-12 sm:h-14 mt-1">
                    <div className="absolute top-0 inset-x-0 h-5 rounded-[50%] bg-gradient-to-r from-blue-100 via-white to-blue-200 border border-white shadow-inner" />
                    <div className="absolute top-2.5 inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-r from-slate-200 via-blue-100 to-slate-300 shadow-md" />
                  </div>
                </div>

                {/* 5. Right Pedestal: 4K UHD Television Display */}
                <div className="absolute right-[12%] sm:right-[15%] bottom-[32px] sm:bottom-[44px] z-15 flex flex-col items-center">
                  {/* Equipment: 4K Television */}
                  <div className="relative w-28 sm:w-36 rounded-lg overflow-hidden border border-slate-800 shadow-[0_12px_28px_rgba(0,0,0,0.2)] bg-slate-950 transition-transform duration-300 hover:scale-105">
                    <img
                      src={images.services.ledTv}
                      alt="4K LED TV Screen"
                      className="w-full h-18 sm:h-24 object-cover"
                    />
                    <div className="absolute bottom-0 inset-x-0 bg-black/75 py-0.5 text-center">
                      <span className="text-[8px] font-bold text-slate-200">
                        65"–85" 4K Smart TV
                      </span>
                    </div>
                  </div>

                  {/* 3D Cylinder Pedestal Base */}
                  <div className="relative w-28 sm:w-34 h-12 sm:h-16 mt-1">
                    <div className="absolute top-0 inset-x-0 h-5 rounded-[50%] bg-gradient-to-r from-blue-100 via-white to-blue-200 border border-white shadow-inner" />
                    <div className="absolute top-2.5 inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-r from-slate-200 via-blue-100 to-slate-300 shadow-md" />
                  </div>
                </div>

                {/* 6. Far Right: Stage Lighting & Heavy Duty Road Case */}
                <div className="absolute right-[0%] sm:right-[2%] bottom-[12px] sm:bottom-[18px] z-25 flex flex-col items-center">
                  {/* Equipment: Stage Par Light + Flight Case */}
                  <div className="flex items-end gap-1.5 mb-1">
                    {/* DMX Stage Light */}
                    <div className="flex h-12 w-12 sm:h-14 sm:w-14 items-center justify-center rounded-xl bg-slate-900 border border-slate-700 shadow-md text-amber-400 transition-transform duration-300 hover:scale-105">
                      <Lightbulb className="h-6 w-6 animate-pulse" />
                    </div>
                    {/* Road Flight Case */}
                    <div className="flex h-14 w-14 sm:h-16 sm:w-16 flex-col items-center justify-center rounded-lg bg-gradient-to-b from-slate-800 to-slate-950 border-2 border-slate-400 shadow-xl text-slate-300">
                      <Box className="h-6 w-6 text-slate-300" />
                      <span className="text-[7.5px] font-mono text-slate-400">PRO CASE</span>
                    </div>
                  </div>

                  {/* 3D Cylinder Pedestal Base */}
                  <div className="relative w-28 sm:w-32 h-10 sm:h-12 mt-1">
                    <div className="absolute top-0 inset-x-0 h-5 rounded-[50%] bg-gradient-to-r from-blue-100 via-white to-blue-200 border border-white shadow-inner" />
                    <div className="absolute top-2.5 inset-x-0 bottom-0 rounded-b-2xl bg-gradient-to-r from-slate-200 via-blue-100 to-slate-300 shadow-md" />
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* Bottom Category Tiles Bar */}
          <div className="relative z-20 mt-8 pt-6 border-t border-blue-200/50">
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 sm:gap-3">
              {CATEGORIES.map((cat) => (
                <Link
                  key={cat.name}
                  to={cat.to}
                  className="group flex flex-col items-center justify-center rounded-2xl bg-white/85 hover:bg-white backdrop-blur-md border border-slate-200/80 hover:border-blue-400/80 p-3 text-center transition-all duration-200 hover:-translate-y-1 hover:shadow-md shadow-xs"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors group-hover:bg-blue-600 group-hover:text-white">
                    <cat.icon className="h-4.5 w-4.5" />
                  </div>
                  <span className="mt-2 text-[11px] font-bold text-slate-700 group-hover:text-blue-700 tracking-tight leading-tight">
                    {cat.name}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
