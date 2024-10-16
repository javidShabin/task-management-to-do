import { CircleUserRound } from "lucide-react";
import React from "react";

const Header = () => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 left-0">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="logo">
          <h1 className="text-2xl font-bold">To-Do</h1>
        </div>
        <nav>
          <ul className="flex items-center space-x-6">
            <li>
              <a href="#" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:text-gray-400">
                Tasks
              </a>
            </li>
          </ul>
        </nav>
        <div className="flex gap-10 items-center">
          <button className="bg-violet-600 hover:bg-violet-700 text-white font-semibold py-2 px-4 rounded transition duration-300">
            Join
          </button>
          <CircleUserRound className="h-8 w-8 text-white hover:text-gray-400 cursor-pointer" />
        </div>
      </div>
    </header>
  );
};

export default Header;
