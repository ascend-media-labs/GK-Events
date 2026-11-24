import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/Blocks";
import { services } from "@/data/site";

const d = services["sound"]!;

export const Route = createFileRoute("/sound-system-rental")({
  head: () => ({
    meta: [
      { title: "Sound System Rental | GK Events" },
      { name: "description", content: d.intro },
      { property: "og:title", content: "Sound System Rental | GK Events" },
      { property: "og:description", content: d.intro },
    ],
  }),
  component: () => <ServicePage d={d} />,
});
