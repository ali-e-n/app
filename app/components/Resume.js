import React from "react";
import {
  FaBriefcase,
  FaFileCode,
  FaGraduationCap,
  FaPenFancy,
} from "react-icons/fa";

export const Resume = () => {
  return (
    <div
      id="Resume"
      className="flex flex-col items-center justify-center bg-white dark:bg-black max-w-[850px] text-gray-700 dark:text-white rounded-3xl w-full mx-auto px-4 py-6"
    >
      <div className="w-full px-8 py-10">
        {/* Header */}
        <div className="flex items-center space-x-4 mb-6">
          <h1 className="text-3xl font-bold">Resume</h1>
          <div className="h-1 w-24 bg-blue-600 mb-2"></div>
        </div>

        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8">
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

      {/* Footer */}
      <div className="text-sm mt-6">© 2025 All Rights Reserved by AlienX.</div>
    </div>
  );
};
