import React from "react";
import "./Cart.scss";
import DeleteIcon from "@mui/icons-material/Delete";

const Cart = () => {
  const data = [
    {
      id: 1,
      img1: "/images/ama1.png",
      img2: "/images/beleau.png",
      isNew: true,
      title: "Ama Kip Kip Black",
      oldPrice: 22,
      newPrice: 12,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iure",
    },
    {
      id: 2,
      img1: "/images/ama2.png",
      img2: "/images/beleau.png",
      isNew: true,
      title: "Ama Kip Kip Blue",
      oldPrice: 22,
      newPrice: 12,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iure",
    },
    {
      id: 3,
      img1: "/images/more_kids.png",
      img2: "/images/beleau.png",
      isNew: false,
      title: "Shoes White",
      oldPrice: 22,
      newPrice: 12,
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, iure",
    },
  ];
  return (
    <div className="cart">
      <h1>Items in your cart</h1>
      {data?.map((item) => (
        <div className="item" key={item.id}>
          <img src={item.img1} alt="" />
          <div className="details">
            <h1>{item.title}</h1>
            {/* substring method will only show the first 50 words */}
            <p>{item.description.substring(0, 50)}</p>
            <div className="price">1 x ${item.newPrice}</div>
          </div>
          <DeleteIcon className="delete" />
        </div>
         
      ))}
      <div className="total">
        <span>SUBTOTAL</span>
        <span>$112</span>
      </div>
      <button>PROCEED to CHECKOUT</button>
      <span className="reset">reset cart</span>
     
    </div>
  );
};

export default Cart;
