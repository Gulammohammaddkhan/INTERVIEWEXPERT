import React from "react";
import { frontendData } from "../Data";
import { Link } from "react-router-dom";
const FrontendPrograms = () => {
  return (
    <div className="p-4">
      <h2 className="mb-4 text-2xl font-bold">Javascript Questions</h2>
      <div className="grid grid-cols-1 gap-2 p-4 sm:grid-cols-2 lg:grid-cols-3 ">
        {frontendData.map((obj, id) => (
          <div key={id} className="mb-6 ">
            <ul className="flex flex-col gap-2 p-4 list-disc list-inside rounded-sm ">
              <Link to={`/interview-preparation/${obj.slug}/SingleQ/${obj.id}`}>
                <li className="mb-1 px-3 py-5 rounded-md bg-white border-r-8 shadow-md border-r-[#14324d] font-semibold text-[#063b69] text-sm pl-3">
                  {obj.title}
                </li>
              </Link>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FrontendPrograms;
