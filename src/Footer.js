import React from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import waves from "./images/waves.png";
import { RiHome6Line } from "react-icons/ri";

const Footer = () => {
  return (
    <motion.footer
      initial={{ opacity: 0, y: 75 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="bg-secondary-bg/70  w-full mt-32 lg:mt-44 "
    >
      <section>
        <div
          style={{
            backgroundImage: `url(${waves})`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            backgroundSize: "cover",

            width: "100%",
          }}
          className="relative w-fit "
        >
          <div className="w-full grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-3 gap-2 max-w-screen-xl container py-16">
            <div className="bg-main-background col-span-2 mr-0 sm:mr-4 p-10 ">
              <h1 className="text-3xl lg:text-5xl font-gambetta italic text-accent-color  pb-44">
                Before you go,
                <br />
                checkout these other projects
              </h1>
              <div className="flex justify-between items-center">
                <div>
                  <ul>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 1</a>
                    </li>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 2</a>
                    </li>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 3</a>
                    </li>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 4</a>
                    </li>
                  </ul>
                </div>

                <div>
                  <ul>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 1</a>
                    </li>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 2</a>
                    </li>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 3</a>
                    </li>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 4</a>
                    </li>
                  </ul>
                </div>
                <div>
                  <ul>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 1</a>
                    </li>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 2</a>
                    </li>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 3</a>
                    </li>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 4</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="bg-main-background mb-4 p-10 ">
                <h1 className="text-3xl lg:text-4xl font-gambetta text-accent-color italic pb-8">
                  Let's work
                  <br />
                  together
                </h1>
                <div>
                  <ul>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 1</a>
                    </li>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 2</a>
                    </li>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 3</a>
                    </li>
                    <li className="text-accent-color font-satoshi text-lg ">
                      <a href="#">Project 4</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="bg-main-background ">
                <ul className="flex justify-between p-8 items-center">
                  <li className="bg-secondary-bg font-satoshi text-lg h-24 w-24 flex justify-center items-center">
                    <a href="#">
                      <RiHome6Line size={38} color="#DAC5A7" />
                    </a>
                  </li>
                  <li className="bg-secondary-bg font-satoshi text-lg h-24 w-24 flex justify-center items-center">
                    <a href="#">
                      <RiHome6Line size={38} color="#DAC5A7" />
                    </a>
                  </li>
                  <li className="bg-secondary-bg font-satoshi text-lg h-24 w-24 flex justify-center items-center">
                    <a href="#">
                      <RiHome6Line size={38} color="#DAC5A7" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="bg-main-background flex justify-center items-center w-full p-5">
            <p className="text-accent-color font-satoshi text-base  tracking-wide ">
              Designed by <span className="font-gambetta italic ">Collins</span>{" "}
              - 2024
            </p>
          </div>
        </div>
      </section>
    </motion.footer>
  );
};

export default Footer;
