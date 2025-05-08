import React from "react";
import CustomButton from "./CustomButton";

function FrontendQuestions() {
  return (
    <div className="flex flex-col items-center px-10 py-20 gap-7 md:flex-row">
      <div className="flex-1 mb-6 md:mb-0 md:mr-6">
        <h2 className="text-[#02213d] text-4xl pb-6">
          Frontend Coding Questions.
        </h2>
        <p className="text-[#597080] text-lg pb-5">
          Mastering HTML, CSS, and JavaScript individually is necessary to ace
          the frontend interviews, but it's not sufficient. Knowing how to use
          all three languages together to build complex frontend features is the
          true test you'll have to pass.
        </p>
        <p className="text-[#597080] text-lg pb-5">
          Our thoughtfully selected frontend coding interview questions assess
          both your language-specific knowledge and your cross-language
          capabilities, ensuring you head into your interviews armed with a
          breadth of experience. Practice makes perfect. Intelligent practice
          makes even more perfect.
        </p>
        <CustomButton
          text={"Explore Questions"}
          bgColor={"#02213d"}
          padding={"15px 40px"}
          textColor={"white"}
          cursor={"pointer"}
          path="/interview-preparation"
        />
      </div>
      <div className="flex flex-col md:w-[50%] justify-center w-full gap-6">
        <div className="flex items-center justify-between  lg:w-[80%]  w-full bg-white rounded-sm shadow-md">
          <div className="font-semibold text-[#063b69] text-sm pl-3">
            Testing Framework
          </div>
          <div className="px-3 py-5 bg-[#063b69] rounded-r-sm border-r-8 border-r-[#02213d]"></div>
        </div>

        <div className="flex items-center justify-between  lg:w-[80%] w-full bg-white rounded-sm shadow-md">
          <div className="font-semibold text-[#063b69] text-sm pl-3">
            Rainbow Circles
          </div>
          <div className="px-3 py-5 bg-[#063b69] rounded-r-sm border-r-8 border-r-[#02213d]"></div>
        </div>

        <div className="flex items-center justify-between lg:w-[80%]  w-full bg-white rounded-sm shadow-md">
          <div className="font-semibold text-[#063b69] text-sm pl-3">
            Infinite Scroll
          </div>
          <div className="px-3 py-5 bg-[#063b69] rounded-r-sm border-r-8 border-r-[#02213d]"></div>
        </div>

        <div className="flex items-center justify-between  lg:w-[80%] w-full bg-white rounded-sm shadow-md">
          <div className="font-semibold text-[#063b69] text-sm pl-3">
            Tic Tac Toe
          </div>
          <div className="px-3 py-5 bg-[#063b69] rounded-r-sm border-r-8 border-r-[#02213d]"></div>
        </div>

        <div className="flex items-center justify-between lg:w-[80%]  w-full bg-white rounded-sm shadow-md">
          <div className="font-semibold text-[#063b69] text-sm pl-3">
            Stop Watch
          </div>
          <div className="px-3 py-5 bg-[#063b69] rounded-r-sm border-r-8 border-r-[#02213d]"></div>
        </div>
      </div>
    </div>
  );
}

export default FrontendQuestions;
