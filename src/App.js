import Header from "./Header";
import Nav from "./Nav";
import Services from "./Services";
import LogoSlider from "./LogoSlider";
import SubHeader from "./SubHeader";
import Designs from "./Designs";
import UI from "./UI";
import Reviews from "./Reviews";

function App() {
  return (
    <div className="max-w-screen-2xl container flex flex-col justify-center mx-auto ">
      <Nav />
      <Header />
      <LogoSlider />
      <Services />
      <SubHeader />
      <Designs />
      <UI />
      <Reviews />
    </div>
  );
}

export default App;
