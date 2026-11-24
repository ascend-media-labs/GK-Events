import { Link } from "@tanstack/react-router";
import { useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

export interface CategoryCardItem {
  id: string;
  name: string;
  image: string;
  to: string;
}

const ALL_CATEGORIES: CategoryCardItem[] = [
  {
    id: "projectors",
    name: "Projectors & Screens",
    image: "/images/cat-projectors.webp",
    to: "/equipment#projector",
  },
  {
    id: "sound-systems",
    name: "Sound Systems",
    image: "/images/cat-sound-systems.webp",
    to: "/equipment#sound",
  },
  {
    id: "microphones",
    name: "Microphones",
    image: "/images/cat-microphones.webp",
    to: "/equipment#mic",
  },
  {
    id: "televisions",
    name: "Televisions",
    image: "/images/cat-televisions.webp",
    to: "/equipment#tv",
  },
  {
    id: "speakers",
    name: "Speakers",
    image: "/images/cat-speakers.webp",
    to: "/equipment#sound",
  },
  {
    id: "led-screens",
    name: "LED Screens",
    image: "/images/cat-led.webp",
    to: "/equipment#projector",
  },
  {
    id: "combo-packages",
    name: "Combo Packages",
    image: "/images/cat-combos.webp",
    to: "/equipment#combo",
  },
];

export function BrowseByCategory() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const scrollAmount = direction === "left" ? -280 : 280;
      scrollRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative bg-white py-12 sm:py-16 border-t border-slate-100" aria-label="Browse by Category">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        {/* Section Header with Left-Aligned Title and Right-Side Scroll Navigation Buttons */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8 sm:mb-10">
          <div className="text-left max-w-2xl">
            <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-950 tracking-tight">
              Browse by Category
            </h2>
            <p className="mt-2 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
              From single-item rentals to complete setups — all delivered and installed.
            </p>
          </div>

          {/* Smooth Scroll Navigation Arrow Controls */}
          <div className="flex items-center gap-2 self-start sm:self-auto shrink-0 pb-1">
            <button
              onClick={() => handleScroll("left")}
              aria-label="Scroll categories left"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50/50 shadow-xs active:scale-95 transition-all"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <button
              onClick={() => handleScroll("right")}
              aria-label="Scroll categories right"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-slate-200/90 bg-white text-slate-700 hover:text-blue-600 hover:border-blue-400 hover:bg-blue-50/50 shadow-xs active:scale-95 transition-all"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Single Row Horizontal Scrolling Categories Track */}
        <div
          ref={scrollRef}
          className="flex items-stretch gap-4 sm:gap-6 overflow-x-auto pb-6 scroll-smooth snap-x snap-mandatory scrollbar-none"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {ALL_CATEGORIES.map((item) => (
            <a
              key={item.id}
              href={item.to}
              className="group relative flex flex-col items-center justify-center shrink-0 w-[210px] sm:w-[240px] md:w-[250px] snap-start rounded-[28px] sm:rounded-[32px] border border-slate-200/70 bg-white p-6 sm:p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/60 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
            >
              {/* Product Cutout Image Frame */}
              <div className="relative flex h-24 sm:h-28 w-full items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain drop-shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                />
              </div>

              {/* Category Name */}
              <span className="mt-4 font-display text-base sm:text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                {item.name}
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
