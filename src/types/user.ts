export interface User {
  id: string;
  username: string;
  email: string;
  walletAddress: string;
  avatarUrl?: string;
  createdAt: Date;
  tickets: UserTicket[];
  rafflesWon: string[]; // Array of raffle IDs
}

export interface UserTicket {
  raffleId: string;
  ticketNumbers: number[];
  purchaseDate: Date;
  transactionId: string;
}
