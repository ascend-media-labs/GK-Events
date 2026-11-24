import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, PageHero, Section } from "@/components/site/Blocks";
import { images } from "@/data/site";

export const Route = createFileRoute("/gallery")({
  head: () => ({
    meta: [
      { title: "Event Gallery | GK Events" },
      { name: "description", content: "Weddings, concerts, conferences and productions powered by GK Events." },
      { property: "og:title", content: "Event Gallery | GK Events" },
      { property: "og:description", content: "See our weddings, concerts and corporate productions." },
    ],
  }),
  component: Gallery,
});

const items = [
  { src: images.hero, tag: "Concerts", title: "Arena concert LED stage" },
  { src: images.wedding, tag: "Weddings", title: "Royal reception stage" },
  { src: images.corporate, tag: "Corporate", title: "Innovation summit" },
  { src: images.equipment, tag: "Equipment", title: "Sound & display kit" },
  { src: images.camera, tag: "Live Streaming", title: "Multi-camera live stream" },
  { src: images.wedding, tag: "Weddings", title: "Sangeet night lighting" },
  { src: images.corporate, tag: "Corporate", title: "Keynote with IMAG" },
  { src: images.hero, tag: "Concerts", title: "Festival main stage" },
];
const tags = ["All", "Weddings", "Corporate", "Concerts", "Live Streaming", "Equipment"];

function Gallery() {
  const [tag, setTag] = useState("All");
  const [view, setView] = useState<string | null>(null);
  const list = items.filter((i) => tag === "All" || i.tag === tag);
  return (
    <>
      <PageHero eyebrow="Gallery" title="Our work," highlight="in the spotlight." intro="A glimpse of the stages, screens and celebrations we've brought to life." image={images.hero} />
      <Section>
        <div className="mb-10 flex flex-wrap gap-2">
          {tags.map((t) => <Button key={t} variant={tag === t ? "hero" : "glass"} className="rounded-full" onClick={() => setTag(t)}>{t}</Button>)}
        </div>
        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {list.map((i, idx) => (
            <button key={idx} onClick={() => setView(i.src)} className="group relative mb-4 block w-full overflow-hidden rounded-3xl text-left">
              <img src={i.src} alt={i.title} loading="lazy" className={`w-full object-cover transition duration-500 group-hover:scale-105 ${idx % 3 === 0 ? "aspect-[3/4]" : "aspect-[4/3]"}`} />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-white via-white/80 to-transparent p-5">
                <span className="text-xs font-bold uppercase tracking-widest text-amber-700">{i.tag}</span>
                <p className="font-bold text-slate-950">{i.title}</p>
              </div>
            </button>
          ))}
        </div>
      </Section>
      {view && (
        <div className="fixed inset-0 z-[60] grid place-items-center bg-background/95 p-4" onClick={() => setView(null)}>
          <button aria-label="Close" className="absolute right-5 top-5"><X className="h-8 w-8" /></button>
          <img src={view} alt="Gallery preview" className="max-h-[85vh] rounded-2xl" />
        </div>
      )}
      <FinalCta />
    </>
  );
}
