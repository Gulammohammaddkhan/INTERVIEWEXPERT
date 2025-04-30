import React from "react";
import { questionData } from "../Data";
import { IoCheckmarkCircleSharp } from "react-icons/io5";

function QuestionsCard({ data }) {
  return (
    <div className="bg-[#15304a] w-[300px] h-[140px] flex flex-col justify-center items-center ">
      {/* <div className="bg-[#15304a] grid grid-cols-3 ">
        {questionData.map((item, index) => {
          return (
            <div className="w-[300px] h-[100px] flex justify-center items-center">
              <div key={index}>{item.icon}</div>
              <div>{item.text}</div>
            </div>
          );
        })}
      </div> */}

      <div className="text-4xl">{data.icon}</div>
      <div>{data.text}</div>
    </div>
  );
}

export default QuestionsCard;
