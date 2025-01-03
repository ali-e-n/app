"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const Carousal = () => {
  const images = [
    "/random1.svg",
    "/random2.svg",
    "/random3.svg",
    "/random4.svg",
  ];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval); // Clear interval on component unmount
  }, [images.length]);

  return (
    <div className="logo-carousel flex justify-center items-center gap-4 h-32 w-full overflow-hidden">
      <div className="flex items-center justify-center transition-transform duration-800 slide-left">
        <Image
          src={images[index]}
          alt={`Image ${index}`}
          width={50}
          height={50}
          className="w-32 h-32"
        />
      </div>
      <div className="flex items-center justify-center transition-translate duration-800 animate-fadeInLeft">
        <Image
          src={images[index]}
          alt={`Image ${index}`}
          width={50}
          height={50}
          className="w-32 h-32"
        />
      </div>
    </div>
  );
};

export default Carousal;
