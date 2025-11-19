import React from "react";
import Banner from "./Component/Banner";
import HowItWorks from "./Component/HowItWorks";
import Services from "./Component/Services";
import Brands from "./Component/Brands";
import Features from "./Component/Features";
import Reviews from "./Component/Review/Reviews";

const reviewPromise = fetch('reviews.json').then(res=>res.json())

const Home = () => {
  return (
    <div>
      <Banner />
      <HowItWorks />
      <Services />
      <Brands />
      <Features />
      <Reviews reviewPromise={reviewPromise}/>
    </div>
  );
};

export default Home;
