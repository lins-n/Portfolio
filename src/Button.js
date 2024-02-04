import React, { Children } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { useState } from "react";

const Button = (props) => {
  const { children } = props;
  return (
    <div className="gap-4 flex  items-center">
      <a
        href="#top"
        className=" text-accent-color hover:bg-accent-color/25 bg-accent-color/5 rounded-full 
        p-1 border hover:rotate-45 transition duration-500 ease-in-out border-accent-color "
      >
        <GoArrowUpRight size={18} />
      </a>
      <button className="text-base text-accent-color uppercase tracking-widest font-satoshi ">
        {children}
      </button>
    </div>
  );
};

export default Button;
