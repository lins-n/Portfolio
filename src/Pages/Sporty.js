import React from "react";
import HeaderComp from "../Components/HeaderComp";
import Footer from "../Footer";
import reps1 from "../images/reps1.jpg";
import rep2 from "../images/rep2.jpg";
import rep3 from "../images/rep3.jpg";
import rep4 from "../images/rep4.jpg";
import rep5 from "../images/rep5.jpg";
const Sporty = () => {
  return (
    <div>
      <HeaderComp>
        Sporty
        <span className="font-gambetta italic text-accent-color">Reps</span>
      </HeaderComp>
      <main className="container p-5 max-w-screen-2xl">
        <div>
          <img src={reps1} alt="placeholder" />
        </div>
        <div className="divide-y divide-accent-color/30 pb-14 p-4 ">
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
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  container ">
          <div className=" bg-secondary-bg/70 ">
            <img src={rep2} className=" object-cover " />
          </div>
          <div className=" bg-secondary-bg/70 ">
            <img src={rep4} className=" object-cover " />
          </div>
          <div className=" bg-secondary-bg/70  col-span-2">
            <img src={rep5} className=" object-cover " />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Sporty;
