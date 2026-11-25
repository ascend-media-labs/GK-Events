import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export interface CityItem {
  id: string;
  name: string;
  image: string;
}

const CITIES: CityItem[] = [
  { id: "hyderabad", name: "Hyderabad", image: "/images/hyderabad.webp" },
  { id: "bangalore", name: "Bangalore", image: "/images/bangalore.webp" },
  { id: "mumbai", name: "Mumbai", image: "/images/mumbai.webp" },
  { id: "chennai", name: "Chennai", image: "/images/chennai.webp" },
  { id: "pune", name: "Pune", image: "/images/pune.webp" },
];

export function CitySelector() {
  return (
    <section id="cities" className="relative bg-white pt-6 pb-8 sm:pt-8 lg:py-12 border-t border-slate-100" aria-label="Cities we serve">
      <div className="mx-auto max-w-[1288px] px-3 sm:px-6 lg:px-[60px]">
        <div className="flex flex-col gap-5 lg:flex-row lg:items-center lg:gap-14">
          {/* Title row */}
          <div className="flex items-center justify-between px-1 lg:block lg:w-[260px] lg:shrink-0 lg:px-0">
            <div>
              <h2 className="font-display text-[1.6rem] font-extrabold tracking-tight text-slate-950 sm:text-3xl lg:text-[2.1rem]">
                Select Your City
              </h2>
              <div className="mt-2.5 hidden h-1 w-16 rounded-full bg-amber-500 lg:block" />
            </div>
            <Link
              to="/contact"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-white px-4 py-2 text-xs font-bold text-slate-900 shadow-sm transition-colors hover:border-amber-400 hover:text-amber-600 lg:hidden"
            >
              View All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>

          {/* City cards */}
          <div className="grid flex-1 grid-cols-5 gap-1.5 sm:gap-3 lg:gap-5">
            {CITIES.map((city) => (
              <Link
                key={city.id}
                to="/$city"
                params={{ city: city.id }}
                className="group flex flex-col overflow-hidden rounded-xl border border-slate-200/70 bg-white shadow-[0_6px_18px_rgba(15,23,42,0.07)] transition-all duration-300 hover:-translate-y-1 hover:border-amber-400 hover:shadow-[0_14px_30px_rgba(245,158,11,0.12)] sm:rounded-2xl"
              >
                <div className="flex aspect-[6/5] items-end justify-center bg-gradient-to-b from-amber-50 via-sky-50/30 to-white px-1 pt-1.5 sm:px-2">
                  <img
                    src={city.image}
                    alt={`${city.name} landmark`}
                    loading="lazy"
                    className="h-full w-full object-contain object-bottom mix-blend-multiply transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <span className="whitespace-nowrap px-0.5 py-2 text-center font-display text-[10px] tracking-tight font-bold text-slate-900 transition-colors group-hover:text-amber-600 sm:py-2.5 sm:text-sm lg:text-[15px]">
                  {city.name}
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
