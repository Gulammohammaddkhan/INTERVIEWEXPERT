import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

function TickC({ color, icon }) {
  console.log("color", color);
  return (
    <>
      <div
        className={`px-29 py-1.5 mt-3 mb-3 ml-2 mr-4   rounded`}
        style={{
          background: color,
        }}
      >
        {icon}
      </div>
    </>
  );
}

export default TickC;
