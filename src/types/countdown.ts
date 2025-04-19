export interface RaffleCountdownProps {
  endDate: Date | string;
  onEnd?: () => void;
  showCard?: boolean;
  showProgress?: boolean;
  className?: string;
  size?: "sm" | "md" | "lg";
  variant?: "default" | "minimal" | "compact";
}

export interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  total: number;
  expired: boolean;
}
