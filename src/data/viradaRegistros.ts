import yoloTurma1 from "@/assets/virada/yolo-turma-1.jpeg.asset.json";
import yoloTurma2 from "@/assets/virada/yolo-turma-2.jpeg.asset.json";
import yoloInstrutor from "@/assets/virada/yolo-instrutor.jpeg.asset.json";
import yoloVideoInstrutor from "@/assets/virada/yolo-instrutor-video.mp4.asset.json";
import yoloVideoInstrutorPoster from "@/assets/virada/yolo-instrutor-video-poster.jpg.asset.json";
import yoloVideoParticipantes from "@/assets/virada/yolo-participantes-video.mp4.asset.json";
import yoloVideoParticipantesPoster from "@/assets/virada/yolo-participantes-video-poster.jpg.asset.json";
import frameInstrutorTela from "@/assets/virada/yolo-frame-instrutor-tela.jpg.asset.json";
import frameInstrutorExplica from "@/assets/virada/yolo-frame-instrutor-explica.jpg.asset.json";
import frameParticipantesAtentos from "@/assets/virada/yolo-frame-participantes-atentos.jpg.asset.json";
import frameInstrutorApontando from "@/assets/virada/yolo-frame-instrutor-apontando.jpg.asset.json";
import frameParticipantePergunta from "@/assets/virada/yolo-frame-participante-pergunta.jpg.asset.json";
import frameMaosNaMassa from "@/assets/virada/yolo-frame-maos-na-massa.jpg.asset.json";


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
        tipo: "video",
        url: yoloVideoInstrutor.url,
        poster: yoloVideoInstrutorPoster.url,
        alt: "Vídeo do instrutor da IntelliX.AI conduzindo o treinamento de IA na Yolo Coliving",
      },
      {
        tipo: "video",
        url: yoloVideoParticipantes.url,
        poster: yoloVideoParticipantesPoster.url,
        alt: "Vídeo dos participantes praticando com ferramentas de IA durante a Virada Inteligente",
      },
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
