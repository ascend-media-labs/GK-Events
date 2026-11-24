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
    navLabel: "4K Photography & Stream",
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
    <section className="relative w-full pt-3 pb-6 sm:pt-4 sm:pb-8 bg-white" aria-label="Hero Showcase">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        {/* Main Hero Card with subtle luxury gold/blue framing */}
        <div className="relative w-full rounded-[2rem] sm:rounded-[2.5rem] overflow-hidden border border-slate-200/90 shadow-[0_20px_60px_rgba(15,23,42,0.06)] bg-gradient-to-b from-[#faf9f6] via-white to-[#f8faff] p-6 sm:p-10 lg:p-12">
          
          {/* Subtle Ambient Radial Lighting Flares */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-72 w-[600px] rounded-full bg-amber-400/10 blur-3xl" />
          <div className="pointer-events-none absolute top-1/3 left-10 h-64 w-64 rounded-full bg-blue-400/8 blur-3xl" />
          <div className="pointer-events-none absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-white via-white/50 to-transparent" />

          {/* Top Section: Eyebrow, Headline & Action Buttons */}
          <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4 mb-8 sm:mb-10">
            {/* Eyebrow Badge */}
            <div className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/95 text-blue-700 text-xs sm:text-[13px] font-bold tracking-wide border border-blue-200/80 shadow-xs backdrop-blur-sm">
              <Sparkles className="h-3.5 w-3.5 text-amber-500" />
              <span>GK Events · Audio Visuals &amp; Event Tech</span>
            </div>

            {/* Signature Headline */}
            <h1 className="font-display text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[3.8rem] font-extrabold text-slate-900 leading-[1.08] tracking-tight">
              “Professional{" "}
              <span className="relative inline-block text-blue-600 px-1">
                GK Events
                <svg
                  className="pointer-events-none absolute -inset-x-2 -inset-y-1 w-[calc(100%+16px)] h-[calc(100%+8px)]"
                  viewBox="0 0 100 100"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M5,50 C5,15 95,15 95,50 C95,85 8,85 5,55 C4,35 12,25 22,22"
                    stroke="#2563eb"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>{" "}
              Equipment for Rent —<br />
              delivered &amp;{" "}
              <span className="relative inline-block text-amber-600 pb-0.5">
                setup
                <svg
                  className="pointer-events-none absolute -bottom-1 -left-1 w-[104%] h-2"
                  viewBox="0 0 100 10"
                  preserveAspectRatio="none"
                  fill="none"
                >
                  <path
                    d="M 2,8 C 30,5 70,9 98,6"
                    stroke="#d97706"
                    strokeWidth="3.2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
              ”
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Concert sound line arrays, curved 4K LED walls, grand wedding productions, moving lasers and 4K cinema live broadcasts.
            </p>

            {/* Action CTAs */}
            <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
              <Button
                asChild
                className="rounded-full bg-blue-600 hover:bg-blue-700 text-white font-bold px-7 py-5 text-sm sm:text-base shadow-[0_4px_16px_rgba(37,99,235,0.28)] transition-all hover:scale-105 active:scale-95"
              >
                <a
                  href={waLink("Hi GK Events, I'd like to book AV equipment for my event.")}
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
                className="rounded-full bg-white hover:bg-slate-50 text-slate-900 border border-slate-300 font-bold px-7 py-5 text-sm sm:text-base shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow transition-all hover:scale-105 active:scale-95"
              >
                <Link to="/equipment">
                  View Equipment Catalog
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>

              <Button
                asChild
                variant="outline"
                className="hidden sm:inline-flex rounded-full border-slate-200 bg-white/80 hover:bg-white text-slate-700 hover:text-slate-950 font-bold px-5 py-5 text-sm transition-all"
              >
                <a href={contact.phoneHref}>
                  <Phone className="mr-2 h-4 w-4" />
                  Call Now
                </a>
              </Button>
            </div>
          </div>

          {/* Stepped Arches Navigation Links Row (matching the reference · ОФОРМЛЕНИЕ · ОРГАНИЗАЦИЯ · ГАЛЕРЕЯ) */}
          <div className="relative z-10 flex flex-wrap items-center justify-center gap-2 sm:gap-4 md:gap-6 mb-6 sm:mb-8 text-xs sm:text-sm font-semibold tracking-wide">
            {CARDS.map((card, idx) => {
              const isActive = activeIndex === idx;
              return (
                <button
                  key={card.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`inline-flex items-center gap-1.5 transition-all duration-300 px-3 py-1 rounded-full ${
                    isActive
                      ? "text-blue-600 font-extrabold bg-blue-50 border border-blue-200/80 shadow-xs scale-105"
                      : "text-slate-500 hover:text-slate-900 hover:bg-slate-50"
                  }`}
                >
                  <span className={`h-1.5 w-1.5 rounded-full ${isActive ? "bg-blue-600" : "bg-slate-300"}`} />
                  <span>{card.navLabel}</span>
                </button>
              );
            })}
          </div>

          {/* 5 Stepped Arch Cards Showcase Container */}
          <div
            className="relative z-10 w-full flex items-end justify-center gap-2 sm:gap-3 md:gap-4 lg:gap-5 pb-2"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {CARDS.map((card, idx) => {
              const isActive = activeIndex === idx;

              // Heights matching the stepped arch progression from the user's reference:
              // Index 0: Low rectangle
              // Index 1: Medium Arch
              // Index 2: Centerpiece Tallest Arch
              // Index 3: Medium Arch
              // Index 4: Low rectangle
              let heightClass = "h-[190px] sm:h-[220px] md:h-[250px] lg:h-[270px]";
              let shapeClass = "rounded-2xl";

              if (idx === 1 || idx === 3) {
                heightClass = "h-[250px] sm:h-[290px] md:h-[340px] lg:h-[370px]";
                shapeClass = "rounded-t-[60px] sm:rounded-t-[80px] md:rounded-t-[100px] rounded-b-2xl";
              } else if (idx === 2) {
                heightClass = "h-[310px] sm:h-[370px] md:h-[430px] lg:h-[470px]";
                shapeClass = "rounded-t-[70px] sm:rounded-t-[110px] md:rounded-t-[140px] rounded-b-2xl";
              }

              return (
                <div
                  key={card.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`group relative cursor-pointer overflow-hidden transition-all duration-500 ease-out select-none ${heightClass} ${shapeClass} ${
                    isActive
                      ? "w-[26%] sm:w-[24%] md:w-[22%] ring-3 ring-blue-600 ring-offset-2 ring-offset-white shadow-[0_24px_50px_rgba(37,99,235,0.22)] -translate-y-2 z-20"
                      : "w-[17%] sm:w-[18%] md:w-[19%] opacity-80 hover:opacity-100 hover:-translate-y-1 z-10"
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
                    <div className="absolute top-3 inset-x-0 flex justify-center animate-in fade-in zoom-in-90 duration-300">
                      <span className="inline-flex items-center gap-1 rounded-full bg-white/95 backdrop-blur-md px-2.5 py-0.5 text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-blue-600 shadow-sm border border-blue-200">
                        <Sparkles className="h-3 w-3" />
                        <span>Active</span>
                      </span>
                    </div>
                  )}

                  {/* Bottom Text Label */}
                  <div className="absolute inset-x-2 bottom-3 sm:bottom-4 text-center">
                    <p className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider text-amber-300 drop-shadow-xs line-clamp-1">
                      {card.tag}
                    </p>
                    <h3 className="text-xs sm:text-sm md:text-base font-bold text-white drop-shadow-sm line-clamp-1 leading-tight mt-0.5">
                      {card.title}
                    </h3>

                    {/* Explore Link shown on active card */}
                    {isActive && (
                      <Link
                        to={card.link}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex items-center gap-1 text-[11px] font-bold text-blue-300 hover:text-white transition-colors mt-1.5"
                      >
                        <span>Explore details</span>
                        <ArrowRight className="h-3 w-3" />
                      </Link>
                    )}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Stepper Dots & Progress Bar Indicator */}
          <div className="relative z-10 flex items-center justify-center gap-2 mt-6">
            {CARDS.map((_, idx) => (
              <button
                key={idx}
                aria-label={`Select card ${idx + 1}`}
                onClick={() => setActiveIndex(idx)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === idx
                    ? "w-8 h-2 bg-blue-600 shadow-sm"
                    : "w-2 h-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
