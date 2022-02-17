import React from "react";
import { Outlet } from "react-router-dom";

const Products = () => {
  return (
    <>
      <p>[Products]</p>
      <Outlet />
    </>
  );
}

export default Products;