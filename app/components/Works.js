import Image from "next/image";
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

        <div className="nav flex justify-end items-center gap-4 sm:gap-10 px-4 sm:p-7 py-4 w-full">
          <h2 className="hover:text-blue-700 font-medium">All</h2>
          <h2 className="hover:text-blue-700 font-medium">Web Dev</h2>
          <h2 className="hover:text-blue-700 font-medium">Rss Feed</h2>
        </div>

        <div className="container grid-cols-1 lg:grid-cols-2 sm:p-4 p-2 grid w-full">
          <div className=" flex justify-center items-center flex-col mx-1 my-1 bg-[#fff4f4] flex-1 dark:bg-black p-4 w-full lg:w-auto  rounded-xl dark:border dark:border-gray-800 ">
            <Image
              src="/hartapps.png"
              alt="Profile"
              // layout="fill"
              // objectFit="cover"
              // style={{ objectPosition: "center" }}
              className=" rounded-lg w-full h-full"
              id="dp1"
              width={300}
              height={300}
            />
            <div className="flex flex-col justify-center items-start w-full px-2 pt-5 pb-3 gap-1 ">
              <p className="text-sm text-gray-400">Web Dev</p>
              <h2 className="text-lg ">Landing Page</h2>
            </div>
          </div>
          <div className=" flex justify-center items-center flex-col mx-1 my-1  bg-[#fff4f4] flex-1 dark:bg-black p-4 w-full lg:w-auto  rounded-xl dark:border dark:border-gray-800 ">
            <Image
              src="/hartapps.png"
              alt="Profile"
              // layout="fill"
              // objectFit="cover"
              // style={{ objectPosition: "center" }}
              className=" rounded-lg w-full h-full"
              id="dp1"
              width={300}
              height={300}
            />
            <div className="flex flex-col justify-center items-start w-full px-2 pt-5 pb-3 gap-1 ">
              <p className="text-sm text-gray-400">Web Dev</p>
              <h2 className="text-lg ">Landing Page</h2>
            </div>
          </div>
          <div className=" flex justify-center items-center flex-col mx-1 my-1   bg-[#fff4f4] flex-1 dark:bg-black p-4 w-full lg:w-auto  rounded-xl dark:border dark:border-gray-800 ">
            <Image
              src="/c3.png"
              alt="Profile"
              // layout="fill"
              // objectFit="cover"
              // style={{ objectPosition: "center" }}
              className=" rounded-lg w-full h-full"
              id="dp1"
              width={300}
              height={300}
            />
            <div className="flex flex-col justify-center items-start w-full px-2 pt-5 pb-3 gap-1 ">
              <p className="text-sm text-gray-400">Web Dev</p>
              <h2 className="text-lg ">Landing Page</h2>
            </div>
          </div>
          <div className=" flex justify-center items-center flex-col mx-1 my-1  bg-[#fff4f4] flex-1 dark:bg-black p-4 w-full lg:w-auto  rounded-xl dark:border dark:border-gray-800 ">
            <Image
              src="/hartapps.png"
              alt="Profile"
              // layout="fill"
              // objectFit="cover"
              // style={{ objectPosition: "center" }}
              className=" rounded-lg w-full h-full"
              id="dp1"
              width={300}
              height={300}
            />
            <div className="flex flex-col justify-center items-start w-full px-2 pt-5 pb-3 gap-1 ">
              <p className="text-sm text-gray-400">Web Dev</p>
              <h2 className="text-lg ">Landing Page</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
