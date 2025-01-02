import React from "react";
import {
  FaBriefcase,
  FaFileCode,
  FaGraduationCap,
  FaPenFancy,
} from "react-icons/fa";
import { Slides } from "./Slides";

export const Resume = () => {
  return (
    <div
      id="Resume"
      className="flex flex-col items-center justify-center pt-14 bg-white dark:bg-black max-w-[850px] text-gray-700 dark:text-white rounded-3xl w-full mx-auto p-4 xl:mt-0 "
    >
      <div className="w-full px-5">
        {/* main content */}
        <div className="flex items-center space-x-4">
          <h1 className="text-3xl font-bold p-4">Resume</h1>
          <div className="h-1 w-24   bg-blue-600"></div>
        </div>

        <div>
          <div className="pbox pb-9 text-gray-700 dark:text-gray-300 flex flex-col md:flex-row justify-start lg:items-start items-center ">
            <div className="p1b flex flex-col   items-start justify-center  gap-x-8 gap-y-8  px-5">
              <span className="flex text-4xl justify-center items-center gap-2 text-blue-700">
                <FaGraduationCap />
                <h1 className="text-3xl p-1 mt-2 text-gray-700 dark:text-gray-300">
                  Education
                </h1>
              </span>

              <div className="b1 bg-[#fff4f4]  dark:bg-black p-4 rounded-xl dark:border dark:border-gray-800 w-full">
                <p className="text-sm p-1 text-[#44566c] dark:text-[#a6a6a6]">
                  2021-2025
                </p>
                <span className="text-md font-medium p-1 flex">
                  BSE Computer Engr{" "}
                  <p className="text-sm ml-1 text-[#44566c] dark:text-[#a6a6a6]">
                    {" "}
                    - UET Peshawar
                  </p>
                </span>
                <p className="p-1 text-[#44566c] dark:text-[#a6a6a6]">
                  Kpk, Pakistan
                </p>
              </div>
              <div className="b2 bg-[#eef5fa]  dark:bg-black dark:border dark:border-gray-800 p-4 rounded-xl w-full">
                <p className="text-sm p-1 text-[#44566c] dark:text-[#a6a6a6]">
                  2018-2020
                </p>
                <span className="text-md font-medium p-1 flex">
                  HSSc Pre-Engr{" "}
                  <p className="text-sm ml-1 text-[#44566c] dark:text-[#a6a6a6]">
                    {" "}
                    - AkHSs Gahkuch, Gb
                  </p>
                </span>
                <p className="p-1 text-[#44566c] dark:text-[#a6a6a6]">
                  Gilgit, Pakistan
                </p>
              </div>
              <div className="b1 bg-[#fff4f4]  dark:bg-black p-4 rounded-xl dark:border dark:border-gray-800 w-full">
                <p className="text-sm p-1 text-[#44566c] dark:text-[#a6a6a6]">
                  2015-2018
                </p>
                <span className="text-md font-medium p-1 flex">
                  SSc{" "}
                  <p className="text-sm ml-1 text-[#44566c] dark:text-[#a6a6a6]">
                    {" "}
                    - AkHSs Gahkuch, Gb
                  </p>
                </span>
                <p className="p-1 text-[#44566c] dark:text-[#a6a6a6]">
                  Gilgit, Pakistan
                </p>
              </div>
            </div>

            <div className="p1b flex flex-col   items-start justify-center  gap-x-8 gap-y-8  px-5 mt-7 md:mt-0 ">
              <span className="flex text-3xl justify-center items-center gap-2 text-blue-700">
                <FaBriefcase />
                <h1 className="text-3xl p-1  text-gray-700 dark:text-gray-300">
                  Experience
                </h1>
              </span>

              <div className="b1 bg-[#eef5fa]  dark:bg-black p-4 rounded-xl dark:border dark:border-gray-800 w-full">
                <p className="text-sm p-1 text-[#44566c] dark:text-[#a6a6a6]">
                  2024-Present
                </p>
                <span className="text-md font-medium p-1 flex">
                  Frontend Developer{" "}
                  <p className="text-sm ml-1 text-[#44566c] dark:text-[#a6a6a6]">
                    {" "}
                    - SupperClub, Dubai
                  </p>
                </span>
                <p className="p-1 text-[#44566c] dark:text-[#a6a6a6]">Remote</p>
              </div>
              <div className="b2 bg-[#fff4f4]  dark:bg-black dark:border dark:border-gray-800 p-4 rounded-xl w-full">
                <p className="text-sm p-1 text-[#44566c] dark:text-[#a6a6a6]">
                  2022-Present
                </p>
                <span className="text-md font-medium p-1 flex">
                  WordPress Design & Dev{" "}
                  <p className="text-sm ml-1 text-[#44566c] dark:text-[#a6a6a6]">
                    {" "}
                    - Upwork
                  </p>
                </span>
                <p className="p-1 text-[#44566c] dark:text-[#a6a6a6]">Remote</p>
              </div>
              <div className="b2 bg-[#eef5fa]  dark:bg-black dark:border dark:border-gray-800 p-4 rounded-xl w-full">
                <p className="text-sm p-1 text-[#44566c] dark:text-[#a6a6a6]">
                  2023-2024
                </p>
                <span className="text-md font-medium p-1 flex">
                  Data Analyst{" "}
                  <p className="text-sm ml-1 text-[#44566c] dark:text-[#a6a6a6]">
                    {" "}
                    - Leading Edge Only, Uk
                  </p>
                </span>
                <p className="p-1 text-[#44566c] dark:text-[#a6a6a6]">Remote</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <div className="dark:bg-[#1d1d1d] bg-[#f3f6f6] h-[30vh] mt-8 flex flex-col justify-center items-center w-full  p-6 rounded-2xl">
        <h1 className="text-3xl font-semibold ">Clinet</h1>
        <Slides />
      </div> */}
      {/* Footer */}
      <div className=" text-sm sm:p-5 px-3 py-5 mt-5">
        © 2025 All Rights Reserved by AlienX.
      </div>
    </div>
  );
};
