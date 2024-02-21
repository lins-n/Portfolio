import React, { useEffect, useRef } from "react";
import img6 from "./images/img6.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import SubHeader from "./SubHeader";
import { Link } from "react-router-dom";
import bits from "./images/bits.jpg";
import siscode2 from "./images/siscode1.jpg";
import reps1 from "./images/reps1.jpg";
import barron from "./images/barron.png";

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
        <Link to="/design/siscode">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              backgroundImage: `url(${siscode2})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: 450,
            }}
            className="relative "
          >
            <div className="bg-secondary-bg/50 backdrop-blur-lg flex border absolute inset-x-0 bottom-0 border-accent-color/50 justify-between items-center  m-6 p-4 s ">
              <p className="tracking-widest font-satoshi uppercase text-accent-color font-bold">
                Siscode Gh logo
              </p>
              <p className="tracking-widest text-sm lg:text-base uppercase font-satoshi text-accent-color">
                Graphic design
              </p>
            </div>
          </motion.div>
        </Link>
        <Link to="/ui/bitsy">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              backgroundImage: `url(${bits})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: 450,
            }}
            className="relative "
          >
            <div className="bg-secondary-bg/50 backdrop-blur-lg flex border absolute inset-x-0 bottom-0 border-accent-color/50 justify-between items-center  m-6 p-4 s ">
              <p className="tracking-widest font-satoshi text-accent-color font-bold">
                BITSY APP
              </p>
              <p className="tracking-widest text-sm lg:text-base font-satoshi text-accent-color">
                UI DESIGN
              </p>
            </div>
          </motion.div>
        </Link>

        <Link to="/design/sporty">
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            style={{
              backgroundImage: `url(${reps1})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: 450,
            }}
            className="relative "
          >
            <div className="bg-secondary-bg/30 backdrop-blur-lg flex border absolute inset-x-0 bottom-0 border-accent-color/50 justify-between   items-center  m-6 p-4 s ">
              <p className="tracking-widest font-satoshi text-accent-color font-bold">
                SPORTY REPS
              </p>
              <p className="tracking-widest text-sm lg:text-base font-satoshi text-accent-color">
                GRAPHIC DESIGN
              </p>
            </div>
          </motion.div>
        </Link>

        <motion.div
          initial={{ opacity: 0, y: 75 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          style={{
            backgroundImage: `url(${barron})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",
            height: 450,
          }}
          className="relative "
        >
          <div className="bg-secondary-bg/50 backdrop-blur-lg flex border absolute inset-x-0 bottom-0 border-accent-color/50 justify-between items-center m-6 p-4 s ">
            <p className="tracking-widest font-satoshi text-accent-color font-bold">
              BARRON PROPERTY LOGO
            </p>
            <p className="tracking-widest text-sm lg:text-base  font-satoshi text-accent-color">
              GRAPHIC DESIGN
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Designs;
