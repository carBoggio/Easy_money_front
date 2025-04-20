// main.tsx
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { HeroUIProvider } from "@heroui/system";
import App from "./App";
import "./styles/index.css";

// Check if user has a saved theme preference or detect system preference
const getInitialTheme = () => {
  const savedTheme = window.localStorage.getItem("theme");
  if (savedTheme) return savedTheme;

  return window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";
};

// Apply theme class to document
const initialTheme = getInitialTheme();
document.documentElement.classList.add(initialTheme);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <HeroUIProvider>
        <div
          className={`${initialTheme} text-foreground bg-background min-h-screen`}
        >
          <App />
        </div>
      </HeroUIProvider>
    </BrowserRouter>
  </React.StrictMode>
);
