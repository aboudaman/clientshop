import React from "react";
import { useState } from "react";
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BalanceIcon from '@mui/icons-material/Balance';
import "./Product.scss";

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const images = [
    "/images/ama1.png",
    "/images/ama2.png",
    "/images/kids_shoes.png",
  ];
  return (
    <div className="product">
      <div className="left">
        <div className="images">
          <img src={images[0]} alt="" onClick={(e) => setSelectedImage(0)} />
          <img src={images[1]} alt="" onClick={(e) => setSelectedImage(1)} />
        </div>
        <div className="mainImage">
          <img src={images[selectedImage]} alt="" />
        </div>
      </div>
      <div className="right">
        <h2>Title</h2>
        <span>$199</span>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptate
          itaque alias excepturi sed illo ad minima rerum, mollitia sit
          necessitatibus natus maiores deleniti perferendis nobis ipsa,
          doloremque recusandae consequatur quisquam.
        </p>
        <div className="quantity">
        {/* If quantity is 0, you cannot decrease */}
          <button
            onClick={() => setQuantity((prev) => (prev === 1 ? 1 : prev - 1))}
          >
            -
          </button>
          {quantity}
          <button onClick={() => setQuantity((prev) => prev + 1)}>+</button>
        </div>
        <button className="add">
          <AddShoppingCartIcon /> ADD to Cart
        </button>
        <div className="link">
          <div className="item">
            <FavoriteBorderIcon /> ADD to Wishlist
          </div>
          <div className="item">
            <BalanceIcon /> Compare Item
          </div>
        </div>

      </div>
    </div>
  );
};

export default Product;
