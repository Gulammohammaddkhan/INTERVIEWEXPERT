import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Header = (bgColor) => {
  const [showInfo, setShowInfo] = useState(false);
  const navigate = useNavigate();

  const handleRouteChange = () => {
    navigate("/products");
    setShowInfo(false);
  };

  return (
    <div className="relative text-white bg-[#00182e] flex justify-evenly items-center pt-7 pb-7">
      <Link to={"/"}>INTERVIEW EXPERT</Link>
      <div className="flex justify-center gap-10 pl-17">
        <div
          onClick={() => setShowInfo((prev) => !prev)}
          className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
        >
          Products
        </div>
        <Link
          to="/Content"
          className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
        >
          Content
        </Link>
        <Link
          to="/Team"
          className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
        >
          Team
        </Link>
        <Link
          to="/Purchase"
          className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
        >
          Purchase
        </Link>
      </div>

      <button className="p-2 hover:border-[#626ee3] hover:border-2 rounded-sm cursor-pointer">
        Log In
      </button>

      {/* Yeh Div Click ke baad dikhega */}
      {showInfo && (
        <div
          onClick={handleRouteChange}
          to="/Products"
          className="cursor-pointer transition-all duration-300 absolute top-20 z-40 left-72 bg-white text-black p-4 rounded shadow-lg"
        >
          <h3 className="text-lg font-bold">FrontendExpert</h3>
          <p className="text-sm">Ace the frontend interviews</p>

          {/* Close Button bhi de diya */}
          <button
            onClick={() => setShowInfo(false)}
            className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
