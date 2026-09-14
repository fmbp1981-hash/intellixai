import { createFileRoute } from "@tanstack/react-router";
import QuemSomos from "@/pages/QuemSomos";

export const Route = createFileRoute("/quem-somos")({
  component: QuemSomos,
});
