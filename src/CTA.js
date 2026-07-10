import React from "react";

const CTA = ({ children }) => {
  return (
    <span
      className="font-satoshi text-sm uppercase tracking-widest text-main-background bg-accent-color px-6 py-3 hover:bg-accent-color/80 transition-colors duration-200 cursor-pointer"
      style={{ fontVariationSettings: '"wght" 500' }}
    >
      {children}
    </span>
  );
};

export default CTA;
