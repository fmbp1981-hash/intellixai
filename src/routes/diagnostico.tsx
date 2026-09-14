import { createFileRoute } from "@tanstack/react-router";
import Diagnostico from "@/pages/Diagnostico";

export const Route = createFileRoute("/diagnostico")({
  component: Diagnostico,
});
