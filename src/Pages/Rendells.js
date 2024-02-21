import React from "react";
import HeaderComp from "../Components/HeaderComp";
import Footer from "../Footer";
import rendells from "../images/rendells.jpg";
import rp1 from "../images/rp1.jpg";
import rp2 from "../images/rp2.jpg";
import rp3 from "../images/rp3.png";
const Rendells = () => {
  return (
    <div>
      <HeaderComp>
        Rendells
        <br />
        <span className="font-gambetta italic text-accent-color">
          {" "}
          Event Planning
        </span>
      </HeaderComp>
      <main className="container p-5 max-w-screen-2xl">
        <div>
          <img src={rendells} alt="placeholder" />
        </div>
        <div className="divide-y divide-accent-color/30 p-10 pt-10">
          <div className="w-full py-14">
            <div className="lg:flex justify-between">
              <h1 className="font-satoshi uppercase tracking-widest py-3 text-accent-color">
                THE BRIEF
              </h1>
              <div className="w-full lg:w-2/3">
                <p className="font-satoshi text-base text-accent-color">
                  Due to there being limited centralized information about the
                  enterprise on Instagram, a potential client has to first
                  contact the enterprise through Instagram’s direct messaging or
                  phone calls to first make enquiry about the different services
                  and pricing options available before making a decision and
                  going on to completing the business transaction or not. This
                  is not very efficient as the administrator of the page is
                  limited, and cannot reply to all messages. It might be logical
                  to think the next best thing would be to have several admins
                  logged in across different devices responding to clients, but
                  this is not the most optimal and cost-effective option.
                  <br />
                  <br />
                  1. A user should be able to view the company’s contact
                  information. <br />
                  2. A user should be able to view a list of available services.{" "}
                  <br />
                  3. A user should be able to view information about the variant
                  pricing for a particular service depending on various options.
                  <br />
                  4. A user should be able to search for a particular service.
                  <br />
                  5. A user should be able to view the previous works of the
                  enterprise.
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
                  The website for Rendellsevents showcases their services and
                  related pricing, company information and previous works.With a
                  very beautiful and clean design, the business is able to
                  attract new clients and showcase the works efficiently.
                </p>
              </div>
            </div>
          </div>
          {/* <div className="w-full py-14">
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
          </div> */}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4  container ">
          <div className=" bg-secondary-bg/70 ">
            <img src={rp1} className=" object-cover " />
          </div>
          <div className=" bg-secondary-bg/70  ">
            <img src={rp2} className=" object-cover " />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Rendells;
