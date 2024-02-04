import React from "react";
import CTA from "./CTA";
import mockups from "./images/mockups.png";

const Header = () => {
  return (
    <header
      style={{
        backgroundImage: `url(${mockups})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" flex flex-col h-screen  w-full justify-center text-4xl lg:text-8xl md:text-6xl sm:text-6xl items-center p-4"
    >
      <p className=" font-satoshi text-accent-color  text-center">
        Hi, I'm Collins
      </p>
      <p className=" font-gambetta italic text-accent-color  text-center">
        Designer & Developer
      </p>
      <p className="text-lg lg:text-lg md:text-base sm:text-base text-accent-color text-center leading-2 font-satoshi p-4">
        I enjoy making cool designs and building software.
        {/* <br /> */}
      </p>
      <CTA />
    </header>
  );
};

export default Header;
