import React from "react";
import astron from "./images/astron.png";
import { RiHome6Line } from "react-icons/ri";
import logos from "./Logos";

const LogoSlider = () => {
  return (
    <div className="relative  container w-full overflow-hidden mb-6  ">
      <div
        className=" flex  w-fit"
        style={{ animation: "loop 25s linear infinite" }}
      >
        {logos.map((logo, index) => (
          <div
            className=" flex w-[125px] items-center justify-centerr"
            key={index}
          >
            {logo}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            className=" flex w-[125px]  items-center justify-center"
            key={index}
          >
            {logo}
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 pointer-events-none "
        style={{
          background:
            "linear-gradient(90deg, #0e0e0e, transparent 30%, transparent 70%, #0e0e0e",
        }}
      ></div>
    </div>
  );
};

export default LogoSlider;
