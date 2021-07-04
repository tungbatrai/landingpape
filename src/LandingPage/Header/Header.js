import Menu from "./Menu/Menu.js";
import "./Header.scss";
import HeaderButton from "../../assect/HeaderButton.png";
import React, { Component } from "react";
import Slider from "react-slick";
import image1 from "../../assect/slide/Image1.png";
import image2 from "../../assect/slide/Image2.png";
import image3 from "../../assect/slide/Image3.png";
import image4 from "../../assect/slide/Image4.png";
import image5 from "../../assect/slide/Image5.png";
function Header() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    arrows: false,
  };
  return (
    <div id="header">
      <Menu></Menu>
      <div className="text-center header-title">
        <h1>San Francisco Based</h1>
        <h1>Product Photography Services</h1>
      </div>
      <p className="header-content">
        Get high-quality aesthetic photographs of your valuable products within
        few days{" "}
      </p>
      <div className="header-button">
        <img src={HeaderButton} alt="" />
      </div>
      <div>
        <Slider {...settings}>
          <div className="slide1">
            <h3>
              <img src={image1} alt="" />
            </h3>
          </div>
          <div className="slide1"> 
            <h3>
              <img src={image2} alt="" />
            </h3>
          </div >
          <div className="slide1">
            <h3>
              <img src={image3} alt="" />
            </h3>
          </div>
          <div className="slide1">
            <h3>
              <img src={image4} alt="" />
            </h3>
          </div>
          <div className="slide1">
            <h3>
              <img src={image5} alt="" />
            </h3>
          </div>
          <div className="slide1">
            <h3>
              <img src={image3} alt="" />
            </h3>
          </div>
        </Slider>
      </div>
    </div>
  );
}
export default Header;
