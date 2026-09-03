import yoloTurma1 from "@/assets/virada/yolo-turma-1.jpeg.asset.json";
import yoloTurma2 from "@/assets/virada/yolo-turma-2.jpeg.asset.json";
import yoloInstrutor from "@/assets/virada/yolo-instrutor.jpeg.asset.json";
import yoloTela from "@/assets/virada/yolo-tela.jpeg.asset.json";

export type Midia = {
  tipo: "image" | "video";
  url: string;
  alt: string;
  poster?: string;
};

export type RegistroTurma = {
  id: string;
  cliente: string;
  formato: string;
  data: string;
  local: string;
  descricao: string;
  midias: Midia[];
};

export const registrosVirada: RegistroTurma[] = [
  {
    id: "yolo-coliving-2026-08-27",
    cliente: "Yolo Coliving",
    formato: "In Company",
    data: "27 de agosto de 2026",
    local: "Recife · PE",
    descricao:
      "Equipe capacitada nas principais ferramentas de IA aplicadas à rotina comercial e operacional, com casos práticos construídos ao vivo durante a imersão.",
    midias: [
      {
        tipo: "image",
        url: yoloTurma1.url,
        alt: "Turma da Yolo Coliving reunida ao final da imersão Virada Inteligente",
      },
      {
        tipo: "image",
        url: yoloTurma2.url,
        alt: "Foto oficial da equipe da Yolo Coliving após o treinamento de IA da IntelliX.AI",
      },
      {
        tipo: "image",
        url: yoloInstrutor.url,
        alt: "Instrutor da IntelliX.AI conduzindo a imersão Virada Inteligente na Yolo Coliving",
      },
      {
        tipo: "image",
        url: yoloTela.url,
        alt: "Tela com ferramentas de IA em uso durante o treinamento in company",
      },
    ],
  },
];
