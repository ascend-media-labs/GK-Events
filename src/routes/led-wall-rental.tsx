import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/Blocks";
import { services } from "@/data/site";

const d = services["led"]!;

export const Route = createFileRoute("/led-wall-rental")({
  head: () => ({
    meta: [
      { title: "LED Wall & LED Screen Rental | GK Events" },
      { name: "description", content: d.intro },
      { property: "og:title", content: "LED Wall & LED Screen Rental | GK Events" },
      { property: "og:description", content: d.intro },
    ],
  }),
  component: () => <ServicePage d={d} />,
});
