// StatsSection.tsx
import React from "react";
import { Card, CardBody, Chip } from "@heroui/react";
import { ChartIcon } from "./Icons";

export const StatsSection = () => {
  return (
    <section className="w-full py-20 bg-background/40 dark:bg-background/20 backdrop-blur-sm border-y border-divider">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-3">Platform Statistics</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Real-time metrics showing the growth and success of our crypto
            lottery ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card
              key={index}
              className="bg-background/60 dark:bg-background/40 backdrop-blur-md border-divider hover:shadow-lg hover:shadow-primary-500/10 transition-all duration-300"
            >
              <CardBody className="p-6">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-sm text-foreground/60 mb-1">
                      {stat.title}
                    </p>
                    <h3 className="text-2xl font-bold">{stat.value}</h3>
                  </div>
                  <Chip
                    color={stat.trend === "up" ? "success" : "danger"}
                    variant="flat"
                    size="sm"
                    className="bg-transparent backdrop-blur-sm"
                  >
                    {stat.change}
                  </Chip>
                </div>

                {/* Mini Spark Chart */}
                <div className="h-12 w-full">
                  <svg
                    viewBox="0 0 120 40"
                    width="100%"
                    height="100%"
                    className="overflow-visible"
                  >
                    <defs>
                      <linearGradient
                        id={`sparkline-gradient-${index}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor="#3b82f6"
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor="#3b82f6"
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    {/* Chart Line */}
                    <path
                      d={`M0,${40 - stat.chartData[0] * 0.7} ${stat.chartData
                        .map((point, i) => {
                          const x = i * (120 / (stat.chartData.length - 1));
                          const y = 40 - point * 0.7;
                          return `L${x},${y}`;
                        })
                        .join(" ")}`}
                      fill="none"
                      stroke="url(#gradient-stroke)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* Gradient Fill */}
                    <path
                      d={`M0,${40 - stat.chartData[0] * 0.7} ${stat.chartData
                        .map((point, i) => {
                          const x = i * (120 / (stat.chartData.length - 1));
                          const y = 40 - point * 0.7;
                          return `L${x},${y}`;
                        })
                        .join(" ")} L120,40 L0,40 Z`}
                      fill={`url(#sparkline-gradient-${index})`}
                    />

                    {/* Highlight Last Point */}
                    <circle
                      cx={120}
                      cy={40 - stat.chartData[stat.chartData.length - 1] * 0.7}
                      r="3"
                      fill="#3b82f6"
                    />
                  </svg>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        {/* Animated numbers banner */}
        <div className="mt-20 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-1">
          <div className="bg-background/5 backdrop-blur-md rounded-xl px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-8 text-white">
            <div className="text-center md:text-left">
              <h3 className="text-2xl md:text-3xl font-bold mb-2">
                Join the Future of Crypto Lottery
              </h3>
              <p className="text-white/80">
                Our platform is growing rapidly with new users and features
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">250+</div>
                <div className="text-sm text-white/80">Daily Winners</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">99.8%</div>
                <div className="text-sm text-white/80">Platform Uptime</div>
              </div>
              <div className="flex flex-col items-center">
                <div className="text-3xl md:text-4xl font-bold mb-1">12</div>
                <div className="text-sm text-white/80">Blockchain Networks</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
const stats = [
  {
    title: "Total Prizes Awarded",
    value: "$5.2M+",
    change: "+12.5%",
    trend: "up",
    chartData: [25, 30, 35, 40, 45, 50, 48, 52, 55, 60, 58, 62],
  },
  {
    title: "Active Users",
    value: "68.4K",
    change: "+8.2%",
    trend: "up",
    chartData: [30, 28, 33, 35, 40, 38, 42, 45, 48, 50, 52, 58],
  },
  {
    title: "Transaction Volume",
    value: "$980K",
    change: "+24.8%",
    trend: "up",
    chartData: [20, 22, 25, 30, 28, 35, 40, 38, 45, 50, 55, 60],
  },
  {
    title: "Average Jackpot",
    value: "$127K",
    change: "+15.3%",
    trend: "up",
    chartData: [15, 20, 25, 22, 28, 30, 32, 35, 38, 40, 45, 48],
  },
];
