import React from "react";
import HeaderComp from "../Components/HeaderComp";
import Footer from "../Footer";
import img13 from "../images/img13.jpg";
import img19 from "../images/img19.jpg";
import shoe1 from "../images/shoe-app2.jpg";
import shoe2 from "../images/shoe-app6.jpg";
import Video from "../images/itFitsPromo.mp4";
const ItFits = () => {
  return (
    <div>
      <HeaderComp>
        ItFits
        <span className="font-gambetta italic text-accent-color">
          {" "}
          Shoe App
        </span>
      </HeaderComp>
      <main className="container p-5 max-w-screen-2xl">
        <div className="flex justify-center">
          <img src={img13} alt="placeholder" />
        </div>
        <div className="divide-y divide-accent-color/30 p-10 ">
          <div className="w-full py-14">
            <div className="lg:flex justify-between">
              <h1 className="font-satoshi uppercase tracking-widest py-3 text-accent-color">
                THE BRIEF
              </h1>
              <div className="w-full lg:w-2/3">
                <p className="font-satoshi text-base text-accent-color">
                  Frustrated by the lack of efficient options for shoe shopping,
                  our client sought a solution to streamline the process and
                  enhance the overall experience.
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
                  In response to this challenge, i designed and built a mobile
                  app that simplifies shoe browsing and purchasing, providing a
                  tailored solution to our client's problem.The app was born out
                  of a client's need for a hassle-free shoe shopping experience.
                  Understanding the pain points of traditional retail and online
                  shoe shopping, we designed an intuitive platform that offers a
                  curated list of footwear options, ensuring our client finds
                  the perfect pair with ease. With this solution in hand, the
                  client can now enjoy a streamlined shoe shopping experience
                  anytime, anywhere.
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4  container ">
          <div>
            <div className=" bg-secondary-bg/70 pb-4">
              <img src={img19} className=" object-cover " />
            </div>
            <div className=" bg-secondary-bg/70  ">
              <img
                src={shoe1}
                className=" object-cover "
                alt="itfits design1"
              />
            </div>
          </div>
          <div>
            <div className=" bg-secondary-bg/70  pb-4">
              <img
                src={shoe2}
                className=" object-cover "
                alt="itfits design2"
              />
            </div>
            <div className=" bg-secondary-bg/70 ">
              <video controls autostart autoPlay src={Video} type="video/mp4" />
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ItFits;
