import React from "react";
import CTA from "./CTA";
import Button from "./Button";

const Services = () => {
  return (
    <div
      id="services"
      className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-4 p-4 justify-center w-full"
    >
      <div className="bg-secondary-bg p-10 border border-accent-color/25  hover:border-accent-color/75 ease-in">
        <p className="font-satoshi text-accent-color">01</p>
        <h1 className="text-xl font-satoshi uppercase tracking-widest text-accent-color font-bold">
          UI/UX Design
        </h1>
        <p className="font-satoshi tracking-wide py-4 text-lg leading-7 text-accent-color">
          I design beautiful user interfaces for mobile apps, websites, and
          more.I design beautiful user interfaces for mobile apps, websites, and
          more.
        </p>
        <Button> Designer</Button>
      </div>
      <div className="bg-secondary-bg p-10  border border-accent-color/25 hover:border-accent-color/75 ease-in">
        <p className="font-satoshi text-accent-color">01</p>
        <h1 className="text-xl font-satoshi uppercase tracking-widest text-accent-color font-bold">
          UI/UX Design
        </h1>
        <p className="font-satoshi tracking-wide py-4 text-lg leading-7 text-accent-color">
          I design beautiful user interfaces for mobile apps, websites, and
          more.I design beautiful user interfaces for mobile apps, websites, and
          more.
        </p>
        <Button> Developer</Button>
      </div>
      <div className="bg-secondary-bg p-10  border border-accent-color/25 hover:border-accent-color/75">
        <p className="font-satoshi text-accent-color">01</p>
        <h1 className="text-xl font-satoshi uppercase tracking-widest text-accent-color font-bold">
          UI/UX Design
        </h1>
        <p className="font-satoshi tracking-wide py-4 text-lg leading-7 text-accent-color">
          I design beautiful user interfaces for mobile apps, websites, and
          more.I design beautiful user interfaces for mobile apps, websites, and
          more.
        </p>
        <Button />
      </div>
    </div>
  );
};

export default Services;
