import Nav from "./Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import DesignProject from "./Pages/DesignProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/design" element={<DesignProject />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
