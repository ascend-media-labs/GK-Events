import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Clock,
  Headphones,
  MapPin,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Award,
  Truck,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { contact, images, waLink } from "@/data/site";
import { Section } from "@/components/site/Blocks";

interface CityMeta {
  name: string;
  landmark: string;
  image: string;
  hubs: string;
  venues: string[];
  deliveryNotice: string;
  areas: string[];
}

const CITIES_DATA: Record<string, CityMeta> = {
  hyderabad: {
    name: "Hyderabad",
    landmark: "Charminar",
    image: images.cities.hyderabad,
    hubs: "HITEC City, Madhapur, Secunderabad, Gachibowli & Banjara Hills",
    venues: [
      "HICC Novotel (HITEC City)",
      "Hitex Exhibition Center",
      "Taj Falaknuma Palace",
      "JRC Conventions & Trade Fairs",
      "ITC Kohenur",
      "Avasa Hotel",
    ],
    deliveryNotice: "2-Hour Express Setup available across Hyderabad & Secunderabad",
    areas: ["HITEC City", "Gachibowli", "Jubilee Hills", "Banjara Hills", "Secunderabad", "Kukatpally", "Financial District", "Begumpet"],
  },
  bangalore: {
    name: "Bangalore",
    landmark: "Vidhana Soudha",
    image: images.cities.bangalore,
    hubs: "Whitefield, Koramangala, Indiranagar, Electronic City & Outer Ring Road",
    venues: [
      "Palace Grounds (Vasant Nagar)",
      "BIEC Exhibition Centre",
      "The Leela Palace Bengaluru",
      "ITC Gardenia",
      "Sheraton Grand Bangalore",
      "Manpho Convention Center",
    ],
    deliveryNotice: "Same-Day Setup available across Bengaluru & Electronic City",
    areas: ["Whitefield", "Koramangala", "Indiranagar", "Electronic City", "MG Road", "Hebbal", "Yelahanka", "HSR Layout"],
  },
  mumbai: {
    name: "Mumbai",
    landmark: "Gateway of India",
    image: images.cities.mumbai,
    hubs: "BKC, Andheri, Lower Parel, Powai & Navi Mumbai AV Hubs",
    venues: [
      "Jio World Convention Centre (BKC)",
      "The Taj Mahal Palace (Colaba)",
      "NESCO Exhibition Centre (Goregaon)",
      "Grand Hyatt Mumbai",
      "JW Marriott Sahar",
      "The St. Regis Mumbai",
    ],
    deliveryNotice: "Prompt Delivery across Greater Mumbai & Navi Mumbai",
    areas: ["BKC", "Bandra", "Andheri", "Lower Parel", "Powai", "South Bombay", "Juhu", "Navi Mumbai"],
  },
  chennai: {
    name: "Chennai",
    landmark: "Chennai Central",
    image: images.cities.chennai,
    hubs: "OMR IT Corridor, Guindy, T. Nagar & Anna Nagar AV Depots",
    venues: [
      "Chennai Trade Centre (Nandambakkam)",
      "ITC Grand Chola (Guindy)",
      "The Leela Palace Chennai",
      "Taj Coromandel",
      "Mayor Radhakrishnan Stadium",
      "Feathers Hotel",
    ],
    deliveryNotice: "Same-Day Setup across OMR, ECR & Central Chennai",
    areas: ["OMR", "Guindy", "T. Nagar", "Anna Nagar", "Adyar", "Velachery", "ECR", "Alwarpet"],
  },
  pune: {
    name: "Pune",
    landmark: "Shaniwar Wada",
    image: images.cities.pune,
    hubs: "Baner, Hinjewadi, Viman Nagar & Koregaon Park Hubs",
    venues: [
      "Auto Cluster Exhibition Centre (Chinchwad)",
      "JW Marriott Hotel Pune (Senapati Bapat Rd)",
      "The Ritz-Carlton Pune",
      "Conrad Pune",
      "Sheraton Grand Pune",
      "Oxford Golf Resort",
    ],
    deliveryNotice: "Fast Setup across Hinjewadi, Baner & Koregaon Park",
    areas: ["Hinjewadi", "Baner", "Koregaon Park", "Viman Nagar", "Kalyani Nagar", "Kothrud", "Wakad", "Magarpatta"],
  },
};

export const Route = createFileRoute("/$city")({
  loader: ({ params }) => {
    const cityKey = params.city.toLowerCase();
    const city = CITIES_DATA[cityKey];
    if (!city) {
      throw notFound();
    }
    return { city, cityKey };
  },
  head: ({ loaderData }) => {
    const cityName = loaderData?.city.name ?? "City";
    return {
      meta: [
        { title: `AV Equipment Rental in ${cityName} — Sound, LED Screens, Projectors | GK Events` },
        {
          name: "description",
          content: `Professional AV equipment rental in ${cityName}. Sound systems, LED walls, projectors, TVs, stage lighting & technicians delivered in ${cityName}.`,
        },
      ],
    };
  },
  component: CityPage,
});

function CityPage() {
  const { city, cityKey } = Route.useLoaderData();

  const equipmentList = [
    {
      title: "Projectors & Screens",
      image: images.services.projector,
      to: "/projector-rental",
    },
    {
      title: "Sound Systems",
      image: images.services.sound,
      to: "/sound-system-rental",
    },
    {
      title: "Microphones & Audio Mixers",
      image: images.equipment,
      to: "/sound-system-rental",
    },
    {
      title: "Televisions & Stands",
      image: images.services.ledTv,
      to: "/led-tv-rental",
    },
    {
      title: "Speakers & Line Arrays",
      image: images.services.sound,
      to: "/sound-system-rental",
    },
    {
      title: "LED Screens & Video Walls",
      image: images.services.ledWall,
      to: "/led-wall-rental",
    },
    {
      title: "Combo Event Packages",
      image: images.wedding,
      to: "/event-solutions",
    },
    {
      title: "Live Streaming & Broadcast",
      image: images.services.liveStreaming,
      to: "/live-streaming",
    },
  ];

  return (
    <div className="bg-white text-slate-900">
      {/* City Hero Section: Clean White Background matching reference */}
      <section className="relative overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50 via-white to-white py-8 sm:py-12">
        <div className="container-x">
          {/* Breadcrumb Navigation */}
          <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-slate-500 mb-6">
            <Link to="/" className="hover:text-amber-700 transition-colors">
              Home
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-400" />
            <span className="font-semibold text-slate-900">{city.name}</span>
          </nav>

          <div className="mt-6 grid items-center gap-10 lg:grid-cols-12">
            {/* Left Column: Heading, Subtitle & Contact CTAs */}
            <div className="lg:col-span-7">
              {/* City Pill Badge */}
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 shadow-xs">
                <MapPin className="h-3.5 w-3.5 text-amber-600" />
                <span>{city.name}</span>
              </div>

              {/* Exact Main Heading */}
              <h1 className="mt-4 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-6xl leading-[1.15]">
                Event equipment for rent in <span className="text-gold">{city.name}</span>
              </h1>

              {/* Exact Subtitle Style */}
              <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed max-w-2xl font-normal">
                Projectors, sound systems, microphones, LED screens, TVs and combo packages — delivered and set up anywhere in {city.name}.
              </p>

              {/* Contact Line & Call Link */}
              <div className="mt-6 flex flex-wrap items-center gap-4 sm:gap-6 text-sm text-slate-800">
                <a
                  href={contact.phoneHref}
                  className="inline-flex items-center gap-2 font-bold text-amber-700 hover:text-amber-900 transition-colors"
                >
                  <Phone className="h-4 w-4 text-amber-600" />
                  <span>Call us: {contact.phone}</span>
                </a>
                <span className="hidden sm:inline text-slate-300">•</span>
                <span className="inline-flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="h-3.5 w-3.5 text-amber-600" />
                  <span>{city.deliveryNotice}</span>
                </span>
              </div>

              {/* Action Buttons: WhatsApp in City & Get Quote */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                <Button asChild variant="whatsapp" size="xl" className="rounded-full shadow-md font-bold px-6 text-white">
                  <a
                    href={waLink(`Hi GK Events, I would like to rent event equipment in ${city.name}.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="mr-2 h-5 w-5" />
                    WhatsApp {city.name}
                  </a>
                </Button>

                <Button asChild variant="hero" size="xl" className="rounded-full shadow-gold font-bold px-6">
                  <Link to="/contact">
                    Get a Quote <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Right Column: City Landmark Frame */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative group overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-3 shadow-md max-w-md w-full">
                <div className="relative h-64 sm:h-80 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={city.image}
                    alt={`${city.name} landmark - ${city.landmark}`}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  {/* Floating Landmark Tag */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <div>
                      <p className="text-xs uppercase tracking-wider text-amber-400 font-bold">Landmark</p>
                      <p className="text-lg font-display font-extrabold text-white">{city.landmark}</p>
                    </div>
                    <span className="rounded-full bg-amber-500/20 border border-amber-400/40 px-3 py-1 text-xs font-semibold text-amber-300 backdrop-blur-md">
                      {city.name} Hub
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Equipment Available in {City} Grid */}
      <section className="py-8 sm:py-12 border-b border-slate-200/80 bg-white">
        <div className="container-x">
          {/* Section Header: Clean Left Aligned */}
          <div className="max-w-2xl mb-12 text-left">
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
              Equipment available in <span className="text-gold">{city.name}</span>
            </h2>
            <p className="mt-2 text-sm text-slate-600 leading-relaxed font-normal">
              Dispatched from our {city.name} warehouses with tested backups, audio accessories, and on-site technical support.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {equipmentList.map((item) => (
              <div
                key={item.title}
                className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white p-4 transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-[0_12px_28px_rgba(0,0,0,0.08)] shadow-[0_2px_12px_rgba(0,0,0,0.03)]"
              >
                {/* Photo Header */}
                <div className="relative h-44 w-full overflow-hidden rounded-2xl bg-slate-100">
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Content */}
                <div className="flex flex-1 flex-col justify-between pt-4">
                  <div>
                    <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-amber-700 transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-xs text-slate-500">
                      Delivered and set up in {city.name}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-slate-100">
                    <Link
                      to={item.to}
                      className="inline-flex items-center gap-1.5 text-xs font-bold text-amber-700 group-hover:text-amber-900 group-hover:translate-x-0.5 transition-all"
                    >
                      Explore options <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Popular Venues & Delivery Areas in City */}
      <section className="py-8 sm:py-12 bg-white border-b border-slate-200/80">
        <div className="container-x">
          <div className="grid gap-10 lg:grid-cols-2 items-center">
            <div>
              <div className="inline-flex items-center gap-1.5 rounded-full border border-amber-500/30 bg-amber-50 px-3.5 py-1 text-xs font-bold uppercase tracking-wider text-amber-800 shadow-xs">
                <Truck className="h-3.5 w-3.5 text-amber-600" />
                <span>On-Site Logistics</span>
              </div>
              <h2 className="mt-3 font-display text-3xl font-extrabold tracking-tight text-slate-950 sm:text-4xl">
                Venues & localities we regularly serve in <span className="text-gold">{city.name}</span>
              </h2>
              <p className="mt-3 text-sm text-slate-600 leading-relaxed font-normal">
                Our technicians are familiar with loading bays, freight elevators, acoustics, and power requirements at premier hotels and convention centres across {city.name}.
              </p>

              {/* Area Badges */}
              <div className="mt-6 flex flex-wrap gap-2">
                {city.areas.map((area) => (
                  <span
                    key={area}
                    className="inline-flex items-center gap-1 rounded-full border border-slate-200 bg-white px-3 py-1 text-xs font-semibold text-slate-700 shadow-xs"
                  >
                    <MapPin className="h-3 w-3 text-amber-600" /> {area}
                  </span>
                ))}
              </div>
            </div>

            {/* Popular Venues List */}
            <div className="rounded-3xl border border-slate-200 bg-white p-6 sm:p-8 shadow-sm">
              <h3 className="font-display text-lg font-bold text-slate-950 flex items-center gap-2">
                <Award className="h-5 w-5 text-amber-600" /> Top Venues Setup in {city.name}
              </h3>
              <ul className="mt-4 space-y-3">
                {city.venues.map((venue) => (
                  <li key={venue} className="flex items-center gap-3 text-sm text-slate-800 font-medium">
                    <CheckCircle2 className="h-4 w-4 text-emerald-600 shrink-0" />
                    <span>{venue}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 font-medium">
                <span>Warehouse Hub: {city.hubs}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Switch to Other Cities Section */}
      <section className="py-6 sm:py-8 border-b border-slate-200/80 bg-white">
        <div className="container-x">
          <p className="text-xs uppercase tracking-widest font-extrabold text-slate-500 mb-4">
            Available in other major metros:
          </p>
          <div className="flex flex-wrap gap-3">
            {Object.keys(CITIES_DATA).map((key) => {
              const c = CITIES_DATA[key]!;
              const isCurrent = key === cityKey;
              return (
                <Link
                  key={key}
                  to="/$city"
                  params={{ city: key }}
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-bold transition-all ${
                    isCurrent
                      ? "border border-amber-500 bg-amber-500 text-slate-950 shadow-xs"
                      : "border border-slate-200 bg-white text-slate-600 hover:text-slate-950 hover:border-amber-400 hover:bg-slate-50"
                  }`}
                >
                  <MapPin className="h-3 w-3" />
                  <span>{c.name}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Final Booking Call to Action */}
      <section className="py-8 sm:py-12 text-center bg-white">
        <div className="container-x">
          <div className="relative overflow-hidden rounded-[2rem] border border-amber-500/30 bg-gradient-to-br from-amber-50/70 via-slate-50 to-amber-50/50 p-8 sm:p-14 shadow-md">
            <h2 className="font-display text-2xl sm:text-4xl font-extrabold text-slate-950">
              Ready to book event equipment in <span className="text-gold">{city.name}</span>?
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm text-slate-600 leading-relaxed font-normal">
              Contact our {city.name} team for immediate availability, transparent quote breakdown, and prompt on-time setup.
            </p>
            <div className="mt-6 flex flex-wrap justify-center gap-3">
              <Button asChild variant="whatsapp" size="xl" className="rounded-full shadow-md font-bold px-6 text-white">
                <a
                  href={waLink(`Hi GK Events, I would like to book event equipment in ${city.name}.`)}
                  target="_blank"
                  rel="noreferrer"
                >
                  <MessageCircle className="mr-2 h-5 w-5" /> WhatsApp {city.name}
                </a>
              </Button>
              <Button asChild variant="hero" size="xl" className="rounded-full shadow-gold font-bold px-6">
                <Link to="/contact">Get Free Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
