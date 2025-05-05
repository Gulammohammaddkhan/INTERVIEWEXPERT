import React from "react";
import CustomButton from "./CustomButton";
import { aboutData } from "../Data";
import { Link } from "react-router-dom";
import Card from "./Card";

// function About() {
//   return (
//     <div className="mb-20">
//       <div className="mt-40 justify-items-center">
//         <h2 className="pb-6 text-4xl font-normal">What is AlgoExpert?</h2>
//         <CustomButton
//           img={
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               aria-hidden="true"
//               class="LpEACC7swKHg17Rad2wu"
//               data-icon="play-circle"
//               data-prefix="fas"
//               viewBox="0 0 512 512"
//               alt=""
//               height={30}
//               width={30}
//             >
//               <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8m115.7 272-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42"></path>
//             </svg>
//           }
//           text="Watch the Video"
//           border="2px solid black"
//           padding="5px"
//           hover="#000"
//           bgColor="#fff"
//           textColor="#000"
//         />
//       </div>

//       <div className="grid grid-cols-3 gap-10 pt-12 mx-10">
//         {aboutData?.map((item, index) => {
//           return <Card item={item} key={index} />;
//         })}
//       </div>
//     </div>
//   );
// }

// export default About;

// *******************************************************************************

function About() {
  return (
    <div className="mb-20 px-4 md:px-10  bg-[#f7fafc]">
      {/* Top Section */}
      <div className="mt-20 text-center md:mt-30">
        <h2 className="pb-6 text-3xl font-normal sm:text-4xl">
          What is AlgoExpert?
        </h2>

        <div className="flex justify-center mt-4">
          <CustomButton
            img={
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                aria-hidden="true"
                viewBox="0 0 512 512"
                height={30}
                width={30}>
                <path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8m115.7 272-176 101c-15.8 8.8-35.7-2.5-35.7-21V152c0-18.4 19.8-29.8 35.7-21l176 107c16.4 9.2 16.4 32.9 0 42"></path>
              </svg>
            }
            text="Watch the Video"
            border="2px solid black"
            padding="5px 20px"
            hover="#000"
            bgColor="#fff"
            textColor="#000"
          />
        </div>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 gap-8 pt-12 sm:grid-cols-2 md:grid-cols-3">
        {aboutData?.map((item, index) => (
          <Card item={item} key={index} />
        ))}
      </div>
    </div>
  );
}

export default About;
