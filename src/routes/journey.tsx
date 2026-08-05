import { createFileRoute } from "@tanstack/react-router";
import { Journey } from "@/components/portfolio/Journey";
import { SmoothScroll } from "@/components/portfolio/SmoothScroll";
import { BackToTop } from "@/components/portfolio/BackToTop";

const title = "The Bharat Forge Journey — Avni Singh";
const description =
  "A phase-by-phase case study of Avni Singh's Bharat Forge internship: ROS 2 robotics foundations, VLA research, modular architecture, fleet and warehouse management systems, and multi-agent path planning.";

export const Route = createFileRoute("/journey")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: JourneyPage,
});

function JourneyPage() {
  return (
    <>
      <SmoothScroll />
      <Journey />
      <BackToTop />
    </>
  );
}
