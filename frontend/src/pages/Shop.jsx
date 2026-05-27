import React from "react";
import Hero from "../components/hero/Hero";
import Popular from "../components/popular/Popular";
import Offers from "../components/offers/Offers";
import NewCollection from "../components/newCollection/NewCollection";
import NewsLetter from "../components/newsLetter/newsLetter";

const Shop = () => {
  return (
    <div>
      <Hero />
      <Popular/>
      <Offers/>
      <NewCollection/>
      <NewsLetter/>
    </div>
  );
};

export default Shop;
