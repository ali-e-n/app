"use client";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";
import { useTheme } from "next-themes";
import {
  FaUserAlt,
  FaFileAlt,
  FaBriefcase,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";

export const Navbar = () => {
  const { theme } = useTheme(); // Get current theme (light or dark)

  // Ensure the logo updates only after the theme is loaded
  const logoSrc = theme === "light" ? "/dark.png" : "/light.png";

  const [openNav, setOpenNav] = React.useState(false);

  const handleNav = () => {
    // Toggle navigation menu
    setOpenNav((prev) => !prev);
  };

  return (
    <div className="flex w-full mt-20 sm:mt-15 items-center justify-between px-4 sm:px-16 md:px-20 lg:px-24 xl:px-32 2xl:px-16">
      {/* Logo */}
      <Image
        src={logoSrc}
        alt="Logo"
        width={100}
        height={100}
        className="cursor-pointer"
      />

      {/* Right Section */}
      <div className="flex items-center space-x-4">
        {/* Theme Switch */}
        <div className="dark:bg-black dark:text-white p-3 rounded-full bg-white text-black xl:flex hover:bg-blue-700 hover:text-white dark:hover:bg-blue-700 dark:hover:text-white cursor-pointer transition ease-in-out duration-300">
          <ThemeSwitch />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={handleNav}
          className="xl:hidden border-2 border-gray-300 dark:border-gray-700 p-2 rounded-full bg-blue-700 text-white transition-transform duration-300 hover:scale-110"
          aria-label="Toggle navigation menu"
        >
          {openNav ? (
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
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
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
          )}
        </button>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`xl:hidden absolute top-36 left-1/2 transform -translate-x-1/2 rounded-xl w-[calc(100%-2.5rem)] mt-12 max-w-sm sm:max-w-xl md:max-w-2xl px-2 py-5 bg-white dark:bg-gray-900 shadow-lg transition-opacity duration-500 z-50 ${
          openNav ? "opacity-100 block" : "opacity-0 hidden"
        }`}
      >
        <ul className="flex flex-col items-start justify-center space-y-4 ">
          {[
            { icon: FaUserAlt, label: "About" },
            { icon: FaFileAlt, label: "Resume" },
            { icon: FaBriefcase, label: "Works" },
            { icon: FaBlog, label: "Blogs" },
            { icon: FaEnvelope, label: "Contact" },
          ].map(({ icon: Icon, label }) => (
            <li
              key={label}
              className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-white hover:text-blue-600 dark:hover:text-blue-600 px-5 py-2 rounded-xl transition-transform duration-300 hover:scale-105 "
            >
              <Icon className="text-xl text-gray-500 dark:text-white" />
              <button>{label}</button>
            </li>
          ))}
        </ul>
      </div>
      {}
    </div>
  );
};
