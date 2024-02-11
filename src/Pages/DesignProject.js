import React from "react";
import HeaderComp from "../Components/HeaderComp";
import Footer from "../Footer";
import mockups from "../images/mockups.png";
import img6 from "../images/img6.jpg";
const DesignProject = () => {
  return (
    <div>
      <HeaderComp>
        Design Project
        <br />
        <span className="font-gambetta italic text-accent-color">Title</span>
      </HeaderComp>
      <main className="container p-5 max-w-screen-2xl">
        <div>
          <img src={mockups} alt="placeholder" />
        </div>
        <div className="divide-y divide-accent-color/30 pb-14 ">
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 ">
          <div className=" bg-secondary-bg/70 ">
            <img src={img6} className=" object-cover " />
          </div>
          <div className=" bg-secondary-bg/70 ">
            <img src={img6} className=" object-cover " />
          </div>
          <div className=" bg-secondary-bg/70 ">
            <img src={img6} className=" object-cover " />
          </div>
          <div className=" bg-secondary-bg/70 ">
            <img src={img6} className=" object-cover " />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default DesignProject;
