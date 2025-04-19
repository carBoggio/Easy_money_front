import React from "react";
import { Accordion, AccordionItem } from "@heroui/react";

export const FAQ: React.FC = () => {
  const faqItems = [
    {
      question: "How do crypto raffles work?",
      answer:
        "Our crypto raffles operate on blockchain technology to ensure complete transparency. You purchase tickets using cryptocurrency, and each ticket represents an entry into the draw. When the raffle ends (either by time expiration or all tickets being sold), a verifiably random winner is selected, and the prize is automatically transferred to their wallet.",
    },
    {
      question: "What cryptocurrencies can I use to buy tickets?",
      answer:
        "We currently support Bitcoin (BTC), Ethereum (ETH), USD Coin (USDC), and several other popular cryptocurrencies. You can see the full list of supported cryptocurrencies when connecting your wallet. We're constantly adding support for more digital currencies.",
    },
    {
      question: "How are winners selected?",
      answer:
        "Winners are selected using a provably fair random algorithm that leverages blockchain technology to ensure transparency. The selection process is verifiable by anyone, meaning neither we nor anyone else can manipulate the results. The smart contract automatically selects a winning ticket number from all purchased tickets.",
    },
    {
      question: "How will I receive my prize if I win?",
      answer:
        "For cryptocurrency prizes, the winnings are automatically transferred to your connected wallet immediately after the draw. For physical prizes, we'll contact you via the email associated with your account to arrange shipping. For digital assets like NFTs, they'll be transferred directly to your wallet.",
    },
    {
      question: "Are there any fees for participating?",
      answer:
        "The only cost is the ticket price itself. There are standard network transaction fees that apply when transferring cryptocurrency, but we don't charge any additional platform fees on top of the ticket price. What you see is what you pay.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
          <p className="text-foreground/60 mt-2 max-w-2xl mx-auto">
            Find answers to common questions about our crypto raffles
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion>
            {faqItems.map((item, index) => (
              <AccordionItem
                key={index}
                title={item.question}
                aria-label={item.question}
              >
                <div className="text-foreground/70 pb-4">{item.answer}</div>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};
