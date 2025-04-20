import { useEffect, useState } from "react";
import { Button, Link, Card } from "@heroui/react";
import { RocketIcon, ChartIcon } from "./icons";

export const HeroSection = () => {
  const [count, setCount] = useState(0);

  // Simulate countdown timer
  useEffect(() => {
    const timer = setInterval(() => {
      setCount((prevCount) => {
        const newCount = prevCount - 1;
        return newCount < 0 ? 86400 : newCount; // Reset to 24 hours (86400 seconds)
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Format seconds to HH:MM:SS
  const formatTime = (seconds: number) => {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    return {
      hours: hrs.toString().padStart(2, "0"),
      minutes: mins.toString().padStart(2, "0"),
      seconds: secs.toString().padStart(2, "0"),
    };
  };

  const timeLeft = formatTime(count);

  return (
    <section className="w-full pt-16 pb-24 md:pt-24 md:pb-36 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="flex flex-col gap-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                  Next-Gen Crypto
                </span>
                <br />
                Lottery Platform
              </h1>
              <p className="text-xl text-foreground/80 max-w-md">
                Participate in blockchain-based lotteries with true randomness,
                transparency, and instant payouts.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                as={Link}
                href="/explore"
                size="lg"
                color="primary"
                className="bg-gradient-to-r from-primary-500 to-secondary-500 font-medium gap-2"
                startContent={<RocketIcon />}
                radius="full"
              >
                Start Winning
              </Button>
              <Button
                as={Link}
                href="/how-it-works"
                size="lg"
                variant="bordered"
                className="font-medium gap-2 border-primary-500 text-primary-500 dark:border-primary-400 dark:text-primary-400"
                startContent={<ChartIcon />}
                radius="full"
              >
                How It Works
              </Button>
            </div>

            <div className="flex gap-8 mt-4">
              <div className="flex flex-col">
                <span className="text-sm text-foreground/60">Total Pool</span>
                <span className="text-2xl font-bold text-primary-500">
                  $1.2M+
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-foreground/60">Users</span>
                <span className="text-2xl font-bold text-primary-500">
                  50K+
                </span>
              </div>
              <div className="flex flex-col">
                <span className="text-sm text-foreground/60">Verification</span>
                <span className="text-2xl font-bold text-primary-500">
                  100%
                </span>
              </div>
            </div>
          </div>

          <div className="relative">
            {/* Animated background elements */}
            <div className="absolute inset-0 z-0">
              <div className="absolute w-full h-full rounded-full bg-primary-500/10 dark:bg-primary-500/5 blur-[80px] animate-pulse"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-60 h-60 rounded-full border border-primary-300/20 dark:border-primary-300/10"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 rounded-full border border-primary-300/20 dark:border-primary-300/10 animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full border border-primary-300/10 dark:border-primary-300/5 animate-[spin_30s_linear_infinite_reverse]"></div>
            </div>

            {/* Main card */}
            <Card className="bg-background/50 dark:bg-background/30 backdrop-blur-lg border-divider shadow-xl z-10 relative">
              <div className="p-6 md:p-8">
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gradient-to-r from-primary-500 to-secondary-500 flex items-center justify-center mb-4">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
                        stroke="white"
                        strokeWidth="2"
                      />
                      <path
                        d="M12 6V12L16 14"
                        stroke="white"
                        strokeWidth="2"
                        strokeLinecap="round"
                      />
                    </svg>
                  </div>

                  <h2 className="text-2xl font-bold mb-2 bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                    Next Draw In
                  </h2>

                  <div className="flex gap-4 justify-center my-6">
                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-background/80 dark:bg-background/60 backdrop-blur-sm rounded-xl border border-divider mb-2">
                        <span className="text-2xl md:text-3xl font-mono font-bold text-primary-500">
                          {timeLeft.hours}
                        </span>
                      </div>
                      <span className="text-xs text-foreground/60">HOURS</span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-background/80 dark:bg-background/60 backdrop-blur-sm rounded-xl border border-divider mb-2">
                        <span className="text-2xl md:text-3xl font-mono font-bold text-primary-500">
                          {timeLeft.minutes}
                        </span>
                      </div>
                      <span className="text-xs text-foreground/60">
                        MINUTES
                      </span>
                    </div>

                    <div className="flex flex-col items-center">
                      <div className="w-16 h-16 md:w-20 md:h-20 flex items-center justify-center bg-background/80 dark:bg-background/60 backdrop-blur-sm rounded-xl border border-divider mb-2">
                        <span className="text-2xl md:text-3xl font-mono font-bold text-primary-500">
                          {timeLeft.seconds}
                        </span>
                      </div>
                      <span className="text-xs text-foreground/60">
                        SECONDS
                      </span>
                    </div>
                  </div>

                  <div className="w-full mt-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-foreground/60">
                        Current Prize Pool
                      </span>
                      <span className="text-sm font-semibold text-primary-400">
                        1,284 Entries
                      </span>
                    </div>
                    <div className="relative h-2 w-full bg-gray-300/10 rounded-full overflow-hidden">
                      <div className="absolute top-0 left-0 h-full w-3/4 bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"></div>
                    </div>
                    <div className="mt-4 flex justify-between">
                      <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-500 to-secondary-500">
                        15.8 ETH
                      </span>
                      <Button
                        color="primary"
                        size="sm"
                        radius="full"
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 font-medium"
                      >
                        Enter Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
