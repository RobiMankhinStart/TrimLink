import React, { useState, useEffect } from "react";
import { Link, NavLink } from "react-router";
import { Scissors, Menu, X, Github } from "lucide-react";
import Button from "../utils/Button";
import MobileNavMenu from "./MobileNavMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/80 backdrop-blur-md border-b border-slate-200 shadow-sm"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="bg-indigo-600 p-2 rounded-xl group-hover:rotate-12 transition-transform duration-300">
              <Scissors className="text-white" size={24} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-slate-900">
              Trim<span className="text-indigo-600">Link</span>
            </h2>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-sm font-medium transition-colors hover:text-indigo-600 ${isActive ? "text-indigo-600" : "text-slate-600"}`
              }
            >
              Home
            </NavLink>
            <a
              href="#features"
              className="text-sm font-medium text-slate-600 hover:text-indigo-600 transition-colors"
            >
              Features
            </a>

            <div className="h-6 w-px bg-slate-200 mx-2"></div>

            <Link
              to="/login"
              className="text-sm font-semibold text-slate-700 hover:text-indigo-600 transition-colors"
            >
              Log in
            </Link>
            <Link to="/register">
              <Button size="sm" className="rounded-full shadow-indigo-100 px-6">
                Get Started
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-lg text-slate-600 hover:bg-slate-100 transition-colors"
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <MobileNavMenu isOpen={isOpen} />
    </nav>
  );
};

export default Navbar;
