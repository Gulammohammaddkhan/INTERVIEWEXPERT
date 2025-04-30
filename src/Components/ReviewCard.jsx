import React from "react";

function ReviewCard({ data }) {
  return (
    <div className="grid grid-cols-3 mx-20 gap-5 mt-14 mb-12">
      <div className=" flex flex-col justify-center items-center w-[325px] h-[325px] bg-white relative rounded-sm border-t-4 border-t-[#626fe3]">
        <img
          src={data.avatar}
          className="rounded-full w-[60px] absolute top-[-30px] left-[40%] "
        />
        <div className="flex flex-col justify-center items-center ">
          <h5 className="text-xl font-semibold pb-5 pt-7">{data.name}</h5>
          <h5 className="pb-5 text-xl">{data.title}</h5>
          <img src={data.company} className="h-[25px]" />
          <p className="h-[150px] overflow-y-auto pr-2 pl-4 pt-5 pb-5 self-center ">
            {data.disc}
          </p>
        </div>
      </div>
       </div>
  );
}

export default ReviewCard;
