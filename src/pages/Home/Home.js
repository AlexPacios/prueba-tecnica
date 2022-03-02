import React, { useState, useEffect, memo } from "react";
import { Row, Col, Input } from "antd";
import Item from "../../components/Item";
import Pagination from "../../components/Pagination";
import PaginationSearch from "../../components/Pagination";
import useWindowSize from "../../hooks/useWindowSize";
import {
  breakpointUpSm,
  breakpointUpMd,
  breakpointUpLg,
} from "../../utils/breakpoint";

import SliderMoviles from "../../components/SliderMoviles/SliderMoviles";

import { urlApiProducts } from "../../utils/constants";
import "./Home.css";

export default function Search(props) {
  const { addProductCart, mover } = props;
  const [ products, setProducts] = useState([]);
  const [ productsSearch, setProductsSearch] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const [searchValuePrev, setSearchValuePrev] = useState(false);
  const [paginaActual, setPaginaActual] = useState(1);
  const [limite] = useState(20);
  const total = Math.ceil(products.length / limite)
  const totalSearch = Math.ceil(productsSearch.length / limite )

  useEffect(() => {
    (async () => {
      setProductsSearch([]);
      setSearchValuePrev(false)
      const response = await fetch(
        `${urlApiProducts}`
      );
      const movil = await response.json();
      setProducts(movil)
   
    })();
  }, [searchValue]);

  

  const addProductSearch = (val) => {
   
    const idsProducts = productsSearch;
   if(totalSearch === 0) {
    idsProducts.push(val);
   }    
  } ;



  const onChangeSerach = e => {
    setSearchValue(e.target.value);
  };
  const { width } = useWindowSize();

  const getColumnsRender = () => {
    switch (true) {
      case width > breakpointUpLg:
        return 6;
      case width > breakpointUpMd:
        return 8;
      case width > breakpointUpSm:
        return 20;
      default:
        return 24;
    }
  };
 
  return (
    <Row >
      <Col span={12} offset={6} className="search">
        <h1 >Busca Moviles</h1>
        <Input value={searchValue} onChange={onChangeSerach} />
        
      </Col>
      <Col span={24}>
      <SliderMoviles products={products} />
      </Col>
      {
        products.length != 0 && (
      <Col span={24}>  
          {products.filter((val)=>{
           if(val === ''){
            
           return val
           
           }else if(val.brand.toLowerCase().includes(searchValue.toLowerCase())){
       
              searchValue  &&(
                
                  addProductSearch(val) 
               
            )
            
            return val
            
           }else if(val.model.toLowerCase().includes(searchValue.toLowerCase())){
      
        searchValue  &&( 
            addProductSearch(val) 
           )
            return val
           }
          
          }
         
          )
          
          .slice( (paginaActual - 1) * limite, (paginaActual -1) * limite + limite,mover()) 
          .map((product, key) => {
           
            return (
              <Col span={getColumnsRender()}  offset={1}   key={key}>
             <div>
                <Item product={product} addProductCart={addProductCart}  /> 
             </div>
             </Col>
            );
          })
        
          
           }
           
      </Col>
          
        )
      } 
   <Col span={12} offset={6}> 
   {
   searchValue ? (
   <PaginationSearch total={totalSearch} 
      setProductsSearch={setProductsSearch}
       paginaActual={paginaActual} 
       setPaginaActual={setPaginaActual} />  
     ):(

    <Pagination total={total} 
       paginaActual={paginaActual} 
       setPaginaActual={setPaginaActual}
      />     
     )
   }
    
      
      </Col>
    </Row>
  );
}

