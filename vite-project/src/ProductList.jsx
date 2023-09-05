import { useState, useEffect } from "react";
import Product from "./Product";

const ProductList = ({ products, setCart }) => {
  return (
    <div className="flex flex-wrap justify-center">
      {products.map((product, index) => (
        <div className="bg-white m-4 p-4 rounded-lg shadow-md w-48 flex flex-col justify-center items-center" key={index}>
            <Product setCart={setCart} product={product} />
        </div>
      ))}
    </div>
  );
};

export default ProductList;
