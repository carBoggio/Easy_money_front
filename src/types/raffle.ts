export interface Raffle {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  startDate: Date;
  endDate: Date;
  priceId: string;
  ticketPrice: number;
  currency: string;
  maxTickets: number;
  soldTickets: number;
  status: "active" | "completed" | "cancelled";
  winnerId?: string;
}
