import { createFileRoute } from "@tanstack/react-router";
import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { waLink } from "@/data/site";
import emblem from "@/assets/gk-emblem.png";
import equipmentData from "@/data/equipmentItems.json";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Event Equipment Rental Catalog | GK Events" },
      {
        name: "description",
        content:
          "Rent high-lumen projectors, curved LED walls, sound systems, microphones, 4K TVs and combo packages with delivery and setup.",
      },
      { property: "og:title", content: "Event Equipment Rental | GK Events" },
      {
        property: "og:description",
        content: "Browse sound, display, projection and lighting equipment for rent.",
      },
    ],
  }),
  component: EquipmentPage,
});

const FILTER_TABS = [
  { id: "all", label: "All equipment" },
  { id: "projector", label: "Projectors & Screens" },
  { id: "sound", label: "Sound Systems" },
  { id: "mic", label: "Microphones" },
  { id: "tv", label: "Televisions" },
  { id: "combo", label: "Combo Packages" },
];

function EquipmentPage() {
  const [selectedCat, setSelectedCat] = useState("all");

  useEffect(() => {
    function readCategoryFromUrl() {
      const hash = window.location.hash.replace("#", "").toLowerCase();
      if (FILTER_TABS.some((t) => t.id === hash)) {
        setSelectedCat(hash);
        return;
      }
      const params = new URLSearchParams(window.location.search);
      const cat = params.get("category")?.toLowerCase();
      if (cat && FILTER_TABS.some((t) => t.id === cat)) {
        setSelectedCat(cat);
      }
    }

    readCategoryFromUrl();
    window.addEventListener("hashchange", readCategoryFromUrl);
    return () => window.removeEventListener("hashchange", readCategoryFromUrl);
  }, []);

  const handleTabChange = (catId: string) => {
    setSelectedCat(catId);
    if (catId === "all") {
      history.replaceState(null, "", window.location.pathname);
    } else {
      history.replaceState(null, "", `#${catId}`);
    }
  };

  const filteredList =
    selectedCat === "all"
      ? equipmentData
      : equipmentData.filter((item) => item.category === selectedCat);

  return (
    <div className="bg-white min-h-screen pt-4 sm:pt-6 pb-8 sm:pb-12 text-slate-900">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        {/* Header Title */}
        <div className="text-left mb-6 sm:mb-8">
          <h1 className="font-display text-3xl sm:text-4xl lg:text-[2.75rem] font-black text-slate-950 tracking-tight">
            Event equipment for rent
          </h1>
        </div>

        {/* Filter Pills Navigation Row */}
        <div className="flex items-center gap-2 overflow-x-auto pb-3 scrollbar-none mb-6 sm:mb-8">
          {FILTER_TABS.map((tab) => {
            const isActive = selectedCat === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`shrink-0 rounded-full px-5 py-2.5 text-sm sm:text-[15px] font-bold transition-all duration-200 ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-[1.02]"
                    : "bg-white text-slate-700 hover:text-slate-950 border border-slate-200/80 hover:bg-slate-50"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Equipment Cards Grid (3 cards per row on desktop) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredList.map((item) => (
            <div
              key={item.name}
              className="group relative flex flex-col justify-between rounded-[28px] sm:rounded-[32px] border border-slate-200/80 bg-white p-6 sm:p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_20px_45px_rgba(15,23,42,0.08)] hover:-translate-y-1.5 transition-all duration-300"
            >
              {/* Card Top Brand Emblem */}
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-1.5 opacity-75 group-hover:opacity-100 transition-opacity">
                  <img src={emblem} alt="GK Events" className="h-4.5 w-auto object-contain" />
                  <span className="text-[10px] font-black uppercase tracking-wider text-slate-800">
                    GK <span className="text-amber-600">Events</span>
                  </span>
                </div>
              </div>

              {/* Product Clean Cutout Image Frame */}
              <div className="relative flex h-52 sm:h-56 w-full items-center justify-center p-2 my-2 transition-transform duration-300 group-hover:scale-105">
                <img
                  src={item.image}
                  alt={item.name}
                  loading="lazy"
                  className="max-h-full max-w-full object-contain drop-shadow-[0_8px_20px_rgba(0,0,0,0.08)]"
                />
              </div>

              {/* Card Product Info */}
              <div className="mt-4 space-y-1">
                <h3 className="font-display text-xl sm:text-[22px] font-bold text-slate-900 group-hover:text-blue-600 transition-colors">
                  {item.name}
                </h3>
                <p className="text-base sm:text-lg font-bold text-blue-600">
                  {item.price}
                </p>
                <p className="text-sm text-slate-500 font-medium">
                  {item.model}
                </p>
              </div>

              {/* WhatsApp to Book Full-Width Pill CTA */}
              <div className="mt-6 pt-1">
                <Button
                  asChild
                  className="w-full rounded-2xl bg-[#eff6ff] hover:bg-blue-600 text-blue-600 hover:text-white font-bold py-6 text-sm sm:text-base border border-blue-200/70 shadow-xs hover:shadow-md transition-all duration-200"
                >
                  <a
                    href={waLink(`Hi GK Events, I'd like to book "${item.name}" for my event.`)}
                    target="_blank"
                    rel="noreferrer"
                  >
                    <MessageCircle className="mr-2 h-4.5 w-4.5" />
                    WhatsApp to book
                  </a>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
