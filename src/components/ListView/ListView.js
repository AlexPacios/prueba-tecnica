import React, {useState} from "react";
import { Row, Col } from "antd";
import useWindowSize from "../../hooks/useWindowSize";
import {
  breakpointUpSm,
  breakpointUpMd,
  breakpointUpLg,
} from "../../utils/breakpoint";
import PaginationHome from "../PaginationHome"
import Item from "../Item";
import Loading from "../Loading";

export default function ListView(props) {
  const {
    mover,
    products: { result, loading },
    addProductCart
  } = props;
  const { width } = useWindowSize();
  const [paginaActual, setPaginaActual] = useState(1);
  const [limite] = useState(10);
  const total = result?.length / limite
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
   <>
      <Row  >
         <Col span={24}>
        {loading || !result ? (
          <Loading />
        ) : (
         result
         .slice((paginaActual - 1) * limite, (paginaActual-1) * limite + limite, mover())
         .map((product) => (
           <>
            <Col span={getColumnsRender()}  offset={1} >
            <Item
              key={product.id}
              product={product}
              addProductCart={addProductCart}
            />
            </Col>

            </>
          )))}
           
       </Col>
      
     

      </Row>
      <PaginationHome
       total={total} 
      paginaActual={paginaActual} 
      setPaginaActual={setPaginaActual}
      
      />
</>
  );
}
