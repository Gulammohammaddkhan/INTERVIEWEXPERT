import React from "react";
import { frontendData } from "../Data";
const FrontendPrograms = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Javascript Questions</h2>
      <div className="p-4 grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  gap-2 ">
        {frontendData.map((set, index) => (
          <div key={index} className="mb-6  ">
            <ul className="list-disc list-inside rounded-sm gap-2 flex flex-col  p-4 ">
              {set.map((question, idx) => (
                <li
                  key={idx}
                  className="mb-1 px-3 py-5 rounded-md bg-white border-r-8 border-r-[#14324d] font-semibold text-[#063b69] text-sm pl-3"
                >
                  {question}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontendPrograms;
