import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";

// Widget do Cloudflare Turnstile (renderização explícita).
// Só é montado quando VITE_TURNSTILE_SITE_KEY está definida.

interface TurnstileApi {
  render: (
    el: HTMLElement,
    opts: {
      sitekey: string;
      callback: (token: string) => void;
      "expired-callback"?: () => void;
      "error-callback"?: () => void;
      theme?: "light" | "dark" | "auto";
      language?: string;
      action?: string;
    },
  ) => string;
  reset: (id?: string) => void;
  remove: (id: string) => void;
}

declare global {
  interface Window {
    turnstile?: TurnstileApi;
  }
}

const SCRIPT_SRC =
  "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
let scriptPromise: Promise<void> | null = null;

function carregarScript(): Promise<void> {
  if (window.turnstile) return Promise.resolve();
  if (scriptPromise) return scriptPromise;
  scriptPromise = new Promise<void>((resolve, reject) => {
    const s = document.createElement("script");
    s.src = SCRIPT_SRC;
    s.async = true;
    s.defer = true;
    s.onload = () => resolve();
    s.onerror = () => {
      scriptPromise = null;
      reject(new Error("Falha ao carregar o Turnstile"));
    };
    document.head.appendChild(s);
  });
  return scriptPromise;
}

export interface TurnstileHandle {
  reset: () => void;
}

interface Props {
  siteKey: string;
  onToken: (token: string | null) => void;
}

export const Turnstile = forwardRef<TurnstileHandle, Props>(function Turnstile(
  { siteKey, onToken },
  ref,
) {
  const containerRef = useRef<HTMLDivElement>(null);
  const widgetId = useRef<string | null>(null);
  const onTokenRef = useRef(onToken);
  onTokenRef.current = onToken;

  useImperativeHandle(ref, () => ({
    reset: () => {
      onTokenRef.current(null);
      if (widgetId.current && window.turnstile)
        window.turnstile.reset(widgetId.current);
    },
  }));

  useEffect(() => {
    let ativo = true;
    carregarScript()
      .then(() => {
        if (!ativo || !containerRef.current || !window.turnstile) return;
        widgetId.current = window.turnstile.render(containerRef.current, {
          sitekey: siteKey,
          theme: "dark",
          language: "pt-br",
          action: "material",
          callback: (token) => onTokenRef.current(token),
          "expired-callback": () => onTokenRef.current(null),
          "error-callback": () => onTokenRef.current(null),
        });
      })
      .catch(() => onTokenRef.current(null));
    return () => {
      ativo = false;
      if (widgetId.current && window.turnstile)
        window.turnstile.remove(widgetId.current);
      widgetId.current = null;
    };
  }, [siteKey]);

  return <div ref={containerRef} className="min-h-[65px]" />;
});
