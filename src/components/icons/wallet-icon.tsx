import React from "react";

interface WalletIconProps {
  size?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  fill?: string;
  className?: string;
}

export const WalletIcon: React.FC<WalletIconProps> = ({
  size = 24,
  width,
  height,
  strokeWidth = 1.5,
  fill = "none",
  className,
}) => {
  const hw = size || width || height || 24;

  return (
    <svg
      width={width || hw}
      height={height || hw}
      viewBox="0 0 24 24"
      fill={fill}
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <rect
        x="3"
        y="6"
        width="18"
        height="12"
        rx="2"
        stroke="currentColor"
        strokeWidth={strokeWidth}
      />
      <path
        d="M3 10H21M7 15H8M12 15H13"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
