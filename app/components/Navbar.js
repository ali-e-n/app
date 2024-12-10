import React from "react";
import ThemeSwitch from "./ThemeSwitch";
import Image from "next/image";

export const Navbar = () => {
  return (
    <div className="flex w-full p-2 items-stretch justify-between md:pl-44 md:pr-64">
      <Image
        src="/logo.png" // Use the root-relative path
        alt="Logo"
        width={100} // Adjust dimensions
        height={100}
      ></Image>
      <ThemeSwitch />
    </div>
  );
};
