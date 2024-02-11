import React from "react";
import me from "../images/me.png";
import CTA from "../CTA";

const About = () => {
  return (
    <div className="container ">
      <div className="w-full py-14">
        <div className="xl:flex justify-between">
          <img
            src={me}
            alt="Collins"
            className="bg-no-repeat bg-cover shrink"
          />
          <div className=" w-full xl:w-2/3 p-16">
            <p className="font-gambetta italic text-9xl text-accent-color pt-6 pb-4 text-center xl:text-left">
              Collins <br /> Nudekor
            </p>
            <p className="font-satoshi w-full xl:w-3/4 text-lg text-accent-color text-center xl:text-left ">
              I design beautiful user interfaces for mobile apps, websites, and
              more.I design beautiful user interfaces for mobile apps, websites,
              and more.
            </p>
            <div className="text-center xl:text-left">
              <CTA>About me</CTA>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
