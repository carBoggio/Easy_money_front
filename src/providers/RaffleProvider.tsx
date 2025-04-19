// src/providers/RaffleProvider.tsx
import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { User, Raffle, Prize, PaymentMethod } from "../types";
import {
  fetchMockRaffles,
  fetchMockUser,
  fetchMockPrizes,
  fetchMockPaymentMethods,
} from "../mocks/data";

interface RaffleContextType {
  user: User | null;
  raffles: Raffle[];
  prizes: Prize[];
  paymentMethods: PaymentMethod[];
  loading: boolean;
  error: string | null;
  setUser: (user: User | null) => void;
  logout: () => void;
}

const RaffleContext = createContext<RaffleContextType | undefined>(undefined);

export const useRaffle = () => {
  const context = useContext(RaffleContext);
  if (context === undefined) {
    throw new Error("useRaffle must be used within a RaffleProvider");
  }
  return context;
};

export const RaffleProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [raffles, setRaffles] = useState<Raffle[]>([]);
  const [prizes, setPrizes] = useState<Prize[]>([]);
  const [paymentMethods, setPaymentMethods] = useState<PaymentMethod[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadInitialData = async () => {
      try {
        // In a real application, these would be API calls
        const mockUser = await fetchMockUser();
        const mockRaffles = await fetchMockRaffles();
        const mockPrizes = await fetchMockPrizes();
        const mockPaymentMethods = await fetchMockPaymentMethods();

        setUser(mockUser);
        setRaffles(mockRaffles);
        setPrizes(mockPrizes);
        setPaymentMethods(mockPaymentMethods);
      } catch (err) {
        setError("Failed to load data");
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    loadInitialData();
  }, []);

  const logout = () => {
    setUser(null);
    // In a real app, you would also clear tokens, cookies, etc.
  };

  return (
    <RaffleContext.Provider
      value={{
        user,
        raffles,
        prizes,
        paymentMethods,
        loading,
        error,
        setUser,
        logout,
      }}
    >
      {children}
    </RaffleContext.Provider>
  );
};
