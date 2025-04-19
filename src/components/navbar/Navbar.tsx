import React from "react";
import { Link, useLocation } from "react-router-dom";
import {
  Navbar as HeroNavbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
  Avatar,
  Button,
} from "@heroui/react";
import { useRaffle } from "../../providers/RaffleProvider";
import { ThemeSelector } from "../theme-switcher/ThemeSelector";
import { WalletIcon } from "../icons/wallet-icon";
import { Logo } from "./Logo";
import { WalletButton } from "./WalletButton";
import { siteConfig } from "../../config/site";

export const Navbar: React.FC = () => {
  const { user, logout } = useRaffle();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const routes = siteConfig.mainNav;

  return (
    <HeroNavbar
      onMenuOpenChange={setIsMenuOpen}
      isMenuOpen={isMenuOpen}
      isBordered
      isBlurred
      className="bg-background/70 dark:bg-background/70 backdrop-blur-md"
      maxWidth="xl"
      position="sticky"
    >
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          className="sm:hidden"
        />
        <NavbarBrand>
          <Logo />
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {routes.map((route) => {
          const isActive =
            location.pathname === route.href ||
            (route.href !== "/" && location.pathname.startsWith(route.href));

          return (
            <NavbarItem key={route.href} isActive={isActive}>
              <Link
                to={route.href}
                className={`text-sm ${isActive ? "text-primary" : "text-foreground"}`}
              >
                {route.title}
              </Link>
            </NavbarItem>
          );
        })}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <ThemeSelector />
        </NavbarItem>

        {user ? (
          <Dropdown placement="bottom-end">
            <DropdownTrigger>
              <Avatar
                isBordered
                as="button"
                className="transition-transform"
                color="primary"
                name={user.username}
                size="sm"
                src={user.avatarUrl}
              />
            </DropdownTrigger>
            <DropdownMenu aria-label="User menu actions" variant="flat">
              <DropdownItem
                key="profile-info"
                className="h-14 gap-2"
                textValue="Profile info"
              >
                <p className="font-semibold">Signed in as</p>
                <p className="font-semibold">{user.email}</p>
              </DropdownItem>
              <DropdownItem key="wallet" className="text-sm">
                <div className="flex items-center gap-2">
                  <WalletIcon size={16} />
                  <div className="flex-1 truncate">
                    {user.walletAddress.substring(0, 8)}...
                    {user.walletAddress.substring(
                      user.walletAddress.length - 6
                    )}
                  </div>
                </div>
              </DropdownItem>
              <DropdownItem key="divider" className="h-px bg-divider my-1" />
              <DropdownItem key="profile">
                <Link to="/profile" className="w-full">
                  Your Profile
                </Link>
              </DropdownItem>
              <DropdownItem key="tickets">
                <Link to="/tickets" className="w-full">
                  Your Tickets
                </Link>
              </DropdownItem>
              <DropdownItem key="raffles-won">
                <Link to="/raffles-won" className="w-full">
                  Raffles Won
                </Link>
              </DropdownItem>
              <DropdownItem key="settings">
                <Link to="/settings" className="w-full">
                  Settings
                </Link>
              </DropdownItem>
              <DropdownItem key="divider2" className="h-px bg-divider my-1" />
              <DropdownItem key="logout" color="danger" onClick={logout}>
                Log Out
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>
        ) : (
          <NavbarItem>
            <WalletButton />
          </NavbarItem>
        )}
      </NavbarContent>

      <NavbarMenu>
        {routes.map((route) => {
          const isActive =
            location.pathname === route.href ||
            (route.href !== "/" && location.pathname.startsWith(route.href));

          return (
            <NavbarMenuItem key={route.href}>
              <Link
                to={route.href}
                className={`w-full text-lg ${isActive ? "text-primary" : "text-foreground"}`}
                onClick={() => setIsMenuOpen(false)}
              >
                {route.title}
              </Link>
            </NavbarMenuItem>
          );
        })}
      </NavbarMenu>
    </HeroNavbar>
  );
};
