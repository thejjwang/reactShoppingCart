// app component should hold useState and renders ProductList
// should have state for the cart, 
// app will have product arr
// productList only mapping over the products and displaying a product component for each item
// product component will render each single product with name, price, button 
// show cart by having a display component use modal for cart

import { useState } from 'react'
import './App.css'
import ProductList from './ProductList';

let productArr = [];

function App() {
  const [cart, setCart] = useState([]);

  return (
    <>
      <div className='header'>
        <h1>Shopping List</h1>
      </div>
      <ProductList productArr={productArr}/>
      <div className='modal'>
        {/* something to display cart */}
      </div>
    </>
  )
}

export default App
