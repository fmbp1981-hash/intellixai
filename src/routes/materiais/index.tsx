import { createFileRoute } from "@tanstack/react-router";
import Materiais from "@/pages/Materiais";
import { listarMateriais } from "@/functions/materiais.functions";

const TITULO = "Materiais gratuitos | IntelliX.AI";
const DESCRICAO =
  "Guias práticos e gratuitos da IntelliX.AI sobre Inteligência Artificial aplicada ao negócio. Baixe na hora.";

export const Route = createFileRoute("/materiais/")({
  loader: () => listarMateriais(),
  head: () => ({
    meta: [
      { title: TITULO },
      { name: "description", content: DESCRICAO },
      { property: "og:title", content: TITULO },
      { property: "og:description", content: DESCRICAO },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://intellixai.com.br/materiais" },
    ],
    links: [{ rel: "canonical", href: "https://intellixai.com.br/materiais" }],
  }),
  component: MateriaisRoute,
});

function MateriaisRoute() {
  const materiais = Route.useLoaderData();
  return <Materiais materiais={materiais} />;
}
