import { Layout } from "@/components/layout/Layout";
import { Hero } from "@/components/home/Hero";
import { ProblemsSection } from "@/components/home/ProblemsSection";
import { BenefitsSection } from "@/components/home/BenefitsSection";
import { DifferentialSection } from "@/components/home/DifferentialSection";
import { SolutionsPreview } from "@/components/home/SolutionsPreview";
import { LeadCaptureForm } from "@/components/home/LeadCaptureForm";
import { PortfolioPreview } from "@/components/home/PortfolioPreview";
import { CTASection } from "@/components/home/CTASection";

const Index = () => {
  return (
    <Layout>
      <Hero />
      <LeadCaptureForm />
      <ProblemsSection />
      <SolutionsPreview />
      <DifferentialSection />
      <BenefitsSection />
      <PortfolioPreview />
      <CTASection />
    </Layout>
  );
};

export default Index;
