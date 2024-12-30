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
    <nav className=" bg-white dark:bg-black rounded-xl hidden xl:flex justify-center items-center mt-24 px-2 py-2 max-w-3xl w-full mx-auto">
      <ul className="sm:flex justify-be items-center space-x-4">
        <li className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600  px-5 py-6  rounded-xl dark:hover:text-blue-600 ">
          <FaUserAlt className="text-xl text-gray-700 dark:text-white" />
          {/* <FaUserAlt className="text-xl text-[#E93B81]" /> */}
          <p>About</p>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600  px-5 py-6  rounded-xl dark:hover:text-blue-600 ">
          <FaFileAlt className="text-xl text-gray-700 dark:text-white" />
          {/* <FaFileAlt className="text-xl text-[#6AB5B9]" /> */}
          <p>Resume</p>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600  px-5 py-6  rounded-xl dark:hover:text-blue-600 ">
          <FaBriefcase className="text-xl text-gray-700 dark:text-white" />
          {/* <FaBriefcase className="text-xl text-[#FD7590]" /> */}
          <p>Works</p>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600  px-5 py-6  rounded-xl dark:hover:text-blue-600 ">
          <FaBlog className="text-xl text-gray-700 dark:text-white" />
          {/* <FaBlog className="text-xl text-[#C17CEB]" /> */}
          <p>Blogs</p>
        </li>
        <li className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600  px-5 py-6  rounded-xl dark:hover:text-blue-600 ">
          <FaEnvelope className="text-xl text-gray-700 dark:text-white " />
          {/* <FaEnvelope className="text-xl text-[#26ebe1]" /> */}
          <p>Contact</p>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
