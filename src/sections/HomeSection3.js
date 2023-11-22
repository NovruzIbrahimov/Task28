/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import '../css/HomeSection3.css'
import Image1 from "../images/cart-3.jpg";
import Image2 from "../images/cart-2.jpg";
import Image3 from "../images/cart-1.jpg";

function HomeSection3() {
  return (
    <div className="homeSection3">
      <div className="container">
        <div className="row">
          <div className="heading-ul col-lg-12 col-md-12 col-sm-12">
          <ul className="top-text d-flex ">
            <li>MON</li>
            <li className="active-main">TODAY</li>
            <li>WED</li>
            <li>THU</li>
            <li>FRI</li>
            <li>SAT</li>
            <li>SUN</li>
            <li className="last-li">TUE, 21 NOVEMBER</li>
          </ul>
          </div>
          
          <div className="row second-row">
            <div className="left col-lg-2 col-md-6 col-sm-12">
              <div className="box1">
              <img src={Image2} />
              </div>
            </div>
            <div className="right col-lg-8 col-md-6 col-sm-12">
              <h3>THRILLER, HORROR</h3>
              <h1>Daylight</h1>
              <p>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum claram, anteposuerit litterarum formas
                humanitatis per seacula quarta decima et quinta decima.
              </p>
              <span>FULL SYNOPSIS</span>
              <h4> VIEWING TIMES</h4>
              <i>6:00 pm</i>
              <i>10:00 pm</i>
            </div>
          </div>
          <div className="row second-row">
            <div className="left col-lg-2 col-md-6 col-sm-12">
              <div className="box1">
              <img src={Image1} />
              </div>
            </div>
            <div className="right col-lg-8 col-md-6 col-sm-12">
              <h3>THRILLER, HORROR</h3>
              <h1>Locked in</h1>
              <p>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum claram, anteposuerit litterarum formas
                humanitatis per seacula quarta decima et quinta decima.
              </p>
              <span>FULL SYNOPSIS</span>
              <h4> VIEWING TIMES</h4>
              <i>6:00 pm</i>
              <i>10:00 pm</i>
            </div>
          </div>
          <div className="row second-row">
            <div className="left col-lg-2 col-md-6 col-sm-12">
              <div className="box1">
              <img src={Image3} />
              </div>
            </div>
            <div className="right col-lg-8 col-md-6 col-sm-12">
              <h3>THRILLER, HORROR</h3>
              <h1>The end of days</h1>
              <p>
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum claram, anteposuerit litterarum formas
                humanitatis per seacula quarta decima et quinta decima.
              </p>
              <span>FULL SYNOPSIS</span>
              <h4> VIEWING TIMES</h4>
              <i>6:00 pm</i>
              <i>10:00 pm</i>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeSection3;
