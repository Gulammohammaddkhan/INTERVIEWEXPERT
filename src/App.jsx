import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Products from "./Components/Products";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import CodingQuestions from "./Components/CodingQuestions";
import SingleQuestion from "./Components/SingleQuestion";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Hero />
        <Routes>
          <Route path="/Products" element={<Products />} />
          <Route path="/interview-preparation" element={<CodingQuestions />} />
          <Route path="/" element={<Home />} />
          <Route
            path="/interview-preparation/:slug/SingleQ/:id"
            element={<SingleQuestion />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
