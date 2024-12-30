import React from "react";
import Profile from "./Profile";
import TimelineIcons from "./TimelineIcons";

export const Content = () => {
  return (
    <div className="content w-full min-h-screen flex flex-col sm:flex-row justify-center items-start pt-5 pb-5 sm:space-x-5 space-y-5 sm:space-y-0 lg:pr-32 lg:pl-32 md:pr-16 md:pl-16 sm:pl-16 sm:pr-16 mt-32">
      {/* Profile Section */}
      <Profile />

      {/* Main Content Section */}
      <div className="dark:bg-gray-800 w-full lg:w-[70%] bg-white dark:text-white text-gray-700 space-y-4 rounded-2xl flex flex-col items-center justify-between pb-3 pt-3 flex-1">
        hii
      </div>

      {/* Timeline Section */}
      {/* <div className="dark:bg-gray-800 w-full sm:w-[10%] bg-white dark:text-white text-gray-700 space-y-4 rounded-2xl flex flex-col items-center justify-between pb-8 pt-8">
        <TimelineIcons />
      </div> */}
    </div>
  );
};
