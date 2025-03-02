import React, { useEffect, useState } from "react";

import Footer from "../Components/Common/Footer";
import Hero from "../Components/Layout/Hero";
import NewArrival from "../Components/Products/NewArrival";
import BestSellers from "../Components/Products/BestSellers";

const Home = () => {
  return (
    <div className="container mx-auto py-[100px] pb-[100px]">
      {/* hero section */}
      <Hero />
      {/* new arrival section */}
      <NewArrival />
      {/* best seller section */}
      <BestSellers />
      {/* footer section */}
    </div>
  );
};

export default Home;
