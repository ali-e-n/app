import React from "react";
import {
  FaUserAlt,
  FaFileAlt,
  FaBriefcase,
  FaBlog,
  FaEnvelope,
} from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="w-[10%] hidden xl:flex flex-col items-center justify-start pb-8 pt-8 bg-white dark:bg-black text-gray-700 dark:text-white rounded-2xl sticky top-1">
      <ul>
        <li className="flex flex-col items-center space-y-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600  px-5 py-6  rounded-xl dark:hover:text-blue-600 ">
          <FaUserAlt className="text-xl text-gray-700 dark:text-white" />
          {/* <FaUserAlt className="text-xl text-[#E93B81]" /> */}
          <p>About</p>
        </li>
        <li className="flex flex-col items-center space-y-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600  px-5 py-6  rounded-xl dark:hover:text-blue-600 ">
          <FaFileAlt className="text-xl text-gray-700 dark:text-white" />
          {/* <FaUserAlt className="text-xl text-[#E93B81]" /> */}
          <p>Resume</p>
        </li>
        <li className="flex flex-col items-center space-y-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600  px-5 py-6  rounded-xl dark:hover:text-blue-600 ">
          <FaBriefcase lassName="text-xl text-gray-700 dark:text-white" />
          {/* <FaUserAlt className="text-xl text-[#E93B81]" /> */}
          <p>Works</p>
        </li>
        <li className="flex flex-col items-center space-y-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600  px-5 py-6  rounded-xl dark:hover:text-blue-600 ">
          <FaBlog className="text-xl text-gray-700 dark:text-white" />
          {/* <FaUserAlt className="text-xl text-[#E93B81]" /> */}
          <p>Blogs</p>
        </li>
        <li className="flex flex-col items-center space-y-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600  px-5 py-6  rounded-xl dark:hover:text-blue-600 ">
          <FaEnvelope className="text-xl text-gray-700 dark:text-white" />
          {/* <FaUserAlt className="text-xl text-[#E93B81]" /> */}
          <p>Contacts</p>
        </li>
      </ul>
    </div>
  );
};

export default Navigation;
