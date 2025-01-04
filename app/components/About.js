import React from "react";
import { FaFileCode, FaPenFancy, FaRss, FaWordpress } from "react-icons/fa";
import { Slides } from "./Slides";

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center flex-1 flex-grow-3 w-full justify-center bg-white dark:bg-black   text-gray-700 dark:text-white rounded-3xl xl:mt-0 py-6   "
    >
      <div className="w-full px-8 py-10">
        {/* main content */}
        <div className="flex items-center space-x-2 xl:space-x-4 mb-6 px-4">
          <h1 className="text-3xl font-bold mb-3">About</h1>
          <div className="h-[3px] xl:w-[200px] w-[70px] bg-blue-600 "></div>
        </div>

        <div>
          <p className="text-md  text-gray-700 dark:text-[#a6a6a6] px-3 py-2 max-w-2xl">
            I am a Frontend Developer with a passion for creating responsive,
            user-friendly interfaces using modern technologies like React and
            Next.js. I focus on delivering clean, efficient, and scalable code
            to build seamless web experiences.
          </p>
          <p className="text-md text-gray-700 dark:text-[#a6a6a6]  px-3 py-2 max-w-2xl">
            With a strong eye for detail and a commitment to excellence, I
            thrive on solving challenges and collaborating with teams to bring
            ideas to life. Staying updated with the latest trends, I aim to
            craft impactful digital solutions that align with user needs.
          </p>
        </div>
        <div>
          <h1 className="text-3xl p-4">What I do!</h1>

          <div className="pbox pb-9 text-gray-700 dark:text-gray-300 xl:min-w-[710px]">
            <div className="p1b flex flex-col lg:flex-row  items-center justify-around  gap-x-8 gap-y-8  px-5 w-full mx-auto">
              <div className="b1 bg-[#fff4f4] flex-1 dark:bg-black p-4 w-full rounded-xl dark:border dark:border-gray-800">
                <span className="flex items-center space-x-2 pb-3">
                  <FaFileCode className="text-4xl text-[#d566ff]" />
                  <h1 className="text-2xl">Web Development</h1>
                </span>
                <p className="text-md dark:text-[#a6a6a6]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod tincidunt volutpat.{" "}
                </p>
              </div>
              <div className="b2 bg-[#eef5fa] flex-1 dark:bg-black dark:border dark:border-gray-800 p-4 w-full rounded-xl ">
                <span className="flex items-center space-x-2 pb-3">
                  <FaPenFancy className="text-4xl text-[#dda10c] " />
                  <h1 className="text-2xl">Ui/Ux Design</h1>
                </span>
                <p className="text-md dark:text-[#a6a6a6]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod tincidunt volutpat.{" "}
                </p>
              </div>
            </div>
            <div className="p2b flex flex-col lg:flex-row items-center justify-around  gap-x-8 gap-y-8  px-5 ">
              <div className="b1 bg-[#eef5fa]  dark:bg-black flex-1 dark:border dark:border-gray-800 mt-8 p-4 w-full rounded-xl ">
                <span className="flex items-center space-x-2 pb-3">
                  <FaRss className="text-4xl text-[#ff6080] " />
                  <h1 className="text-2xl">RSS Develoment</h1>
                </span>
                <p className="text-md dark:text-[#a6a6a6]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod tincidunt volutpat.{" "}
                </p>
              </div>
              <div className="b2 bg-[#fff4f4] flex-1 dark:bg-black dark:border dark:border-gray-800 px-5 sm:mt-8 p-4 w-full rounded-xl ">
                <span className="flex items-center space-x-2 pb-3">
                  <FaWordpress className="text-4xl text-blue-600" />
                  <h1 className="text-2xl">WordPres/Elementor</h1>
                </span>
                <p className="text-md dark:text-[#a6a6a6]">
                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed
                  diam euismod tincidunt volutpat.{" "}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="text-gray-700 dark:text-gray-300   dark:bg-gray-900 bg-[#f3f6f6]  mt-8 flex flex-col justify-center items-center w-full  p-4 xl:x-16 ">
        <h1 className="text-3xl font-semibold ">Clinet</h1>
        <Slides />
      </div>
      {/* Footer */}
      <div className=" text-sm sm:p-5 px-3 py-5 mt-5">
        © 2025 All Rights Reserved by AlienX.
      </div>
    </div>
  );
};

export default About;
