import { createFileRoute, Link } from "@tanstack/react-router";
import { useState } from "react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, PageHero, Section } from "@/components/site/Blocks";
import { equipmentCatalog, images, waLink } from "@/data/site";

export const Route = createFileRoute("/equipment")({
  head: () => ({
    meta: [
      { title: "Event Equipment Rental Catalog | GK Events" },
      { name: "description", content: "Rent sound systems, LED walls, LED TVs, projectors, screens, microphones, mixers and stage lighting." },
      { property: "og:title", content: "Event Equipment Rental | GK Events" },
      { property: "og:description", content: "Browse sound, display, projection and lighting equipment for rent." },
    ],
  }),
  component: Equipment,
});

const cats = ["All", "Sound", "Display", "Projection", "Lighting"];
const pics: Record<string, string> = { Sound: images.equipment, Display: images.hero, Projection: images.corporate, Lighting: images.wedding };

function Equipment() {
  const [cat, setCat] = useState("All");
  const list = equipmentCatalog.filter((e) => cat === "All" || e.cat === cat);
  return (
    <>
      <PageHero eyebrow="Equipment Rental" title="Pro-grade gear," highlight="ready to roll." intro="Sound, LED, projection and lighting equipment delivered, installed and operated by our technicians." image={images.equipment} />
      <Section eyebrow="Catalog" title="Choose a category">
        <div className="mb-10 flex flex-wrap gap-2">
          {cats.map((c) => (
            <Button key={c} variant={cat === c ? "hero" : "glass"} className="rounded-full" onClick={() => setCat(c)}>{c}</Button>
          ))}
        </div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((e) => (
            <article key={e.name} className="group overflow-hidden rounded-3xl border border-border bg-card transition hover:border-primary/50 hover:shadow-gold">
              <img src={pics[e.cat]} alt={e.name} loading="lazy" className="h-48 w-full object-cover transition duration-500 group-hover:scale-105" />
              <div className="p-6">
                <span className="text-xs font-bold uppercase tracking-widest text-accent">{e.cat}</span>
                <h3 className="mt-2 text-xl font-bold">{e.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{e.desc}</p>
                <p className="mt-3 text-xs text-muted-foreground"><b className="text-foreground">Ideal for:</b> {e.use}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  <Button asChild variant="whatsapp" size="sm" className="rounded-full"><a href={waLink(`Hi GK Events, I'd like to rent: ${e.name}`)} target="_blank" rel="noreferrer"><MessageCircle />Enquire</a></Button>
                  <Button asChild variant="link" size="sm"><Link to={e.to}>Details <ArrowRight /></Link></Button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
