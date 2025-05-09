import React from "react";
import CustomButton from "./CustomButton";
import QuestionsCard from "./QuestionsCard";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function Questions() {
  const questionData = [
    {
      index: 1,
      icon: IoCheckmarkCircleSharp,
      text: "Arrays",
    },
    {
      index: 2,
      icon: IoCheckmarkCircleSharp,
      text: "Graphs",
    },
    {
      index: 3,
      icon: IoCheckmarkCircleSharp,
      text: "Ties",
    },
    {
      index: 4,
      icon: IoCheckmarkCircleSharp,
      text: "Linked Lists",
    },
    {
      index: 5,
      icon: IoCheckmarkCircleSharp,
      text: "Binary Trees",
    },
    {
      index: 6,
      icon: IoCheckmarkCircleSharp,
      text: "Strings",
    },
    {
      index: 7,
      icon: IoCheckmarkCircleSharp,
      text: "Dynamic Programming",
    },
    {
      index: 8,
      icon: IoCheckmarkCircleSharp,
      text: "Searching",
    },
    {
      index: 9,
      icon: IoCheckmarkCircleSharp,
      text: "Sorting",
    },
    {
      index: 10,
      icon: IoCheckmarkCircleSharp,
      text: "Greedy Algorithms",
    },
    {
      index: 11,
      icon: IoCheckmarkCircleSharp,
      text: "Recursion",
    },
    {
      index: 12,
      icon: IoCheckmarkCircleSharp,
      text: "Famous Algorithms",
    },
    {
      index: 13,
      icon: IoCheckmarkCircleSharp,
      text: "Heaps",
    },
    {
      index: 14,
      icon: IoCheckmarkCircleSharp,
      text: "Binary Search  Trees",
    },
    {
      index: 15,
      icon: IoCheckmarkCircleSharp,
      text: "Stacks",
    },
  ];
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate("/products");
  };

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="bg-[#02213d] flex flex-col justify-center items-center text-white pt-20 pb-20 px-6">
      <div className="flex flex-col items-center justify-center gap-5">
        <h2 className="text-3xl text-center md:text-4xl">
          200 Questions Spanning 15 Categories.
        </h2>
        <div className="flex items-center justify-center ">
          <p className="text-center w-full sm:w-[80%] pb-4 px-4">
            If you want to ace the coding interviews, being well-versed in all
            common data structures and popular problem-solving methods is
            paramount. With 200 questions spanning 15 categories and 4
            difficulty levels, we've got you covered.
          </p>
        </div>
        <CustomButton
          text={"Explore Questions"}
          bgColor={"#626fe3"}
          padding={"10px 30px"}
          fontWeight={"bold"}
          cursor={"pointer"}
          margin={"0 0 40px 0"}
          onClick={clickHandler}
        ></CustomButton>
      </div>
      <div className="grid grid-cols-1 gap-9 md:grid-cols-2 lg:grid-cols-3 ">
        {questionData.map((object, index) => {
          return (
            <div className="" key={index}>
              <QuestionsCard data={object} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Questions;
