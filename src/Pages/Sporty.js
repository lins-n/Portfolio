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
                  Our soccer recruitment agency aims to connect talented players
                  with professional opportunities worldwide. We specialize in
                  identifying promising athletes, providing them with exposure
                  to top clubs and leagues, and facilitating their transition to
                  professional soccer careers. With a focus on integrity,
                  professionalism, and personalized support, we strive to become
                  the go-to agency for both aspiring players and elite clubs
                  seeking exceptional talent.
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
                  The logo solution for the soccer recruitment agency embodies
                  the essence of professionalism, opportunity, and global
                  connectivity. It features a dynamic and modern design, with a
                  stylized soccer ball symbolizing the core focus of the agency.
                  The use of bold, vibrant colors like orange and yellow
                  reflects trust, growth, and ambition, while the clean
                  typography exudes professionalism and clarity. Overall, the
                  logo captures the essence of our agency's mission: to connect
                  promising players with professional opportunities on a global
                  scale, fostering growth, success, and excellence in the world
                  of soccer recruitment.
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
                  " I had the pleasure of working with Collins on the logo
                  project and was blown away by his expertise and
                  professionalism. He made the process seamless and delivered a
                  logo that exceeded our expectations. I highly recommend
                  Collins for all your design needs."
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
