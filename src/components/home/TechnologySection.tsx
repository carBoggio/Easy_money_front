// TechnologySection.tsx
import React from "react";
import { Card, CardBody, Button } from "@heroui/react";
import { LockIcon } from "./icons";

export const TechnologySection = () => {
  const technologies = [
    {
      title: "Smart Contracts",
      description:
        "Our lotteries are powered by audited smart contracts ensuring secure and automatic prize distribution.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M20 16V7a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v9m16 0H4m16 0 1.28 2.55a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45L4 16"></path>
        </svg>
      ),
    },
    {
      title: "Chainlink VRF",
      description:
        "We utilize Chainlink's Verifiable Random Function to ensure provably fair and transparent outcomes.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 4v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9L14 3H6a2 2 0 0 0-2 2Z"></path>
          <path d="M14 3v6h6"></path>
          <path d="m10 18 4-4"></path>
          <path d="m14 18-4-4"></path>
        </svg>
      ),
    },
    {
      title: "Multi-Chain Support",
      description:
        "Participate in lotteries across Ethereum, Polygon, Binance Smart Chain, and more networks.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <rect x="2" y="2" width="20" height="8" rx="2" ry="2"></rect>
          <rect x="2" y="14" width="20" height="8" rx="2" ry="2"></rect>
          <line x1="6" y1="6" x2="6.01" y2="6"></line>
          <line x1="6" y1="18" x2="6.01" y2="18"></line>
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="mb-8">
              <h2 className="text-3xl font-bold mb-4">Futuristic Technology</h2>
              <p className="text-foreground/70 max-w-xl">
                Our platform is built on cutting-edge blockchain technology to
                ensure complete transparency, security, and fairness for all
                participants.
              </p>
            </div>

            <div className="space-y-6">
              {technologies.map((tech, index) => (
                <div key={index} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center text-primary-500 flex-shrink-0">
                    {tech.icon}
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold mb-1">{tech.title}</h3>
                    <p className="text-sm text-foreground/70">
                      {tech.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button
                color="primary"
                size="lg"
                radius="full"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 font-medium px-8"
                startContent={<LockIcon size={18} />}
              >
                Explore Security Features
              </Button>
            </div>
          </div>

          <div className="relative">
            {/* Tech visualization */}
            <div className="w-full h-[500px] relative">
              {/* Background glow */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/20 to-secondary-500/20 blur-3xl rounded-full"></div>

              {/* Hexagonal grid */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-full max-w-md aspect-square">
                  {/* Animated hexagon container */}
                  <div className="absolute inset-0 animate-[spin_30s_linear_infinite]">
                    {/* Hexagon pattern */}
                    <svg
                      viewBox="0 0 100 100"
                      width="100%"
                      height="100%"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <defs>
                        <linearGradient
                          id="hexGridGradient"
                          x1="0%"
                          y1="0%"
                          x2="100%"
                          y2="100%"
                        >
                          <stop
                            offset="0%"
                            stopColor="#3b82f6"
                            stopOpacity="0.3"
                          />
                          <stop
                            offset="100%"
                            stopColor="#38bdf8"
                            stopOpacity="0.3"
                          />
                        </linearGradient>
                      </defs>

                      {/* Center Hexagon */}
                      <polygon
                        points="50,30 67.5,40 67.5,60 50,70 32.5,60 32.5,40"
                        fill="url(#hexGridGradient)"
                        stroke="url(#hexGridGradient)"
                        strokeWidth="0.5"
                        className="opacity-80"
                      />

                      {/* Outer Hexagons */}
                      <polygon
                        points="50,5 67.5,15 67.5,35 50,45 32.5,35 32.5,15"
                        fill="transparent"
                        stroke="#3b82f6"
                        strokeWidth="0.5"
                        className="opacity-60"
                      />
                      <polygon
                        points="50,55 67.5,65 67.5,85 50,95 32.5,85 32.5,65"
                        fill="transparent"
                        stroke="#38bdf8"
                        strokeWidth="0.5"
                        className="opacity-60"
                      />
                      <polygon
                        points="85,30 102.5,40 102.5,60 85,70 67.5,60 67.5,40"
                        fill="transparent"
                        stroke="#3b82f6"
                        strokeWidth="0.5"
                        className="opacity-60"
                      />
                      <polygon
                        points="15,30 32.5,40 32.5,60 15,70 -2.5,60 -2.5,40"
                        fill="transparent"
                        stroke="#38bdf8"
                        strokeWidth="0.5"
                        className="opacity-60"
                      />

                      {/* Connection Lines */}
                      <line
                        x1="50"
                        y1="30"
                        x2="50"
                        y2="5"
                        stroke="#3b82f6"
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                      />
                      <line
                        x1="50"
                        y1="70"
                        x2="50"
                        y2="95"
                        stroke="#38bdf8"
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                      />
                      <line
                        x1="67.5"
                        y1="40"
                        x2="85"
                        y2="30"
                        stroke="#3b82f6"
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                      />
                      <line
                        x1="32.5"
                        y1="40"
                        x2="15"
                        y2="30"
                        stroke="#38bdf8"
                        strokeWidth="0.5"
                        strokeDasharray="2 2"
                      />

                      {/* Central Node */}
                      <circle
                        cx="50"
                        cy="50"
                        r="5"
                        fill="white"
                        className="opacity-80"
                      />

                      {/* Outer Nodes */}
                      <circle
                        cx="50"
                        cy="5"
                        r="2"
                        fill="#3b82f6"
                        className="opacity-60"
                      />
                      <circle
                        cx="50"
                        cy="95"
                        r="2"
                        fill="#38bdf8"
                        className="opacity-60"
                      />
                      <circle
                        cx="85"
                        cy="30"
                        r="2"
                        fill="#3b82f6"
                        className="opacity-60"
                      />
                      <circle
                        cx="15"
                        cy="30"
                        r="2"
                        fill="#38bdf8"
                        className="opacity-60"
                      />
                    </svg>
                  </div>

                  {/* Floating Cards */}
                  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 animate-[bounce_5s_ease-in-out_infinite]">
                    <Card className="w-28 h-20 bg-background/70 backdrop-blur-lg border border-primary-500/20">
                      <CardBody className="p-2 flex flex-col items-center justify-center">
                        <div className="text-xs font-semibold text-primary-500">
                          Smart Contract
                        </div>
                        <div className="text-[8px] text-foreground/70 text-center">
                          Automated Verification
                        </div>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="absolute bottom-1/4 right-1/4 transform translate-x-1/2 translate-y-1/2 animate-[bounce_6s_ease-in-out_infinite_alternate]">
                    <Card className="w-28 h-20 bg-background/70 backdrop-blur-lg border border-secondary-500/20">
                      <CardBody className="p-2 flex flex-col items-center justify-center">
                        <div className="text-xs font-semibold text-secondary-500">
                          Verifiable Random
                        </div>
                        <div className="text-[8px] text-foreground/70 text-center">
                          Chainlink VRF
                        </div>
                      </CardBody>
                    </Card>
                  </div>

                  <div className="absolute top-1/2 right-0 transform translate-x-1/3 animate-[bounce_4s_ease-in-out_infinite_alternate-reverse]">
                    <Card className="w-28 h-20 bg-background/70 backdrop-blur-lg border border-primary-500/20">
                      <CardBody className="p-2 flex flex-col items-center justify-center">
                        <div className="text-xs font-semibold text-primary-500">
                          Multi-Chain
                        </div>
                        <div className="text-[8px] text-foreground/70 text-center">
                          Cross-Chain Compatibility
                        </div>
                      </CardBody>
                    </Card>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
