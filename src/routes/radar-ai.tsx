import { createFileRoute } from "@tanstack/react-router";
import RadarAI from "@/pages/RadarAI";

export const Route = createFileRoute("/radar-ai")({
  component: RadarAI,
});
