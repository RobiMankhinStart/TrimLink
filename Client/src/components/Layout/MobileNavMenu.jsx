import React from "react";
import Button from "../utils/Button";
import { Link } from "react-router";

const MobileNavMenu = ({ isOpen }) => {
  return (
    <div
      className={`md:hidden absolute w-full bg-white border-b border-slate-200 transition-all duration-300 ease-in-out ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"}`}
    >
      <div className="px-4 pt-2 pb-6 space-y-2">
        <Link
          to="/"
          className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-xl"
        >
          Home
        </Link>
        <Link
          to="/login"
          className="block px-4 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 rounded-xl"
        >
          Login
        </Link>
        <div className="pt-4 px-4">
          <Link to="/register" className="w-full">
            <Button className="w-full justify-center">Sign Up Free</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MobileNavMenu;
