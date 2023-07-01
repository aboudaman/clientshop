import React from "react";
import "./Footer.scss"
import CopyrightIcon from '@mui/icons-material/Copyright';

const Footer = () => {
  return (
    <div className="footer">
      <div className="top">
        <div className="item">
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Kids</span>
          <span>Accessories</span>
          <span>New Arrivals</span>
        </div>
        <div className="item">
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
          <span>Compare</span>
          <span>Cookies</span>
        </div>
        <div className="item">
          <h1>About</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            dolorem vero impedit obcaecati sapiente culpa in sequi soluta
            magnam, officia rem dolor quidem excepturi vel nostrum natus quae!
            Quidem, in.
          </span>
        </div>
        <div className="item">
          <h1>Contact</h1>
          <span>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint fugit
            quibusdam quidem asperiores distinctio nulla, officiis laborum
            numquam adipisci impedit.
          </span>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
        <span className="logo"> <img src="/images/beleau.png" alt="" /></span>
        <span className="copyright"><CopyrightIcon fontSize="10px"/>Copyright 2022 Beleau Shopper All rights reserved</span>
         
        </div>
        <div className="right">
        <span><img src="/images/payments.png" alt="" /></span>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
