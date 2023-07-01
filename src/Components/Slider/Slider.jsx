import React from "react";
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import EastOutlinedIcon from '@mui/icons-material/EastOutlined';
import "./Slider.scss"
import { useState } from "react";

const Slider = () => {

  const [currentSlide, setCurrentSlide] = useState(0);

  const data = [
    "/images/ama1.png",
    "/images/ama2.png",
    "/images/kids_shoes.png",
    "/images/white_kids.png",
  ];

  // Create Slider
  const prevSlide = () => {
    // setCurrentSlide(currentSlide === 0 ? 3 : currentSlide-1)
    setCurrentSlide(currentSlide === 0 ? 3 : (prev) => prev - 1)
  }
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 3 ? 0 : (prev) => prev + 1)
  }

  return (
    <div className="slider">
      <div className="container" style={{transform: `translateX(-${currentSlide * 100}vw`}}>
        <img src={data[0]} alt="" />
        <img src={data[1]} alt="" />
        <img src={data[2]} alt="" />
        <img src={data[3]} alt="" />
      </div>
      <div className="arrowIcons">
        <div className="leftIcon" onClick={prevSlide}>
            <WestOutlinedIcon />
        </div>
        <div className="rightIcon" onClick={nextSlide}>
            <EastOutlinedIcon />
        </div>
      </div>
    </div>
  );
};

export default Slider;
