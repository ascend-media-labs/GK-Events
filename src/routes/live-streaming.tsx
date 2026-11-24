import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/Blocks";
import { services } from "@/data/site";

const d = services["stream"]!;

export const Route = createFileRoute("/live-streaming")({
  head: () => ({
    meta: [
      { title: "Live Streaming Services | GK Events" },
      { name: "description", content: d.intro },
      { property: "og:title", content: "Live Streaming Services | GK Events" },
      { property: "og:description", content: d.intro },
    ],
  }),
  component: () => <ServicePage d={d} />,
});
