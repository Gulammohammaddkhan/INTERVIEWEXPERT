import React from "react";
import CustomButton from "./CustomButton";
import Card from "./Card";
import { RiListCheck3 } from "react-icons/ri";
import { GiLaptop, GiNotebook, GiVideoCamera } from "react-icons/gi";
import { FaListCheck, FaReact } from "react-icons/fa6";
import { BsPcDisplay } from "react-icons/bs";
import { PiCertificateLight } from "react-icons/pi";
import { SiMoleculer } from "react-icons/si";

function About() {
  const aboutData = [
    {
      key: 1,
      logo: RiListCheck3,
      heading: "200 Hand-Picked Questions",
      disc: "Coding interview prep is a numbers game that many candidates lose. We've hand-picked 200  of the best coding interview questions to prepare you for every interview you could encounter.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 2,
      logo: GiVideoCamera,
      heading: "100+ Hours Of Video Explanations",
      disc: "Algorithms are tough to learn on paper. Each of our questions is accompanied by a two-part video explanation to maximize learning. That's over 100 hours of content, all at your fingertips.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 3,
      logo: SiMoleculer,
      heading: "Data Structures Crash Course",
      disc: "Data structures are the pillars of coding interviews. Our video series gives you the foundational knowledge you need to be well-versed in all of the popular data structures.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 4,
      logo: FaListCheck,
      heading: "Solutions In 9 Languages",
      disc: "Not everyone speaks the same programming language. All of our solutions come in 9 different languages:JavaScript, TypeScript, Python, Swift, Kotlin, C++, Java, C#, and Go.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 5,
      logo: GiLaptop,
      heading: "Feature-Rich Coding Workspace",
      disc: "Coding out solutions to algorithm problems is the best way to practice. Our coding workspace lets you type out your answers and run them against our test cases, right here on the website.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 6,
      logo: FaReact,
      heading: "Space-Time Complexity Analyses",
      disc: "Understanding how much memory an algorithm uses and how fast it runs is crucial to passing coding interviews. All of our explanations include a rigorous space-time complexity analysis.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 7,
      logo: GiNotebook,
      heading: "4 Curated Assessments",
      disc: "Real coding interviews are timed and have multiple questions. We've curated 4  assessments to reflect a real day of coding interviews, filled with variety and appropriate difficulty.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 8,
      logo: BsPcDisplay,
      heading: "Mock Coding Interviews",
      disc: "Nothing compares to doing a real coding interview with a real human being. We let you do mock coding interviews with other users on a shared workspace, right here on InterviewExpert.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 9,
      logo: PiCertificateLight,
      heading: "Recruiting Profile & Certificate",
      disc: "Landing technical interviews can be harder than passing them. Once you earn the InterviewExpert Certificate, we refer you to tech companies so you can directly start their interview process.",
      link: {
        title: "Learn more.",
      },
    },
  ];
  return (
    <div className="mb-20 px-4 md:px-10  bg-[#f7fafc]">
      <div className="mt-20 text-center md:mt-30">
        <h2 className="pb-6 text-3xl font-normal sm:text-4xl">
          What is InterviewExpert?
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
