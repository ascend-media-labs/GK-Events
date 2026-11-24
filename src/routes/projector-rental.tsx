import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/Blocks";
import { services } from "@/data/site";

const d = services["projector"]!;

export const Route = createFileRoute("/projector-rental")({
  head: () => ({
    meta: [
      { title: "Projector & Screen Rental | GK Events" },
      { name: "description", content: d.intro },
      { property: "og:title", content: "Projector & Screen Rental | GK Events" },
      { property: "og:description", content: d.intro },
    ],
  }),
  component: () => <ServicePage d={d} />,
});
