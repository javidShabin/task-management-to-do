import { CircleUserRound } from "lucide-react";
import React from "react";
import { logo } from "../assets";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 left-0">
      <div className="container mx-auto flex justify-between items-center px-4 py-1">
        <div className="logo">
          <img src={logo} className="w-[50px]" />
        </div>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <Link to={"/"} className="hover:text-gray-400">
              Home
              </Link>
            </li>
            <li>
              <Link to={"/list"} className="hover:text-gray-400">
                Tasks
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
