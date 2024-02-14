import Nav from "./Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import DesignProject from "./Pages/DesignProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Siscode from "./Pages/Siscode";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<DesignProject />} />
          <Route path="/design/siscode" element={<Siscode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
