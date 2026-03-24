import React from "react";
import dollarImg from "../../assets/dollar 1.png"
import logoImg from "../../assets/logo.png"
const Navbar = () => {
  return (
    <div>
      <div className="navbar bg-base-100 container mx-auto mb-6 mt-6">
        <div className="flex-1">
          <a className="btn btn-ghost text-xl"><img src={logoImg} alt="" /></a>
        </div>
        <div className="flex-none">
          <button className="flex justify-between items-center gap-2 font-bold text-xl shadow-xl p-4 rounded-2xl">
            0 coins
            <img src={dollarImg} alt="Coin Image" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
