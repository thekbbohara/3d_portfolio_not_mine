"use client";
import React from "react";
const Navbar = () => {
  return (
    <div
    >
      <nav className="flex justify-between items-center px-8 py-5 shadow-lg text-white">
        <div
        >
          <div className="flex items-center justify-between gap-2">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="md:hidden "
              onClick={() => {
                const dropdown_nav = document.querySelector("#dropdown_nav");
                dropdown_nav.classList.toggle("hidden");
                dropdown_nav.classList.toggle("flex");
              }}
            >
              <path
                d="M4 6H20M4 12H20M4 18H20"
                stroke="#000000"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <h1 className="font-bold md:text-[25px] text-[18px]">
              Tasin.Dev
            </h1>
          </div>
        </div>
        <ul className=" gap-10 items-center ml-auto max-md:hidden">
          <a href={"#"} onClick={() => {
            window.scrollTo(0, 0);
          }} className="px-5 text-[17px] cursor-pointer">Home</a>
          <a href={"#about"} className="px-5 text-[17px]">About</a>
          <a href={"#projects"} className="px-5 text-[17px]">Projects</a>
          <a href={"#Contact"} className="px-5 text-[17px]">Contact</a>
        </ul>
      </nav>
      <ul
        id="dropdown_nav"
        className=" md:hidden gap-3 mt-2 hidden flex-col self-start"
      >
        <a href={"#"} onClick={() => {
            window.scrollTo(0, 0);
          }} className="px-5 text-[17px] cursor-pointer">Home</a>
          <a href={"#about"} className="px-5 text-[17px]">About</a>
          <a href={"#projects"} className="px-5 text-[17px]">Projects</a>
          <a href={"#Contact"} className="px-5 text-[17px]">Contact</a>
      </ul>
    </div>
  );
};

export default Navbar;
