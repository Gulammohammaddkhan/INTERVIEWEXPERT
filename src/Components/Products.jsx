import React from "react";
import ContentWrapper from "./ContentWrapper";
import Header from "./Header";
import Hero from "./Hero";
import Card from "./Card";
import Footer from "./Footer";
import BeforeFooter from "./BeforeFooter";
import { productData } from "../Data";
import FrontendQuestions from "./FrontendQuestions";

function Products() {
  return (
    <div>
      {/* <ContentWrapper> */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 py-12 px-6">
        {productData?.map((item, i) => (
          <Card item={item} key={i} />
        ))}
      </div>
      <FrontendQuestions />
      <BeforeFooter />
      <Footer />
      {/* </ContentWrapper> */}
    </div>
  );
}

export default Products;
