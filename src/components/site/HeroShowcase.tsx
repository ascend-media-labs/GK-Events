import { Link } from "@tanstack/react-router";
import { MessageCircle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/data/site";

export function HeroShowcase() {
  return (
    <section className="relative w-full overflow-hidden bg-[#07090e] text-white pt-8 pb-12 sm:pt-14 sm:pb-16" aria-label="Hero Showcase">
      {/* Pristine Full-Width Background Stage Image */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        <img
          src="/images/hero-stage-grand.jpg"
          alt="GK Events Royal Wedding Stage & Live Concert Lighting"
          className="h-full w-full object-cover object-[80%_center] md:object-center transition-transform duration-1000"
          loading="eager"
        />
        {/* Subtle dark vignette on left side so typography is crystal sharp */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#07090e]/95 via-[#07090e]/60 to-transparent max-w-3xl hidden md:block" />
        <div className="absolute inset-0 bg-[#07090e]/65 md:hidden" />
        {/* Bottom smooth fade into content below */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#07090e] via-[#07090e]/70 to-transparent" />
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#07090e]/50 to-transparent" />
      </div>

      {/* Hero Content Container */}
      <div className="relative z-10 max-w-[1288px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 min-h-[440px] sm:min-h-[480px] items-center">
          
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
      </div>
    </section>
  );
}
