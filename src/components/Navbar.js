import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="mt-6 bg-gray-700 md:mt-14 ">
        <hr className="" />
        <ul className="flex flex-row space-x-16 font-bold text-white mt-3 md:justify-center md:text-3xl md:space-x-60">
          <li></li>
          <Link to="/" className=" hover:text-cyan-400">
            All
          </Link>
          <Link to="/images" className=" hover:text-emerald-400">
            Images
          </Link>
          <Link to="/videos" className=" hover:text-emerald-400">
            Videos
          </Link>
        </ul>
        <hr className="mt-3 " />
      </nav>
    </div>
  );
};

export default Navbar;
