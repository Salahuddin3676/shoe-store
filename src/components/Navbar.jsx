import React, { useEffect, useState } from "react";
import { BiMenu } from "react-icons/bi";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillHandbagFill } from "react-icons/bs";
import { menuLinks } from "../data";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <nav className="fixed top-0 left-0 z-50 flex flex-col items-center justify-between w-full px-6 py-5 border border-black shadow-md bg-slate-200 md:flex-row md:px-16 lg:px-20 lg:h-16">
      <div className="flex items-center justify-between w-full border border-blue-600">
        <a
          href="#home"
          className="px-1 text-xl font-bold text-blue-900 border-2 border-gray-500 cursor-pointer font-poppins"
        >
          SHOESTORE
        </a>
        <ul className="items-center hidden gap-12 lg:flex">
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
          <div className="hidden gap-2 lg:ml-5 lg:flex">
            <p className="font-semibold text-indigo-800 font-montserrat">
              $284.56
            </p>
            <BsFillHandbagFill className="text-xl text-indigo-700 cursor-pointer hover:text-indigo-800" />
          </div>
        </ul>

        <div
          onClick={() => setShowMenu(!showMenu)}
          className="border border-gray-400 cursor-pointer lg:hidden"
        >
          {showMenu ? (
            <AiOutlineClose className="text-3xl " />
          ) : (
            <BiMenu className="text-3xl " />
          )}
        </div>
      </div>

      {showMenu && (
        <ul className="flex flex-col w-full gap-4 mt-5 md:hidden items-left">
          {menuLinks.map((link) => {
            const { id, url, title } = link;
            return (
              <li className="" key={id}>
                <a
                  className="font-semibold hover:text-blue-800 font-montserrat"
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
