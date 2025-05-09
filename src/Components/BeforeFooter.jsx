import React from "react";
import CustomButton from "./CustomButton";

function BeforeFooter() {
  return (
    <div className="bg-[#02213d] relative text-white flex flex-col md:flex-row py-20 gap-10 justify-between pl-5">
      {/* Text Section */}
      <div className="lg:pl-32 md:w-1/2">
        <h2 className="pb-6 text-xl sm:text-2xl md:text-3xl font-semibold">
          A Better Way To Land Interviews.
        </h2>
        <p className="pb-6 text-sm sm:text-base md:text-lg">
          Earn the InterviewExpert Certificate. Get referred to tech companies.
        </p>
        <p className="pb-6 text-sm sm:text-base md:text-lg">
          No more InMail messages that get ignored.
        </p>
        <p className="pb-6 text-sm sm:text-base md:text-lg">
          No more cold emails that go nowhere.
        </p>
        <p className="pb-6 text-sm sm:text-base md:text-lg">
          No more job applications that get no attention.
        </p>
        <p className="pb-6 text-sm sm:text-base md:text-lg">
          No more referral programs that don't work.
        </p>
        <p className="pb-6 text-sm sm:text-base md:text-lg">
          No more recruiting agencies that cost a fortune.
        </p>
        <p className="pb-6 text-sm sm:text-base md:text-lg">
          With InterviewExpert , preparing for interviews helps you land
          interviews.
        </p>
      </div>

      {/* Image Section */}
      {/* <div className="relative md:w-1/2">
        <div className="flex justify-end pl-5 ">
          <img
            src={illusion}
            className="w-full md:h-[300px] h-[250px] mt-10 rounded-l-full"
            alt="Dot image"
          />
        </div>
        <div className="absolute top-0 left-6">
          <button className="bg-[#626fe3] rounded-md shadow-2xl shadow-black-900 absolute top-36 left-[-30px] md:left-[-35px]">
            <MdOutlineDeleteForever className="w-[75px] h-[75px]" />
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default BeforeFooter;
