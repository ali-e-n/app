import React from "react";

const Works = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center flex-1 flex-grow-3 w-full justify-center bg-white dark:bg-black   text-gray-700 dark:text-white rounded-3xl xl:mt-0 py-6   "
    >
      <div className="w-full px-8 py-10">
        <div className="flex items-center space-x-2 xl:space-x-4 mb-6 px-4">
          <h1 className="text-3xl font-bold mb-3">Portfolio</h1>
          <div className="h-[3px] xl:w-[200px] w-[70px] bg-blue-600 "></div>
        </div>

        <div className="nav flex justify-end items-center gap-4 sm:gap-10 p-4 w-full">
          <h2 className="hover:text-blue-700 font-medium">All</h2>
          <h2 className="hover:text-blue-700 font-medium">Web Dev</h2>
          <h2 className="hover:text-blue-700 font-medium">Rss Feed</h2>
          <h2 className="hover:text-blue-700 font-medium">WordPress</h2>
        </div>

        <div className="container grid-cols-2 px-4 grid ">
          <div className="h-14 bg-red-600"></div>
          <div className="h-10 bg-blue-600"></div>
          <div className="h-10 bg-pink-600"></div>
          <div className="h-14 bg-orange-600"></div>
        </div>
      </div>
    </div>
  );
};

export default Works;
