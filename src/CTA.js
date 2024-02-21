import React from "react";
import { LuChevronDown } from "react-icons/lu";

const CTA = (props) => {
  const { children } = props;
  return (
    <div className="m-4 gap-4 flex  items-center">
      <div className="text-3xl text-accent-color h hover:bg-accent-color/25 bg-accent-color/5 transition duration-500 ease-in-out rounded-full p-2 border opacity-1 border-accent-color ">
        <LuChevronDown size={18} />
      </div>

      <p className="text-base text-accent-color uppercase tracking-widest font-satoshi ">
        {children}
      </p>
    </div>
  );
};

export default CTA;
