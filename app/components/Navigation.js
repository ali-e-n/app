"use client";
import React from "react";
import {
  FaUserAlt,
  FaFileAlt,
  FaBriefcase,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";

const Navigation = ({ setShowAbout }) => {
  return (
    <div className="w-[10%] hidden xl:flex flex-col items-center justify-between pb-8 pt-8 bg-white dark:bg-black text-gray-700 dark:text-white rounded-2xl sticky top-1">
      <ul className="space-y-4">
        <li className="flex flex-col items-center space-y-2 cursor-pointer text-blue-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white px-5 py-6 dark:bg-gray-900 bg-[#f3f6f6] rounded-2xl">
          <FaUserAlt className="text-xl group-hover:text-white" />
          <button
            onClick={() => setShowAbout(true)}
            className="group-hover:text-white"
          >
            About
          </button>
        </li>

        <li className="flex flex-col items-center space-y-2 cursor-pointer text-blue-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white px-5 py-6 dark:bg-gray-900 bg-[#f3f6f6] rounded-2xl">
          <FaFileAlt className="text-xl group-hover:text-white" />
          <p className="group-hover:text-white">Resume</p>
        </li>

        <li className="flex flex-col items-center space-y-2 cursor-pointer text-blue-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white px-5 py-6 dark:bg-gray-900 bg-[#f3f6f6] rounded-2xl">
          <FaBriefcase className="text-xl group-hover:text-white" />
          <p className="group-hover:text-white">Works</p>
        </li>

        <li className="flex flex-col items-center space-y-2 cursor-pointer text-blue-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white px-5 py-6 dark:bg-gray-900 bg-[#f3f6f6] rounded-2xl">
          <FaBlog className="text-xl group-hover:text-white" />
          <p className="group-hover:text-white">Blogs</p>
        </li>

        <li className="flex flex-col items-center space-y-2 cursor-pointer text-blue-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white px-5 py-6 dark:bg-gray-900 bg-[#f3f6f6] rounded-2xl">
          <FaEnvelope className="text-xl group-hover:text-white" />
          <p className="group-hover:text-white">Contacts</p>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
