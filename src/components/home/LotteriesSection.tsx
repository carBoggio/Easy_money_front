import {
  Card,
  CardBody,
  CardFooter,
  Button,
  Chip,
  Avatar,
  Progress,
} from "@heroui/react";

export const LotteriesSection = () => {
  const lotteries = [
    {
      id: "mega-millions-04-2025",
      title: "Mega Millions",
      description:
        "The biggest crypto lottery with weekly draws and massive prizes",
      prize: "45.8 ETH",
      prizeUSD: "$148,700",
      participants: 4872,
      maxParticipants: 10000,
      countdown: "2d 14h 23m",
      image: "https://i.pravatar.cc/150?img=1", // Placeholder image
      badgeText: "Popular",
      badgeColor: "warning",
      progress: 48,
    },
    {
      id: "quick-draw-daily-04-20",
      title: "Quick Draw",
      description: "Daily draws with instant payouts directly to your wallet",
      prize: "5.2 ETH",
      prizeUSD: "$16,900",
      participants: 852,
      maxParticipants: 1000,
      countdown: "4h 12m 36s",
      image: "https://i.pravatar.cc/150?img=2", // Placeholder image
      badgeText: "Ending Soon",
      badgeColor: "danger",
      progress: 85,
    },
    {
      id: "nft-exclusive-spring",
      title: "NFT Exclusive",
      description: "Enter with your NFTs as tickets for exclusive rewards",
      prize: "10 ETH + NFT Collection",
      prizeUSD: "$32,500 + NFTs",
      participants: 235,
      maxParticipants: 500,
      countdown: "5d 8h 45m",
      image: "https://i.pravatar.cc/150?img=3", // Placeholder image
      badgeText: "NFT Holders",
      badgeColor: "secondary",
      progress: 47,
    },
  ];

  return (
    <section className="w-full py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-3">Active Lotteries</h2>
            <p className="text-foreground/60 max-w-xl">
              Participate in our transparent blockchain-verified lotteries with
              guaranteed fair outcomes and instant prizes.
            </p>
          </div>
          <div className="mt-4 md:mt-0">
            <Button color="primary" variant="flat" radius="full">
              View All Lotteries
            </Button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {lotteries.map((lottery) => (
            <Card
              key={lottery.id}
              className="bg-background/60 dark:bg-background/40 backdrop-blur-md border-divider hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300"
            >
              <CardBody className="p-0">
                <div className="relative h-40 overflow-hidden rounded-t-xl">
                  {/* Background gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-r from-primary-600/90 to-secondary-600/90 z-10"></div>

                  {/* Placeholder image (replace with actual lottery images) */}
                  <div
                    className="absolute inset-0 bg-cover bg-center z-0"
                    style={{
                      backgroundImage: `url(${lottery.image})`,
                      filter: "blur(2px)",
                    }}
                  ></div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 z-20 p-6 flex flex-col justify-between">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-bold text-white">
                        {lottery.title}
                      </h3>
                      <Chip
                        color={lottery.badgeColor as any}
                        size="sm"
                        className="bg-background/20 backdrop-blur-sm"
                      >
                        {lottery.badgeText}
                      </Chip>
                    </div>

                    <div>
                      <p className="text-white/70 text-sm mb-1">
                        Current Prize Pool
                      </p>
                      <div className="flex items-end gap-2">
                        <span className="text-2xl font-bold text-white">
                          {lottery.prize}
                        </span>
                        <span className="text-white/70 text-sm">
                          ({lottery.prizeUSD})
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6">
                  <p className="text-foreground/80 text-sm mb-6">
                    {lottery.description}
                  </p>

                  <div className="space-y-4">
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-xs text-foreground/60">
                          Participants
                        </span>
                        <span className="text-xs font-medium">
                          {lottery.participants}/{lottery.maxParticipants}
                        </span>
                      </div>
                      <Progress
                        value={lottery.progress}
                        color="primary"
                        size="sm"
                        className="bg-background dark:bg-background"
                      />
                    </div>

                    <div className="flex justify-between items-center">
                      <div className="flex flex-col">
                        <span className="text-xs text-foreground/60">
                          Time Left
                        </span>
                        <span className="text-sm font-mono font-bold text-primary-500">
                          {lottery.countdown}
                        </span>
                      </div>

                      <Button
                        color="primary"
                        size="sm"
                        radius="full"
                        className="bg-gradient-to-r from-primary-500 to-secondary-500 text-white"
                      >
                        Enter Now
                      </Button>
                    </div>
                  </div>
                </div>
              </CardBody>

              <CardFooter className="border-t border-divider p-4">
                <div className="flex items-center justify-between w-full">
                  <div className="flex -space-x-2">
                    <Avatar
                      size="sm"
                      src="https://i.pravatar.cc/150?u=1"
                      className="border-2 border-background"
                    />
                    <Avatar
                      size="sm"
                      src="https://i.pravatar.cc/150?u=2"
                      className="border-2 border-background"
                    />
                    <Avatar
                      size="sm"
                      src="https://i.pravatar.cc/150?u=3"
                      className="border-2 border-background"
                    />
                    <div className="w-8 h-8 rounded-full bg-background dark:bg-default-100 border-2 border-background flex items-center justify-center text-xs font-medium">
                      +{lottery.participants - 3}
                    </div>
                  </div>

                  <div className="flex gap-1 items-center">
                    <span className="text-xs text-foreground/60">
                      Entry Fee:
                    </span>
                    <span className="text-xs font-medium">0.01 ETH</span>
                  </div>
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
