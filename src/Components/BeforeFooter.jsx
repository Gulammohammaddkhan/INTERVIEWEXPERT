import React from "react";
import dot from "../assets/Images/Dots.avif";
import CustomButton from "./CustomButton";
import { MdOutlineDeleteForever } from "react-icons/md";

// function BeforeFooter() {
//   return (
//     <div className="bg-[#02213d] text-[white] flex py-20 gap-10  justify-end">
//       <div>
//         <h2 className="text-3xl font-semibold pb-5">
//           A Better Way To Land Interviews.
//         </h2>
//         <p className="text-lg pb-6">
//           Earn the AlgoExpert Certificate. Get referred to tech companies.
//         </p>
//         <p>No more InMail messages that get ignored.</p>
//         <p className="text-lg pb-6">No more cold emails that go nowhere.</p>
//         <p className="text-lg pb-6">
//           No more job applications that get no attention.
//         </p>
//         <p className="text-lg pb-6">
//           No more referral programs that don't work.
//         </p>
//         <p className="text-lg pb-6">
//           No more recruiting agencies that cost a fortune.
//         </p>
//         <p className="text-lg pb-6">
//           With AlgoExpert , preparing for interviews helps you land interviews.
//         </p>
//         <CustomButton
//           text={"Learn More"}
//           bgColor={"#626fe3"}
//           padding={"15px 30px"}
//         />
//       </div>
//       <div className="relative">
//         <div className="flex justify-end ">
//           <img
//             src={dot}
//             className="w-full h-[300px] mt-10 rounded-l-full "
//           ></img>
//         </div>
//         <div>
//           <button className="bg-[#626fe3] rounded-md shadow-2xl shadow-black-900 absolute top-36 left-[-30px] ">
//             {" "}
//             <MdOutlineDeleteForever className="w-[75px] h-[75px]" />
//           </button>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default BeforeFooter;

// ********************************************************************

function BeforeFooter() {
  return (
    <div className="bg-[#02213d] text-white flex flex-col md:flex-row py-20 gap-10 justify-between pl-5">
      {/* Text Section */}
      <div className="md:w-1/2">
        <h2 className="text-3xl font-semibold pb-5">
          A Better Way To Land Interviews.
        </h2>
        <p className="text-lg pb-6">
          Earn the AlgoExpert Certificate. Get referred to tech companies.
        </p>
        <p>No more InMail messages that get ignored.</p>
        <p className="text-lg pb-6">No more cold emails that go nowhere.</p>
        <p className="text-lg pb-6">
          No more job applications that get no attention.
        </p>
        <p className="text-lg pb-6">
          No more referral programs that don't work.
        </p>
        <p className="text-lg pb-6">
          No more recruiting agencies that cost a fortune.
        </p>
        <p className="text-lg pb-6">
          With AlgoExpert , preparing for interviews helps you land interviews.
        </p>
        <CustomButton
          text={"Learn More"}
          bgColor={"#626fe3"}
          padding={"15px 30px"}
        />
      </div>

      {/* Image Section */}
      <div className="relative md:w-1/2">
        <div className="flex justify-end">
          <img
            src={dot}
            className="w-full md:h-[300px] h-[250px] mt-10 rounded-l-full"
            alt="Dot image"
          />
        </div>
        <div>
          <button className="bg-[#626fe3] rounded-md shadow-2xl shadow-black-900 absolute top-36 left-[-30px] md:left-[-60px]">
            <MdOutlineDeleteForever className="w-[75px] h-[75px]" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default BeforeFooter;
