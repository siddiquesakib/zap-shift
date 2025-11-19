import React from "react";
import Banner from "./Component/Banner";
import HowItWorks from "./Component/HowItWorks";
import Services from "./Component/Services";
import Brands from "./Component/Brands";

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <Services />
      <Brands />
    </div>
  );
};

export default Home;
