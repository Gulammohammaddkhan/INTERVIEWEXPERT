import React, { useEffect } from "react";
import Header from "../Components/Header";
import Hero from "../Components/Hero";
import About from "../Components/About";
import Table from "../Components/Table";
import Partners from "../Components/Partners";
import Reviews from "../Components/Reviews";
import Questions from "../Components/Questions";
import VideoCard from "../Components/VideoCard";
import DataStructures from "../Components/DataStructures";
import Practice from "../Components/Practice";
import Notation from "../Components/Notation";
import BeforeFooter from "../Components/BeforeFooter";
import Footer from "../Components/Footer";
import ContentWrapper from "../Components/ContentWrapper";
import Languages from "../Components/Languages";

const Home = () => {
useEffect(() => {
  window.scrollTo({ top: 0, behavior: "smooth" });
}, []);
  return (
    <>
      {/* <Hero /> */}
      {/* <Header /> */}
      <ContentWrapper>
        <About />
        <Table />
        <Partners />
        <Reviews />
      </ContentWrapper>
      <Questions />
      <ContentWrapper>
        <VideoCard />
        <DataStructures />
        <Languages />
        <Practice />
        <Notation />
      </ContentWrapper>
      <BeforeFooter />
      <Footer />
    </>
  );
};

export default Home;
