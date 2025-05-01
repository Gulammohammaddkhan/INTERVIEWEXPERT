import React from "react";
import CustomButton from "./CustomButton";
import { useLocation, useParams } from "react-router-dom";

function Hero() {
  const location = useLocation();
  return (
    <div className="flex flex-col-reverse md:flex-row justify-between items-center relative bg-[#00182e] pl-6 md:pl-16 pr-0">
      {/* Left Content */}
      <div className="flex flex-col bg-[#00182e] text-white pt-12 md:pt-28 pb-12 md:pb-24">
        <div>
          <h1 className="text-3xl md:text-5xl font-bold pb-6">
            {location.pathname === "/interview-preparation"
              ? "Front-End Expert"
              : "Interview Expert"}
          </h1>
          <p className="text-base md:text-lg pb-6">
            The ultimate resource to prepare for frontends coding interviews.
            <br />
            Everything you need, in one streamlined platform.
          </p>
        </div>

        {/* Button */}
        <div className="mt-6">
          <CustomButton
            img={
              <svg
                height={25}
                width={25}
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 611.996 611.996">
                {/* SVG Paths */}
                <path d="M588.63 113.193 213.812 33.871c-15.858-3.355-31.576 6.876-34.931 22.734l-7.121 45.762 432.477 91.519 7.121-45.762c3.355-15.852-6.87-31.575-22.728-34.931M431.009 203.591c-4.378-15.766-20.854-25.085-36.615-20.714L323.24 202.63l-167.742-35.5-18.448 87.165-115.264 31.992c-15.76 4.372-25.079 20.848-20.708 36.609l64.958 234.078c4.378 15.76 20.855 25.085 36.615 20.708l372.608-103.403c15.76-4.378 25.079-20.848 20.708-36.615l-11.15-40.184 41.789 8.835c15.858 3.361 31.576-6.87 34.931-22.728l26.439-124.937-150.526-31.853zm43.031 118.968 9.215-43.552c1.384-6.521 7.85-10.727 14.37-9.35l43.552 9.221c6.527 1.384 10.733 7.843 9.356 14.37l-9.215 43.552c-1.384 6.521-7.849 10.733-14.37 9.35l-43.552-9.215c-6.533-1.389-10.74-7.855-9.356-14.376M28.27 309.646l103.115-28.606 243.299-67.517 26.181-7.274c.478-.129.955-.19 1.421-.19 2.1 0 4.611 1.378 5.345 4.017l3.074 11.07 9.631 34.704L37.148 362.186l-12.705-45.768c-.796-2.872.956-5.976 3.827-6.772m444.331 134.495c.49 1.776-.024 3.245-.545 4.164-.514.918-1.506 2.119-3.282 2.608L96.173 554.316a5.4 5.4 0 0 1-1.421.196c-2.1 0-4.611-1.384-5.345-4.023L51.519 413.955l383.188-106.342 23.371 84.208z"></path>
                //{" "}
                <path d="M156.379 453.484c-1.788-6.429-8.499-10.225-14.928-8.443l-43.515 12.08c-6.423 1.782-10.225 8.499-8.437 14.928l12.074 43.509c1.788 6.429 8.499 10.225 14.928 8.437l43.515-12.074c6.429-1.782 10.225-8.499 8.443-14.928z"></path>
              </svg>
            }
            text={"Buy AlgoExpert"}
            bgColor="#626fe3"
            textColor="#fff"
            hover="#4c5adf"
            padding="12px 40px"
          />
        </div>
      </div>
      {/* Image */}
      <div className="relative w-full md:w-[50%] flex justify-center md:justify-end">
        <img
          src="https://plus.unsplash.com/premium_photo-1681487769650-a0c3fbaed85a?q=80&w=2155&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="w-full max-w-[600px] h-[450px] object-cover "
          alt="Hero"
        />
      </div>
    </div>
  );
}

export default Hero;
