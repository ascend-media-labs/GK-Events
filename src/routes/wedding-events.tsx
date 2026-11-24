import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/Blocks";
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
  component: () => <ServicePage d={d} />,
});
