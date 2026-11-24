import { Link } from "@tanstack/react-router";
import {
  Sparkles,
  ArrowRight,
  MessageCircle,
  Phone,
  Laptop,
  CheckCircle2,
  Truck,
  Headphones,
  Sliders,
  Tv,
  Speaker,
} from "lucide-react";
import { waLink } from "@/data/site";

function Step1Illustration() {
  return (
    <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-blue-50/90 via-slate-50/60 to-amber-50/40 border border-slate-200/80 p-4">
      {/* Background radial accent */}
      <div className="absolute inset-0 bg-radial from-amber-200/30 via-transparent to-transparent opacity-80" />

      {/* Modern Laptop & Device Setup */}
      <div className="relative flex items-center justify-center">
        {/* Laptop Base & Screen */}
        <div className="relative h-28 w-44 rounded-xl border border-slate-200/90 bg-white p-2 shadow-xl">
          {/* Laptop Screen Header */}
          <div className="flex items-center gap-1 border-b border-slate-100 pb-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-amber-400" />
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
            <span className="ml-2 text-[9px] font-mono font-semibold text-slate-500">GK AV Catalogue</span>
          </div>

          {/* Catalog Grid inside Laptop Screen */}
          <div className="mt-2 grid grid-cols-3 gap-1.5">
            <div className="flex flex-col items-center justify-center rounded-lg border border-slate-200/70 bg-slate-50 p-1 text-slate-700">
              <Speaker className="h-3.5 w-3.5 text-amber-600" />
              <span className="text-[7.5px] font-semibold text-slate-700 mt-0.5">Audio</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border border-amber-300 bg-amber-50/90 p-1 text-amber-800 shadow-xs">
              <Tv className="h-3.5 w-3.5 text-amber-600" />
              <span className="text-[7.5px] font-bold text-amber-800 mt-0.5">LED Wall</span>
            </div>
            <div className="flex flex-col items-center justify-center rounded-lg border border-slate-200/70 bg-slate-50 p-1 text-slate-700">
              <Sliders className="h-3.5 w-3.5 text-amber-600" />
              <span className="text-[7.5px] font-semibold text-slate-700 mt-0.5">Lighting</span>
            </div>
          </div>
        </div>

        {/* Floating Mobile Phone on the Left */}
        <div className="absolute -left-4 bottom-0 h-20 w-12 rounded-xl border border-slate-300/80 bg-white p-1.5 shadow-lg rotate-[-8deg]">
          <div className="flex h-full flex-col justify-between rounded-lg bg-slate-100 p-1">
            <div className="mx-auto h-1 w-4 rounded-full bg-slate-300" />
            <div className="flex justify-center text-amber-600">
              <Laptop className="h-4 w-4" />
            </div>
            <span className="text-[6.5px] font-bold text-center text-slate-800">Browse</span>
          </div>
        </div>

        {/* Floating Selected Equipment Badge */}
        <div className="absolute -right-2 -top-2 flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50/95 backdrop-blur-md px-2.5 py-1 text-amber-900 shadow-sm">
          <CheckCircle2 className="h-3.5 w-3.5 text-amber-600" />
          <span className="text-[9px] font-extrabold uppercase tracking-wider">Select Gear</span>
        </div>
      </div>
    </div>
  );
}

function Step2Illustration() {
  return (
    <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-emerald-50/90 via-slate-50/60 to-teal-50/40 border border-slate-200/80 p-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial from-emerald-200/30 via-transparent to-transparent opacity-80" />

      {/* Customer Representative & Chat Interface */}
      <div className="relative flex items-center justify-center">
        {/* Central Support Specialist Card */}
        <div className="relative flex h-28 w-38 flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xl">
          <div className="relative flex h-12 w-12 items-center justify-center rounded-full border border-emerald-300 bg-emerald-50 text-emerald-600 shadow-sm">
            <Headphones className="h-6 w-6" />
            <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full border-2 border-white bg-emerald-500" />
          </div>
          <p className="mt-2 text-[10px] font-bold text-slate-800">Event Coordinator</p>
          <span className="text-[8.5px] text-emerald-600 font-semibold">Online · Fast Reply</span>
        </div>

        {/* Floating WhatsApp Bubble */}
        <div className="absolute -left-4 -top-2 flex items-center gap-1.5 rounded-full border border-emerald-400 bg-emerald-600 px-3 py-1 text-white shadow-md">
          <MessageCircle className="h-3.5 w-3.5 fill-current" />
          <span className="text-[9px] font-bold">WhatsApp</span>
        </div>

        {/* Floating Call Confirmation Bubble */}
        <div className="absolute -right-4 -bottom-1 flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-3 py-1 text-amber-900 shadow-md">
          <Phone className="h-3 w-3 text-amber-600 animate-pulse" />
          <span className="text-[9px] font-bold">Instant Quote</span>
        </div>
      </div>
    </div>
  );
}

function Step3Illustration() {
  return (
    <div className="relative flex h-48 w-full items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-b from-sky-50/90 via-slate-50/60 to-blue-50/40 border border-slate-200/80 p-4">
      {/* Background glow */}
      <div className="absolute inset-0 bg-radial from-blue-200/30 via-transparent to-transparent opacity-80" />

      {/* Delivery Van & Logistics Graphic */}
      <div className="relative flex items-center justify-center">
        {/* Central Van & Logistics Box */}
        <div className="relative flex h-28 w-44 flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-3 shadow-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-blue-200 bg-blue-50 text-blue-600 shadow-sm">
            <Truck className="h-7 w-7" />
          </div>
          <p className="mt-2 text-[10px] font-bold text-slate-800">Dispatch & On-Site Crew</p>
          <span className="text-[8.5px] text-slate-500 font-medium">Arrives Before Event Starts</span>
        </div>

        {/* Floating Verified Setup Pill */}
        <div className="absolute -top-3 -right-2 flex items-center gap-1.5 rounded-full border border-emerald-300 bg-emerald-50 px-2.5 py-1 text-emerald-700 shadow-sm">
          <CheckCircle2 className="h-3 w-3 text-emerald-600" />
          <span className="text-[9px] font-bold">Tested & Ready</span>
        </div>

        {/* Floating Zero Hassle Pill */}
        <div className="absolute -bottom-2 -left-2 flex items-center gap-1 rounded-full border border-slate-200 bg-white px-2.5 py-0.5 text-slate-700 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-500" />
          <span className="text-[9px] font-semibold">Post-Event Collect</span>
        </div>
      </div>
    </div>
  );
}

export function HowItWorks() {
  return (
    <section className="relative border-y border-slate-200/80 bg-white py-16 sm:py-24 text-slate-900">
      {/* Subtle ambient light warm glow */}
      <div className="pointer-events-none absolute left-1/2 top-10 -translate-x-1/2 w-3/4 h-56 bg-amber-500/5 blur-3xl rounded-full" />

      <div className="container-x relative">
        {/* Section Header: Left Aligned Matching User Guidelines */}
        <div className="mb-12 max-w-2xl text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 shadow-xs">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>Seamless Booking Process</span>
          </div>

          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            How it <span className="text-amber-600">works.</span>
          </h2>

          <p className="mt-2.5 text-base text-slate-600 leading-relaxed font-normal">
            Three simple steps from enquiry to event-ready setup.
          </p>
        </div>

        {/* 3 Step Cards Grid (Matching User's Reference Layout on Pure White Background) */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {/* Step 1 */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]">
            {/* Step Number Tag */}
            <span className="absolute top-4 left-4 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-amber-500/10 border border-amber-500/25 text-xs font-mono font-extrabold text-amber-800 shadow-xs">
              01
            </span>

            <div>
              {/* Graphic Illustration */}
              <Step1Illustration />

              {/* Title & Description */}
              <h3 className="mt-6 font-display text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors text-center sm:text-left">
                Choose your equipment
              </h3>

              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed text-center sm:text-left">
                Browse our catalogue. Select the items you need for your event type and size.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/equipment"
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
              >
                Browse catalogue <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Step 1</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]">
            {/* Step Number Tag */}
            <span className="absolute top-4 left-4 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/25 text-xs font-mono font-extrabold text-emerald-700 shadow-xs">
              02
            </span>

            <div>
              {/* Graphic Illustration */}
              <Step2Illustration />

              {/* Title & Description */}
              <h3 className="mt-6 font-display text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors text-center sm:text-left">
                WhatsApp or call us
              </h3>

              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed text-center sm:text-left">
                Share your event date, venue, and city. We confirm availability and pricing within minutes.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <a
                href={waLink("Hi GK Events, I would like to check availability and pricing for my upcoming event.")}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 mr-1" /> WhatsApp Us <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Step 2</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/40 hover:shadow-[0_16px_36px_rgba(0,0,0,0.08)]">
            {/* Step Number Tag */}
            <span className="absolute top-4 left-4 z-10 flex h-7 w-7 items-center justify-center rounded-full bg-blue-500/10 border border-blue-500/25 text-xs font-mono font-extrabold text-blue-700 shadow-xs">
              03
            </span>

            <div>
              {/* Graphic Illustration */}
              <Step3Illustration />

              {/* Title & Description */}
              <h3 className="mt-6 font-display text-xl font-bold text-slate-900 group-hover:text-amber-600 transition-colors text-center sm:text-left">
                We deliver and set up
              </h3>

              <p className="mt-2.5 text-sm text-slate-600 leading-relaxed text-center sm:text-left">
                Our team arrives before your event, sets everything up, and collects after. Zero hassle.
              </p>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between">
              <Link
                to="/contact"
                className="inline-flex items-center gap-1 text-xs font-bold text-amber-600 hover:text-amber-700 transition-colors"
              >
                Plan your setup <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </Link>
              <span className="text-[10px] font-mono text-slate-400 uppercase font-semibold">Step 3</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
