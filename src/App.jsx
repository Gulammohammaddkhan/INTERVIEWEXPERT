import {
  BrowserRouter,
  Routes,
  Route,
  useLocation,
  useMatch,
} from "react-router-dom";
import Home from "./pages/Home";
import Products from "./Components/Products";
import Hero from "./Components/Hero";
import Header from "./Components/Header";
import CodingQuestions from "./Components/CodingQuestions";
import SingleQuestion from "./Components/SingleQuestion";

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

function AppContent() {
  const location = useLocation();
  console.log(location);

  const handlePathName = useMatch("/interview-preparation/:slug/SingleQ/:id");

  return (
    <>
      {!handlePathName ? <Header /> : ""}
      {!handlePathName ? <Hero /> : ""}
      <Routes>
        <Route path="/Products" element={<Products />} />
        <Route path="/interview-preparation" element={<CodingQuestions />} />
        <Route path="/" element={<Home />} />
        <Route
          path="/interview-preparation/:slug/SingleQ/:id"
          element={<SingleQuestion />}
        />
      </Routes>
    </>
  );
}

export default App;
