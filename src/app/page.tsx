import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Features from "@/components/landing/Features";
import UseCases from "@/components/landing/UseCases";
import Editor from "@/components/landing/Editor";
import Gallery from "@/components/landing/Gallery";
import Pricing from "@/components/landing/Pricing";
import SocialProof from "@/components/landing/SocialProof";
import FAQ from "@/components/landing/FAQ";
import FinalCTA from "@/components/landing/FinalCTA";

export default function Home() {
  return (
    <main>
      <Hero />
      <HowItWorks />
      <Features />
      <UseCases />
      <Editor />
      <Gallery />
      <Pricing />
      <SocialProof />
      <FAQ />
      <FinalCTA />
    </main>
  );
}
