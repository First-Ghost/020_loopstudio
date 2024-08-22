import React from "react";
import logo from "../imgs/images/logo.svg";
import facebook from "../imgs/images/icon-facebook.svg";
import twitter from "../imgs/images/icon-twitter.svg";
import pint from "../imgs/images/icon-pinterest.svg";
import ig from "../imgs/images/icon-instagram.svg";

export const Footer = () => {
  return (
    <div className="absolute md:top-[2500px] top-[2750px] h-[470px] w-full md:h-[160px] bg-black text-white">
      <div className="md:w-[1110px] w-full md:h-[75px] h-[360px] mx-auto mt-[40px] flex flex-col md:flex-row justify-between items-center md:items-start">
        <div className="flex flex-col justify-center md:justify-between md:h-[75px] md:w-auto ">
          <div className="">
            <img src={logo} alt="logo" className="mb-6 md:mb-0" />
          </div>
          <div className="flex flex-col md:flex-row mt-4 md:mt-0 text-center md:text-left">
            <p className="text-[white] mb-3 md:mb-0 hover:cursor-pointer hover:underline">
              About
            </p>
            <p className="text-[white] mb-3 md:mb-0 px-0 md:px-5 hover:cursor-pointer hover:underline">
              Careers
            </p>
            <p className="text-[white] mb-3 md:mb-0 px-0 md:px-5 hover:cursor-pointer hover:underline">
              Events
            </p>
            <p className="text-[white] mb-3 md:mb-0 px-0 md:px-5 hover:cursor-pointer hover:underline">
              Products
            </p>
            <p className="text-[white] mb-3 md:mb-0 px-0 md:px-5 hover:cursor-pointer hover:underline">
              Support
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center md:justify-between md:h-[75px] mt-4 md:mt-0 md:ml-auto">
          <div className="flex justify-center md:justify-end mt-6 md:mt-0">
            <img
              className="pl-3 hover:cursor-pointer"
              src={facebook}
              alt="facebook"
            />
            <img
              className="pl-3 hover:cursor-pointer"
              src={twitter}
              alt="twitter"
            />
            <img
              className="pl-3 hover:cursor-pointer"
              src={pint}
              alt="pinterest"
            />
            <img
              className="pl-3 hover:cursor-pointer"
              src={ig}
              alt="instagram"
            />
          </div>
          <div className="mt-4 md:mt-0 text-center md:text-right">
            <p className="text-gray-400">
              © 2021 Loopstudios. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
