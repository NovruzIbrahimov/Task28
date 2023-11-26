/* eslint-disable no-template-curly-in-string */
/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect} from "react";
import '../css/HomeSection3.css'
import { NavLink } from "react-router-dom";
import { getMovies } from "../services/moviesApi";

function HomeSection3() {

  const [movies, setMovies] = useState([]);

  useEffect(() => {
    getMovies().then((data) => setMovies(data));
  }, []);

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
            {movies.map((movie) => (
            <div key={movie.id} className="left col-lg-2 col-md-6 col-sm-12">
              <div className="box1">
                <NavLink to={`/detail/${movie.id}`}>
                  <img src={movie.image} alt={movie.title} />
                </NavLink>
              </div>
            </div>
            ))}
            </div>
            <div className="right col-lg-8 col-md-6 col-sm-12">
            {movies.map((movie) => (
                <div key={movie.id} className="box2">
                  <h3>{movie.genre}</h3>
                  <h1>{movie.title}</h1>
                  <p>{movie.description}</p>
                  <span>FULL SYNOPSIS</span>
                  <h4>VIEWING TIMES</h4>
                  {movie.viewingTimes.map((time, index) => (
                    <i key={index}>{time}</i>
                  ))}
                </div>
              ))}
            </div>
          </div>
          {/* <div className="row second-row">
            <div className="left col-lg-2 col-md-6 col-sm-12">
            {movies.map((movie) => (
            <div key={movie.id} className="left col-lg-2 col-md-6 col-sm-12">
              <div className="box1">
                <NavLink to={`/detail/${movie.id}`}>
                  <img src={movie.image} alt={movie.title} />
                </NavLink>
              </div>
            </div>
            ))}
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
            {movies.map((movie) => (
            <div key={movie.id} className="left col-lg-2 col-md-6 col-sm-12">
              <div className="box1">
                <NavLink to={`/detail/${movie.id}`}>
                  <img src={movie.image} alt={movie.title} />
                </NavLink>
              </div>
            </div>
            ))}
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
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default HomeSection3;




