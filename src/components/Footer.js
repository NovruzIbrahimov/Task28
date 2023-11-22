import React from "react";
import { FaFacebookF, FaGooglePlusG, FaTwitter } from 'react-icons/fa'
import "../css/Footer.css";

function Footer() {
  return (
    <div className="footer-all">
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-6 col-sm-12 footer-text">
            <h1>GET IN TOUCH</h1>
            <p>FAQs</p>
            <p>Give us feedback</p>
            <p>Contact us</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-text">
            <h1>ABOUT MOVIE STAR</h1>
            <p>FAQs</p>
            <p>Give us feedback</p>
            <p>Contact us</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-text">
            <h1>LEGAL STUFF</h1>
            <p>FAQs</p>
            <p>Give us feedback</p>
            <p>Contact us</p>
          </div>
          <div className="col-lg-3 col-md-6 col-sm-12 footer-text">
            <h1>CONNECT WITH US</h1>
            <p> <FaTwitter className="fat"/> Twitter</p>
            <p> <FaFacebookF className="faf"/> Facebook</p>
            <p> <FaGooglePlusG className="fag"/> Google +</p>
          </div>
        </div>
        <div className="copyright">
          <p>2020 © Specto.  All rights reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
