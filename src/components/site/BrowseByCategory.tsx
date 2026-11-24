import { Link } from "@tanstack/react-router";
import { useRef, useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CategoryCardItem {
  id: string;
  name: string;
  image: string;
  to: string;
}

const CATEGORIES: CategoryCardItem[] = [
  {
    id: "projectors",
    name: "Projectors & Screens",
    image: "/images/card-projectors.jpg",
    to: "/projector-rental",
  },
  {
    id: "sound-systems",
    name: "Sound Systems",
    image: "/images/card-sound-systems.jpg",
    to: "/sound-system-rental",
  },
  {
    id: "microphones",
    name: "Microphones",
    image: "/images/card-microphones.jpg",
    to: "/sound-system-rental",
  },
  {
    id: "televisions",
    name: "Televisions",
    image: "/images/card-televisions.jpg",
    to: "/led-tv-rental",
  },
  {
    id: "speakers",
    name: "Speakers",
    image: "/images/card-speakers.jpg",
    to: "/sound-system-rental",
  },
];

export function BrowseByCategory() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  const onScroll = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const progress = scrollLeft / (scrollWidth - clientWidth || 1);
      const index = Math.min(3, Math.floor(progress * 4));
      setActiveIndex(index);
    }
  };

  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 border-t border-slate-100" aria-label="Browse by Category">
      {/* Decorative Warm Amber / Orange Wave Ribbon in Background Corners */}
      <div className="pointer-events-none absolute -top-10 -left-10 h-72 w-72 rounded-full bg-gradient-to-br from-orange-400/10 via-amber-300/10 to-transparent blur-3xl" />
      <div className="pointer-events-none absolute -bottom-10 -right-10 h-80 w-80 rounded-full bg-gradient-to-tl from-orange-500/10 via-amber-400/10 to-transparent blur-3xl" />

      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="relative flex flex-col items-center justify-center text-center mb-10 sm:mb-12">
          
          {/* Eyebrow: —— EXPLORE OUR EQUIPMENT —— with gold horizontal bars */}
          <div className="flex items-center justify-center gap-3 mb-2">
            <div className="h-[1.5px] w-8 sm:w-12 bg-amber-500/80" />
            <span className="text-[10px] sm:text-xs font-black uppercase tracking-[0.22em] text-slate-800">
              EXPLORE OUR EQUIPMENT
            </span>
            <div className="h-[1.5px] w-8 sm:w-12 bg-amber-500/80" />
          </div>

          {/* Headline matching mockup */}
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.85rem] font-black text-slate-950 tracking-tight">
            Browse by <span className="text-orange-500">Category</span>
          </h2>

          {/* Subtitle */}
          <p className="mt-2 text-sm sm:text-base text-slate-500 font-normal max-w-xl mx-auto">
            From single-item rentals to complete setups — all delivered and installed.
          </p>

          {/* Top-Right Arrow Navigation Buttons */}
          <div className="sm:absolute sm:right-0 sm:top-1/2 sm:-translate-y-1/2 flex items-center gap-2.5 mt-4 sm:mt-0">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Previous categories"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-orange-200/80 bg-white text-orange-500 shadow-sm hover:bg-orange-50 hover:border-orange-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronLeft className="h-5 w-5 stroke-[2.2]" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Next categories"
              className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-full border border-orange-200/80 bg-white text-orange-500 shadow-sm hover:bg-orange-50 hover:border-orange-400 hover:scale-105 active:scale-95 transition-all cursor-pointer"
            >
              <ChevronRight className="h-5 w-5 stroke-[2.2]" />
            </button>
          </div>
        </div>

        {/* 5 Cards Row Track matching reference mockup */}
        <div
          ref={scrollRef}
          onScroll={onScroll}
          className="flex items-stretch justify-start lg:justify-between gap-4 sm:gap-5 lg:gap-6 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {CATEGORIES.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className="group relative flex flex-col shrink-0 w-[215px] sm:w-[235px] lg:w-[230px] xl:w-[240px] snap-start rounded-[26px] sm:rounded-[28px] overflow-hidden shadow-[0_12px_28px_rgba(0,0,0,0.08)] border border-slate-200/80 bg-slate-950 transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_20px_45px_rgba(249,115,22,0.24)] select-none cursor-pointer"
            >
              <img
                src={item.image}
                alt={item.name}
                loading="lazy"
                className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-103"
              />
            </Link>
          ))}
        </div>

        {/* Pagination Indicator Dots */}
        <div className="flex items-center justify-center gap-2 mt-8">
          <div
            className={`transition-all duration-300 ${
              activeIndex === 0
                ? "h-2 w-7 rounded-full bg-orange-500"
                : "h-2 w-2 rounded-full bg-slate-300"
            }`}
          />
          <div
            className={`transition-all duration-300 ${
              activeIndex === 1
                ? "h-2 w-7 rounded-full bg-orange-500"
                : "h-2 w-2 rounded-full bg-slate-300"
            }`}
          />
          <div
            className={`transition-all duration-300 ${
              activeIndex === 2
                ? "h-2 w-7 rounded-full bg-orange-500"
                : "h-2 w-2 rounded-full bg-slate-300"
            }`}
          />
          <div
            className={`transition-all duration-300 ${
              activeIndex === 3
                ? "h-2 w-7 rounded-full bg-orange-500"
                : "h-2 w-2 rounded-full bg-slate-300"
            }`}
          />
        </div>

      </div>
    </section>
  );
}
