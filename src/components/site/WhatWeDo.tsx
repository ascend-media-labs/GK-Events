import { useRef, useState } from "react";
import { Link } from "@tanstack/react-router";
import { Users, Mic, Briefcase, PlayCircle } from "lucide-react";
import { images } from "@/data/site";

const SERVICES = [
  { lines: ["Weddings &", "Social Events"], to: "/wedding-events", image: images.wedding, icon: Users },
  { lines: ["Concerts &", "Live Shows"], to: "/events", image: images.hero, icon: Mic },
  { lines: ["Corporate", "Events"], to: "/corporate-events", image: images.corporate, icon: Briefcase },
  { lines: ["Video Production", "& Live Broadcasting"], to: "/videography", image: images.camera, icon: PlayCircle },
];

export function WhatWeDo() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  const onScroll = () => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.firstElementChild as HTMLElement | null;
    if (!card) return;
    const step = card.offsetWidth + 16;
    const max = el.scrollWidth - el.clientWidth;
    const idx = el.scrollLeft >= max - 4 ? SERVICES.length - 1 : Math.round(el.scrollLeft / step);
    setActive(Math.min(SERVICES.length - 1, Math.max(0, idx)));
  };

  const goTo = (i: number) => {
    const el = trackRef.current;
    const card = el?.children[i] as HTMLElement | undefined;
    if (el && card) el.scrollTo({ left: card.offsetLeft - el.offsetLeft - 16, behavior: "smooth" });
  };

  return (
    <section
      className="relative bg-white pt-8 pb-6 sm:pt-10 lg:pt-12 lg:pb-8 border-t border-slate-100"
      aria-label="Our Services"
    >
      <div className="mx-auto max-w-[1288px] lg:px-[60px]">
        {/* Header: Clean Left Aligned with Gold Accent Bars */}
        <div className="flex flex-col items-start text-left max-w-2xl px-4 sm:px-6 lg:px-0 mb-6 sm:mb-8">
          <div className="flex items-center gap-3 mb-2.5">
            <div className="h-[1.5px] w-8 sm:w-12 bg-amber-500/80" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.25em] text-slate-800">
              OUR SERVICES
            </span>
            <div className="h-[1.5px] w-8 sm:w-12 bg-amber-500/80" />
          </div>

          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-black text-slate-950 tracking-tight leading-tight">
            What We <span className="text-amber-500">Do</span>
          </h2>

          <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal leading-relaxed">
            End-to-end event production, equipment rental &amp; technical setup for every scale.
          </p>
        </div>

        {/* Cards: horizontal swipe on mobile, 4-col grid on desktop */}
        <div
          ref={trackRef}
          data-reveal-group
          onScroll={onScroll}
          className="mt-7 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden lg:mt-6 lg:grid lg:grid-cols-4 lg:gap-6 lg:overflow-visible lg:px-0"
        >
          {SERVICES.map((s) => (
            <Link
              key={s.to}
              to={s.to}
              className="group relative w-[62%] shrink-0 snap-start sm:w-[40%] lg:w-auto"
            >
              <div className="h-40 overflow-hidden rounded-[22px] bg-slate-200 sm:h-44 lg:h-[150px] xl:h-[160px]">
                <img
                  src={s.image}
                  alt={s.lines.join(" ")}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="relative -mt-9 flex items-center gap-3 rounded-[20px] bg-white px-4 py-3.5 shadow-[0_10px_28px_rgba(15,23,42,0.10)] transition-shadow group-hover:shadow-[0_14px_34px_rgba(234,88,12,0.18)] lg:justify-center lg:gap-4 lg:px-5">
                <s.icon className="h-6 w-6 shrink-0 stroke-[1.6] text-slate-800 transition-colors group-hover:text-orange-600 lg:h-7 lg:w-7" />
                <span className="font-display text-[13px] font-bold leading-tight text-slate-900 transition-colors group-hover:text-orange-600 lg:text-sm">
                  {s.lines[0]}
                  <br />
                  {s.lines[1]}
                </span>
              </div>
            </Link>
          ))}
        </div>

        {/* Dots (mobile/tablet only) */}
        <div className="mt-2 flex justify-center gap-2 lg:hidden">
          {SERVICES.map((s, i) => (
            <button
              key={s.to}
              type="button"
              aria-label={`Show ${s.lines.join(" ")}`}
              onClick={() => goTo(i)}
              className={`h-2 rounded-full transition-all ${i === active ? "w-6 bg-orange-500" : "w-2 bg-slate-300"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
