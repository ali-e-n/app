"use client";
import React from "react";
import Image from "next/image";

export const Slides = () => {
  const images = [
    "/random3.svg",
    "/random2.svg",
    "/random3.svg",
    "/random4.svg",
  ];

  return (
    <div className="relative overflow-hidden w-full ">
      <div className="flex animate-slide justify-center items-center gap-7 space-x-2">
        {[...images, ...images].map(
          (
            image,
            index // Duplicate images for seamless loop
          ) => (
            <Image
              key={index}
              src={image}
              width={80}
              height={80}
              className="w-52 h-52 rounded-full"
              alt={`Image ${index}`}
            />
          )
        )}
        {[...images, ...images].map(
          (
            image,
            index // Duplicate images for seamless loop
          ) => (
            <Image
              key={index}
              src={image}
              width={80}
              height={80}
              className="w-52 h-52 rounded-full"
              alt={`Image ${index}`}
            />
          )
        )}
      </div>
    </div>
  );
};
