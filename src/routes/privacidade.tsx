import { createFileRoute } from "@tanstack/react-router";
import Privacidade from "@/pages/Privacidade";

const TITULO = "Política de Privacidade | IntelliX.AI";
const DESCRICAO =
  "Como a IntelliX.AI coleta, usa, compartilha e protege seus dados pessoais, e como exercer seus direitos pela LGPD.";

export const Route = createFileRoute("/privacidade")({
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://intellixai.com.br/privacidade" },
    ],
    links: [
      { rel: "canonical", href: "https://intellixai.com.br/privacidade" },
    ],
  }),
  component: Privacidade,
});
