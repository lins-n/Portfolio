import React, { useRef, useEffect } from "react";
import CTA from "./CTA";
import Button from "./Button";
import { motion, useInView, useAnimation } from "framer-motion";

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="services"
      className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-4 p-6 justify-center  max-w-screen-2xl container"
    >
      <div className="bg-secondary-bg p-10 border border-accent-color/25  hover:border-accent-color/75 ease-in">
        <p className="font-satoshi text-accent-color">01</p>
        <h1 className="text-xl font-satoshi uppercase tracking-widest text-accent-color font-bold">
          Graphic Design
        </h1>
        <p className="font-satoshi tracking-wide py-4 text-lg leading-7 text-accent-color">
          Elevate your brand with captivating visuals. As a graphic designer, I
          specialize in crafting stunning logos, flyers, and more
        </p>
        <a href="#design">
          <Button> projects</Button>
        </a>
      </div>
      <div className="bg-secondary-bg p-10  border border-accent-color/25 hover:border-accent-color/75 ease-in">
        <p className="font-satoshi text-accent-color">02</p>
        <h1 className="text-xl font-satoshi uppercase tracking-widest text-accent-color font-bold">
          UI/UX Design
        </h1>
        <p className="font-satoshi tracking-wide py-4 text-lg leading-7 text-accent-color">
          I focus on crafting captivating interfaces for mobile apps, websites
          and more.Transforming ideas into seamless user experiences.
        </p>
        <a href="#ui" className="transition duration-800 ease-in-out">
          <Button> projects</Button>
        </a>
      </div>
      <div className="bg-secondary-bg p-10  border border-accent-color/25 hover:border-accent-color/75">
        <p className="font-satoshi text-accent-color">03</p>
        <h1 className="text-xl font-satoshi uppercase tracking-widest text-accent-color font-bold">
          Development
        </h1>
        <p className="font-satoshi tracking-wide py-4 text-lg leading-7 text-accent-color">
          Crafting dynamic digital experiences through expert development.
          Transforming ideas into innovative solutions that leave a lasting
          impact.
        </p>
        <a>
          <Button> Projects</Button>
        </a>
      </div>
    </motion.div>
  );
};

export default Services;
