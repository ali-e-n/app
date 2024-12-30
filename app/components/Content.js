import React from "react";
import Profile from "./Profile";
import TimelineIcons from "./TimelineIcons";

export const Content = () => {
  return (
    <div className="content w-full min-h-screen flex flex-col lg:flex-row justify-center items-start mt-52">
      {/* Profile Section */}
      {/* <Profile /> */}

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
