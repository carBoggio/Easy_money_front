import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Divider,
} from "@heroui/react";
import { useRaffle } from "../../../providers";
import { RaffleCountdown } from "../../../components/raffle/RaffleCountdown";

export const UpcomingRaffles: React.FC = () => {
  const { raffles } = useRaffle();

  // Get future raffles (mock - in a real app these would have a future start date)
  // For now, let's pretend the last 2 raffles are upcoming
  const upcomingRaffles = raffles.slice(-2);

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground">
              Upcoming Raffles
            </h2>
            <p className="text-foreground/60 mt-1">
              Get ready for these exciting prizes
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {upcomingRaffles.map((raffle, index) => (
            <Card key={index} className="border border-divider" isHoverable>
              <CardBody className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3">
                  <div className="relative">
                    <img
                      src={raffle.imageUrl}
                      alt={raffle.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2">
                      <Chip color="secondary" variant="flat" size="sm">
                        Coming Soon
                      </Chip>
                    </div>
                  </div>

                  <div className="md:col-span-2 p-5">
                    <h3 className="text-xl font-bold mb-2">{raffle.title}</h3>
                    <p className="text-foreground/70 text-sm mb-4">
                      {raffle.description}
                    </p>

                    <Divider className="my-3" />

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-xs text-foreground/60">
                          Ticket Price
                        </p>
                        <p className="font-medium">
                          {raffle.ticketPrice} {raffle.currency}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60">
                          Total Tickets
                        </p>
                        <p className="font-medium">{raffle.maxTickets}</p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60">
                          Launch Date
                        </p>
                        <p className="font-medium">
                          {new Date(raffle.startDate).toLocaleDateString(
                            "en-US",
                            {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            }
                          )}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-foreground/60">
                          Estimated Value
                        </p>
                        <p className="font-medium">$3,000 USD</p>
                      </div>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Button
                        as={Link}
                        to={`/raffle/${raffle.id}`}
                        color="secondary"
                        variant="flat"
                        size="sm"
                      >
                        Get Notified
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
