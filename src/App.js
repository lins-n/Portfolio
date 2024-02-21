import Nav from "./Nav";
import Home from "./Pages/Home";
import About from "./Pages/About";
import DesignProject from "./Pages/DesignProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Siscode from "./Pages/Siscode";
import Bitsy from "./Pages/Bitsy";
import Sporty from "./Pages/Sporty";
import Trackwise from "./Pages/Trackwise";
import ItFits from "./Pages/ItFits";
import Rendells from "./Pages/Rendells";

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
          <Route path="design/sporty" element={<Sporty />} />
          <Route path="ui/trackwise" element={<Trackwise />} />
          <Route path="ui/itfits" element={<ItFits />} />
          <Route path="ui/rendells" element={<Rendells />} />
          <Route path="ui/bitsy" element={<Bitsy />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
