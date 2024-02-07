import React from "react";
import Image from "next/image";
import { FiChevronDown } from "react-icons/fi";
import { MdOutlineLocationOn } from "react-icons/md";
import { FaPlaceOfWorship } from "react-icons/fa";

const NavbarBottom = () => {
  return (
    <div className="max-w-container mx-auto py-2 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-2">
          <Image
            src="/assets/images/phoneImg.webp
                "
            alt="phoneImmg"
            width={24}
            height={20}
          />
          <p className="text-sm  font-semibold">How do you want your items?</p>
          <FiChevronDown />
          <span className="w-[1px] h-4 bg-white inline-flex  ml-2"></span>
        </div>

        <div className="flex items-center gap-2">
          <MdOutlineLocationOn />
          <p className="text-sm text-zinc-100">Dhaka-1212</p>
          <FaPlaceOfWorship />
          <p className="text-sm text-zinc-100">Bangladesh</p>
        </div>
      </div>
      <ul className="flex gap-6 text-sm font-semibold">
        <li className="bottomNavLi">Deals</li>
        <li className="bottomNavLi">Easter</li>
        <li className="bottomNavLi">Grocer & essentials</li>
        <li className="bottomNavLi">Home</li>
        <li className="bottomNavLi">Tech</li>
        <li className="bottomNavLi">Fashion</li>

        <li className="bottomNavLi">Auto</li>
        <li className="bottomNavLi">Walmar+</li>
      </ul>
    </div>
  );
};

export default NavbarBottom;
