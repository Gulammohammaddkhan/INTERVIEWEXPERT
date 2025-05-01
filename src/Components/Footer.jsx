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
    <div className="bg-[#02213d] border-t border-gray-500 py-6 ">
      {/* Button Container */}
      <div className="flex flex-wrap gap-4 justify-center pb-4 ">
        <div className="cursor-pointer relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
          {" "}
          <CustomButton text={"Contact Us"} textColor={"white"} />{" "}
        </div>
        <div className="cursor-pointer relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
          <CustomButton text={"FAQ"} textColor={"white"} />{" "}
        </div>
        <div className="cursor-pointer relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
          {" "}
          <CustomButton text={"Reviews"} textColor={"white"} />
        </div>
        <div className="cursor-pointer relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
          {" "}
          <CustomButton text={"Blog"} textColor={"white"} />
        </div>
        <div className="cursor-pointer relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
          {" "}
          <CustomButton text={"Jobs"} textColor={"white"} />{" "}
        </div>
        <div className="cursor-pointer relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
          <CustomButton text={"SWE Project Contests"} textColor={"white"} />
        </div>
        <div className="cursor-pointer relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
          <CustomButton text={"Legal Stuff"} textColor={"white"} />
        </div>
        <div className="cursor-pointer relative after:content-[''] after:block after:w-full after:h-[1px] after:bg-white after:scale-x-0 after:transition-transform after:duration-200 hover:after:scale-x-100">
          <CustomButton text={"Privacy Policy"} textColor={"white"} />
        </div>
      </div>

      {/* Copyright */}
      <div className="text-white text-center text-sm pb-6">
        Copyright © 2017-2025 AlgoExpert LLC. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
