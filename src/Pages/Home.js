import React from "react";
import Header from "../Header";
import Services from "../Services";
import LogoSlider from "../LogoSlider";
import Designs from "../Designs";
import UI from "../UI";
import Reviews from "../Reviews";
import Footer from "../Footer";

const Home = () => {
  return (
    <div>
      <Header />
      <LogoSlider />
      <Services />
      <Designs />
      <UI />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;
