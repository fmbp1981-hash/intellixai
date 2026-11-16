import { useEffect, useRef, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CheckCircle2, Download, Loader2, Mail } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Turnstile,
  type TurnstileHandle,
} from "@/components/materiais/Turnstile";
import { solicitarMaterial } from "@/functions/materiais.functions";
import {
  formularioMaterialSchema,
  type FormularioMaterial,
} from "@/lib/materiais/schema";
import { ehErro } from "@/lib/materiais/resposta";
import type {
  SolicitacaoAtendida,
  SolicitacaoMeta,
} from "@/lib/materiais/tipos";

const TURNSTILE_SITE_KEY: string | undefined = import.meta.env[
  "VITE_TURNSTILE_SITE_KEY"
];

const inputClass =
  "h-12 text-base bg-white/6 border-white/12 text-white placeholder:text-white/30 focus:border-accent/60 focus:bg-white/8 transition-[border-color,background-color] duration-200";

function lerOrigem(): string | undefined {
  try {
    const params = new URLSearchParams(window.location.search);
    const partes: string[] = [];
    for (const chave of [
      "utm_source",
      "utm_medium",
      "utm_campaign",
      "utm_content",
      "ref",
    ]) {
      const v = params.get(chave);
      if (v) partes.push(`${chave}=${v.slice(0, 60)}`);
    }
    return partes.length ? partes.join(";").slice(0, 200) : undefined;
  } catch {
    return undefined;
  }
}

interface Resultado {
  dados: SolicitacaoAtendida;
  meta: SolicitacaoMeta | undefined;
}

export function FormularioMaterialCard({
  slug,
  titulo,
}: {
  slug: string;
  titulo: string;
}) {
  const [honeypot, setHoneypot] = useState("");
  const [token, setToken] = useState<string | null>(null);
  const [erroGeral, setErroGeral] = useState<string | null>(null);
  const [resultado, setResultado] = useState<Resultado | null>(null);
  const [origem, setOrigem] = useState<string | undefined>(undefined);
  const turnstileRef = useRef<TurnstileHandle>(null);

  useEffect(() => setOrigem(lerOrigem()), []);

  const form = useForm<FormularioMaterial>({
    resolver: zodResolver(formularioMaterialSchema),
    defaultValues: {
      nome: "",
      whatsapp: "",
      email: "",
      consentimentoMaterial: false,
      consentimentoNovidades: false,
    },
  });

  const enviando = form.formState.isSubmitting;
  const precisaTurnstile = Boolean(TURNSTILE_SITE_KEY);

  async function onSubmit(valores: FormularioMaterial) {
    setErroGeral(null);
    if (precisaTurnstile && !token) {
      setErroGeral("Aguarde a verificação anti-robô terminar e tente de novo.");
      return;
    }
    try {
      const resposta = await solicitarMaterial({
        data: {
          ...valores,
          slug,
          site: honeypot,
          ...(token ? { turnstileToken: token } : {}),
          ...(origem ? { origem } : {}),
        },
      });
      if (ehErro(resposta)) {
        // token do Turnstile é de uso único: renova após qualquer falha
        turnstileRef.current?.reset();
        const campos = resposta.error.campos ?? {};
        for (const [campo, mensagem] of Object.entries(campos)) {
          if (campo in valores) {
            form.setError(campo as keyof FormularioMaterial, {
              message: mensagem,
            });
          }
        }
        setErroGeral(resposta.error.message);
        return;
      }
      setResultado({ dados: resposta.data, meta: resposta.meta });
    } catch {
      turnstileRef.current?.reset();
      setErroGeral(
        "Não foi possível enviar agora. Verifique sua conexão e tente de novo.",
      );
    }
  }

  if (resultado) {
    const { dados, meta } = resultado;
    return (
      <div
        className="rounded-2xl border border-accent/30 bg-accent/6 p-6 sm:p-8 text-center"
        role="status"
        aria-live="polite"
      >
        <div className="w-14 h-14 rounded-2xl bg-accent/15 border border-accent/30 flex items-center justify-center mx-auto mb-5">
          <CheckCircle2 className="w-7 h-7 text-accent" aria-hidden="true" />
        </div>
        <h2 className="text-xl font-bold text-white mb-2">
          Seu material está pronto
        </h2>
        <p className="text-white/60 text-sm mb-6">{titulo}</p>
        <a
          href={dados.downloadUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent to-yellow-400 px-6 py-4 text-base font-bold text-accent-foreground shadow-[0_0_20px_hsl(var(--accent)/0.3)] transition-shadow hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)]"
        >
          <Download className="w-5 h-5" aria-hidden="true" />
          Baixar material
        </a>
        <p className="mt-5 text-sm text-white/60 flex items-start justify-center gap-2">
          {dados.emailEnviado ? (
            <>
              <Mail
                className="w-4 h-4 mt-0.5 flex-shrink-0 text-primary"
                aria-hidden="true"
              />
              <span>Enviamos também para seu e-mail.</span>
            </>
          ) : meta?.duplicado ? (
            <span>
              Você já tinha pedido este material há pouco. Aqui está o link de
              novo; o e-mail enviado antes continua valendo.
            </span>
          ) : (
            <span>
              Não conseguimos enviar o e-mail agora. Baixe pelo botão acima.
            </span>
          )}
        </p>
        <p className="mt-3 text-xs text-white/40">
          O link é válido por 1 hora. Se expirar, é só pedir de novo nesta
          página.
        </p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        noValidate
        className="rounded-2xl border border-white/8 bg-white/4 p-5 sm:p-8"
        aria-label={`Receber o material ${titulo}`}
      >
        <div className="space-y-5">
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-white/70">
                  Nome
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    autoComplete="name"
                    placeholder="Seu nome"
                    className={inputClass}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="whatsapp"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-white/70">
                  WhatsApp com DDD
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel-national"
                    placeholder="(81) 98851-4775"
                    className={inputClass}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="text-sm font-medium text-white/70">
                  E-mail
                </FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    type="email"
                    inputMode="email"
                    autoComplete="email"
                    placeholder="voce@empresa.com.br"
                    className={inputClass}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {/* Honeypot: invisível para pessoas; robôs costumam preencher */}
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px overflow-hidden"
          >
            <label htmlFor={`hp-${slug}`}>Não preencha este campo</label>
            <input
              id={`hp-${slug}`}
              name="hp_confirmacao_url"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              value={honeypot}
              onChange={(e) => setHoneypot(e.target.value)}
            />
          </div>

          <FormField
            control={form.control}
            name="consentimentoMaterial"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(v) => field.onChange(v === true)}
                      onBlur={field.onBlur}
                      className="mt-0.5 h-5 w-5"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal leading-snug text-white/70">
                    Concordo em receber este material e com a{" "}
                    <Link
                      to="/privacidade"
                      target="_blank"
                      className="text-accent underline underline-offset-2 hover:text-accent/80"
                    >
                      Política de Privacidade
                    </Link>
                    .
                  </FormLabel>
                </div>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="consentimentoNovidades"
            render={({ field }) => (
              <FormItem>
                <div className="flex items-start gap-3">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={(v) => field.onChange(v === true)}
                      onBlur={field.onBlur}
                      className="mt-0.5 h-5 w-5"
                    />
                  </FormControl>
                  <FormLabel className="text-sm font-normal leading-snug text-white/70">
                    Quero receber novidades da IntelliX por WhatsApp e e-mail
                    (opcional).
                  </FormLabel>
                </div>
              </FormItem>
            )}
          />

          {TURNSTILE_SITE_KEY ? (
            <Turnstile
              ref={turnstileRef}
              siteKey={TURNSTILE_SITE_KEY}
              onToken={setToken}
            />
          ) : null}

          {erroGeral ? (
            <p
              role="alert"
              className="rounded-lg border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-red-200"
            >
              {erroGeral}
            </p>
          ) : null}

          <Button
            type="submit"
            disabled={enviando}
            className="w-full h-12 text-base bg-gradient-to-r from-accent to-yellow-400 text-accent-foreground font-bold shadow-[0_0_20px_hsl(var(--accent)/0.3)] hover:shadow-[0_0_30px_hsl(var(--accent)/0.5)] transition-[box-shadow,opacity] duration-200 disabled:opacity-60"
          >
            {enviando ? (
              <>
                <Loader2
                  className="w-4 h-4 mr-2 animate-spin"
                  aria-hidden="true"
                />
                Enviando...
              </>
            ) : (
              <>
                <Download className="w-4 h-4 mr-2" aria-hidden="true" />
                Quero o material
              </>
            )}
          </Button>
        </div>

        <p className="text-xs text-white/35 text-center mt-4">
          Usamos seus dados para enviar este material. Novidades, só se você
          marcar a opção acima.
        </p>
      </form>
    </Form>
  );
}
