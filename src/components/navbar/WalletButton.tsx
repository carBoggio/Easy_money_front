import React from "react";
import { Button } from "@heroui/react";
import { WalletIcon } from "../icons";
import { useWalletModal } from "../../hooks/useWalletModal";

export const WalletButton: React.FC = () => {
  const { openWalletModal } = useWalletModal();

  return (
    <Button
      onClick={openWalletModal}
      color="primary"
      variant="flat"
      startContent={<WalletIcon size={18} />}
    >
      Connect Wallet
    </Button>
  );
};
