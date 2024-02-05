import React, { useEffect, useRef } from "react";
import img6 from "./images/img6.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import SubHeader from "./SubHeader";

const Designs = () => {
  // const ref = useRef(null);
  // const isInView = useInView(ref, { once: true });
  // const mainControls = useAnimation();

  // useEffect(() => {
  //   if (isInView) {
  //     mainControls.start("visible");
  //   }
  // }, [isInView]);
  return (
    <div className="max-w-screen-2xl container">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <SubHeader />
      </motion.div>
      <div className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4 p-4 justify-center w-full ">
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            backgroundImage: `url(${img6})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 450,
          }}
          className="relative "
        >
          <div className="bg-secondary-bg/30 backdrop-blur-lg flex border absolute inset-x-0 bottom-0 border-accent-color/50 justify-between m-6 p-4 s ">
            <p className="tracking-widest font-satoshi text-accent-color font-bold">
              First
            </p>
            <p className="tracking-widest font-satoshi text-accent-color">
              UI DESIGN
            </p>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            backgroundImage: `url(${img6})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 450,
          }}
          className="relative"
        >
          <div className="bg-secondary-bg/30 backdrop-blur-lg flex border absolute inset-x-0 bottom-0 border-accent-color/50 justify-between m-6 p-4 s ">
            <p className="tracking-widest font-satoshi text-accent-color font-bold">
              First
            </p>
            <p className="tracking-widest font-satoshi text-accent-color">
              UI DESIGN
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            backgroundImage: `url(${img6})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 450,
          }}
          className="relative"
        >
          <div className="bg-secondary-bg/30 backdrop-blur-lg flex border absolute inset-x-0 bottom-0 border-accent-color/50 justify-between m-6 p-4 s ">
            <p className="tracking-widest font-satoshi text-accent-color font-bold">
              First
            </p>
            <p className="tracking-widest font-satoshi text-accent-color">
              UI DESIGN
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            backgroundImage: `url(${img6})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 450,
          }}
          className="relative"
        >
          <div className="bg-secondary-bg/30 backdrop-blur-lg flex border absolute inset-x-0 bottom-0 border-accent-color/50 justify-between m-6 p-4 s ">
            <p className="tracking-widest font-satoshi text-accent-color font-bold">
              First
            </p>
            <p className="tracking-widest font-satoshi text-accent-color">
              UI DESIGN
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Designs;
