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
    </motion.div>
  );
};

export default Services;
