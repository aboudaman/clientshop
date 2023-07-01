import React from "react";
import FeaturedProducts from "../../Components/FeaturedProducts/FeaturedProducts";
import Slider from "../../Components/Slider/Slider";
import Categories from "../../Components/Categories/Categories";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProducts type="featured" />
       <Categories />
      <FeaturedProducts type="trending" />
     
    </div>
  );
};

export default Home;
