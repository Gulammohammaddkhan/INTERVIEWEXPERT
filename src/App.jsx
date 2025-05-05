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
import Registration from "./Components/Registration";
import Login from "./Components/Login";

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

  const handlePathName = useMatch("/interview-preparation/:slug/SingleQ");

  return (
    <>
      {!handlePathName ? <Header /> : ""}
      {!handlePathName ? <Hero /> : ""}
      <Routes>
        <Route path="/" element={<Registration />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Products" element={<Products />} />
        <Route path="/interview-preparation" element={<CodingQuestions />} />
        <Route path="/Home" element={<Home />} />
        <Route
          path="/interview-preparation/:slug/SingleQ"
          element={<SingleQuestion />}
        />
      </Routes>
    </>
  );
}

export default App;
