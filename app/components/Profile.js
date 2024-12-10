import React from "react";
import Image from "next/image";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMobile,
  FaBuilding,
} from "react-icons/fa";

import { FiMail, FiMapPin, FiGlobe, FiDownload } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="profile dark:bg-gray-800 w-[23%] bg-white dark:text-white text-gray-700 space-y-4 rounded-2xl  flex flex-col items-center justify-between pb-5 pt-3">
      <Image
        src={"/dp.jpeg"}
        width={200}
        height={200}
        className="rounded-2xl -mt-36"
      />
      <p className="dark:text-white text-gray-700 text-2xl font-bold -mt-10 w-fit">
        Ali Akbar Khan
      </p>
      <p className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 text-sm -mt-10 dark:bg-gray-900 bg-[#f3f6f6] pt-2 pr-5 pl-5 pb-2 rounded-lg dark:hover:text-blue-600 ">
        Frontend Developer
      </p>

      {/* Icons  */}

      <div>
        <ul className="social flex justify-center items-center space-x-1  w-fit">
          <li className="cursor-pointer text-md text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-4 rounded-xl dark:hover:text-blue-600 ">
            <FaTwitter className="text-xl" />
          </li>
          <li className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-4 rounded-xl dark:hover:text-blue-600 ">
            <FaLinkedin className="text-xl" />
          </li>

          <li className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-4 rounded-xl dark:hover:text-blue-600 ">
            <FaGithub className="text-xl" />
          </li>
        </ul>
      </div>

      {/* Address  */}

      <div className="flex flex-col items-start justify-center mt-5 pt-5 pb-5 pl-6  text-lg  pr-6 space-y-4 bg-[#f3f6f6] dark:bg-gray-900 rounded-lg text-gray-700 dark:text-gray-300 shadow-lg ">
        {/* Phone */}
        <div className="flex items-center space-x-3 border-b dark:border-gray-600 border-gray-300 w-full">
          <FaMobile className="text-xl text-[#E93B81]" />
          <div>
            <p className="text-xs text-gray-500">Phone</p>
            <p className="text-lg pb-2">+123 456 7890</p>
          </div>
        </div>

        {/* Email */}
        <div className="flex items-center space-x-3 border-b dark:border-gray-600 border-gray-300 w-full">
          <FiMail className="text-xl text-[#6AB5B9]" />
          <div>
            <p className="text-xs text-gray-500">Email</p>
            <p className="text-lg pb-2">aliakbarkhan161@gmail.com</p>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center space-x-3 border-b dark:border-gray-600 border-gray-300 w-full">
          <FiMapPin className="text-xl text-[#FD7590]" />
          <div>
            <p className="text-xs text-gray-500">Location</p>
            <p className="text-lg pb-2 ">Gilgit-Baltistan, Pakistan</p>
          </div>
        </div>

        {/* Website */}
        <div className="flex items-center space-x-3 border-b dark:border-gray-600 border-gray-300 w-full">
          <FaBuilding className="text-xl text-[#C17CEB]" />
          <div>
            <p className="text-xs text-gray-500">Company</p>
            <a className="text-lg pb-3" href="https://www.supperclubme.com">
              SupperClub Middle East
            </a>
          </div>
        </div>
      </div>
      <div className=" bg-blue-600 rounded-xl pl-5 pr-5 pb-2 pt-2 flex items-center justify-center space-x-2 text-lg mb-5 text-white dark:text-white">
        <FiDownload className="" />

        <button className=" ">
          <a href="">Download Resume</a>
        </button>
      </div>
    </div>
  );
};

export default Profile;
