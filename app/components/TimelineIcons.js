"use client";
import React from "react";
import {
  FaBlog,
  FaBriefcase,
  FaEnvelope,
  FaFileAlt,
  FaUserAlt,
} from "react-icons/fa";

export default function TimelineIcons() {
  return (
    <>
      <div className="flex flex-col justify-start items-start space-y-6">
        <FaUserAlt className="text-blue-600" />
        <div className="flex flex-col items-center justify-between  h-20 border-l dark:border-white border-gray-500 dark:text-gray-800 text-white ml-2">
          ff
        </div>
      </div>

      <div className="flex flex-col justify-start items-start space-y-6">
        <FaFileAlt className="text-blue-600" />
        <div className="flex flex-col items-center justify-between  h-20 border-l dark:border-white border-gray-500 dark:text-gray-800 text-white ml-2">
          ff
        </div>
      </div>
      <div className="flex flex-col justify-start items-start space-y-6">
        <FaBriefcase className="text-blue-600" />
        <div className="flex flex-col items-center justify-between  h-20 border-l dark:border-white border-gray-500 dark:text-gray-800 text-white ml-2">
          ff
        </div>
      </div>
      <div className="flex flex-col justify-start items-start space-y-6">
        <FaBlog className="text-blue-600" />
        <div className="flex flex-col items-center justify-between  h-20 border-l dark:border-white border-gray-500 dark:text-gray-800 text-white ml-2">
          ff
        </div>
      </div>
      <div className="flex flex-col justify-start items-start space-y-6">
        <FaEnvelope className="text-blue-600" />
      </div>
    </>
  );
}
