import React from "react";
import { GiSolarSystem } from "react-icons/gi";
import { GiKeyboard } from "react-icons/gi";

// function Videos() {
//   return (
//     <div className="flex pt-20 justify-center items-center self-center gap-10 mx-7 pb-20 ">
//       <div className="w-[50%]">
//         <div>
//           <h2 className="text-3xl pb-7 text-[#02213d]">
//             Our Videos Set Us Apart.
//           </h2>
//           <p className="text-xl pb-7 text-[#445d6e]">
//             The truth is that interview questions and algorithms are difficult.
//             Even more difficult is trying to understand the inner workings of a
//             complex algorithm from a book or from a poorly thought-out video
//             shot on your grandma's camera. Our crisp 1080p videos boast
//             crystal-clear audio and are strategically divided into two parts to
//             give you the most comprehensive explanations to questions. That's
//             over 100 hours of content specifically tailored to make interview
//             questions and algorithms easy.
//           </p>
//         </div>
//         <div className="flex gap-5">
//           <div className="">
//             <div className="flex text-[#02213d] gap-5 items-center">
//               <div className="text-5xl hover:text-[#626fe3]  hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
//                 <GiSolarSystem />
//               </div>
//               <h3 className="text-xl  text-[#02213d]">Conceptual Overview</h3>
//             </div>
//             <p className="text-start text-[#445d6e]  leading-6 ">
//               Our videos all start with an in-depth conceptual overview of the
//               algorithm at hand: how to approach it, how to implement it, how to
//               optimize it, and how to analyze its space-time complexity.
//               <b className="text-[#626fe3] cursor-pointer">See an example</b>
//             </p>
//           </div>

//           <div>
//             <div className="flex text-[#02213d] gap-5 items-center">
//               <div className="text-5xl hover:text-[#626fe3]  hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
//                 <GiKeyboard />
//               </div>
//               <h3 className="text-xl  text-[#02213d]">Code Walkthrough</h3>
//             </div>
//             <div>
//               <p className="text-start text-[#445d6e]  leading-6 ">
//                 Our videos all end with a complete walkthrough from start to
//                 finish of the actual code implementation of the algorithm. This
//                 is done in Python, since Python is very easy to read.
//                 <b className="text-[#626fe3] cursor-pointer">See an example</b>
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="w-full max-w-xl mx-auto mt-10 flex justify-center items-center">
//         <video controls autoPlay className="w-full rounded-lg shadow-lg ">
//           <source src="https://youtu.be/eGE-tFalwpA?si=JuZ69c8NX1vxvwo5"></source>
//         </video>
//       </div>
//     </div>
//   );
// }

// export default Videos;

// ******************************************************************

function Videos() {
  return (
    <div className="flex flex-col lg:flex-row pt-20 justify-center items-center gap-10 mx-7 pb-20">
      {/* Text Section */}
      <div className="w-full lg:w-[50%]">
        <div>
          <h2 className="text-3xl sm:text-4xl pb-7 text-[#02213d] text-center lg:text-left">
            Our Videos Set Us Apart.
          </h2>
          <p className="text-lg sm:text-xl pb-7 text-[#445d6e] text-center lg:text-left">
            The truth is that interview questions and algorithms are difficult.
            Even more difficult is trying to understand the inner workings of a
            complex algorithm from a book or from a poorly thought-out video
            shot on your grandma's camera. Our crisp 1080p videos boast
            crystal-clear audio and are strategically divided into two parts to
            give you the most comprehensive explanations to questions. That's
            over 100 hours of content specifically tailored to make interview
            questions and algorithms easy.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          {/* Conceptual Overview */}
          <div className="flex flex-col gap-3">
            <div className="flex text-[#02213d] gap-5 items-center">
              <div className="text-4xl sm:text-5xl hover:text-[#626fe3] hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
                <GiSolarSystem />
              </div>
              <h3 className="text-xl text-[#02213d]">Conceptual Overview</h3>
            </div>
            <p className="text-start text-[#445d6e] leading-6">
              Our videos all start with an in-depth conceptual overview of the
              algorithm at hand: how to approach it, how to implement it, how to
              optimize it, and how to analyze its space-time complexity.
              {/* <b className="text-[#626fe3] cursor-pointer">See an example</b> */}
            </p>
          </div>

          {/* Code Walkthrough */}
          <div className="flex flex-col gap-3">
            <div className="flex text-[#02213d] gap-5 items-center">
              <div className="text-4xl sm:text-5xl hover:text-[#626fe3] hover:scale-125 transition-transform duration-300 ease-in-out cursor-pointer">
                <GiKeyboard />
              </div>
              <h3 className="text-xl text-[#02213d]">Code Walkthrough</h3>
            </div>
            <p className="text-start text-[#445d6e] leading-6">
              Our videos all end with a complete walkthrough from start to
              finish of the actual code implementation of the algorithm. This is
              done in Python, since Python is very easy to read.
              {/* <b className="text-[#626fe3] cursor-pointer">See an example</b> */}
            </p>
          </div>
        </div>
      </div>

      {/* Video Section */}
      <div className="w-full max-w-xl mx-auto mt-10 flex justify-center items-center">
        <video controls autoPlay className="w-full rounded-lg shadow-lg">
          <source src="https://youtu.be/eGE-tFalwpA?si=JuZ69c8NX1vxvwo5"></source>
        </video>
      </div>
    </div>
  );
}

export default Videos;
