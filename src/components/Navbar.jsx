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
          <img src="/menu-bar.png" alt="logo" width={30} height={30} className="md:hidden" onClick={() => {
                const dropdown_nav = document.querySelector("#dropdown_nav");
                dropdown_nav.classList.toggle("hidden");
                dropdown_nav.classList.toggle("flex");
              }}/>
            <h1 className="font-bold md:text-[25px] text-[18px]">
              Tasin.Dev
            </h1>
          </div>
        </div>
        <ul className=" gap-10 items-center ml-auto max-md:hidden text-white">
          <a href={"#"} onClick={() => {
            window.scrollTo(0, 0);
          }} className="px-5 text-[17px] cursor-pointer text-white">Home</a>
          <a href={"#about"} className="px-5 text-[17px] text-white">About</a>
          <a href={"#projects"} className="px-5 text-[17px] text-white">Projects</a>
          <a href={"#Contact"} className="px-5 text-[17px] text-white">Contact</a>
        </ul>
      </nav>
      <ul
        id="dropdown_nav"
        className=" md:hidden gap-3 mt-2 hidden flex-col self-start text-white"
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
