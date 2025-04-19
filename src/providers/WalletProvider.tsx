import React, { createContext, useContext, useState, ReactNode } from 'react';
import { 
  Modal, 
  ModalContent, 
  ModalHeader, 
  ModalBody, 
  ModalFooter,
  Button,
  Card,
  CardBody,
  Spinner,
  Divider
} from '@heroui/react';
import { EthereumIcon, BitcoinIcon, USDCIcon } from '../components/icons';
import { siteConfig } from '../config/site';
import { useRaffle } from './RaffleProvider';
import { User } from '../types';

// Define the context types
interface WalletContextType {
  isConnecting: boolean;
  isConnected: boolean;
  walletAddress: string | null;
  connectWallet: (providerName: string) => Promise<void>;
  disconnectWallet: () => void;
  openWalletModal: () => void;
  closeWalletModal: () => void;
}

// Create the context with default values
const WalletContext = createContext<WalletContextType>({
  isConnecting: false,
  isConnected: false,
  walletAddress: null,
  connectWallet: async () => {},
  disconnectWallet: () => {},
  openWalletModal: () => {},
  closeWalletModal: () => {}
});

// Custom hook to use the wallet context
export const useWallet = () => useContext(WalletContext);

interface WalletProviderProps {
  children: ReactNode;
}

export const WalletProvider: React.FC<WalletProviderProps> = ({ children }) => {
  const [isConnecting, setIsConnecting] = useState(false);
  const [walletAddress, setWalletAddress] = useState<string | null>(null);
  const [isConnected, setIsConnected] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProvider, setSelectedProvider] = useState<string | null>(null);
  
  const { setUser } = useRaffle();

  const openWalletModal = () => {
    setIsModalOpen(true);
  };

  const closeWalletModal = () => {
    setIsModalOpen(false);
  };

  const connectWallet = async (providerName: string) => {
    setSelectedProvider(providerName);
    setIsConnecting(true);
    
    try {
      // Simulate wallet connection delay
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Simulate successful connection
      const mockAddress = '0x1234567890abcdef1234567890abcdef12345678';
      setWalletAddress(mockAddress);
      setIsConnected(true);
      
      // In a real implementation, we would use a wallet library like ethers.js
      // to connect to the actual provider
      console.log(`Connected to wallet using ${providerName}`);
      
      // Create a mock user
      const mockUser: User = {
        id: 'user-1',
        username: 'cryptoFan',
        email: 'user@example.com',
        walletAddress: mockAddress,
        avatarUrl: 'https://i.pravatar.cc/150?u=cryptoFan',
        createdAt: new Date('2023-01-15'),
        tickets: [
          {
            raffleId: 'raffle-1',
            ticketNumbers: [42, 107, 203],
            purchaseDate: new Date('2023-04-12'),
            transactionId: 'tx-1234'
          },
          {
            raffleId: 'raffle-2',
            ticketNumbers: [5, 18, 77],
            purchaseDate: new Date('2023-05-22'),
            transactionId: 'tx-5678'
          }
        ],
        rafflesWon: ['raffle-3']
      };
      
      // Update the user in the raffle context
      setUser(mockUser);
      
      // Close the modal
      closeWalletModal();
    } catch (error) {
      console.error('Failed to connect wallet:', error);
    } finally {
      setIsConnecting(false);
      setSelectedProvider(null);
    }
  };

  const disconnectWallet = () => {
    setIsConnected(false);
    setWalletAddress(null);
    // Also logout from the raffle context
    setUser(null);
  };

  return (
    <WalletContext.Provider 
      value={{
        isConnecting,
        isConnected,
        walletAddress,
        connectWallet,
        disconnectWallet,
        openWalletModal,
        closeWalletModal
      }}
    >
      {children}
      
      {/* Wallet Connection Modal */}
      <Modal
        isOpen={isModalOpen}
        onClose={closeWalletModal}
        placement="center"
        backdrop="blur"
        size="lg"
      >
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">
            Connect your wallet
          </ModalHeader>
          <ModalBody>
            <p className="text-gray-500 dark:text-gray-400 mb-2">
              Connect your cryptocurrency wallet to participate in raffles and manage your tickets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mt-2">
              {siteConfig.supportedWallets.filter(wallet => wallet.enabled).map((wallet) => (
                <Card 
                  key={wallet.id}
                  isPressable
                  isHoverable
                  onPress={() => connectWallet(wallet.id)}
                  className={`border ${selectedProvider === wallet.id ? 'border-primary' : 'border-divider'}`}
                  isDisabled={isConnecting && selectedProvider !== wallet.id}
                >
                  <CardBody className="flex flex-row items-center p-3">
                    <div className="w-10 h-10 mr-3 flex-shrink-0">
                      <img 
                        src={wallet.icon} 
                        alt={wallet.name} 
                        className="w-full h-full object-contain"
                        onError={(e) => {
                          // Fallback image if wallet icon fails to load
                          (e.target as HTMLImageElement).src = '/images/wallets/generic-wallet.png';
                        }}
                      />
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">{wallet.name}</h4>
                      <p className="text-sm text-default-500">{wallet.description}</p>
                    </div>
                    {isConnecting && selectedProvider === wallet.id && (
                      <Spinner size="sm" color="primary" className="ml-auto" />
                    )}
                  </CardBody>
                </Card>
              ))}
            </div>

            <div className="flex items-center mt-4 mb-2">
              <Divider className="flex-grow" />
              <span className="px-3 text-sm text-gray-500 dark:text-gray-400">Supported Cryptocurrencies</span>
              <Divider className="flex-grow" />
            </div>

            <div className="flex justify-center gap-6 mt-2">
              <div className="flex flex-col items-center">
                <EthereumIcon size={32} />
                <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Ethereum</span>
              </div>
              <div className="flex flex-col items-center">
                <BitcoinIcon size={32} />
                <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">Bitcoin</span>
              </div>
              <div className="flex flex-col items-center">
                <USDCIcon size={32} />
                <span className="text-xs mt-1 text-gray-600 dark:text-gray-400">USDC</span>
              </div>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button 
              color="danger" 
              variant="light" 
              onPress={closeWalletModal}
              isDisabled={isConnecting}
            >
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </WalletContext.Provider>
  );
};