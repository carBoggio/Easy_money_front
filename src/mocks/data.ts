import { User, Raffle, Prize, PaymentMethod } from "@/types";

// Simulate async API calls with promises
export const fetchMockUser = (): Promise<User> => {
  return Promise.resolve({
    id: "user-1",
    username: "cryptoFan",
    email: "user@example.com",
    walletAddress: "0x1234567890abcdef1234567890abcdef12345678",
    avatarUrl: "https://randomuser.me/api/portraits/men/1.jpg",
    createdAt: new Date("2023-01-15"),
    tickets: [
      {
        raffleId: "raffle-1",
        ticketNumbers: [42, 107, 203],
        purchaseDate: new Date("2023-04-12"),
        transactionId: "tx-1234",
      },
      {
        raffleId: "raffle-2",
        ticketNumbers: [5, 18, 77],
        purchaseDate: new Date("2023-05-22"),
        transactionId: "tx-5678",
      },
    ],
    rafflesWon: ["raffle-3"],
  });
};

export const fetchMockRaffles = (): Promise<Raffle[]> => {
  return Promise.resolve([
    {
      id: "raffle-1",
      title: "Bitcoin Mining Rig",
      description:
        "Win a fully configured Bitcoin mining rig with 5 ASIC miners.",
      imageUrl: "/images/mining-rig.jpg",
      startDate: new Date("2023-04-01"),
      endDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days from now
      priceId: "prize-1",
      ticketPrice: 0.01,
      currency: "ETH",
      maxTickets: 1000,
      soldTickets: 456,
      status: "active",
    },
    {
      id: "raffle-2",
      title: "10 ETH Giveaway",
      description: "Win 10 ETH instantly transferred to your wallet!",
      imageUrl: "/images/ethereum.jpg",
      startDate: new Date("2023-05-15"),
      endDate: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000), // 3 days from now
      priceId: "prize-2",
      ticketPrice: 0.005,
      currency: "ETH",
      maxTickets: 2000,
      soldTickets: 1243,
      status: "active",
    },
    {
      id: "raffle-3",
      title: "NFT Collection Bundle",
      description:
        "Win this exclusive bundle of 5 premium NFTs from top artists.",
      imageUrl: "/images/nft-bundle.jpg",
      startDate: new Date("2023-03-10"),
      endDate: new Date("2023-03-25"),
      priceId: "prize-3",
      ticketPrice: 0.02,
      currency: "ETH",
      maxTickets: 500,
      soldTickets: 500,
      status: "completed",
      winnerId: "user-1",
    },
    {
      id: "raffle-4",
      title: "Gaming PC for Crypto Mining",
      description: "High-end gaming PC optimized for cryptocurrency mining.",
      imageUrl: "/images/gaming-pc.jpg",
      startDate: new Date(Date.now() - 15 * 24 * 60 * 60 * 1000),
      endDate: new Date(Date.now() + 15 * 24 * 60 * 60 * 1000),
      priceId: "prize-4",
      ticketPrice: 0.015,
      currency: "ETH",
      maxTickets: 800,
      soldTickets: 312,
      status: "active",
    },
  ]);
};

export const fetchMockPrizes = (): Promise<Prize[]> => {
  return Promise.resolve([
    {
      id: "prize-1",
      name: "Bitcoin Mining Rig",
      description:
        "Professional Bitcoin mining rig with 5 ASIC miners, preconfigured and ready to use.",
      imageUrl: "/images/mining-rig.jpg",
      estimatedValue: 8000,
      currency: "USD",
      type: "physical",
      deliveryMethod: "shipping",
    },
    {
      id: "prize-2",
      name: "10 ETH",
      description: "10 Ethereum transferred directly to your wallet.",
      imageUrl: "/images/ethereum.jpg",
      estimatedValue: 10,
      currency: "ETH",
      type: "cryptocurrency",
      deliveryMethod: "wallet transfer",
    },
    {
      id: "prize-3",
      name: "NFT Collection Bundle",
      description: "Collection of 5 premium NFTs from top artists.",
      imageUrl: "/images/nft-bundle.jpg",
      estimatedValue: 5000,
      currency: "USD",
      type: "digital",
      deliveryMethod: "wallet transfer",
    },
    {
      id: "prize-4",
      name: "Gaming PC for Crypto Mining",
      description:
        "Custom-built PC with RTX 3090 GPU, optimized for both gaming and mining.",
      imageUrl: "/images/gaming-pc.jpg",
      estimatedValue: 3500,
      currency: "USD",
      type: "physical",
      deliveryMethod: "shipping",
    },
  ]);
};

export const fetchMockPaymentMethods = (): Promise<PaymentMethod[]> => {
  return Promise.resolve([
    {
      id: "payment-1",
      name: "Ethereum",
      type: "cryptocurrency",
      processorName: "Web3Provider",
      icon: "/icons/ethereum.svg",
      enabled: true,
      networkFee: 0.001,
    },
    {
      id: "payment-2",
      name: "Bitcoin",
      type: "cryptocurrency",
      processorName: "Web3Provider",
      icon: "/icons/bitcoin.svg",
      enabled: true,
      networkFee: 0.0005,
    },
    {
      id: "payment-3",
      name: "USD Coin",
      type: "cryptocurrency",
      processorName: "Web3Provider",
      icon: "/icons/usdc.svg",
      enabled: true,
      networkFee: 0.0002,
    },
    {
      id: "payment-4",
      name: "Credit Card",
      type: "fiat",
      processorName: "Stripe",
      icon: "/icons/credit-card.svg",
      enabled: false,
      minAmount: 5,
      maxAmount: 1000,
    },
  ]);
};
