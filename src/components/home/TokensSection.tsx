import { Card, CardBody, Button, Chip } from "@heroui/react";
import { BitcoinIcon, EthereumIcon } from "./icons";

export const TokensSection = () => {
  const cryptocurrencies = [
    {
      name: "Bitcoin",
      ticker: "BTC",
      icon: <BitcoinIcon className="text-orange-500" />,
      price: 61243.87,
      change: 2.45,
      volume: "12.8M",
      marketCap: "1.2T",
      chart: [40, 35, 50, 45, 60, 55, 65, 60, 80, 75, 65, 75, 70],
      status: "UP",
    },
    {
      name: "Ethereum",
      ticker: "ETH",
      icon: <EthereumIcon className="text-purple-500" />,
      price: 3245.92,
      change: 1.78,
      volume: "8.2M",
      marketCap: "389.5B",
      chart: [30, 50, 40, 60, 50, 65, 55, 70, 60, 80, 70, 90, 85],
      status: "UP",
    },
    {
      name: "CryptoWin",
      ticker: "CWN",
      icon: (
        <div className="w-6 h-6 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
      ),
      price: 0.75,
      change: 5.32,
      volume: "1.5M",
      marketCap: "75M",
      chart: [20, 15, 25, 30, 25, 35, 40, 38, 45, 50, 48, 55, 60],
      status: "UP",
    },
  ];

  return (
    <section className="w-full py-20 bg-background/40 dark:bg-background/20 backdrop-blur-sm border-y border-divider">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-3">Supported Tokens</h2>
          <p className="text-foreground/60 max-w-2xl mx-auto">
            Our platform supports multiple cryptocurrencies for participation in
            lotteries, giving you flexibility and choice.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {cryptocurrencies.map((crypto, index) => (
            <Card
              key={index}
              className="bg-background/60 dark:bg-background/40 backdrop-blur-md border-divider hover:border-primary-500/50 transition-all duration-300"
            >
              <CardBody className="p-6">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-background/80 dark:bg-background/60 flex items-center justify-center">
                      {crypto.icon}
                    </div>
                    <div>
                      <h3 className="font-semibold">{crypto.name}</h3>
                      <p className="text-xs text-foreground/60">
                        {crypto.ticker}
                      </p>
                    </div>
                  </div>
                  <Chip
                    color={crypto.status === "UP" ? "success" : "danger"}
                    variant="flat"
                    radius="sm"
                    size="sm"
                  >
                    {crypto.change > 0 ? "+" : ""}
                    {crypto.change}%
                  </Chip>
                </div>

                <div className="mb-4 h-16 w-full">
                  {/* SVG Chart */}
                  <svg
                    viewBox="0 0 260 80"
                    width="100%"
                    height="100%"
                    className="overflow-visible"
                  >
                    <defs>
                      <linearGradient
                        id={`gradient-${crypto.ticker}`}
                        x1="0"
                        y1="0"
                        x2="0"
                        y2="1"
                      >
                        <stop
                          offset="0%"
                          stopColor={
                            crypto.status === "UP"
                              ? "rgb(34, 197, 94)"
                              : "rgb(239, 68, 68)"
                          }
                          stopOpacity="0.3"
                        />
                        <stop
                          offset="100%"
                          stopColor={
                            crypto.status === "UP"
                              ? "rgb(34, 197, 94)"
                              : "rgb(239, 68, 68)"
                          }
                          stopOpacity="0"
                        />
                      </linearGradient>
                    </defs>

                    {/* Chart Path */}
                    <path
                      d={`M0,${80 - crypto.chart[0]} ${crypto.chart
                        .map((point, i) => {
                          const x = i * (260 / (crypto.chart.length - 1));
                          const y = 80 - point;
                          return `L${x},${y}`;
                        })
                        .join(" ")}`}
                      fill="none"
                      stroke={
                        crypto.status === "UP"
                          ? "rgb(34, 197, 94)"
                          : "rgb(239, 68, 68)"
                      }
                      strokeWidth="2"
                      strokeLinecap="round"
                    />

                    {/* Gradient Fill */}
                    <path
                      d={`M0,${80 - crypto.chart[0]} ${crypto.chart
                        .map((point, i) => {
                          const x = i * (260 / (crypto.chart.length - 1));
                          const y = 80 - point;
                          return `L${x},${y}`;
                        })
                        .join(" ")} L260,80 L0,80 Z`}
                      fill={`url(#gradient-${crypto.ticker})`}
                    />
                  </svg>
                </div>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-foreground/60">Price</p>
                    <p className="text-xl font-mono font-bold">
                      ${crypto.price.toLocaleString()}
                    </p>
                  </div>
                  <Button
                    color="primary"
                    radius="full"
                    size="sm"
                    variant={crypto.ticker === "CWN" ? "solid" : "bordered"}
                    className={
                      crypto.ticker === "CWN"
                        ? "bg-gradient-to-r from-primary-500 to-secondary-500"
                        : ""
                    }
                  >
                    {crypto.ticker === "CWN" ? "Use Token" : "Select"}
                  </Button>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button color="primary" variant="flat" radius="full" className="px-8">
            View All Supported Tokens
          </Button>
        </div>
      </div>
    </section>
  );
};
