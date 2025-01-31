import React from "react";
import Image from "next/image";
import ProfilePic from "@/../public/images/kb.png";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter, FaDownload } from "react-icons/fa6";
import ContactCard from "./ContactCard";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="flex flex-col items-center bg-common-white rounded-xl py-8 p-4 ">
      <div className="px-10 flex flex-col items-center pb-8">
        <Image
          src={ProfilePic}
          alt="Profile Picture"
          className="bg-slate-500 rounded-2xl"
        />
        <h5 className="text-common-black font-semibold pt-5">Kibreab Aklilu</h5>
        <span className="text-sm text-body-text bg-light-black px-4 py-[7px] rounded-md">
          Fullstack Developer
        </span>
        <div className="pt-3 flex space-x-4 ">
          <Link
            href="https://github.com/Keba777"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-light-black rounded-md text-common-black hover:bg-theme-secondary hover:text-white"
          >
            <FaGithub className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.instagram.com/kay_bee112/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-light-black text-[#FD1D1D] rounded-md hover:bg-theme-secondary hover:text-white"
          >
            <FaInstagram className="w-5 h-5" />
          </Link>
          <Link
            href="https://x.com/KibreabAklilu1"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-light-black rounded-md text-common-black hover:bg-theme-secondary hover:text-white"
          >
            <FaXTwitter className="w-5 h-5" />
          </Link>
          <Link
            href="https://www.linkedin.com/in/kibreab-aklilu-40011a256/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 bg-light-black text-[#0077B5] rounded-md hover:bg-theme-secondary hover:text-white"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </Link>
        </div>
      </div>
      <ContactCard />

      <button className="mt-7 px-6 py-3 bg-theme-secondary text-white rounded-lg flex items-center">
        <FaDownload className="mr-2" /> Download Cv
      </button>
    </section>
  );
};

export default Hero;
