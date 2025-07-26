"use client";

import Link from "next/link";

const NavOptions = (
  <>
    <li>
      <Link href="#about">About</Link>
    </li>
    <li>
      <Link href="#instructors">Instructors</Link>
    </li>
    <li>
      <Link href="#features">Features</Link>
    </li>
    <li>
      <Link href="#contact">Contact</Link>
    </li>
  </>
);

const Navbar = () => {
  return (
    <div className="fixed z-10 w-full px-4 py-3 text-black shadow-lg bg-opacity-30 backdrop-blur-md navbar bg-base-100">
      {/* Navbar Start */}
      <div className="navbar-start">
        {/* Mobile Dropdown */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {NavOptions}
          </ul>
        </div>

        <div className="flex items-center gap-3 ml-4">
          <h1 className="font-extrabold tracking-tight lg:text-3xl">
            IELTS-Course-Clone
          </h1>
        </div>
      </div>

      {/* Navbar Center */}
      <div className="hidden navbar-center lg:flex">
        <ul className="px-1 space-x-4 text-lg font-medium menu menu-horizontal">
          {NavOptions}
        </ul>
      </div>

      {/* Navbar End */}
      <div className="pr-6 navbar-end">
        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
