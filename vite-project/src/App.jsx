// app component should hold useState and renders ProductList
// should have state for the cart, 
// app will have product arr
// productList only mapping over the products and displaying a product component for each item
// product component will render each single product with name, price, button 
// show cart by having a display component use modal for cart

import { useState } from 'react'
import './App.css'
import Product from './Product';
import ProductList from './ProductList';

let productArr = [];

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      
      {productArr.forEach((product) => (
        <Product />
      ))}
    </>
  )
}

export default App
