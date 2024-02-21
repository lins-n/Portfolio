import React from "react";
import HeaderComp from "../Components/HeaderComp";
import Footer from "../Footer";
import { Link } from "react-router-dom";
import Button from "../Button";
import present from "../images/PRESENT1.jpg";
import CTA from "../CTA";
const Bitsy = () => {
  return (
    <div>
      <HeaderComp>
        Bitsy
        <span className="font-gambetta italic text-accent-color pb-6">
          {" "}
          App
        </span>
        <a
          href="#prototype"
          className="flex justify-center items-center transition duration-500 ease-in-out pt-10 "
        >
          <CTA>Run Prototype</CTA>
        </a>
      </HeaderComp>

      <main className="container max-w-screen-2xl">
        <div>
          <img src={present} alt="placeholder" />
        </div>
        {/* <div className="divide-y divide-accent-color/30 pb-14 ">
          <div className="w-full py-14">
            <div className="lg:flex justify-between">
              <h1 className="font-satoshi uppercase tracking-widest py-3 text-accent-color">
                THE BRIEF
              </h1>
              <div className="w-full lg:w-2/3">
                <p className="font-satoshi text-base text-accent-color">
                  I take time to understand your business needs and audience to
                  develop a unique concept for your website. I'll create
                  wireframes that serve as the foundation for your site's design
                  and functionality. I take time to understand your business
                  needs and audience to develop a unique concept for your
                  website. I'll create wireframes that serve as the foundation
                  for your site's design and functionality. I take time to
                  understand your business needs and audience to develop a
                  unique concept for your website. I'll create wireframes that
                  serve as the foundation for your site's design and
                  functionality.
                </p>
              </div>
            </div>
          </div>

          <div className="w-full py-14">
            <div className="lg:flex justify-between">
              <h1 className="font-satoshi uppercase tracking-widest py-3 text-accent-color">
                THE SOLUTION
              </h1>
              <div className="lg:w-2/3">
                <p className="font-satoshi text-base text-accent-color">
                  I take time to understand your business needs and audience to
                  develop a unique concept for your website. I'll create
                  wireframes that serve as the foundation for your site's design
                  and functionality.
                </p>
              </div>
            </div>
          </div>
          <div className="w-full py-14">
            <div className="lg:flex justify-between">
              <h1 className="font-satoshi uppercase tracking-widest py-3 text-accent-color">
                TESTIMONIAL
              </h1>
              <div className="lg:w-2/3">
                <p className="font-gambetta italic text-base text-accent-color">
                  "I take time to understand your business needs and audience to
                  develop a unique concept for your website. I'll create
                  wireframes that serve as the foundation for your site's design
                  and functionality."
                </p>
              </div>
            </div>
          </div>
        </div> */}

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  container ">
          <div className=" bg-secondary-bg/70 ">
            <img src={img6} className=" object-cover " />
          </div>
          <div className=" bg-secondary-bg/70  ">
            <img src={img6} className=" object-cover " />
          </div>
          <div className=" bg-secondary-bg/70 ">
            <img src={img6} className=" object-cover " />
          </div>
          <div className=" bg-secondary-bg/70 ">
            <img src={img6} className=" object-cover " />
          </div>
        </div> */}
        <iframe
          id="prototype"
          className="w-full h-screen pt-20"
          src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FkqQo3f53r5hycHrhhjNpkp%2Fbitsy-app%3Fpage-id%3D19%253A118%26type%3Ddesign%26node-id%3D19-546%26viewport%3D-112%252C369%252C0.16%26t%3DjwBv2JENL6ec5rud-1%26scaling%3Dscale-down%26starting-point-node-id%3D19%253A546%26mode%3Ddesign"
          allowfullscreen
        ></iframe>
      </main>

      <Footer />
    </div>
  );
};

export default Bitsy;
