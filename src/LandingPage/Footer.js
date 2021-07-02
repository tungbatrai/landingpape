import Slider from "react-slick";
import React from "react";
import "./Footer.scss";
import facebook from "../assect/facebook.png"
import twitter from "../assect/twitter.png"
import instagram from "../assect/instagram.png"
function Footer() {
  return (
    <div id="footer">
      <div className="row top104 text-left">
        <div className="col-8 five-col-footer">
          <div className="row">
            <div className="col-2">
              <h6>Why Us</h6>
              <p>Channel</p>
              <p>Engagement</p>
              <p>Scale</p>
              <p>Watch Demo</p>
            </div>
            <div className="col-2">
              <h6>Product</h6>
              <p>Features</p>
              <p>Integrations</p>
              <p>Enterprise</p>
              <p>Solutions</p>
            </div>
            <div className="col-2">
              <h6>Resources</h6>
              <p>Partners</p>
              <p>Developers</p>
              <p>Apps</p>
              <p>Blogs</p>
            </div>
            <div className="col-2">
              <h6>Company</h6>
              <p>About Us</p>
              <p>Leadership</p>
              <p>Investor Relations</p>
              <p>News</p>
            </div>
            <div className="col-2">
              <h6>Pricing</h6>
              <p>Plans</p>
              <p>Paid vs. Free</p>
            </div>
          </div>
        </div>

        <div className="col-1"></div>
        <div className="col-3 contact">
          <h6> Contact</h6>
          <p>
            <i className="fas fa-phone-alt text-primary"> &nbsp;</i>
            +214556905345
          </p>
          <p>
            <i className="fas fa-envelope text-warning"></i>{" "}
            &nbsp;something@email.com
          </p>
          <p>
            <i className="fas fa-map-marker-alt  text-success"></i> &nbsp; 567,
            Kansas, San Francisco, USA
          </p>
        </div>
      </div>
      <dir className="social-network text-center">
        <span><img src={facebook} alt="" /></span>
        <span><img src={twitter} alt="" /></span>
        <span><img src={instagram} alt="" /></span>
      </dir>
      <div>
      All rights Reserved <strong><i className="far fa-copyright"></i></strong>Your Company, 2021 
      </div>
      <div>
      <i class="fas fa-heart"></i>
      </div>
    </div>
  );
}
export default Footer;
