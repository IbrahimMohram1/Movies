import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen((prev) => !prev);
  };

  const closeNavbar = () => setIsOpen(false);

  return (
    <nav className="bg-white border-gray-200 dark:bg-gray-900">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to={"/"}>
          <li className="list-none">
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Movies
            </span>
          </li>
        </Link>

        <button
          type="button"
          className="inline-flex cursor-pointer items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden"
          onClick={toggleNavbar}
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* 👇 القائمة نفسها */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
          id="navbar-default"
        >
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 rounded-lg bg-gray-900 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0">
            <NavLink to={"/"} onClick={closeNavbar}>
              <li className="block py-2 px-3 ">Home</li>
            </NavLink>
            <NavLink onClick={closeNavbar} to={"/movies"}>
              <li className="block py-2 px-3 ">Movies</li>
            </NavLink>
            <NavLink onClick={closeNavbar} to={"/series"}>
              <li className="block py-2 px-3 ">Series</li>
            </NavLink>
            <NavLink onClick={closeNavbar} to={"/charactor"}>
              <li className="block py-2 px-3 ">Charactor</li>
            </NavLink>
          </ul>
        </div>
      </div>
    </nav>
  );
}
