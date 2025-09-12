import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import UseCases from "@/components/landing/UseCases";
import Editor from "@/components/landing/Editor";
import Gallery from "@/components/landing/Gallery";
import Pricing from "@/components/landing/Pricing";
import SocialProof from "@/components/landing/SocialProof";
import Integrations from "@/components/landing/Integrations";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";
import Footer from "@/components/landing/Footer";

export default function Home() {
  return (
    <main className="pt-16">
      <Hero />
      <HowItWorks />
      <Gallery />
      <Features />
      <UseCases />
      <Editor />
      <Pricing />
      <SocialProof />
      <Integrations />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
