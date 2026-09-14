import { createFileRoute } from "@tanstack/react-router";
import ForjaAI from "@/pages/ForjaAI";

export const Route = createFileRoute("/forja-ai")({
  component: ForjaAI,
});
