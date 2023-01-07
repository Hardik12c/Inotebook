import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
