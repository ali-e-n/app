"use client";
import { useState } from "react";
import { Navbar } from "./components/Navbar";
import Profile from "./components/Profile";
import Navigation from "./components/Navigation";
import About from "./components/About";
import { Resume } from "./components/Resume";

export default function Home() {
  const [showAbout, setShowAbout] = useState(true);
  const [showResume, setShowResume] = useState(false);

  return (
    <div className="min-h-screen font-[family-name:var(--font-geist-sans)] 2xl:px-24">
      <Navbar />
      <div className="content min-h-screen flex flex-col xl:flex-row justify-center items-start mt-52 px-4 sm:px-8 md:px-12 xl:space-x-6 space-y-4 xl:space-y-0 mb-16">
        {/* Profile Section */}
        <Profile />

        {/* Conditionally render components */}
        {showAbout && <About />}
        {showResume && <Resume />}

        {/* Pass state setters as props */}
        <Navigation setShowAbout={setShowAbout} setShowResume={setShowResume} />
      </div>

      {/* Footer */}
      {/* <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <h1>Footer</h1>
      </footer> */}
    </div>
  );
}
