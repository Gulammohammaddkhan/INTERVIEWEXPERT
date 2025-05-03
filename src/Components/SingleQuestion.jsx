import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CustomButton from "./CustomButton";

const SingleQuestion = () => {
  const { slug } = useParams();
  const [getData, setGetdata] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    fetch(
      `https://optimist-dev-backend.onrender.com/api/interview-questions/${slug}`
    )
      .then((res) => res.json())
      .then((data) => setGetdata(data.question))
      .catch((error) => console.error(error));
  }, [slug]);

  function onclickhandler() {
    navigate("/interview-preparation");
  }

  return (
    <div className=" relative">
      <div className="flex items-center justify-center">
        <div key={getData?._id} className="w-full max-w-3xl py-3 px-4">
          <div>
            <h1 className="text-4xl font-bold pt-5 text-[#000000]">
              {getData?.question}
            </h1>
            <p className="text-2xl text-[#637c87] py-2">{getData?.type}</p>
            <p className="text-xl text-[#637c87] py-2">
              {getData?.description}
            </p>
          </div>

          {/* Input/Output Section */}
          <div className="mt-6">
            <h2 className="mb-2 text-xl font-semibold text-gray-700">
              Test Cases
            </h2>
            {getData?.inputsOutputs?.map((item, index) => (
              <div key={index} className="mb-4">
                <h2 className="mt-2 text-md font-semibold text-gray-700">
                  Input
                </h2>
                <pre className="p-4 font-mono text-sm text-gray-800 break-words whitespace-pre-wrap bg-gray-100 rounded-md">
                  <code>{item.input}</code>
                </pre>
                <h2 className="mt-2 text-md font-semibold text-gray-700">
                  Output
                </h2>
                <pre className="p-4 font-mono text-sm text-gray-800 break-words whitespace-pre-wrap bg-gray-100 rounded-md">
                  <code>{item.output}</code>
                </pre>
              </div>
            ))}
          </div>

          <div className="mt-6">
            <h2 className="mb-2 text-xl font-semibold text-gray-700">
              Edge Cases
            </h2>
            <ul className="list-disc list-inside text-gray-800 space-y-1 px-4">
              {getData?.edgeCases?.map((caseItem, index) => (
                <li key={index}>{caseItem}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="absolute top-10 left-10">
        <CustomButton
          onClick={onclickhandler}
          text={"BACK"}
          padding={"10px 25px"}
          bgColor={"#00182e"}
          textColor={"white"}
        />
      </div>
    </div>
  );
};

export default SingleQuestion;
