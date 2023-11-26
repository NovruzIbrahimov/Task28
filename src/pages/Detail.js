/* eslint-disable jsx-a11y/alt-text */
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieById } from "../services/moviesApi";
import "../css/Detail.css";

function Detail() {

  const { id } = useParams();
  const [movie, setMovie] = useState(null);

  useEffect(() => {
    getMovieById(id).then((data) => setMovie(data));
  }, [id]);

  if (!movie) {
    
    
return <p>Loading...</p>;
  }

  const { title, genre, description, viewingTimes, image } = movie;
  
  return (
    <div className="detail-section">
      <div className="container">
        <div className="row second-row">
          <div className="left col-lg-2 col-md-6 col-sm-12">
            <div className="box1">
              <img src={image} />
            </div>
          </div>

          <div className="right col-lg-8 col-md-6 col-sm-12">
            <h3>{genre}</h3>
            <h1>{title}</h1>
            <p>{description}</p>
            <span>FULL SYNOPSIS</span>
            <h4>VIEWING TIMES</h4>
            {viewingTimes.map((time, index) => (
            <i key={index}>{time}</i>
          ))}
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Detail;
