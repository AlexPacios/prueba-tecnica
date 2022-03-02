import React, { useState,useEffect } from "react";
import {  Button } from "react-bootstrap";

import { Row, Col } from "antd";
import { useParams } from "react-router-dom";
import { getMovilApi } from "../../api/producto"
import { Link } from "react-router-dom";
import "./movil.css"

export default function Movil(props) {
  const {mover, addProductCart} = props
  const { id } = useParams();
  const [datos, setDatosList] = useState([]);
 
  useEffect(() => {
    (async()=>{
      const response = await getMovilApi(id)
      setDatosList(response)
      
    })()
  }, [id]);
 
 
 
  return <RenderMovil datos={datos} mover={mover} addProductCart={addProductCart} />;
}

function RenderMovil(props) {
  const { datos, mover,addProductCart} = props

  return (
   
    <div className="movie"
    style={{ backgroundImage: `url('${datos.imgUrl}')`}}>
    
      <div className="movie__dark" />
      <Row>
        <Col span={8} offset={3} className="movie__poster">
          <PosterMovil datos={datos} />
        </Col>
        <Col span={10} className="movie__info">
          <MovilInfo addProductCart={addProductCart}  datos={datos} mover={mover}/>
          
        </Col>
      </Row>
    </div>
  
  );
}


function PosterMovil(props) {
 
  const { datos } = props
  return <div style={{ backgroundImage: `url('${datos.imgUrl}')`, }} />;
}

function MovilInfo(props) {
  const { datos, mover, addProductCart } = props
  
  return (
    <>
      <div className="movie__info-header">
        <h1>
        {datos.brand}
          <span>{datos.price} € </span>
        </h1>
       
      </div>
      <div className="movie__info-content">
    
     
        <h3>{datos.model}</h3>
        <ul>
          <li>{datos.cpu}</li>
          <li>{datos.ram}</li>
          <li>{datos.os}</li>
          <li>{datos.secondaryCmera}</li>
          <li>{datos.dimentions}</li>
          <li>{datos.battery}</li>
          <li>{datos.displayResolution}</li>
          <li>{datos.weight}</li>
        </ul>
        <Link to="/">
          <div className="product2">
        <Button onClick={() => addProductCart(datos.id, datos.model, datos)}>
           Compra
          </Button>
         <Button onClick={mover} >
           Inicio
          </Button>
          </div>
        </Link>
      </div>
    </>
  );
}
