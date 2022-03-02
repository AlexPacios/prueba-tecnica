import React from "react";
import { Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

import "./Product.css"

export default function Item(props) {
  const { product, addProductCart } = props;

  return (
    
    <Col sm="auto" className="product">
      <Card>
        <Card.Img variant="top" src={`${product.imgUrl}`} />
        <Card.Body>
         <Link to={`/movie/${product.id}`}>
          <Card.Title>{product.brand}</Card.Title>
          </Link>
          <Card.Text>{product.model}</Card.Text>
          <Card.Text>{product.price} € / Unidad</Card.Text>
          <Button onClick={() => addProductCart(product.id, product.model, product)}>
            Añadir al carrito
          </Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
