import React from "react";
import { Card, CardBody } from "@heroui/react";

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <rect
            x="3"
            y="6"
            width="18"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M3 10H21M7 15H8M12 15H13"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Connect Wallet",
      description:
        "Connect your crypto wallet securely to our platform. We support multiple popular wallets.",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <path
            d="M7 21C4.79086 21 3 19.2091 3 17V7C3 4.79086 4.79086 3 7 3H17C19.2091 3 21 4.79086 21 7V17C21 19.2091 19.2091 21 17 21H7Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path
            d="M16 11H8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M16 7H8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M11 15H8"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      ),
      title: "Choose Raffle & Buy Tickets",
      description:
        "Browse available raffles and purchase tickets with cryptocurrency. Each ticket is a chance to win.",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2" />
          <path
            d="M12 6V12L15 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Wait for Drawing",
      description:
        "Drawings are conducted automatically when the timer ends or all tickets are sold. All results are transparent.",
    },
    {
      icon: (
        <svg
          width="40"
          height="40"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-primary"
        >
          <path
            d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
      title: "Claim Your Prize",
      description:
        "If you win, the prize is automatically transferred to your connected wallet. No manual claims needed!",
    },
  ];

  return (
    <section className="py-16 bg-content1/20 dark:bg-content1/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">How It Works</h2>
          <p className="text-foreground/60 mt-2 max-w-2xl mx-auto">
            Participate in our crypto raffles in just a few simple steps
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((step, index) => (
            <Card key={index} className="border border-divider">
              <CardBody className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 bg-primary/10 dark:bg-primary/20 rounded-xl">
                    {step.icon}
                  </div>
                </div>
                <div className="relative mb-4">
                  <h3 className="text-xl font-bold text-foreground">
                    {step.title}
                  </h3>

                  {/* Step number indicator */}
                  <div className="absolute -top-10 -right-3 w-8 h-8 rounded-full bg-primary/10 dark:bg-primary/20 flex items-center justify-center text-primary font-bold">
                    {index + 1}
                  </div>
                </div>
                <p className="text-foreground/70">{step.description}</p>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Connecting arrows between cards on desktop */}
        <div className="hidden lg:block">
          <div className="absolute left-1/4 top-1/2 w-16 h-1 bg-primary transform -translate-x-1/2 -translate-y-1/2 rotate-45"></div>
          <div className="absolute left-1/2 top-1/2 w-16 h-1 bg-primary transform -translate-x-1/2 -translate-y-1/2"></div>
          <div className="absolute left-3/4 top-1/2 w-16 h-1 bg-primary transform -translate-x-1/2 -translate-y-1/2 -rotate-45"></div>
        </div>
      </div>
    </section>
  );
};
