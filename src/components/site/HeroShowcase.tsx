import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight, Speaker, Tv, Lightbulb, Camera } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/data/site";

export function HeroShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-[#07090e] text-white pt-6 pb-12 sm:pt-10 sm:pb-16" aria-label="Hero Showcase">
      {/* Background Stage Image with Cinematic Gradient Blend */}
      <div className="absolute inset-y-0 right-0 w-full lg:w-[64%] overflow-hidden pointer-events-none select-none">
        <img
          src="/images/hero-stage-grand.jpg"
          alt="GK Events Royal Wedding Stage & Live Concert Lighting"
          className="h-full w-full object-cover object-center scale-100 sm:scale-105 transition-transform duration-1000"
          loading="eager"
        />
        {/* Soft Radial Ambient Glow */}
        <div className="absolute top-1/4 right-1/4 h-80 w-80 rounded-full bg-amber-500/15 blur-3xl" />
        <div className="absolute bottom-10 right-1/3 h-64 w-64 rounded-full bg-purple-600/15 blur-3xl" />
        
        {/* Gradients to seamlessly blend stage into dark backdrop */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e] via-[#07090e]/75 to-transparent hidden lg:block" />
        <div className="absolute inset-0 bg-[#07090e]/75 lg:hidden" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#07090e] to-transparent" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-[#07090e]/80 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1288px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[460px] sm:min-h-[500px] items-center">
          
          {/* Left Column: Eyebrow, Signature Headline, Description & CTAs */}
          <div className="lg:col-span-7 flex flex-col items-start text-left gap-4 max-w-2xl py-6 sm:py-10">
            
            {/* Eyebrow: —— PREMIUM EVENT PRODUCTIONS —— with gold horizontal bars */}
            <div className="flex items-center gap-3">
              <div className="h-[1.5px] w-8 sm:w-10 bg-amber-500" />
              <span className="text-[10px] sm:text-[11.5px] font-extrabold uppercase tracking-[0.2em] text-slate-200">
                PREMIUM EVENT PRODUCTIONS
              </span>
              <div className="h-[1.5px] w-8 sm:w-10 bg-amber-500" />
            </div>

            {/* Signature Headline matching reference mockup */}
            <h1 className="font-serif text-[2.6rem] sm:text-[3.3rem] md:text-[3.8rem] lg:text-[4.2rem] font-bold text-white leading-[1.08] tracking-tight">
              Professional<br />
              Event Equipment<br />
              for{" "}
              <span className="text-amber-500 font-serif">
                Rent &amp; Setup
              </span>
            </h1>

            {/* Subtitle Description */}
            <p className="text-sm sm:text-base text-slate-300 font-normal leading-relaxed max-w-lg">
              Concert sound line arrays, curved 4K LED walls, stage lighting, grand weddings, corporate productions, video shooting and live broadcasting.
            </p>

            {/* Action CTA Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3.5">
              <Button
                asChild
                className="rounded-full bg-gradient-to-r from-orange-500 via-amber-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white font-bold px-7 py-5 text-sm sm:text-base shadow-lg shadow-orange-500/20 border-0 transition-all hover:scale-105 active:scale-95"
              >
                <a
                  href={waLink("Hi GK Events, I'd like to book event equipment.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="mr-2 h-4.5 w-4.5 fill-white text-white" />
                  Book on WhatsApp
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="rounded-full bg-white/5 hover:bg-white/15 text-white border border-white/35 font-bold px-7 py-5 text-sm sm:text-base backdrop-blur-xs shadow-xs transition-all hover:scale-105 active:scale-95"
              >
                <Link to="/equipment">
                  View Equipment
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>

        {/* Floating Dark Glassmorphic Capability Bar (Bottom Center of Hero) */}
        <div className="relative z-20 mt-8 sm:mt-12 flex justify-center">
          <div className="inline-flex items-center justify-center gap-6 sm:gap-12 md:gap-16 rounded-full bg-slate-950/80 backdrop-blur-md border border-white/15 py-3 sm:py-3.5 px-6 sm:px-12 shadow-[0_15px_35px_rgba(0,0,0,0.6)]">
            
            {/* Sound Systems */}
            <Link
              to="/sound-system-rental"
              className="group flex flex-col items-center gap-1.5 transition-transform hover:scale-105 select-none"
            >
              <div className="flex h-8 w-8 items-center justify-center text-slate-200 group-hover:text-amber-400 transition-colors">
                <Speaker className="h-6 w-6 stroke-[1.8]" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors text-center leading-tight">
                Sound<br />Systems
              </span>
            </Link>

            <div className="h-8 w-px bg-white/15" />

            {/* LED Walls */}
            <Link
              to="/led-wall-rental"
              className="group flex flex-col items-center gap-1.5 transition-transform hover:scale-105 select-none"
            >
              <div className="flex h-8 w-8 items-center justify-center text-slate-200 group-hover:text-amber-400 transition-colors">
                <Tv className="h-6 w-6 stroke-[1.8]" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors text-center leading-tight">
                LED<br />Walls
              </span>
            </Link>

            <div className="h-8 w-px bg-white/15" />

            {/* Stage Lighting */}
            <Link
              to="/event-solutions"
              className="group flex flex-col items-center gap-1.5 transition-transform hover:scale-105 select-none"
            >
              <div className="flex h-8 w-8 items-center justify-center text-slate-200 group-hover:text-amber-400 transition-colors">
                <Lightbulb className="h-6 w-6 stroke-[1.8]" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors text-center leading-tight">
                Stage<br />Lighting
              </span>
            </Link>

            <div className="h-8 w-px bg-white/15" />

            {/* Video Production */}
            <Link
              to="/videography"
              className="group flex flex-col items-center gap-1.5 transition-transform hover:scale-105 select-none"
            >
              <div className="flex h-8 w-8 items-center justify-center text-slate-200 group-hover:text-amber-400 transition-colors">
                <Camera className="h-6 w-6 stroke-[1.8]" />
              </div>
              <span className="text-[10px] sm:text-xs font-bold text-slate-200 group-hover:text-amber-400 transition-colors text-center leading-tight">
                Video<br />Production
              </span>
            </Link>

          </div>
        </div>

      </div>
    </section>
  );
}
