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

  const handlePathName = useMatch("/interview-preparation/:slug/SingleQ");

  return (
    <>
      <div className="bg-gradient-to-br from-[#00182e] via-[#073455] to-[#044574]">
        {!handlePathName ? <Header /> : ""}
        {!handlePathName ? <Hero /> : ""}
      </div>
      <Routes>
        {/* <Route path="/" element={<Registration />} />
        <Route path="/Login" element={<Login />} /> */}
        <Route path="/products" element={<Products />} />
        <Route path="/interview-preparation" element={<CodingQuestions />} />
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
