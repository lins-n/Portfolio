import React from "react";
import CTA from "../CTA";
import { motion } from "framer-motion";

const HeaderComp = (props) => {
  const { children } = props;
  return (
    <header className="max-w-screen-2xl container">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" flex flex-col py-14 lg:py-36  w-full justify-center text-4xl lg:text-9xl md:text-6xl sm:text-6xl items-center p-4"
      >
        <p className=" font-satoshi text-accent-color  text-center">
          {children}
        </p>

        {/* <p className="text-lg lg:text-lg md:text-base sm:text-base text-accent-color text-center leading-2 font-satoshi p-4">
          I enjoy making cool designs and building software.
          
        </p> */}
        <CTA>See Project</CTA>
      </motion.div>
    </header>
  );
};

export default HeaderComp;
