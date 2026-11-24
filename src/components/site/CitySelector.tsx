import { Link } from "@tanstack/react-router";
import { ArrowRight, MapPin } from "lucide-react";
import { images } from "@/data/site";

export interface CityItem {
  id: string;
  name: string;
  landmark: string;
  image: string;
  hub: string;
  deliveryTime: string;
}

const CITIES: CityItem[] = [
  {
    id: "hyderabad",
    name: "Hyderabad",
    landmark: "Charminar",
    image: images.cities.hyderabad,
    hub: "HITEC City & Secunderabad Hubs",
    deliveryTime: "Same-Day Setup",
  },
  {
    id: "bangalore",
    name: "Bangalore",
    landmark: "Vidhana Soudha",
    image: images.cities.bangalore,
    hub: "Whitefield & Koramangala Hubs",
    deliveryTime: "Same-Day Setup",
  },
  {
    id: "mumbai",
    name: "Mumbai",
    landmark: "Gateway of India",
    image: images.cities.mumbai,
    hub: "BKC, Andheri & Navi Mumbai Hubs",
    deliveryTime: "Fast-Track Delivery",
  },
  {
    id: "chennai",
    name: "Chennai",
    landmark: "Chennai Central",
    image: images.cities.chennai,
    hub: "OMR & Guindy AV Depots",
    deliveryTime: "Same-Day Setup",
  },
  {
    id: "pune",
    name: "Pune",
    landmark: "Shaniwar Wada",
    image: images.cities.pune,
    hub: "Baner, Hinjewadi & Viman Nagar",
    deliveryTime: "Same-Day Setup",
  },
];

export function CitySelector() {
  return (
    <section id="cities" className="relative border-b border-slate-200/80 bg-white py-12 sm:py-16 text-slate-900">
      {/* Subtle background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-2/3 h-32 bg-amber-500/5 blur-3xl rounded-full" />

      <div className="container-x relative">
        {/* Section Header - Clean Left Aligned */}
        <div className="mb-10 max-w-4xl text-left">
          <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 shadow-xs">
            <MapPin className="h-3.5 w-3.5 text-amber-600" />
            <span>Service Locations</span>
          </div>

          <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
            Select your <span className="text-gold">city.</span>
          </h2>

          <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal sm:whitespace-nowrap">
            Direct warehouse dispatch, tested AV gear, and certified technicians available in your city for quick on-time setup.
          </p>
        </div>

        {/* 5 City Landmark Cards in a Row: Click to Open City Page */}
        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5 sm:gap-5">
          {CITIES.map((city) => (
            <Link
              key={city.id}
              to="/$city"
              params={{ city: city.id }}
              className="group relative flex flex-col items-center overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4 sm:p-5 text-center transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
            >
              {/* Landmark Image Frame with Soft Shadow */}
              <div className="relative flex h-24 sm:h-28 w-full items-center justify-center overflow-hidden rounded-2xl bg-slate-50 border border-slate-100 p-2 transition-transform duration-500 group-hover:scale-105">
                <img
                  src={city.image}
                  alt={`${city.name} - ${city.landmark}`}
                  loading="lazy"
                  className="h-full w-full object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.12)]"
                />
              </div>

              {/* City Name */}
              <h3 className="mt-3 font-display text-base sm:text-lg font-bold text-slate-900 transition-colors group-hover:text-amber-600">
                {city.name}
              </h3>

              {/* Landmark Subtext */}
              <p className="text-[11px] font-medium text-slate-500 mt-0.5">
                {city.landmark}
              </p>

              {/* Quick Delivery Badge */}
              <span className="mt-2.5 inline-flex items-center gap-1 rounded-full border border-slate-200 bg-slate-50 px-2 py-0.5 text-[10px] font-semibold text-slate-600 transition-colors group-hover:border-amber-300 group-hover:bg-amber-50 group-hover:text-amber-800">
                <span className="h-1.5 w-1.5 rounded-full bg-amber-500" />
                {city.deliveryTime}
              </span>

              {/* Hover Indicator */}
              <span className="mt-2 text-[10px] font-bold text-amber-600 opacity-0 group-hover:opacity-100 transition-opacity inline-flex items-center gap-0.5">
                View Gear <ArrowRight className="h-2.5 w-2.5" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
