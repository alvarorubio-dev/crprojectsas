import { HeroSection } from "@/components/sections/hero";
import { TrustBar } from "@/components/sections/trust-bar";
import { ServicesGrid } from "@/components/sections/services-grid";
import { PartsShowcase } from "@/components/sections/parts-showcase";
import { Differentiators } from "@/components/sections/differentiators";
import { ProcessSection } from "@/components/sections/process";
import { CoverageSection } from "@/components/sections/coverage";
import { CTAFinal } from "@/components/sections/cta-final";

export default function Home() {
  return (
    <>
      <HeroSection />
      <TrustBar />
      <ServicesGrid />
      <PartsShowcase />
      <Differentiators />
      <ProcessSection />
      <CoverageSection />
      <CTAFinal />
    </>
  );
}
