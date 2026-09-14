import { createFileRoute } from "@tanstack/react-router";
import ViradaInteligente from "@/pages/ViradaInteligente";

export const Route = createFileRoute("/virada-inteligente")({
  component: ViradaInteligente,
});
