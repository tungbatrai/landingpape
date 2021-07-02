import "./Body.scss";
import netflix from "../../assect/logloPro/Netflix.png";
import facebook from "../../assect/logloPro/Facebook.png";
import freelancer from "../../assect/logloPro/Freelancer.png";
import mailbluster from "../../assect/logloPro/Mailbluster.png";
import themewagon from "../../assect/logloPro/ThemeWagon.png";
import quote from "../../assect/Quote.png";
import image from "../../assect/Image.png";
import Slider from "react-slick";

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
function Body() {
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
  const listSlide =() => [{
  
  }]
  const renderSlides = () =>
    [1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
      <div>
          <div className="row mr-0 ml-0">
      <div className="col-5   ">
        <div className=" w-100 text-left">
          <img src={quote} alt="" />
        </div>
        <p className="testimonial-body text-left">
          When it comes to both reliability and quality,
          <strong className="text-primary">ClickR </strong> is undoubtly one
          of best services out there. Team was fast and responsible. 5 stars
          for them!
        </p>
        <p className="testimonial-title-1 text-left">
          <strong>Andrinna Malin</strong>
        </p>
        <p className="testimonial-title-2 text-left">
          Designer, co-Founder at Nirvana Tech
        </p>
        <div>
          {num}
        </div>
      </div>

      <div className="col-1"></div>
      <div className="col-6 ">
        <img src={image} alt="" />
      </div>
    </div>
      </div>
    ));
  return (
    <div id="body">
      <p className="content">
        Commercial product photography agency <br /> praised by over 5,000
        brands.
      </p>
      <div className=" row w-100 ml-0 mr-0 logo-pro d-flex justify-content-between  top104">
        <div className="col-2">
          <img src={netflix} alt="" />
        </div>
        <div className="col-2">
          <img src={facebook} alt="" />
        </div>
        <div className="col-2">
          <img src={freelancer} alt="" />
        </div>
        <div className="col-2">
          <img src={mailbluster} alt="" />
        </div>
        <div className="col-2">
          <img src={themewagon} alt="" />
        </div>
      </div>
      <hr className="top104" />

      <div className=" content top104">
        <p> How it happens</p>
        <h1 className="header-body-two">You deliver-We Click</h1>
      </div>
      <div className="row three-content ">
        <div className="col-4  ">
          <div className="d-flex justify-content-center">
            <div className="circle-color-1">
              <div className="circle-one pt-2">1</div>
            </div>
          </div>
          <h4 className="two-content-1 d-flex justify-content-center">
            Inform us about your product
          </h4>
          <p>
            Introduce your product, select through the pricing plan and let us
            know if you have any references in mind
          </p>
        </div>
        <div className="col-4  ">
          <div className="d-flex justify-content-center">
            <div className="circle-color-2">
              <div className="circle-two pt-2">2</div>
            </div>
          </div>
          <h4 className="two-content-1 d-flex justify-content-center">
            Inform us about your product
          </h4>
          <p>
            Introduce your product, select through the pricing plan and let us
            know if you have any references in mind
          </p>
        </div>
        <div className="col-4  ">
          <div className="d-flex justify-content-center">
            <div className="circle-color-3 ">
              <div className="circle-three pt-2">3</div>
            </div>
          </div>
          <h4 className="two-content-1 d-flex justify-content-center">
            Inform us about your product
          </h4>
          <p>
            Introduce your product, select through the pricing plan and let us
            know if you have any references in mind
          </p>
        </div>
      </div>
      <div className="top104">
        <hr />
      </div>
      <div className="content-testimonial top104">
        <div className="row">
          <div className="col-5   ">
            <div className=" w-100 text-left">
              <img src={quote} alt="" />
            </div>
            <p className="testimonial-body text-left">
              When it comes to both reliability and quality,
              <strong className="text-primary">ClickR </strong> is undoubtly one
              of best services out there. Team was fast and responsible. 5 stars
              for them!
            </p>
            <p className="testimonial-title-1 text-left">
              <strong>Andrinna Malin</strong>
            </p>
            <p className="testimonial-title-2 text-left">
              Designer, co-Founder at Nirvana Tech
            </p>
          </div>

          <div className="col-1"></div>
          <div className="col-6 ">
            <img src={image} alt="" />
          </div>
        </div>
        <div>111ASDSADD </div>
        
        <br />

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
    </div>
  );
}
export default Body;
