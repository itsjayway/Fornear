import React from 'react';
import Logo from './Logo';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between flex-wrap bg-[#ffdd00] p-6">
      <div className="flex items-center flex-shrink-0 text-black mr-6">
        <Logo />
        <span className="font-semibold text-xl tracking-tight">
          Fornear @ OU
        </span>
      </div>
      <div className="block lg:hidden">
        <button
          type="button"
          className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white"
        >
          <svg
            className="fill-current h-3 w-3"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
          </svg>
        </button>
      </div>
      <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
        <div className="text-xl lg:flex-grow">
          <a
            href="/"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-accent-blue mr-4"
          >
            Home
          </a>
          <a
            href="/requests"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-accent-blue mr-4"
          >
            Requests
          </a>
          <a
            href="/staff"
            className="block mt-4 lg:inline-block lg:mt-0 text-black hover:text-accent-blue"
          >
            Staff
          </a>
        </div>
      </div>
    </nav>
  );
}
