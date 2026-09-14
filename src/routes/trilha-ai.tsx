import { createFileRoute } from "@tanstack/react-router";
import TrilhaAI from "@/pages/TrilhaAI";

export const Route = createFileRoute("/trilha-ai")({
  component: TrilhaAI,
});
