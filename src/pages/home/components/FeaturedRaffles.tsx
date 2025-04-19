import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Progress,
} from "@heroui/react";
import { useRaffle } from "../../../providers/RaffleProvider";
import { RaffleCountdown } from "../../../components/raffle/RaffleCountdown";

export const FeaturedRaffles: React.FC = () => {
  const { raffles } = useRaffle();

  // Get top 3 active raffles with highest percentage sold
  const featuredRaffles = raffles
    .filter((raffle) => raffle.status === "active")
    .sort((a, b) => b.soldTickets / b.maxTickets - a.soldTickets / a.maxTickets)
    .slice(0, 3);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              Trending Raffles
            </h2>
            <p className="text-foreground/60 mt-1">
              Our most popular crypto raffles right now
            </p>
          </div>
          <Button
            as={Link}
            to="/raffle"
            variant="light"
            color="primary"
            endContent={
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path
                  d="M6.5 3L11.5 8L6.5 13"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            }
          >
            View All Raffles
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {featuredRaffles.length > 0 ? (
            featuredRaffles.map((raffle) => {
              const soldPercentage =
                (raffle.soldTickets / raffle.maxTickets) * 100;
              const isSoldOut = raffle.soldTickets >= raffle.maxTickets;

              return (
                <Card
                  key={raffle.id}
                  className="border border-divider"
                  isHoverable
                >
                  <CardBody className="p-0">
                    <div className="relative">
                      <img
                        src={raffle.imageUrl}
                        alt={raffle.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="absolute top-2 right-2">
                        {isSoldOut ? (
                          <Chip color="warning" variant="flat" size="sm">
                            Sold Out
                          </Chip>
                        ) : (
                          <Chip color="success" variant="flat" size="sm">
                            Active
                          </Chip>
                        )}
                      </div>
                    </div>

                    <div className="p-4">
                      <h3 className="text-lg font-bold mb-1">{raffle.title}</h3>
                      <p className="text-foreground/70 text-sm mb-3 line-clamp-2">
                        {raffle.description}
                      </p>

                      <div className="grid grid-cols-2 gap-2 mb-3">
                        <div>
                          <p className="text-xs text-foreground/60">Price</p>
                          <p className="font-medium">
                            {raffle.ticketPrice} {raffle.currency}
                          </p>
                        </div>
                        <div className="text-right">
                          <p className="text-xs text-foreground/60">Sold</p>
                          <p className="font-medium">
                            {raffle.soldTickets}/{raffle.maxTickets}
                          </p>
                        </div>
                      </div>

                      <Progress
                        value={soldPercentage}
                        color={soldPercentage > 80 ? "warning" : "primary"}
                        size="sm"
                        className="mb-3"
                      />
                    </div>
                  </CardBody>
                  <CardFooter className="justify-between bg-content1/40 border-t border-divider">
                    <div>
                      <p className="text-xs text-foreground/60">Ends in</p>
                      <RaffleCountdown endDate={raffle.endDate} />
                    </div>
                    <Button
                      as={Link}
                      to={`/raffle/${raffle.id}`}
                      color="primary"
                      variant="flat"
                      size="sm"
                    >
                      View Details
                    </Button>
                  </CardFooter>
                </Card>
              );
            })
          ) : (
            <div className="col-span-3 flex justify-center items-center py-12 bg-foreground/5 rounded-xl border border-divider">
              <p className="text-foreground/60">No active raffles available</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
