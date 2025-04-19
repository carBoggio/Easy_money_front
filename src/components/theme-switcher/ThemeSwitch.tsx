import React from "react";
import { Button } from "@heroui/react";
import { MoonIcon, SunIcon } from "../icons/index";
import { useTheme } from "../../providers/ThemeProvider";

export const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      isIconOnly
      variant="light"
      aria-label="Toggle dark mode"
      onClick={toggleTheme}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </Button>
  );
};
