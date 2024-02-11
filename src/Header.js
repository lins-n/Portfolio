import React, { useEffect, useRef } from "react";
import CTA from "./CTA";
import mockups from "./images/mockups.png";
import { motion, useInView, useAnimation } from "framer-motion";

const Header = () => {
  return (
    <header
      className=""
      style={{
        backgroundImage: `url(${mockups})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className=" flex flex-col h-screen  w-full justify-center text-4xl lg:text-9xl md:text-6xl sm:text-6xl items-center p-4"
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
        <CTA>Services</CTA>
      </motion.div>
    </header>
  );
};

export default Header;
