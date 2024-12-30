import React from "react";
import Image from "next/image";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMobile,
  FaBuilding,
} from "react-icons/fa";
import { FiMail, FiMapPin, FiDownload } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="profile dark:bg-gray-800 bg-white dark:text-white text-gray-700 space-y-6 rounded-2xl flex flex-col items-center justify-between max-w-md mx-auto">
      {/* Profile Image */}
      <Image
        src={"/dp.jpeg"}
        width={150}
        height={150}
        className="rounded-2xl -mt-16 sm:-mt-20 md:-mt-24 lg:-mt-28 object-cover"
        alt="Profile Picture"
      />

      {/* Name */}
      <p className="dark:text-white text-gray-700 text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold -mt-4 sm:-mt-6 md:-mt-8 lg:-mt-10 w-fit text-center">
        Ali Akbar Khan
      </p>

      {/* Role */}
      <p className="flex items-center space-x-2 cursor-pointer text-gray-700 dark:text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl -mt-4 sm:-mt-6 md:-mt-8 dark:bg-gray-900 bg-[#f3f6f6] py-2 px-6 rounded-lg">
        Frontend Developer
      </p>

      {/* Social Icons */}
      <div className="w-full flex justify-center">
        <ul className="social flex justify-center items-center space-x-4 sm:space-x-5 lg:space-x-6">
          <li className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-3 sm:p-4 lg:p-5 rounded-xl">
            <FaTwitter className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
          </li>
          <li className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-3 sm:p-4 lg:p-5 rounded-xl">
            <FaLinkedin className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
          </li>
          <li className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-3 sm:p-4 lg:p-5 rounded-xl">
            <FaGithub className="text-lg sm:text-xl md:text-2xl lg:text-3xl" />
          </li>
        </ul>
      </div>

      {/* Address Section */}
      <div className="flex flex-col items-start justify-center mt-5 py-6 px-5 sm:px-6 md:px-8 lg:px-10 space-y-5 bg-[#f3f6f6] dark:bg-gray-900 rounded-lg text-sm sm:text-base md:text-lg lg:text-xl text-gray-700 dark:text-gray-300 shadow-lg w-full">
        <div className="flex items-center space-x-4 border-b dark:border-gray-600 border-gray-300 w-full pb-2">
          <FaMobile className="text-xl md:text-2xl lg:text-3xl text-[#E93B81]" />
          <div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-500">
              Phone
            </p>
            <p className="text-base md:text-lg lg:text-xl">+123 456 7890</p>
          </div>
        </div>
        <div className="flex items-center space-x-4 border-b dark:border-gray-600 border-gray-300 w-full pb-2">
          <FiMail className="text-xl md:text-2xl lg:text-3xl text-[#6AB5B9]" />
          <div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-500">
              Email
            </p>
            <p className="text-base md:text-lg lg:text-xl">
              aliakbarkhan161@gmail.com
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 border-b dark:border-gray-600 border-gray-300 w-full pb-2">
          <FiMapPin className="text-xl md:text-2xl lg:text-3xl text-[#FD7590]" />
          <div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-500">
              Location
            </p>
            <p className="text-base md:text-lg lg:text-xl">
              Gilgit-Baltistan, Pakistan
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-4 w-full">
          <FaBuilding className="text-xl md:text-2xl lg:text-3xl text-[#C17CEB]" />
          <div>
            <p className="text-xs sm:text-sm lg:text-base text-gray-500">
              Company
            </p>
            <a
              className="text-base md:text-lg lg:text-xl hover:underline"
              href="https://www.supperclubme.com"
            >
              SupperClub Middle East
            </a>
          </div>
        </div>
      </div>

      {/* Download Button */}
      <div className="bg-blue-600 rounded-xl px-6 py-3 sm:py-4 sm:px-8 lg:py-5 lg:px-10 flex items-center justify-center space-x-3 text-white text-sm sm:text-base md:text-lg lg:text-xl w-full sm:w-auto">
        <FiDownload />
        <button>
          <a href="#">Download Resume</a>
        </button>
      </div>
    </div>
  );
};

export default Profile;
