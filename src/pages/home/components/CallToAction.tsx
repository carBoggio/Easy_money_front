import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@heroui/react";
import { WalletIcon } from "../../../components/icons";
import { useWalletModal } from "../../../hooks/useWalletModal";

export const CallToAction: React.FC = () => {
  const { openWalletModal } = useWalletModal();

  return (
    <section className="py-16 relative overflow-hidden">
      {/* Background with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary opacity-90 dark:opacity-80 -z-10"></div>

      {/* Pattern overlay */}
      <div className="absolute inset-0 opacity-10 -z-10"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Win Crypto Prizes?
          </h2>
          <p className="text-xl mb-8 text-white/80">
            Join thousands of crypto enthusiasts already winning on our
            platform. Connect your wallet now and start your winning journey!
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button
              size="lg"
              radius="full"
              variant="solid"
              color="default"
              onClick={openWalletModal}
              startContent={<WalletIcon />}
              className="bg-white text-primary hover:bg-white/90"
            >
              Connect Wallet
            </Button>

            <Button
              as={Link}
              to="/raffle"
              size="lg"
              radius="full"
              variant="bordered"
              className="text-white border-white/50 hover:bg-white/10"
            >
              Browse Raffles
            </Button>
          </div>

          <p className="mt-6 text-sm text-white/70">
            Provably fair. Transparently executed. Instantly delivered.
          </p>
        </div>
      </div>
    </section>
  );
};
