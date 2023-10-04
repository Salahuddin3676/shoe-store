import React, { useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { menuLinks } from "../data";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="flex bg-white  flex-col md:flex-row items-center justify-between py-5 px-6 md:px-16 lg:px-20 lg:h-16">
      <div className="flex gap-5 items-center w-full justify-between">
        <a
          href="#home"
          className=" cursor-pointer font-poppins font-bold text-xl text-blue-900 border-2 border-gray-500 px-1"
        >
          SHOESTORE
        </a>
        <ul className="hidden lg:flex items-center gap-12 items-left">
          {menuLinks.map((link) => {
            const { id, url, title } = link;
            return (
              <li key={id}>
                <a className="hover:text-indigo-800 font-montserrat" href={url}>
                  {title}
                </a>
              </li>
            );
          })}
          <div className="flex ml-5 gap-2 ">
            <p className="font-semibold font-montserrat text-indigo-800">
              $284.56
            </p>
            <BsFillHandbagFill className="text-xl cursor-pointer hover:text-indigo-800 text-indigo-700" />
          </div>
        </ul>

        <div
          onClick={() => setShowMenu(!showMenu)}
          className="border lg:hidden border-gray-400 cursor-pointer"
        >
          {showMenu ? (
            <AiOutlineClose className=" text-3xl" />
          ) : (
            <BiMenu className=" text-3xl" />
          )}
        </div>
      </div>
      {showMenu && (
        <ul className="flex md:hidden mt-5 gap-4 flex-col w-full items-left">
          {menuLinks.map((link) => {
            const { id, url, title } = link;
            return (
              <li className="" key={id}>
                <a
                  className=" hover:text-blue-800 font-montserrat font-semibold"
                  href={url}
                >
                  {title}
                </a>
              </li>
            );
          })}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
