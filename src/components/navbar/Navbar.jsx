import React from "react";
import dollarImg from "../../assets/dollar 1.png";
import logoImg from "../../assets/logo.png";

const Navbar = ({ coin }) => {
  return (
    <div className="sticky top-0 z-50 bg-white/80 backdrop-blur-md">
      <div className="navbar container mx-auto py-4 flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex-1">
          <a className="cursor-pointer">
            <img src={logoImg} alt="Logo" className="w-16" />
          </a>
        </div>

        {/* Navigation Links & Coin Button */}
        <div className="flex items-center gap-12">
          {/* Menu Items */}
          <ul className="hidden md:flex items-center gap-8 text-gray-600 font-medium">
            <li className="hover:text-black cursor-pointer transition">Home</li>
            <li className="hover:text-black cursor-pointer transition">Fixture</li>
            <li className="hover:text-black cursor-pointer transition">Teams</li>
            <li className="hover:text-black cursor-pointer transition">Schedules</li>
          </ul>

          {/* Coin Display Button */}
          <div className="flex-none">
            <button className="flex items-center gap-2 font-bold text-lg border border-gray-200 px-5 py-3 rounded-xl shadow-sm hover:shadow-md transition">
              <span>{coin} Coin</span>
              <img src={dollarImg} alt="Coin" className="w-6 h-6" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;