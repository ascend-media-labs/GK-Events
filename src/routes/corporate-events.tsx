import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/Blocks";
import { services } from "@/data/site";

const d = services["corporate"]!;

export const Route = createFileRoute("/corporate-events")({
  head: () => ({
    meta: [
      { title: "Corporate Event Solutions | GK Events" },
      { name: "description", content: d.intro },
      { property: "og:title", content: "Corporate Event Solutions | GK Events" },
      { property: "og:description", content: d.intro },
    ],
  }),
  component: () => <ServicePage d={d} />,
});
