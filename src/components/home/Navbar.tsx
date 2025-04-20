// ImprovedDarkModeNavbar.tsx
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { SunIcon, MoonIcon } from "./icons";

export const FuturisticNavbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode for your app
  const [isScrolled, setIsScrolled] = useState(false);

  // Check system preferences and set initial scroll state
  useEffect(() => {
    const isDark = document.documentElement.classList.contains("dark");
    setIsDarkMode(isDark);

    // Initial scroll check and add listener
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle scroll for transparency effect
  const handleScroll = () => {
    if (window.scrollY > 10) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };

  // Apply dark mode to document when changed
  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    if (newDarkMode) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("theme", "light");
    }
    setIsDarkMode(newDarkMode);
  };

  const menuItems = [
    { name: "HOME", href: "/" },
    { name: "LOANS", href: "/loans" },
    { name: "REFERRALS", href: "/referrals" },
    { name: "ABOUT", href: "/about" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-black/80 backdrop-blur-lg"
          : isDarkMode
            ? "bg-black/30 backdrop-blur-sm"
            : "bg-transparent"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-10">
        <div className="flex justify-between items-center h-20">
          {/* Logo section */}
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center mr-2">
                <svg
                  viewBox="0 0 36 36"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-8 h-8"
                >
                  <path
                    d="M18 4L28 10V26L18 32L8 26V10L18 4Z"
                    fill="#0C0C0F"
                    stroke="white"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M18 10L23 13V19L18 22L13 19V13L18 10Z"
                    fill="#3B82F6"
                  />
                </svg>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                CryptoWin
              </span>
            </Link>
          </div>

          {/* Center & Right nav sections */}
          <div className="hidden md:flex items-center space-x-10">
            {/* Menu items */}
            <div className="flex space-x-10">
              {menuItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`text-sm font-medium tracking-wide relative group 
                    transition-colors duration-300
                    ${
                      isScrolled || isDarkMode
                        ? "text-gray-300 hover:text-blue-400"
                        : "text-gray-800 hover:text-blue-600"
                    }`}
                >
                  {item.name}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
            </div>

            {/* Right section - Theme toggle & buttons */}
            <div className="flex items-center space-x-6">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-full transition-colors
                  ${
                    isScrolled || isDarkMode
                      ? "text-gray-300 hover:text-blue-400"
                      : "text-gray-800 hover:text-blue-600"
                  }`}
                aria-label={
                  isDarkMode ? "Switch to light mode" : "Switch to dark mode"
                }
              >
                {isDarkMode ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>

              <Link
                to="/register"
                className="px-8 py-2 text-sm font-medium rounded-full text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-colors shadow-lg shadow-blue-500/20"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-md focus:outline-none
                ${
                  isScrolled || isDarkMode
                    ? "text-gray-300 hover:text-blue-400"
                    : "text-gray-800 hover:text-blue-600"
                }`}
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {!isMenuOpen ? (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              ) : (
                <svg
                  className="block h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 backdrop-blur-xl">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                className="text-gray-300 hover:text-blue-400 block px-3 py-3 text-base font-medium transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="pt-4 pb-6 border-t border-gray-800">
            <div className="flex items-center justify-between px-5">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-full text-gray-300 hover:text-blue-400 transition-colors flex items-center"
              >
                {isDarkMode ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
                <span className="ml-2">
                  {isDarkMode ? "Light Mode" : "Dark Mode"}
                </span>
              </button>
            </div>
            <div className="mt-6 px-5">
              <Link
                to="/register"
                className="w-full px-4 py-3 text-center text-sm font-medium rounded-md text-white bg-gradient-to-r from-blue-500 to-cyan-400 hover:from-blue-600 hover:to-cyan-500 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Register
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
