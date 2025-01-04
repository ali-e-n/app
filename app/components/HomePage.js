"use client";
import React from "react";
import { useState } from "react";
import Profile from "./Profile";
import About from "./About";
import { Resume } from "./Resume";
import Navigation from "./Navigation";

const HomePage = () => {
  const [showAbout, setShowAbout] = useState(true);
  const [showResume, setShowResume] = useState(false);
  return (
    <div className="content min-h-screen flex flex-col xl:flex-row justify-center items-start w-full  xl:mt-56 mt-14 px-4 sm:px-16  xl:space-x-6 space-y-4 xl:space-y-0 mb-16">
      {/* Profile Section */}
      <Profile />

      {/* Conditionally render components */}
      {showAbout && <About />}
      {showResume && <Resume />}

      {/* Pass state setters as props */}
      <Navigation setShowAbout={setShowAbout} setShowResume={setShowResume} />
    </div>
  );
};

export default HomePage;
