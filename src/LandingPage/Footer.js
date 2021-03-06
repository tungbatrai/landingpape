import Slider from "react-slick";
import React from "react";
import "./Footer.scss";
import facebook from "../assect/facebook.png";
import twitter from "../assect/twitter.png";
import instagram from "../assect/instagram.png";
//const instagram =  require("../assect/instagram.png")
function Footer() {
  return (
    <div id="footer">
      <div className="row top104 text-left">
        <div className="col-xs-8 five-col-footer">
          <div className="row">
            <div className="col-xl-2 col-md-4 col-sm-6  col-6">
              <h6>Why Us</h6>
              <p>Channel</p>
              <p>Engagement</p>
              <p>Scale</p>
              <p>Watch Demo</p>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6  col-6">
              <h6>Product</h6>
              <p>Features</p>
              <p>Integrations</p>
              <p>Enterprise</p>
              <p>Solutions</p>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6  col-6">
              <h6>Resources</h6>
              <p>Partners</p>
              <p>Developers</p>
              <p>Apps</p>
              <p>Blogs</p>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6  col-6">
              <h6>Company</h6>
              <p>About Us</p>
              <p>Leadership</p>
              <p>Investor Relations</p>
              <p>News</p>
            </div>
            <div className="col-xl-2 col-md-4 col-sm-6  col-6">
              <h6>Pricing</h6>
              <p>Plans</p>
              <p>Paid vs. Free</p>
            </div>
          </div>
        </div>

        <div className="col-md-1 col-0 "></div>
        <div className="col-xl-3 col-12 contact">
          <h6> Contact</h6>
          <p>
            <i className="fas fa-phone-alt text-primary"> &nbsp;</i>
            +214556905345
          </p>
          <p>
            <i className="fas fa-envelope text-warning"></i>
            &nbsp;something@email.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt  text-success"></i> &nbsp; 567,
            Kansas, San Francisco, USA
          </p>
        </div>
      </div>
      <div className="social-network text-center">
        <span>
          <img src={facebook} alt="" />
        </span>
        <span>
          <img src={twitter} alt="" />
        </span>
        <span>
          <img src={instagram} alt="" />
        </span>
      </div>
      <div className="row  footer-end pb-2">
        <div className="col-xl-4 col-sm-6 col-12 footer-end-left">
          <span  className=" footer-end-left-content1">All rights Reserved  <i className="far fa-copyright"></i> </span>
         
          <span  className=" footer-end-left-content2">Your Company, 2021</span>
        </div>
        <div className="col-xl-4 col-0"></div>
        <div className="col-xl-4 col-sm-6 col-12 footer-end-right">
          <span className="footer-end-right-content1">
            Made with
            <i className="fas fa-heart pl-1 pr-1"></i> by
          </span>
          &nbsp;
          <span className="footer-end-right-content2">Themewagon</span>
        </div>
      </div>
    </div>
  );
}
export default Footer;
