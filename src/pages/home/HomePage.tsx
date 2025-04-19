import React from "react";
import { useRaffle } from "../../providers/RaffleProvider";

import { HowItWorks } from "./components/HowItWorks";
import { Stats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { FAQ } from "./components/FAQ";
import { UpcomingRaffles } from "./components/UpcomingRaffles";
import { CallToAction } from "./components/CallToAction";

export const HomePage: React.FC = () => {
  const { loading } = useRaffle();

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="flex flex-col items-center gap-2">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
          <p className="text-foreground-500">Loading amazing raffles...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-16 pb-16">
      <HowItWorks />
      <Stats />
      <UpcomingRaffles />
      <Testimonials />
      <FAQ />
      <CallToAction />
    </div>
  );
};
