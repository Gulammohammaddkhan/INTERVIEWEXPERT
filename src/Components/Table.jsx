import React from "react";
import Tick from "./Tick";
import TickC from "./Tick copy";
import { FaReact } from "react-icons/fa";

function Table() {
  const data = [
    { label: "100+ Practice Questions", ticks: [true, true, true] },
    { label: "Data Structures Content", ticks: [true, true, true] },
    { label: "Guided Format", ticks: [true, false, true] },
    { label: "Coding Workspace", ticks: [false, true, true] },
    { label: "Multiple Programming Languages", ticks: [false, true, true] },
    { label: "High-Quality Solutions", ticks: [true, false, true] },
    { label: "Video Explanations", ticks: [false, false, true] },
    { label: "Mock Interviews", ticks: [false, false, true] },
    { label: "All-In-One Platform", ticks: [false, false, true] },
  ];

  return (
    <div className="w-full overflow-x-auto">
      <div className="flex justify-center text-3xl sm:text-4xl font-bold text-[#445d6e] pb-5">
        A Better Way to Prep for Coding Interviews.
      </div>

      <table className="w-full table-fixed border-collapse min-w-[600px]">
        <thead>
          <tr className="bg-white font-bold text-xl text-[#445d6e]">
            <th className="w-1/4 p-6"></th>
            <th className="w-1/4 p-6 text-center">
              Cracking the Coding Interview
            </th>
            <th className="w-1/4 p-6 text-center">Leetcode</th>
            <th className="p-6 w-1/4 text-center bg-[#626fe3] text-white">
              <div className="flex items-center justify-center gap-2">
                <FaReact className="w-6 h-6" />
                InterviewExpert
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white border-t-2 border-gray-100 text-base md:text-lg font-semibold text-[#445d6e]">
              <td className="w-1/4 p-5 text-left">{row.label}</td>
              {row.ticks.map((tick, i) => (
                <td
                  key={i}
                  className="w-1/4 p-5 text-center border-t-2 border-gray-100">
                  {tick === true ? (
                    <Tick type="true" />
                  ) : tick === "custom" ? (
                    <TickC />
                  ) : (
                    <Tick type="" />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
