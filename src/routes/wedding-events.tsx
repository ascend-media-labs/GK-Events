import { createFileRoute } from "@tanstack/react-router";
import { CheckCircle2 } from "lucide-react";
import { CardGrid, Faq, FinalCta, Process, Section } from "@/components/site/Blocks";
import { WeddingArchesHero } from "@/components/site/WeddingArchesHero";
import { services } from "@/data/site";

const d = services["wedding"]!;

export const Route = createFileRoute("/wedding-events")({
  head: () => ({
    meta: [
      { title: "Wedding Event Solutions | GK Events" },
      { name: "description", content: d.intro },
      { property: "og:title", content: "Wedding Event Solutions | GK Events" },
      { property: "og:description", content: d.intro },
    ],
  }),
  component: WeddingEventsPage,
});

function WeddingEventsPage() {
  return (
    <div className="bg-white text-slate-900">
      <WeddingArchesHero />
      <Section eyebrow={d.eyebrow} title={d.itemsTitle}>
        <CardGrid items={d.items} />
      </Section>
      <section className="py-6 sm:py-8 bg-white">
        <div className="container-x grid items-center gap-10 lg:grid-cols-2">
          <img
            src={d.image}
            alt={d.eyebrow}
            loading="lazy"
            className="aspect-[4/3] w-full rounded-[2rem] object-cover border border-slate-200/80 shadow-md"
          />
          <div>
            <p className="eyebrow">Solutions</p>
            <h2 className="mt-3 text-3xl font-extrabold text-slate-950 sm:text-4xl">
              Built for your occasion
            </h2>
            <ul className="mt-8 space-y-5">
              {d.solutions.map((s) => (
                <li key={s.name} className="flex gap-4">
                  <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-amber-600" />
                  <div>
                    <p className="font-bold text-slate-900">{s.name}</p>
                    <p className="text-sm text-slate-600">{s.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <Section eyebrow="How it works" title="Our setup process">
        <Process steps={d.process} />
      </Section>
      <Section eyebrow="FAQs" title="Questions, answered" className="pt-0">
        <Faq faqs={d.faqs} />
      </Section>
      <FinalCta />
    </div>
  );
}
