// src/config/site.ts
/**
 * Site configuration - central settings for the entire application
 */

export const siteConfig = {
  // Basic site info
  name: "CryptoRaffle",
  description: "Win crypto prizes in exciting blockchain-based raffles",
  url: "https://cryptoraffle.example.com",
  ogImage: "https://cryptoraffle.example.com/og-image.jpg",

  // Branding
  logo: {
    text: "CryptoRaffle",
    icon: "/logo.svg",
    footerText: "© 2025 CryptoRaffle. All rights reserved.",
  },

  // Contact info
  contact: {
    email: "support@cryptoraffle.example.com",
    twitter: "cryptoraffle",
    telegram: "cryptoraffle",
    discord: "https://discord.gg/cryptoraffle",
  },

  // Navigation links
  mainNav: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Raffles",
      href: "/raffle",
    },
    {
      title: "About",
      href: "/about",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Docs",
      href: "/docs",
    },
    {
      title: "Pricing",
      href: "/pricing",
    },
  ],

  // Footer links (grouped by category)
  footerNav: [
    {
      title: "Platform",
      items: [
        {
          title: "How It Works",
          href: "/how-it-works",
        },
        {
          title: "Pricing",
          href: "/pricing",
        },
        {
          title: "FAQ",
          href: "/faq",
        },
      ],
    },
    {
      title: "Resources",
      items: [
        {
          title: "Blog",
          href: "/blog",
        },
        {
          title: "Documentation",
          href: "/docs",
        },
        {
          title: "Support Center",
          href: "/support",
        },
      ],
    },
    {
      title: "Company",
      items: [
        {
          title: "About Us",
          href: "/about",
        },
        {
          title: "Terms of Service",
          href: "/terms",
        },
        {
          title: "Privacy Policy",
          href: "/privacy",
        },
      ],
    },
  ],

  // Social media links
  socialLinks: [
    {
      name: "Twitter",
      url: "https://twitter.com/cryptoraffle",
      icon: "twitter",
    },
    {
      name: "Discord",
      url: "https://discord.gg/cryptoraffle",
      icon: "discord",
    },
    {
      name: "Telegram",
      url: "https://t.me/cryptoraffle",
      icon: "telegram",
    },
    {
      name: "GitHub",
      url: "https://github.com/cryptoraffle",
      icon: "github",
    },
  ],

  // Feature flags for enabling/disabling features
  features: {
    darkMode: true,
    newsletter: true,
    privacyConsent: true,
    socialLogin: false,
    fiatPayments: false,
  },

  // API endpoints
  api: {
    baseUrl: "https://api.cryptoraffle.example.com",
    raffles: "/api/raffles",
    users: "/api/users",
    tickets: "/api/tickets",
    prizes: "/api/prizes",
    payments: "/api/payments",
  },

  // Supported cryptocurrencies
  supportedCryptocurrencies: [
    {
      name: "Ethereum",
      symbol: "ETH",
      icon: "ethereum",
      enabled: true,
      networkFee: 0.001,
      minAmount: 0.001,
    },
    {
      name: "Bitcoin",
      symbol: "BTC",
      icon: "bitcoin",
      enabled: true,
      networkFee: 0.0005,
      minAmount: 0.0005,
    },
    {
      name: "USD Coin",
      symbol: "USDC",
      icon: "usdc",
      enabled: true,
      networkFee: 0.5,
      minAmount: 5,
    },
  ],

  // Supported wallet providers
  supportedWallets: [
    {
      id: "metamask",
      name: "MetaMask",
      icon: "/images/wallets/metamask.png",
      description: "Connect using browser wallet",
      enabled: true,
    },
    {
      id: "walletconnect",
      name: "WalletConnect",
      icon: "/images/wallets/walletconnect.png",
      description: "Connect using mobile wallet",
      enabled: true,
    },
    {
      id: "coinbase",
      name: "Coinbase Wallet",
      icon: "/images/wallets/coinbase.png",
      description: "Connect using Coinbase",
      enabled: true,
    },
  ],

  // Analytics and tracking (add your tracking IDs here)
  analytics: {
    googleAnalyticsId: "G-XXXXXXXXXX",
    hotjarId: "",
    mixpanelId: "",
  },
};

// Export type for site config for usage in components
export type SiteConfig = typeof siteConfig;
