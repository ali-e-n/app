import React from "react";
import Image from "next/image";
import {
  FaLinkedin,
  FaTwitter,
  FaGithub,
  FaMobile,
  FaBuilding,
  FaEnvelope,
  FaInstagram,
  FaFacebook,
} from "react-icons/fa";
import { FiMail, FiMapPin, FiDownload } from "react-icons/fi";

const Profile = () => {
  return (
    <div className="w-full xl:w-[22%] sm:px-10 xl:px-0 pt-0 xl:sticky top-1 ">
      <div className="flex flex-col items-center justify-center space-y-4 rounded-3xl bg-white dark:bg-black dark:text-white  text-gray-700 p-7 xl:relative pb-7 pt-7">
        {/* Image */}
        <div className="xl:absolute xl:-top-32 z-0 relative xl:bottom-32 w-[210px] h-[210px]  rounded-2xl overflow-hidden shadow-lg">
          <Image
            src="/dp.jpeg"
            alt="Profile"
            layout="fill"
            objectFit="cover"
            className=""
          />
        </div>

        {/* Intro */}
        <div className="xl:pt-20  flex flex-col items-center space-y-2 justify-center ">
          <h1 className="text-2xl font-bold">Ali Akbar Khan</h1>
          <p className="text-base  text-gray-700 dark:text-gray-300   dark:bg-gray-900 bg-[#f3f6f6]  rounded-md  px-3 py-2 ">
            Frontend Developer
          </p>
        </div>

        {/* Social */}
        <div className="w-full xl:w-auto flex justify-center mb-3">
          <ul className="social flex justify-center items-center space-x-2">
            <li className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-3 rounded-xl sticky top-0">
              <FaTwitter className="text-base text-[#E93B81]" />
            </li>
            <li className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-3 rounded-xl">
              <FaLinkedin className="text-base text-[#6AB5B9]" />
            </li>
            <li className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-3 rounded-xl">
              <FaGithub className="text-base text-[#FD7590]" />
            </li>
            <li className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-3 rounded-xl">
              <FaInstagram className="text-base text-[#C17CEB]" />
            </li>
            <li className="cursor-pointer text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:bg-gray-900 bg-[#f3f6f6] p-3 rounded-xl">
              <FaFacebook className="text-base text-[#26ebe1]" />
            </li>
          </ul>
        </div>
        {/* Address */}
        <div className="w-full">
          <div className="flex flex-col items-start justify-center px-9 py-7 space-y-5 bg-[#f3f6f6] dark:bg-gray-900 rounded-lg text-base  text-gray-700 dark:text-gray-300 mb-3 xl:w-auto w-full">
            <div className="flex items-center space-x-4 border-b dark:border-gray-600 border-gray-300 w-full pb-2">
              <FaMobile className="text-2xl text-[#E93B81]" />
              <div>
                <p className="text-xs  text-gray-500">Phone</p>
                <p className="text-lg ">+123 456 7890</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 border-b dark:border-gray-600 border-gray-300 w-full pb-2">
              <FaEnvelope className="text-2xl text-[#6AB5B9]" />
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-lg   ">aliakbarkhan161 @gmail.com</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 border-b dark:border-gray-600 border-gray-300 w-full pb-2">
              <FiMapPin className="text-2xl text-[#FD7590]" />
              <div>
                <p className="text-xs text-gray-500">Location</p>
                <p className="text-lg">Gilgit-Baltistan, Pakistan</p>
              </div>
            </div>
            <div className="flex items-center space-x-4 w-full">
              <FaBuilding className="text-2xl text-[#C17CEB]" />
              <div>
                <p className="text-xs text-gray-500">Company</p>
                <a
                  className="text-lg hover:underline"
                  href="https://www.supperclubme.com"
                >
                  SupperClub Middle East
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="bg-blue-600 rounded-xl px-4 py-3 flex items-center justify-center space-x-3 text-white text-md">
          <FiDownload />
          <button>
            <a href="#">Download Resume</a>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;
