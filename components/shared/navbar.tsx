import { BellDot, MenuIcon, Settings } from "lucide-react";
import Image from "next/image";
import React from "react";
import CodeQuesterLogo from "@/assets/Icons/code-quester-logo.svg";
import MenuItems from "../menuItems";
const Navbar = () => {
  return (
    <div className=" default-padding h-[80px] w-full flex flex-row items-center  justify-between sticky top-0 z-20  border-b ">
      <div className="md:hidden dropdown dropdown-hover ">
        <div
          tabIndex={0}
          role="button"
          className="btn m-1 bg-transparent shadow-none "
        >
          <MenuIcon />
        </div>
        <ul
          tabIndex={0}
          className="dropdown-content menu bg-base-100 rounded-box z-[1] p-2 shadow"
        >
          <MenuItems />
        </ul>
      </div>
      <div className="flex items-center ">
        <Image
          alt="image-logo"
          src={CodeQuesterLogo}
          width={"40"}
          height={"40"}
        />
        <h3>
          <span className=" text-[#257180]">Code</span>
          <span className="text-rose-400">Quester</span>
        </h3>
        <label className="md:flex hidden  input input-bordered  items-center gap-2 ml-[40px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 16 16"
            fill="currentColor"
            className="h-4 w-4 opacity-70"
          >
            <path
              fillRule="evenodd"
              d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
              clipRule="evenodd"
            />
          </svg>
          <input type="text" className="grow" placeholder="Search" />
        </label>
      </div>

      <div className="flex items-center space-x-4">
        <Settings />
        <BellDot />

        <div className="avatar">
          <div className="w-[34px] rounded-full">
            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
