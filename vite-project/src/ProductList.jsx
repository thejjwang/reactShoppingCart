import { useState,useEffect } from "react";
import Product from "./Product";
import "./Product.css"


const ProductList = ({productArr, setCart}) => {
    const [products, setProducts] = useState([]);

    useEffect(()=> {
        const fetchProducts = async () => {
            try {
                let response = await fetch('http://localhost:3000/products');
                let data = await response.json();
                setProducts(data);
            } catch (error){
                console.log("error fetching products:" + error)
            }
        }
        fetchProducts()
    }, [])

    

  return (
    <div className="productContainer">
      {products.map((product, index) => (
        <Product setCart={setCart} key={index} product={product}/>
      ))}
    </div>
  );
};

export default ProductList;
