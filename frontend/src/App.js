import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Home from "./components/Home";
import Alert from "./components/Alert";
import Login from "./components/Login";
import Signup from "./components/Signup";
function App() {
  return (
    <Router>
      <>
        <Navbar />
        <Alert message={"This is amazing app"}/>
        <Routes>
          <Route path="/about" element={<About />} />
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Signup/>} />
        </Routes>
      </>
    </Router>
  );
}

export default App;
