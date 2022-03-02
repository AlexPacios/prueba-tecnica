import React from "react";
import { Pagination as PaginationSU } from "semantic-ui-react";

import "./Pagination.css"
export default function Pagination(props) {

  const { total, pageActual, setPaginaActual } = props
 
  



  const goToPage = (newPage) => {
    setPaginaActual(newPage);
   
  };

  return (
    <div className="pagination">
      <PaginationSU
        defaultActivePage={pageActual}
        totalPages={total}
        firstItem={null}
        lastItem={null}
        onPageChange={(_, data) => goToPage(data.activePage)}
        boundaryRange={0}
        siblingRange={1}
        ellipsisItem={null}
      />
    </div>
  );
}
