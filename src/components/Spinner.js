import React from "react";
import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div className="text-center">
      <Spinner animation="border" variant="primary" />
      <p>LOADING....</p>
    </div>
  );
}
