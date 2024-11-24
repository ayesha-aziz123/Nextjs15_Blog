"use client";

import Link from "next/link";
import Image from "next/image";
import { MdOutlineClose, MdOutlineMenu } from "react-icons/md";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [isMenuopen, setMenuopen] = useState(false);

  function toggle() {
    setMenuopen(!isMenuopen);
  }

  useEffect(() => {
    const sidebar = document.querySelector(".navbar") as HTMLElement;

    if (sidebar) {
      if (isMenuopen) {
        sidebar.style.display = "block";
      } else {
        sidebar.style.display = "none";
      }
    }
  }, [isMenuopen]);

  return (
    <div className="bg-gray-100 w-full border-b-[1px] border-gray-500 ">
      <div className=" flex justify-between items-center mx-6 py-3">
        <div className="lg:flex items-center hidden ">
          <Image
            className=" rounded-lg"
            src={"/next-logo.jpeg"}
            alt={"logo"}
            width={50}
            height={50}
          />
          <h1 className="font-[800] text-[23px] ml-3">Next.js 15</h1>
        </div>

        {/* Icon toggle for Mobile Menu */}
        <div onClick={toggle} className="lg:hidden block cursor-pointer">
          <div
            className={`transition-transform duration-300 ease-linear ${
              isMenuopen ? "rotate-90" : "rotate-0"
            }`}
          >
            {isMenuopen ? (
              <MdOutlineClose size={30} /> // Close Icon
            ) : (
              <MdOutlineMenu size={30} /> // Menu Icon
            )}
          </div>
        </div>

        {/* Mobile  */}
        <div>
          <ul className="navbar hidden absolute left-0 top-[66px] rounded-r-md rounded-b-md   items-center border-[1px] border-gray-500 justify-center w-[60%] h-[30vh] bg-[#fffffff0] text-black  flex-col px-9 py-5 font-semibold">
            <li className="py-3 border-b-[1px] border-b-black">
              <Link href={"/"} onClick={toggle}>
                Home
              </Link>
            </li>
            <li className="py-3 border-b-[1px] border-b-black">
              <Link href={"/about"} onClick={toggle}>
                About
              </Link>
            </li>
            <li className="py-3 border-b-[1px] ">
              <Link href={"/contact"} onClick={toggle}>
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Desktop */}
        <div className="md:flex justify-center items-center gap-x-4 lg:gap-x-14">
          <ul className="hidden lg:flex space-x-8 text-xl font-semibold text-gray-500">
            <li className="hover:text-blue-800">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link href={"/about"}>About</Link>
            </li>
            <li className="hover:text-blue-800">
              <Link href={"/contact"}>Contact</Link>
            </li>
          </ul>
          <div className="bg-black text-white lg:px-5 lg:py-2 px-3 py-2 lg:text-[18px] text-[14px] border-2 rounded-lg hover:bg-white hover:text-black hover:border-2 hover:border-black hover:transition-all duration-150">
            <Link target="_blank" href={"https://nextjs.org/blog/next-15"}>
              Documentation
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
