import React from "react";
import amazon from "../../public/Amazon.png";
import bloomberg from "../../public/Bloomberg.png";
import twoSigma from "../../public/Two sigma.png";
import fb from "../../public/Facebook.png";
import google from "../../public/Google.png";
import microsoft from "../../public/Microsoft.png";
import blackrock from "../../public/BlackRock.png";
import zillow from "../../public/Zillow.png";
import consensys from "../../public/consensys.png";
import universal from "../../public/NBC-Universal.png";
import morgan from "../../public/Morgan-Stanley.png";
import simon from "../../public/Simon.png";
import AutoSlider from "./AutoSlider";

const companyImages = [amazon, bloomberg, twoSigma, fb, google, microsoft];
const companyImages2 = [blackrock, zillow, consensys, universal, morgan, simon];

function Partners() {
  return (
    <div className=" mx-8 py-12 px-4 bg-white my-50 flex flex-col drop-shadow-xl">
      <h2 className="self-center text-4xl pb-4">With Great Outcomes.</h2>
      <h4 className="self-center text-xl text-[#445d6e] pb-16">
        Our customers have gotten offers from awesome companies.
      </h4>

      <div className="w-full flex justify-center items-center pb-10 overflow-hidden">
        <AutoSlider>
          {companyImages.map((item, i) => (
            <div key={i} className="flex justify-center items-center slide">
              <img
                src={item}
                alt={`Company ${i}`}
                className="w-[160px] h-[50px] object-contain"
              />
            </div>
          ))}
        </AutoSlider>
      </div>

      <div>
        <div className=" slide2 flex justify-center gap-12 items-center">
          <AutoSlider dir="true">
            {companyImages2?.map((img, index) => (
              <div key={index}>
                <img src={img} />
              </div>
            ))}
          </AutoSlider>
        </div>
      </div>
    </div>
  );
}

export default Partners;
