import { useState, useEffect } from "react";
import Product from "./Product";
import "./Product.css";

const ProductList = ({ products, setCart }) => {
  return (
    <div className="productContainer">
      {products.map((product, index) => (
        <Product setCart={setCart} key={index} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
