import React from "react";
import logos from "./Logos";

const LogoSlider = () => {
  return (
    <div className="relative w-full overflow-hidden py-8 border-y border-accent-color/10">
      <div
        className="flex w-fit"
        style={{ animation: "loop 28s linear infinite" }}
      >
        {logos.map((logo, index) => (
          <div
            className="flex w-[110px] items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-300"
            key={`a-${index}`}
          >
            {logo}
          </div>
        ))}
        {logos.map((logo, index) => (
          <div
            className="flex w-[110px] items-center justify-center opacity-40 hover:opacity-70 transition-opacity duration-300"
            key={`b-${index}`}
          >
            {logo}
          </div>
        ))}
      </div>
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(90deg, #0e0e0e 0%, transparent 20%, transparent 80%, #0e0e0e 100%)",
        }}
      />
    </div>
  );
};

export default LogoSlider;
