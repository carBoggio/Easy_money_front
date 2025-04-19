import { Link } from "react-router-dom";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Chip,
  Progress,
  Button,
} from "@heroui/react";
import { RaffleCountdown } from "./RaffleCountdown";
import { Raffle } from "../../types";

interface RaffleCardProps {
  raffle: Raffle;
}

export const RaffleCard: React.FC<RaffleCardProps> = ({ raffle }) => {
  const isActive = raffle.status === "active";
  const isCompleted = raffle.status === "completed";
  const isSoldOut = raffle.soldTickets >= raffle.maxTickets;

  // Calculate percentage of tickets sold
  const soldPercentage = Math.min(
    Math.round((raffle.soldTickets / raffle.maxTickets) * 100),
    100
  );

  // Determine chip color based on raffle status
  const getChipColor = () => {
    if (isActive && !isSoldOut) return "success";
    if (isActive && isSoldOut) return "warning";
    if (isCompleted) return "primary";
    return "danger"; // cancelled
  };

  // Determine chip text based on raffle status
  const getChipText = () => {
    if (isActive && !isSoldOut) return "Active";
    if (isActive && isSoldOut) return "Sold Out";
    if (isCompleted) return "Completed";
    return "Cancelled";
  };

  return (
    <Card isHoverable className="border border-divider">
      <CardHeader className="absolute z-10 top-1 right-1 flex-col items-end p-0 pr-1 pt-1">
        <Chip size="sm" color={getChipColor() as any} variant="flat">
          {getChipText()}
        </Chip>
      </CardHeader>
      <Image
        removeWrapper
        alt={raffle.title}
        className="z-0 w-full h-48 object-cover"
        src={raffle.imageUrl}
      />
      <CardBody className="pb-0">
        <h3 className="font-semibold text-lg">{raffle.title}</h3>
        <p className="text-default-500 line-clamp-2 text-sm mt-1">
          {raffle.description}
        </p>

        <div className="grid grid-cols-2 gap-2 mt-3 mb-2">
          <div>
            <p className="text-xs text-default-500">Price per ticket</p>
            <p className="font-medium">
              {raffle.ticketPrice} {raffle.currency}
            </p>
          </div>
          <div className="text-right">
            <p className="text-xs text-default-500">Tickets sold</p>
            <p className="font-medium">
              {raffle.soldTickets}/{raffle.maxTickets}
            </p>
          </div>
        </div>

        <Progress
          value={soldPercentage}
          color={soldPercentage === 100 ? "warning" : "primary"}
          size="sm"
          className="mt-2"
        />
      </CardBody>
      <CardFooter className="flex justify-between items-center">
        <div>
          <p className="text-xs text-default-500">
            {isActive ? "Ends in" : "Status"}
          </p>
          {isActive ? (
            <RaffleCountdown
              endDate={raffle.endDate}
              className="font-medium text-sm"
            />
          ) : (
            <p className="font-medium text-sm">
              {isCompleted
                ? "Completed"
                : raffle.status === "cancelled"
                  ? "Cancelled"
                  : ""}
            </p>
          )}
        </div>
        <Button
          as={Link}
          to={`/raffle/${raffle.id}`}
          color="primary"
          size="sm"
          variant="flat"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};
