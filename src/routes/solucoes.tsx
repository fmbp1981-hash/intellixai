import { createFileRoute } from "@tanstack/react-router";
import Solucoes from "@/pages/Solucoes";

export const Route = createFileRoute("/solucoes")({
  component: Solucoes,
});
