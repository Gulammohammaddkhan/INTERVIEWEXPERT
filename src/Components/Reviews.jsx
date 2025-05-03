import React from "react";
import Card from "./Card";
import { reviewData } from "../Data";
import ReviewCard from "./ReviewCard";
import CustomButton from "./CustomButton";

function Reviews() {
  return (
    <div className="flex flex-col items-center justify-center px-6 pb-12 md:pb-30">
      <h2 className="pb-8 text-3xl text-center md:text-4xl md:pb-12">
        And Over 200,000 Satisfied Engineers.
      </h2>
      <div className="grid grid-cols-1 gap-6 pb-8 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {reviewData.map((object, index) => (
          <div>
            <ReviewCard data={object} key={index} />
          </div>
        ))}
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
