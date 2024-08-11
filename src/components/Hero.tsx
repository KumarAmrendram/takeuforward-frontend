import React from "react";
import heroImage from "../assets/hero-image.avif";
import Banner from "./Banner";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <div className="bg-gradient-to-r from-red-600 to-gray-900 dark:from-gray-800 dark:to-black">
      <Banner />
      <div className="flex px-20">
        <div className="w-1/2 flex flex-col justify-center items-start bg-gradient-to-r from-gray-200 via-white to-gray-500 dark:from-gray-700 dark:via-gray-900 dark:to-gray-800 text-transparent bg-clip-text dark:bg-clip-text dark:text-white">
          <p className="text-[70px] font-bold leading-tight">
            We built a developer platform so you don’t have to.
          </p>
          <p className="text-2xl pt-10">
            Run in your own cloud. Deliver developer self-service. Drive
            development velocity.
          </p>
          <Button className="mt-10 w-36 py-6 text-lg">Get Started</Button>
        </div>
        <div className="w-1/2 p-20">
          <img src={heroImage} alt="hero image" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
