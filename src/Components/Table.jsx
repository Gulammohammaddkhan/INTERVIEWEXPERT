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
            <th className="p-6 w-1/4"></th>
            <th className="p-6 w-1/4 text-center">
              Cracking the Coding Interview
            </th>
            <th className="p-6 w-1/4 text-center">Leetcode</th>
            <th className="p-6 w-1/4 text-center bg-[#626fe3] text-white">
              <div className="flex justify-center items-center gap-2">
                <FaReact className="w-6 h-6" />
                AlgoExpert
              </div>
            </th>
          </tr>
        </thead>

        <tbody>
          {data.map((row, rowIndex) => (
            <tr
              key={rowIndex}
              className="bg-white border-t-2 border-gray-100 text-base md:text-lg font-semibold text-[#445d6e]"
            >
              <td className="p-5 w-1/4 text-left">{row.label}</td>
              {row.ticks.map((tick, i) => (
                <td
                  key={i}
                  className="border-t-2 border-gray-100 p-5 w-1/4 text-center"
                >
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

// https://media.istockphoto.com/id/1150603622/photo/transparent-x-ray-asterisk-sign-3d.jpg?s=1024x1024&w=is&k=20&c=XKIShH5pq_fWSPUNpjH8Gu4xHXd3AXRrwLzOQvRRGFU=

// ********************************************************************************

// function Table() {
//   return (
//     <div className="mx-5">
//       <div className="flex justify-center text-4xl pb-5">
//         <h2>A Better Way to Prep for Coding Interviews.</h2>
//       </div>
//       <div>
//         <div className=" flex gap-[57px] bg-white  font-bold text-xl  text-[#445d6e] mb-[2px]">
//           <div className=" w-[230px] "></div>
//           <div className="items-center self-center py-10 w-[280px]">
//             Cracking the Coding Interview
//           </div>
//           <div className="text-center flex items-center justify-center py-10 w-[280px]">
//             <span className="w-[100%] text-center ">Leetcode</span>
//           </div>
//           <div className="flex items-center justify-center gap-1 bg-[#626fe3] text-white w-[280px]">
//             <div className="flex justify-center items-center text-center ">
//               <FaReact className="w-[27px] h-[27px]" />
//               AlgoExpert
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-between mb-[2px] bg-white">
//         <div className=" w-full font-semibold text-l px-5 self-center">
//           100+ Practice Questions
//         </div>

//         <Tick type="true" />
//         <Tick type="true" />

//         <TickC
//           color="#ebf7ee"
//           icon={<FcCheckmark className="w-[27px] h-[27px]" />}
//         />
//       </div>

//       <div className="flex justify-between  mb-[2px] bg-white">
//         <div className=" w-full font-semibold text-l px-5 self-center">
//           Data Structures Content
//         </div>
//         <Tick type="true" />
//         <Tick type="true" />
//         <Tick type="true" />
//       </div>
//       <div className="flex justify-between  mb-[2px] bg-white">
//         <div className=" w-full font-semibold text-l px-5 self-center">
//           Guided Format
//         </div>
//         <Tick type="true" />
//         <Tick type="" />
//         <Tick type="true" />
//       </div>
//       <div className="flex justify-between  mb-[2px] bg-white">
//         <div className=" w-full font-semibold text-l px-5 self-center">
//           Coding Workspace
//         </div>
//         <Tick type="" />
//         <Tick type="true" />
//         <Tick type="true" />
//       </div>
//       <div className="flex justify-between  mb-[2px] bg-white">
//         <div className=" w-full font-semibold text-l px-5 self-center">
//           Multiple Programming Languages
//         </div>
//         <Tick type="" />
//         <Tick type="true" />
//         <Tick type="true" />
//       </div>
//       <div className="flex justify-between  mb-[2px] bg-white">
//         <div className=" w-full font-semibold text-l px-5 self-center">
//           High-Quality Solutions
//         </div>
//         <Tick type="true" />
//         <Tick type="" />
//         <Tick type="true" />
//       </div>
//       <div className="flex justify-between  mb-[2px] bg-white">
//         <div className=" w-full font-semibold text-l px-5 self-center">
//           Video Explanations
//         </div>
//         <Tick type="" />
//         <Tick type="" />
//         <Tick type="true" />
//       </div>
//       <div className="flex justify-between  mb-[2px] bg-white">
//         <div className=" w-full font-semibold text-l px-5 self-center">
//           Mock Interviews
//         </div>
//         <Tick type="" />
//         <Tick type="" />
//         <Tick type="true" />
//       </div>
//       <div className="flex justify-between  mb-[2px] bg-white">
//         <div className=" w-full font-semibold text-l px-5 self-center">
//           All-In-One Platform
//         </div>
//         <Tick type="" />
//         <Tick type="" />
//         <Tick type="true" />
//       </div>
//     </div>
//   );
// }

// export default Table;

// ***************************************************
// ***************************************************

// function Table() {
//   return (
//     <div className="mx-5 overflow-x-auto">
//       <div className="flex justify-center text-3xl md:text-4xl pb-5 text-center">
//         <h2>A Better Way to Prep for Coding Interviews.</h2>
//       </div>

//       <div className="min-w-[750px]">
//         {/* Header Row */}
//         <div className="flex gap-[2px] bg-white font-bold text-lg md:text-xl text-[#445d6e] mb-[2px]">
//           <div className="w-[180px] md:w-[230px]"></div>
//           <div className="flex items-center justify-center py-6 md:py-10 w-full md:w-[280px] text-center">
//             Cracking the Coding Interview
//           </div>
//           <div className="flex items-center justify-center py-6 md:py-10 w-full md:w-[280px] text-center">
//             Leetcode
//           </div>
//           <div className="flex items-center justify-center gap-2 bg-[#626fe3] text-white py-6 md:py-10 w-full md:w-[280px] text-center">
//             <FaReact className="w-[24px] h-[24px]" />
//             AlgoExpert
//           </div>
//         </div>

//         {/* Table Rows */}
//         {[
//           "100+ Practice Questions",
//           "Data Structures Content",
//           "Guided Format",
//           "Coding Workspace",
//           "Multiple Programming Languages",
//           "High-Quality Solutions",
//           "Video Explanations",
//           "Mock Interviews",
//           "All-In-One Platform",
//         ].map((item, index) => (
//           <div
//             key={index}
//             className="flex justify-between items-center mb-[2px] bg-white text-sm md:text-base"
//           >
//             <div className="w-[180px] md:w-full font-semibold px-3 md:px-5 py-4">
//               {item}
//             </div>
//             {/* Ticks */}
//             <Tick
//               type={
//                 index === 3 || index === 4 || index === 5 || index > 5
//                   ? ""
//                   : "true"
//               }
//             />
//             <Tick type={index === 2 || index > 4 ? "" : "true"} />
//             <Tick type={"true"} />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default Table;
