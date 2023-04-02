import React, { useState } from "react";
import { navLinks } from "../constants";
import logo from "../assets/logo.svg";
import close from "../assets/close.svg";
import menu from "../assets/menu.svg";
const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  return (
    <nav className="w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-[124px] h-[32px]" />
      <ul className="hidden sm:flex list-none  justify-end items-center flex-1 space-x-5">
        {navLinks.map((nav, index) => (
          <li
            key={nav.id}
            className={`font-poppins font-normal text-[16px]  text-white`}
            //  ${index === navLinks.length - 1 ? "mr-0" : "mr-10"}
          >
            <a href={`#${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
      <div className="flex flex-1 justify-end items-center sm:hidden ">
        <img
          src={toggle ? close : menu}
          alt="menu"
          className="w-[28px] h-[28px] object-contain"
          onClick={() => setToggle((prev) => !prev)}
        />
      </div>
      <div
        className={`${
          toggle ? "flex" : "hidden"
        } p-6 bg-black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}
      >
        <ul className="flex flex-col  list-none justify-end items-center flex-1 space-y-5">
          {navLinks.map((nav, index) => (
            <li
              key={nav.id}
              className="font-poppins font-normal text-[16px] text-white"
                // ${index=== navLinks.length-1? mb-0:mb-10}
            >
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
