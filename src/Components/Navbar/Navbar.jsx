import React, { useState } from "react";
import KeyboardDoubleArrowDownIcon from "@mui/icons-material/KeyboardDoubleArrowDown";
import SearchIcon from "@mui/icons-material/Search";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";
import { Link } from "react-router-dom";
import Cart from "../Categories/Cart/Cart";
import "./Navbar.scss";


const Navbar = () => {
  const [openCart, setOpenCart] = useState(false);
  return (
    <div className="navbar">
      <div className="wrapper">
        <div className="left">
          <div className="item">
            <img src="/images/en.png" width="20px" alt="flag" />
            <KeyboardDoubleArrowDownIcon />
          </div>
          <div className="item">
            <span>USD</span>
            <KeyboardDoubleArrowDownIcon />
          </div>
          <div className="item">
            <Link className="link" to="/products/2">Women</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/3">Men</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">Kids</Link>
          </div>
        </div>
        <div className="center">
          <Link className="link" to="/">Beleau Store</Link>
        </div>
        <div className="right">
          <div className="item">
            <Link className="link" to="/">Home</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">About</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">Contacts</Link>
          </div>
          <div className="item">
            <Link className="link" to="/products/4">Stores</Link>
          </div>
          <div className="icons">
            <SearchIcon />
            <PersonOutlineOutlinedIcon />
            <FavoriteBorderOutlinedIcon />
            <div className="cartIcon">
              <ShoppingCartOutlinedIcon onClick = {(e) => setOpenCart(!openCart)}/>
              <span>0</span>
            </div>
          </div>
        </div>
      </div>
      {openCart && <Cart />}
    </div>
  );
};

export default Navbar;
