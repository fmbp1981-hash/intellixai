import { createFileRoute, redirect } from "@tanstack/react-router";

// Permanent redirect /portfolio → /cases (preserved from the original route config)
export const Route = createFileRoute("/portfolio")({
  beforeLoad: () => {
    throw redirect({ to: "/cases", replace: true });
  },
});
