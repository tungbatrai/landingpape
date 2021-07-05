import "./Body.scss";
import netflix from "../../assect/logloPro/Netflix.png";
import facebook from "../../assect/logloPro/Facebook.png";
import freelancer from "../../assect/logloPro/Freelancer.png";
import mailbluster from "../../assect/logloPro/Mailbluster.png";
import themewagon from "../../assect/logloPro/ThemeWagon.png";
import quote from "../../assect/Quote.png";
import image from "../../assect/Image.png";
import Slider from "react-slick";
import arrowLeft from "../../assect/arrow/Arrow Left.png";
import arrowRight from "../../assect/arrow/Arrow Right.png";
import checkCircle from "../../assect/check-circle.png";
import shoe1 from "../../assect/photosShot/1.png";
import shoe2 from "../../assect/photosShot/2.png";
import shoe3 from "../../assect/photosShot/3.png";
import shoe4 from "../../assect/photosShot/4.png";
import shoe5 from "../../assect/photosShot/5.png";
import shoe6 from "../../assect/photosShot/6.png";
import imageurServices1 from "../../assect/imageOurServices1.png";
import imageurServices2 from "../../assect/imageOurServices2.png";

function Body() {
  function Arrow(props) {
    let className = props.type === "next" ? "nextArrow" : "prevArrow";
    className += " arrow";
    const char = props.type === "next" ? arrowRight : arrowLeft;

    return (
      <div className={className} onClick={props.onClick}>
        <img src={char} alt="" onClick={Atest()} />
      </div>
    );
  }
  function Atest() {
    console.log("a");
  }

  return (
    <div id="body">
      <p className="content container">
        Commercial product photography agency <br /> praised by over 5,000
        brands.
      </p>
      <div className=" row w-100 ml-0 mr-0 logo-pro d-flex justify-content-between  top104 w-100 container">
        <div className="col-md-2 col-4 w-100">
          <img src={netflix} alt="" />
        </div>
        <div className="col-md-2 col-4 w-100">
          <img src={facebook} alt="" />
        </div>
        <div className="col-md-2 col-4 w-100">
          <img src={freelancer} alt="" />
        </div>
        <div className="col-md-2  col-4 w-100">
          <img src={mailbluster} alt="" />
        </div>
        <div className="col-md-2 col-4 w-100">
          <img src={themewagon} alt="" />
        </div>
      </div>
      <hr className="top104" />
      <div className=" content top104 ">
        <p> How it happens</p>
        <h1 className="header-body-two">You deliver-We Click</h1>
      </div>

      <div className="row three-content ">
        <div className="col-sm-4  ">
          <div className="d-flex justify-content-center">
            <div className="circle-color-1">
              <div className="circle-one pt-2">1</div>
            </div>
          </div>
          <h4 className="two-content-1 d-flex justify-content-center">
            Inform us about your product
          </h4>
          <p className="three-content-body">
            Introduce your product, select through the pricing plan and let us
            know if you have any references in mind
          </p>
        </div>
        <div className="col-sm-4  ">
          <div className="d-flex justify-content-center">
            <div className="circle-color-2">
              <div className="circle-two pt-2">2</div>
            </div>
          </div>
          <h4 className="two-content-2 d-flex justify-content-center">
            Inform us about your product
          </h4>
          <p className="three-content-body">
            Deliver the sujects at our doorstep, we will click perfect shots in
            no time and make it online ready
          </p>
        </div>
        <div className="col-sm-4  ">
          <div className="d-flex justify-content-center">
            <div className="circle-color-3 ">
              <div className="circle-three pt-2">3</div>
            </div>
          </div>
          <h4 className="two-content-3 d-flex justify-content-center">
            Inform us about your product
          </h4>
          <p className="three-content-body">
            After the photoshoot, you will get to review the shots and let us
            know if there any modification needed.
          </p>
        </div>
      </div>

      <div className="top104">
        <hr />
      </div>
      {/* slide 2 */}
      <div className="content-testimonial top104">
        <Slider
          prevArrow={<Arrow type="prev" />}
          nextArrow={<Arrow type="next" />}
          
        >
          {renderSlides()}
        </Slider>
      </div>

      <div className="content-packages top104 bottom104">
        <h1 className="header-packages">Our Packages</h1>
        <div className="row body-packages">
          <div className="col-sm-4  content-packages-1 p-5">
            <div className="lever-packages-1 ">
              <div>Basic</div>
            </div>
            <h2 className="monney-packges-1"> $9</h2>
            <div className="title-packages-1"> / per image</div>
            <div className="check-content-packages">
              <p>
                <img src={checkCircle} alt="" /> High quality images
              </p>
              <p>
                <img src={checkCircle} alt="" /> Single Revision
              </p>
              <p>
                <img src={checkCircle} alt="" /> 10 Products per order
              </p>

              <p>
                <img src={checkCircle} alt="" /> Not providing softcopy
              </p>
              <p>
                <img src={checkCircle} alt="" /> Free return shipment
              </p>
            </div>
            <div className="top48">
              <div className="btn btn-outline-primary choose-pan-1 ">
                Choose plan
              </div>
            </div>
          </div>
          <div className="col-sm-4 content-packages-2 p-5">
            <div className="lever-packages-2 ">
              <div>Basic</div>
            </div>
            <h2 className="monney-packges-2"> $9</h2>
            <div className="title-packages-2"> / per image</div>
            <div className="  check-content-packages">
              <p>
                <img src={checkCircle} alt="" /> High quality images
              </p>
              <p>
                <img src={checkCircle} alt="" /> Single Revision
              </p>
              <p>
                <img src={checkCircle} alt="" /> 10 Products per order
              </p>

              <p>
                <img src={checkCircle} alt="" /> Not providing softcopy
              </p>
              <p>
                <img src={checkCircle} alt="" /> Free return shipment
              </p>
            </div>
            <div className="top48">
              <div className="btn btn-warning  choose-pan-2 ">Choose plan</div>
            </div>
          </div>
          <div className="col-sm-4 content-packages-3 p-5">
            <div className="lever-packages-3 ">
              <div>Basic</div>
            </div>
            <h2 className="monney-packges-3"> $9</h2>
            <div className="title-packages-3"> / per image</div>
            <div className="  check-content-packages">
              <p>
                <img src={checkCircle} alt="" /> High quality images
              </p>
              <p>
                <img src={checkCircle} alt="" /> Single Revision
              </p>
              <p>
                <img src={checkCircle} alt="" /> 10 Products per order
              </p>

              <p>
                <img src={checkCircle} alt="" /> Not providing softcopy
              </p>
              <p>
                <img src={checkCircle} alt="" /> Free return shipment
              </p>
            </div>
            <div className="top48">
              <div className="btn btn-outline-success choose-pan-3 pt-2">
                Choose plan
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="content-shot top104">
          <h1 className="header-content-shot">Over 1,00,000 Photos Shot</h1>
          <div>
            <div className="content-shot-slide">
              <h2>Append Dots</h2>
              <Slider {...photoShot}>
                {getDataPhotoShot()}
              </Slider>
            </div>
          </div>
          <div className="btn btn-outline-warning button-shot">
            <p className="contetn-button-shot">
              View portfolio <i className=" fas fa-arrow-right"></i>
            </p>
          </div>
        </div>
      </div>

      <div className="our-services padding65 top104">
        <h1 className="header-our-services">Our services</h1>
        <div className="padding65">
          <div className="our-services-1">
            <div className="row">
              <div className="col-md-4 col-12 image-our-service-1 pl-4">
                <img src={imageurServices1} alt="" />
              </div>
              <div className="col-md-8 col-12 content-our-service-1">
                <div className="p-4 ">
                  <h5>Photo Preview</h5>
                  <p>
                    Invest on your commercial product photography on a visual
                    story created by our creative team. Each click at the most
                    reasonable price going to pay you more.
                  </p>
                  <div>
                    <span>
                      Explore service <i className=" fas fa-arrow-right"></i>{" "}
                    </span>
                    <span className="ml-2">
                      Pricing <i className=" fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="our-services-2">
            <div className="row">
              <div className="col-md-8 col-12 content-our-service-2">
                <div className="p-4 ">
                  <h5>Photo Preview</h5>
                  <p>
                    Invest on your commercial product photography on a visual
                    story created by our creative team. Each click at the most
                    reasonable price going to pay you more.
                  </p>
                  <div>
                    <span>
                      Explore service <i className=" fas fa-arrow-right"></i>{" "}
                    </span>
                    <span className="ml-2">
                      Pricing <i className=" fas fa-arrow-right"></i>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-md-4 col-12 image-our-service-2 ">
                <img src={imageurServices2} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="faq top104">
        <h1>FAQ</h1>
        <div className="row padding65">
          <div className="col-md-6 pr-5 col-left">
            <div className="car-faq">
              <h5 className="faq1"> What's the turnabout time?</h5>
              <p className="content-faq">
                Generally the turnabout time depends on the scheme of pricing
                you are selecting. The tentative turnaround time for orders less
                than 100 images is up to 12 business days from the time we
                receive your products and payment. Reach our support to get
                better insight.
              </p>
            </div>
            <div className="car-faq">
              <h5 className="faq2">What are the delivery options?</h5>
              <p className="content-faq">
                Deliver your products by using the labeling with the help of any
                courier service or just drop it at our door step at the Biancca
                Studio, San Francisco.
              </p>
            </div>
            <div className="car-faq">
              <h5 className="faq3"> Will my products be returned?</h5>
              <p className="content-faq">
                That’s totally up to you. If you want the product back, then you
                have to include that option in registration time. Else, it will
                be stored in our storage and you can pick that whenever you
                wish.
              </p>
            </div>
          </div>
          <div className="col-md-6 pr-5 col-right">
            <div className="car-faq">
              <h5 className="faq4"> What's the turnabout time?</h5>
              <p className="content-faq">
                Generally the turnabout time depends on the scheme of pricing
                you are selecting. The tentative turnaround time for orders less
                than 100 images is up to 12 business days from the time we
                receive your products and payment. Reach our support to get
                better insight.
              </p>
            </div>
            <div className="car-faq">
              <h5 className="faq5">What are the delivery options?</h5>
              <p className="content-faq">
                Deliver your products by using the labeling with the help of any
                courier service or just drop it at our door step at the Biancca
                Studio, San Francisco.
              </p>
            </div>
            <div className="car-faq">
              <h5 className="faq6"> Will my products be returned?</h5>
              <p className="content-faq">
                That’s totally up to you. If you want the product back, then you
                have to include that option in registration time. Else, it will
                be stored in our storage and you can pick that whenever you
                wish.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Body;
//slide 1
function renderSlides() {
  const listSlide = [
    {
      img: image,
      content1: " When it comes to both reliability and quality, ",
      content2:
        " is undoubtly one of best services out there. Team was fast and responsible. 5 stars  for them! ",
      contentTitle: "Andrinna Malin",
      designer: "Designer, co-Founder at Nirvana Tech",
    },
    {
      img: image,
      content1: "2 When it comes to both reliability and quality, ",
      content2:
        " is undoubtly one of best services out there. Team was fast and responsible. 5 stars  for them! ",
      contentTitle: "Andrinna Malin",
      designer: "Designer, co-Founder at Nirvana Tech",
    },
    {
      img: image,
      content1:
        "3When it comes to both reliability and quality, ",
      content2:
        " is undoubtly one of best services out there. Team was fast and responsible. 5 stars  for them! ",
      contentTitle: "Andrinna Malin",
      designer: "Designer, co-Founder at Nirvana Tech",
    },
  ];
  return listSlide.map((item, index) => {
    return (
      <div>
        <div className="row mr-0 ml-0">
          <div className="col-xl-5  col-sm-6  pr-0">
            <div className=" w-100 text-left quote">
              <img src={quote} alt="" />
            </div>
            <p className="testimonial-body text-left">
              {item.content1}
              <strong className="text-primary">ClickR </strong> {item.content2}
            </p>
            <p className="testimonial-title-1 text-left">
              <strong>{item.contentTitle}</strong>
            </p>
            <p className="testimonial-title-2 text-left">{item.designer}</p>
            <div className="number-slide ">
              {index + 1} of {listSlide.length}
            </div>
          </div>

          <div className="  col-0 col-sm-1"></div>
          <div className="col-sm-6  ">
            <img src={item.img} alt="" className="w-100" />
          </div>
        </div>
      </div>
    );
  });
}
//slide 3
function getDataPhotoShot() {
  const dataPhotoShot = [
    {
      Name: "Foot",
      imagePhotoShot1: shoe1,
      imagePhotoShot2: shoe2,
      imagePhotoShot3: shoe3,
      imagePhotoShot4: shoe4,
      imagePhotoShot5: shoe5,
      imagePhotoShot6: shoe6,
    },
    {
      Name: "Shoe",
      imagePhotoShot1: shoe2,
      imagePhotoShot2: shoe2,
      imagePhotoShot3: shoe2,
      imagePhotoShot4: shoe2,
      imagePhotoShot5: shoe2,
      imagePhotoShot6: shoe2,
    },
    {
      Name: "Wathches",
      imagePhotoShot1: shoe3,
      imagePhotoShot2: shoe3,
      imagePhotoShot3: shoe3,
      imagePhotoShot4: shoe3,
      imagePhotoShot5: shoe3,
      imagePhotoShot6: shoe3,
    },
    {
      Name: "Cosmetics",
      imagePhotoShot1: shoe4,
      imagePhotoShot2: shoe4,
      imagePhotoShot3: shoe4,
      imagePhotoShot4: shoe4,
      imagePhotoShot5: shoe4,
      imagePhotoShot6: shoe4,
    },
    {
      Name: "Phone",
      imagePhotoShot1: shoe5,
      imagePhotoShot2: shoe5,
      imagePhotoShot3: shoe5,
      imagePhotoShot4: shoe5,
      imagePhotoShot5: shoe5,
      imagePhotoShot6: shoe5,
    },
    {
      Name: "Camera",
      imagePhotoShot1: shoe6,
      imagePhotoShot2: shoe6,
      imagePhotoShot3: shoe6,
      imagePhotoShot4: shoe6,
      imagePhotoShot5: shoe6,
      imagePhotoShot6: shoe6,
    },
  ];
  return dataPhotoShot.map((item, index) => {
    return (
      <div >
        <div className="slide-shot">
          <div className="row">
            <div className="col-xl-4 col-md-6 ">
              <img src={item.imagePhotoShot1} alt="" />
            </div>
            <div className="col-xl-4  col-md-6">
              <img src={item.imagePhotoShot2} alt="" />
            </div>
            <div className="col-xl-4  col-md-6 ">
              <img src={item.imagePhotoShot3}  alt="" />
            </div>

            <div className="col-xl-4  col-md-6">
              <img src={item.imagePhotoShot4} alt="" />
            </div>
            <div className="col-xl-4  col-md-6">
              <img src={item.imagePhotoShot5} alt="" />
            </div>
            <div className="col-xl-4  col-md-6">
              <img src={item.imagePhotoShot6} alt="" />
            </div>
          </div>
        </div>
      </div>
    );
  });
}
const photoShot = {
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,

  customPaging: function (i) {
    const menuPhotoShot = [
      "Foot",
      "Shoe",
      "Wathches",
      "Cosmetics",
      "Phone",
      "Camera",
    ];
    return <div>{menuPhotoShot[i + 1]}</div>;
  },
};
