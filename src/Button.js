import React from "react";
import { GoArrowUpRight } from "react-icons/go";

const Button = ({ children }) => {
  return (
    <div className="group inline-flex items-center gap-2 cursor-pointer">
      <span
        className="font-satoshi text-sm uppercase tracking-widest text-accent-color/60 group-hover:text-accent-color transition-colors duration-200"
        style={{ fontVariationSettings: '"wght" 400' }}
      >
        {children}
      </span>
      <GoArrowUpRight
        size={16}
        className="text-accent-color/60 group-hover:text-accent-color group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all duration-200"
      />
    </div>
  );
};

export default Button;
