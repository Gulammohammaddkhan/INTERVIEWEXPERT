import React from "react";
import { frontendData } from "../Data";
import { useParams } from "react-router-dom";

const SingleQuestion = () => {
  const params = useParams();

  const frontendObj = frontendData?.filter(
    (question) => question.slug === params.slug
  );

  return (
    <div className=" ">
      <div className="  flex items-center justify-center">
        {frontendObj?.map((obj, id) => (
          <div key={id} className="w-1/2 py-3">
            <div>
              <h1 className="text-4xl font-bold py-5 flex justify-center">
                {obj?.title}
              </h1>
              <p className="text-2xl py-5 px-3 flex justify-center items-center self-center">
                {obj?.desc}
              </p>
            </div>
            <span className="text-3xl font-bold text-amber-300 flex justify-center">
              {obj?.Sourcecode}
            </span>
            <div className="text-3xl font-bold text-blue-950 flex justify-center py-5">
              {obj?.output}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleQuestion;
