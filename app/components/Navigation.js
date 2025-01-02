"use client";
import React from "react";
import {
  FaUserAlt,
  FaFileAlt,
  FaBriefcase,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";

const Navigation = ({ setShowAbout, setShowResume }) => {
  return (
    <div className=" xl:w-[12%] xl:min-w-[11%] xl:max-w-[11%]  hidden xl:flex flex-col items-center justify-between pb-8 pt-8 bg-white dark:bg-black text-gray-700 dark:text-white rounded-3xl sticky top-1">
      <ul className="space-y-4">
        {/* About */}
        <li
          className="flex flex-col items-center space-y-2 cursor-pointer text-blue-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white px-5 py-6 dark:bg-gray-900 bg-[#f3f6f6] rounded-2xl"
          onClick={() => {
            setShowAbout(true);
            setShowResume(false);
          }}
        >
          <FaUserAlt className="text-xl group-hover:text-white" />
          <span className="group-hover:text-white">About</span>
        </li>

        {/* Resume */}
        <li
          className="flex flex-col items-center space-y-2 cursor-pointer text-blue-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white px-5 py-6 dark:bg-gray-900 bg-[#f3f6f6] rounded-2xl"
          onClick={() => {
            setShowResume(true);
            setShowAbout(false);
          }}
        >
          <FaFileAlt className="text-xl group-hover:text-white" />
          <span className="group-hover:text-white">Resume</span>
        </li>

        {/* Works */}
        <li
          className="flex flex-col items-center space-y-2 cursor-pointer text-blue-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white px-5 py-6 dark:bg-gray-900 bg-[#f3f6f6] rounded-2xl"
          onClick={() => {
            console.log("Works clicked");
          }}
        >
          <FaBriefcase className="text-xl group-hover:text-white" />
          <span className="group-hover:text-white">Works</span>
        </li>

        {/* Blogs */}
        <li
          className="flex flex-col items-center space-y-2 cursor-pointer text-blue-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white px-5 py-6 dark:bg-gray-900 bg-[#f3f6f6] rounded-2xl"
          onClick={() => {
            console.log("Blogs clicked");
          }}
        >
          <FaBlog className="text-xl group-hover:text-white" />
          <span className="group-hover:text-white">Blogs</span>
        </li>

        {/* Contacts */}
        <li
          className="flex flex-col items-center space-y-2 cursor-pointer text-blue-700 hover:bg-blue-700 dark:hover:bg-blue-700 hover:text-white px-5 py-6 dark:bg-gray-900 bg-[#f3f6f6] rounded-2xl"
          onClick={() => {
            console.log("Contacts clicked");
          }}
        >
          <FaEnvelope className="text-xl group-hover:text-white" />
          <span className="group-hover:text-white">Contacts</span>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
