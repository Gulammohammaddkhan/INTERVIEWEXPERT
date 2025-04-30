import React from "react";
import xImg from "../assets/Images/X-O-img.webp";
import CustomButton from "./CustomButton";

// function DataStructures() {
//   return (
//     <div className="flex pb-20 ">
//       <img
//         src={xImg}
//         className="
//     rounded-[8px] w-full
//     shadow-[27.1px_62.5px_125px_-25px_rgba(50,50,93,0.6),16.2px_37.5px_75px_-37.5px_rgba(0,0,0,0.7)]
//     [transform:rotate3d(0.7,0.866,0,15deg)_rotate(-1deg)] ml-[-20px]
//   "
//       />

//       <div className="flex flex-col mx-10 mt-12">
//         <h2 className="text-3xl font-semibold self-start pb-5 text-[#02213d]">
//           Data Structures Crash Course.
//         </h2>
//         <p className="text-lg text-[#597080] pb-5">
//           Algorithms and data structures go hand in hand; the solution to
//           virtually any coding interview problem will require the implementation
//           of some kind of abstract data type in order to access and manipulate
//           information.
//         </p>
//         <p className="text-lg  text-[#597080] pb-5">
//           Our video series on data structures is the ultimate crash course on
//           this important topic. We cover fundamental concepts pertaining to
//           memory, complexity analysis, and Big O notation, and then break down
//           popular data structures to give you a detailed look at how these
//           concepts are applied under the hood. Linked Lists and Binary Trees
//           will never instill fear in your heart again.
//         </p>
//         <div className="text-start">
//           <CustomButton
//             text={"Start The Course"}
//             bgColor={"#626fe3"}
//             padding={"10px 30px"}
//             fontWeight={"bold"}
//             textColor={"white"}
//             cursor={"pointer"}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

// export default DataStructures;

// ********************************************************************

function DataStructures() {
  return (
    <div className="flex flex-col lg:flex-row pb-20">
      {/* Image Section */}
      <div className="w-full lg:w-[50%]">
        <img
          src={xImg}
          className="rounded-[8px] w-full
            shadow-[27.1px_62.5px_125px_-25px_rgba(50,50,93,0.6),16.2px_37.5px_75px_-37.5px_rgba(0,0,0,0.7)]
            [transform:rotate3d(0.7,0.866,0,15deg)_rotate(-1deg)] ml-[-20px] mb-5 lg:mb-0"
          alt="Data Structures"
        />
      </div>

      {/* Text Section */}
      <div className="flex flex-col mx-10 mt-12 lg:mt-0 lg:w-[50%]">
        <h2 className="text-3xl sm:text-4xl font-semibold self-start pb-5 text-[#02213d]">
          Data Structures Crash Course.
        </h2>
        <p className="text-lg sm:text-xl text-[#597080] pb-5">
          Algorithms and data structures go hand in hand; the solution to
          virtually any coding interview problem will require the implementation
          of some kind of abstract data type in order to access and manipulate
          information.
        </p>
        <p className="text-lg sm:text-xl text-[#597080] pb-5">
          Our video series on data structures is the ultimate crash course on
          this important topic. We cover fundamental concepts pertaining to
          memory, complexity analysis, and Big O notation, and then break down
          popular data structures to give you a detailed look at how these
          concepts are applied under the hood. Linked Lists and Binary Trees
          will never instill fear in your heart again.
        </p>
        <div className="text-start">
          <CustomButton
            text={"Start The Course"}
            bgColor={"#626fe3"}
            padding={"10px 30px"}
            fontWeight={"bold"}
            textColor={"white"}
            cursor={"pointer"}
          />
        </div>
      </div>
    </div>
  );
}

export default DataStructures;
