// src/components/theme-switcher/ThemeSelector.tsx
import React from "react";
import { useTheme } from "@heroui/use-theme";
import {
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Button,
} from "@heroui/react";
import { SunIcon, MoonIcon } from "./icons";

// Add more icons for additional themes
const BitcoinIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12Z"
      fill="#F7931A"
    />
    <path
      d="M16 10.1755C16.1708 8.95736 15.2637 8.29596 14.0265 7.86436L14.4375 6.01363L13.3533 5.75L12.9529 7.55396C12.6851 7.48863 12.4108 7.42863 12.1379 7.36946L12.5404 5.55946L11.4575 5.29583L11.0462 7.14596C10.8237 7.09696 10.6054 7.04796 10.3925 6.99646L10.3937 6.9903L9.14416 6.66863L8.8725 7.8403C8.8725 7.8403 9.66416 8.02113 9.645 8.0308C9.9354 8.09813 9.97791 8.28363 9.97208 8.43113L9.50291 10.5453C9.52958 10.5522 9.56333 10.562 9.59916 10.5778L9.50208 10.5548L8.85541 13.5145C8.82625 13.6028 8.75125 13.7357 8.55166 13.6915C8.56375 13.7053 7.78083 13.499 7.78083 13.499L7.33333 14.7495L8.51208 15.0533C8.75791 15.1133 8.99875 15.1757 9.23541 15.2345L8.82 17.107L9.90291 17.3707L10.314 15.5199C10.592 15.5957 10.8621 15.6653 11.1265 15.7307L10.7168 17.5757L11.8009 17.8294L12.2164 15.9603C13.9296 16.287 15.2076 16.1503 15.7669 14.5724C16.214 13.3041 15.7991 12.5833 14.9296 12.1245C15.5404 11.9824 16.0076 11.5449 16.0009 10.1766L16 10.1755ZM13.7412 13.8328C13.419 15.1016 11.3947 14.4528 10.7199 14.2832L11.2747 12.3433C11.9496 12.5137 14.0768 12.5124 13.7412 13.8328ZM14.0634 10.1587C13.7669 11.3162 12.0749 10.7566 11.512 10.6145L12.0149 8.85471C12.5778 8.99696 14.3711 8.95863 14.0634 10.1578V10.1587Z"
      fill="white"
    />
  </svg>
);

const PurpleIcon: React.FC<{ className?: string }> = ({ className }) => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="12" cy="12" r="10" fill="#9353D3" />
    <path
      d="M15.5 12C15.5 13.933 13.933 15.5 12 15.5C10.067 15.5 8.5 13.933 8.5 12C8.5 10.067 10.067 8.5 12 8.5C13.933 8.5 15.5 10.067 15.5 12Z"
      stroke="white"
      strokeWidth="1.5"
    />
  </svg>
);

export const ThemeSelector: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const themes = ["light", "dark", "purple-dark", "crypto"];

  const getThemeIcon = (themeName: string) => {
    switch (themeName) {
      case "light":
        return <SunIcon className="text-warning" />;
      case "dark":
        return <MoonIcon className="text-blue-400" />;
      case "purple-dark":
        return <PurpleIcon />;
      case "crypto":
        return <BitcoinIcon />;
      default:
        return <SunIcon />;
    }
  };

  const getThemeLabel = (themeName: string) => {
    switch (themeName) {
      case "light":
        return "Light";
      case "dark":
        return "Dark";
      case "purple-dark":
        return "Purple Dark";
      case "crypto":
        return "Crypto";
      default:
        return themeName.charAt(0).toUpperCase() + themeName.slice(1);
    }
  };

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          variant="light"
          isIconOnly
          className="text-default-500"
          aria-label="Select theme"
        >
          {getThemeIcon(theme || "light")}
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Theme selection">
        {themes.map((themeName) => (
          <DropdownItem
            key={themeName}
            startContent={getThemeIcon(themeName)}
            onClick={() => setTheme(themeName)}
            className={theme === themeName ? "text-primary" : ""}
          >
            {getThemeLabel(themeName)}
          </DropdownItem>
        ))}
      </DropdownMenu>
    </Dropdown>
  );
};

// Export both simple ThemeSwitch and advanced ThemeSelector
export * from "./ThemeSwitch";
