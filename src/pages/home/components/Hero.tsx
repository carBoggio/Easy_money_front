import React from "react";
import { Link } from "react-router-dom";
import { Button, Card, CardBody, Chip, Progress } from "@heroui/react";
import { useRaffle } from "../../../providers/RaffleProvider";
import { RaffleCountdown } from "../../../components/raffle/RaffleCountdown";

export const Hero: React.FC = () => {
  const { raffles } = useRaffle();

  // Get the featured raffle with the highest percentage of tickets sold
  const featuredRaffle = raffles
    .filter((raffle) => raffle.status === "active")
    .sort(
      (a, b) => b.soldTickets / b.maxTickets - a.soldTickets / a.maxTickets
    )[0];

  return (
    <section className="relative py-12 md:py-20 overflow-hidden">
      {/* Background with gradient and blur effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5 dark:from-background dark:via-background dark:to-primary/10 -z-10"></div>

      {/* Decorative circles */}
      <div className="absolute top-20 right-0 w-72 h-72 bg-primary/20 rounded-full opacity-20 blur-3xl -z-10"></div>
      <div className="absolute -bottom-20 left-20 w-96 h-96 bg-secondary/20 rounded-full opacity-20 blur-3xl -z-10"></div>

      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
              Win{" "}
              <span className="text-primary bg-clip-text">Crypto Prizes</span>{" "}
              Every Day
            </h1>
            <p className="text-xl text-foreground/80 max-w-lg">
              Join thousands of crypto enthusiasts in our transparent,
              blockchain-based raffles with amazing prizes.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                as={Link}
                to="/raffle"
                color="primary"
                size="lg"
                radius="full"
              >
                Browse Raffles
              </Button>
              <Button
                as={Link}
                to="/about"
                variant="bordered"
                size="lg"
                radius="full"
              >
                Learn More
              </Button>
            </div>

            <div className="flex items-center text-sm text-foreground/70">
              <div className="flex -space-x-2 mr-2">
                <div className="w-7 h-7 rounded-full bg-primary-200 flex items-center justify-center text-xs font-semibold text-primary-600">
                  BTC
                </div>
                <div className="w-7 h-7 rounded-full bg-secondary-200 flex items-center justify-center text-xs font-semibold text-secondary-600">
                  ETH
                </div>
                <div className="w-7 h-7 rounded-full bg-success-200 flex items-center justify-center text-xs font-semibold text-success-600">
                  USD
                </div>
              </div>
              Multiple cryptocurrencies supported
            </div>
          </div>

          {featuredRaffle ? (
            <div className="relative">
              <Card className="border border-divider shadow-xl" isHoverable>
                <CardBody className="p-0">
                  <div className="relative">
                    <img
                      src={featuredRaffle.imageUrl}
                      alt={featuredRaffle.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Chip color="success" variant="flat" size="sm">
                        Featured Raffle
                      </Chip>
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="text-xl font-bold mb-2">
                      {featuredRaffle.title}
                    </h3>
                    <p className="text-foreground/70 text-sm mb-4 line-clamp-2">
                      {featuredRaffle.description}
                    </p>

                    <div className="grid grid-cols-2 gap-2 mb-4">
                      <div>
                        <p className="text-xs text-foreground/60">
                          Price per ticket
                        </p>
                        <p className="font-medium">
                          {featuredRaffle.ticketPrice} {featuredRaffle.currency}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-foreground/60">
                          Tickets remaining
                        </p>
                        <p className="font-medium">
                          {featuredRaffle.maxTickets -
                            featuredRaffle.soldTickets}{" "}
                          of {featuredRaffle.maxTickets}
                        </p>
                      </div>
                    </div>

                    <Progress
                      value={
                        (featuredRaffle.soldTickets /
                          featuredRaffle.maxTickets) *
                        100
                      }
                      color="primary"
                      className="mb-4"
                      size="sm"
                    />

                    <div className="flex justify-between items-center">
                      <div>
                        <p className="text-xs text-foreground/60">Ends in</p>
                        <RaffleCountdown endDate={featuredRaffle.endDate} />
                      </div>
                      <Button
                        as={Link}
                        to={`/raffle/${featuredRaffle.id}`}
                        color="primary"
                        size="sm"
                      >
                        View Raffle
                      </Button>
                    </div>
                  </div>
                </CardBody>
              </Card>

              {/* Decorative elements behind the card */}
              <div className="absolute -z-10 -right-4 -bottom-4 w-full h-full border-2 border-primary rounded-xl"></div>
              <div className="absolute -z-10 right-4 bottom-4 w-8 h-8 bg-primary rounded-full"></div>
            </div>
          ) : (
            <div className="flex justify-center items-center h-96 bg-foreground/5 rounded-xl border border-divider">
              <p className="text-foreground/60">No active raffles available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
