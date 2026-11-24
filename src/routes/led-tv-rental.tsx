import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/Blocks";
import { services } from "@/data/site";

const d = services["tv"]!;

export const Route = createFileRoute("/led-tv-rental")({
  head: () => ({
    meta: [
      { title: "LED TV Rental | GK Events" },
      { name: "description", content: d.intro },
      { property: "og:title", content: "LED TV Rental | GK Events" },
      { property: "og:description", content: d.intro },
    ],
  }),
  component: () => <ServicePage d={d} />,
});
