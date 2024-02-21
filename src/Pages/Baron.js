import React from "react";
import HeaderComp from "../Components/HeaderComp";
import Footer from "../Footer";
import barron from "../images/barron.png";
import img6 from "../images/img6.jpg";
import blogo from "../images/blogo.jpg";
import baron from "../images/baron.jpg";
import bpattern from "../images/bpattern.jpg";
import bicon from "../images/bicon.jpg";
const Baron = () => {
  return (
    <div>
      <HeaderComp>
        Barron Property
        <br />
        <span className="font-gambetta italic text-accent-color">Care</span>
      </HeaderComp>
      <main className="container p-5 max-w-screen-2xl">
        <div>
          <img src={barron} alt="placeholder" />
        </div>
        <div className="divide-y divide-accent-color/30 pb-14 ">
          <div className="w-full py-14">
            <div className="lg:flex justify-between">
              <h1 className="font-satoshi uppercase tracking-widest py-3 text-accent-color">
                THE BRIEF
              </h1>
              <div className="w-full lg:w-2/3">
                <p className="font-satoshi text-base text-accent-color">
                  I would like something that visually shows the services I
                  offer (As mentioned Window Cleaning, Gutter Cleaning and
                  Repairs, Roof Cleaning and Driveway Jet washing) I understand
                  what you are saying about perhaps too much on the image could
                  look clumsy and I agree that too much could and that it needs
                  to be bold clean but I would like you to try and use your
                  expertise to try and create a logo that will show people who
                  see it the services I provide by looking at the logo image
                  alone.
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
                  The logo showcases the services the client offers at a single
                  glance. With its bright colour colour palette , Blue and
                  Green. Blue signifying cleanliness, trust and water and green
                  representing freshness, renewal and eco-friendliness
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
                  "Hi Collins really like this logo and the font,I’d like to go
                  ahead with this one if that’s okay"
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  container ">
          <div>
            <div className=" bg-secondary-bg/70 pb-4 ">
              <img src={blogo} className=" object-cover " />
            </div>
            <div className=" bg-secondary-bg/70 ">
              <img src={bpattern} className=" object-cover " />
            </div>
          </div>
          <div>
            <div>
              <img src={baron} className=" object-cover pb-4" />
            </div>
            <div className=" bg-secondary-bg/70  ">
              <img src={bicon} className=" object-cover " />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Baron;
