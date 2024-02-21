import React from "react";
import { useState } from "react";

const MidHeader = (props) => {
  const { children } = props;
  return (
    <header className=" flex flex-col w-full justify-center my-32 text-4xl lg:text-8xl md:text-6xl sm:text-6xl items-center p-4">
      <p className=" font-satoshi text-accent-color mb-2 text-center">
        {children}{" "}
      </p>
    </header>
  );
};

export default MidHeader;
