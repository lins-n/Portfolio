import React from "react";
import { LuChevronDown } from "react-icons/lu";

const CTA = () => {
  return (
    <div className="m-4 gap-4 flex  items-center">
      <a
        href="#services"
        className="text-3xl text-accent-color h hover:bg-accent-color/25 bg-accent-color/5 transition duration-500 ease-in-out rounded-full p-2 border opacity-1 border-accent-color "
      >
        <LuChevronDown size={18} />
      </a>
      <p className="text-base text-accent-color uppercase tracking-widest font-satoshi ">
        My services
      </p>
    </div>
  );
};

export default CTA;
