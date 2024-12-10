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
    <nav className="p-4 bg-white dark:bg-gray-800 rounded-full w-[40%] ">
      <ul className="sm:flex space-x-3 justify-center items-center sm:pl-4 sm:pr-4 ">
        <li className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-4  rounded-xl dark:hover:text-blue-600 ">
          <FaUserAlt className="text-xl text-[#E93B81]" />
          <p>About</p>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-4 rounded-xl dark:hover:text-blue-600 ">
          <FaFileAlt className="text-xl text-[#6AB5B9]" />
          <p>Resume</p>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-4 rounded-xl dark:hover:text-blue-600 ">
          <FaBriefcase className="text-xl text-[#FD7590]" />
          <p>Works</p>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-4 rounded-xl dark:hover:text-blue-600 ">
          <FaBlog className="text-xl text-[#C17CEB]" />
          <p>Blogs</p>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-4 rounded-xl dark:hover:text-blue-600 ">
          <FaEnvelope className="text-xl text-[#26ebe1]" />
          <p>Contact</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
