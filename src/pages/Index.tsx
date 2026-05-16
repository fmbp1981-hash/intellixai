import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { LogoWall } from "@/components/home/LogoWall";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { ROISection } from "@/components/home/ROISection";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { LeadCaptureForm } from "@/components/home/LeadCaptureForm";
import { CTASection } from "@/components/home/CTASection";
import { Helmet } from "react-helmet-async";

const Index = () => {
  return (
    <Layout>
      <Helmet>
        <title>IntelliX.AI | Automação Inteligente para Empresas</title>
        <meta name="description" content="Transforme sua operação com IA. Automação de processos, agentes inteligentes e soluções digitais sob medida para PMEs." />
        <meta property="og:title" content="IntelliX.AI | Automação Inteligente para Empresas" />
        <meta property="og:description" content="Transforme sua operação com IA. Automação de processos, agentes inteligentes e soluções digitais sob medida para PMEs." />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="https://intellixai.lovable.app/" />
      </Helmet>
      <Hero />
      <LogoWall />
      <BenefitsSection />
      <ROISection />
      <SolutionsPreview />
      <PortfolioPreview />
      <LeadCaptureForm />
      <CTASection />
    </Layout>
  );
};

export default Index;
