import React from "react";
import MidHeader from "./MidHeader";
import img6 from "./images/img6.jpg";
import { motion, useInView, useAnimation } from "framer-motion";
import itFitss from "./images/itFitss.gif";
import promo1 from "./images/promo1.gif";
import bits from "./images/bits.jpg";
import rendell from "./images/Rendell.jpg";
import { Link } from "react-router-dom";
import intro from "./images/intro.gif";

const UI = () => {
  return (
    <main className="max-w-screen-2xl container" id="ui">
      <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <MidHeader>
          UI/UX{" "}
          <span className=" font-gambetta italic text-accent-color">
            Projects
          </span>
        </MidHeader>
      </motion.div>
      <motion.div
        className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-4 p-4 justify-center w-full "
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <Link to="/ui/bitsy">
          <div
            style={{
              backgroundImage: `url(${bits})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: 450,
            }}
            className="relative "
          >
            <div className="bg-secondary-bg/50 backdrop-blur-lg flex border absolute inset-x-0 bottom-0 border-accent-color/50 justify-between m-6 p-4 s ">
              <p className="tracking-widest font-satoshi text-accent-color font-bold">
                BITSY
              </p>
              <p className="tracking-widest font-satoshi text-accent-color">
                UI DESIGN
              </p>
            </div>
          </div>
        </Link>

        <Link to="/ui/rendells">
          <div
            style={{
              backgroundImage: `url(${rendell})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: 450,
            }}
            className="relative"
          >
            <div className="bg-secondary-bg/30 backdrop-blur-lg flex border absolute inset-x-0 bottom-0 border-accent-color/50 justify-between m-6 p-4 s ">
              <p className="tracking-widest font-satoshi text-accent-color uppercase font-bold">
                Rendells website
              </p>
              <p className="tracking-widest font-satoshi text-accent-color">
                UI DESIGN
              </p>
            </div>
          </div>
        </Link>

        <Link to="/ui/itfits">
          <div
            style={{
              backgroundImage: `url(${itFitss})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: 450,
            }}
            className="relative"
          >
            <div className="bg-secondary-bg/30 backdrop-blur-lg flex border absolute inset-x-0 bottom-0 border-accent-color/50 justify-between m-6 p-4 s ">
              <p className="tracking-widest font-satoshi text-accent-color font-bold">
                ITFITS APP
              </p>
              <p className="tracking-widest font-satoshi text-accent-color">
                UI DESIGN
              </p>
            </div>
          </div>
        </Link>
        <Link to="/ui/trackwise">
          <div
            style={{
              backgroundImage: `url(${intro})`,
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
              backgroundSize: "cover",
              height: 450,
            }}
            className="relative"
          >
            <div className="bg-secondary-bg/30 backdrop-blur-lg flex border absolute inset-x-0 bottom-0 border-accent-color/50 justify-between m-6 p-4 s ">
              <p className="tracking-widest font-satoshi text-accent-color font-bold">
                FINAL YEAR PROJECT
              </p>
              <p className="tracking-widest font-satoshi text-accent-color">
                UI DESIGN
              </p>
            </div>
          </div>
        </Link>
      </motion.div>
    </main>
  );
};

export default UI;
