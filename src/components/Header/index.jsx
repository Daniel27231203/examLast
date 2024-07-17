import React from "react";
import { IoSearch } from "react-icons/io5";
import { TiShoppingCart } from "react-icons/ti";
import Logo from "../../assets/images/Logo.svg";
import { Link } from "react-router-dom";

function Header(props) {
  return (
    <header>
      <div className="container">
        <nav className="bg-white border-gray-200 dark:border-gray-600 dark:bg-gray-900">
          <div className="flex justify-between items-center py-[40px]">
            <Link
              to={"/admin"}
              href="https://flowbite.com"
              className="flex items-center space-x-3 rtl:space-x-reverse"
            >
              <img src={Logo} className="h-8" alt="organic Logo" />
              <span className="self-center text-2xl font-Roboto whitespace-nowrap font-extrabold">
                Organic
              </span>
            </Link>
            <div
              id="mega-menu-full"
              className="items-center justify-between font-medium mr-[250px]"
            >
              <ul className="flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <Link
                    to={"/"}
                    href="#"
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/about"}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                    aria-current="page"
                  >
                    About
                  </Link>
                </li>
                <li>
                  <button
                    id="mega-menu-full-dropdown-button"
                    data-collapse-toggle="mega-menu-full-dropdown"
                    className="flex items-center justify-between w-full py-2 px-3 font-bold text-gray-900 rounded md:w-auto hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-600 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Pages
                    <svg
                      className="w-2.5 h-2.5 ms-2.5"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 10 6"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                      />
                    </svg>
                  </button>
                </li>
                <li>
                  <Link
                    to={"/shop"}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Shop
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/project"}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/news"}
                    className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-blue-500 md:dark:hover:bg-transparent dark:border-gray-700"
                  >
                    News
                  </Link>
                </li>
              </ul>
            </div>
            <div className="flex items-center gap-5">
              <button className="  p-[10px] bg-green-500 text-white rounded-[50%]">
                <IoSearch />
              </button>
              <div className="flex items-center gap-2">
                <button className="  p-[10px] bg-green-900 text-white rounded-[50%]">
                  <TiShoppingCart />
                </button>
                <span>cart: 0</span>
              </div>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
