import React from "react";
import { frontendData } from "../Data";
import { useParams } from "react-router-dom";

const SingleQuestion = () => {
  const params = useParams();

  const frontendObj = frontendData?.filter(
    (question) => question.slug === params.slug
  );

  return (
    <div className="flex flex-col items-center justify-center">
      <div>
        {frontendObj?.map((obj, id) => (
          <div key={id}>
            <div>
              <h1>{obj?.title}</h1>
              <p>{obj?.desc}</p>
            </div>
            <span>{obj?.Sourcecode}</span>
            <div>{obj?.output}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleQuestion;
