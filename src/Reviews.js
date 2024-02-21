import React from "react";
import MidHeader from "./MidHeader";
import astron from "./images/astron.png";
import img10 from "./images/img10.png";
import img13 from "./images/img13.png";
import img14 from "./images/img14.png";
import { motion } from "framer-motion";

const Reviews = () => {
  return (
    <div className="max-w-screen-2xl container">
      <motion.div>
        <MidHeader>
          <p className=" font-satoshi text-accent-color text-base tracking-widest my-1 md:my-6 uppercase text-center ">
            reviews
          </p>
          What{" "}
          <span className="italic text-accent-color font-gambetta">
            Clients
          </span>{" "}
          Say
          <p className="text-lg lg:text-lg md:text-base sm:text-base text-accent-color text-center leading-2 font-satoshi p-4">
            Project feedback from clients
          </p>
        </MidHeader>
      </motion.div>
      <div
        id="reviews"
        className="grid grid-cols-1 xl:grid-cols-2 lg:grid-cols-2 gap-6 p-4 justify-center w-full max-w-screen-xl container"
      >
        <div>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-secondary-bg p-10 mb-6 border border-accent-color/25  hover:border-accent-color/75 ease-in"
          >
            <img src={astron} width={100} alt="astron logo" />
            <div className="my-3">
              <h1 className="text-lg font-satoshi uppercase tracking-widest text-accent-color pt-6 ">
                logo design with COllins
              </h1>
              <p className="font-satoshi tracking-wide py-4 text-base leading-5 text-accent-color">
                The design is not only visually stunning but also communicates
                the essence of my business effortlessly. Thank you for your
                outstanding work.
              </p>
            </div>
            <div>
              <h1 className=" font-satoshi uppercase tracking-wide font-bold text-accent-color text-sm">
                Astron
              </h1>
              <p className=" font-satoshi text-accent-color text-xs">CEO</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-secondary-bg p-10 border border-accent-color/25  hover:border-accent-color/75 ease-in"
          >
            <img src={img10} width={100} alt="siscode logo" />
            <div className="my-3">
              <h1 className="text-lg font-satoshi uppercase tracking-widest text-accent-color pt-6 ">
                Professional, Collaborative Experience with Collins.
              </h1>
              <p className="font-satoshi tracking-wide py-4 text-base leading-5 text-accent-color">
                I had the pleasure of working with Collins on the logo project
                and was blown away by his expertise and professionalism. He made
                the process seamless and delivered a logo that exceeded our
                expectations. I highly recommend Collins for all your design
                needs.
              </p>
            </div>
            <div>
              <h1 className=" font-satoshi uppercase tracking-wide font-bold text-accent-color text-sm">
                Carl
              </h1>
              <p className=" font-satoshi text-accent-color text-xs">
                CEO, Siscode
              </p>
            </div>
          </motion.div>
        </div>
        <div>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-secondary-bg p-10 border mb-6 border-accent-color/25  hover:border-accent-color/75 ease-in"
          >
            <img src={img13} width={100} alt="elizabeth cooks logo" />
            <div className="my-3">
              <h1 className="text-lg font-satoshi uppercase tracking-widest text-accent-color pt-6 ">
                Collins DID A GREAT JOB.
              </h1>
              <p className="font-satoshi tracking-wide py-4 text-base leading-5 text-accent-color">
                From the initial concepts to the final product, you exceeded my
                expectations at every step. Thank you for creating a logo that
                I'm proud to display everywhere
              </p>
            </div>
            <div>
              <h1 className=" font-satoshi uppercase tracking-wide font-bold text-accent-color text-sm">
                ELIZABETH
              </h1>
              <p className=" font-satoshi text-accent-color text-xs">CEO</p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-secondary-bg p-10 border border-accent-color/25  hover:border-accent-color/75 ease-in"
          >
            <img src={img14} width={100} alt="studio37 logo" />
            <div className="my-3">
              <h1 className="text-lg font-satoshi uppercase tracking-widest text-accent-color pt-6 ">
                PLEASANT EXPERIENCE.
              </h1>
              <p className="font-satoshi tracking-wide py-4 text-base leading-5 text-accent-color">
                I'm absolutely thrilled with my new logo! It's like you read my
                mind and brought my vision to life. The design perfectly
                captures the essence of my brand, and I couldn't be happier with
                the result. It's simple yet impactful, exactly what I was
                looking for.
              </p>
            </div>
            <div>
              <h1 className=" font-satoshi uppercase tracking-wide font-bold text-accent-color text-sm">
                STUDIO 37
              </h1>
              <p className=" font-satoshi text-accent-color text-xs">CEO</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
