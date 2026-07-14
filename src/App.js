import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import V2App from "./v2/V2App";
import ScrollToTop from "./ScrollToTop";

const DesignProject = lazy(() => import("./Pages/DesignProject"));
const Piktr         = lazy(() => import("./Pages/Piktr"));
const Photography   = lazy(() => import("./Pages/Photography"));
const Siscode       = lazy(() => import("./Pages/Siscode"));
const Bitsy         = lazy(() => import("./Pages/Bitsy"));
const Sporty        = lazy(() => import("./Pages/Sporty"));
const Trackwise     = lazy(() => import("./Pages/Trackwise"));
const ItFits        = lazy(() => import("./Pages/ItFits"));
const Rendells      = lazy(() => import("./Pages/Rendells"));
const Baron         = lazy(() => import("./Pages/Baron"));
const Modena        = lazy(() => import("./Pages/Modena"));
const PrivacyPolicy = lazy(() => import("./Pages/PrivacyPolicy"));
const Terms         = lazy(() => import("./Pages/Terms"));

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Suspense fallback={<div style={{ background: "#0c0c0c", minHeight: "100vh" }} />}>
        <Routes>
          <Route path="/"                element={<V2App />} />
          <Route path="/design"          element={<DesignProject />} />
          <Route path="ui/piktr"         element={<Piktr />} />
          <Route path="/photography"     element={<Photography />} />
          <Route path="/design/siscode"  element={<Siscode />} />
          <Route path="design/sporty"    element={<Sporty />} />
          <Route path="design/baron"     element={<Baron />} />
          <Route path="ui/trackwise"     element={<Trackwise />} />
          <Route path="ui/itfits"        element={<ItFits />} />
          <Route path="ui/rendells"      element={<Rendells />} />
          <Route path="ui/bitsy"          element={<Bitsy />} />
          <Route path="/design/modena"   element={<Modena />} />
          <Route path="/privacy-policy"  element={<PrivacyPolicy />} />
          <Route path="/terms"           element={<Terms />} />
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
