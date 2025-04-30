import React from "react";
import CustomButton from "./CustomButton";

// function Footer() {
//   return (
//     <div className="bg-[#02213d] border-r border-gray-500">
//       <div className="flex gap-4 justify-center pb-2 ">
//         <CustomButton text={"Contact Us"} textColor={"white"} />
//         <CustomButton text={"FAQ"} textColor={"white"} />
//         <CustomButton text={"Reviews"} textColor={"white"} />
//         <CustomButton text={"Blog"} textColor={"white"} />
//         <CustomButton text={"Jobs"} textColor={"white"} />
//         <CustomButton text={"SWE Project Contests"} textColor={"white"} />
//         <CustomButton text={"Legal Stuff"} textColor={"white"} />
//         <CustomButton text={"Privacy Policy"} textColor={"white"} />
//       </div>
//       <div className="text-white text-center text-sm pb-6">
//         Copyright © 2017-2025 AlgoExpert LLC. All rights reserved.
//       </div>
//     </div>
//   );
// }

// export default Footer;

// *****************************************************

function Footer() {
  return (
    <div className="bg-[#02213d] border-t border-gray-500 py-6">
      {/* Button Container */}
      <div className="flex flex-wrap gap-4 justify-center pb-4">
        <CustomButton text={"Contact Us"} textColor={"white"} />
        <CustomButton text={"FAQ"} textColor={"white"} />
        <CustomButton text={"Reviews"} textColor={"white"} />
        <CustomButton text={"Blog"} textColor={"white"} />
        <CustomButton text={"Jobs"} textColor={"white"} />
        <CustomButton text={"SWE Project Contests"} textColor={"white"} />
        <CustomButton text={"Legal Stuff"} textColor={"white"} />
        <CustomButton text={"Privacy Policy"} textColor={"white"} />
      </div>

      {/* Copyright */}
      <div className="text-white text-center text-sm pb-6">
        Copyright © 2017-2025 AlgoExpert LLC. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
