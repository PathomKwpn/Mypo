import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiAlignJustify, FiMenu, FiX } from "react-icons/fi";
import { HashLink } from "react-router-hash-link";
const NavbarHome = () => {
  const [clickMenu, setClickMenu] = useState(false);
  const handleClick = () => setClickMenu(!clickMenu);
  return (
    <nav className="flex items-center justify-between bg-white h-[80px] w-full sticky z-50">
      <div className="flex justify-between w-[100%] text-[black] mx-[3rem] ">
        <div className="text-[30px] font-extrabold">PATHOM</div>
        <ul className="gap-[20px] hidden sm:flex items-center xl:gap-[40px]">
          <li className="hover:border-b-2 border-black">
            <Link className="font-bold xl:text-xl " to="/">
              HOME
            </Link>
          </li>
          <li className="hover:border-b-2 border-black">
            <HashLink className=" font-bold xl:text-xl" smooth to="#about-me">
              ABOUT
            </HashLink>
          </li>
          <li className="hover:border-b-2 border-black">
            <HashLink className=" font-bold xl:text-xl" smooth to="#projects">
              PROJECTS
            </HashLink>
          </li>
          <li className="hover:border-b-2 border-black">
            <HashLink className=" font-bold xl:text-xl" smooth to="#contact">
              CONTACT
            </HashLink>
          </li>
        </ul>
        <ul
          className={
            !clickMenu
              ? "hidden"
              : "gap-[40px] absolute md:hidden w-full h-screen top-[80px] left-0 bg-gray-500 flex flex-col items-center pt-[30px]"
          }
        >
          <li className="hover:border-b-2 border-[white]">
            <HashLink className="font-bold  text-[25px]" smooth to="/">
              Home
            </HashLink>
          </li>
          <li className="hover:border-b-2">
            <HashLink className="font-bold text-[25px]" smooth to="#about">
              About
            </HashLink>
          </li>
          <li className="hover:border-b-2">
            <HashLink className="font-bold text-[25px]" smooth to="#projects">
              Project
            </HashLink>
          </li>
          <li className="hover:border-b-2">
            <HashLink className="font-bold text-[25px]" smooth to="#contact">
              Contact
            </HashLink>
          </li>
        </ul>
        <div className="flex text-[40px] sm:hidden" onClick={handleClick}>
          {clickMenu ? <FiX /> : <FiMenu />}
        </div>
      </div>
    </nav>
  );
};

export default NavbarHome;
