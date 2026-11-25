import type React from "react";
import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, Volume2, Monitor, Lightbulb, Camera } from "lucide-react";
import { waLink } from "@/data/site";

const CAPABILITIES = [
  { to: "/sound-system-rental", icon: Volume2, line1: "Sound", line2: "Systems" },
  { to: "/led-wall-rental", icon: Monitor, line1: "LED", line2: "Walls" },
  { to: "/event-solutions", icon: Lightbulb, line1: "Stage", line2: "Lighting" },
  { to: "/videography", icon: Camera, line1: "Video", line2: "Production" },
] as const;

/**
 * Home hero.
 * - Mobile/tablet (< lg): portrait stage image, centered copy over the dark sky,
 *   the floating header pill sits on top of the image (hero is pulled up under it),
 *   capability bar rests on the bottom of the stage.
 * - Desktop (lg+): wide stage image, left-aligned copy, capability bar straddles
 *   the bottom edge of the hero.
 */
export function HeroShowcase() {
  return (
    <section className="relative" aria-label="Hero">
      <div className="relative overflow-hidden bg-[#0a0a20] text-white -mt-[82px] sm:-mt-[98px] lg:mt-0">
        {/* Background image (art-directed per breakpoint) */}
        <picture className="pointer-events-none absolute inset-0 select-none">
          <source media="(min-width: 1024px)" srcSet="/images/hero-home-desktop.jpg" />
          <img
            src="/images/hero-home-mobile.jpg"
            alt="GK Events grand wedding stage with LED walls and concert lighting"
            className="anim-zoom-out absolute inset-x-0 bottom-0 h-auto w-full origin-bottom lg:inset-0 lg:h-full lg:object-cover lg:object-[center_55%]"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Legibility overlays */}
        <div className="pointer-events-none absolute inset-x-0 top-0 h-[40%] bg-gradient-to-b from-[#0a0a20] via-[#0a0a20]/60 to-transparent lg:hidden" />
        <div className="pointer-events-none absolute inset-y-0 left-0 hidden w-[60%] bg-gradient-to-r from-[#0b0a24]/85 via-[#0b0a24]/45 to-transparent lg:block" />

        <div className="relative mx-auto max-w-[1288px] px-5 sm:px-8 lg:px-[60px]">
          <div className="flex min-h-[calc(415px+71vw)] flex-col items-center pt-[104px] pb-[150px] text-center sm:min-h-[calc(460px+71vw)] sm:pt-[130px] lg:min-h-[470px] lg:items-start lg:justify-center lg:pt-10 lg:pb-24 lg:text-left xl:min-h-[500px]">
            {/* Eyebrow */}
            <div className="anim-fade-down flex items-center gap-3 sm:gap-4" style={{ "--d": "100ms" } as React.CSSProperties}>
              <span className="anim-grow-x h-[1.5px] w-6 shrink-0 origin-right bg-orange-500 sm:w-11" style={{ "--d": "350ms" } as React.CSSProperties} />
              <span className="whitespace-nowrap text-[10px] font-bold uppercase tracking-[0.24em] sm:tracking-[0.32em] text-white/90 sm:text-xs">
                Premium Event Productions
              </span>
              <span className="anim-grow-x h-[1.5px] w-6 shrink-0 origin-left bg-orange-500 sm:w-11" style={{ "--d": "350ms" } as React.CSSProperties} />
            </div>

            {/* Headline */}
            <h1 className="mt-4 font-serif text-[clamp(2.1rem,9.6vw,3.6rem)] font-bold leading-[1.06] tracking-[-0.01em] text-white lg:mt-5 lg:text-[3.6rem] xl:text-[4rem]">
              <span className="anim-slide-left block" style={{ "--d": "250ms" } as React.CSSProperties}>
                Professional
              </span>
              <span className="anim-slide-right block" style={{ "--d": "400ms" } as React.CSSProperties}>
                Event Equipment
              </span>
              <span className="anim-slide-left block" style={{ "--d": "550ms" } as React.CSSProperties}>
                for <span className="text-orange-500">Rent &amp; Setup</span>
              </span>
            </h1>

            {/* Description */}
            <p style={{ "--d": "750ms" } as React.CSSProperties} className="anim-fade-up mt-4 max-w-[22rem] text-[13.5px] leading-relaxed text-white/90 sm:max-w-md sm:text-base lg:max-w-[27rem] lg:text-[15px]">
              Concert sound line arrays, curved 4K LED walls, stage lighting, grand weddings, corporate
              productions, video shooting and live broadcasting.
            </p>

            {/* CTAs */}
            <div style={{ "--d": "900ms" } as React.CSSProperties} className="anim-fade-up mt-6 flex w-full max-w-[24rem] items-center justify-center gap-2.5 sm:max-w-none sm:gap-3 lg:mt-7 lg:w-auto lg:justify-start lg:gap-4">
              <a
                href={waLink("Hi GK Events, I'd like to book event equipment.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-full bg-gradient-to-r from-[#e8590c] to-[#f97316] px-8 py-3 text-sm font-bold text-white shadow-[0_10px_25px_rgba(234,88,12,0.35)] transition-transform hover:scale-[1.03] active:scale-95 sm:inline-flex sm:px-7 sm:text-[15px]"
              >
                <MessageCircle className="h-[18px] w-[18px]" />
                Book on WhatsApp
              </a>
              <Link
                to="/equipment"
                className="hidden items-center justify-center gap-2 whitespace-nowrap rounded-full border-2 border-white/90 bg-white/5 px-4 py-[10px] text-[13px] font-bold text-white backdrop-blur-sm transition-colors hover:bg-white/15 sm:inline-flex sm:px-7 sm:text-[15px]"
              >
                View Equipment
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Capability bar: rests on the stage on mobile, straddles the hero edge on desktop */}
      <div className="absolute inset-x-0 bottom-5 z-20 px-4 sm:bottom-8 lg:bottom-0 lg:translate-y-1/2">
        <nav
          aria-label="Core capabilities"
          style={{ "--d": "1000ms" } as React.CSSProperties}
          className="anim-fade-up mx-auto grid max-w-[460px] grid-cols-4 rounded-[26px] border border-amber-200/90 bg-white/95 py-4 shadow-[0_16px_40px_rgba(217,119,6,0.14)] backdrop-blur-md sm:max-w-[560px] lg:max-w-[820px] lg:rounded-[28px] lg:bg-white lg:py-[18px]"
        >
          {CAPABILITIES.map((c, i) => (
            <Link
              key={c.to}
              to={c.to}
              style={{ "--d": `${1150 + i * 120}ms` } as React.CSSProperties}
              className={`anim-fade-up group flex flex-col items-center gap-1.5 px-1 text-center ${
                i > 0 ? "border-l border-slate-200/80" : ""
              }`}
            >
              <c.icon className="h-7 w-7 stroke-[1.5] text-amber-600 transition-transform group-hover:scale-105 group-hover:text-amber-700 lg:h-8 lg:w-8" />
              <span className="text-[11.5px] font-bold leading-tight text-slate-800 transition-colors group-hover:text-amber-600 sm:text-xs lg:text-[13px]">
                {c.line1}
                <br />
                {c.line2}
              </span>
            </Link>
          ))}
        </nav>
      </div>
    </section>
  );
}
