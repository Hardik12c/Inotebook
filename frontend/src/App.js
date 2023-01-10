import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Alert from "./components/Alert";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Alert message={"This is amazing app"}/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
