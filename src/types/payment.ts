export interface PaymentMethod {
  id: string;
  name: string;
  type: "cryptocurrency" | "fiat";
  processorName: string;
  icon: string;
  enabled: boolean;
  networkFee?: number;
  minAmount?: number;
  maxAmount?: number;
}

export interface Transaction {
  id: string;
  userId: string;
  raffleId: string;
  amount: number;
  currency: string;
  paymentMethodId: string;
  status: "pending" | "completed" | "failed";
  transactionHash?: string;
  timestamp: Date;
  ticketNumbers: number[];
}
