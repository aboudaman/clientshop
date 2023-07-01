import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link"  to={`/product/${item.id}`}>
      <div className="card">
        <div className="images">
        {/* Adds text to the image */}
        {item.isNew && <span>New Season</span>}
            <img src={item.img1} alt="" className="mainImage" />
            <img src={item.img2} alt="" className="secondImage" />
        </div>
        <h2>{item.title}</h2>
        <div className="prices">
            <h4>P{item.oldPrice}</h4>
            <h4>P{item.newPrice}</h4>
        </div>
      </div>
    </Link>
  );
};

export default Card;
