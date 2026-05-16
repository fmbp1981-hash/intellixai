import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import QuemSomos from "./pages/QuemSomos";
import Solucoes from "./pages/Solucoes";
import Cases from "./pages/Cases";
import CaseDetail from "./pages/CaseDetail";
import ComoTrabalhamos from "./pages/ComoTrabalhamos";
import Diagnostico from "./pages/Diagnostico";
import Contato from "./pages/Contato";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import NotFound from "./pages/NotFound";
import ViradaInteligente from "./pages/ViradaInteligente";
import TrilhaAI from "./pages/TrilhaAI";
import RadarAI from "./pages/RadarAI";
import ForjaAI from "./pages/ForjaAI";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/quem-somos" element={<QuemSomos />} />
          <Route path="/solucoes" element={<Solucoes />} />
          <Route path="/cases" element={<Cases />} />
          <Route path="/cases/:slug" element={<CaseDetail />} />
          {/* redirect permanente /portfolio → /cases */}
          <Route path="/portfolio" element={<Navigate to="/cases" replace />} />
          <Route path="/como-trabalhamos" element={<ComoTrabalhamos />} />
          <Route path="/diagnostico" element={<Diagnostico />} />
          <Route path="/contato" element={<Contato />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogPost />} />
          {/* Landings das 4 frentes — páginas a criar nas próximas etapas */}
          <Route path="/virada-inteligente" element={<ViradaInteligente />} />
          <Route path="/radar-ai" element={<RadarAI />} />
          <Route path="/forja-ai" element={<ForjaAI />} />
          <Route path="/trilha-ai" element={<TrilhaAI />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
