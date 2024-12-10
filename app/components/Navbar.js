"use client";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import { useTheme } from "next-themes"; // If you're using next-themes for theme management

export const Navbar = () => {
  const { theme } = useTheme(); // Get current theme (light or dark)

  // Set logo path based on theme
  const logoSrc = theme === "light" ? "/dark.png" : "/light.png";

  return (
    <div className="flex w-full p-2 items-stretch justify-between md:pl-44 md:pr-64">
      <Image
        src={logoSrc} // Dynamically use the correct logo based on the theme
        alt="Logo"
        width={100} // Adjust dimensions
        height={100}
      />
      <ThemeSwitch />
    </div>
  );
};
