// HomePage.tsx
import React from "react";
import { FuturisticNavbar } from "./Navbar";
import { HeroSection } from "./HeroSection";
import { TokensSection } from "./TokensSection";
import { LotteriesSection } from "./LotteriesSection";
import { StatsSection } from "./StatsSection";
import { TechnologySection } from "./TechnologySection";
import { FuturisticFooter } from "./FuturisticFooter";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-background/90 text-foreground overflow-hidden">
      <div className="relative z-10">
        <FuturisticNavbar />
        <main>
          <HeroSection />
          <TokensSection />
          <LotteriesSection />
          <StatsSection />
          <TechnologySection />
        </main>
        <FuturisticFooter />
      </div>

      {/* Futuristic background elements */}
      <div className="fixed inset-0 z-0 overflow-hidden opacity-40">
        <div className="absolute w-full h-full bg-grid-pattern-light dark:bg-grid-pattern-dark"></div>
        <div className="absolute -top-[30%] -left-[10%] w-[70%] h-[70%] rounded-full bg-primary-500/10 dark:bg-primary-500/5 blur-[120px]"></div>
        <div className="absolute top-[40%] -right-[10%] w-[60%] h-[60%] rounded-full bg-secondary-600/10 dark:bg-secondary-600/5 blur-[100px]"></div>
        <div className="absolute top-[70%] left-[20%] w-[50%] h-[50%] rounded-full bg-primary-400/10 dark:bg-primary-400/5 blur-[100px]"></div>
      </div>
    </div>
  );
}
