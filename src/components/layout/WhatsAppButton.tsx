import { MessageCircle } from "lucide-react";

const WHATSAPP_NUMBER = "5581988514775";
const DEFAULT_MESSAGE = "Olá! Vim pelo site da IntelliX.AI e gostaria de saber mais sobre as soluções.";

export function WhatsAppButton() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MESSAGE)}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] hover:bg-[#20BD5A] text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 animate-pulse-glow"
      aria-label="Contato via WhatsApp"
      style={{
        boxShadow: "0 4px 20px rgba(37, 211, 102, 0.4)",
      }}
    >
      <MessageCircle size={28} fill="white" />
    </a>
  );
}
