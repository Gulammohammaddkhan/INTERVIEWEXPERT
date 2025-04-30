import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// const Header = (bgColor) => {
//   const [showInfo, setShowInfo] = useState(false);
//   const navigate = useNavigate();

//   const handleRouteChange = () => {
//     navigate("/products");
//     setShowInfo(false);
//   };

//   return (
//     <div className="relative text-white bg-[#00182e] flex justify-evenly items-center pt-7 pb-7">
//       <Link to={"/"}>INTERVIEW EXPERT</Link>
//       <div className="flex justify-center gap-10 pl-17">
//         <div
//           onClick={() => setShowInfo((prev) => !prev)}
//           className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
//         >
//           Products
//         </div>
//         <Link
//           to="/Content"
//           className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
//         >
//           Content
//         </Link>
//         <Link
//           to="/Team"
//           className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
//         >
//           Team
//         </Link>
//         <Link
//           to="/Purchase"
//           className="relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
//         >
//           Purchase
//         </Link>
//       </div>

//       <button className="p-2 hover:border-[#626ee3] hover:border-2 rounded-sm cursor-pointer">
//         Log In
//       </button>

//       {showInfo && (
//         <div
//           onClick={handleRouteChange}
//           to="/Products"
//           className="cursor-pointer transition-all duration-300 absolute top-20 z-40 left-72 bg-white text-black p-4 rounded shadow-lg"
//         >
//           <h3 className="text-lg font-bold">FrontendExpert</h3>
//           <p className="text-sm">Ace the frontend interviews</p>

//           <button
//             onClick={() => setShowInfo(false)}
//             className="mt-4 bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
//           >
//             Close
//           </button>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Header;

// *************************************************************************

import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

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
      {/* Top bar */}
      <div className="flex justify-between items-center px-6 py-5 md:px-10">
        <Link to="/" className="text-lg font-bold">
          INTERVIEW EXPERT
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex gap-10 items-center">
          <div
            onClick={() => setShowInfo((prev) => !prev)}
            className="cursor-pointer relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100"
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

        <button className="hidden md:block p-2 hover:border-[#626ee3] hover:border-2 rounded-sm">
          Log In
        </button>

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
            className="cursor-pointer"
          >
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
          <button className="p-2 hover:border-[#626ee3] hover:border-2 rounded-sm">
            Log In
          </button>
        </div>
      )}

      {/* Dropdown Info Box */}
      {showInfo && (
        <div
          onClick={handleRouteChange}
          className="cursor-pointer transition-all duration-300 absolute left-1/2 transform -translate-x-1/2 top-24 z-40 bg-white text-black p-4 rounded shadow-lg w-[90%] sm:w-auto"
        >
          <h3 className="text-lg font-bold">FrontendExpert</h3>
          <p className="text-sm">Ace the frontend interviews</p>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setShowInfo(false);
            }}
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
