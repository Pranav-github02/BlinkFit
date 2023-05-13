import React from "react";
import BestSelling from "./Best_Selling";
import Hero from "./Hero";
import FeaturedWorkouts from "./FeaturedWorkouts";

const Home = () => {
  return (
    <div>
      {/* <h1>Hello Home</h1> */}
      <Hero />
      <BestSelling />
      <FeaturedWorkouts />
      {/* <h1>After hero</h1> */}
    </div>
  );
};

export default Home;
