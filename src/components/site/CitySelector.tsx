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
    <section id="cities" className="relative bg-white py-10 sm:py-14" aria-label="Cities we serve">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        {/* Section Header: Centered "Select your city" matching reference */}
        <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-950 text-center tracking-tight mb-8 sm:mb-10">
          Select your city
        </h2>

        {/* 5 City Cards in a Row */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          {CITIES.map((city) => (
            <Link
              key={city.id}
              to="/$city"
              params={{ city: city.id }}
              className="group relative flex flex-col items-center justify-center rounded-[28px] sm:rounded-[32px] border border-slate-200/70 bg-white p-6 sm:p-7 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-blue-400/60 hover:shadow-[0_16px_36px_rgba(15,23,42,0.08)] shadow-[0_8px_24px_rgba(15,23,42,0.04)]"
            >
              {/* Landmark Cutout Image Frame */}
              <div className="relative flex h-20 w-20 sm:h-24 sm:w-24 items-center justify-center transition-transform duration-300 group-hover:scale-105">
                <img
                  src={city.image}
                  alt={`${city.name} Landmark`}
                  loading="lazy"
                  className="h-full w-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.08)]"
                />
              </div>

              {/* City Name */}
              <span className="mt-4 font-display text-base sm:text-lg font-bold text-slate-900 transition-colors group-hover:text-blue-600">
                {city.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
