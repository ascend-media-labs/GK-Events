import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  Zap,
  Calendar,
  Headphones,
  ShieldCheck,
  CheckCircle2,
  ArrowRight,
  ChevronRight,
  ChevronLeft,
  Sparkles,
} from "lucide-react";
import { waLink } from "@/data/site";

export function HowItWorks() {
  const [activeStep, setActiveStep] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const steps = [
    {
      num: "01",
      badge: "Step 01 · Selection",
      title: "Choose Your Equipment",
      subtitle: "Browse 500+ AV Items",
      desc: "Explore our comprehensive inventory of concert line arrays, 4K curved LED walls, intelligent moving head lights, laser projectors, and cinema cameras. Select the exact gear that matches your venue scale.",
      features: [
        "500+ Concert-Grade AV Equipment",
        "Tailored Wedding & Corporate Packages",
        "100% Transparent Instant Pricing",
      ],
      ctaText: "Browse Equipment Catalogue",
      ctaHref: "/equipment",
      isExternal: false,
      image: "/images/process-step1.jpg",
    },
    {
      num: "02",
      badge: "Step 02 · Consultation",
      title: "WhatsApp or Call Us",
      subtitle: "Instant Confirmation in 15 Mins",
      desc: "Share your event date, city, venue location, and expected crowd size. Our technical supervisors review your requirements immediately and confirm availability with an itemized quote.",
      features: [
        "Instant WhatsApp Availability Check",
        "Direct AV Technical Consultation",
        "Itemized Quotation & Custom Discounts",
      ],
      ctaText: "Chat on WhatsApp Now",
      ctaHref: waLink("Hi GK Events, I would like to check availability and get a quote for my upcoming event."),
      isExternal: true,
      image: "/images/process-step2.jpg",
    },
    {
      num: "03",
      badge: "Step 03 · Execution",
      title: "We Deliver and Set Up",
      subtitle: "Full On-Site Technical Operation",
      desc: "Our certified sound & lighting engineers arrive ahead of time, handle full rigging and laser calibration, perform redundancy checks, and manage complete live sound and visuals throughout your event.",
      features: [
        "Punctual Delivery & Stage Rigging",
        "Tested 100% Backups on Standby",
        "Certified Audio & Lighting Operators",
      ],
      ctaText: "View Event Solutions",
      ctaHref: "/event-solutions",
      isExternal: false,
      image: "/images/process-step3.jpg",
    },
  ];

  // Auto-progress every 6 seconds when not hovered
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % steps.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [isPaused, steps.length]);

  const current = steps[activeStep];

  return (
    <section
      className="relative bg-white py-10 sm:py-16 border-t border-slate-100 overflow-hidden select-none"
      aria-label="How it works"
    >
      <div className="relative z-10 max-w-[1288px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-2xl mb-8 sm:mb-12">
          {/* Eyebrow: —— OUR PROCESS —— with gold horizontal bars */}
          <div className="flex items-center gap-3 mb-2.5">
            <div className="h-[1.5px] w-8 sm:w-12 bg-amber-500/80" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-slate-800">
              OUR PROCESS
            </span>
            <div className="h-[1.5px] w-8 sm:w-12 bg-amber-500/80" />
          </div>

          {/* Headline */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-slate-950 tracking-tight leading-tight">
            How It <span className="text-amber-500 font-serif">Works</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
            From enquiry to event-ready setup — a simple, seamless 3-step process.
          </p>
        </div>

        {/* 2-Column Area: Left Content (Steps) | Right Image Showcase */}
        <div
          className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {/* ── LEFT COLUMN: Step-by-Step Interactive Cards (lg:col-span-7) ── */}
          <div className="lg:col-span-7 flex flex-col space-y-4">
            {steps.map((step, idx) => {
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.num}
                  onClick={() => setActiveStep(idx)}
                  className={`group relative rounded-2xl sm:rounded-3xl p-5 sm:p-6 transition-all duration-300 cursor-pointer text-left ${
                    isActive
                      ? "bg-white border-2 border-amber-400 shadow-[0_14px_40px_rgba(245,158,11,0.14)]"
                      : "bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-amber-300 hover:shadow-md"
                  }`}
                >
                  {/* Top Bar inside Card */}
                  <div className="flex items-center justify-between gap-3">
                    <div className="flex items-center gap-3.5">
                      <span
                        className={`inline-flex items-center justify-center h-8 w-8 sm:h-9 sm:w-9 rounded-xl font-mono font-bold text-xs sm:text-sm transition-all ${
                          isActive
                            ? "bg-gradient-to-r from-amber-500 to-amber-600 text-white shadow-md shadow-amber-500/30 scale-105"
                            : "bg-white text-slate-600 border border-slate-200 group-hover:border-amber-300 group-hover:text-amber-600"
                        }`}
                      >
                        {step.num}
                      </span>
                      <div>
                        <h3
                          className={`font-display text-base sm:text-lg lg:text-xl font-bold tracking-tight transition-colors ${
                            isActive ? "text-slate-950" : "text-slate-700 group-hover:text-amber-600"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p className="text-xs font-semibold text-amber-600/90">
                          {step.subtitle}
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      {isActive ? (
                        <span className="hidden sm:inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-amber-500/10 text-amber-700 text-[11px] font-bold">
                          <Sparkles className="h-3 w-3 text-amber-500" />
                          Active Step
                        </span>
                      ) : (
                        <span className="text-xs text-slate-400 group-hover:text-amber-600 flex items-center font-medium">
                          Click to view <ChevronRight className="h-4 w-4 ml-0.5" />
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Expanded Body for the Active Step */}
                  {isActive && (
                    <div className="mt-4 pt-4 border-t border-amber-100/80">
                      <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                        {step.desc}
                      </p>

                      {/* Bullet Highlights */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                        {step.features.map((feat, fIdx) => (
                          <div key={fIdx} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500 shrink-0" />
                            <span>{feat}</span>
                          </div>
                        ))}
                      </div>

                      {/* CTA Button */}
                      <div className="pt-1">
                        {step.isExternal ? (
                          <a
                            href={step.ctaHref}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-amber-500/20 hover:from-amber-600 hover:to-amber-700 transition-all hover:scale-105 active:scale-95"
                          >
                            <span>{step.ctaText}</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </a>
                        ) : (
                          <Link
                            to={step.ctaHref}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-gradient-to-r from-amber-500 to-amber-600 text-white text-xs sm:text-sm font-bold shadow-md shadow-amber-500/20 hover:from-amber-600 hover:to-amber-700 transition-all hover:scale-105 active:scale-95"
                          >
                            <span>{step.ctaText}</span>
                            <ArrowRight className="h-3.5 w-3.5" />
                          </Link>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* ── RIGHT COLUMN: Dedicated Image Showcase Box (lg:col-span-5) ── */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full rounded-3xl sm:rounded-[32px] border-2 border-amber-300/80 bg-gradient-to-b from-amber-50/40 via-white to-amber-50/20 p-6 sm:p-8 shadow-[0_20px_50px_rgba(245,158,11,0.12)] overflow-hidden">
              
              {/* Top Meta Header of Showcase */}
              <div className="flex items-center justify-between gap-2 mb-4">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-500 text-white font-mono text-xs font-bold shadow-sm">
                  <span className="h-1.5 w-1.5 rounded-full bg-white animate-ping" />
                  STEP {current.num} OF 03
                </span>
                <span className="text-[11px] font-mono text-slate-500 font-semibold uppercase tracking-wider">
                  {current.badge}
                </span>
              </div>

              {/* Central 3D Illustration */}
              <div className="relative h-64 sm:h-72 lg:h-80 w-full flex items-center justify-center p-2 transition-all duration-500">
                <img
                  key={current.image}
                  src={current.image}
                  alt={current.title}
                  className="max-h-full max-w-full object-contain drop-shadow-md select-none transition-all duration-500 animate-fadeIn"
                />
              </div>

              {/* Bottom Caption & Interactive Step Controller */}
              <div className="mt-4 pt-4 border-t border-amber-200/60 flex items-center justify-between gap-3">
                {/* Dots indicator */}
                <div className="flex items-center gap-1.5">
                  {steps.map((_, i) => (
                    <button
                      key={i}
                      type="button"
                      onClick={() => setActiveStep(i)}
                      aria-label={`Go to step ${i + 1}`}
                      className={`h-2.5 rounded-full transition-all duration-300 ${
                        activeStep === i
                          ? "w-8 bg-amber-500 shadow-sm shadow-amber-500/40"
                          : "w-2.5 bg-slate-300 hover:bg-amber-300"
                      }`}
                    />
                  ))}
                </div>

                {/* Next / Previous Step Buttons */}
                <div className="flex items-center gap-1.5">
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev - 1 + steps.length) % steps.length)}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                    aria-label="Previous Step"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setActiveStep((prev) => (prev + 1) % steps.length)}
                    className="p-1.5 rounded-lg border border-slate-200 text-slate-600 hover:border-amber-400 hover:text-amber-600 hover:bg-amber-50 transition-colors"
                    aria-label="Next Step"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

        {/* Bottom Guarantee & Trust Bar */}
        <div className="mt-10 sm:mt-14 flex justify-center">
          <div className="inline-flex flex-wrap items-center justify-center gap-4 sm:gap-8 md:gap-10 rounded-full bg-white/95 backdrop-blur-md border border-amber-200/80 py-3.5 sm:py-4 px-6 sm:px-12 shadow-[0_12px_36px_rgba(245,158,11,0.08)]">
            
            {/* Quick Response */}
            <div className="flex items-center gap-2.5">
              <Zap className="h-5 w-5 text-amber-500 fill-amber-500" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">Quick Response</span>
            </div>

            <div className="hidden sm:block h-4 w-px bg-slate-200/80" />

            {/* Flexible Booking */}
            <div className="flex items-center gap-2.5">
              <Calendar className="h-5 w-5 text-amber-500" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">Flexible Booking</span>
            </div>

            <div className="hidden sm:block h-4 w-px bg-slate-200/80" />

            {/* Expert Support */}
            <div className="flex items-center gap-2.5">
              <Headphones className="h-5 w-5 text-amber-500" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">Expert Support</span>
            </div>

            <div className="hidden sm:block h-4 w-px bg-slate-200/80" />

            {/* Event-Ready Setup */}
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="h-5 w-5 text-amber-500 fill-amber-500/20" />
              <span className="text-xs sm:text-sm font-bold text-slate-800">Event-Ready Setup</span>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
