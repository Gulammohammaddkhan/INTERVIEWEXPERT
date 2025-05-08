import React, { useState } from "react";
import ReviewCard from "./ReviewCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import imgone from "../assets/Images/Imgone.jpg";
import imgtwo from "../assets/Images/Imgtwo.jpg";
import imgthree from "../assets/Images/Imgthree.jpg";
import imgfour from "../assets/Images/Imgfour.jpg";
import imgfive from "../assets/Images/Imgfive.jpg";
import imgsix from "../assets/Images/Imgsix.jpg";
import imgseven from "../assets/Images/Imgseven.jpg";
import imgeight from "../assets/Images/Imgeight.jpg";
import imgnine from "../assets/Images/Imgnine.jpg";
import imgten from "../assets/Images/Imgten.jpg";
import imgeleven from "../assets/Images/Imgeleven.jpg";
import imgtwelve from "../assets/Images/Imgtwelve.jpg";
import imgthirteen from "../assets/Images/Imgthirteen.jpg";
import imgfourteen from "../assets/Images/Imgfourteen.jpg";
import imgfifteen from "../assets/Images/Imgfifteen.svg";
import google from "../assets/Images/Google.png";
import amazon from "../assets/Images/Amazon.png";
import microsoft from "../assets/Images/Microsoft.png";
import palantir from "../assets/Images/Palantir.png";
import oracle from "../assets/Images/Oracle.png";
import bloomberg from "../assets/Images/Bloomberg.png";
import capitalone from "../assets/Images/CapitalOne.png";
import harvard from "../assets/Images/Harvard.png";
import zillow from "../assets/Images/Zillow.png";
import blackrock from "../assets/Images/BlackRock.png";
import simon from "../assets/Images/Simon.png";
import ethereum from "../assets/Images/Ethereum.svg";

const Reviews = () => {
  const reviewData = [
    {
      key: 1,
      avatar: imgone,
      name: "Alex",
      title: "Software Engineer",
      company: google,
      disc: "InterviewExpert was the backbone of my technical coding interview preparation. It allows you to efficiently work through the most common variations of problems asked by top-tier companies without having to spend hours 'battling' an algorithm only to come up with an inefficient or incorrect solution. There are a lot of resources available for repetition, but InterviewExpert differentiates its product by providing the 'how' and 'why' in clear and concise videos. Developing a deeper understanding of how to approach these problems is better than trying to memorize lines of code. I highly recommend InterviewExpert.",
    },
    {
      key: 2,
      avatar: imgtwo,
      name: "Corbin",
      title: "Software Engineer",
      company: amazon,
      disc: "As a scientist who was looking to break into Tech, I knew the underlying logic of programming, but I had a lot of gaps in my understanding, especially on the types of algorithms questions asked at interviews. I can confidently say that InterviewExpert is one of the best resources out there for interview preparation, with fantastic video tutorials and an excellent question selection that allows you to get a deep understanding of the topics and confidence in your problem solving ability. The site is incredibly intuitive to use and I think that the staff are some of the best out there, being incredibly supportive and passionate about offering a great customer experience. I cannot recommend InterviewExpert highly enough.",
    },
    {
      key: 3,
      avatar: imgthree,
      name: "Carlos",
      title: "Software Developer Intern",
      company: microsoft,
      disc: "I'm just writing to thank you for this product. I had failed in so many interviews before, but I wanted to get into a top tech company so much that I even enrolled in a Master's program. Even then, I was unsure if I had what it takes to make it. From the moment I heard your first video explanation, I thought 'this is exactly the way to solve an interview question' (plus the extra points you can grab by asking clarifying questions). After a few months of studying, mainly on InterviewExpert, I got offers to intern at Microsoft and Google!",
    },
    {
      key: 4,
      avatar: imgfour,
      name: "Marlies",
      title: "Software Engineer",
      company: palantir,
      disc: "I just accepted an offer with Palantir, and also received an offer from Amazon and a handful of startups. InterviewExpert does a great job selecting problems- many of my interview questions were variants of problems on the website. And when I came across problems I hadn't seen before, InterviewExpert gave me the tools to select the right data structures and identify patterns. Thanks InterviewExpert!",
    },
    {
      key: 5,
      avatar: imgfive,
      name: "Adarsh",
      title: "Software Engineer",
      company: oracle,
      disc: "I just got a job offer from Oracle and most of the questions they asked, I had practiced on InterviewExpert. Even when they asked questions I was not familiar with, I was able to break down the problem and write code which I learned from the explanations section on InterviewExpert. Being a Computer Science Engineering student, I had fundamental knowledge in Data Structures & Algorithms, but I didn't know how to approach, break down and apply this knowledge to solve problems. Also since all the problems are classified into categories, I was able to easily identify my weak points and work on those. Extremely grateful to InterviewExpert !",
    },
    {
      key: 6,
      avatar: imgsix,
      name: "Elana",
      title: " Senior Software Engineer",
      company: bloomberg,
      disc: "The video explanations and detailed code examples on InterviewExpert have changed the way I approach coding problems. It has been an incredible asset during my career journey and I highly recommend it to anyone preparing for the job market.",
    },
    {
      key: 7,
      avatar: imgseven,
      name: "Alberto",
      title: "Software Engineer",
      company: capitalone,
      disc: "I've done Udemy, Udacity, Interview Cake, Educative, Egghead, Pluralsight, MIT OpenCourseWare, LeetCode, CodeSignal and various Youtube courses but this stuff that you all are putting out is among the best. Great work!",
    },
    {
      key: 8,
      avatar: imgeight,
      name: "Onyeka",
      title: "Web Developer",
      company: harvard,
      disc: "You can choose to spend your time scouring the internet for resources, or you can invest your money wisely and get as good a resource as you'll need. InterviewExpert is a big league product, with a high quality selection of algorithms and expert explanations. This is the best place to sharpen your problem solving skills on all the best material.",
    },
    {
      key: 9,
      avatar: imgnine,
      name: "Ayoub",
      title: "Software Engineer Intern",
      company: zillow,
      disc: "Hey, just wanted to thank you for InterviewExpert! I signed up a few months back and I went through 60% of the problems. Before InterviewExpert I was awful at solving anything harder than a LeetCode easy, now I can do LeetCode mediums without much effort and tackle LeetCode hards in a reasonable time frame! I don’t think I would have gotten an internship without InterviewExpert, so thank you!",
    },
    {
      key: 10,
      avatar: imgten,
      name: "Sreepriya",
      title: "Software Engineer",
      company: microsoft,
      disc: "According to me landing on a dream job requires strong determination and continuous practice. But the most important thing is to find the right resource for the practice and I found InterviewExpert. InterviewExpert provided me a platform to improve my thought process towards an algorithm question. It really helped me to shape my thinking skills and coding skills. I would definitely recommend to all the aspiring software engineers.",
    },
    {
      key: 11,
      avatar: imgeleven,
      name: "Erik",
      title: "Software Engineer",
      company: blackrock,
      disc: "There are thousands of practice problems out there, but InterviewExpert provides curation, in-depth explanation, code testing, and support for multiple programming languages. A lot of the problems even have multiple solutions. I'm very glad I invested in it, and even though I've already been hired, I'm still using it to keep my skills up.",
    },
    {
      key: 12,
      avatar: imgtwelve,
      name: "Eren",
      title: "Data Engineer",
      company: simon,
      disc: "InterviewExpert was the best resource I used during my coding interview prep. Its structure, hand-picked questions, and detailed explanation videos really set it apart from other resources I tried. It helped me go into my interviews with confidence, allowing me to do well not only with small startups but also with big tech companies.",
    },
    {
      key: 13,
      avatar: imgthirteen,
      name: "Mitch",
      title: "Software Engineer",
      company: ethereum,
      disc: "I've tried a few of the algorithm learning resources and I think InterviewExpert is the best (and no I'm not being paid for this post). The site is super polished and offers a nice breadth of problems to get you best prepared with great solutions and video explanations. If you're on the job hunt, I think pairing InterviewExpert with an interviewing resource like Pramp and/or Interviewing.io is a great strategy.",
    },
    {
      key: 14,
      avatar: imgfourteen,
      name: "Jeremy",
      title: "Analyst",
      company: blackrock,
      disc: "InterviewExpert helped me be confident in my interviews. Their curated list of questions and Clement's thorough review videos ensured that I was ready for anything thrown at me in onsite interviews. I highly recommend InterviewExpert to anyone looking to secure a tech job, or just brush up on their algorithm skills.",
    },
    {
      key: 15,
      avatar: imgfifteen,
      name: "You",
      title: "Dream Job",
      disc: "Got an InterviewExpert success story to share?Tell us  where you work, what your position is, how helpful InterviewExpert was in getting it, and give us a link to your LinkedIn profile!",
    },
  ];
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  const handlePrev = () => {
    setStartIndex((prev) => Math.max(prev - cardsPerPage, 0));
  };

  const handleNext = () => {
    setStartIndex((prev) =>
      Math.min(prev + cardsPerPage, reviewData.length - cardsPerPage)
    );
  };

  const visibleReviews = reviewData.slice(
    startIndex,
    startIndex + cardsPerPage
  );

  return (
    <div className="flex flex-col items-center justify-center px-6 pb-12 md:pb-30">
      <h2 className="pb-8 text-3xl text-center md:text-4xl md:pb-12">
        And Over 200,000 Satisfied Engineers.
      </h2>

      <div className="grid grid-cols-1 gap-7 lg:grid-cols-3 md:gap-10">
        {visibleReviews.map((review, index) => (
          <ReviewCard key={index} data={review} />
        ))}
      </div>
      <div className="flex items-center justify-center gap-4 p-8">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="p-2 text-white bg-[#00182e] rounded disabled:opacity-50">
          <FaChevronLeft />
        </button>
        <button
          onClick={handleNext}
          disabled={startIndex + cardsPerPage >= reviewData.length}
          className="p-2 text-white bg-[#00182e] rounded disabled:opacity-50">
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Reviews;
