import React from "react";
import Card from "./Card";
import { reviewData } from "../Data";
import ReviewCard from "./ReviewCard";
import CustomButton from "./CustomButton";

// function Reviews() {
//   return (
//     <div className="flex flex-col  justify-center items-center pb-30">
//       <h2 className="text-4xl pb-12">And Over 200,000 Satisfied Engineers.</h2>
//       <div className="grid grid-cols-3">
//         {reviewData.map((object, index) => {
//           return <ReviewCard data={object} />;
//         })}
//       </div>
//       <CustomButton
//         text={"Read More Testimonials"}
//         bgColor="white"
//         padding="15px 35px"
//         fontWeight="bold"
//         cursor="pointer"
//       ></CustomButton>
//     </div>
//   );
// }

// export default Reviews;

// *******************************************

/* {reviewData?.map((obj, index) => (
          <div key={index}>
            <div className=" gap-5">
              <div className=" flex flex-col justify-center items-center w-[325px] h-[325px] bg-white relative rounded-sm border-t-4 border-t-[#626fe3]">
                <img
                  src={obj?.avatar}
                  className="rounded-full w-[60px] absolute top-[-30px] left-[40%] "
                />
                <div className="flex flex-col justify-center items-center ">
                  <h5 className="text-xl font-semibold pb-5 pt-7">
                    {obj?.name}
                  </h5>
                  <h5 className="pb-5 text-xl">{obj?.title}</h5>
                  <img src={obj?.company} className="h-[25px]" />
                  <p className="h-[150px] overflow-y-auto pr-2 pl-4 pt-5 pb-5 self-center ">
                    {obj?.disc}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <ReviewCard data={obj} />
        ))} */

// *****************************************************************************

function Reviews() {
  return (
    <div className="flex flex-col justify-center items-center pb-12 md:pb-30 px-6">
      <h2 className="text-3xl md:text-4xl pb-8 md:pb-12 text-center">
        And Over 200,000 Satisfied Engineers.
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-10">
        {reviewData.map((object, index) => {
          return <ReviewCard data={object} key={index} />;
        })}
      </div>
      <CustomButton
        text={"Read More Testimonials"}
        bgColor="white"
        padding="12px 30px"
        fontWeight="bold"
        cursor="pointer"
        className="mt-8"
      />
    </div>
  );
}

export default Reviews;
