import { Zap, Calendar, Headphones, ShieldCheck } from "lucide-react";

export function HowItWorks() {
  const steps = [
    {
      num: "01",
      image: "/images/process-step1.jpg",
      title: "Choose Your Equipment",
      desc: "Browse our catalogue and select the right equipment and services for your event.",
      isFeatured: false,
    },
    {
      num: "02",
      image: "/images/process-step2.jpg",
      title: "WhatsApp or Call Us",
      desc: "Share your event details, venue, and date. Our team will confirm availability and pricing quickly.",
      isFeatured: true,
    },
    {
      num: "03",
      image: "/images/process-step3.jpg",
      title: "We Deliver and Set Up",
      desc: "Our technical team delivers, installs, and sets up everything before your event and provides on-site support.",
      isFeatured: false,
    },
  ];

  return (
    <section
      className="relative bg-gradient-to-b from-[#FFFDF9] via-[#FAF6F0] to-[#FFF9F2] py-16 sm:py-24 border-t border-slate-100 overflow-hidden select-none"
      aria-label="How it works"
    >
      {/* Decorative Gold Ambient Blurs & Lights matching mockup */}
      <div className="pointer-events-none absolute -top-12 -left-12 h-80 w-80 rounded-full bg-gradient-to-br from-amber-400/15 via-orange-500/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-12 -right-12 h-80 w-80 rounded-full bg-gradient-to-tl from-amber-400/15 via-orange-500/10 to-transparent blur-3xl" />
      
      {/* Top-Right Stage Lighting Ambient Glow */}
      <div className="pointer-events-none absolute top-0 right-0 w-96 h-96 bg-gradient-to-bl from-amber-400/20 via-orange-400/10 to-transparent blur-3xl" />

      <div className="relative z-10 max-w-[1288px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-start text-left max-w-2xl mb-12 sm:mb-16">
          {/* Eyebrow: —— OUR PROCESS —— with gold horizontal bars */}
          <div className="flex items-center gap-3 mb-2.5">
            <div className="h-[1.5px] w-8 sm:w-12 bg-amber-500/80" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-slate-800">
              OUR PROCESS
            </span>
            <div className="h-[1.5px] w-8 sm:w-12 bg-amber-500/80" />
          </div>

          {/* Headline matching mockup */}
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.85rem] font-bold text-slate-950 tracking-tight leading-tight">
            How It <span className="text-amber-500 font-serif">Works</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
            From enquiry to event-ready setup — a simple, seamless process.
          </p>
        </div>

        {/* 3 Premium Process Cards with Connecting Dotted Arrows */}
        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 lg:gap-10 items-stretch">
          
          {steps.map((step, idx) => (
            <div key={step.num} className="relative flex flex-col">
              
              {/* Card Container */}
              <div
                className={`group relative flex flex-col justify-between h-full rounded-[28px] sm:rounded-[32px] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-2 cursor-pointer ${
                  step.isFeatured
                    ? "bg-gradient-to-b from-[#FFFDF2] via-white to-[#FFF9EC] border-2 border-amber-300/90 shadow-[0_20px_50px_rgba(245,158,11,0.16)] hover:shadow-[0_25px_60px_rgba(245,158,11,0.24)]"
                    : "bg-white border border-slate-200/90 shadow-[0_12px_32px_rgba(15,23,42,0.05)] hover:border-amber-300 hover:shadow-[0_20px_45px_rgba(245,158,11,0.12)]"
                }`}
              >
                {/* Top Badge: 01 / 02 / 03 */}
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center justify-center h-7 px-3 rounded-lg bg-gradient-to-r from-amber-500 to-amber-600 text-white font-black text-xs tracking-wider shadow-sm">
                    {step.num}
                  </span>
                </div>

                {/* 3D Illustration Graphic */}
                <div className="flex h-44 sm:h-48 md:h-52 w-full items-center justify-center my-3 transition-transform duration-500 group-hover:scale-[1.03]">
                  <img
                    src={step.image}
                    alt={step.title}
                    loading="lazy"
                    className="max-h-full max-w-full object-contain drop-shadow-sm select-none"
                  />
                </div>

                {/* Card Title & Description */}
                <div className="mt-4 pt-2">
                  <h3 className="font-display text-xl sm:text-[1.35rem] font-bold text-slate-900 tracking-tight transition-colors group-hover:text-amber-600">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm text-slate-500 font-normal leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </div>

              {/* Connecting Curved Dotted Gold Arrow on Desktop (between 1->2 and 2->3) */}
              {idx < steps.length - 1 && (
                <div className="hidden md:flex absolute -right-4 lg:-right-5 top-[40%] -translate-y-1/2 z-20 w-8 lg:w-10 items-center justify-center pointer-events-none">
                  <svg width="36" height="20" viewBox="0 0 36 20" fill="none" className="text-amber-400">
                    <path
                      d="M2 15 C10 4, 22 4, 32 10"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeDasharray="4 3"
                      fill="none"
                    />
                    <path
                      d="M27 6 L33 10 L28 14"
                      stroke="#f59e0b"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      fill="none"
                    />
                  </svg>
                </div>
              )}
            </div>
          ))}

        </div>

        {/* Bottom Guarantee & Trust Bar matching mockup */}
        <div className="mt-14 sm:mt-18 flex justify-center">
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
