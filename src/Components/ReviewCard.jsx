import React from "react";

function ReviewCard({ data }) {
  return (
    <div className="">
      <div className=" flex flex-col justify-center items-center max-w-[325px] h-[325px] bg-white relative rounded-sm border-t-4 border-t-[#626fe3] shadow-md min-w-[250px]">
        <img
          src={data.avatar}
          className="rounded-full w-[60px] absolute top-[-30px] left-[40%] "
        />
        <div className="flex flex-col items-center justify-center ">
          <h5 className="pb-5 text-xl font-semibold pt-7">{data.name}</h5>
          <h5 className="pb-5 text-xl">{data.title}</h5>
          <img src={data.company} className="h-[25px] pb-1.5" />
          <p className="h-[150px] overflow-y-auto text-[#6b6b6e] pr-2 pl-4 pt-5 pb-5 self-center scrollbar-hide ">
            {data.disc}
          </p>
        </div>
      </div>
    </div>
  );
}

export default ReviewCard;
