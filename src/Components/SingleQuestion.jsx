import React from "react";
import { frontendData } from "../Data";
import { useParams } from "react-router-dom";

const SingleQuestion = () => {
  const params = useParams();

  const frontendObj = frontendData?.filter(
    (question) => question.slug === params.slug
  );

  return (
    <div className="">
      <div className="flex items-center justify-center ">
        {frontendObj?.map((obj, id) => (
          <div key={id} className="w-1/2 py-3">
            <div>
              <h1 className="text-4xl font-bold pt-5 flex justify-center text-[#000000]">
                {obj?.title}
              </h1>
              <p className="text-2xl text-[#637c87] py-5 px-3 flex justify-center items-center self-center">
                {obj?.desc}
              </p>
            </div>
            <div className="mt-6">
              <h2 className="mb-2 text-xl font-semibold text-gray-700">
                Source Code
              </h2>
              <pre className="p-4 font-mono text-sm text-gray-800 break-words whitespace-pre-wrap bg-gray-100 rounded-md">
                <code>{obj?.Sourcecode.replace(/^Source Code\s*:/, "")}</code>
              </pre>
            </div>
            <div className="mt-6">
              <h2 className="mb-2 text-xl font-semibold text-gray-700">
                Output
              </h2>
              <pre className="p-4 font-mono text-sm text-gray-800 break-words whitespace-pre-wrap bg-gray-100 rounded-md">
                <code>{obj?.output.replace(/^Output\s*:/, "")}</code>
              </pre>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SingleQuestion;
