import React from "react";
import Button from "./Button";
import { Link } from "react-router-dom";

const SubHeader = ({ title = "Selected Works", linkTo = "/design" }) => {
  return (
    <div className="flex justify-between items-end mb-10">
      <h2
        className="font-gambetta text-accent-color"
        style={{
          fontSize: "clamp(2rem, 4vw, 3.5rem)",
          fontVariationSettings: '"wght" 300',
        }}
      >
        {title}
      </h2>
      <Link to={linkTo}>
        <Button>See all</Button>
      </Link>
    </div>
  );
};

export default SubHeader;
