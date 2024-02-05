import React from "react";
import MidHeader from "./MidHeader";
import astron from "./images/astron.png";
import { motion, useInView, useAnimation } from "framer-motion";

const Reviews = () => {
  return (
    <div className="max-w-screen-2xl container">
      <motion.div>
        <MidHeader>
          What{" "}
          <span className="italic text-accent-color font-gambetta">
            Clients
          </span>{" "}
          Say
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
            <img src={astron} width={100} />
            <div className="my-3">
              <h1 className="text-lg font-satoshi uppercase tracking-widest text-accent-color pt-6 ">
                Professional, Collaborative Web Design Experience with Collins.
              </h1>
              <p className="font-satoshi tracking-wide py-4 text-base leading-5 text-accent-color">
                I had the pleasure of working with Arik on a website development
                project and was blown away by his expertise and professionalism.
                He made the process seamless and delivered a website that
                exceeded our expectations. I highly recommend Arik for all your
                web development needs.
              </p>
            </div>
            <div>
              <h1 className=" font-satoshi uppercase tracking-wide font-bold text-accent-color text-sm">
                Peter Crabbe
              </h1>
              <p className=" font-satoshi text-accent-color text-xs">
                CEO, Astron
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-secondary-bg p-10 border border-accent-color/25  hover:border-accent-color/75 ease-in"
          >
            <img src={astron} width={100} />
            <div className="my-3">
              <h1 className="text-lg font-satoshi uppercase tracking-widest text-accent-color pt-6 ">
                Professional, Collaborative Web Design Experience with Collins.
              </h1>
              <p className="font-satoshi tracking-wide py-4 text-base leading-5 text-accent-color">
                I had the pleasure of working with Arik on a website development
                project and was blown away by his expertise and professionalism.
                He made the process seamless and delivered a website that
                exceeded our expectations. I highly recommend Arik for all your
                web development needs.
              </p>
            </div>
            <div>
              <h1 className=" font-satoshi uppercase tracking-wide font-bold text-accent-color text-sm">
                Peter Crabbe
              </h1>
              <p className=" font-satoshi text-accent-color text-xs">
                CEO, Astron
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
            <img src={astron} width={100} />
            <div className="my-3">
              <h1 className="text-lg font-satoshi uppercase tracking-widest text-accent-color pt-6 ">
                Professional, Collaborative Web Design Experience with Collins.
              </h1>
              <p className="font-satoshi tracking-wide py-4 text-base leading-5 text-accent-color">
                I had the pleasure of working with Arik on a website development
                project and was blown away by his expertise and professionalism.
              </p>
            </div>
            <div>
              <h1 className=" font-satoshi uppercase tracking-wide font-bold text-accent-color text-sm">
                Peter Crabbe
              </h1>
              <p className=" font-satoshi text-accent-color text-xs">
                CEO, Astron
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 75 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="bg-secondary-bg p-10 border border-accent-color/25  hover:border-accent-color/75 ease-in"
          >
            <img src={astron} width={100} />
            <div className="my-3">
              <h1 className="text-lg font-satoshi uppercase tracking-widest text-accent-color pt-6 ">
                Professional, Collaborative Web Design Experience with Collins.
              </h1>
              <p className="font-satoshi tracking-wide py-4 text-base leading-5 text-accent-color">
                I had the pleasure of working with Arik on a website development
                project and was blown away by his expertise and professionalism.
                He made the process seamless and delivered a website that
                exceeded our expectations. I highly recommend Arik for all your
                web development needs.
              </p>
            </div>
            <div>
              <h1 className=" font-satoshi uppercase tracking-wide font-bold text-accent-color text-sm">
                Peter Crabbe
              </h1>
              <p className=" font-satoshi text-accent-color text-xs">
                CEO, Astron
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
