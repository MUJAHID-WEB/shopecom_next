import React from "react";
import Image from "next/image";
import { BsCart2, BsSearch } from "react-icons/bs";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import NavbarBottom from "./NavbarBottom";
import Link from "next/link";

const Navbar = () => {
  return (
    <div className="w-full bg-blue text-white sticky top-0 z-50">
      <div className="w-full h-full border-b-[1px] border-b-white">
        <div className="max-w-container mx-auto h-20 px-4 flex items-center justify-between  gap-2">
          {/* Logo */}
          <Link href="/">
            <div className="navBarHover">
              <Image
                src="/assets/images/logo.png"
                width={180}
                height={30}
                className=""
                alt="logo"
              />
            </div>
          </Link>
          {/* Department */}
          <div className="navBarHover">
            <div className="w-4 grid grid-cols-2 gap-[2px]">
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] border-white inline-flex"></span>
            </div>

            <p className="text-base font-semibold">Department</p>
          </div>
          {/* Services */}
          <div className="navBarHover">
            <div className="w-4 grid grid-cols-2 gap-[2px]">
              <span className="w-1.5 h-1.5 border-[1px] rounded-md border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] rounded-md border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] rounded-md border-white inline-flex"></span>
              <span className="w-1.5 h-1.5 border-[1px] rounded-md border-white inline-flex"></span>
            </div>

            <p className="text-base font-semibold">Services</p>
          </div>

          {/* Search */}
          <div className="h-10 flex flex-1 relative">
            <input
              type="text"
              placeholder="Search evryything here"
              className="h-full w-full rounded-full px-4 text-black text-base outline-none border-[1px] border-transparent focus-visible:border-black duration-200"
            />
            <span className="absolute w-8 h-8 rounded-full flex items-center justify-center top-1 right-1 bg-yellow text-black text-xl">
              <BsSearch />
            </span>
          </div>

          {/* Favorite/ My Itemss */}
          <div className="navBarHover">
            <AiOutlineHeart className="text-lg" />
            <div>
              <p className="text-xs">Recorder</p>
              <h2 className="text-base font-semibold -mt-1">My Items</h2>
            </div>
          </div>

          {/* Accounts */}
          <div className="navBarHover">
            <AiOutlineUser className="text-lg" />
            <div>
              <p className="text-xs">Sign In</p>
              <h2 className="text-base font-semibold -mt-1">Account</h2>
            </div>
          </div>

          {/* Cart */}
          <Link href='/cart'>
            <div className="flex flex-col justify-center items-center gap-2 h-12 px-5 rounded-full bg-transparent hover:bg-hoverBg duration-300 relative">
              <BsCart2 className="text-2xl" />

              <p className="text-[10px]">$0.00</p>
              <span className="absolute w-4 h-4 bg-yellow text-black top-0 right-4 rounded-full flex items-center justify-center font-bodyFont text-xs">
                0
              </span>
            </div>
          </Link>

        </div>
      </div>
      <NavbarBottom />
    </div>
  );
};

export default Navbar;
