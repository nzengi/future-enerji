"use client";

import HeroSlider from "@/components/HeroSlider";
import HomeServicesSection from "./HomeServicesSection";
import HomeWhyUsSection from "./HomeWhyUsSection";
import HomeSectorsSection from "./HomeSectorsSection";
import HomeReferencesSection from "./HomeReferencesSection";
import HomeInvestmentSection from "./HomeInvestmentSection";
import HomeContactSection from "./HomeContactSection";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSlider />
      <HomeServicesSection />
      <HomeWhyUsSection />
      <HomeSectorsSection />
      <HomeReferencesSection />
      <HomeInvestmentSection />
      <HomeContactSection />
    </div>
  );
}
