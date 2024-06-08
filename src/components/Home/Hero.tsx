import React from "react";
import Image from "next/image";
import ProfilePic from "@/../public/images/kb.png";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Hero = () => {
  return (
    <div className="flex flex-col items-center bg-common-white rounded-xl pt-8 p-4 ">
      <div className="px-10 flex flex-col items-center">
        <Image
          src={ProfilePic}
          alt="Profile Picture"
          className="bg-slate-500 rounded-2xl"
        />
        <h5 className="text-common-black font-semibold pt-5">Kibreab Aklilu</h5>
        <button className="text-sm text-body-text bg-light-black px-4 py-[7px] rounded-md">
          Fullstack Developer
        </button>
        <div className="pt-3 flex space-x-4 ">
          <span className="p-2 bg-light-black rounded-md text-common-black hover:bg-theme-secondary hover:text-white">
            <FaGithub className="w-5 h-5" />
          </span>
          <span className="p-2 bg-light-black text-[#FD1D1D] rounded-md hover:bg-theme-secondary hover:text-white">
            <FaInstagram className="w-5 h-5" />
          </span>
          <span className="p-2 bg-light-black rounded-md text-common-black hover:bg-theme-secondary hover:text-white">
            <FaXTwitter className="w-5 h-5" />
          </span>
          <span className="p-2 bg-light-black text-[#0077B5] rounded-md hover:bg-theme-secondary hover:text-white">
            <FaLinkedinIn className="w-5 h-5" />
          </span>
        </div>
      </div>
    </div>
  );
};

export default Hero;
