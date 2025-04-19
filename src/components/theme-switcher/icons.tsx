// src/components/theme-switcher/icons.tsx
import React from "react";

interface IconProps {
  size?: number;
  width?: number;
  height?: number;
  strokeWidth?: number;
  className?: string;
}

export const SunIcon: React.FC<IconProps> = ({
  size = 24,
  width,
  height,
  strokeWidth = 1.5,
  className,
}) => {
  const hw = size || width || height || 24;

  return (
    <svg
      width={width || hw}
      height={height || hw}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 3V4M12 20V21M3 12H4M20 12H21M18.364 5.63604L17.6569 6.34315M6.34315 17.6569L5.63604 18.364M18.364 18.364L17.6569 17.6569M6.34315 6.34315L5.63604 5.63604"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export const MoonIcon: React.FC<IconProps> = ({
  size = 24,
  width,
  height,
  strokeWidth = 1.5,
  className,
}) => {
  const hw = size || width || height || 24;

  return (
    <svg
      width={width || hw}
      height={height || hw}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      <path
        d="M9 6C9 10.9706 13.0294 15 18 15C18.9093 15 19.787 14.8655 20.6113 14.6147C19.45 17.4484 16.5563 19.5 13.1259 19.5C8.44233 19.5 4.64648 15.7041 4.64648 11.0205C4.64648 7.5901 6.69813 4.69637 9.5318 3.53516C9.28102 4.3595 9.14648 5.2372 9.14648 6.14648"
        stroke="currentColor"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};
