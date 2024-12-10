import React from "react";
import Profile from "./Profile";
import TimelineIcons from "./TimelineIcons";

export const Content = () => {
  return (
    <div className="content w-[100%] min-h-screen flex flex-col sm:flex-row justify-center items-start pt-5 pb-5 space-x-5 pl-16 pr-16 mt-32 ">
      <Profile />
      <div className=" dark:bg-gray-800 w-[82%] bg-white dark:text-white text-gray-700 space-y-4 rounded-2xl  flex flex-col items-center justify-between pb-3 pt-3 flex-1">
        hii
      </div>

      <div className=" dark:bg-gray-800 w-[5%] bg-white dark:text-white text-gray-700 space-y-4 rounded-2xl  flex flex-col items-center justify-between pb-8 pt-8">
        <TimelineIcons />
      </div>
    </div>
  );
};
