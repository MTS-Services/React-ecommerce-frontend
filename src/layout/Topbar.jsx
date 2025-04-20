import React from "react";
import { GoMail } from "react-icons/go";
import { HiOutlinePhone } from "react-icons/hi";
import { SlSocialFacebook } from "react-icons/sl";
import { TfiTwitter } from "react-icons/tfi";
import { RxInstagramLogo } from "react-icons/rx";

const Topbar = (isScrolled) => {
  return (
    <div
      className={`items-center justify-between border-b border-gray-200 pb-2 text-lg lg:flex ${isScrolled ? "mt-2 mb-2" : "mb-2"}`}
    >
      <div className="flex items-center space-x-4">
        <div className="flex items-center text-gray-600">
          <span className="">
            <GoMail size={18} />
          </span>
          <p className="ml-1 text-sm font-medium">
            contact@maktechsolution.com
          </p>
        </div>
        <div className="flex items-center text-gray-600">
          <span className="">
            <HiOutlinePhone size={18} />
          </span>
          <p className="ml-1 text-sm font-medium">+880 1886-159495 </p>
        </div>
      </div>
      <div className="flex items-center space-x-3">
        <a
          href="#"
          className="text-gray-600 transition-colors hover:text-[#19B2E7]"
        >
          <span alt="Facebook">
            <SlSocialFacebook size={20} />
          </span>
        </a>
        <a
          href="#"
          className="text-gray-600 transition-colors hover:text-[#19B2E7]"
        >
          <span alt="Twitter">
            <TfiTwitter size={20} />
          </span>
        </a>
        <a
          href="#"
          className="text-gray-600 transition-colors hover:text-[#19B2E7]"
        >
          <span alt="Instagram">
            <RxInstagramLogo size={20} />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Topbar;
