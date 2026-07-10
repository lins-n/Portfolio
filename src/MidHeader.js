import React from "react";

const MidHeader = ({ children }) => {
  return (
    <h2
      className="font-gambetta text-accent-color mb-10"
      style={{
        fontSize: "clamp(2rem, 4vw, 3.5rem)",
        fontVariationSettings: '"wght" 300',
      }}
    >
      {children}
    </h2>
  );
};

export default MidHeader;
