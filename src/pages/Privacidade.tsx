import type { ReactNode } from "react";
import { Layout } from "@/components/layout/Layout";
import {
  CONTATO_PRIVACIDADE,
  POLITICA_DATA_EXTENSO,
  POLITICA_VERSAO,
  RETENCAO_MESES,
} from "@/lib/materiais/constantes";

function Secao({ titulo, children }: { titulo: string; children: ReactNode }) {
  return (
    <section className="mb-10">
      <h2 className="text-xl sm:text-2xl font-bold text-white mb-4">
        {titulo}
      </h2>
      <div className="space-y-3 text-white/65 leading-relaxed">{children}</div>
    </section>
  );
}

const email = (
  <a
    href={`mailto:${CONTATO_PRIVACIDADE}`}
    className="text-accent underline underline-offset-2 hover:text-accent/80"
  >
    {CONTATO_PRIVACIDADE}
  </a>
);

export default function Privacidade() {
  return (
    <Layout>
      <article className="py-12 sm:py-20 bg-[#060D1A]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <p className="text-xs font-bold uppercase tracking-widest text-primary/80 mb-4">
              Política de Privacidade
            </p>
            <h1 className="text-3xl sm:text-4xl font-bold text-white mb-4">
              Como a IntelliX.AI cuida dos seus dados
            </h1>
            <p className="text-sm text-white/45 mb-10">
              Versão {POLITICA_VERSAO}, publicada em {POLITICA_DATA_EXTENSO}.
            </p>

            <Secao titulo="Quem cuida dos seus dados">
              <p>
                A IntelliX.AI, de Recife (PE), é a controladora dos dados
                pessoais coletados neste site. Isso quer dizer que somos nós que
                decidimos como eles são usados e respondemos por isso, conforme
                a Lei Geral de Proteção de Dados (Lei 13.709/2018, a LGPD).
              </p>
              <p>
                Para qualquer assunto sobre seus dados, escreva para {email}.
              </p>
            </Secao>

            <Secao titulo="Quais dados coletamos">
              <p>Quando você pede um material gratuito, coletamos:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>nome;</li>
                <li>número de WhatsApp;</li>
                <li>e-mail;</li>
                <li>
                  endereço IP e informações do navegador (registrados
                  automaticamente no envio do formulário);
                </li>
                <li>
                  de onde você chegou (por exemplo, uma campanha do Instagram),
                  quando o link traz essa informação.
                </li>
              </ul>
            </Secao>

            <Secao titulo="Para que usamos">
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Enviar o material que você pediu, pelo site e por e-mail.
                </li>
                <li>
                  Mandar novidades da IntelliX por WhatsApp e e-mail,{" "}
                  <strong className="text-white/80">
                    só se você marcar a segunda opção do formulário
                  </strong>
                  . Ela é opcional e vem desmarcada.
                </li>
                <li>
                  Guardar a prova do seu aceite (data, versão desta política, IP
                  e navegador) e evitar abuso do formulário por robôs.
                </li>
              </ul>
              <p>
                Não vendemos seus dados e não os usamos para outras finalidades.
              </p>
            </Secao>

            <Secao titulo="Base legal">
              <p>
                Tratamos esses dados com base no seu consentimento (LGPD, art.
                7º, inciso I), dado ao marcar as caixas do formulário. Você pode
                retirar o consentimento a qualquer momento, sem custo, pelo
                e-mail {email}.
              </p>
            </Secao>

            <Secao titulo="Com quem compartilhamos">
              <p>
                Usamos fornecedores que tratam os dados em nosso nome
                (operadores), apenas para fazer o serviço funcionar:
              </p>
              <ul className="list-disc pl-6 space-y-1">
                <li>
                  Supabase, por meio do Lovable Cloud: armazenamento do cadastro
                  e dos arquivos;
                </li>
                <li>Resend: envio do e-mail com o material;</li>
                <li>
                  Cloudflare: hospedagem do site e verificação anti-robô
                  (Turnstile).
                </li>
              </ul>
              <p>
                Alguns desses fornecedores podem armazenar dados fora do Brasil,
                com as garantias previstas na LGPD.
              </p>
            </Secao>

            <Secao titulo="Por quanto tempo guardamos">
              <p>
                Guardamos o cadastro por até {RETENCAO_MESES} meses a partir do
                pedido. Depois disso, os dados são excluídos. Se você pedir a
                exclusão antes, apagamos assim que possível, salvo quando a lei
                exigir que guardemos algo.
              </p>
            </Secao>

            <Secao titulo="Seus direitos">
              <p>Pela LGPD (art. 18), você pode pedir a qualquer momento:</p>
              <ul className="list-disc pl-6 space-y-1">
                <li>confirmação de que tratamos seus dados e acesso a eles;</li>
                <li>
                  correção de dados incompletos, errados ou desatualizados;
                </li>
                <li>
                  anonimização, bloqueio ou exclusão de dados desnecessários ou
                  excessivos;
                </li>
                <li>portabilidade dos dados a outro fornecedor;</li>
                <li>
                  exclusão dos dados tratados com base no seu consentimento;
                </li>
                <li>informação sobre com quem compartilhamos seus dados;</li>
                <li>
                  informação sobre a possibilidade de não consentir e o que isso
                  implica;
                </li>
                <li>revogação do consentimento.</li>
              </ul>
              <p>
                Para exercer qualquer um desses direitos, envie um e-mail para{" "}
                {email} informando o e-mail ou WhatsApp usado no cadastro.
                Respondemos em até 15 dias. Você também pode reclamar à
                Autoridade Nacional de Proteção de Dados (ANPD).
              </p>
            </Secao>

            <Secao titulo="Segurança">
              <p>
                Os dados ficam em banco com acesso restrito ao servidor do site,
                e os arquivos dos materiais ficam em armazenamento privado,
                entregues por links temporários.
              </p>
            </Secao>

            <Secao titulo="Mudanças nesta política">
              <p>
                Se esta política mudar, publicamos a nova versão aqui com a data
                atualizada. Cada cadastro guarda a versão que estava valendo
                quando você deu o aceite.
              </p>
            </Secao>
          </div>
        </div>
      </article>
    </Layout>
  );
}
