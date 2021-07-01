import Slider from "react-slick";
import React from "react";
import "./Footer.scss";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const slidesArr = ["s1", "s-2", "s-", "s-", "s-", "s-", "s-", "s-", "s-"];

function customPaging(i) {
  return <span> {slidesArr[i] + i}</span>;
}

function appendDots(dots) {
  return (
    <div style={{ backgroundColor: "#eee" }}>
      <ul style={{ margin: "3px" }}>{dots}</ul>
    </div>
  );
}

function Footer() {
  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? "👉" : "👈";
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }

  function customPaging(i) {
    return <span>{i + 1}</span>;
  }

  function appendDots(dots) {
    return (
      <div style={{ backgroundColor: "#eee" }}>
        <ul style={{ margin: "3px" }}> {dots} </ul>
      </div>
    );
  }
  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? "==>" : "<==";
    return (
      <span className={className} onClick={props.onClick}>
        {char}
      </span>
    );
  }
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
      <div>
        <h3>Slide {num}</h3>
      </div>
    ));

  return (
    <div className="App">
      <Slider
        nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />}
        dots={true}
        customPaging={customPaging}
        appendDots={appendDots}
      >
        {renderSlides()}
      </Slider>
    </div>
  );
}
export default Footer;
