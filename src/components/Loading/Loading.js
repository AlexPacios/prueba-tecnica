import React from "react";
import { Spinner } from "react-bootstrap";

import "./Loading.css"

export default function Loading() {
  return (
    <div className="loading">
      <Spinner animation="border" role="status" />
      <h5>Cargando...</h5>
    </div>
  );
}
