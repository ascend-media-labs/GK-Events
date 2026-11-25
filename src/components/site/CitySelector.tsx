import { Link } from "@tanstack/react-router";

export interface CityItem {
  id: string;
  name: string;
  image: string;
}

const CITIES: CityItem[] = [
  {
    id: "hyderabad",
    name: "Hyderabad",
    image: "/images/hyderabad.webp",
  },
  {
    id: "bangalore",
    name: "Bangalore",
    image: "/images/bangalore.webp",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    image: "/images/mumbai.webp",
  },
  {
    id: "chennai",
    name: "Chennai",
    image: "/images/chennai.webp",
  },
  {
    id: "pune",
    name: "Pune",
    image: "/images/pune.webp",
  },
];

export function CitySelector() {
  return (
    <section id="cities" className="relative bg-[#fafafc] py-8 sm:py-10 border-t border-b border-slate-100" aria-label="Cities we serve">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        
        {/* Horizontal Layout matching mockup: Left title + Right 5-city cards */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
          
          {/* Left Title with orange accent line */}
          <div className="shrink-0 max-w-xs">
            <h2 className="font-display text-2xl sm:text-3xl lg:text-4xl font-black text-slate-950 tracking-tight leading-tight">
              Select Your City
            </h2>
            <div className="h-1 w-12 bg-amber-500 rounded-full mt-2.5" />
          </div>

          {/* Right 5 City Cards */}
          <div className="w-full grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3.5 sm:gap-4">
            {CITIES.map((city) => (
              <Link
                key={city.id}
                to="/$city"
                params={{ city: city.id }}
                className="group relative flex flex-col items-center justify-center rounded-2xl border border-slate-200/90 bg-white p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-400 hover:shadow-[0_12px_28px_rgba(15,23,42,0.08)] shadow-[0_4px_12px_rgba(15,23,42,0.03)]"
              >
                {/* Landmark Photo Frame */}
                <div className="relative flex h-16 w-20 sm:h-20 sm:w-24 items-center justify-center transition-transform duration-300 group-hover:scale-108">
                  <img
                    src={city.image}
                    alt={`${city.name} Landmark`}
                    loading="lazy"
                    className="h-full w-full object-contain drop-shadow-[0_4px_8px_rgba(0,0,0,0.08)]"
                  />
                </div>

                {/* City Name */}
                <span className="mt-3 font-display text-xs sm:text-sm font-bold text-slate-900 transition-colors group-hover:text-amber-600">
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
