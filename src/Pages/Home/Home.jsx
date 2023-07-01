import React from "react";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="Featured" />
       <Categories />
      <FeaturedProducts type="Trending" />
     
    </div>
  );
};

export default Home;
