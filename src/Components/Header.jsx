import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import logo from "../assets/Images/logo.jpg";

const Header = ({ bgColor = "#00182e" }) => {
  const [showInfo, setShowInfo] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleRouteChange = () => {
    navigate("/products");
    setShowInfo(false);
    setMenuOpen(false);
  };

  return (
    <div className={`relative text-white`} style={{ backgroundColor: bgColor }}>
      <div className="flex items-center justify-between px-6 py-5 md:px-10">
        <Link
          to="/Home"
          className="flex items-center justify-center gap-2 text-lg font-bold">
          <img
            src={logo}
            alt="logo"
            className="w-[150px] bg-[#b8bfc5] text-white "
          />
        </Link>

        {/* Desktop Nav */}
        <div className="items-center hidden gap-10 md:flex">
          <div
            onClick={() => setShowInfo((prev) => !prev)}
            className="cursor-pointer relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
            Products
          </div>
          <Link
            to="/Content"
            className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
            Content
          </Link>
          <Link
            to="/Team"
            className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
            Team
          </Link>
          <Link
            to="/Purchase"
            className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
            Purchase
          </Link>
        </div>
        <div className="flex">
          <button
            className="hidden md:block p-2 hover:border-[#626ee3] hover:border-2 rounded-sm"
            onClick={() => {
              navigate("/");
            }}>
            Sign Up
          </button>
          <button
            className="hidden md:block p-2 hover:border-[#626ee3] hover:border-2 rounded-sm"
            onClick={() => {
              navigate("/Login");
            }}>
            Log In
          </button>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoClose size={24} /> : <GiHamburgerMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="flex flex-col gap-4 px-6 pb-4 md:hidden">
          <div
            onClick={() => setShowInfo(!showInfo)}
            className="cursor-pointer">
            Products
          </div>
          <Link to="/Content" onClick={() => setMenuOpen(false)}>
            Content
          </Link>
          <Link to="/Team" onClick={() => setMenuOpen(false)}>
            Team
          </Link>
          <Link to="/Purchase" onClick={() => setMenuOpen(false)}>
            Purchase
          </Link>
          <div>
            <button className="p-2 hover:border-[#626ee3] hover:border-2 rounded-sm">
              Log In
            </button>
          </div>
        </div>
      )}

      {showInfo && (
        <div
          onClick={handleRouteChange}
          className="cursor-pointer transition-all duration-300 absolute left-1/2 transform -translate-x-1/2 top-24 z-40 bg-white text-black p-4 rounded shadow-lg w-[90%] sm:w-auto">
          <h3 className="text-lg font-bold">FrontendExpert</h3>
          <p className="text-sm">Ace the frontend interviews</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowInfo(false);
            }}
            className="px-3 py-1 mt-4 text-white bg-red-500 rounded hover:bg-red-600">
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
