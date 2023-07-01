import React from "react";
import "./FeaturedProducts.scss";
import Card from "../Card/Card";
const FeaturedProducts = ({ type }) => {
  const data = [
    {
      id: 1,
      img1: "/images/ama1.png",
      img2: "/images/beleau.png",
      isNew: true,
      title: "Ama Kip Kip Black",
      oldPrice: 22,
      newPrice: 12,
    },
    {
      id: 2,
      img1: "/images/ama2.png",
      img2: "/images/beleau.png",
      isNew: true,
      title: "Ama Kip Kip Blue",
      oldPrice: 22,
      newPrice: 12,
    },
    {
      id: 3,
      img1: "/images/more_kids.png",
      img2: "/images/beleau.png",
      isNew: false,
      title: "Shoes White",
      oldPrice: 22,
      newPrice: 12,
    },
  ];
  return (
    <div className="featuredProducts">
      <div className="top">
        <h1> {type} Products</h1>
        <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quos
        dignissimos dolores amet autem ut nisi.
        </p>

      </div>
      <div className="bottom">
      {/* if you add{} insert return type, with () no return type */}
        {data.map(item => (
            <Card item={item} key={item.id}/>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
