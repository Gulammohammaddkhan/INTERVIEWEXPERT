import { BrowserRouter, Routes, Route, useMatch } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./Components/Products";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import CodingQuestions from "./Components/CodingQuestions";
import SingleQuestion from "./Components/SingleQuestion";
import { useRef } from "react";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const productRef = useRef(null);
  const questionRef = useRef(null);

  const goToRefs = () => {
    if (productRef.current) {
      productRef.current.scrollIntoView({
        behavior: "smooth",
      });
    } else if (questionRef.current) {
      questionRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };
  const handlePathName = useMatch("/interview-preparation/:slug/SingleQ");

  return (
    <>
      <div className="bg-[#022a45]">
        {!handlePathName ? <Header /> : ""}
        {!handlePathName ? <Hero goToRefs={goToRefs} /> : ""}
      </div>
      <Routes>
        {/* <Route path="/" element={<Registration />} />
        <Route path="/Login" element={<Login />} /> */}
        <Route
          path="/products"
          element={<Products productRef={productRef} />}
        />
        <Route
          path="/interview-preparation"
          element={<CodingQuestions questionRef={questionRef} />}
        />
        <Route path="/" element={<Home />} />
        <Route
          path="/interview-preparation/:slug/SingleQ"
          element={<SingleQuestion />}
        />
      </Routes>
    </>
  );
}

export default App;
