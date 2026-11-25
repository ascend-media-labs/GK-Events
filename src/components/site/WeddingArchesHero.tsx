import { Link } from "@tanstack/react-router";
import { ArrowRight, MessageCircle, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, waLink } from "@/data/site";

export function WeddingArchesHero() {
  return (
    <section className="relative w-full pt-1 sm:pt-3 pb-8 sm:pb-10 bg-white" aria-label="Wedding Event Solutions">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        {/* Outer Framed Hero Card with delicate gold/champagne border matching reference */}
        <div className="relative overflow-hidden rounded-[2.5rem] border border-amber-200/90 bg-gradient-to-b from-[#fcfbf9] via-white to-[#faf8f5] p-6 sm:p-10 lg:p-14 shadow-[0_16px_48px_rgba(15,23,42,0.04)] text-center">
          
          {/* Subtle Ambient Glow */}
          <div className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-96 rounded-full bg-amber-400/10 blur-3xl" />

          {/* Top Header Content */}
          <div className="relative z-10 max-w-3xl mx-auto space-y-4 mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-50 text-amber-800 text-xs sm:text-[13px] font-bold tracking-wide border border-amber-200/80 shadow-xs">
              <Sparkles className="h-3.5 w-3.5 text-amber-600" />
              <span>WEDDING EVENT SOLUTIONS · GK EVENTS</span>
            </div>

            <h1 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black text-slate-950 tracking-tight leading-[1.12]">
              Your wedding, <span className="text-amber-600 italic font-serif">brilliantly produced.</span>
            </h1>

            <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
              Sound, LED backdrops, stage lighting, candid photography, cinematic films and 4K live streaming — one dedicated team for every celebration from haldi to reception.
            </p>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap justify-center gap-3">
              <Button asChild variant="hero" size="xl" className="rounded-full shadow-gold font-bold">
                <Link to="/contact">
                  <span>Get a Quote</span>
                  <ArrowRight className="ml-1.5 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild variant="whatsapp" size="xl" className="rounded-full text-white font-bold">
                <a
                  href={waLink("Hi GK Events, I would like to plan and get a quote for a wedding event.")}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="mr-1.5 h-4 w-4" />
                  <span>WhatsApp</span>
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                size="xl"
                className="rounded-full border-slate-300 bg-white text-slate-800 hover:bg-slate-50 font-bold"
              >
                <a href={contact.phoneHref}>
                  <Phone className="mr-1.5 h-4 w-4" />
                  <span>Call Now</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Centerpiece 5-Panel Stepped Arch Gallery matching reference */}
          <div className="relative mx-auto max-w-4xl overflow-hidden rounded-2xl border border-amber-300/60 bg-white p-2 sm:p-4 shadow-[0_8px_30px_rgba(15,23,42,0.04)]">
            <img
              src="/images/wedding-hero-arches.jpg"
              alt="GK Events Wedding Production Cathedral Arches"
              className="w-full h-auto object-contain mx-auto drop-shadow-sm select-none"
              loading="eager"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
