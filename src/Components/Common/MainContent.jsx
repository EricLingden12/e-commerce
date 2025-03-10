import React from "react";
import NewArrival from "../Products/NewArrival";
import BestSellers from "../Products/BestSellers";
import Hero from "../Layout/Hero";

const MainContent = () => {
  return (
    <div className="mt-[90px]">
      <Hero />
      <NewArrival />
      <BestSellers />
    </div>
  );
};

export default MainContent;
