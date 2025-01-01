import React from "react";
import Profile from "./Profile";
import Navigation from "./Navigation";
import About from "./About";

export const Content = () => {
  return (
    <div className="content min-h-screen flex flex-col xl:flex-row justify-center items-start mt-52 px-4 sm:px-8 md:px-12 xl:space-x-4 space-y-4 xl:space-y-0 mb-16">
      {/* Profile Section */}
      <Profile />

      <About />

      <Navigation />
    </div>
  );
};

{
  /* <div className="dark:bg-gray-800 w-full sm:w-[10%] bg-white dark:text-white text-gray-700 space-y-4 rounded-2xl flex flex-col items-center justify-between pb-8 pt-8">
        <TimelineIcons />
      </div> */
}
