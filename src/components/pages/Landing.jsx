import React from "react";
import LandingNavbar from "@/components/landing/LandingNavbar";
import LandingFooter from "@/components/landing/LandingFooter";
import HeroSection from "@/components/landing/HeroSection";
import TrustSection from "@/components/landing/TrustSection";
import FeaturesSection from "@/components/landing/FeaturesSection";
import SecurityArchitecture from "@/components/landing/SecurityArchitecture";
import DashboardPreview from "@/components/landing/DashboardPreview";

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-ci-bg text-white">
      <LandingNavbar />
      <main>
        <HeroSection />
        <TrustSection />
        <FeaturesSection />
        <SecurityArchitecture />
        <DashboardPreview />
      </main>
      <LandingFooter />
    </div>
  );
}