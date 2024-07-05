"use client";

import React from "react";
import { useSelectedLayoutSegment } from "next/navigation";
import { useTheme } from "next-themes";
import { InstagramLink } from "./instagram-link";

import type { MainNavItem } from "~/types";

interface MainNavProps {
  items?: MainNavItem[];
  children?: React.ReactNode;
}

export function MainNav({ items, children }: MainNavProps) {
  const segment = useSelectedLayoutSegment();
  const { theme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => {
    setMounted(true);
  }, []);
  const isDarkMode = theme === "dark";
  const logoColor = isDarkMode ? "#FFFFFF" : "#000000";
  if (!mounted) return null;

  return (
    <nav className="container flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
      <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
        <img
          src="/logo.svg"
          alt="Logo"
          className="h-20 w-20"
          style={{ fill: logoColor }}
        />
      </div>
      <InstagramLink url="https://www.instagram.com/pathfinder_site" className="text-white" />
    </nav>
  );
}
