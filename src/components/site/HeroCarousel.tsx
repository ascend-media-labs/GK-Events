import { Link } from "@tanstack/react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Disc3,
  Radio,
  Tv,
  Camera,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/data/site";

// Clean, high-impact slides showcasing authentic event production photography
const SLIDES = [
  {
    id: "wedding-live-broadcast",
    theme: "broadcast-console",
    badge: "4K Cinema Broadcast & Live Switching",
    badgeIcon: Camera,
    titleLead: "Capture Sacred Moments In",
    titleHighlight: "4K Cinema Multi-Camera Relay.",
    description:
      "Studio-grade multi-cam video switchers, wireless gimbals, PTZ robotic cameras, and crystal digital sound capturing every sacred ritual in ultra-high definition.",
    ctaPrimary: { label: "Live Streaming Setup", to: "/live-streaming" },
    ctaSecondary: { label: "Book Broadcast Crew", to: "/contact" },
    image: images.liveBroadcastConsole,
    imageAlt: "Professional 4K live broadcast switching console and wedding multi-view monitors",
  },
  {
    id: "hybrid-wedding-stream",
    theme: "wedding-stream",
    badge: "Global Live Stream & Dual Stage Screens",
    badgeIcon: Tv,
    titleLead: "Connect Families Worldwide With",
    titleHighlight: "Interactive Stage Video Walls.",
    description:
      "Giant on-stage LED screens broadcasting overseas family and friends live via Zoom and YouTube, managed by dedicated on-site technical broadcast engineers.",
    ctaPrimary: { label: "Explore Wedding Solutions", to: "/wedding-events" },
    ctaSecondary: { label: "Book Your Date", to: "/contact" },
    image: images.weddingGlobalStream,
    imageAlt: "Wedding stage production with dual giant LED walls broadcasting virtual guests worldwide",
  },
  {
    id: "dj-lights",
    theme: "dj",
    badge: "Stage & DJ Lighting Production",
    badgeIcon: Disc3,
    titleLead: "Electrify Your Night With",
    titleHighlight: "High-Energy DJ Lights & Lasers.",
    description:
      "Concert-grade moving head beams, lasers, haze machines, strobes, and punchy audio systems for unforgettable Sangeet nights, DJ parties, and stage concerts.",
    ctaPrimary: { label: "Explore DJ Lights", to: "/event-solutions" },
    ctaSecondary: { label: "Get Event Quote", to: "/contact" },
    image: images.hero,
    imageAlt: "Concert stage with laser lights, moving beams and LED backdrop",
  },
];

// Subtle, interactive micro-badges and lighting overlays for each slide
function StageAtmosphere({ theme }: { theme: string }) {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden select-none z-10" aria-hidden="true">
      <style>{`
        @keyframes laserFlicker {
          0%, 100% { opacity: 0.25; }
          50% { opacity: 0.85; }
        }
        @keyframes equalizerWave {
          0%, 100% { height: 5px; }
          50% { height: 24px; }
        }
        @keyframes vuMeterWave {
          0%, 100% { height: 6px; }
          40% { height: 18px; }
          80% { height: 12px; }
        }
      `}</style>

      {/* Light gradient on the left for maximum text contrast, clear on right */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(255, 255, 255, 0.97) 0%, rgba(255, 255, 255, 0.91) 28%, rgba(255, 255, 255, 0.6) 48%, rgba(255, 255, 255, 0.12) 70%, transparent 100%)",
        }}
      />

      {/* Bottom fade blending seamlessly into the white page */}
      <div
        className="absolute inset-x-0 bottom-0 h-32"
        style={{
          background: "linear-gradient(to top, #ffffff 0%, rgba(255, 255, 255, 0.8) 40%, transparent 100%)",
        }}
      />

      {/* Top subtle fade for seamless navbar transition */}
      <div
        className="absolute inset-x-0 top-0 h-14"
        style={{
          background: "linear-gradient(to bottom, rgba(255, 255, 255, 0.85) 0%, transparent 100%)",
        }}
      />

      {/* SLIDE 1: 4K BROADCAST CONSOLE */}
      {theme === "broadcast-console" && (
        <>
          {/* Top-Right REC Live Indicator */}
          <div className="hidden sm:flex absolute top-6 right-8 items-center gap-1.5 rounded-full border border-red-300 bg-white/95 backdrop-blur-md px-3 py-1 shadow-md">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full rounded-full bg-red-500 opacity-75 animate-ping" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-600 shadow-[0_0_6px_#EF4444]" />
            </span>
            <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-600">4K Live Switcher</span>
          </div>

          {/* Bottom-Right Multi-Cam & Audio Meter Badge */}
          <div className="hidden md:flex absolute bottom-14 sm:bottom-16 right-6 sm:right-10 items-center gap-3 rounded-full border border-slate-200 bg-white/95 backdrop-blur-xl px-4 py-2 shadow-lg">
            <div className="flex items-center gap-1.5">
              <Camera className="h-3.5 w-3.5 text-blue-600" />
              <span className="text-[11px] font-bold text-slate-800 tracking-wider uppercase">Live Relay</span>
            </div>
            {/* Live Tally Channels */}
            <div className="flex items-center gap-1">
              <span className="text-[9px] font-mono font-bold bg-red-100 text-red-700 border border-red-300 px-1.5 py-0.5 rounded-xs animate-pulse">
                CAM 1 (LIVE)
              </span>
              <span className="text-[9px] font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-xs">
                CAM 2
              </span>
              <span className="text-[9px] font-mono text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded-xs">
                PGM
              </span>
            </div>
            <span className="text-slate-300">|</span>
            {/* Audio VU Decibel Meter */}
            <div className="flex items-end gap-1 h-5">
              {[8, 14, 18, 12, 16, 20, 10, 15].map((h, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-gradient-to-t from-emerald-500 via-amber-500 to-amber-400"
                  style={{
                    height: `${h}px`,
                    animation: `vuMeterWave ${0.8 + (i % 4) * 0.25}s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.1}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </>
      )}

      {/* SLIDE 2: HYBRID WEDDING STREAM */}
      {theme === "wedding-stream" && (
        <div className="hidden md:flex absolute bottom-14 sm:bottom-16 right-6 sm:right-10 items-center gap-3 rounded-full border border-slate-200 bg-white/95 backdrop-blur-xl px-4 py-2 shadow-lg">
          <div className="flex items-center gap-1.5">
            <Radio className="h-3.5 w-3.5 text-emerald-600 animate-pulse" />
            <span className="text-[11px] font-bold text-slate-800 tracking-wider uppercase">Global Stream</span>
          </div>
          <span className="text-slate-300">|</span>
          <div className="flex items-center gap-1.5 text-[10px] font-mono font-semibold text-emerald-700">
            <span className="flex h-2 w-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10B981]" />
            <span>YOUTUBE & ZOOM RELAY</span>
          </div>
          <span className="text-[9px] font-mono text-slate-700 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
            0.2s LOW LATENCY
          </span>
        </div>
      )}

      {/* SLIDE 3: DJ & CONCERT LIGHTS */}
      {theme === "dj" && (
        <>
          <div className="hidden md:flex absolute bottom-14 sm:bottom-16 right-6 sm:right-10 items-center gap-3 rounded-full border border-amber-300 bg-white/95 backdrop-blur-xl px-4 py-2 shadow-lg">
            <div className="flex items-center gap-2">
              <Disc3 className="h-4 w-4 text-amber-600 animate-spin" style={{ animationDuration: "3.5s" }} />
              <span className="text-[11px] font-bold text-slate-900 tracking-wider uppercase">Stage Audio</span>
            </div>
            <span className="text-slate-300">|</span>
            <div className="flex items-end gap-1 h-6">
              {[8, 18, 12, 22, 16, 24, 14, 20, 10, 18].map((h, i) => (
                <span
                  key={i}
                  className="w-1 rounded-full bg-gradient-to-t from-amber-600 via-amber-500 to-amber-400"
                  style={{
                    height: `${h}px`,
                    animation: `equalizerWave ${0.75 + (i % 5) * 0.18}s ease-in-out infinite alternate`,
                    animationDelay: `${i * 0.08}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const timerRef = useRef<NodeJS.Timeout | null>(null);

  const totalSlides = SLIDES.length;

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrent(index);
  };

  useEffect(() => {
    if (isPaused) return;

    timerRef.current = setTimeout(() => {
      nextSlide();
    }, 6500);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, [current, isPaused]);

  const activeSlide = SLIDES[current] ?? SLIDES[0]!;
  const BadgeIcon = activeSlide.badgeIcon;

  return (
    <section
      className="relative flex flex-col justify-start h-[calc(100vh-4.5rem)] min-h-[520px] max-h-[820px] overflow-hidden pt-6 sm:pt-8 pb-16 bg-white"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      aria-roledescription="carousel"
      aria-label="GK Events Featured Showcases"
    >
      {/* Background Slides */}
      <div className="absolute inset-0 z-0">
        {SLIDES.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0 pointer-events-none"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.imageAlt}
              className={`h-full w-full object-cover ${
                slide.id === "dj-lights" ? "object-[center_20%]" : "object-center"
              } transition-transform duration-[7000ms] ease-out brightness-[1.03] contrast-[1.02] ${
                index === current ? "scale-[1.02]" : "scale-100"
              }`}
              loading={index === 0 ? "eager" : "lazy"}
              decoding="async"
            />
          </div>
        ))}
      </div>

      {/* Seamless, Natural White Gradient Overlay */}
      <StageAtmosphere theme={activeSlide.theme} />

      {/* Main Slide Content: Dark, Crisp, Highly Legible */}
      <div className="container-x relative z-20 w-full animate-rise">
        <div className="max-w-lg lg:max-w-xl">
          {/* Eyebrow Badge */}
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-50/95 backdrop-blur-md px-3.5 py-1 text-amber-800 shadow-xs">
            <span className="flex h-1.5 w-1.5 rounded-full bg-amber-500 shadow-[0_0_6px_#f59e0b]" />
            <BadgeIcon className="h-3 w-3 text-amber-600" />
            <span className="font-extrabold tracking-wider text-[10px] sm:text-[11px] uppercase">
              {activeSlide.badge}
            </span>
          </div>

          {/* Headline with Gold Highlight */}
          <h1 className="mt-2.5 text-2xl font-extrabold sm:text-3xl lg:text-4xl leading-tight text-slate-950">
            {activeSlide.titleLead}{" "}
            <span className="text-gold block sm:inline">{activeSlide.titleHighlight}</span>
          </h1>

          {/* Readable Description */}
          <p className="mt-2.5 max-w-md text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
            {activeSlide.description}
          </p>

          {/* Action Buttons */}
          <div className="mt-5 flex flex-wrap items-center gap-2.5">
            <Button
              asChild
              variant="hero"
              size="sm"
              className="rounded-full shadow-gold hover:scale-[1.02] transition-transform text-xs px-5 h-9 font-extrabold"
            >
              <Link to={activeSlide.ctaPrimary.to}>
                {activeSlide.ctaPrimary.label} <ArrowRight className="h-3.5 w-3.5 ml-1" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="sm"
              className="rounded-full hover:bg-slate-50 transition-colors text-xs px-5 h-9 font-bold border-slate-300 bg-white/90 backdrop-blur-md text-slate-800 shadow-xs"
            >
              <Link to={activeSlide.ctaSecondary.to}>
                {activeSlide.ctaSecondary.label}
              </Link>
            </Button>
          </div>
        </div>
      </div>

      {/* Carousel Navigation Arrows */}
      <div className="absolute inset-y-0 left-2 right-2 sm:left-4 sm:right-4 z-30 flex items-center justify-between pointer-events-none">
        <button
          onClick={prevSlide}
          aria-label="Previous slide"
          className="pointer-events-auto flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-md transition-all hover:scale-110 hover:border-amber-400 hover:text-amber-700 hover:bg-white active:scale-95"
        >
          <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
        <button
          onClick={nextSlide}
          aria-label="Next slide"
          className="pointer-events-auto flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-slate-200 bg-white/90 text-slate-700 shadow-md transition-all hover:scale-110 hover:border-amber-400 hover:text-amber-700 hover:bg-white active:scale-95"
        >
          <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
        </button>
      </div>

      {/* Bottom Minimal Slide Tabs */}
      <div className="absolute bottom-3 sm:bottom-5 inset-x-0 z-30">
        <div className="container-x flex items-center justify-between gap-4">
          {/* Slide Selector Pills */}
          <div className="flex items-center gap-1.5 sm:gap-2 overflow-x-auto pb-1 scrollbar-none">
            {SLIDES.map((slide, idx) => {
              const isActive = idx === current;
              return (
                <button
                  key={slide.id}
                  onClick={() => goToSlide(idx)}
                  className={`group relative flex items-center gap-1.5 rounded-full px-3 py-1 transition-all whitespace-nowrap text-[11px] font-semibold ${
                    isActive
                      ? "bg-white border-2 border-amber-500 text-slate-950 shadow-md"
                      : "bg-white/80 border border-slate-200 text-slate-600 hover:text-slate-950 hover:bg-white"
                  }`}
                  aria-label={`Jump to slide ${idx + 1}: ${slide.badge}`}
                >
                  <span className={`text-[10px] font-mono font-bold ${isActive ? "text-amber-600" : "text-slate-400"}`}>
                    0{idx + 1}
                  </span>
                  <span className="hidden sm:inline text-[11px] font-bold">
                    {slide.id === "wedding-live-broadcast" && "4K Broadcast Console"}
                    {slide.id === "hybrid-wedding-stream" && "Global Video Walls"}
                    {slide.id === "dj-lights" && "DJ Lights & Lasers"}
                  </span>
                  {isActive && (
                    <span className="absolute bottom-0 left-2 right-2 h-[1.5px] rounded-full bg-amber-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Minimal Scroll Down Indicator */}
          <a
            href="#cities"
            aria-label="Scroll down to cities"
            className="hidden lg:inline-flex items-center gap-1 text-[10px] font-bold tracking-widest uppercase text-slate-500 hover:text-amber-700 transition-colors"
          >
            <span>Explore</span>
            <ChevronDown className="h-3 w-3 animate-bob text-amber-600" />
          </a>
        </div>
      </div>
    </section>
  );
}
