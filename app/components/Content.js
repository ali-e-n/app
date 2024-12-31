import React from "react";
import Profile from "./Profile";
import TimelineIcons from "./TimelineIcons";
import Navigation from "./Navigation";
import { FaCode } from "react-icons/fa";

export const Content = () => {
  return (
    <div className="content min-h-screen flex flex-col xl:flex-row justify-center items-start mt-52 px-4 sm:px-8 md:px-12 xl:space-x-4 space-y-4 xl:space-y-0">
      {/* Profile Section */}
      <Profile />

      {/* Main Content Section */}

      <div className="flex flex-col items-center justify-center bg-white dark:bg-black xl:flex-1 text-gray-700 dark:text-white rounded-2xl w-full mx-auto p-4 xl:mt-0 ">
        <div className="w-full">
          {/* main content */}
          <div className="flex items-center space-x-4">
            <h1 className="text-3xl font-bold p-4">About Me</h1>
            <div className="h-1 w-24   bg-blue-600"></div>
          </div>

          <p className="text-md  text-gray-700 dark:text-gray-300 mt-2 p-4">
            I am a Frontend Developer with a passion for creating responsive,
            user-friendly interfaces using modern technologies like React and
            Next.js. I focus on delivering clean, efficient, and scalable code
            to build seamless web experiences.
          </p>
          <p className="text-md text-gray-700 dark:text-gray-300 mt-2 p-4">
            With a strong eye for detail and a commitment to excellence, I
            thrive on solving challenges and collaborating with teams to bring
            ideas to life. Staying updated with the latest trends, I aim to
            craft impactful digital solutions that align with user needs.
          </p>
          <div>
            <h1 className="text-3xl p-4">What I do!</h1>

            <div className="pbox pb-9 text-gray-700 dark:text-gray-300">
              <div className="p1b flex flex-col md:flex-row  items-center justify-around  gap-x-8 gap-y-8  px-5">
                <div className="b1 bg-[#fff4f4] flex-1 dark:bg-black p-4 rounded-xl dark:border dark:border-gray-500">
                  <span className="flex items-center space-x-2 pb-3">
                    <FaCode className="text-4xl text-blue-600" />
                    <h1 className="text-2xl">Ui/Ux Design</h1>
                  </span>
                  <p className="text-md">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod tincidunt volutpat.{" "}
                  </p>
                </div>
                <div className="b2 bg-white flex-1 dark:bg-black border border-gray-500 p-4 rounded-xl">
                  <h1 className="text-2xl">Ui/Ux Design</h1>
                  <p className="text-md">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod tincidunt volutpat.{" "}
                  </p>
                </div>
              </div>
              <div className="p2b flex flex-col md:flex-row items-center justify-around  gap-x-8 gap-y-8  px-5">
                <div className="b1 bg-white dark:bg-black flex-1 border border-gray-500 mt-8 p-4 rounded-xl ">
                  <h1 className="text-2xl">Ui/Ux Design</h1>
                  <p className="text-md">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod tincidunt volutpat.{" "}
                  </p>
                </div>
                <div className="b2 bg-white flex-1 dark:bg-black border border-gray-500 mt-2 sm:mt-8 p-4 rounded-xl">
                  <h1 className="text-2xl">Ui/Ux Design</h1>
                  <p className="text-md">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam euismod tincidunt volutpat.{" "}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Sidebar Nav */}
      <Navigation />
    </div>
  );
};

{
  /* <div className="dark:bg-gray-800 w-full sm:w-[10%] bg-white dark:text-white text-gray-700 space-y-4 rounded-2xl flex flex-col items-center justify-between pb-8 pt-8">
        <TimelineIcons />
      </div> */
}
