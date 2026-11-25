import { createFileRoute } from "@tanstack/react-router";
import { CardGrid, FinalCta, PageHero, Section } from "@/components/site/Blocks";
import { images } from "@/data/site";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About GK Events | Event Technology Experts" },
      { name: "description", content: "The story, mission and technical team behind GK Events — premium AV rental and event production." },
      { property: "og:title", content: "About GK Events" },
      { property: "og:description", content: "Our story, mission and the team behind every flawless event." },
    ],
  }),
  component: About,
});

function About() {
  return (
    <>
      <PageHero eyebrow="About GK Events" title="Started with a blessing," highlight="built on trust." intro="GK Events began with a simple belief — every celebration deserves to sound, look and feel extraordinary. Today we deliver AV, photography and live production for weddings, brands and festivals." image={images.wedding} />
      <section className="py-8 sm:py-12">
        <div className="container-x grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="eyebrow">Our Story</p>
            <h2 className="mt-3 text-3xl font-extrabold sm:text-5xl">From one speaker set to full-scale productions.</h2>
            <p className="mt-5 text-muted-foreground">What began with a small sound setup for local Ganesh Utsav celebrations grew into a full event technology company. Our logo carries a quiet tribute to Lord Ganesha — the remover of obstacles — because that's our job on event day: making sure nothing gets in the way.</p>
            <p className="mt-4 text-muted-foreground">With more than a decade of experience, we now own and operate sound systems, LED walls, projectors, lighting and camera crews for over a thousand events.</p>
          </div>
          <img src={images.equipment} alt="GK Events equipment" loading="lazy" className="aspect-[4/3] w-full rounded-[2rem] object-cover" />
        </div>
      </section>
      <Section eyebrow="Purpose" title="Mission, vision & values" className="pt-0">
        <CardGrid items={[
          { name: "Our Mission", desc: "Deliver dependable, premium event technology that lets hosts focus on their guests." },
          { name: "Our Vision", desc: "To be the most trusted name in AV and event production across India." },
          { name: "Reliability", desc: "Tested gear, backup equipment and punctual crews." },
          { name: "Craft", desc: "Attention to sound, light and frame in every detail." },
          { name: "Transparency", desc: "Clear quotes, no hidden charges." },
          { name: "Respect", desc: "For your traditions, your venue and your budget." },
        ]} />
      </Section>
      <Section eyebrow="Team & Expertise" title="The people behind the show" className="pt-0">
        <CardGrid items={[
          { name: "Sound Engineers", desc: "FOH and monitor engineers for speech and live music." },
          { name: "LED & Video Technicians", desc: "Wall builders, processors and content operators." },
          { name: "Lighting Designers", desc: "Moods, cues and DMX programming." },
          { name: "Photographers & Filmmakers", desc: "Candid, cinematic and corporate specialists." },
          { name: "Streaming Producers", desc: "Multi-camera switching and platform management." },
          { name: "Event Coordinators", desc: "A single point of contact from quote to pack-up." },
        ]} />
      </Section>
      <FinalCta title="Let's create something extraordinary." />
    </>
  );
}
