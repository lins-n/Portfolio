import React from "react";
import "./v2.css";
import V2Nav from "./V2Nav";
import V2Hero from "./V2Hero";
import V2Work from "./V2Work";
import V2Projects from "./V2Projects";
import V2Stack from "./V2Stack";
import V2Archive from "./V2Archive";
import V2Footer from "./V2Footer";

const V2App = () => {
  return (
    <div className="v2">
      <V2Nav />
      <V2Hero />
      <V2Work />
      <V2Projects />
      <V2Stack />
      <V2Archive />
      <V2Footer />
    </div>
  );
};

export default V2App;
