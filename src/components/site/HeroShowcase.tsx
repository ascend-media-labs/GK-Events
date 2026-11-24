import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, MessageCircle, ArrowRight, Phone, Volume2, Grid, Award, Lightbulb, Video } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink, contact } from "@/data/site";

import soundImg from "@/assets/service-sound.jpg";
import ledImg from "@/assets/service-led-wall.jpg";
import weddingImg from "@/assets/wedding.jpg";
import lightingImg from "@/assets/service-lighting.jpg";
import photoImg from "@/assets/service-photography.jpg";

interface ArchCard {
  id: string;
  tag: string;
  navLabel: string;
  title: string;
  subtitle: string;
  image: string;
  link: string;
  icon: typeof Volume2;
}

const CARDS: ArchCard[] = [
  {
    id: "sound",
    tag: "CONCERT AUDIO",
    navLabel: "Sound Systems",
    title: "Concert PA & Line Arrays",
    subtitle: "JBL, StudioMaster & digital mixing consoles",
    image: soundImg,
    link: "/equipment#sound",
    icon: Volume2,
  },
  {
    id: "led",
    tag: "CURVED LED WALLS",
    navLabel: "Curved LED Walls",
    title: "Ultra-HD Curved LED Walls",
    subtitle: "P2.5 & P3.9 seamless video backdrops",
    image: ledImg,
    link: "/equipment#projector",
    icon: Grid,
  },
  {
    id: "wedding",
    tag: "WEDDINGS & CELEBRATIONS",
    navLabel: "Weddings & Stages",
    title: "Grand Wedding Productions",
    subtitle: "Stages, LED, lighting & cinematic films",
    image: weddingImg,
    link: "/wedding-events",
    icon: Award,
  },
  {
    id: "lighting",
    tag: "STAGE LIGHTING",
    navLabel: "Stage Lighting",
    title: "Intelligent Beams & Lasers",
    subtitle: "DMX moving heads, washes & atmospheric haze",
    image: lightingImg,
    link: "/equipment#sound",
    icon: Lightbulb,
  },
  {
    id: "cinema",
    tag: "CINEMA & BROADCAST",
    navLabel: "4K Photography",
    title: "Cinematic Films & Live Stream",
    subtitle: "Full-frame cinema cameras & multi-cam relay",
    image: photoImg,
    link: "/live-streaming",
    icon: Video,
  },
];

export function HeroShowcase() {
  const [activeIndex, setActiveIndex] = useState(2); // Center wedding card active by default
  const [isPaused, setIsPaused] = useState(false);

  // Auto-play: cycle through cards one after the other every 3.5 seconds
  useEffect(() => {
    if (isPaused) return;

    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % CARDS.length);
    }, 3500);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="relative w-full pt-3 pb-4 sm:pt-4 sm:pb-6 bg-white" aria-label="Hero Showcase">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        {/* Main Hero Card with Side-by-Side 2-Column Grid */}
        <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-200/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)] bg-gradient-to-br from-[#faf9f6] via-white to-[#f4f8ff] p-6 sm:p-9 lg:p-11">
          
          {/* Subtle Ambient Radial Lighting Flares */}
          <div className="pointer-events-none absolute -top-24 right-1/4 h-80 w-80 rounded-full bg-blue-400/12 blur-3xl" />
          <div className="pointer-events-none absolute top-10 right-10 h-64 w-64 rounded-full bg-amber-400/10 blur-3xl" />
          <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white/70 via-white/30 to-transparent" />

          {/* Side-by-Side Grid Layout: Left Content (5 cols) & Right 5-Card Arches Showcase (7 cols) */}
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center min-h-[480px]">
            
            {/* Left Column: Eyebrow, Headline & Action Buttons matching reference */}
            <div className="lg:col-span-5 flex flex-col items-start text-left gap-4 max-w-xl">
              {/* Eyebrow: GK EVENTS with horizontal divider */}
              <div className="space-y-1">
                <div className="flex items-center gap-3">
                  <span className="font-display text-xs sm:text-sm font-black uppercase tracking-wider text-amber-600">
                    GK EVENTS
                  </span>
                  <div className="h-0.5 w-16 bg-amber-600/70 rounded-full" />
                </div>
                <p className="text-[10.5px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.18em] text-slate-800">
                  PREMIUM EVENT PRODUCTIONS
                </p>
              </div>

              {/* Signature Headline */}
              <h1 className="font-serif text-[2.4rem] sm:text-[2.9rem] md:text-[3.3rem] lg:text-[3.6rem] font-black text-slate-950 leading-[1.08] tracking-tight">
                Professional<br />
                Event Equipment<br />
                for{" "}
                <span className="relative inline-block text-amber-600 pb-1">
                  Rent &amp; Setup
                  {/* Elegant curved gold swoosh */}
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

              {/* Action CTAs */}
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

              {/* Live Active Pill Indicator */}
              <div className="pt-1 flex items-center gap-2 text-xs text-slate-500 font-medium">
                <span className="h-2 w-2 rounded-full bg-amber-600 animate-pulse" />
                <span>Featuring: <strong className="text-slate-900 font-bold">{CARDS[activeIndex]?.title}</strong></span>
              </div>
            </div>

            {/* Right Column: 5 Stepped Arch Cards Showcase (7 cols) */}
            <div
              className="lg:col-span-7 relative w-full flex flex-col justify-end items-center"
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Category Pills Header (matching reference: · ОФОРМЛЕНИЕ · ОРГАНИЗАЦИЯ · ГАЛЕРЕЯ) */}
              <div className="w-full flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-4 text-[11px] sm:text-xs font-semibold">
                {CARDS.map((card, idx) => {
                  const isActive = activeIndex === idx;
                  return (
                    <button
                      key={card.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`inline-flex items-center gap-1 transition-all duration-300 px-2.5 py-1 rounded-full ${
                        isActive
                          ? "text-blue-600 font-extrabold bg-blue-50 border border-blue-200/80 shadow-xs scale-105"
                          : "text-slate-500 hover:text-slate-900 hover:bg-slate-100/60"
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-blue-600" : "bg-slate-300"}`} />
                      <span>{card.navLabel}</span>
                    </button>
                  );
                })}
              </div>

              {/* 5 Stepped Arch Cards Row */}
              <div className="w-full flex items-end justify-center gap-1.5 sm:gap-2 md:gap-3 pb-2">
                {CARDS.map((card, idx) => {
                  const isActive = activeIndex === idx;

                  // Stepped Arch Heights:
                  // 0: Low rectangle
                  // 1: Medium Arch
                  // 2: Tallest Center Arch
                  // 3: Medium Arch
                  // 4: Low rectangle
                  let heightClass = "h-[170px] sm:h-[200px] md:h-[220px] lg:h-[240px]";
                  let shapeClass = "rounded-2xl";

                  if (idx === 1 || idx === 3) {
                    heightClass = "h-[220px] sm:h-[260px] md:h-[290px] lg:h-[310px]";
                    shapeClass = "rounded-t-[50px] sm:rounded-t-[70px] md:rounded-t-[80px] rounded-b-2xl";
                  } else if (idx === 2) {
                    heightClass = "h-[270px] sm:h-[320px] md:h-[360px] lg:h-[390px]";
                    shapeClass = "rounded-t-[60px] sm:rounded-t-[90px] md:rounded-t-[110px] rounded-b-2xl";
                  }

                  return (
                    <div
                      key={card.id}
                      onClick={() => setActiveIndex(idx)}
                      className={`group relative cursor-pointer overflow-hidden transition-all duration-500 ease-out select-none ${heightClass} ${shapeClass} ${
                        isActive
                          ? "w-[26%] sm:w-[24%] ring-3 ring-blue-600 ring-offset-2 ring-offset-white shadow-[0_20px_40px_rgba(37,99,235,0.24)] -translate-y-2 z-20"
                          : "w-[17%] sm:w-[18%] opacity-80 hover:opacity-100 hover:-translate-y-1 z-10"
                      }`}
                    >
                      {/* Photo with subtle zoom on hover */}
                      <img
                        src={card.image}
                        alt={card.title}
                        loading={idx === 2 ? "eager" : "lazy"}
                        className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                      />

                      {/* Gradient Overlay for Text Legibility */}
                      <div
                        className={`absolute inset-0 bg-gradient-to-t transition-opacity duration-300 ${
                          isActive
                            ? "from-slate-950/90 via-slate-950/30 to-transparent opacity-100"
                            : "from-slate-950/60 via-transparent to-transparent opacity-60 group-hover:opacity-90"
                        }`}
                      />

                      {/* Active Indicator Top Pill */}
                      {isActive && (
                        <div className="absolute top-2.5 inset-x-0 flex justify-center animate-in fade-in zoom-in-90 duration-300">
                          <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-2 py-0.5 text-[8.5px] sm:text-[9.5px] font-extrabold uppercase tracking-wider text-blue-600 shadow-sm border border-blue-200">
                            <Sparkles className="h-2.5 w-2.5" />
                            <span>Active</span>
                          </span>
                        </div>
                      )}

                      {/* Bottom Text Label */}
                      <div className="absolute inset-x-1.5 bottom-2.5 sm:bottom-3 text-center">
                        <p className="text-[8px] sm:text-[9px] font-extrabold uppercase tracking-wider text-amber-300 drop-shadow-xs line-clamp-1">
                          {card.tag}
                        </p>
                        <h3 className="text-[11px] sm:text-xs md:text-sm font-bold text-white drop-shadow-sm line-clamp-1 leading-tight mt-0.5">
                          {card.title}
                        </h3>

                        {/* Explore Link shown on active card */}
                        {isActive && (
                          <Link
                            to={card.link}
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-1 text-[10px] font-bold text-blue-300 hover:text-white transition-colors mt-1"
                          >
                            <span>Explore</span>
                            <ArrowRight className="h-2.5 w-2.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* Stepper Dots Indicator */}
              <div className="flex items-center justify-center gap-1.5 mt-3">
                {CARDS.map((_, idx) => (
                  <button
                    key={idx}
                    aria-label={`Select card ${idx + 1}`}
                    onClick={() => setActiveIndex(idx)}
                    className={`transition-all duration-300 rounded-full ${
                      activeIndex === idx
                        ? "w-6 h-1.5 bg-blue-600 shadow-sm"
                        : "w-1.5 h-1.5 bg-slate-300 hover:bg-slate-400"
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
