import { Link } from "@tanstack/react-router";

export interface CategoryCardItem {
  id: string;
  name: string;
  image: string;
  to: string;
}

const TOP_CATEGORIES: CategoryCardItem[] = [
  {
    id: "projectors",
    name: "Projectors & Screens",
    image: "/images/cat-projectors.webp",
    to: "/equipment",
  },
  {
    id: "sound-systems",
    name: "Sound Systems",
    image: "/images/cat-sound-systems.webp",
    to: "/equipment",
  },
  {
    id: "microphones",
    name: "Microphones",
    image: "/images/cat-microphones.webp",
    to: "/equipment",
  },
  {
    id: "televisions",
    name: "Televisions",
    image: "/images/cat-televisions.webp",
    to: "/equipment",
  },
  {
    id: "speakers",
    name: "Speakers",
    image: "/images/cat-speakers.webp",
    to: "/equipment",
  },
];

const BOTTOM_CATEGORIES: CategoryCardItem[] = [
  {
    id: "led-screens",
    name: "LED Screens",
    image: "/images/cat-led.webp",
    to: "/equipment",
  },
  {
    id: "combo-packages",
    name: "Combo Packages",
    image: "/images/cat-combos.webp",
    to: "/offers",
  },
];

export function BrowseByCategory() {
  return (
    <section className="relative bg-white py-12 sm:py-16 border-t border-slate-100" aria-label="Browse by Category">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-950 tracking-tight">
            Browse by Category
          </h2>
          <p className="mt-3 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            From single-item rentals to complete setups — all delivered and installed.
          </p>
        </div>

        {/* Top Row: 5 Cards (Projectors, Sound Systems, Microphones, Televisions, Speakers) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {TOP_CATEGORIES.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className="group relative flex flex-col items-center justify-center rounded-[28px] sm:rounded-[32px] border border-slate-200/70 bg-white p-6 sm:p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/60 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
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
            </Link>
          ))}
        </div>

        {/* Bottom Row: 2 Cards Centered (LED Screens, Combo Packages) */}
        <div className="mt-4 sm:mt-6 flex flex-wrap justify-center gap-4 sm:gap-6">
          {BOTTOM_CATEGORIES.map((item) => (
            <Link
              key={item.id}
              to={item.to}
              className="group relative flex flex-col items-center justify-center w-full sm:w-[calc(50%-12px)] lg:w-[calc(20%-19.2px)] rounded-[28px] sm:rounded-[32px] border border-slate-200/70 bg-white p-6 sm:p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/60 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
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
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
