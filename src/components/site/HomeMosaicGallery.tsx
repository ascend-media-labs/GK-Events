import { Link } from "@tanstack/react-router";
import { ArrowRight, Sparkles, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { images } from "@/data/site";

interface MosaicItem {
  image: string;
  title: string;
  tag: string;
  colSpan: string;
  heightClass: string;
}

const GALLERY_ITEMS: MosaicItem[] = [
  {
    image: images.stageCurvedLed,
    title: "Concert Curved LED Video Walls",
    tag: "Stage Visuals",
    colSpan: "md:col-span-2",
    heightClass: "h-64 sm:h-80 md:h-[380px] lg:h-[420px]",
  },
  {
    image: images.wedding,
    title: "Grand Wedding Stage & Floral Decor",
    tag: "Weddings",
    colSpan: "md:col-span-1",
    heightClass: "h-64 sm:h-80 md:h-[380px] lg:h-[420px]",
  },
  {
    image: images.services.lighting,
    title: "DMX Beam Lighting & Aerial Lasers",
    tag: "Stage Lighting",
    colSpan: "md:col-span-1",
    heightClass: "h-48 sm:h-56 md:h-64 lg:h-[260px]",
  },
  {
    image: images.services.sound,
    title: "JBL Line Arrays & Pro Audio Mixers",
    tag: "Concert Audio",
    colSpan: "md:col-span-1",
    heightClass: "h-48 sm:h-56 md:h-64 lg:h-[260px]",
  },
  {
    image: images.corporate,
    title: "Corporate Summits & 4K Displays",
    tag: "Corporate AV",
    colSpan: "md:col-span-1",
    heightClass: "h-48 sm:h-56 md:h-64 lg:h-[260px]",
  },
];

export function HomeMosaicGallery() {
  return (
    <section className="py-8 sm:py-12 bg-white border-t border-slate-100" aria-label="Featured Gallery">
      <div className="max-w-[1288px] mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-left max-w-2xl mb-6 sm:mb-8">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-50 text-amber-800 text-xs sm:text-[13px] font-bold tracking-wide border border-amber-200/80 shadow-xs mb-3">
            <Sparkles className="h-3.5 w-3.5 text-amber-600" />
            <span>GK Events Portfolio</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-[2.6rem] font-black text-slate-950 tracking-tight">
            Recent Productions &amp; Gallery
          </h2>
          <p className="mt-2.5 text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
            A quick look at the stages, LED video walls, sound systems and celebrations we produce.
          </p>
        </div>

        {/* 5-Tile Mosaic Bento Grid matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4 md:gap-5">
          {GALLERY_ITEMS.map((item, index) => (
            <Link
              key={item.title}
              to="/gallery"
              className={`group relative overflow-hidden rounded-2xl sm:rounded-3xl border border-slate-200/90 shadow-xs hover:shadow-lg transition-all duration-300 block ${item.colSpan} ${item.heightClass}`}
            >
              {/* Photo */}
              <img
                src={item.image}
                alt={item.title}
                loading={index < 2 ? "eager" : "lazy"}
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Hover Dark Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Hover Info Tag */}
              <div className="absolute inset-x-4 bottom-4 flex items-end justify-between opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                <div>
                  <span className="inline-block text-[10px] font-bold uppercase tracking-wider text-amber-400 bg-black/40 backdrop-blur-md px-2 py-0.5 rounded-full mb-1">
                    {item.tag}
                  </span>
                  <h3 className="text-sm sm:text-base font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                </div>
                <div className="h-8 w-8 rounded-full bg-white/90 text-slate-900 flex items-center justify-center shrink-0 shadow-sm ml-2">
                  <Eye className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Centered CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <Button
            asChild
            variant="outline"
            size="xl"
            className="rounded-full border-slate-300 bg-white hover:bg-slate-50 text-slate-800 font-bold shadow-xs px-8"
          >
            <Link to="/gallery">
              View full gallery
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
