import React from "react";
import { HiMiniDevicePhoneMobile } from "react-icons/hi2";
import { GrMailOption } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";

const ContactCard = () => {
  return (
    <div className="w-full bg-light-black rounded-lg px-4 py-8">
      <div>
        <div className="flex space-x-3 items-center pb-3 border-b border-b-gray-700">
          <span className="bg-common-white p-1 rounded-md">
            <HiMiniDevicePhoneMobile className="text-rose-400 w-6 h-6" />
          </span>
          <div>
            <p className="text-xs mb-[6px]">Phone</p>
            <p className="text-sm text-common-black">+2534567890</p>
          </div>
        </div>
        <div className="flex space-x-3 items-center pb-3 border-b border-b-gray-700 pt-2">
          <span className="bg-common-white p-1 rounded-md">
            <GrMailOption className="text-theme-primary w-6 h-6" />
          </span>
          <div>
            <p className="text-xs mb-[6px]">Email</p>
            <p className="text-sm text-common-black">KibreabAklilu@gmail.com</p>
          </div>
        </div>
        <div className="flex space-x-3 items-center pb-3 pt-2">
          <span className="bg-common-white p-1 rounded-md">
            <FaLocationDot className="text-theme-secondary w-6 h-6" />
          </span>
          <div>
            <p className="text-xs mb-[6px]">Location</p>
            <p className="text-sm text-common-black">Addis Ababa Ethiopia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
