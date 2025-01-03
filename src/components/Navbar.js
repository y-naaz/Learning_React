import React from "react";
import { useNavigate } from "react-router-dom";
import Logout from "./Logout"; 

const Navbar = ({ logoText, isTextVisible, setIsMobileMenuOpen, isMobileMenuOpen }) => {
  const navigate = useNavigate();

  return (
    <header className="bg-gray-900 shadow-md text-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo with fade transition */}
        <h1
          className={`text-2xl font-bold tracking-wide text-white hover:text-yellow-500 transition-colors logo-text ${isTextVisible ? "visible" : "hidden"}`}
        >
          {logoText}
        </h1>

        {/* Desktop Menu */}
        <nav className="flex space-x-6">
          {/* Portfolio */}
          <button
            className="relative group text-gray-300 hover:text-white transition-colors"
            onClick={() => navigate("/portfolio")}
          >
            Portfolio
            <div className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></div>
          </button>
          {/* Watchlist */}
          <button
            className="relative group text-gray-300 hover:text-white transition-colors"
            onClick={() => navigate("/watchlist")}
          >
            Watchlist
            <div className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></div>
          </button>
          {/* Market News */}
          <button
            className="relative group text-gray-300 hover:text-white transition-colors"
            onClick={() => navigate("/market-news")}
          >
            Market News
            <div className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-white transform -translate-x-1/2 transition-all duration-300 group-hover:w-full"></div>
          </button>
          {/* Logout */}
          <Logout />
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-gray-300 hover:text-white focus:outline-none"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-gray-800 text-white">
          <button
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => {
              navigate("/portfolio");
              setIsMobileMenuOpen(false);
            }}
          >
            Portfolio
          </button>
          <button
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => {
              navigate("/watchlist");
              setIsMobileMenuOpen(false);
            }}
          >
            Watchlist
          </button>
          <button
            className="block px-4 py-2 text-gray-300 hover:bg-gray-700 hover:text-white"
            onClick={() => {
              navigate("/market-news");
              setIsMobileMenuOpen(false);
            }}
          >
            Market News
          </button>
          <Logout />
        </div>
      )}
    </header>
  );
};

export default Navbar;
