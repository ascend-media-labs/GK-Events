import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Calendar, Heart, Building2, Music, Sparkles, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import { FinalCta, PageHero, Section } from "@/components/site/Blocks";
import { images } from "@/data/site";

export const Route = createFileRoute("/events")({
  head: () => ({
    meta: [
      { title: "Event Production Solutions | GK Events" },
      {
        name: "description",
        content: "Complete event technology for weddings, corporate summits, concerts, cultural celebrations, and social parties.",
      },
    ],
  }),
  component: EventsPage,
});

const EVENT_TYPES = [
  {
    title: "Weddings & Receptions",
    subtitle: "From Haldi to Grand Reception",
    desc: "Curved LED backdrops, royal warm stage illumination, crystal sound for mandap rituals, candid photography, and 4K cinema films.",
    image: images.wedding,
    icon: Heart,
    to: "/wedding-events",
    highlights: ["Mandap Audio & Wireless Mics", "Curved LED Stage Backdrops", "4K Live Stream to Worldwide Guests"],
  },
  {
    title: "Corporate Conferences & AGMs",
    subtitle: "Flawless Technical Execution",
    desc: "High-lumen laser projection, dual LED display monitors, seamless PPT & Zoom video switching, podium audio, and stage lighting.",
    image: images.corporate,
    icon: Building2,
    to: "/corporate-events",
    highlights: ["Ultra-Clear Speech Audio", "75\"-85\" TV Displays on Stands", "Hybrid Zoom & YouTube Webcasts"],
  },
  {
    title: "Sangeet & DJ Concerts",
    subtitle: "Electrifying Audio & Visuals",
    desc: "Concert line arrays, punchy subwoofers, moving head beam lasers, low-lying fog, haze machines, and energetic club light shows.",
    image: images.hero,
    icon: Music,
    to: "/event-solutions",
    highlights: ["JBL / RCF Line Array Systems", "DMX Moving Heads & Laser Shows", "CO2 Jets & Cold Pyros"],
  },
];

function EventsPage() {
  return (
    <div className="bg-white text-slate-900">
      <PageHero
        eyebrow="Turnkey Event Production"
        title="Events Produced With"
        highlight="Precision & Passion."
        intro="Whether an intimate sacred wedding or a 2,000-delegate corporate conference, we deliver world-class sound, vision, and light."
        image={images.weddingGlobalStream}
      />

      <Section eyebrow="Celebration Formats" title="What Type of Event Are You Planning?">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {EVENT_TYPES.map((evt) => (
            <div
              key={evt.title}
              className="group relative flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200/90 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-amber-500/50 hover:shadow-xl"
            >
              {/* Photo Header */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-100">
                <img
                  src={evt.image}
                  alt={evt.title}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-white via-white/10 to-transparent" />
                <div className="absolute top-4 left-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/95 backdrop-blur-md border border-slate-200 text-amber-600 shadow-xs">
                  <evt.icon className="h-5 w-5" />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col justify-between p-6 sm:p-7 pt-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-amber-700">{evt.subtitle}</span>
                  <h3 className="mt-1 font-display text-2xl font-bold text-slate-950 group-hover:text-amber-700 transition-colors">
                    {evt.title}
                  </h3>
                  <p className="mt-2.5 text-xs sm:text-sm text-slate-600 leading-relaxed font-normal">
                    {evt.desc}
                  </p>

                  <div className="mt-5 space-y-2 border-t border-slate-100 pt-4">
                    {evt.highlights.map((h) => (
                      <div key={h} className="flex items-center gap-2 text-xs font-medium text-slate-700">
                        <Sparkles className="h-3 w-3 text-amber-600 shrink-0" />
                        <span>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100">
                  <Button asChild variant="outline" size="sm" className="w-full rounded-full border-slate-300 text-slate-900 font-bold hover:bg-slate-50 justify-between">
                    <Link to={evt.to}>
                      <span>Explore {evt.title.split(" ")[0]} Solutions</span>
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <FinalCta title="Ready to plan your upcoming celebration?" />
    </div>
  );
}
