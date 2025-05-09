import React from "react";
import CustomButton from "./CustomButton";
import practice from "../../public/PracticeImg.webp";

// function Practice() {
//   return (
//     <div className="grid grid-cols-2 gap-6 mx-10 my-30">
//       <div className="">
//         <h2 className="text-4xl text-[#02213d] pb-7">
//           The Perfect Practice Environment.
//         </h2>
//         <p className=" text-[#597080] text-lg pb-3">
//           In an ideal world, you'd prepare for coding interviews by writing out
//           solutions to problems in your language of choice, getting some hints
//           if necessary, running your code against test cases, and looking at
//           solutions when done.
//         </p>
//         <p className=" text-[#597080] text-lg pb-5">
//           We've turned that ideal world into the real world. Pick a language.
//           Read the prompt. Write your solution. Run your code. Get some hints.
//           Run your code again. Check the output. Pass the tests. View our
//           solution. Watch our video. All within the same workspace.
//         </p>
//         <CustomButton
//           text={"Try Our Workspace"}
//           bgColor={"#626fe3"}
//           padding={"10px 40px 10px 40px"}
//           textColor={"white"}
//           cursor={"pointer"}
//         />
//       </div>
//       <div className="w-full pl-10">
//         <img src={practice} />
//       </div>
//     </div>
//   );
// }

// export default Practice;

// *******************************************************************

function Practice() {
  return (
    <div className="grid grid-cols-1 gap-10 mx-10 my-10 lg:grid-cols-2">
      {/* Left Section (Text and Button) */}
      <div className="">
        <h2 className="text-4xl sm:text-3xl text-[#02213d] pb-7">
          The Perfect Practice Environment.
        </h2>
        <p className="text-[#597080] text-lg pb-3">
          In an ideal world, you'd prepare for coding interviews by writing out
          solutions to problems in your language of choice, getting some hints
          if necessary, running your code against test cases, and looking at
          solutions when done.
        </p>
        <p className="text-[#597080] text-lg pb-5">
          We've turned that ideal world into the real world. Pick a language.
          Read the prompt. Write your solution. Run your code. Get some hints.
          Run your code again. Check the output. Pass the tests. View our
          solution. Watch our video. All within the same workspace.
        </p>
        {/* <CustomButton
          text={"Try Our Workspace"}
          bgColor={"#626fe3"}
          padding={"10px 40px 10px 40px"}
          textColor={"white"}
          cursor={"pointer"}
        /> */}
      </div>

      {/* Right Section (Image) */}
      <div className="w-full ">
        <img
          src={practice}
          alt="Practice Workspace"
          className="object-cover w-full"
        />
      </div>
    </div>
  );
}

export default Practice;
