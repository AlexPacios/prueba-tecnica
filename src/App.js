import React, { useState, useEffect} from "react";
import { ToastContainer, toast } from "react-toastify";
import TopMenu from "./components/TopMenu";
import useFetch from "./hooks/useFetch";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { STORAGE_PRODUCTS_CART } from "./utils/constants";
import { urlApiProducts } from "./utils/constants";

// Pages

import Search from "./pages/Home";
import Movil from "./pages/Movil";
import Error404 from "./pages/error404";



export default function App() {
 
    
  const products = useFetch(urlApiProducts, null);
 const [productsCart, setProductsCart] = useState([]);

    useEffect(() => {
      getProductsCart();
    }, []);
 
    const getProductsCart = () => {
      const idsProducts = localStorage.getItem(STORAGE_PRODUCTS_CART);
  
      if (idsProducts) {
        const idsProductsSplit = idsProducts.split(",");
        setProductsCart(idsProductsSplit);
      } else {
        setProductsCart([]);
      }
    };
  
    const addProductCart = (id, modelo) => {
      const idsProducts = productsCart;
      idsProducts.push(id);
      
      setProductsCart(idsProducts);
      localStorage.setItem(STORAGE_PRODUCTS_CART, productsCart);
      getProductsCart();
      toast.success(`${modelo} añadido al carrito correctamente.`);
    };
 
const mover = () =>{
 
 // Mover la pantalla hacia arriba
 const jumbotron = document.querySelector('.jumbotron');
 jumbotron.scrollIntoView({ behavior: 'smooth' })
  
  
}
  return (
   
      <Router>
           <Switch>
            <Route path="/" exact={true}>
            <div className="jumbotron">
            <TopMenu
              productsCart={productsCart}
              getProductsCart={getProductsCart}
              products={products}
            />
            </div>
              <Search mover={mover}  addProductCart={addProductCart}/>
            </Route>
            <Route path="/movie/:id" exact={true}>
            <div className="jumbotron">
            <TopMenu 
              productsCart={productsCart}
              getProductsCart={getProductsCart}
              products={products}
            />
            </div>
              <Movil mover={mover}  addProductCart={addProductCart}/>
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
          <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnVisibilityChange={false}
        draggable
        pauseOnHover={false}
      />
    
      </Router>

  );
}
