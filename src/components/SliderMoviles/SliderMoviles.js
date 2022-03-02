import React from "react";
import { Carousel } from "antd";

import Loading from "../Loading";
import {data} from "../../db/db"

import "./SliderMoviles.css"
export default function SliderMoviles() {

  if ( !data) {
    return <Loading />;
  }

  
  return (
    <Carousel autoplay className="slider-movies">
      {data.map(movil => (
        <Movil key={movil.id} movil={movil} />
      ))}
    </Carousel>
  );
}

function Movil(props) {
  const {
   name, image
  } = props.movil;
 
  return (
    <div
      className="slider-movies__movie"
      style={{ backgroundImage: `url('${image}')` }}
    >
      <div className="slider-movies__movie-info">
        <div>
          <h2>{name}</h2>
        </div>
      </div>
    </div>
  );
}
