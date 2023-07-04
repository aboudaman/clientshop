import React from "react";
import "./Card.scss";
import { Link } from "react-router-dom";

const Card = ({ item }) => {
  return (
    <Link className="link"  to={`/product/${item.id}`}>
      <div className="card">
        <div className="images">
        {/* Adds text to the image */}
        {item.attributes.isNew && <span>New Season</span>}
            <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img1.data.attributes.url} alt="" className="mainImage" />
            <img src={process.env.REACT_APP_UPLOAD_URL + item.attributes.img2.data.attributes.url} alt="" className="secondImage" />
        </div>
        <h2>{item.attributes.name}</h2>
        <div className="prices">
            <h4>P{item.attributes.oldPrice || item.attributes.price + 20} </h4>
            <h4>P{item.attributes.price } </h4>
        </div>
      </div>
    </Link>
  );
};

export default Card;
