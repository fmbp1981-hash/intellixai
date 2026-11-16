import { createFileRoute, notFound } from "@tanstack/react-router";
import MaterialDetalhe from "@/pages/MaterialDetalhe";
import NotFound from "@/pages/NotFound";
import { obterMaterial } from "@/functions/materiais.functions";
import { separarDescricao } from "@/lib/materiais/texto";

export const Route = createFileRoute("/materiais/$slug")({
  loader: async ({ params }) => {
    const material = await obterMaterial({ data: { slug: params.slug } });
    if (!material) throw notFound();
    return material;
  },
  head: ({ loaderData, params }) => {
    if (!loaderData)
      return { meta: [{ title: "Material não encontrado | IntelliX.AI" }] };
    const titulo = `${loaderData.titulo} | Material gratuito IntelliX.AI`;
    const descricao =
      separarDescricao(loaderData.descricao).resumo.slice(0, 160) ||
      "Material gratuito da IntelliX.AI. Deixe seu contato e baixe na hora.";
    const url = `https://intellixai.com.br/materiais/${params.slug}`;
    return {
      meta: [
        { title: titulo },
        { name: "description", content: descricao },
        { property: "og:title", content: titulo },
        { property: "og:description", content: descricao },
        { property: "og:type", content: "website" },
        { property: "og:url", content: url },
        ...(loaderData.capaUrl
          ? [
              { property: "og:image", content: loaderData.capaUrl },
              { name: "twitter:image", content: loaderData.capaUrl },
            ]
          : []),
      ],
      links: [{ rel: "canonical", href: url }],
    };
  },
  component: MaterialRoute,
  notFoundComponent: () => <NotFound />,
});

function MaterialRoute() {
  const material = Route.useLoaderData();
  return <MaterialDetalhe material={material} />;
}
