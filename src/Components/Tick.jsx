import React from "react";
import { FcCheckmark } from "react-icons/fc";
import { RxCross2 } from "react-icons/rx";

function Tick({ type }) {
  const isTrue = type === "true";

  return (
    <div
      className={`flex items-center justify-center w-full h-12 rounded ${
        isTrue ? "bg-[#ebf7ee]" : "bg-[#ffe6e6] text-[#ff0000]"
      }`}
    >
      {isTrue ? (
        <FcCheckmark className="w-6 h-6" />
      ) : (
        <RxCross2 className="w-6 h-6" />
      )}
    </div>
  );
}

export default Tick;
