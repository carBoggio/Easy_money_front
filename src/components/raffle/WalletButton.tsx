// src/components/navbar/WalletButton.tsx
import React, { useState } from "react";
import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
  Spinner,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Image,
} from "@nextui-org/react";
import { WalletIcon } from "../icons";
import { EthereumIcon, BitcoinIcon, USDCIcon } from "../icons";

export const WalletButton: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [connecting, setConnecting] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  const wallets = [
    {
      id: "metamask",
      name: "MetaMask",
      icon: "/images/wallets/metamask.png",
      description: "Connect using browser wallet",
    },
    {
      id: "walletconnect",
      name: "WalletConnect",
      icon: "/images/wallets/walletconnect.png",
      description: "Connect using mobile wallet",
    },
    {
      id: "coinbase",
      name: "Coinbase Wallet",
      icon: "/images/wallets/coinbase.png",
      description: "Connect using Coinbase",
    },
  ];

  const connectWallet = async (walletId: string) => {
    setSelectedWallet(walletId);
    setConnecting(true);

    try {
      // This would be a real wallet connection in a production app
      console.log(`Connecting to ${walletId}...`);

      // Simulate wallet connection delay
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In a real app, you'd set the user in your context here after successful connection

      // Close modal after connection
      onClose();
    } catch (error) {
      console.error("Failed to connect wallet:", error);
    } finally {
      setConnecting(false);
      setSelectedWallet(null);
    }
  };

  return (
    <>
      <Button
        onClick={onOpen}
        color="primary"
        variant="flat"
        startContent={<WalletIcon size={18} />}
      >
        Connect Wallet
      </Button>

      <Modal
        isOpen={isOpen}
        onClose={onClose}
        placement="center"
        backdrop="blur"
        size="lg"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                Connect your wallet
              </ModalHeader>
              <ModalBody>
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  Connect your cryptocurrency wallet to participate in raffles
                  and manage your tickets.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
                  {wallets.map((wallet) => (
                    <Card
                      key={wallet.id}
                      isPressable
                      isHoverable
                      onPress={() => connectWallet(wallet.id)}
                      className={`border ${selectedWallet === wallet.id ? "border-primary" : "border-gray-200 dark:border-gray-700"}`}
                      isDisabled={connecting && selectedWallet !== wallet.id}
                    >
                      <CardBody className="flex flex-row items-center p-3">
                        <div className="w-10 h-10 mr-3 flex-shrink-0">
                          <img
                            src={wallet.icon}
                            alt={wallet.name}
                            className="w-full h-full object-contain"
                            onError={(e) => {
                              // Fallback image if wallet icon fails to load
                              (e.target as HTMLImageElement).src =
                                "/images/wallets/generic-wallet.png";
                            }}
                          />
                        </div>
                        <div>
                          <h4 className="font-medium text-foreground">
                            {wallet.name}
                          </h4>
                          <p className="text-sm text-default-500">
                            {wallet.description}
                          </p>
                        </div>
                        {connecting && selectedWallet === wallet.id && (
                          <Spinner
                            size="sm"
                            color="primary"
                            className="ml-auto"
                          />
                        )}
                      </CardBody>
                    </Card>
                  ))}
                </div>

                <div className="flex items-center mt-4 mb-2">
                  <Divider className="flex-grow" />
                  <span className="px-3 text-sm text-gray-500 dark:text-gray-400">
                    Supported Cryptocurrencies
                  </span>
                  <Divider className="flex-grow" />
                </div>

                <div className="flex justify-center gap-6 mt-2">
                  <div className="flex flex-col items-center">
                    <EthereumIcon size={32} />
                    <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                      Ethereum
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <BitcoinIcon size={32} />
                    <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                      Bitcoin
                    </span>
                  </div>
                  <div className="flex flex-col items-center">
                    <USDCIcon size={32} />
                    <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">
                      USDC
                    </span>
                  </div>
                </div>
              </ModalBody>
              <ModalFooter>
                <Button
                  color="danger"
                  variant="light"
                  onPress={onClose}
                  isDisabled={connecting}
                >
                  Close
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};
