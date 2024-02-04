import React from "react";
import { useState } from "react";
import Button from "./Button";

const SubHeader = () => {
  return (
    <header className=" flex justify-between p-5 mt-24  w-full">
      <h1 className=" font-satoshi text-accent-color text-2xl lg:text-5xl ">
        Selected Works
      </h1>

      <Button> See more</Button>
    </header>
  );
};

export default SubHeader;
