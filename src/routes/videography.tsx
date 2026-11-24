import { createFileRoute } from "@tanstack/react-router";
import { ServicePage } from "@/components/site/Blocks";
import { services } from "@/data/site";

const d = services["video"]!;

export const Route = createFileRoute("/videography")({
  head: () => ({
    meta: [
      { title: "Videography & Cinematic Films | GK Events" },
      { name: "description", content: d.intro },
      { property: "og:title", content: "Videography & Cinematic Films | GK Events" },
      { property: "og:description", content: d.intro },
    ],
  }),
  component: () => <ServicePage d={d} />,
});
