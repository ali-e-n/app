import React from "react";
import { FaBriefcase, FaGraduationCap } from "react-icons/fa";

export const Resume = () => {
  return (
    <div
      id="Resume"
      className="flex flex-col items-center justify-center bg-white dark:bg-black max-w-[850px] text-gray-700 dark:text-white rounded-3xl w-full mx-auto py-6 px-0"
    >
      <div className="w-full px-8 py-10">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6 xl:px-4">
          <h1 className="text-3xl font-bold">Resume</h1>
          <div className="h-1 w-24 bg-blue-600 mb-2"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 xl:px-4">
          {/* Education Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-blue-700">
              <FaGraduationCap className="text-4xl" />
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Education
              </h2>
            </div>
            <div className="bg-[#fff4f4] dark:bg-black p-4 rounded-xl dark:border dark:border-gray-800">
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                2021-2025
              </p>
              <p className="text-md font-medium">
                BSE Computer Engr - UET Peshawar
              </p>
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                Kpk, Pakistan
              </p>
            </div>
            <div className="bg-[#eef5fa] dark:bg-black p-4 rounded-xl dark:border dark:border-gray-800">
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                2018-2020
              </p>
              <p className="text-md font-medium">
                HSSc Pre-Engr - AkHSs Gahkuch, Gb
              </p>
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                Gilgit, Pakistan
              </p>
            </div>
            <div className="bg-[#fff4f4] dark:bg-black p-4 rounded-xl dark:border dark:border-gray-800">
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                2015-2018
              </p>
              <p className="text-md font-medium">SSc - AkHSs Gahkuch, Gb</p>
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                Gilgit, Pakistan
              </p>
            </div>
          </div>

          {/* Experience Section */}
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-2 text-blue-700">
              <FaBriefcase className="text-4xl" />
              <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
                Experience
              </h2>
            </div>
            <div className="bg-[#eef5fa] dark:bg-black p-4 rounded-xl dark:border dark:border-gray-800">
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                2024-Present
              </p>
              <p className="text-md font-medium">
                Frontend Developer - SupperClub, Dubai
              </p>
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                Remote
              </p>
            </div>
            <div className="bg-[#fff4f4] dark:bg-black p-4 rounded-xl dark:border dark:border-gray-800">
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                2022-Present
              </p>
              <p className="text-md font-medium">
                WordPress Design & Dev - Upwork
              </p>
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                Remote
              </p>
            </div>
            <div className="bg-[#eef5fa] dark:bg-black p-4 rounded-xl dark:border dark:border-gray-800">
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                2023-2024
              </p>
              <p className="text-md font-medium">
                Data Analyst - Leading Edge Only, UK
              </p>
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                Remote
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills */}

      <div className=" flex flex-col justify-start items-start gap-8  md:flex-row dark:text-gray-300 mx-auto px-8 xl:px-14 py-10  dark:bg-gray-900 bg-[#f3f6f6] w-full ">
        <div className="flex flex-col gap-8 w-full">
          <div className="flex items-center gap-2 text-blue-700">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Working Skills
            </h2>
          </div>
          <div className="rounded-xl flex flex-col justify-center items-start gap-2">
            {/* Skill name and percentage */}
            <span className="flex justify-between w-full items-center text-md font-medium">
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                JavaScript
              </p>
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">85%</p>
            </span>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-[#FF6464] h-2.5 rounded-full w-[85%]"></div>
            </div>
          </div>

          <div className="rounded-xl flex flex-col justify-center items-start gap-2">
            {/* Skill name and percentage */}
            <span className="flex justify-between w-full items-center text-md font-medium">
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">Html</p>
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">95%</p>
            </span>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-[#9272D4] h-2.5 rounded-full w-[95%]"></div>
            </div>
          </div>

          <div className="rounded-xl flex flex-col justify-center items-start gap-2">
            {/* Skill name and percentage */}
            <span className="flex justify-between w-full items-center text-md font-medium">
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">Css</p>
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">75%</p>
            </span>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-[75%]"></div>
            </div>
          </div>
          <div className="rounded-xl flex flex-col justify-center items-start gap-2">
            {/* Skill name and percentage */}
            <span className="flex justify-between w-full items-center text-md font-medium">
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
                React
              </p>
              <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">65%</p>
            </span>

            {/* Progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
              <div className="bg-blue-600 h-2.5 rounded-full w-[65%]"></div>
            </div>
          </div>
        </div>

        {/* 2nd Section */}
        <div className="flex flex-col gap-6 w-full">
          <div className="flex items-center gap-2 text-blue-700">
            <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300">
              Working Skills
            </h2>
          </div>
          <div className=" rounded-xl ">
            <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
              2024-Present
            </p>
            <p className="text-md font-medium">
              Frontend Developer - SupperClub, Dubai
            </p>
            <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">Remote</p>
          </div>
          <div className=" rounded-xl ">
            <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
              2022-Present
            </p>
            <p className="text-md font-medium">
              WordPress Design & Dev - Upwork
            </p>
            <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">Remote</p>
          </div>
          <div className=" rounded-xl ">
            <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">
              2023-2024
            </p>
            <p className="text-md font-medium">
              Data Analyst - Leading Edge Only, UK
            </p>
            <p className="text-sm text-[#44566c] dark:text-[#a6a6a6]">Remote</p>
          </div>
        </div>
      </div>
      {/* Footer */}
      <div className="text-sm mt-6">© 2025 All Rights Reserved by AlienX.</div>
    </div>
  );
};
