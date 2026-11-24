import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/Blocks";
import { services } from "@/data/site";

const d = services["other"]!;

export const Route = createFileRoute("/event-solutions")({
  head: () => ({
    meta: [
      { title: "Lighting, Staging & Other Event Solutions | GK Events" },
      { name: "description", content: d.intro },
      { property: "og:title", content: "Lighting, Staging & Other Event Solutions | GK Events" },
      { property: "og:description", content: d.intro },
    ],
  }),
  component: () => <ServicePage d={d} />,
});
