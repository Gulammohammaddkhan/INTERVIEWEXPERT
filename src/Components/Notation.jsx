import React from "react";
import CustomButton from "./CustomButton";
import { GiSandsOfTime } from "react-icons/gi";
import { FaCoins } from "react-icons/fa6";

// function Notation() {
//   return (
//     <div className="my-20">
//       <h1 className="text-center text-4xl font-semibold text-[#02213d] pb-10">
//         Big <i>O</i> Notation Made Easy.
//       </h1>
//       <div className="flex gap-10 mx-5">
//         <div>
//           <h2 className="text-center text-2xl font-semibold  text-[#02213d] pb-5">
//             Time Complexity
//           </h2>
//           <p className=" text-[#597080] text-center text-lg">
//             Why does building a heap only take <i>O</i> (N) time? What does{" "}
//             <i>O</i> (logN) really mean? What's the time-complexity difference
//             between appending a value to an array and adding a character to a
//             string? We address all of these things, and more.
//           </p>
//           <div className="flex justify-center items-center ">
//             <GiSandsOfTime className="w-[250px] h-[250px]  text-[#02213d] my-10  " />
//           </div>
//         </div>
//         <div>
//           <h2 className="text-center text-2xl font-semibold  text-[#02213d] pb-5">
//             Space Complexity
//           </h2>
//           <p className=" text-[#597080] text-center text-lg">
//             You know that thing you're kinda familiar with but not really? Yeah,
//             that's space complexity. And it turns out it's pretty important. All
//             of our video explanations dive deep into space-complexity to turn
//             you into a well rounded Big <i>O</i> expert.
//           </p>
//           <div className="flex justify-center items-center">
//             <FaCoins className="w-[250px] h-[250px]  text-[#02213d] my-10  " />
//           </div>
//         </div>
//       </div>
//       <div className="flex justify-center">
//         <CustomButton
//           text={
//             <>
//               Become An InterviewExpert <span className="text-3xl">&rarr;</span>
//             </>
//           }
//           bgColor={"#626fe3"}
//           padding={"10px 40px"}
//           textColor={"white"}
//           cursor={"pointer"}
//         />
//       </div>
//     </div>
//   );
// }

// export default Notation;

// ********************************************************************

function Notation() {
  return (
    <div className="my-20">
      <h1 className="text-center text-4xl sm:text-3xl font-semibold text-[#02213d] pb-10">
        Big <i>O</i> Notation Made Easy.
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 mx-5">
        {/* Time Complexity Section */}
        <div>
          <h2 className="text-center text-2xl font-semibold text-[#02213d] pb-5">
            Time Complexity
          </h2>
          <p className="text-[#597080] text-center text-lg">
            Why does building a heap only take <i>O</i> (N) time? What does{" "}
            <i>O</i> (logN) really mean? What's the time-complexity difference
            between appending a value to an array and adding a character to a
            string? We address all of these things, and more.
          </p>
          <div className="flex justify-center items-center">
            <GiSandsOfTime className="w-[250px] h-[250px] text-[#02213d] my-10" />
          </div>
        </div>

        {/* Space Complexity Section */}
        <div>
          <h2 className="text-center text-2xl font-semibold text-[#02213d] pb-5">
            Space Complexity
          </h2>
          <p className="text-[#597080] text-center text-lg">
            You know that thing you're kinda familiar with but not really? Yeah,
            that's space complexity. And it turns out it's pretty important. All
            of our video explanations dive deep into space-complexity to turn
            you into a well-rounded Big <i>O</i> expert.
          </p>
          <div className="flex justify-center items-center">
            <FaCoins className="w-[250px] h-[250px] text-[#02213d] my-10" />
          </div>
        </div>
      </div>

      {/* Button Section */}
      <div className="flex justify-center mt-10">
        <CustomButton
          text={
            <>
              Become An InterviewExpert <span className="text-3xl">&rarr;</span>
            </>
          }
          bgColor={"#626fe3"}
          padding={"10px 40px"}
          textColor={"white"}
          cursor={"pointer"}
        />
      </div>
    </div>
  );
}

export default Notation;
