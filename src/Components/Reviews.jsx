import React, { useState } from "react";
import { reviewData } from "../Data";
import ReviewCard from "./ReviewCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Reviews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - cardsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + cardsPerPage, reviewData.length - cardsPerPage)
    );
  };

  const visibleReviews = reviewData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <div className="flex flex-col items-center justify-center px-6 pb-12 md:pb-30">
      <h2 className="pb-8 text-3xl text-center md:text-4xl md:pb-12">
        And Over 200,000 Satisfied Engineers.
      </h2>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 md:gap-10">
        {visibleReviews.map((review, index) => (
          <ReviewCard key={index} data={review} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 p-8">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-2 text-white bg-[#00182e] rounded disabled:opacity-50">
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + cardsPerPage >= reviewData.length}
          className="p-2 text-white bg-[#00182e] rounded disabled:opacity-50">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
