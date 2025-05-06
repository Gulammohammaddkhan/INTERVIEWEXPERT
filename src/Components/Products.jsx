import React from "react";
import ContentWrapper from "./ContentWrapper";
import Card from "./Card";
import Footer from "./Footer";
import BeforeFooter from "./BeforeFooter";
import { productData } from "../Data";
import FrontendQuestions from "./FrontendQuestions";

function Products() {
  return (
    <div>
      {/* <ContentWrapper> */}
      <div className="grid grid-cols-1 gap-8 px-6 py-12 sm:grid-cols-2 md:grid-cols-3">
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
