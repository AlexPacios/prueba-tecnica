import React from "react";
import { Container, Navbar} from "react-bootstrap";
import { Link } from "react-router-dom";
import {Avatar} from "antd";
import Cart from "../Cart";

import "./Top.css"



export default function TopMenu(props) {
  const { productsCart, getProductsCart, products } = props;

  return (
    <>
         <Navbar
            bg="dark" 
            variant="dark" 
            className="top-menu" 
           >
      <Container>
        <BrandNav 
        />
        
        <Cart
          productsCart={productsCart}
          getProductsCart={getProductsCart}
          products={products}
         
        />
        
      </Container>
      
    </Navbar>
    
   </>
  );
}

function BrandNav() {
  return (
    <Navbar.Brand>
      <Logo />
    </Navbar.Brand>
  );
}


function Logo() {
  return (
    <Link to="/">
        <Avatar  size={80} src="/logo2.png" alt="movil" />
    </Link>
  );
}