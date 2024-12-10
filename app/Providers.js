"use client";

import React from "react";
import { ThemeProvider } from "next-themes";

export const Providers = ({ children }) => {
  return (
    <div>
      <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
        {children}
      </ThemeProvider>
    </div>
  );
};
