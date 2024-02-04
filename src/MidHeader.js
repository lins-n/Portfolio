import React from "react";
import { useState } from "react";

const MidHeader = (props) => {
  const { children } = props;
  return (
    <header className=" flex flex-col w-full justify-center my-32 text-4xl lg:text-8xl md:text-6xl sm:text-6xl items-center p-4">
      <p className=" font-satoshi text-accent-color text-base tracking-widest my-6 uppercase">
        ui / ux
      </p>
      <p className=" font-satoshi text-accent-color mb-2">{children} </p>

      <p className="text-lg lg:text-lg md:text-base sm:text-base text-accent-color text-center leading-2 font-satoshi p-4">
        I enjoy making cool designs for mobile apps, websites, logos, and more.
      </p>
    </header>
  );
};

export default MidHeader;
