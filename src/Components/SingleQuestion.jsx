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
    <div className="">
      <div className="flex items-center justify-center">
        <div key={getData?._id} className="w-full max-w-3xl px-4 py-3">
          <div>
            <div className="flex  flex-col  items-start gap-5">
              <CustomButton
                onClick={onclickhandler}
                padding={"10px 25px"}
                bgColor={"#00182e"}
                textColor={"white"}
              />
              <h1 className="text-4xl font-bold pt-5 text-[#000000]">
                {getData?.question}
              </h1>
            </div>

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
                <h2 className="mt-2 font-semibold text-gray-700 text-md">
                  Input
                </h2>
                <pre className="p-4 font-mono text-sm text-gray-800 break-words whitespace-pre-wrap bg-gray-100 rounded-md">
                  <code>{item.input}</code>
                </pre>
                <h2 className="mt-2 font-semibold text-gray-700 text-md">
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
            <ul className="px-4 space-y-1 text-gray-800 list-disc list-inside">
              {getData?.edgeCases?.map((caseItem, index) => (
                <li key={index}>{caseItem}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleQuestion;
