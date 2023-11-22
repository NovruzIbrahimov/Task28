/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import "../css/HomeSection2.css";
import Image3 from "../images/cart-1.jpg";
import Image2 from "../images/cart-2.jpg";
import Image1 from "../images/cart-3.jpg";
import { FaPlayCircle, FaStar } from "react-icons/fa";


function HomeSection2() {
  return (
    <div className="homeSection2">
      <div className="container">
        <div className="row">
          <h2 className="home-sect-text">NEW IN</h2>
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-12 homeSect">
              <div className="box">
                <img src={Image3} />

                <div class="overlay">
                  <div class="overlay-content">
                    <i class="play-button"> <FaPlayCircle/> </i>
                    <h1>READ MORE</h1>
                    <p>Released: 14 April, 2017</p>
                  </div>
                </div>

              </div>
              <h4>The end of days</h4>
              <div className="main-stars">
                <i className="stars">
                  <FaStar />
                </i>
                <i className="stars">
                  <FaStar />
                </i>
                <i className="stars">
                  <FaStar />
                </i>
                <i className="stars">
                  <FaStar />
                </i>
                <i className="stars">
                  <FaStar />
                </i>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 homeSect">
              <div className="box">
                <img src={Image2} />

                <div class="overlay">
                  <div class="overlay-content">
                    <i class="play-button"> <FaPlayCircle/> </i>
                    <h1>READ MORE</h1>
                    <p>Released: 14 April, 2017</p>
                  </div>
                </div>

              </div>
              <h4>Daylight</h4>
              <div className="main-stars">
                <i className="stars">
                  <FaStar />
                </i>
                <i className="stars">
                  <FaStar />
                </i>
                <i className="stars">
                  <FaStar />
                </i>
                <i className="stars">
                  <FaStar />
                </i>
                <i className="stars">
                  <FaStar />
                </i>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-12 homeSect">
              <div className="box">
                <img src={Image1} />

                <div class="overlay">
                  <div class="overlay-content">
                    <i class="play-button"> <FaPlayCircle/> </i>
                    <h1>READ MORE</h1>
                    <p>Released: 14 April, 2017</p>
                  </div>
                </div>
                
              </div>
              <h4>Locked in</h4>
              <div className="main-stars">
                <i className="stars">
                  <FaStar />
                </i>
                <i className="stars">
                  <FaStar />
                </i>
                <i className="stars">
                  <FaStar />
                </i>
                <i className="stars">
                  <FaStar />
                </i>
                <i className="stars">
                  <FaStar />
                </i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection2;
