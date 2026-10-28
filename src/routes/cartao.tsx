import { createFileRoute, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import QRCode from "qrcode";
import {
  MessageCircle, Phone, Mail, Globe, Linkedin, Instagram, CalendarCheck,
  UserPlus, QrCode, Image as ImageIcon, Share2,
} from "lucide-react";

const CARD_URL = "https://intellixai.com.br/cartao";
const INFO = {
  phone: "+5581988514775",
  phoneLabel: "+55 81 98851-4775",
  email: "contato@intellixai.com.br",
  site: "https://intellixai.com.br",
  linkedin: "https://www.linkedin.com/in/intellix-ai-919136416",
  instagram: "https://instagram.com/ai_intellix",
};

export const Route = createFileRoute("/cartao")({
  head: () => ({
    meta: [
      { title: "Cartão Digital — IntelliX.AI" },
      { name: "description", content: "Cartão de visita digital da IntelliX.AI: WhatsApp, e-mail, site, redes e contato para salvar na agenda." },
      { property: "og:title", content: "Cartão Digital — IntelliX.AI" },
      { property: "og:description", content: "Fale com a IntelliX.AI: Inteligência Artificial que gera resultados reais." },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary" },
    ],
    links: [{ rel: "manifest", href: "/manifest.webmanifest" }],
  }),
  component: CartaoPage,
});

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30_000);
}

function loadImage(src: string) {
  return new Promise<HTMLImageElement>((res, rej) => {
    const img = new Image();
    img.onload = () => res(img);
    img.onerror = rej;
    img.src = src;
  });
}

async function logoBase64(): Promise<string | null> {
  try {
    const img = await loadImage("/favicon.png");
    const c = document.createElement("canvas");
    c.width = 256; c.height = 256;
    const ctx = c.getContext("2d")!;
    ctx.fillStyle = "#1A1A2E"; ctx.fillRect(0, 0, 256, 256);
    ctx.drawImage(img, 0, 0, 256, 256);
    return c.toDataURL("image/jpeg", 0.85).split(",")[1] ?? null;
  } catch {
    return null;
  }
}

async function buildVcf() {
  const photo = await logoBase64();
  const lines = [
    "BEGIN:VCARD", "VERSION:3.0",
    "N:;IntelliX.AI;;;", "FN:IntelliX.AI", "ORG:IntelliX.AI",
    "TITLE:Inteligência Artificial para Negócios",
    `TEL;TYPE=CELL,VOICE:${INFO.phone}`,
    `EMAIL;TYPE=WORK:${INFO.email}`,
    `URL:${INFO.site}`,
    `X-SOCIALPROFILE;TYPE=linkedin:${INFO.linkedin}`,
    `X-SOCIALPROFILE;TYPE=instagram:${INFO.instagram}`,
    "NOTE:Inteligência Artificial que gera resultados reais. Agentes de IA\\, automações\\, CRM e WhatsApp API Oficial.",
    ...(photo ? [`PHOTO;ENCODING=b;TYPE=PNG:${photo}`] : []),
    "END:VCARD",
  ];
  return new Blob([lines.join("\r\n")], { type: "text/vcard;charset=utf-8" });
}

async function buildCardImage(qr: string) {
  const W = 1080, H = 1350;
  const c = document.createElement("canvas");
  c.width = W; c.height = H;
  const ctx = c.getContext("2d")!;
  const g = ctx.createLinearGradient(0, 0, W, H);
  g.addColorStop(0, "#1A1A2E"); g.addColorStop(1, "#0F1424");
  ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = "rgba(245,166,35,0.5)"; ctx.lineWidth = 4;
  ctx.strokeRect(40, 40, W - 80, H - 80);
  try {
    const logo = await loadImage("/favicon.png");
    ctx.drawImage(logo, W / 2 - 90, 100, 180, 180);
  } catch { /* sem logo */ }
  ctx.textAlign = "center";
  ctx.font = "700 84px 'Space Grotesk', sans-serif";
  const a = "IntelliX", b = ".AI";
  const wa = ctx.measureText(a).width, wb = ctx.measureText(b).width;
  const x0 = W / 2 - (wa + wb) / 2;
  ctx.textAlign = "left";
  ctx.fillStyle = "#F5A623"; ctx.fillText(a, x0, 380);
  ctx.fillStyle = "#2B9BD6"; ctx.fillText(b, x0 + wa, 380);
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255,255,255,0.75)";
  ctx.font = "400 34px sans-serif";
  ctx.fillText("Inteligência Artificial que gera resultados reais", W / 2, 440);
  const qrImg = await loadImage(qr);
  ctx.fillStyle = "#FFFFFF";
  ctx.fillRect(W / 2 - 230, 500, 460, 460);
  ctx.drawImage(qrImg, W / 2 - 210, 520, 420, 420);
  ctx.fillStyle = "#FFFFFF";
  ctx.font = "500 38px sans-serif";
  [INFO.phoneLabel, INFO.email, "intellixai.com.br", "@ai_intellix"].forEach((t, i) =>
    ctx.fillText(t, W / 2, 1050 + i * 60),
  );
  return new Promise<Blob>((r) => c.toBlob((x) => r(x!), "image/png"));
}

function CartaoPage() {
  const [qr, setQr] = useState<string | null>(null);
  const [vcf, setVcf] = useState<Blob | null>(null);
  const [cardImg, setCardImg] = useState<Blob | null>(null);

  useEffect(() => {
    let alive = true;
    (async () => {
      const q = await QRCode.toDataURL(CARD_URL, { width: 1200, margin: 2, color: { dark: "#1A1A2E", light: "#FFFFFF" } });
      if (!alive) return;
      setQr(q);
      setVcf(await buildVcf());
      setCardImg(await buildCardImage(q));
    })();
    return () => { alive = false; };
  }, []);

  const share = async () => {
    const data = { title: "IntelliX.AI", text: "Cartão digital da IntelliX.AI", url: CARD_URL };
    if (navigator.share) {
      try { await navigator.share(data); } catch { /* cancelado */ }
    } else {
      window.open(`https://wa.me/?text=${encodeURIComponent(`${data.text}: ${CARD_URL}`)}`, "_blank");
    }
  };

  const actions = [
    { label: "WhatsApp", icon: MessageCircle, href: `https://wa.me/${INFO.phone.replace("+", "")}` },
    { label: "Ligar", icon: Phone, href: `tel:${INFO.phone}` },
    { label: "E-mail", icon: Mail, href: `mailto:${INFO.email}` },
    { label: "Site", icon: Globe, href: INFO.site },
    { label: "LinkedIn", icon: Linkedin, href: INFO.linkedin },
    { label: "Instagram", icon: Instagram, href: INFO.instagram },
  ];

  const btn = "flex items-center justify-center gap-2 rounded-xl border border-border bg-card/60 px-4 py-3 text-sm font-medium text-foreground transition-all hover:border-gold hover:text-gold hover:scale-[1.02] disabled:opacity-50";

  return (
    <div className="min-h-screen bg-background px-4 py-10">
      <div className="mx-auto max-w-md">
        <div className="rounded-3xl border border-gold/30 bg-card/70 p-6 shadow-2xl backdrop-blur">
          <div className="flex flex-col items-center text-center">
            <img src="/favicon.png" alt="Logo IntelliX.AI" className="h-24 w-24 rounded-2xl" />
            <h1 className="mt-4 font-['Space_Grotesk'] text-3xl font-bold">
              <span className="text-gold">IntelliX</span>
              <span className="bg-gradient-to-r from-primary to-cyan bg-clip-text text-transparent">.AI</span>
            </h1>
            <p className="mt-2 text-sm text-muted-foreground">Inteligência Artificial que gera resultados reais</p>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {actions.map(({ label, icon: Icon, href }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer" className={btn}>
                <Icon className="h-4 w-4" /> {label}
              </a>
            ))}
          </div>

          <Link to="/diagnostico" className="mt-3 flex items-center justify-center gap-2 rounded-xl bg-gold px-4 py-3 text-sm font-semibold text-background transition-all hover:brightness-110">
            <CalendarCheck className="h-4 w-4" /> Agendar diagnóstico
          </Link>

          <div className="mt-6 flex justify-center">
            {qr ? <img src={qr} alt="QR Code do cartão IntelliX.AI" className="h-44 w-44 rounded-xl bg-white p-2" /> : <div className="h-44 w-44 animate-pulse rounded-xl bg-muted" />}
          </div>

          <div className="mt-6 grid gap-3">
            <button className={btn} disabled={!vcf} onClick={() => vcf && downloadBlob(vcf, "IntelliX-AI.vcf")}>
              <UserPlus className="h-4 w-4" /> Salvar contato na agenda
            </button>
            <button className={btn} disabled={!cardImg} onClick={() => cardImg && downloadBlob(cardImg, "Cartao-IntelliX-AI.png")}>
              <ImageIcon className="h-4 w-4" /> Baixar cartão (imagem)
            </button>
            <button className={btn} disabled={!qr} onClick={async () => qr && downloadBlob(await (await fetch(qr)).blob(), "QRCode-IntelliX-AI.png")}>
              <QrCode className="h-4 w-4" /> Baixar QR Code
            </button>
            <button className={btn} onClick={share}>
              <Share2 className="h-4 w-4" /> Compartilhar no WhatsApp
            </button>
          </div>

          <p className="mt-6 text-center text-xs text-muted-foreground">
            Dica: no celular, toque em "Adicionar à Tela de Início" para ter o cartão como app.
          </p>
        </div>
        <Link to="/" className="mt-6 block text-center text-xs text-muted-foreground hover:text-gold">intellixai.com.br</Link>
      </div>
    </div>
  );
}
