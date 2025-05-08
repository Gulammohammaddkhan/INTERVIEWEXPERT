import React from "react";
import Card from "./Card";
import Footer from "./Footer";
import BeforeFooter from "./BeforeFooter";
import FrontendQuestions from "./FrontendQuestions";
import { PiBracketsCurlyLight, PiCertificateLight } from "react-icons/pi";
import { GiNotebook } from "react-icons/gi";
import { MdOutlineFactCheck } from "react-icons/md";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";
import { ImHtmlFive2 } from "react-icons/im";
import { RiListCheck3 } from "react-icons/ri";

function Products() {
  const productData = [
    {
      key: 1,
      logo: RiListCheck3,
      heading: "Frontend Interview Questions",
      disc: "Frontend interviews require a lot of experience building complex frontend features. We've carefully selected 50 frontend coding questions to provide you with all the practice you need.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 2,
      logo: ImHtmlFive2,
      heading: "HTML Crash Course",
      disc: "The bedrock of frontend development, HTML is deceptively simple. Our HTML crash course equips you with all the knowledge you need to genuinely understand HTML.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 3,
      logo: PiBracketsCurlyLight,
      heading: "CSS Crash Course",
      disc: "Love it or hate it, frontend development without CSS is hardly frontend development. Our CSS crash course teaches you the ins and outs of CSS to tackle any CSS challenge.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 4,
      logo: TbBrandJavascript,
      heading: "JavaScript Crash Course",
      disc: "Perhaps the quirkiest of programming languages, JavaScript lies at the heart of frontend engineering. Our JavaScript crash course covers every aspect of the language you need to know.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 5,
      logo: IoLogoReact,
      heading: "React Crash Course",
      disc: "With frontend engineering come frameworks, and with frameworks comes React. Our React crash course gives you the practical knowledge you need to be a true frontend expert.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 6,
      logo: MdOutlineFactCheck,
      heading: "Web Dev Fundamentals",
      disc: "As if mastering HTML, CSS, and JavaScript weren't enough, understanding web systems is a must for frontend interviews. Our web dev fundamentals crash course lets you do just that.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 7,
      logo: GiNotebook,
      heading: "Frontend Quiz",
      disc: "Frontend interviews require a breadth of knowledge about frontend development. We've carefully curated a 50 -question quiz to test your understanding of popular frontend concepts.",
      link: {
        title: "Learn more.",
      },
    },
    {
      key: 8,
      logo: PiCertificateLight,
      heading: "Recruiting Profile & Certificate",
      disc: "Landing technical interviews can be harder than passing them. Once you earn the FrontendExpert Certificate, we refer you to tech companies so you can directly start their interview process.",
      link: {
        title: "Learn more.",
      },
    },
  ];
  return (
    <div>
      <div className="grid grid-cols-1 gap-8 px-6 py-12 mt-20 sm:grid-cols-2 md:grid-cols-3">
        {productData?.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
      <FrontendQuestions />
      <BeforeFooter />
      <Footer />
    </div>
  );
}

export default Products;
