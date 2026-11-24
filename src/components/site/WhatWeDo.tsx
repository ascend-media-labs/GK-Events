import { Link } from "@tanstack/react-router";
import { Users, Mic, Briefcase, PlayCircle, ArrowRight } from "lucide-react";
import { images } from "@/data/site";

const SERVICES = [
  {
    title: "Weddings & Social Events",
    to: "/wedding-events",
    image: images.wedding,
    icon: Users,
    desc: "Grand stages, LED backdrops, sangeet audio & royal decor.",
  },
  {
    title: "Concerts & Live Shows",
    to: "/events",
    image: images.hero,
    icon: Mic,
    desc: "Line arrays, stage trusses, moving heads & lasers.",
  },
  {
    title: "Corporate Events",
    to: "/corporate-events",
    image: images.corporate,
    icon: Briefcase,
    desc: "Curved LED displays, seamless switching, podium audio & mics.",
  },
  {
    title: "Video Production & Live Broadcasting",
    to: "/videography",
    image: images.camera,
    icon: PlayCircle,
    desc: "4K cinema cameras, motorized gimbals & multi-cam streaming.",
  },
];

export function WhatWeDo() {
  return (
    <section className="relative bg-white pt-16 sm:pt-24 pb-14 sm:pb-20" aria-label="Our Services">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-left max-w-2xl mb-10 sm:mb-14">
          <p className="text-xs font-black uppercase tracking-[0.2em] text-amber-600 mb-1.5">
            OUR SERVICES
          </p>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-950 tracking-tight">
            What We Do
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal">
            End-to-end event production, equipment rental &amp; technical setup for every scale.
          </p>
        </div>

        {/* 4 Cards Grid matching mockup */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
          {SERVICES.map((item) => (
            <Link
              key={item.title}
              to={item.to}
              className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-[0_8px_24px_rgba(15,23,42,0.05)] transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-[0_16px_36px_rgba(15,23,42,0.12)]"
            >
              {/* Photo Header */}
              <div className="relative h-44 sm:h-48 w-full overflow-hidden bg-slate-100">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* Bottom White Label Bar with Icon */}
              <div className="flex items-center justify-center gap-2.5 bg-white py-4 px-4 text-center border-t border-slate-100 transition-colors group-hover:bg-amber-50/50">
                <item.icon className="h-4.5 w-4.5 text-slate-700 shrink-0 group-hover:text-amber-600 transition-colors" />
                <span className="font-display text-xs sm:text-[13px] font-bold text-slate-900 group-hover:text-amber-700 transition-colors line-clamp-1">
                  {item.title}
                </span>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
}
