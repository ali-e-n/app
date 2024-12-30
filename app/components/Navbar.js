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
    <div className="flex w-full mt-20 sm:mt-15 mr-auto ml-auto items-center justify-between sm:pl-16 sm:pr-16 p-4 md:pr-20 md:pl-20 lg:pr-24 lg:pl-24 xl:pr-32 xl:pl-32 2xl:pr-40 2xl:pl-40">
      <Image
        src={logoSrc} // Dynamically use the correct logo based on the theme
        alt="Logo"
        width={100} // Adjust dimensions
        height={100}
      />
      <div className="flex items-center space-x-4 ">
        <div className=" dark:bg-black dark:text-white p-3 rounded-full bg-white text-black  xl:flex  hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white cursor-pointer">
          <ThemeSwitch />
        </div>
        <button className="xl:hidden border-2 border-gray-300 dark:border-gray-700 p-2 rounded-full bg-blue-700 text-white ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};
