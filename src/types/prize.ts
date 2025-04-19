export interface Prize {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  estimatedValue: number;
  currency: string;
  type: "physical" | "digital" | "cryptocurrency";
  deliveryMethod?: string;
}
