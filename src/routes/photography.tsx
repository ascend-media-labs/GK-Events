import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/Blocks";
import { services } from "@/data/site";

const d = services["photo"]!;

export const Route = createFileRoute("/photography")({
  head: () => ({
    meta: [
      { title: "Event & Wedding Photography | GK Events" },
      { name: "description", content: d.intro },
      { property: "og:title", content: "Event & Wedding Photography | GK Events" },
      { property: "og:description", content: d.intro },
    ],
  }),
  component: () => <ServicePage d={d} />,
});
